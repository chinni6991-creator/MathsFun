import './Patterns.css'

function Patterns({ onBack }) {
  return (
    <div className="patterns-topic">

      {/* Back Button */}
      <button className="patterns-back" onClick={onBack}>
        ← BACK TO LEARN
      </button>

      <div className="patterns-floating">
        <span>2</span>
        <span>4</span>
        <span>+</span>
        <span>7</span>
        <span>×</span>
        <span>9</span>
        <span>∞</span>
        <span>3</span>
      </div>

      <main className="patterns-content">

        {/* HERO */}
        <header className="patterns-header">

          <div className="patterns-icon">
            🔢
          </div>

          <p className="patterns-label">
            MATHS • LEARN
          </p>

          <h1>Patterns in Mathematics</h1>

          <p className="patterns-intro">
            Discover the hidden rules behind numbers, shapes and
            everyday things around us!
          </p>

          <div className="patterns-scroll">
            <span>↓</span>
            EXPLORE
          </div>

        </header>

        {/* WHAT IS A PATTERN */}
        <section className="pattern-section">

          <div className="section-heading">
            <span>🔍</span>
            <div>
              <h2>What is a Pattern?</h2>
              <small>LET'S DISCOVER</small>
            </div>
          </div>

          <p>
            A <strong>pattern</strong> is a sequence or arrangement that
            follows a particular rule. Patterns can be found in numbers,
            shapes, colours, sounds and even in nature!
          </p>

          <div className="pattern-example">

            <div className="pattern-number">2</div>
            <div className="pattern-arrow">→</div>
            <div className="pattern-number">4</div>
            <div className="pattern-arrow">→</div>
            <div className="pattern-number">6</div>
            <div className="pattern-arrow">→</div>
            <div className="pattern-number">8</div>
            <div className="pattern-arrow">→</div>
            <div className="pattern-number">10</div>

          </div>

          <div className="pattern-rule">
            ✨ <strong>Rule:</strong> Add 2 each time
          </div>

        </section>

        {/* NUMBER PATTERNS */}
        <section className="pattern-section">

          <div className="section-heading">
            <span>🔢</span>
            <div>
              <h2>Number Patterns</h2>
              <small>NUMBERS FOLLOW RULES</small>
            </div>
          </div>

          <p>
            Number patterns are sequences where numbers change according
            to a specific rule.
          </p>

          <div className="pattern-list">

            <div className="pattern-card">
              <div className="pattern-card-icon">➕</div>
              <strong>2, 4, 6, 8, 10...</strong>
              <small>Add 2 each time</small>
            </div>

            <div className="pattern-card">
              <div className="pattern-card-icon">🔢</div>
              <strong>5, 10, 15, 20...</strong>
              <small>Add 5 each time</small>
            </div>

            <div className="pattern-card">
              <div className="pattern-card-icon">➖</div>
              <strong>20, 18, 16, 14...</strong>
              <small>Subtract 2 each time</small>
            </div>

            <div className="pattern-card">
              <div className="pattern-card-icon">✖️</div>
              <strong>2, 4, 8, 16...</strong>
              <small>Multiply by 2</small>
            </div>

            <div className="pattern-card">
              <div className="pattern-card-icon">➗</div>
              <strong>64, 32, 16, 8...</strong>
              <small>Divide by 2</small>
            </div>

            <div className="pattern-card">
              <div className="pattern-card-icon">⭐</div>
              <strong>1, 4, 9, 16, 25...</strong>
              <small>Square numbers</small>
            </div>

          </div>

        </section>

        {/* SHAPE PATTERNS */}
        <section className="pattern-section">

          <div className="section-heading">
            <span>🔺</span>
            <div>
              <h2>Patterns with Shapes</h2>
              <small>LOOK • THINK • PREDICT</small>
            </div>
          </div>

          <p>
            Patterns are not only about numbers. Shapes can also repeat
            or change according to a rule.
          </p>

          <div className="shape-pattern">

            <div className="shape-item circle-shape">●</div>
            <div className="shape-item square-shape">■</div>
            <div className="shape-item triangle-shape">▲</div>
            <div className="shape-item circle-shape">●</div>
            <div className="shape-item square-shape">■</div>
            <div className="shape-item triangle-shape">▲</div>
            <div className="shape-item circle-shape">●</div>
            <div className="shape-item square-shape">■</div>
            <div className="shape-item triangle-shape">▲</div>

          </div>

          <div className="pattern-rule">
            🔄 <strong>Rule:</strong> Circle → Square → Triangle → Repeat
          </div>

        </section>

        {/* GROWING PATTERN */}
        <section className="pattern-section">

          <div className="section-heading">
            <span>📈</span>
            <div>
              <h2>Growing Patterns</h2>
              <small>WATCH IT GROW</small>
            </div>
          </div>

          <p>
            In a growing pattern, something increases step by step.
          </p>

          <div className="growing-pattern">

            <div className="growth-stage">
              <small>STEP 1</small>
              <div className="dots">
                ●
              </div>
              <strong>1</strong>
            </div>

            <div className="growth-stage">
              <small>STEP 2</small>
              <div className="dots">
                ● ●
              </div>
              <strong>2</strong>
            </div>

            <div className="growth-stage">
              <small>STEP 3</small>
              <div className="dots">
                ● ● ●
              </div>
              <strong>3</strong>
            </div>

            <div className="growth-stage">
              <small>STEP 4</small>
              <div className="dots">
                ● ● ● ●
              </div>
              <strong>4</strong>
            </div>

          </div>

          <div className="pattern-rule">
            📈 <strong>Rule:</strong> Add one more each time
          </div>

        </section>

        {/* PATTERNS AROUND US */}
        <section className="pattern-section">

          <div className="section-heading">
            <span>🌍</span>
            <div>
              <h2>Patterns Around Us</h2>
              <small>MATHEMATICS IN REAL LIFE</small>
            </div>
          </div>

          <div className="real-pattern-grid">

            <div className="real-pattern-card">
              <span>🌸</span>
              <strong>Flowers</strong>
              <small>Petals follow repeating arrangements</small>
            </div>

            <div className="real-pattern-card">
              <span>🧱</span>
              <strong>Buildings</strong>
              <small>Bricks and windows create patterns</small>
            </div>

            <div className="real-pattern-card">
              <span>👕</span>
              <strong>Clothes</strong>
              <small>Colours and designs repeat</small>
            </div>

            <div className="real-pattern-card">
              <span>🎵</span>
              <strong>Music</strong>
              <small>Beats and sounds can repeat</small>
            </div>

          </div>

        </section>

        {/* MINI CHALLENGE */}
        <section className="pattern-section challenge">

          <div className="challenge-icon">
            🎯
          </div>

          <p className="challenge-label">
            MINI CHALLENGE
          </p>

          <h2>What comes next?</h2>

          <p>
            Look carefully at the pattern and find the missing number.
          </p>

          <div className="question-pattern">
            3 → 6 → 9 → 12 → ❓
          </div>

          <div className="answer">

            <button>14</button>
            <button>15</button>
            <button>16</button>
            <button>18</button>

          </div>

          <p className="challenge-hint">
            💡 Hint: Look at how much the numbers increase each time.
          </p>

        </section>

        {/* END */}
        <div className="patterns-end">

          <div className="end-stars">
            ✦ ✦ ✦
          </div>

          <div className="end-icon">
            🧠
          </div>

          <h2>You're a Pattern Detective!</h2>

          <p>
            Keep looking around you. Mathematics is full of patterns
            waiting to be discovered.
          </p>

          <span>
            Observe • Think • Discover
          </span>

        </div>

      </main>

    </div>
  )
}

export default Patterns