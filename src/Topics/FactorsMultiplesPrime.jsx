import './FactorsMultiplesPrime.css'

function FactorsMultiplesPrime({ onBack }) {
  return (
    <div className="factors-topic">

      <button className="factors-back" onClick={onBack}>
        ← BACK TO LEARN
      </button>

      <div className="factors-content">

        <div className="factors-icon">
          🔢
        </div>

        <p className="factors-label">
          MATHS • LEARN
        </p>

        <h1>Factors, Multiples & Prime Numbers</h1>

        <p className="factors-intro">
          Discover the building blocks of numbers!
        </p>

        {/* FACTORS */}

        <section className="factors-section">

          <h2>🔍 What are Factors?</h2>

          <p>
            Factors are numbers that divide another number exactly
            without leaving a remainder.
          </p>

          <div className="factors-example">
            <p>
              Factors of <strong>12</strong> are:
            </p>

            <div className="factor-numbers">
              1 × 12 &nbsp; • &nbsp;
              2 × 6 &nbsp; • &nbsp;
              3 × 4
            </div>

            <p>
              So the factors are
              <strong> 1, 2, 3, 4, 6 and 12.</strong>
            </p>
          </div>

        </section>

        {/* MULTIPLES */}

        <section className="factors-section">

          <h2>🔢 What are Multiples?</h2>

          <p>
            Multiples are the numbers we get when we multiply
            a number by 1, 2, 3, 4 and so on.
          </p>

          <div className="factors-example">

            <p>
              Multiples of <strong>5</strong>:
            </p>

            <div className="multiple-row">
              5, 10, 15, 20, 25, 30...
            </div>

          </div>

        </section>

        {/* PRIME NUMBERS */}

        <section className="factors-section">

          <h2>⭐ Prime Numbers</h2>

          <p>
            A prime number has exactly two factors:
            <strong> 1 and itself.</strong>
          </p>

          <div className="prime-grid">

            <div className="prime-card">
              <strong>2</strong>
              <span>1 × 2</span>
            </div>

            <div className="prime-card">
              <strong>3</strong>
              <span>1 × 3</span>
            </div>

            <div className="prime-card">
              <strong>5</strong>
              <span>1 × 5</span>
            </div>

            <div className="prime-card">
              <strong>7</strong>
              <span>1 × 7</span>
            </div>

            <div className="prime-card">
              <strong>11</strong>
              <span>1 × 11</span>
            </div>

            <div className="prime-card">
              <strong>13</strong>
              <span>1 × 13</span>
            </div>

          </div>

        </section>

        {/* COMPOSITE NUMBERS */}

        <section className="factors-section">

          <h2>🧩 Composite Numbers</h2>

          <p>
            A composite number has more than two factors.
          </p>

          <div className="factors-example">

            <p>
              Example:
            </p>

            <div className="number-highlight">
              12 = 1 × 12 = 2 × 6 = 3 × 4
            </div>

            <p>
              Therefore, <strong>12 is a composite number.</strong>
            </p>

          </div>

        </section>

        {/* FACTOR PAIRS */}

        <section className="factors-section">

          <h2>🤝 Factor Pairs</h2>

          <p>
            Two factors that multiply together to give a number
            are called a factor pair.
          </p>

          <div className="factor-pair-box">

            <div>1 × 24 = 24</div>
            <div>2 × 12 = 24</div>
            <div>3 × 8 = 24</div>
            <div>4 × 6 = 24</div>

          </div>

        </section>

        {/* EVERYDAY LIFE */}

        <section className="factors-section">

          <h2>🌟 Maths in Everyday Life</h2>

          <div className="factors-story">

            <div className="story-icon">
              🍎
            </div>

            <p>
              You have <strong>12 apples</strong> and want to arrange
              them equally in groups.
            </p>

            <div className="number-highlight">
              12 = 3 × 4
            </div>

            <p>
              So you can make <strong>3 groups of 4</strong>
              or <strong>4 groups of 3</strong>.
            </p>

          </div>

        </section>

        {/* CHALLENGE */}

        <section className="factors-section challenge">

          <div className="challenge-icon">
            🎯
          </div>

          <h2>Mini Challenge</h2>

          <p>
            Test your number skills!
          </p>

          <div className="factors-question">

            <p>1. What are the factors of 18? ❓</p>

            <p>2. Write the first five multiples of 4. ❓</p>

            <p>3. Is 17 a prime number? ❓</p>

          </div>

        </section>

      </div>

    </div>
  )
}

export default FactorsMultiplesPrime