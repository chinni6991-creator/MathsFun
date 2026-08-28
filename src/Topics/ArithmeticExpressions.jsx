import './ArithmeticExpressions.css'

function ArithmeticExpressions({ onBack }) {
  return (
    <div className="expressions-topic">

      <button className="expressions-back" onClick={onBack}>
        ← BACK TO LEARN
      </button>

      <div className="expressions-content">

        <div className="expressions-icon">
          🧮
        </div>

        <p className="expressions-label">
          MATHS • LEARN
        </p>

        <h1>Arithmetic Expressions</h1>

        <p className="expressions-intro">
          Learn how numbers and mathematical operations work together!
        </p>

        {/* WHAT IS AN EXPRESSION */}

        <section className="expressions-section">

          <h2>🔢 What is an Arithmetic Expression?</h2>

          <p>
            An arithmetic expression is a combination of numbers
            and mathematical operations such as addition, subtraction,
            multiplication and division.
          </p>

          <div className="expressions-example">
            8 + 4
          </div>

          <p>
            Here, <strong>8</strong> and <strong>4</strong> are numbers
            and <strong>+</strong> is the operation.
          </p>

        </section>

        {/* OPERATORS */}

        <section className="expressions-section">

          <h2>➕➖✖️➗ Mathematical Operations</h2>

          <div className="operation-grid">

            <div className="operation-card">
              <h3>➕ Addition</h3>
              <p>7 + 3 = <strong>10</strong></p>
            </div>

            <div className="operation-card">
              <h3>➖ Subtraction</h3>
              <p>9 − 4 = <strong>5</strong></p>
            </div>

            <div className="operation-card">
              <h3>✖️ Multiplication</h3>
              <p>6 × 3 = <strong>18</strong></p>
            </div>

            <div className="operation-card">
              <h3>➗ Division</h3>
              <p>20 ÷ 5 = <strong>4</strong></p>
            </div>

          </div>

        </section>

        {/* SIMPLE EXPRESSIONS */}

        <section className="expressions-section">

          <h2>💡 Let's Solve an Expression</h2>

          <p>
            Start with the operation inside the expression.
          </p>

          <div className="expressions-step">

            <div>
              6 + 4 × 2
            </div>

            <div>
              = 6 + 8
            </div>

            <div>
              = <strong>14</strong>
            </div>

          </div>

          <p>
            Multiplication is done before addition.
          </p>

        </section>

        {/* BRACKETS */}

        <section className="expressions-section">

          <h2>🔲 Expressions with Brackets</h2>

          <p>
            Brackets tell us which part of an expression to solve first.
          </p>

          <div className="expressions-example">
            (5 + 3) × 2
          </div>

          <div className="expressions-step">

            <div>
              (5 + 3) = 8
            </div>

            <div>
              8 × 2 = <strong>16</strong>
            </div>

          </div>

        </section>

        {/* ORDER OF OPERATIONS */}

        <section className="expressions-section">

          <h2>📚 Order of Operations</h2>

          <p>
            When an expression has different operations,
            we follow an order to get the correct answer.
          </p>

          <div className="order-list">

            <div>
              <strong>1.</strong> Brackets
            </div>

            <div>
              <strong>2.</strong> Multiplication and Division
            </div>

            <div>
              <strong>3.</strong> Addition and Subtraction
            </div>

          </div>

        </section>

        {/* EVERYDAY LIFE */}

        <section className="expressions-section">

          <h2>🌟 Maths in Everyday Life</h2>

          <div className="expressions-story">

            <div className="story-icon">
              🛒
            </div>

            <p>
              A shop has 3 boxes with 4 pencils in each box.
              If you buy 2 extra pencils, the expression is:
            </p>

            <div className="expressions-example">
              (3 × 4) + 2 = <strong>14 pencils</strong>
            </div>

          </div>

        </section>

        {/* CHALLENGE */}

        <section className="expressions-section challenge">

          <div className="challenge-icon">
            🎯
          </div>

          <h2>Mini Challenge</h2>

          <p>
            Solve these expressions!
          </p>

          <div className="expressions-question">

            <p>1. 8 + 5 × 2 = ❓</p>

            <p>2. (6 + 4) × 3 = ❓</p>

            <p>3. 20 ÷ 4 + 7 = ❓</p>

          </div>

        </section>

      </div>

    </div>
  )
}

export default ArithmeticExpressions