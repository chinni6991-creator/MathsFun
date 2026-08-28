import { useState, useMemo } from 'react'
import './SolveIt.css'

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


function SolveIt({ onBack }) {

  const [question, setQuestion] = useState(generateQuestion())

  const [selectedAnswer, setSelectedAnswer] = useState(null)

  const [score, setScore] = useState(0)


  // Options are created only when the question changes
  const options = useMemo(() => {
    return createOptions(question.answer)
  }, [question])


  function handleAnswer(answer) {

    if (selectedAnswer !== null) {
      return
    }

    setSelectedAnswer(answer)

    if (answer === question.answer) {
      setScore(previousScore => previousScore + 1)
    }
  }


  function nextQuestion() {

    setQuestion(generateQuestion())

    setSelectedAnswer(null)
  }


  return (
    <div className="solve-it">

      <button
        className="solve-back"
        onClick={onBack}
      >
        ← BACK TO PLAY
      </button>


      <div className="solve-content">

        <div className="solve-icon">
          🧩
        </div>

        <p className="solve-label">
          MATHSFUN • PLAY
        </p>

        <h1>Solve It!</h1>

        <p className="solve-intro">
          Solve the random Maths question!
        </p>


        <div className="score-box">
          ⭐ Score: {score}
        </div>


        <div className="question-card">

          <p className="question-label">
            QUESTION
          </p>

          <h2>
            {question.question} = ?
          </h2>


          <div className="answer-options">

            {options.map((option) => (

              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className={
                  selectedAnswer === option
                    ? option === question.answer
                      ? 'correct-answer'
                      : 'wrong-answer'
                    : ''
                }
              >
                {option}
              </button>

            ))}

          </div>


          {selectedAnswer !== null && (

            <div className="answer-feedback">

              {selectedAnswer === question.answer ? (

                <p>
                  🎉 Correct! Great job!
                </p>

              ) : (

                <p>
                  ❌ Not quite! The answer is{' '}
                  <strong>{question.answer}</strong>
                </p>

              )}


              <button
                className="next-question"
                onClick={nextQuestion}
              >
                NEXT QUESTION →
              </button>

            </div>

          )}

        </div>

      </div>

    </div>
  )
}

export default SolveIt