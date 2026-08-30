import { useEffect, useState } from 'react'
import './MathsBattle.css'
import { supabase } from '../supabase'

function MathsBattle({
  competition,
  onBack,
  playerName
}) {

  const totalQuestions =
    Number(competition?.questions) || 10

  const timePerQuestion =
    Number(competition?.time_per_question) ||
    Number(competition?.time_per_ques) ||
    Number(competition?.time) ||
    30

  const [questionNumber, setQuestionNumber] = useState(1)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(timePerQuestion)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)

  const [finalScores, setFinalScores] = useState({})
  const [winner, setWinner] = useState(null)
  const [savingScore, setSavingScore] = useState(false)
  const [battleFinished, setBattleFinished] = useState(false)

  const questions = [
    {
      question: 'What is 25 + 17?',
      options: ['32', '42', '52', '40'],
      answer: '42'
    },
    {
      question: 'What is 8 × 7?',
      options: ['54', '56', '64', '48'],
      answer: '56'
    },
    {
      question: 'What is 100 ÷ 4?',
      options: ['20', '25', '30', '40'],
      answer: '25'
    },
    {
      question: 'What is 15% of 200?',
      options: ['20', '25', '30', '35'],
      answer: '30'
    },
    {
      question: 'What is 9²?',
      options: ['18', '72', '81', '90'],
      answer: '81'
    },
    {
      question: 'What is 3/4 of 20?',
      options: ['10', '12', '15', '16'],
      answer: '15'
    },
    {
      question: 'If x + 8 = 20, what is x?',
      options: ['10', '12', '14', '16'],
      answer: '12'
    },
    {
      question: 'How many degrees are in a right angle?',
      options: ['45°', '90°', '180°', '360°'],
      answer: '90°'
    },
    {
      question: 'What is 0.5 × 100?',
      options: ['5', '10', '50', '100'],
      answer: '50'
    },
    {
      question: 'What is the next number: 2, 4, 8, 16, ?',
      options: ['20', '24', '30', '32'],
      answer: '32'
    }
  ]

  const currentQuestion =
    questions[(questionNumber - 1) % questions.length]


  // ==========================================
  // SAVE FINAL SCORE
  // ==========================================

  const saveFinalScore = async (finalScore) => {

    if (!competition?.battle_code) {
      return
    }

    setSavingScore(true)

    const name = playerName || 'Host'

    try {

      console.log(
        '💾 Saving score:',
        name,
        finalScore
      )


      // GET LATEST BATTLE
      const { data: battle, error: fetchError } =
        await supabase
          .from('Battles')
          .select('*')
          .eq(
            'battle_code',
            competition.battle_code
          )
          .single()


      if (fetchError || !battle) {

        console.error(
          '❌ Could not fetch battle:',
          fetchError
        )

        return
      }


      // ========================================
      // EXISTING SCORES
      // ========================================

      const currentScores =
        battle.scores &&
        typeof battle.scores === 'object'
          ? battle.scores
          : {}


      // ========================================
      // SAVE THIS PLAYER'S SCORE
      // ========================================

      const updatedScores = {
        ...currentScores,
        [name]: finalScore
      }


      console.log(
        '📊 Updated scores:',
        updatedScores
      )


      // ========================================
      // FIND HOW MANY PLAYERS HAVE FINISHED
      // ========================================

      const participants =
        Array.isArray(battle.participants)
          ? battle.participants
          : []


      const hostName =
  battle.host_name || 'Host'

const participantNames = [
  hostName,
  ...participants
    .map(player => player.name)
    .filter(Boolean)
].filter(
  (name, index, array) =>
    array.indexOf(name) === index
)


      console.log(
        '👥 Participants:',
        participantNames
      )


      const finishedPlayers =
        participantNames.filter(
          player =>
            Object.prototype.hasOwnProperty.call(
              updatedScores,
              player
            )
        )


      console.log(
        '✅ Finished players:',
        finishedPlayers
      )


      // ========================================
      // DETERMINE WHETHER EVERYONE FINISHED
      // ========================================

      const everyoneFinished =
        participantNames.length > 0 &&
        participantNames.every(
          player =>
            Object.prototype.hasOwnProperty.call(
              updatedScores,
              player
            )
        )


      console.log(
        '🏁 Everyone finished:',
        everyoneFinished
      )


      // ========================================
      // ONLY CALCULATE WINNER WHEN EVERYONE
      // HAS FINISHED
      // ========================================

      let winningPlayer = null


      if (everyoneFinished) {

        const entries =
          Object.entries(updatedScores)

        let highestScore = -1

        entries.forEach(
          ([player, playerScore]) => {

            const numericScore =
              Number(playerScore) || 0

            if (
              numericScore > highestScore
            ) {

              highestScore = numericScore
              winningPlayer = player

            }

          }
        )

        console.log(
          '🏆 FINAL WINNER:',
          winningPlayer
        )

      } else {

        console.log(
          '⏳ Waiting for all players to finish...'
        )

      }


      // ========================================
      // SAVE TO SUPABASE
      // ========================================

      const { data: updatedBattle, error: updateError } =
        await supabase
          .from('Battles')
          .update({
            scores: updatedScores,

            // IMPORTANT:
            // Winner stays NULL until
            // everybody finishes.
            winner: winningPlayer
          })
          .eq(
            'battle_code',
            competition.battle_code
          )
          .select()
          .single()


      if (updateError) {

        console.error(
          '❌ Could not save score:',
          updateError
        )

        return
      }


      console.log(
        '🏆 Score saved successfully:',
        updatedBattle
      )


      // ========================================
      // UPDATE LOCAL STATE
      // ========================================

      setFinalScores(
        updatedBattle.scores || {}
      )


      setWinner(
        updatedBattle.winner || null
      )


      setBattleFinished(
        everyoneFinished
      )


      // ========================================
      // LISTEN FOR OPPONENT'S FINAL SCORE
      // ========================================

      if (!everyoneFinished) {

        const waitForOpponent = supabase
          .channel(
            `battle-result-${competition.battle_code}-${name}`
          )
          .on(
            'postgres_changes',
            {
              event: 'UPDATE',
              schema: 'public',
              table: 'Battles',
              filter:
                `battle_code=eq.${competition.battle_code}`
            },
            (payload) => {

              console.log(
                '⚡ Opponent result received:',
                payload.new
              )


              const latestBattle =
                payload.new


              const latestScores =
                latestBattle.scores &&
                typeof latestBattle.scores === 'object'
                  ? latestBattle.scores
                  : {}


              setFinalScores(
                latestScores
              )


              // ==================================
              // CHECK WHETHER EVERYONE FINISHED
              // ==================================

              const allFinished =
                participantNames.length > 0 &&
                participantNames.every(
                  player =>
                    Object.prototype.hasOwnProperty.call(
                      latestScores,
                      player
                    )
                )


              if (allFinished) {

                console.log(
                  '🎉 ALL PLAYERS FINISHED!'
                )


                let finalWinner = null
                let highestScore = -1


                Object.entries(
                  latestScores
                ).forEach(
                  ([player, playerScore]) => {

                    const numericScore =
                      Number(playerScore) || 0


                    if (
                      numericScore >
                      highestScore
                    ) {

                      highestScore =
                        numericScore

                      finalWinner =
                        player

                    }

                  }
                )


                console.log(
                  '🏆 REAL FINAL WINNER:',
                  finalWinner
                )


                setWinner(
                  finalWinner
                )


                setBattleFinished(
                  true
                )


                // Save final winner
                supabase
                  .from('Battles')
                  .update({
                    winner: finalWinner
                  })
                  .eq(
                    'battle_code',
                    competition.battle_code
                  )
                  .then(
                    ({ error }) => {

                      if (error) {

                        console.error(
                          '❌ Could not save winner:',
                          error
                        )

                      }

                    }
                  )


                supabase.removeChannel(
                  waitForOpponent
                )

              }

            }
          )
          .subscribe(
            (status) => {

              console.log(
                '📡 Result listener:',
                status
              )

            }
          )

      }


    } catch (error) {

      console.error(
        '❌ Score saving error:',
        error
      )

    } finally {

      setSavingScore(false)

    }

  }


  // ==========================================
  // TIMER
  // ==========================================

  useEffect(() => {

    if (
      showResult ||
      selectedAnswer !== null
    ) {
      return
    }


    if (timeLeft <= 0) {

      handleNext()

      return
    }


    const timer = setTimeout(
      () => {

        setTimeLeft(
          prev => prev - 1
        )

      },
      1000
    )


    return () =>
      clearTimeout(timer)

  }, [
    timeLeft,
    selectedAnswer,
    showResult
  ])


  // ==========================================
  // ANSWER
  // ==========================================

  const handleAnswer = (answer) => {

    if (
      selectedAnswer !== null
    ) {
      return
    }


    setSelectedAnswer(
      answer
    )


    if (
      answer === currentQuestion.answer
    ) {

      setScore(
        prev => prev + 10
      )

    }

  }


  // ==========================================
  // NEXT QUESTION
  // ==========================================

  const handleNext = async () => {

    if (
      questionNumber >= totalQuestions
    ) {

      // Account for the last answer
      // before React updates score state.

      const lastAnswerWasCorrect =
        selectedAnswer ===
        currentQuestion.answer


      const finalScore =
        lastAnswerWasCorrect
          ? score + 10
          : score


      console.log(
        '🏁 Final score:',
        finalScore
      )


      await saveFinalScore(
        finalScore
      )


      setShowResult(
        true
      )


      return
    }


    setQuestionNumber(
      prev => prev + 1
    )


    setSelectedAnswer(
      null
    )


    setTimeLeft(
      timePerQuestion
    )

  }


  // ==========================================
  // FINAL RESULT
  // ==========================================

  if (showResult) {

    const myName =
      playerName || 'Host'


    const myScore =
      finalScores[myName] ??
      score


    const scoreEntries =
      Object.entries(finalScores)


    return (

      <div className="maths-battle">

        <div className="battle-result">

          <div className="result-trophy">
            🏆
          </div>


          <p className="battle-label">
            MATHSFUN • BATTLE COMPLETE
          </p>


          <h1>
            BATTLE FINISHED!
          </h1>


          {savingScore ? (

            <p className="result-message">
              💾 Saving your result...
            </p>

          ) : battleFinished ? (

            <p className="result-message">
              🎉 Both players have finished the battle!
            </p>

          ) : (

            <p className="result-message">
              ⏳ Your result is saved. Waiting for your opponent to finish...
            </p>

          )}


          {/* YOUR SCORE */}

          <div className="final-score">

            <span>
              YOUR SCORE
            </span>


            <strong>
              {myScore}
            </strong>


            <small>
              points
            </small>

          </div>


          {/* WINNER */}

          {!savingScore &&
            battleFinished &&
            winner && (

            <div className="winner-card">

              <div className="winner-icon">
                🥇
              </div>


              <div>

                <small>
                  BATTLE WINNER
                </small>


                <h2>
                  {winner}
                </h2>


                <p>
                  🎉 Congratulations!
                </p>

              </div>

            </div>

          )}


          {/* WAITING */}

          {!savingScore &&
            !battleFinished && (

            <div className="winner-card">

              <div className="winner-icon">
                ⏳
              </div>


              <div>

                <small>
                  BATTLE STATUS
                </small>


                <h2>
                  Waiting for opponent
                </h2>


                <p>
                  The winner will be announced when everyone finishes.
                </p>

              </div>

            </div>

          )}


          {/* ALL SCORES */}

          {!savingScore &&
            scoreEntries.length > 0 && (

            <div className="all-scores-card">

              <h2>
                🏆 FINAL SCORES
              </h2>


              {scoreEntries
                .sort(
                  (a, b) =>
                    Number(b[1]) -
                    Number(a[1])
                )
                .map(
                  ([name, playerScore], index) => (

                    <div
                      className="score-row"
                      key={name}
                    >

                      <span>

                        {index === 0
                          ? '🥇'
                          : index === 1
                          ? '🥈'
                          : '🏅'}

                      </span>


                      <strong>
                        {name}
                      </strong>


                      <b>
                        {playerScore} pts
                      </b>

                    </div>

                  )
                )}

            </div>

          )}


          <p className="result-progress">
            {totalQuestions} questions completed
          </p>


          {/* BACK */}

          <button
            className="battle-back-button"
            onClick={onBack}
          >
            ← BACK
          </button>

        </div>

      </div>

    )

  }


  // ==========================================
  // BATTLE SCREEN
  // ==========================================

  return (

    <div className="maths-battle">

      {/* TOP BAR */}

      <div className="battle-top">

        <button
          className="battle-exit"
          onClick={onBack}
        >
          ← EXIT
        </button>


        <div className="battle-title">
          🏆 MATHS BATTLE
        </div>


        <div className="battle-score">
          ⭐ {score}
        </div>

      </div>


      {/* BATTLE CONTENT */}

      <div className="battle-content">

        <div className="battle-info">

          <span>
            Question {questionNumber} / {totalQuestions}
          </span>


          <span>
            🎯 {competition?.difficulty || 'Easy'}
          </span>

        </div>


        {/* PROGRESS */}

        <div className="progress-bar">

          <div
            className="progress-fill"
            style={{
              width:
                `${(questionNumber / totalQuestions) * 100}%`
            }}
          />

        </div>


        {/* TIMER */}

        <div
          className={`battle-timer ${
            timeLeft <= 5
              ? 'timer-warning'
              : ''
          }`}
        >
          ⏱️ {timeLeft}s
        </div>


        {/* QUESTION */}

        <div className="question-card">

          <p className="question-number">
            QUESTION {questionNumber}
          </p>


          <h1>
            {currentQuestion.question}
          </h1>

        </div>


        {/* OPTIONS */}

        <div className="answer-options">

          {currentQuestion.options.map(
            (option) => {

              let optionClass =
                'answer-button'


              if (
                selectedAnswer !== null
              ) {

                if (
                  option ===
                  currentQuestion.answer
                ) {

                  optionClass +=
                    ' correct'

                }


                if (
                  option === selectedAnswer &&
                  option !==
                  currentQuestion.answer
                ) {

                  optionClass +=
                    ' wrong'

                }

              }


              return (

                <button
                  key={option}
                  className={optionClass}
                  onClick={() =>
                    handleAnswer(option)
                  }
                  disabled={
                    selectedAnswer !== null
                  }
                >
                  {option}
                </button>

              )

            }
          )}

        </div>


        {/* FEEDBACK */}

        {selectedAnswer !== null && (

          <div className="answer-feedback">

            {selectedAnswer ===
            currentQuestion.answer ? (

              <p className="correct-message">
                🎉 Correct! +10 points
              </p>

            ) : (

              <p className="wrong-message">
                ❌ Not quite!
                Correct answer:
                {' '}
                {currentQuestion.answer}
              </p>

            )}


            <button
              className="next-question-button"
              onClick={handleNext}
            >

              {questionNumber ===
              totalQuestions

                ? '🏆 FINISH BATTLE'

                : 'NEXT QUESTION →'}

            </button>

          </div>

        )}

      </div>

    </div>

  )
}

export default MathsBattle