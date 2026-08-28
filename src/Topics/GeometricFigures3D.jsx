import './GeometricFigures3D.css'

function GeometricFigures3D({ onBack }) {
  return (
    <div className="figures3d-topic">

      <button className="figures3d-back" onClick={onBack}>
        ← BACK TO LEARN
      </button>

      <div className="figures3d-content">

        <div className="figures3d-icon">
          🧊📦
        </div>

        <p className="figures3d-label">
          MATHS • LEARN
        </p>

        <h1>3D & Geometric Figures</h1>

        <p className="figures3d-intro">
          Step into the world of solid shapes and discover faces,
          edges and vertices!
        </p>

        <section className="figures3d-section">

          <h2>🧊 What are 3D Shapes?</h2>

          <p>
            3D shapes are solid objects that have length, width and height.
            They occupy space.
          </p>

          <div className="figures3d-highlight">
            ✨ 3D means three dimensions: length, width and height.
          </div>

        </section>

        <section className="figures3d-section">

          <h2>📦 Cube</h2>

          <div className="figure-visual">
            🧊
          </div>

          <p>
            A cube has <strong>6 square faces</strong>,
            <strong> 12 edges</strong> and <strong>8 vertices</strong>.
          </p>

        </section>

        <section className="figures3d-section">

          <h2>📦 Cuboid</h2>

          <div className="figure-visual">
            📦
          </div>

          <p>
            A cuboid has <strong>6 rectangular faces</strong>,
            <strong> 12 edges</strong> and <strong>8 vertices</strong>.
          </p>

        </section>

        <section className="figures3d-section">

          <h2>⚽ Sphere</h2>

          <div className="figure-visual">
            ⚽
          </div>

          <p>
            A sphere is completely round. Every point on its surface
            is the same distance from its centre.
          </p>

          <div className="figures3d-example">
            Example: <strong>Ball</strong>
          </div>

        </section>

        <section className="figures3d-section">

          <h2>🥫 Cylinder</h2>

          <div className="figure-visual">
            🥫
          </div>

          <p>
            A cylinder has two circular faces and one curved surface.
          </p>

          <div className="figures3d-example">
            Example: <strong>Can</strong>
          </div>

        </section>

        <section className="figures3d-section">

          <h2>🔺 Cone</h2>

          <div className="figure-visual">
            🍦
          </div>

          <p>
            A cone has one circular base and a curved surface that
            meets at one point called the vertex.
          </p>

          <div className="figures3d-example">
            Example: <strong>Ice-cream cone</strong>
          </div>

        </section>

        <section className="figures3d-section">

          <h2>🔷 Parts of a 3D Shape</h2>

          <div className="parts-cards">

            <div className="parts-card">
              <h3>⬜ Face</h3>
              <p>A flat or curved surface of a solid shape.</p>
            </div>

            <div className="parts-card">
              <h3>📏 Edge</h3>
              <p>The line where two faces meet.</p>
            </div>

            <div className="parts-card">
              <h3>📍 Vertex</h3>
              <p>A point where edges meet.</p>
            </div>

          </div>

        </section>

        <section className="figures3d-section">

          <h2>⚖️ Compare 3D Shapes</h2>

          <div className="shape-table">

            <div className="shape-row">
              <strong>Cube</strong>
              <span>6 Faces</span>
              <span>12 Edges</span>
              <span>8 Vertices</span>
            </div>

            <div className="shape-row">
              <strong>Cuboid</strong>
              <span>6 Faces</span>
              <span>12 Edges</span>
              <span>8 Vertices</span>
            </div>

            <div className="shape-row">
              <strong>Cylinder</strong>
              <span>2 Flat Faces</span>
              <span>2 Curved Edges</span>
              <span>0 Vertices</span>
            </div>

            <div className="shape-row">
              <strong>Sphere</strong>
              <span>1 Curved Surface</span>
              <span>0 Edges</span>
              <span>0 Vertices</span>
            </div>

          </div>

        </section>

        <section className="figures3d-section">

          <h2>🌍 3D Shapes Around Us</h2>

          <div className="figures3d-story">

            <div className="story-icon">
              🏠
            </div>

            <p>
              Boxes, balls, cans, bottles, buildings and many other
              objects around us can be represented using 3D geometric figures.
            </p>

            <div className="figures3d-highlight">
              🔎 Look around and identify the 3D shapes you can see!
            </div>

          </div>

        </section>

        <section className="figures3d-section">

          <h2>💡 Remember</h2>

          <div className="figures3d-rules">

            <p>🧊 3D shapes occupy space.</p>

            <p>⬜ Faces are surfaces.</p>

            <p>📏 Edges are where faces meet.</p>

            <p>📍 Vertices are points where edges meet.</p>

          </div>

        </section>

        <section className="figures3d-section challenge">

          <div className="challenge-icon">
            🎯
          </div>

          <h2>Mini Challenge</h2>

          <p>
            Test your 3D geometry skills!
          </p>

          <div className="figures3d-question">

            <p>1. How many faces does a cube have? ❓</p>

            <p>2. How many vertices does a cuboid have? ❓</p>

            <p>3. Which 3D shape is completely round? ❓</p>

            <p>4. Which shape has one circular base and one vertex? ❓</p>

          </div>

        </section>

      </div>

    </div>
  )
}

export default GeometricFigures3D