import './ConstructionsTilings.css'

function ConstructionsTilings({ onBack }) {
  return (
    <div className="constructions-topic">

      <button className="constructions-back" onClick={onBack}>
        ← BACK TO LEARN
      </button>

      <div className="constructions-content">

        <div className="constructions-icon">
          📐🧩
        </div>

        <p className="constructions-label">
          MATHS • LEARN
        </p>

        <h1>Constructions & Tilings</h1>

        <p className="constructions-intro">
          Discover how mathematicians construct shapes and create beautiful
          patterns by fitting shapes together!
        </p>

        <section className="constructions-section">

          <h2>📐 What are Geometric Constructions?</h2>

          <p>
            Geometric constructions are methods used to create accurate
            shapes, lines and angles using mathematical tools.
          </p>

          <div className="constructions-highlight">
            ✨ A ruler and compass are commonly used for geometric constructions.
          </div>

        </section>

        <section className="constructions-section">

          <h2>🧰 Tools for Construction</h2>

          <div className="construction-cards">

            <div className="construction-card">
              <div className="tool-icon">📏</div>
              <h3>Ruler</h3>
              <p>Used to draw straight lines and measure lengths.</p>
            </div>

            <div className="construction-card">
              <div className="tool-icon">🧭</div>
              <h3>Compass</h3>
              <p>Used to draw circles and arcs.</p>
            </div>

            <div className="construction-card">
              <div className="tool-icon">📐</div>
              <h3>Set Square</h3>
              <p>Useful for drawing accurate angles and parallel lines.</p>
            </div>

            <div className="construction-card">
              <div className="tool-icon">📊</div>
              <h3>Protractor</h3>
              <p>Used to measure and construct angles.</p>
            </div>

          </div>

        </section>

        <section className="constructions-section">

          <h2>📏 Constructing a Line Segment</h2>

          <p>
            A line segment can be drawn accurately using a ruler.
          </p>

          <div className="construction-steps">

            <div>
              <strong>Step 1:</strong> Mark the starting point.
            </div>

            <div>
              <strong>Step 2:</strong> Place the ruler along the points.
            </div>

            <div>
              <strong>Step 3:</strong> Draw the line to the required length.
            </div>

          </div>

          <div className="construction-example">
            A ───────────── B
          </div>

        </section>

        <section className="constructions-section">

          <h2>⭕ Constructing a Circle</h2>

          <p>
            A compass can be used to draw a circle with a fixed radius.
          </p>

          <div className="circle-construction">
            ⭕
          </div>

          <div className="construction-steps">

            <div>
              <strong>1.</strong> Mark the centre.
            </div>

            <div>
              <strong>2.</strong> Set the compass to the required radius.
            </div>

            <div>
              <strong>3.</strong> Rotate the compass around the centre.
            </div>

          </div>

        </section>

        <section className="constructions-section">

          <h2>📐 Constructing an Angle</h2>

          <p>
            Angles can be constructed accurately using a protractor.
          </p>

          <div className="angle-construction">
            ∠ 60°
          </div>

          <p>
            For example, we can construct an angle measuring
            <strong> 60°</strong>.
          </p>

        </section>

        <section className="constructions-section">

          <h2>🧩 What is a Tiling?</h2>

          <p>
            Tiling is the process of covering a surface completely with
            shapes without leaving gaps or overlaps.
          </p>

          <div className="tiling-visual">
            <span>⬜</span>
            <span>⬜</span>
            <span>⬜</span>
            <span>⬜</span>
            <br />
            <span>⬜</span>
            <span>⬜</span>
            <span>⬜</span>
            <span>⬜</span>
          </div>

          <div className="constructions-highlight">
            🧩 Good tiling fills the surface without gaps or overlaps.
          </div>

        </section>

        <section className="constructions-section">

          <h2>🔷 Shapes That Can Tile</h2>

          <div className="tiling-cards">

            <div className="tiling-card">
              <div className="tiling-symbol">⬜</div>
              <h3>Square</h3>
              <p>Squares fit together perfectly.</p>
            </div>

            <div className="tiling-card">
              <div className="tiling-symbol">▭</div>
              <h3>Rectangle</h3>
              <p>Rectangles can cover a surface without gaps.</p>
            </div>

            <div className="tiling-card">
              <div className="tiling-symbol">🔺</div>
              <h3>Triangle</h3>
              <p>Equal triangles can form repeating patterns.</p>
            </div>

            <div className="tiling-card">
              <div className="tiling-symbol">⬡</div>
              <h3>Hexagon</h3>
              <p>Regular hexagons can create honeycomb patterns.</p>
            </div>

          </div>

        </section>

        <section className="constructions-section">

          <h2>🐝 Tiling in Nature</h2>

          <div className="construction-story">

            <div className="story-icon">
              🐝
            </div>

            <p>
              Honeybees build their honeycombs using hexagonal cells.
              Hexagons fit together efficiently without gaps.
            </p>

            <div className="constructions-highlight">
              🍯 Nature uses geometry in amazing ways!
            </div>

          </div>

        </section>

        <section className="constructions-section">

          <h2>🏠 Tiling Around Us</h2>

          <div className="construction-cards">

            <div className="construction-card">
              <h3>🏠 Floor Tiles</h3>
              <p>Tiles cover floors using repeating patterns.</p>
            </div>

            <div className="construction-card">
              <h3>🧱 Brick Walls</h3>
              <p>Bricks form repeating arrangements.</p>
            </div>

            <div className="construction-card">
              <h3>🎨 Rangoli</h3>
              <p>Geometric shapes create beautiful patterns.</p>
            </div>

          </div>

        </section>

        <section className="constructions-section challenge">

          <div className="challenge-icon">
            🎯
          </div>

          <h2>Mini Challenge</h2>

          <p>
            Test your construction and tiling skills!
          </p>

          <div className="constructions-question">

            <p>1. Which tool is used to draw circles? ❓</p>

            <p>2. Which tool is used to measure angles? ❓</p>

            <p>3. What does tiling mean? ❓</p>

            <p>4. Which shape is commonly found in honeycombs? ❓</p>

          </div>

        </section>

      </div>

    </div>
  )
}

export default ConstructionsTilings