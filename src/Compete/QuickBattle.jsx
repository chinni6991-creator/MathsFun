import { useEffect, useState } from 'react'
import './QuickBattle.css'

const questions = [
  {
    question: 'What is 7 + 8?',
    options: ['13', '14', '15', '16'],
    answer: '15'
  },
  {
    question: 'What is 9 × 6?',
    options: ['45', '54', '56', '63'],
    answer: '54'
  },
  {
    question: 'What is 72 ÷ 8?',
    options: ['7', '8', '9', '10'],
    answer: '9'
  },
  {
    question: 'What is 25 − 13?',
    options: ['10', '11', '12', '13'],
    answer: '12'
  },
  {
    question: 'What is 12 × 4?',
    options: ['36', '42', '48', '52'],
    answer: '48'
  },
  {
    question: 'What is 100 ÷ 10?',
    options: ['5', '10', '20', '25'],
    answer: '10'
  },
  {
    question: 'What is 15 + 17?',
    options: ['30', '31', '32', '33'],
    answer: '32'
  },
  {
    question: 'What is 81 − 29?',
    options: ['50', '51', '52', '53'],
    answer: '52'
  },
  {
    question: 'What is 11 × 5?',
    options: ['45', '50', '55', '60'],
    answer: '55'
  },
  {
    question: 'What is 64 ÷ 8?',
    options: ['6', '7', '8', '9'],
    answer: '8'
  }
]

function QuickBattle({ onBack }) {

  const [started, setStarted] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(10)
  const [finished, setFinished] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(null)

  useEffect(() => {

    if (!started || finished) {
      return
    }

    if (timeLeft === 0) {
      nextQuestion()
      return
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)

    return () => clearTimeout(timer)

  }, [started, timeLeft, finished])


  function startBattle() {
    setStarted(true)
    setCurrentQuestion(0)
    setScore(0)
    setTimeLeft(10)
    setFinished(false)
    setSelectedAnswer(null)
  }


  function nextQuestion() {

    setSelectedAnswer(null)

    if (currentQuestion === questions.length - 1) {
      setFinished(true)
      return
    }

    setCurrentQuestion(currentQuestion + 1)
    setTimeLeft(10)
  }


  function handleAnswer(option) {

    if (selectedAnswer !== null) {
      return
    }

    setSelectedAnswer(option)

    if (option === questions[currentQuestion].answer) {
      setScore(prevScore => prevScore + 1)
    }

    setTimeout(() => {
      nextQuestion()
    }, 700)
  }


  /* READY SCREEN */

  if (!started) {

    return (
      <div className="quick-battle">

        <button
          className="quick-back"
          onClick={onBack}
        >
          ← BACK
        </button>

        <div className="quick-battle-content">

          <div className="quick-icon">
            🥊
          </div>

          <p className="quick-label">
            MATHSFUN • QUICK BATTLE
          </p>

          <h1>READY?</h1>

          <p className="quick-intro">
            Solve as many Maths questions as you can! 🔥
          </p>

          <div className="battle-rules">

            <div>
              ⏱️
              <span>10 seconds</span>
            </div>

            <div>
              ❓
              <span>10 questions</span>
            </div>

            <div>
              ⭐
              <span>1 point each</span>
            </div>

          </div>

          <button
            className="start-quick-button"
            onClick={startBattle}
          >
            START →
          </button>

        </div>

      </div>
    )
  }


  /* RESULT SCREEN */

  if (finished) {

    return (
      <div className="quick-battle">

        <div className="quick-battle-content">

          <div className="result-icon">
            🏆
          </div>

          <p className="quick-label">
            MATHSFUN • QUICK BATTLE
          </p>

          <h1>GREAT JOB!</h1>

          <div className="final-score">
            {score} / {questions.length}
          </div>

          <p className="result-message">

            {score === 10
              ? 'Perfect! You are a Maths Champion! 🔥'
              : score >= 7
                ? 'Excellent work! Keep it up! 🌟'
                : score >= 5
                  ? 'Good job! You can do even better! 💪'
                  : 'Keep practising. You will get there! 🚀'
            }

          </p>

          <div className="result-buttons">

            <button
              className="start-quick-button"
              onClick={startBattle}
            >
              PLAY AGAIN →
            </button>

            <button
              className="result-back-button"
              onClick={onBack}
            >
              ← BACK
            </button>

          </div>

        </div>

      </div>
    )
  }


  /* GAME SCREEN */

  const question = questions[currentQuestion]

  return (
    <div className="quick-battle">

      <button
        className="quick-back"
        onClick={onBack}
      >
        ← EXIT
      </button>

      <div className="game-container">

        <div className="game-top">

          <div className="question-number">
            Question {currentQuestion + 1} / {questions.length}
          </div>

          <div className="score">
            ⭐ {score}
          </div>

          <div className="timer">
            ⏱️ {timeLeft}s
          </div>

        </div>


        <div className="progress-bar">

          <div
            className="progress-fill"
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`
            }}
          />

        </div>


        <div className="question-card">

          <p className="question-label">
            SOLVE THIS!
          </p>

          <h2>
            {question.question}
          </h2>

          <div className="answer-options">

            {question.options.map((option) => (

              <button
                key={option}
                className={`answer-button ${
                  selectedAnswer === option
                    ? option === question.answer
                      ? 'correct'
                      : 'wrong'
                    : ''
                }`}
                onClick={() => handleAnswer(option)}
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

export default QuickBattle