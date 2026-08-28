import { useState } from 'react'
import './MathsPlayground.css'

function generateQuestion(type) {

  if (type === 'missing') {

    const start = Math.floor(Math.random() * 20) + 1
    const step = Math.floor(Math.random() * 8) + 2

    const numbers = [
      start,
      start + step,
      '?',
      start + step * 3
    ]

    return {
      question: numbers.join('  →  '),
      answer: start + step * 2
    }
  }


  if (type === 'compare') {

    const left = Math.floor(Math.random() * 90) + 10
    const right = Math.floor(Math.random() * 90) + 10

    let answer

    if (left > right) {
      answer = '>'
    } else if (left < right) {
      answer = '<'
    } else {
      answer = '='
    }

    return {
      question: `${left}   ?   ${right}`,
      answer
    }
  }


  if (type === 'builder') {

    const hundreds = Math.floor(Math.random() * 9) + 1
    const tens = Math.floor(Math.random() * 9) + 1
    const ones = Math.floor(Math.random() * 9) + 1

    const answer =
      hundreds * 100 +
      tens * 10 +
      ones

    return {
      question: `${hundreds} hundreds + ${tens} tens + ${ones} ones`,
      answer
    }
  }


  // Quick Calculation

  const num1 = Math.floor(Math.random() * 20) + 1
  const num2 = Math.floor(Math.random() * 20) + 1

  return {
    question: `${num1} + ${num2}`,
    answer: num1 + num2
  }
}


function createOptions(answer, type) {

  const options = new Set()

  options.add(answer)

  if (type === 'compare') {

    options.add('>')
    options.add('<')
    options.add('=')

    return [...options]
  }


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


function MathsPlayground({ onBack }) {

  const [activity, setActivity] = useState(null)

  const [question, setQuestion] = useState(null)

  const [selectedAnswer, setSelectedAnswer] = useState(null)

  const [score, setScore] = useState(0)


  function startActivity(type) {

    setActivity(type)

    setQuestion(generateQuestion(type))

    setSelectedAnswer(null)

    setScore(0)
  }


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

    setQuestion(generateQuestion(activity))

    setSelectedAnswer(null)
  }


  function backToActivities() {

    setActivity(null)

    setQuestion(null)

    setSelectedAnswer(null)

    setScore(0)
  }


  // ACTIVITY SELECTION

  if (!activity) {

    return (
      <div className="maths-playground">

        <button
          className="playground-back"
          onClick={onBack}
        >
          ← BACK TO PLAY
        </button>


        <div className="playground-content">

          <div className="playground-icon">
            🎨
          </div>

          <p className="playground-label">
            MATHSFUN • PLAY
          </p>

          <h1>
            Maths Playground
          </h1>

          <p className="playground-intro">
            Choose a fun Maths activity and explore! ✨
          </p>


          <div className="activity-grid">


            {/* MISSING NUMBER */}

            <div className="activity-card">

              <div className="activity-icon">
                🔢
              </div>

              <h2>
                Missing Number
              </h2>

              <p>
                Discover the number hiding
                in the pattern.
              </p>

              <button
                onClick={() => startActivity('missing')}
              >
                START →
              </button>

            </div>


            {/* GREATER OR SMALLER */}

            <div className="activity-card">

              <div className="activity-icon">
                ⚖️
              </div>

              <h2>
                Greater or Smaller
              </h2>

              <p>
                Compare two numbers and
                choose the correct symbol.
              </p>

              <button
                onClick={() => startActivity('compare')}
              >
                START →
              </button>

            </div>


            {/* NUMBER BUILDER */}

            <div className="activity-card">

              <div className="activity-icon">
                🧱
              </div>

              <h2>
                Number Builder
              </h2>

              <p>
                Build a number using
                hundreds, tens and ones.
              </p>

              <button
                onClick={() => startActivity('builder')}
              >
                START →
              </button>

            </div>


            {/* QUICK CALCULATION */}

            <div className="activity-card">

              <div className="activity-icon">
                ⚡
              </div>

              <h2>
                Quick Calculation
              </h2>

              <p>
                Solve quick calculations
                and sharpen your skills.
              </p>

              <button
                onClick={() => startActivity('quick')}
              >
                START →
              </button>

            </div>


          </div>

        </div>

      </div>
    )
  }


  const options = createOptions(
    question.answer,
    activity
  )


  // ACTIVITY GAME

  return (
    <div className="maths-playground">

      <button
        className="playground-back"
        onClick={backToActivities}
      >
        ← ACTIVITIES
      </button>


      <div className="playground-content">

        <div className="playground-icon">
          🎨
        </div>

        <p className="playground-label">
          MATHSFUN • PLAYGROUND
        </p>


        <h1>
          {activity === 'missing' && 'Missing Number'}

          {activity === 'compare' && 'Greater or Smaller'}

          {activity === 'builder' && 'Number Builder'}

          {activity === 'quick' && 'Quick Calculation'}
        </h1>


        <div className="playground-score">
          ⭐ Score: {score}
        </div>


        <div className="playground-question-card">

          <p className="playground-question-label">
            YOUR CHALLENGE
          </p>


          <h2>
            {question.question}
            {activity === 'quick' && ' = ?'}
          </h2>


          <div className="playground-options">

            {options.map((option) => (

              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className={
                  selectedAnswer === option
                    ? option === question.answer
                      ? 'playground-correct'
                      : 'playground-wrong'
                    : ''
                }
              >
                {option}
              </button>

            ))}

          </div>


          {selectedAnswer !== null && (

            <div className="playground-feedback">

              {selectedAnswer === question.answer ? (

                <p>
                  🎉 Fantastic! That's correct!
                </p>

              ) : (

                <p>
                  ❌ Good try! The answer is{' '}
                  <strong>
                    {question.answer}
                  </strong>
                </p>

              )}


              <button
                className="next-playground"
                onClick={nextQuestion}
              >
                NEXT →
              </button>

            </div>

          )}

        </div>

      </div>

    </div>
  )
}


export default MathsPlayground