import { useEffect, useState } from 'react'
import './MathsBattle.css'

function MathsBattle({ competition, onBack }) {

  const totalQuestions = Number(competition?.questions) || 10
  const timePerQuestion = Number(competition?.time) || 30

  const [questionNumber, setQuestionNumber] = useState(1)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(timePerQuestion)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)

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

  const currentQuestion = questions[(questionNumber - 1) % questions.length]


  // TIMER

  useEffect(() => {

    if (showResult || selectedAnswer !== null) {
      return
    }

    if (timeLeft <= 0) {
      handleNext()
      return
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)

    return () => clearTimeout(timer)

  }, [timeLeft, selectedAnswer, showResult])


  // ANSWER

  const handleAnswer = (answer) => {

    if (selectedAnswer !== null) {
      return
    }

    setSelectedAnswer(answer)

    if (answer === currentQuestion.answer) {
      setScore(score + 10)
    }

  }


  // NEXT QUESTION

  const handleNext = () => {

    if (questionNumber >= totalQuestions) {
      setShowResult(true)
      return
    }

    setQuestionNumber(questionNumber + 1)
    setSelectedAnswer(null)
    setTimeLeft(timePerQuestion)

  }


  // FINAL RESULT

  if (showResult) {

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

          <p className="result-message">
            Great job! You completed the Maths Battle. 🎉
          </p>

          <div className="final-score">

            <span>
              YOUR SCORE
            </span>

            <strong>
              {score}
            </strong>

            <small>
              points
            </small>

          </div>

          <p className="result-progress">
            {totalQuestions} questions completed
          </p>

          <button
            className="battle-back-button"
            onClick={onBack}
          >
            ← BACK TO COMPETE
          </button>

        </div>

      </div>
    )
  }


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

        {/* INFO */}

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
              width: `${(questionNumber / totalQuestions) * 100}%`
            }}
          />

        </div>


        {/* TIMER */}

        <div
          className={`battle-timer ${
            timeLeft <= 5 ? 'timer-warning' : ''
          }`}
        >
          ⏱️ {timeLeft}s
        </div>


        {/* QUESTION CARD */}

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

          {currentQuestion.options.map((option) => {

            let optionClass = 'answer-button'

            if (selectedAnswer !== null) {

              if (option === currentQuestion.answer) {
                optionClass += ' correct'
              }

              if (
                option === selectedAnswer &&
                option !== currentQuestion.answer
              ) {
                optionClass += ' wrong'
              }

            }

            return (
              <button
                key={option}
                className={optionClass}
                onClick={() => handleAnswer(option)}
                disabled={selectedAnswer !== null}
              >
                {option}
              </button>
            )

          })}

        </div>


        {/* FEEDBACK */}

        {selectedAnswer !== null && (

          <div className="answer-feedback">

            {selectedAnswer === currentQuestion.answer ? (
              <p className="correct-message">
                🎉 Correct! +10 points
              </p>
            ) : (
              <p className="wrong-message">
                ❌ Not quite! Correct answer: {currentQuestion.answer}
              </p>
            )}

            <button
              className="next-question-button"
              onClick={handleNext}
            >
              {questionNumber === totalQuestions
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