import { useState } from 'react'
import './Numbers.css'

function Numbers({ onBack }) {
  const [selectedNumber, setSelectedNumber] = useState(null)
  const [primeCheck, setPrimeCheck] = useState(null)
  const [challengeAnswer, setChallengeAnswer] = useState(null)

  const numberTypes = [
    {
      icon: '🌱',
      title: 'Natural Numbers',
      numbers: '1, 2, 3, 4, 5...',
      text: 'These are the numbers we commonly use for counting.',
    },
    {
      icon: '🟢',
      title: 'Whole Numbers',
      numbers: '0, 1, 2, 3, 4...',
      text: 'Whole numbers include all natural numbers and zero.',
    },
    {
      icon: '↔️',
      title: 'Integers',
      numbers: '...−3, −2, −1, 0, 1, 2, 3...',
      text: 'Integers include positive numbers, negative numbers and zero.',
    },
  ]

  const numberLine = [-3, -2, -1, 0, 1, 2, 3]

  const placeValues = [
    { digit: '4', place: 'Ten Thousands', value: '40,000' },
    { digit: '5', place: 'Thousands', value: '5,000' },
    { digit: '6', place: 'Hundreds', value: '600' },
    { digit: '7', place: 'Tens', value: '70' },
    { digit: '2', place: 'Ones', value: '2' },
  ]

  const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19]

  const primeCheckNumbers = [4, 5, 8, 11, 15, 17]

  const isPrime = (number) => {
    if (number < 2) return false

    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false
      }
    }

    return true
  }

  const handlePrimeCheck = (number) => {
    setPrimeCheck(number)
  }

  const handleChallenge = (number) => {
    setChallengeAnswer(number)
  }

  return (
    <div className="numbers-topic">

      {/* =================================
          FLOATING BACKGROUND
      ================================= */}

      <div className="numbers-floating" aria-hidden="true">
        <span>1</span>
        <span>+</span>
        <span>7</span>
        <span>π</span>
        <span>3</span>
        <span>∞</span>
        <span>9</span>
        <span>0</span>
        <span>×</span>
        <span>2</span>
        <span>√</span>
        <span>∑</span>
      </div>


      {/* =================================
          BACK BUTTON
      ================================= */}

      <button className="numbers-back" onClick={onBack}>
        ← BACK TO LEARN
      </button>


      <main className="numbers-content">


        {/* =================================
            HERO
        ================================= */}

        <section className="numbers-header">

          <div className="numbers-hero-icon">
            🔢
          </div>

          <p className="numbers-label">
            MATHEMATICS • LEVEL UP
          </p>

          <h1>
            Numbers & Number System
          </h1>

          <p className="numbers-intro">
            Numbers are everywhere! Let's discover how they work,
            how they are organized, and how we use them every day.
          </p>

          <div className="scroll-hint">
            <span>↓</span>
            Scroll to explore
          </div>

        </section>


        {/* =================================
            WHAT ARE NUMBERS
        ================================= */}

        <section className="number-section reveal-card">

          <div className="section-title">

            <span className="section-icon">
              🌟
            </span>

            <div>
              <h2>
                What are Numbers?
              </h2>

              <p className="section-tag">
                THE BASICS
              </p>
            </div>

          </div>

          <p>
            Numbers help us <strong>count, measure, compare</strong> and
            describe things around us.
          </p>


          <div className="real-life-grid">

            <div className="real-life-card">
              <span>🍎</span>
              <strong>5</strong>
              <small>Apples</small>
            </div>

            <div className="real-life-card">
              <span>👩‍🎓</span>
              <strong>30</strong>
              <small>Students</small>
            </div>

            <div className="real-life-card">
              <span>💰</span>
              <strong>₹100</strong>
              <small>Money</small>
            </div>

            <div className="real-life-card">
              <span>⏰</span>
              <strong>7:30</strong>
              <small>Time</small>
            </div>

          </div>

        </section>


        {/* =================================
            TYPES OF NUMBERS
        ================================= */}

        <section className="number-section reveal-card">

          <div className="section-title">

            <span className="section-icon">
              🔢
            </span>

            <div>
              <h2>
                Different Types of Numbers
              </h2>

              <p className="section-tag">
                EXPLORE
              </p>
            </div>

          </div>

          <p>
            Numbers can be grouped into different types.
            Tap a card to learn more.
          </p>


          <div className="number-types">

            {numberTypes.map((type) => (

              <button
                className={`number-type-card ${
                  selectedNumber === type.title ? 'selected' : ''
                }`}
                key={type.title}
                onClick={() => setSelectedNumber(type.title)}
              >

                <span className="type-icon">
                  {type.icon}
                </span>

                <h3>
                  {type.title}
                </h3>

                <div className="type-numbers">
                  {type.numbers}
                </div>

                <span className="tap-label">

                  {selectedNumber === type.title
                    ? '✓ SELECTED'
                    : 'TAP TO EXPLORE'}

                </span>

              </button>

            ))}

          </div>


          {selectedNumber && (

            <div className="selected-explanation">

              <span className="explanation-icon">
                💡
              </span>

              <div>

                <strong>
                  {selectedNumber}
                </strong>

                <p>
                  {
                    numberTypes.find(
                      (type) => type.title === selectedNumber
                    )?.text
                  }
                </p>

              </div>

            </div>

          )}

        </section>


        {/* =================================
            NUMBER LINE
        ================================= */}

        <section className="number-section reveal-card">

          <div className="section-title">

            <span className="section-icon">
              📍
            </span>

            <div>
              <h2>
                Explore the Number Line
              </h2>

              <p className="section-tag">
                VISUAL LEARNING
              </p>
            </div>

          </div>

          <p>
            Numbers increase as we move to the right and decrease
            as we move to the left.
          </p>


          <div className="number-line-box">

            <div className="number-line">

              {numberLine.map((number) => (

                <div
                  className={`number-point ${
                    number === 0 ? 'zero-point' : ''
                  }`}
                  key={number}
                >

                  <span>
                    {number}
                  </span>

                </div>

              ))}

            </div>


            <div className="number-line-direction">

              <span>
                ← Negative Numbers
              </span>

              <span>
                Positive Numbers →
              </span>

            </div>

          </div>

        </section>


        {/* =================================
            PLACE VALUE
        ================================= */}

        <section className="number-section reveal-card">

          <div className="section-title">

            <span className="section-icon">
              🔟
            </span>

            <div>

              <h2>
                Understanding Place Value
              </h2>

              <p className="section-tag">
                DIGIT POWER
              </p>

            </div>

          </div>

          <p>
            Every digit in a number has a different value depending
            on its position.
          </p>


          <div className="big-number">
            45672
          </div>


          <div className="place-value-grid">

            {placeValues.map((item) => (

              <div
                className="place-card"
                key={item.place}
              >

                <div className="place-digit">
                  {item.digit}
                </div>

                <strong>
                  {item.place}
                </strong>

                <span>
                  {item.value}
                </span>

              </div>

            ))}

          </div>


          <div className="place-summary">
            40,000 + 5,000 + 600 + 70 + 2 =
            <strong> 45,672</strong>
          </div>

        </section>


        {/* =================================
            FACTORS
        ================================= */}

        <section className="number-section reveal-card">

          <div className="section-title">

            <span className="section-icon">
              🧩
            </span>

            <div>

              <h2>
                Factors of a Number
              </h2>

              <p className="section-tag">
                DISCOVER
              </p>

            </div>

          </div>

          <p>
            Factors are numbers that divide another number exactly,
            leaving no remainder.
          </p>


          <div className="factor-area">

            <div className="factor-main">
              12
            </div>


            <div className="factor-pairs">

              <div className="factor-pair">
                <span>1</span>
                <b>×</b>
                <span>12</span>
                <strong>= 12</strong>
              </div>

              <div className="factor-pair">
                <span>2</span>
                <b>×</b>
                <span>6</span>
                <strong>= 12</strong>
              </div>

              <div className="factor-pair">
                <span>3</span>
                <b>×</b>
                <span>4</span>
                <strong>= 12</strong>
              </div>

            </div>

          </div>


          <div className="highlight-text">
            ✨ Factors of 12:
            <strong> 1, 2, 3, 4, 6 and 12</strong>
          </div>

        </section>


        {/* =================================
            PRIME NUMBERS
        ================================= */}

        <section className="number-section reveal-card">

          <div className="section-title">

            <span className="section-icon">
              ⭐
            </span>

            <div>

              <h2>
                Prime Numbers
              </h2>

              <p className="section-tag">
                NUMBER STARS
              </p>

            </div>

          </div>

          <p>
            A prime number has exactly <strong>two factors</strong>:
            1 and itself.
          </p>


          <div className="prime-grid">

            {primeNumbers.map((number) => (

              <button
                className={`prime-number ${
                  primeCheck === number ? 'prime-selected' : ''
                }`}
                key={number}
                onClick={() => handlePrimeCheck(number)}
              >
                {number}

                {primeCheck === number && (
                  <span className="prime-check">
                    ✓
                  </span>
                )}

              </button>

            ))}

          </div>


          <p className="prime-instruction">
            👆 Tap any number above to check it
          </p>


          {/* PRIME CHECKER */}

          <div className="prime-checker">

            <div className="checker-title">
              🔍 Prime Number Checker
            </div>

            {primeCheck === null ? (

              <p>
                Select a number to find out whether it is prime.
              </p>

            ) : isPrime(primeCheck) ? (

              <div className="prime-result correct-result">

                <div className="result-icon">
                  ✓
                </div>

                <div>

                  <strong>
                    {primeCheck} is Prime!
                  </strong>

                  <p>
                    {primeCheck} has exactly two factors:
                    1 and {primeCheck}.
                  </p>

                </div>

              </div>

            ) : (

              <div className="prime-result wrong-result">

                <div className="result-icon">
                  ✕
                </div>

                <div>

                  <strong>
                    {primeCheck} is Not Prime
                  </strong>

                  <p>
                    {primeCheck} has more than two factors.
                  </p>

                </div>

              </div>

            )}

          </div>


          <div className="highlight-text">
            ⭐ Example: 7 is prime because its only factors are
            <strong> 1 and 7.</strong>
          </div>

        </section>


        {/* =================================
            PRIME NUMBER CHECK ACTIVITY
        ================================= */}

        <section className="number-section reveal-card">

          <div className="section-title">

            <span className="section-icon">
              🧠
            </span>

            <div>

              <h2>
                Is It Prime?
              </h2>

              <p className="section-tag">
                TRY IT YOURSELF
              </p>

            </div>

          </div>

          <p>
            Tap a number and check whether it is a prime number.
          </p>


          <div className="prime-activity">

            {primeCheckNumbers.map((number) => {

              const selected = primeCheck === number
              const prime = isPrime(number)

              return (

                <button
                  key={number}
                  className={`activity-number ${
                    selected
                      ? prime
                        ? 'activity-correct'
                        : 'activity-wrong'
                      : ''
                  }`}
                  onClick={() => handlePrimeCheck(number)}
                >

                  <span>
                    {number}
                  </span>

                  {selected && (
                    <small>
                      {prime ? 'PRIME ✓' : 'NOT PRIME ✕'}
                    </small>
                  )}

                </button>

              )

            })}

          </div>

        </section>


        {/* =================================
            EVERYDAY LIFE
        ================================= */}

        <section className="number-section reveal-card">

          <div className="section-title">

            <span className="section-icon">
              🌍
            </span>

            <div>

              <h2>
                Numbers in Everyday Life
              </h2>

              <p className="section-tag">
                REAL WORLD MATHS
              </p>

            </div>

          </div>


          <div className="everyday-grid">

            <div className="everyday-card">
              <span>💰</span>
              <strong>Money</strong>
              <small>₹500</small>
            </div>

            <div className="everyday-card">
              <span>🌡️</span>
              <strong>Temperature</strong>
              <small>25°C</small>
            </div>

            <div className="everyday-card">
              <span>📏</span>
              <strong>Distance</strong>
              <small>5 km</small>
            </div>

            <div className="everyday-card">
              <span>📅</span>
              <strong>Date</strong>
              <small>26 August</small>
            </div>

          </div>

        </section>


        {/* =================================
            MINI CHALLENGE
        ================================= */}

        <section className="challenge-box">

          <div className="challenge-icon">
            🎯
          </div>

          <p className="challenge-label">
            MINI CHALLENGE
          </p>

          <h2>
            Which one is a prime number?
          </h2>

          <p>
            Think carefully and choose your answer!
          </p>


          <div className="challenge-options">

            {[12, 17, 21, 25].map((number) => {

              const isCorrect = number === 17
              const isSelected = challengeAnswer === number

              return (

                <button
                  key={number}
                  className={`challenge-option ${
                    isSelected
                      ? isCorrect
                        ? 'correct'
                        : 'wrong'
                      : ''
                  }`}
                  onClick={() => handleChallenge(number)}
                >

                  <span>
                    {number}
                  </span>

                  {isSelected && (
                    <span className="challenge-mark">
                      {isCorrect ? '✓' : '✕'}
                    </span>
                  )}

                </button>

              )

            })}

          </div>


          {challengeAnswer !== null && (

            <div
              className={`challenge-feedback ${
                challengeAnswer === 17
                  ? 'success'
                  : 'error'
              }`}
            >

              {challengeAnswer === 17
                ? '🎉 Correct! 17 is a prime number because it has only two factors: 1 and 17.'
                : '💭 Not quite! Try again. Remember, a prime number has exactly two factors.'}

            </div>

          )}

        </section>


        {/* =================================
            END
        ================================= */}

        <section className="lesson-end">

          <div className="end-stars">
            ✨ ⭐ ✨
          </div>

          <div className="end-icon">
            🎉
          </div>

          <h2>
            Great Job!
          </h2>

          <p>
            You've taken your first step into the wonderful
            world of numbers.
          </p>

          <span className="end-message">
            Keep exploring. Keep discovering. Keep learning! 🚀
          </span>

        </section>

      </main>

    </div>
  )
}

export default Numbers