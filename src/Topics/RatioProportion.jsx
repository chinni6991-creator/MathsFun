import './RatioProportion.css'

function RatioProportion({ onBack }) {
  return (
    <div className="ratio-topic">

      <button className="ratio-back" onClick={onBack}>
        ← BACK TO LEARN
      </button>

      <div className="ratio-content">

        <div className="ratio-icon">
          ⚖️
        </div>

        <p className="ratio-label">
          MATHS • LEARN
        </p>

        <h1>Ratio & Proportion</h1>

        <p className="ratio-intro">
          Learn how to compare quantities and understand relationships
          between numbers!
        </p>

        {/* RATIO */}

        <section className="ratio-section">

          <h2>⚖️ What is a Ratio?</h2>

          <p>
            A ratio compares two quantities of the same kind.
            We can write a ratio using the symbol <strong>:</strong>.
          </p>

          <div className="ratio-example">
            2 : 3
          </div>

          <p>
            This means there are <strong>2 parts</strong> of one quantity
            for every <strong>3 parts</strong> of another.
          </p>

        </section>

        {/* SIMPLE RATIO */}

        <section className="ratio-section">

          <h2>🍎 A Simple Example</h2>

          <p>
            Suppose a basket has 4 apples and 6 oranges.
          </p>

          <div className="fruit-box">

            <div className="fruit-group">
              🍎 🍎 🍎 🍎
              <strong>4 Apples</strong>
            </div>

            <div className="fruit-group">
              🍊 🍊 🍊 🍊 🍊 🍊
              <strong>6 Oranges</strong>
            </div>

          </div>

          <div className="ratio-example">
            Apples : Oranges = 4 : 6
          </div>

        </section>

        {/* SIMPLIFYING */}

        <section className="ratio-section">

          <h2>✂️ Simplifying Ratios</h2>

          <p>
            We can divide both parts of a ratio by the same number
            to get a simpler ratio.
          </p>

          <div className="ratio-example">
            4 : 6 = 2 : 3
          </div>

          <p>
            Both 4 and 6 are divided by <strong>2</strong>.
          </p>

        </section>

        {/* PROPORTION */}

        <section className="ratio-section">

          <h2>🔗 What is Proportion?</h2>

          <p>
            A proportion tells us that two ratios are equal.
          </p>

          <div className="ratio-example">
            2 : 3 = 4 : 6
          </div>

          <p>
            Both ratios represent the same relationship.
          </p>

        </section>

        {/* UNITARY METHOD */}

        <section className="ratio-section">

          <h2>🧮 Finding an Unknown Quantity</h2>

          <p>
            Ratios can help us find a missing quantity.
          </p>

          <div className="ratio-step">

            <div>
              2 pencils cost ₹10
            </div>

            <div>
              1 pencil costs ₹5
            </div>

            <div>
              4 pencils cost <strong>₹20</strong>
            </div>

          </div>

        </section>

        {/* EVERYDAY LIFE */}

        <section className="ratio-section">

          <h2>🌟 Ratio in Everyday Life</h2>

          <div className="ratio-story">

            <div className="story-icon">
              🥤
            </div>

            <p>
              A juice recipe uses 2 cups of water for every
              1 cup of juice concentrate.
            </p>

            <div className="ratio-example">
              Water : Concentrate = 2 : 1
            </div>

          </div>

        </section>

        {/* PROPORTION EXAMPLE */}

        <section className="ratio-section">

          <h2>📐 Proportion in Real Life</h2>

          <p>
            If a map uses the same scale, distances on the map
            and real distances remain proportional.
          </p>

          <div className="ratio-example">
            1 cm : 5 km
          </div>

        </section>

        {/* CHALLENGE */}

        <section className="ratio-section challenge">

          <div className="challenge-icon">
            🎯
          </div>

          <h2>Mini Challenge</h2>

          <p>
            Test your ratio skills!
          </p>

          <div className="ratio-question">

            <p>1. Simplify 6 : 9. ❓</p>

            <p>2. If 2 : 5 = 4 : ❓, find the missing number.</p>

            <p>3. What is the ratio of 3 apples to 6 oranges? ❓</p>

          </div>

        </section>

      </div>

    </div>
  )
}

export default RatioProportion