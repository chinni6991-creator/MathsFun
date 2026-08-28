import './Fractions.css'

function Fractions({ onBack }) {
  return (
    <div className="fractions-topic">

      <button className="fractions-back" onClick={onBack}>
        ← BACK TO LEARN
      </button>

      <div className="fractions-content">

        <div className="fractions-icon">
          🍕
        </div>

        <p className="fractions-label">
          MATHS • LEARN
        </p>

        <h1>Fractions</h1>

        <p className="fractions-intro">
          Discover how we use parts of a whole in mathematics!
        </p>

        {/* WHAT IS A FRACTION */}

        <section className="fractions-section">

          <h2>🍕 What is a Fraction?</h2>

          <p>
            A fraction represents a part of a whole.
            It has a numerator and a denominator.
          </p>

          <div className="fraction-display">
            <div className="fraction-number">
              <span>3</span>
              <span className="fraction-line"></span>
              <span>4</span>
            </div>
          </div>

          <div className="fraction-parts">

            <div className="fraction-part">
              <h3>Numerator</h3>
              <p>The top number tells us how many parts we have.</p>
            </div>

            <div className="fraction-part">
              <h3>Denominator</h3>
              <p>The bottom number tells us the total equal parts.</p>
            </div>

          </div>

        </section>

        {/* PROPER FRACTION */}

        <section className="fractions-section">

          <h2>🔵 Proper Fractions</h2>

          <p>
            In a proper fraction, the numerator is smaller
            than the denominator.
          </p>

          <div className="fraction-examples">
            1/2 &nbsp;&nbsp; 2/3 &nbsp;&nbsp; 3/5 &nbsp;&nbsp; 4/7
          </div>

        </section>

        {/* IMPROPER FRACTION */}

        <section className="fractions-section">

          <h2>🟣 Improper Fractions</h2>

          <p>
            In an improper fraction, the numerator is equal to
            or greater than the denominator.
          </p>

          <div className="fraction-examples">
            5/4 &nbsp;&nbsp; 7/3 &nbsp;&nbsp; 9/5
          </div>

        </section>

        {/* MIXED NUMBERS */}

        <section className="fractions-section">

          <h2>🔄 Mixed Numbers</h2>

          <p>
            A mixed number contains a whole number and a fraction.
          </p>

          <div className="fraction-example-box">
            2 1/3
          </div>

          <p>
            This means <strong>2 wholes and 1 part out of 3</strong>.
          </p>

        </section>

        {/* EQUIVALENT FRACTIONS */}

        <section className="fractions-section">

          <h2>✨ Equivalent Fractions</h2>

          <p>
            Different fractions can represent the same amount.
          </p>

          <div className="fraction-example-box">
            1/2 = 2/4 = 3/6
          </div>

          <p>
            These fractions all represent the same value.
          </p>

        </section>

        {/* COMPARING */}

        <section className="fractions-section">

          <h2>⚖️ Comparing Fractions</h2>

          <p>
            When fractions have the same denominator,
            the fraction with the larger numerator is greater.
          </p>

          <div className="fraction-example-box">
            3/8 &gt; 1/8
          </div>

        </section>

        {/* EVERYDAY LIFE */}

        <section className="fractions-section">

          <h2>🌟 Fractions in Everyday Life</h2>

          <div className="fractions-story">

            <div className="story-icon">
              🍕
            </div>

            <p>
              A pizza is divided into <strong>8 equal slices</strong>.
              If you eat 3 slices, you have eaten:
            </p>

            <div className="fraction-example-box">
              3/8 of the pizza
            </div>

          </div>

        </section>

        {/* CHALLENGE */}

        <section className="fractions-section challenge">

          <div className="challenge-icon">
            🎯
          </div>

          <h2>Mini Challenge</h2>

          <p>
            Test your fraction skills!
          </p>

          <div className="fractions-question">

            <p>1. What is the numerator in 5/9? ❓</p>

            <p>2. What is the denominator in 3/7? ❓</p>

            <p>3. Which is greater: 2/5 or 4/5? ❓</p>

          </div>

        </section>

      </div>

    </div>
  )
}

export default Fractions