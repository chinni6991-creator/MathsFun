import './NumberPlay.css'

function NumberPlay({ onBack }) {
  return (
    <div className="numberplay-topic">

      <button className="numberplay-back" onClick={onBack}>
        ← BACK TO LEARN
      </button>

      <div className="numberplay-content">

        <div className="numberplay-icon">
          🎲
        </div>

        <p className="numberplay-label">
          MATHS • LEARN
        </p>

        <h1>Number Play</h1>

        <p className="numberplay-intro">
          Have fun exploring numbers, patterns and mathematical puzzles!
        </p>

        {/* NUMBER PATTERNS */}

        <section className="numberplay-section">

          <h2>🔢 Number Patterns</h2>

          <p>
            Numbers can follow interesting patterns.
            Look carefully and find what comes next!
          </p>

          <div className="numberplay-example">
            2, 4, 6, 8, <strong>10</strong>
          </div>

          <p>
            Here we are adding <strong>2</strong> each time.
          </p>

        </section>

        {/* ODD AND EVEN */}

        <section className="numberplay-section">

          <h2>⚡ Odd & Even Numbers</h2>

          <div className="numberplay-cards">

            <div className="numberplay-card">
              <h3>🟢 Even</h3>
              <p>2, 4, 6, 8, 10...</p>
            </div>

            <div className="numberplay-card">
              <h3>🔵 Odd</h3>
              <p>1, 3, 5, 7, 9...</p>
            </div>

          </div>

        </section>

        {/* NUMBER PUZZLE */}

        <section className="numberplay-section">

          <h2>🧩 Number Puzzle</h2>

          <p>
            Can you find the missing number?
          </p>

          <div className="numberplay-puzzle">
            5, 10, 15, ❓, 25
          </div>

          <p>
            The pattern increases by <strong>5</strong>.
          </p>

          <div className="numberplay-answer">
            Answer: <strong>20</strong>
          </div>

        </section>

        {/* MAGIC NUMBER */}

        <section className="numberplay-section">

          <h2>✨ Magic Number</h2>

          <p>
            Choose a number and perform simple operations.
            Sometimes mathematics can produce surprising results!
          </p>

          <div className="numberplay-example">
            5 × 2 = 10
            <br />
            10 + 5 = <strong>15</strong>
          </div>

        </section>

        {/* NUMBER LINE */}

        <section className="numberplay-section">

          <h2>📏 Jump on the Number Line</h2>

          <p>
            Number lines help us understand how numbers move forward
            and backward.
          </p>

          <div className="numberplay-line">
            0 ─ 1 ─ 2 ─ 3 ─ <strong>4</strong> ─ 5 ─ 6 ─ 7 ─ 8
          </div>

          <p>
            Start at 4 and move 3 steps forward → <strong>7</strong>
          </p>

        </section>

        {/* EVERYDAY LIFE */}

        <section className="numberplay-section">

          <h2>🌟 Numbers Around Us</h2>

          <div className="numberplay-story">

            <div className="story-icon">
              🚌
            </div>

            <p>
              We see numbers everywhere — bus numbers,
              house numbers, prices, dates and scores.
            </p>

            <div className="numberplay-highlight">
              Numbers are part of our everyday life!
            </div>

          </div>

        </section>

        {/* CHALLENGE */}

        <section className="numberplay-section challenge">

          <div className="challenge-icon">
            🎯
          </div>

          <h2>Mini Challenge</h2>

          <p>
            Can you solve these?
          </p>

          <div className="numberplay-question">

            <p>1. What comes next? 3, 6, 9, 12, ❓</p>

            <p>2. Is 27 odd or even? ❓</p>

            <p>3. What number is missing? 10, 20, ❓, 40</p>

          </div>

        </section>

      </div>

    </div>
  )
}

export default NumberPlay