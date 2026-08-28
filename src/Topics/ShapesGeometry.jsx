import './ShapesGeometry.css'

function ShapesGeometry({ onBack }) {
  return (
    <div className="shapes-topic">

      <button className="shapes-back" onClick={onBack}>
        ← BACK TO LEARN
      </button>

      <div className="shapes-content">

        <div className="shapes-icon">
          🔺🟦⭕
        </div>

        <p className="shapes-label">
          MATHS • LEARN
        </p>

        <h1>Shapes & Geometry</h1>

        <p className="shapes-intro">
          Explore amazing shapes and discover their sides, corners and properties!
        </p>

        <section className="shapes-section">

          <h2>🔷 What is Geometry?</h2>

          <p>
            Geometry is the branch of mathematics that studies shapes,
            sizes, positions and properties of objects.
          </p>

          <div className="shapes-highlight">
            ✨ Geometry helps us understand the world of shapes around us.
          </div>

        </section>

        <section className="shapes-section">

          <h2>🔺 2D Shapes</h2>

          <p>
            2D shapes are flat shapes that have length and width.
          </p>

          <div className="shape-cards">

            <div className="shape-card">
              <div className="shape-symbol">🔺</div>
              <h3>Triangle</h3>
              <p>3 sides and 3 corners</p>
            </div>

            <div className="shape-card">
              <div className="shape-symbol">🟦</div>
              <h3>Square</h3>
              <p>4 equal sides and 4 corners</p>
            </div>

            <div className="shape-card">
              <div className="shape-symbol">▭</div>
              <h3>Rectangle</h3>
              <p>4 sides and 4 corners</p>
            </div>

            <div className="shape-card">
              <div className="shape-symbol">⭕</div>
              <h3>Circle</h3>
              <p>No sides and no corners</p>
            </div>

          </div>

        </section>

        <section className="shapes-section">

          <h2>🔢 Sides and Vertices</h2>

          <p>
            The straight edges of a polygon are called sides.
            The points where two sides meet are called vertices.
          </p>

          <div className="shapes-example">
            Triangle → <strong>3 sides + 3 vertices</strong>
          </div>

          <div className="shapes-example">
            Square → <strong>4 sides + 4 vertices</strong>
          </div>

        </section>

        <section className="shapes-section">

          <h2>📐 Types of Triangles</h2>

          <div className="triangle-cards">

            <div className="triangle-card">
              <h3>Equilateral</h3>
              <p>All 3 sides are equal.</p>
            </div>

            <div className="triangle-card">
              <h3>Isosceles</h3>
              <p>Two sides are equal.</p>
            </div>

            <div className="triangle-card">
              <h3>Scalene</h3>
              <p>All 3 sides are different.</p>
            </div>

          </div>

        </section>

        <section className="shapes-section">

          <h2>⬛ Quadrilaterals</h2>

          <p>
            A quadrilateral is a shape with four sides.
          </p>

          <div className="shape-cards">

            <div className="shape-card">
              <h3>Square</h3>
              <p>4 equal sides</p>
            </div>

            <div className="shape-card">
              <h3>Rectangle</h3>
              <p>Opposite sides equal</p>
            </div>

            <div className="shape-card">
              <h3>Rhombus</h3>
              <p>4 equal sides</p>
            </div>

            <div className="shape-card">
              <h3>Trapezium</h3>
              <p>One pair of parallel sides</p>
            </div>

          </div>

        </section>

        <section className="shapes-section">

          <h2>🧊 3D Shapes</h2>

          <p>
            3D shapes have length, width and height. They occupy space.
          </p>

          <div className="shape-cards">

            <div className="shape-card">
              <div className="shape-symbol">📦</div>
              <h3>Cube</h3>
              <p>6 square faces</p>
            </div>

            <div className="shape-card">
              <div className="shape-symbol">📦</div>
              <h3>Cuboid</h3>
              <p>6 rectangular faces</p>
            </div>

            <div className="shape-card">
              <div className="shape-symbol">⚽</div>
              <h3>Sphere</h3>
              <p>Round surface</p>
            </div>

            <div className="shape-card">
              <div className="shape-symbol">🥫</div>
              <h3>Cylinder</h3>
              <p>Two circular faces</p>
            </div>

          </div>

        </section>

        <section className="shapes-section">

          <h2>🌟 Shapes Around Us</h2>

          <div className="shapes-story">

            <div className="story-icon">
              🏠
            </div>

            <p>
              Shapes are everywhere! Windows, doors, books, balls,
              boxes, wheels and buildings all contain geometric shapes.
            </p>

            <div className="shapes-highlight">
              🔎 Look around and identify different shapes!
            </div>

          </div>

        </section>

        <section className="shapes-section challenge">

          <div className="challenge-icon">
            🎯
          </div>

          <h2>Mini Challenge</h2>

          <p>
            Test your geometry skills!
          </p>

          <div className="shapes-question">

            <p>1. How many sides does a triangle have? ❓</p>

            <p>2. How many equal sides does a square have? ❓</p>

            <p>3. Which 2D shape has no corners? ❓</p>

            <p>4. How many faces does a cube have? ❓</p>

          </div>

        </section>

      </div>

    </div>
  )
}

export default ShapesGeometry