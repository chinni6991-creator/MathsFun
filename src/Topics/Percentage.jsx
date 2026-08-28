import './Percentage.css'

function Percentage({ onBack }) {
  return (
    <div className="percentage-topic">

      <button className="percentage-back" onClick={onBack}>
        ← BACK TO LEARN
      </button>

      <div className="percentage-content">

        <div className="percentage-icon">
          💯
        </div>

        <p className="percentage-label">
          MATHS • LEARN
        </p>

        <h1>Percentage</h1>

        <p className="percentage-intro">
          Learn how percentages help us describe parts, compare quantities
          and understand everyday information!
        </p>

        {/* WHAT IS PERCENTAGE */}

        <section className="percentage-section">

          <h2>💯 What is a Percentage?</h2>

          <p>
            Percentage means a part out of <strong>100</strong>.
            The symbol used for percentage is <strong>%</strong>.
          </p>

          <div className="percentage-example">
            25% = 25/100
          </div>

          <p>
            So, 25% means 25 parts out of 100.
          </p>

        </section>

        {/* COMMON PERCENTAGES */}

        <section className="percentage-section">

          <h2>🔢 Common Percentages</h2>

          <div className="percentage-cards">

            <div className="percentage-card">
              <h3>25%</h3>
              <p>25 out of 100</p>
            </div>

            <div className="percentage-card">
              <h3>50%</h3>
              <p>Half of a quantity</p>
            </div>

            <div className="percentage-card">
              <h3>75%</h3>
              <p>Three-fourths</p>
            </div>

            <div className="percentage-card">
              <h3>100%</h3>
              <p>The complete amount</p>
            </div>

          </div>

        </section>

        {/* FRACTION TO PERCENTAGE */}

        <section className="percentage-section">

          <h2>🍕 Fraction to Percentage</h2>

          <p>
            A fraction can be converted into a percentage.
          </p>

          <div className="percentage-example">
            1/2 = 50%
          </div>

          <div className="percentage-example">
            1/4 = 25%
          </div>

        </section>

        {/* DECIMAL TO PERCENTAGE */}

        <section className="percentage-section">

          <h2>🔄 Decimal to Percentage</h2>

          <p>
            To convert a decimal into a percentage,
            multiply it by 100.
          </p>

          <div className="percentage-example">
            0.5 = <strong>50%</strong>
          </div>

          <div className="percentage-example">
            0.25 = <strong>25%</strong>
          </div>

        </section>

        {/* FINDING PERCENTAGE */}

        <section className="percentage-section">

          <h2>🧮 Finding a Percentage</h2>

          <p>
            To find a percentage of a number, multiply the number
            by the percentage written as a fraction of 100.
          </p>

          <div className="percentage-step">

            <div>
              20% of 50
            </div>

            <div>
              = 20/100 × 50
            </div>

            <div>
              = <strong>10</strong>
            </div>

          </div>

        </section>

        {/* DISCOUNT */}

        <section className="percentage-section">

          <h2>🛍️ Percentage Discount</h2>

          <p>
            Percentages are often used to show discounts in shops.
          </p>

          <div className="percentage-example">
            ₹500 with 10% discount
          </div>

          <div className="percentage-step">

            <div>
              10% of ₹500 = ₹50
            </div>

            <div>
              ₹500 − ₹50 = <strong>₹450</strong>
            </div>

          </div>

        </section>

        {/* EVERYDAY LIFE */}

        <section className="percentage-section">

          <h2>🌟 Percentage in Everyday Life</h2>

          <div className="percentage-story">

            <div className="story-icon">
              📊
            </div>

            <p>
              We use percentages to understand discounts, marks,
              surveys, scores, battery levels and many other things.
            </p>

            <div className="percentage-highlight">
              Percentages make comparisons easier! 💡
            </div>

          </div>

        </section>

        {/* MARKS */}

        <section className="percentage-section">

          <h2>🎓 Percentage of Marks</h2>

          <p>
            Suppose a student scores 80 marks out of 100.
          </p>

          <div className="percentage-example">
            80/100 × 100 = <strong>80%</strong>
          </div>

          <p>
            The student's percentage is <strong>80%</strong>.
          </p>

        </section>

        {/* CHALLENGE */}

        <section className="percentage-section challenge">

          <div className="challenge-icon">
            🎯
          </div>

          <h2>Mini Challenge</h2>

          <p>
            Test your percentage skills!
          </p>

          <div className="percentage-question">

            <p>1. What is 50% of 20? ❓</p>

            <p>2. Convert 1/4 into a percentage. ❓</p>

            <p>3. What is 10% of ₹300? ❓</p>

          </div>

        </section>

      </div>

    </div>
  )
}

export default Percentage