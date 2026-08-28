import './FindingUnknown.css'

function FindingUnknown({ onBack }) {
  return (
    <div className="unknown-topic">

      <button className="unknown-back" onClick={onBack}>
        ← BACK TO LEARN
      </button>

      <div className="unknown-content">

        <div className="unknown-icon">
          🔍❓
        </div>

        <p className="unknown-label">
          MATHS • LEARN
        </p>

        <h1>Finding the Unknown</h1>

        <p className="unknown-intro">
          Learn how to find missing numbers and solve simple mathematical puzzles!
        </p>

        <section className="unknown-section">

          <h2>🔍 What is an Unknown?</h2>

          <p>
            An unknown is a number whose value we do not know yet.
            We often use a letter or a box to represent it.
          </p>

          <div className="unknown-example">
            □ + 5 = 12
          </div>

          <p>
            We need to find the number that makes the equation correct.
          </p>

        </section>

        <section className="unknown-section">

          <h2>➕ Finding an Unknown in Addition</h2>

          <p>
            Think about the number that needs to be added to make the total.
          </p>

          <div className="unknown-step">

            <div>
              □ + 7 = 15
            </div>

            <div>
              15 − 7 = 8
            </div>

            <div>
              Therefore, □ = <strong>8</strong>
            </div>

          </div>

        </section>

        <section className="unknown-section">

          <h2>➖ Finding an Unknown in Subtraction</h2>

          <div className="unknown-example">
            20 − □ = 13
          </div>

          <p>
            Find the difference between 20 and 13.
          </p>

          <div className="unknown-example">
            20 − 13 = <strong>7</strong>
          </div>

          <p>
            Therefore, □ = <strong>7</strong>.
          </p>

        </section>

        <section className="unknown-section">

          <h2>✖️ Finding an Unknown in Multiplication</h2>

          <div className="unknown-example">
            □ × 4 = 20
          </div>

          <p>
            Think: which number multiplied by 4 gives 20?
          </p>

          <div className="unknown-example">
            5 × 4 = <strong>20</strong>
          </div>

          <p>
            Therefore, □ = <strong>5</strong>.
          </p>

        </section>

        <section className="unknown-section">

          <h2>➗ Finding an Unknown in Division</h2>

          <div className="unknown-example">
            36 ÷ □ = 6
          </div>

          <p>
            Think about the multiplication fact that gives 36.
          </p>

          <div className="unknown-example">
            6 × 6 = <strong>36</strong>
          </div>

          <p>
            Therefore, □ = <strong>6</strong>.
          </p>

        </section>

        <section className="unknown-section">

          <h2>🔤 Using Letters</h2>

          <p>
            Instead of a box, we can use a letter such as
            <strong> x</strong> for the unknown number.
          </p>

          <div className="unknown-example">
            x + 6 = 14
          </div>

          <div className="unknown-step">

            <div>
              x = 14 − 6
            </div>

            <div>
              x = <strong>8</strong>
            </div>

          </div>

        </section>

        <section className="unknown-section">

          <h2>🧩 Step-by-Step Method</h2>

          <div className="unknown-cards">

            <div className="unknown-card">
              <span>1️⃣</span>
              <h3>Look</h3>
              <p>Find the unknown number.</p>
            </div>

            <div className="unknown-card">
              <span>2️⃣</span>
              <h3>Think</h3>
              <p>Choose the correct operation.</p>
            </div>

            <div className="unknown-card">
              <span>3️⃣</span>
              <h3>Solve</h3>
              <p>Calculate the missing value.</p>
            </div>

            <div className="unknown-card">
              <span>4️⃣</span>
              <h3>Check</h3>
              <p>Put the answer back and verify.</p>
            </div>

          </div>

        </section>

        <section className="unknown-section">

          <h2>🌟 Unknown Numbers in Everyday Life</h2>

          <div className="unknown-story">

            <div className="story-icon">
              🛒
            </div>

            <p>
              You have ₹50 and spend some money. You have ₹20 left.
              How much did you spend?
            </p>

            <div className="unknown-example">
              ₹50 − x = ₹20
            </div>

            <div className="unknown-highlight">
              x = ₹30 💰
            </div>

          </div>

        </section>

        <section className="unknown-section challenge">

          <div className="challenge-icon">
            🎯
          </div>

          <h2>Mini Challenge</h2>

          <p>
            Find the missing number!
          </p>

          <div className="unknown-question">

            <p>1. □ + 9 = 17 → ❓</p>

            <p>2. 25 − □ = 10 → ❓</p>

            <p>3. □ × 5 = 35 → ❓</p>

            <p>4. 48 ÷ □ = 8 → ❓</p>

          </div>

        </section>

      </div>

    </div>
  )
}

export default FindingUnknown