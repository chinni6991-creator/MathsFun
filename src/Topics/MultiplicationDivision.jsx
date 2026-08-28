import './MultiplicationDivision.css'

function MultiplicationDivision({ onBack }) {
  return (
    <div className="multiplication-topic">

      <button className="multiplication-back" onClick={onBack}>
        ← BACK TO LEARN
      </button>

      <div className="multiplication-content">

        <div className="multiplication-icon">✖️➗</div>

        <p className="multiplication-label">MATHS • LEARN</p>

        <h1>Multiplication & Division</h1>

        <p className="multiplication-intro">
          Learn how numbers grow, share and work together!
        </p>

        <section className="multiplication-section">

          <h2>✖️ What is Multiplication?</h2>

          <p>
            Multiplication is a quick way of adding the same number again and
            again.
          </p>

          <div className="multiplication-example">
            <span>3</span>
            <strong>×</strong>
            <span>4</span>
            <strong>=</strong>
            <span>12</span>
          </div>

          <p className="multiplication-rule">
            ✨ 3 × 4 means <strong>3 groups of 4</strong>.
          </p>

        </section>

        <section className="multiplication-section">

          <h2>🔢 Multiplication Examples</h2>

          <div className="multiplication-grid">

            <div className="multiplication-card">
              <strong>2 × 5 = 10</strong>
              <small>2 groups of 5</small>
            </div>

            <div className="multiplication-card">
              <strong>4 × 3 = 12</strong>
              <small>4 groups of 3</small>
            </div>

            <div className="multiplication-card">
              <strong>6 × 2 = 12</strong>
              <small>6 groups of 2</small>
            </div>

          </div>

        </section>

        <section className="multiplication-section">

          <h2>➗ What is Division?</h2>

          <p>
            Division means sharing a quantity equally into groups.
          </p>

          <div className="multiplication-example">
            <span>12</span>
            <strong>÷</strong>
            <span>3</span>
            <strong>=</strong>
            <span>4</span>
          </div>

          <p className="multiplication-rule">
            ✨ 12 ÷ 3 means sharing 12 equally into <strong>3 groups</strong>.
          </p>

        </section>

        <section className="multiplication-section challenge">

          <div className="multiplication-challenge-icon">🎯</div>

          <h2>Mini Challenge</h2>

          <p>What is 6 × 4?</p>

          <div className="multiplication-answers">
            <button>18</button>
            <button>20</button>
            <button>24</button>
            <button>28</button>
          </div>

        </section>

      </div>

    </div>
  )
}

export default MultiplicationDivision