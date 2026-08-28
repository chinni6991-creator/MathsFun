import { useEffect, useMemo, useState } from 'react'
import './BeatTheClock.css'

function generateQuestion() {

  const operations = ['+', '-', '×', '÷']

  const operation =
    operations[Math.floor(Math.random() * operations.length)]

  let num1
  let num2
  let answer

  if (operation === '+') {
    num1 = Math.floor(Math.random() * 90) + 10
    num2 = Math.floor(Math.random() * 90) + 10
    answer = num1 + num2
  }

  if (operation === '-') {
    num1 = Math.floor(Math.random() * 90) + 10
    num2 = Math.floor(Math.random() * (num1 - 1)) + 1
    answer = num1 - num2
  }

  if (operation === '×') {
    num1 = Math.floor(Math.random() * 12) + 1
    num2 = Math.floor(Math.random() * 12) + 1
    answer = num1 * num2
  }

  if (operation === '÷') {
    num2 = Math.floor(Math.random() * 12) + 1
    answer = Math.floor(Math.random() * 12) + 1
    num1 = num2 * answer
  }

  return {
    question: `${num1} ${operation} ${num2}`,
    answer
  }
}


function createOptions(answer) {

  const options = new Set()

  options.add(answer)

  while (options.size < 4) {

    const difference =
      Math.floor(Math.random() * 10) + 1

    const randomAnswer =
      Math.random() > 0.5
        ? answer + difference
        : answer - difference

    if (randomAnswer >= 0) {
      options.add(randomAnswer)
    }
  }

  return [...options].sort(() => Math.random() - 0.5)
}


function BeatTheClock({ onBack }) {

  const [question, setQuestion] = useState(generateQuestion())

  const [selectedAnswer, setSelectedAnswer] = useState(null)

  const [score, setScore] = useState(0)

  const [timeLeft, setTimeLeft] = useState(60)

  const [gameOver, setGameOver] = useState(false)


  /*
    IMPORTANT:
    Options are generated only when the question changes.
    The timer changing will NOT change the options.
  */

  const options = useMemo(() => {
    return createOptions(question.answer)
  }, [question])


  // TIMER

  useEffect(() => {

    if (gameOver) {
      return
    }

    if (timeLeft <= 0) {
      setGameOver(true)
      return
    }

    const timer = setInterval(() => {

      setTimeLeft(previousTime => previousTime - 1)

    }, 1000)

    return () => clearInterval(timer)

  }, [timeLeft, gameOver])


  // ANSWER

  function handleAnswer(answer) {

    if (selectedAnswer !== null || gameOver) {
      return
    }

    setSelectedAnswer(answer)

    if (answer === question.answer) {
      setScore(previousScore => previousScore + 1)
    }

    setTimeout(() => {

      setQuestion(generateQuestion())
      setSelectedAnswer(null)

    }, 500)
  }


  // RESTART

  function restartGame() {

    setQuestion(generateQuestion())

    setSelectedAnswer(null)

    setScore(0)

    setTimeLeft(60)

    setGameOver(false)
  }


  // GAME OVER

  if (gameOver) {

    return (
      <div className="beat-clock">

        <button
          className="clock-back"
          onClick={onBack}
        >
          ← BACK TO PLAY
        </button>


        <div className="clock-content">

          <div className="clock-icon">
            🏁
          </div>

          <p className="clock-label">
            MATHSFUN • PLAY
          </p>

          <h1>Time's Up!</h1>

          <p className="clock-result">
            Great effort! 🎉
          </p>


          <div className="final-score">

            ⭐ Your Score

            <strong>
              {score}
            </strong>

          </div>


          <button
            className="play-again-button"
            onClick={restartGame}
          >
            🔄 PLAY AGAIN
          </button>

        </div>

      </div>
    )
  }


  // MAIN GAME

  return (
    <div className="beat-clock">

      <button
        className="clock-back"
        onClick={onBack}
      >
        ← BACK TO PLAY
      </button>


      <div className="clock-content">

        <div className="clock-icon">
          ⚡
        </div>

        <p className="clock-label">
          MATHSFUN • PLAY
        </p>

        <h1>Beat the Clock</h1>

        <p className="clock-intro">
          How many can you solve before time runs out?
        </p>


        <div className="clock-stats">

          <div className="clock-stat">
            ⏱️
            <span>
              {timeLeft}s
            </span>
          </div>


          <div className="clock-stat">
            ⭐
            <span>
              {score}
            </span>
          </div>

        </div>


        <div className="clock-question-card">

          <p className="clock-question-label">
            SOLVE QUICKLY!
          </p>


          <h2>
            {question.question} = ?
          </h2>


          <div className="clock-options">

            {options.map((option) => (

              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className={
                  selectedAnswer === option
                    ? option === question.answer
                      ? 'clock-correct'
                      : 'clock-wrong'
                    : ''
                }
              >
                {option}
              </button>

            ))}

          </div>

        </div>

      </div>

    </div>
  )
}


export default BeatTheClock