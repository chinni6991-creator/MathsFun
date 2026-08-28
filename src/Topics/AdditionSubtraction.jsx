import './AdditionSubtraction.css'

function AdditionSubtraction({ onBack }) {
  return (
    <div className="addition-topic">

      <button className="addition-back" onClick={onBack}>
        ← BACK TO LEARN
      </button>

      <div className="addition-content">

        <div className="addition-icon">
          ➕➖
        </div>

        <p className="addition-label">MATHS • LEARN</p>

        <h1>Addition & Subtraction</h1>

        <p className="addition-intro">
          Learn how numbers come together and move apart!
        </p>

        <section className="addition-section">

          <h2>➕ What is Addition?</h2>

          <p>
            Addition means putting two or more numbers together
            to find their total.
          </p>

          <div className="addition-example">
            <div className="number-box">3</div>
            <div className="operator">+</div>
            <div className="number-box">4</div>
            <div className="operator">=</div>
            <div className="answer-box">7</div>
          </div>

          <p className="addition-rule">
            ✨ 3 + 4 = 7
          </p>

        </section>

        <section className="addition-section">

          <h2>➖ What is Subtraction?</h2>

          <p>
            Subtraction means taking one number away from another
            to find the difference.
          </p>

          <div className="addition-example">
            <div className="number-box">9</div>
            <div className="operator">−</div>
            <div className="number-box">4</div>
            <div className="operator">=</div>
            <div className="answer-box">5</div>
          </div>

          <p className="addition-rule">
            ✨ 9 − 4 = 5
          </p>

        </section>

        <section className="addition-section">

          <h2>📏 Addition on a Number Line</h2>

          <p>
            Start at a number and move forward when adding.
          </p>

          <div className="number-line">
            <span>0</span>
            <span>1</span>
            <span>2</span>
            <span className="highlight">3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span className="highlight">7</span>
            <span>8</span>
          </div>

          <p className="addition-rule">
            🚀 Start at 3 and move 4 steps → 7
          </p>

        </section>

        <section className="addition-section">

          <h2>🌟 Maths in Everyday Life</h2>

          <div className="story-box">

            <div className="story-icon">🍎</div>

            <p>
              You have <strong>5 apples</strong> and your friend gives
              you <strong>3 more</strong>.
            </p>

            <div className="story-equation">
              5 + 3 = <strong>8 apples</strong>
            </div>

          </div>

        </section>

        <section className="addition-section challenge">

          <div className="challenge-icon">🎯</div>

          <h2>Mini Challenge</h2>

          <p>What is the answer?</p>

          <div className="challenge-question">
            12 + 6 = ❓
          </div>

          <div className="addition-answers">
            <button>16</button>
            <button>17</button>
            <button>18</button>
            <button>20</button>
          </div>

        </section>

      </div>

    </div>
  )
}

export default AdditionSubtraction