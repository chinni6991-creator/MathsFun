import './Decimals.css'

function Decimals({ onBack }) {
  return (
    <div className="decimals-topic">

      <button className="decimals-back" onClick={onBack}>
        ← BACK TO LEARN
      </button>

      <div className="decimals-content">

        <div className="decimals-icon">
          🔢
        </div>

        <p className="decimals-label">
          MATHS • LEARN
        </p>

        <h1>Decimals</h1>

        <p className="decimals-intro">
          Discover numbers between whole numbers and learn how decimals
          help us describe precise values!
        </p>

        {/* WHAT ARE DECIMALS */}

        <section className="decimals-section">

          <h2>🔢 What are Decimals?</h2>

          <p>
            A decimal is a number that represents a whole number
            together with a part of a whole.
          </p>

          <div className="decimals-example">
            3.5
          </div>

          <p>
            Here, <strong>3</strong> is the whole-number part and
            <strong> 5</strong> represents five tenths.
          </p>

        </section>

        {/* DECIMAL PLACE VALUE */}

        <section className="decimals-section">

          <h2>📍 Decimal Place Value</h2>

          <p>
            Each digit has a different value depending on its position.
          </p>

          <div className="decimal-place-grid">

            <div className="decimal-place-card">
              <strong>4</strong>
              <span>Ones</span>
            </div>

            <div className="decimal-place-card">
              <strong>.</strong>
              <span>Decimal Point</span>
            </div>

            <div className="decimal-place-card">
              <strong>7</strong>
              <span>Tenths</span>
            </div>

            <div className="decimal-place-card">
              <strong>5</strong>
              <span>Hundredths</span>
            </div>

          </div>

          <div className="decimals-example">
            4.75
          </div>

        </section>

        {/* FRACTION TO DECIMAL */}

        <section className="decimals-section">

          <h2>🍕 Fractions and Decimals</h2>

          <p>
            Fractions can be written as decimals.
          </p>

          <div className="decimals-example">
            1/2 = <strong>0.5</strong>
          </div>

          <div className="decimals-example">
            1/4 = <strong>0.25</strong>
          </div>

        </section>

        {/* COMPARING */}

        <section className="decimals-section">

          <h2>⚖️ Comparing Decimals</h2>

          <p>
            To compare decimals, compare the digits from left to right.
          </p>

          <div className="decimals-example">
            0.7 &gt; 0.5
          </div>

          <p>
            Therefore, <strong>0.7 is greater than 0.5.</strong>
          </p>

        </section>

        {/* ADDITION */}

        <section className="decimals-section">

          <h2>➕ Adding Decimals</h2>

          <p>
            Keep the decimal points aligned when adding decimals.
          </p>

          <div className="decimal-calculation">
            <div>2.35</div>
            <div>+ 1.20</div>
            <div className="calculation-line"></div>
            <div><strong>3.55</strong></div>
          </div>

        </section>

        {/* MONEY */}

        <section className="decimals-section">

          <h2>💰 Decimals and Money</h2>

          <div className="decimals-story">

            <div className="story-icon">
              🛒
            </div>

            <p>
              Decimal numbers are commonly used when we talk about
              money and prices.
            </p>

            <div className="decimals-example">
              ₹25.50
            </div>

            <p>
              This means <strong>25 rupees and 50 paise.</strong>
            </p>

          </div>

        </section>

        {/* EVERYDAY LIFE */}

        <section className="decimals-section">

          <h2>🌟 Decimals Around Us</h2>

          <div className="decimal-life-grid">

            <div className="decimal-life-card">
              🥛
              <p>1.5 litres of milk</p>
            </div>

            <div className="decimal-life-card">
              ⚖️
              <p>2.5 kg of rice</p>
            </div>

            <div className="decimal-life-card">
              📏
              <p>1.75 metres</p>
            </div>

          </div>

        </section>

        {/* CHALLENGE */}

        <section className="decimals-section challenge">

          <div className="challenge-icon">
            🎯
          </div>

          <h2>Mini Challenge</h2>

          <p>
            Test your decimal skills!
          </p>

          <div className="decimals-question">

            <p>1. Which is greater: 0.8 or 0.6? ❓</p>

            <p>2. What is 2.5 + 1.5? ❓</p>

            <p>3. Write 1/2 as a decimal. ❓</p>

          </div>

        </section>

      </div>

    </div>
  )
}

export default Decimals