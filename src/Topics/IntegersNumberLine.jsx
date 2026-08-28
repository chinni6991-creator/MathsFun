import './IntegersNumberLine.css'

function IntegersNumberLine({ onBack }) {
  return (
    <div className="integers-topic">

      <button className="integers-back" onClick={onBack}>
        ← BACK TO LEARN
      </button>

      <div className="integers-content">

        <div className="integers-icon">
          🔢
        </div>

        <p className="integers-label">
          MATHS • LEARN
        </p>

        <h1>Integers & Number Line</h1>

        <p className="integers-intro">
          Explore positive numbers, negative numbers and their positions!
        </p>

        {/* WHAT ARE INTEGERS */}

        <section className="integers-section">

          <h2>🔢 What are Integers?</h2>

          <p>
            Integers are whole numbers that include positive numbers,
            negative numbers and zero.
          </p>

          <div className="integers-example">
            ..., −3, −2, −1, 0, 1, 2, 3, ...
          </div>

          <div className="integer-cards">

            <div className="integer-card">
              <h3>➕ Positive</h3>
              <p>1, 2, 3, 4, 5...</p>
            </div>

            <div className="integer-card">
              <h3>0️⃣ Zero</h3>
              <p>Neither positive nor negative</p>
            </div>

            <div className="integer-card">
              <h3>➖ Negative</h3>
              <p>−1, −2, −3, −4...</p>
            </div>

          </div>

        </section>

        {/* NUMBER LINE */}

        <section className="integers-section">

          <h2>📏 The Number Line</h2>

          <p>
            A number line shows the position and order of integers.
          </p>

          <div className="integer-number-line">
            −5 ─ −4 ─ −3 ─ −2 ─ −1 ─ 0 ─ 1 ─ 2 ─ 3 ─ 4 ─ 5
          </div>

          <p>
            Numbers increase as we move to the right
            and decrease as we move to the left.
          </p>

        </section>

        {/* COMPARING INTEGERS */}

        <section className="integers-section">

          <h2>⚖️ Comparing Integers</h2>

          <p>
            On a number line, the number on the right is always greater.
          </p>

          <div className="integers-example">
            −2 &lt; 3
          </div>

          <p>
            So, <strong>3 is greater than −2.</strong>
          </p>

        </section>

        {/* ADDITION */}

        <section className="integers-section">

          <h2>➕ Adding Integers</h2>

          <p>
            Adding a positive number means moving to the right
            on the number line.
          </p>

          <div className="integers-example">
            −2 + 5 = <strong>3</strong>
          </div>

          <p>
            Start at −2 and move 5 steps to the right.
          </p>

        </section>

        {/* SUBTRACTION */}

        <section className="integers-section">

          <h2>➖ Subtracting Integers</h2>

          <p>
            Subtracting a positive number means moving to the left
            on the number line.
          </p>

          <div className="integers-example">
            4 − 6 = <strong>−2</strong>
          </div>

          <p>
            Start at 4 and move 6 steps to the left.
          </p>

        </section>

        {/* EVERYDAY LIFE */}

        <section className="integers-section">

          <h2>🌡️ Integers in Everyday Life</h2>

          <div className="integers-story">

            <div className="story-icon">
              🌡️
            </div>

            <p>
              Temperature can be represented using positive
              and negative integers.
            </p>

            <div className="integers-example">
              5°C → −2°C
            </div>

            <p>
              A temperature below zero is represented using
              a negative integer.
            </p>

          </div>

        </section>

        {/* CHALLENGE */}

        <section className="integers-section challenge">

          <div className="challenge-icon">
            🎯
          </div>

          <h2>Mini Challenge</h2>

          <p>
            Test your understanding!
          </p>

          <div className="integers-question">

            <p>1. Which is greater: −3 or 2? ❓</p>

            <p>2. What is −4 + 7? ❓</p>

            <p>3. What is 5 − 8? ❓</p>

          </div>

        </section>

      </div>

    </div>
  )
}

export default IntegersNumberLine