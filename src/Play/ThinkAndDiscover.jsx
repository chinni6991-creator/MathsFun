import { useState } from 'react'
import './ThinkAndDiscover.css'

function generatePuzzle() {

  const puzzleTypes = [
    'addition',
    'subtraction',
    'multiplication',
    'doubling'
  ]

  const type =
    puzzleTypes[Math.floor(Math.random() * puzzleTypes.length)]

  let numbers = []
  let answer

  if (type === 'addition') {

    const start = Math.floor(Math.random() * 20) + 1
    const difference = Math.floor(Math.random() * 10) + 2

    numbers = [
      start,
      start + difference,
      start + difference * 2,
      start + difference * 3
    ]

    answer = start + difference * 4
  }


  if (type === 'subtraction') {

    const difference = Math.floor(Math.random() * 8) + 2
    const start = Math.floor(Math.random() * 40) + 40

    numbers = [
      start,
      start - difference,
      start - difference * 2,
      start - difference * 3
    ]

    answer = start - difference * 4
  }


  if (type === 'multiplication') {

    const multiplier = Math.floor(Math.random() * 3) + 2
    const start = Math.floor(Math.random() * 5) + 1

    numbers = [
      start,
      start * multiplier,
      start * multiplier * multiplier,
      start * multiplier * multiplier * multiplier
    ]

    answer =
      start *
      multiplier *
      multiplier *
      multiplier *
      multiplier
  }


  if (type === 'doubling') {

    const start = Math.floor(Math.random() * 10) + 1

    numbers = [
      start,
      start * 2,
      start * 4,
      start * 8
    ]

    answer = start * 16
  }


  return {
    numbers,
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


function ThinkAndDiscover({ onBack }) {

  const [puzzle, setPuzzle] = useState(generatePuzzle())

  const [selectedAnswer, setSelectedAnswer] = useState(null)

  const [score, setScore] = useState(0)


  const options = createOptions(puzzle.answer)


  function handleAnswer(answer) {

    if (selectedAnswer !== null) {
      return
    }

    setSelectedAnswer(answer)

    if (answer === puzzle.answer) {
      setScore(previousScore => previousScore + 1)
    }
  }


  function nextPuzzle() {

    setPuzzle(generatePuzzle())

    setSelectedAnswer(null)
  }


  return (
    <div className="think-discover">

      <button
        className="think-back"
        onClick={onBack}
      >
        ← BACK TO PLAY
      </button>


      <div className="think-content">

        <div className="think-icon">
          🧠
        </div>

        <p className="think-label">
          MATHSFUN • PLAY
        </p>

        <h1>
          Think & Discover
        </h1>

        <p className="think-intro">
          Find the hidden pattern and discover the answer!
        </p>


        <div className="think-score">
          ⭐ Score: {score}
        </div>


        <div className="think-card">

          <p className="pattern-label">
            FIND THE NEXT NUMBER
          </p>


          <div className="number-pattern">

            {puzzle.numbers.map((number, index) => (

              <span key={index}>

                {number}

                <b>
                  →
                </b>

              </span>

            ))}

            <span className="question-mark">
              ?
            </span>

          </div>


          <p className="think-question">
            What number comes next?
          </p>


          <div className="think-options">

            {options.map((option) => (

              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className={
                  selectedAnswer === option
                    ? option === puzzle.answer
                      ? 'think-correct'
                      : 'think-wrong'
                    : ''
                }
              >
                {option}
              </button>

            ))}

          </div>


          {selectedAnswer !== null && (

            <div className="think-feedback">

              {selectedAnswer === puzzle.answer ? (

                <p>
                  🎉 Excellent! You discovered the pattern!
                </p>

              ) : (

                <p>
                  ❌ Not quite! The answer is{' '}
                  <strong>{puzzle.answer}</strong>
                </p>

              )}


              <button
                className="next-puzzle"
                onClick={nextPuzzle}
              >
                NEXT PUZZLE →
              </button>

            </div>

          )}

        </div>

      </div>

    </div>
  )
}


export default ThinkAndDiscover