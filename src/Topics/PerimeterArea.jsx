import './PerimeterArea.css'

function PerimeterArea({ onBack }) {
  return (
    <div className="perimeter-topic">

      <button className="perimeter-back" onClick={onBack}>
        ← BACK TO LEARN
      </button>

      <div className="perimeter-content">

        <div className="perimeter-icon">
          📏⬛
        </div>

        <p className="perimeter-label">
          MATHS • LEARN
        </p>

        <h1>Perimeter & Area</h1>

        <p className="perimeter-intro">
          Learn how to measure the boundary and the space inside shapes!
        </p>

        <section className="perimeter-section">

          <h2>📏 What is Perimeter?</h2>

          <p>
            Perimeter is the total distance around the boundary of a
            closed shape.
          </p>

          <div className="perimeter-visual">
            ┌──────────┐
            │          │
            │          │
            └──────────┘
          </div>

          <div className="perimeter-highlight">
            ✨ Perimeter means distance around.
          </div>

        </section>

        <section className="perimeter-section">

          <h2>⬛ Perimeter of a Square</h2>

          <p>
            A square has four equal sides.
          </p>

          <div className="formula-box">
            <strong>Perimeter = 4 × Side</strong>
          </div>

          <div className="perimeter-example">
            Side = 5 cm
            <br />
            Perimeter = 4 × 5 = <strong>20 cm</strong>
          </div>

        </section>

        <section className="perimeter-section">

          <h2>▭ Perimeter of a Rectangle</h2>

          <p>
            A rectangle has two pairs of equal opposite sides.
          </p>

          <div className="formula-box">
            <strong>Perimeter = 2 × (Length + Breadth)</strong>
          </div>

          <div className="perimeter-example">
            Length = 8 cm
            <br />
            Breadth = 4 cm
            <br />
            Perimeter = 2 × (8 + 4) = <strong>24 cm</strong>
          </div>

        </section>

        <section className="perimeter-section">

          <h2>🟦 What is Area?</h2>

          <p>
            Area is the amount of surface covered by a shape.
            It tells us how much space is inside the boundary.
          </p>

          <div className="area-visual">
            🟦 🟦 🟦 🟦
            <br />
            🟦 🟦 🟦 🟦
            <br />
            🟦 🟦 🟦 🟦
          </div>

          <div className="perimeter-highlight">
            ✨ Area means space inside.
          </div>

        </section>

        <section className="perimeter-section">

          <h2>⬛ Area of a Square</h2>

          <p>
            To find the area of a square, multiply its side by itself.
          </p>

          <div className="formula-box">
            <strong>Area = Side × Side</strong>
          </div>

          <div className="perimeter-example">
            Side = 6 cm
            <br />
            Area = 6 × 6 = <strong>36 cm²</strong>
          </div>

        </section>

        <section className="perimeter-section">

          <h2>▭ Area of a Rectangle</h2>

          <p>
            The area of a rectangle is found by multiplying its length
            by its breadth.
          </p>

          <div className="formula-box">
            <strong>Area = Length × Breadth</strong>
          </div>

          <div className="perimeter-example">
            Length = 8 cm
            <br />
            Breadth = 5 cm
            <br />
            Area = 8 × 5 = <strong>40 cm²</strong>
          </div>

        </section>

        <section className="perimeter-section">

          <h2>⚖️ Perimeter vs Area</h2>

          <div className="comparison-cards">

            <div className="comparison-card">
              <h3>📏 Perimeter</h3>
              <p>Measures the distance around a shape.</p>
              <p>Units: cm, m, km</p>
            </div>

            <div className="comparison-card">
              <h3>🟦 Area</h3>
              <p>Measures the space inside a shape.</p>
              <p>Units: cm², m², km²</p>
            </div>

          </div>

        </section>

        <section className="perimeter-section">

          <h2>🌍 Maths in Everyday Life</h2>

          <div className="perimeter-story">

            <div className="story-icon">
              🏡
            </div>

            <p>
              We use perimeter when fencing a garden or putting a border
              around a field. We use area when finding how much paint,
              carpet or flooring is needed.
            </p>

            <div className="perimeter-highlight">
              🔎 Maths helps us measure the world around us!
            </div>

          </div>

        </section>

        <section className="perimeter-section">

          <h2>💡 Remember</h2>

          <div className="perimeter-rules">

            <p>📏 Perimeter = Distance around a shape</p>

            <p>🟦 Area = Space inside a shape</p>

            <p>⬛ Square Area = Side × Side</p>

            <p>▭ Rectangle Area = Length × Breadth</p>

          </div>

        </section>

        <section className="perimeter-section challenge">

          <div className="challenge-icon">
            🎯
          </div>

          <h2>Mini Challenge</h2>

          <p>
            Test your measurement skills!
          </p>

          <div className="perimeter-question">

            <p>1. What is the perimeter of a square with side 5 cm? ❓</p>

            <p>2. What is the area of a square with side 4 cm? ❓</p>

            <p>3. What does perimeter measure? ❓</p>

            <p>4. What does area measure? ❓</p>

          </div>

        </section>

      </div>

    </div>
  )
}

export default PerimeterArea