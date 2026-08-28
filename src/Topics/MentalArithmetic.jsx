import './MentalArithmetic.css'

function MentalArithmetic({ onBack }) {
  return (
    <div className="mental-topic">

      <button className="mental-back" onClick={onBack}>
        ← BACK TO LEARN
      </button>

      <div className="mental-content">

        <div className="mental-icon">
          🧠
        </div>

        <p className="mental-label">
          MATHS • LEARN
        </p>

        <h1>Mental Arithmetic</h1>

        <p className="mental-intro">
          Train your brain to calculate quickly and confidently!
        </p>

        {/* WHAT IS MENTAL ARITHMETIC */}

        <section className="mental-section">

          <h2>🧠 What is Mental Arithmetic?</h2>

          <p>
            Mental arithmetic means solving calculations in your head
            without writing every step.
          </p>

          <div className="mental-highlight">
            💡 The goal is to make calculations faster,
            easier and smarter!
          </div>

        </section>

        {/* ADDITION */}

        <section className="mental-section">

          <h2>➕ Quick Addition</h2>

          <p>
            Break numbers into smaller parts to make calculations easier.
          </p>

          <div className="mental-example">
            38 + 27 = <strong>65</strong>
          </div>

          <p>
            Think: 38 + 20 = 58, then 58 + 7 = 65.
          </p>

        </section>

        {/* SUBTRACTION */}

        <section className="mental-section">

          <h2>➖ Quick Subtraction</h2>

          <p>
            Use nearby round numbers when subtracting mentally.
          </p>

          <div className="mental-example">
            72 − 29 = <strong>43</strong>
          </div>

          <p>
            Think: 72 − 30 = 42, then add 1 back → 43.
          </p>

        </section>

        {/* MULTIPLICATION */}

        <section className="mental-section">

          <h2>✖️ Multiplication Tricks</h2>

          <div className="mental-card">
            <h3>× 10</h3>
            <p>
              24 × 10 = <strong>240</strong>
            </p>
          </div>

          <div className="mental-card">
            <h3>× 5</h3>
            <p>
              18 × 5 = <strong>90</strong>
            </p>
          </div>

          <div className="mental-card">
            <h3>× 9</h3>
            <p>
              7 × 9 = <strong>63</strong>
            </p>
          </div>

        </section>

        {/* DIVISION */}

        <section className="mental-section">

          <h2>➗ Quick Division</h2>

          <p>
            Think about the multiplication fact that gives the dividend.
          </p>

          <div className="mental-example">
            72 ÷ 8 = <strong>9</strong>
          </div>

        </section>

        {/* ESTIMATION */}

        <section className="mental-section">

          <h2>🎯 Estimation</h2>

          <p>
            Estimation helps us find an answer close to the exact answer.
          </p>

          <div className="mental-example">
            198 + 304 ≈ <strong>500</strong>
          </div>

        </section>

        {/* EVERYDAY LIFE */}

        <section className="mental-section">

          <h2>🌟 Mental Maths in Everyday Life</h2>

          <div className="mental-story">

            <div className="mental-story-icon">
              🛒
            </div>

            <p>
              You buy a notebook for ₹35 and a pen for ₹18.
              You can quickly estimate the total:
            </p>

            <div className="mental-example">
              ₹35 + ₹18 = <strong>₹53</strong>
            </div>

          </div>

        </section>

        {/* CHALLENGE */}

        <section className="mental-section challenge">

          <div className="challenge-icon">
            🎯
          </div>

          <h2>Mini Challenge</h2>

          <p>
            Can you solve these mentally?
          </p>

          <div className="mental-question">

            <p>25 + 38 = ❓</p>
            <p>90 − 47 = ❓</p>
            <p>8 × 9 = ❓</p>
            <p>81 ÷ 9 = ❓</p>

          </div>

        </section>

      </div>

    </div>
  )
}

export default MentalArithmetic