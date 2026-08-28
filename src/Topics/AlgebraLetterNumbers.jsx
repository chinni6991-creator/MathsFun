import './AlgebraLetterNumbers.css'

function AlgebraLetterNumbers({ onBack }) {
  return (
    <div className="algebra-topic">

      <button className="algebra-back" onClick={onBack}>
        ← BACK TO LEARN
      </button>

      <div className="algebra-content">

        <div className="algebra-icon">
          🔤➕
        </div>

        <p className="algebra-label">
          MATHS • LEARN
        </p>

        <h1>Algebra & Letter-Numbers</h1>

        <p className="algebra-intro">
          Discover how letters can represent numbers and help us solve
          mathematical problems!
        </p>

        {/* WHAT IS ALGEBRA */}

        <section className="algebra-section">

          <h2>🔤 What is Algebra?</h2>

          <p>
            Algebra is a part of mathematics where letters and symbols
            are used to represent unknown or changing numbers.
          </p>

          <div className="algebra-example">
            x + 5
          </div>

          <p>
            Here, <strong>x</strong> represents an unknown number.
          </p>

        </section>

        {/* VARIABLES */}

        <section className="algebra-section">

          <h2>🔢 Letters as Numbers</h2>

          <p>
            A letter used to represent a number is called a
            <strong> variable</strong>.
          </p>

          <div className="algebra-cards">

            <div className="algebra-card">
              <h3>x</h3>
              <p>Can represent any number.</p>
            </div>

            <div className="algebra-card">
              <h3>y</h3>
              <p>Can represent an unknown value.</p>
            </div>

            <div className="algebra-card">
              <h3>a</h3>
              <p>Can represent a quantity.</p>
            </div>

          </div>

        </section>

        {/* EXPRESSIONS */}

        <section className="algebra-section">

          <h2>➕ Algebraic Expressions</h2>

          <p>
            An expression can contain numbers, variables and mathematical
            operations.
          </p>

          <div className="algebra-example">
            2x + 3
          </div>

          <p>
            This expression contains a variable <strong>x</strong>,
            a coefficient <strong>2</strong> and a constant <strong>3</strong>.
          </p>

        </section>

        {/* SUBSTITUTION */}

        <section className="algebra-section">

          <h2>🔄 Substitution</h2>

          <p>
            If we know the value of a variable, we can substitute it
            into an expression.
          </p>

          <div className="algebra-step">

            <div>
              x = 4
            </div>

            <div>
              2x + 3
            </div>

            <div>
              = 2 × 4 + 3
            </div>

            <div>
              = <strong>11</strong>
            </div>

          </div>

        </section>

        {/* SIMPLE EQUATIONS */}

        <section className="algebra-section">

          <h2>⚖️ Simple Equations</h2>

          <p>
            An equation tells us that two mathematical expressions are equal.
          </p>

          <div className="algebra-example">
            x + 3 = 8
          </div>

          <p>
            Therefore:
          </p>

          <div className="algebra-example">
            x = <strong>5</strong>
          </div>

        </section>

        {/* PATTERNS */}

        <section className="algebra-section">

          <h2>🔢 Algebra and Patterns</h2>

          <p>
            Algebra can help us describe patterns using rules.
          </p>

          <div className="pattern-box">

            <div>2, 4, 6, 8, 10...</div>

            <div className="algebra-highlight">
              Rule: 2 × n
            </div>

          </div>

        </section>

        {/* EVERYDAY LIFE */}

        <section className="algebra-section">

          <h2>🌟 Algebra Around Us</h2>

          <div className="algebra-story">

            <div className="story-icon">
              🛒
            </div>

            <p>
              Suppose one notebook costs ₹20. If you buy
              <strong> x</strong> notebooks, the total cost is:
            </p>

            <div className="algebra-example">
              ₹20 × x
            </div>

            <div className="algebra-highlight">
              Algebra helps us describe situations with unknown quantities!
            </div>

          </div>

        </section>

        {/* CHALLENGE */}

        <section className="algebra-section challenge">

          <div className="challenge-icon">
            🎯
          </div>

          <h2>Mini Challenge</h2>

          <p>
            Test your algebra skills!
          </p>

          <div className="algebra-question">

            <p>1. If x = 5, what is x + 7? ❓</p>

            <p>2. Find x: x + 4 = 10. ❓</p>

            <p>3. If y = 3, what is 2y + 1? ❓</p>

          </div>

        </section>

      </div>

    </div>
  )
}

export default AlgebraLetterNumbers