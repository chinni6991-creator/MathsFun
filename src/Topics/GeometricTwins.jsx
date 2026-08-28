import './GeometricTwins.css'

function GeometricTwins({ onBack }) {
  return (
    <div className="twins-topic">

      <button className="twins-back" onClick={onBack}>
        ← BACK TO LEARN
      </button>

      <div className="twins-content">

        <div className="twins-icon">
          👯‍♀️🔷
        </div>

        <p className="twins-label">
          MATHS • LEARN
        </p>

        <h1>Geometric Twins</h1>

        <p className="twins-intro">
          Explore shapes that look alike and discover how geometry
          helps us compare them!
        </p>

        <section className="twins-section">

          <h2>👯 What are Geometric Twins?</h2>

          <p>
            Geometric twins are shapes that have the same important
            properties or look exactly alike, even if they are placed
            in different positions.
          </p>

          <div className="twins-highlight">
            ✨ Two shapes can be the same even when they are rotated or moved.
          </div>

        </section>

        <section className="twins-section">

          <h2>🔷 Same Shape, Different Position</h2>

          <p>
            A shape can be moved, turned or flipped without changing
            its basic shape.
          </p>

          <div className="twins-visual">
            🔺 &nbsp;&nbsp;&nbsp;&nbsp; 🔺
          </div>

          <div className="twins-example">
            Same shape → Different position
          </div>

        </section>

        <section className="twins-section">

          <h2>🔄 Rotation</h2>

          <p>
            Rotation means turning a shape around a fixed point.
            The shape remains the same size and form.
          </p>

          <div className="twins-visual">
            🔺 → 🔻
          </div>

          <div className="twins-highlight">
            🔄 Turning a shape does not change its basic properties.
          </div>

        </section>

        <section className="twins-section">

          <h2>↔️ Translation</h2>

          <p>
            Translation means moving a shape from one place to another
            without changing its size, shape or orientation.
          </p>

          <div className="twins-visual">
            🟦 &nbsp;&nbsp; ➡️ &nbsp;&nbsp; 🟦
          </div>

        </section>

        <section className="twins-section">

          <h2>🪞 Reflection</h2>

          <p>
            Reflection creates a mirror image of a shape across a line.
          </p>

          <div className="twins-visual">
            ◀️ 🪞 ▶️
          </div>

          <div className="twins-example">
            Mirror image = Reflection
          </div>

        </section>

        <section className="twins-section">

          <h2>📏 Same Size and Shape</h2>

          <p>
            When two shapes have exactly the same size and shape,
            they are called congruent shapes.
          </p>

          <div className="congruent-cards">

            <div className="congruent-card">
              <div className="shape-symbol">🟦</div>
              <h3>Shape A</h3>
              <p>Same size</p>
            </div>

            <div className="congruent-card">
              <div className="shape-symbol">🟦</div>
              <h3>Shape B</h3>
              <p>Same shape</p>
            </div>

          </div>

          <div className="twins-highlight">
            ✨ Same size + Same shape = Congruent
          </div>

        </section>

        <section className="twins-section">

          <h2>🔍 Compare the Shapes</h2>

          <div className="twins-cards">

            <div className="twins-card">
              <h3>📐 Size</h3>
              <p>Compare lengths and dimensions.</p>
            </div>

            <div className="twins-card">
              <h3>🔷 Shape</h3>
              <p>Compare the form and angles.</p>
            </div>

            <div className="twins-card">
              <h3>📏 Sides</h3>
              <p>Check the number and lengths of sides.</p>
            </div>

            <div className="twins-card">
              <h3>📐 Angles</h3>
              <p>Compare corresponding angles.</p>
            </div>

          </div>

        </section>

        <section className="twins-section">

          <h2>🌍 Geometric Twins Around Us</h2>

          <div className="twins-story">

            <div className="story-icon">
              🪟
            </div>

            <p>
              Many objects around us have matching shapes. Window panes,
              floor tiles, books and repeated designs often contain
              pairs of identical geometric shapes.
            </p>

            <div className="twins-highlight">
              🔎 Look around and find two shapes that match!
            </div>

          </div>

        </section>

        <section className="twins-section">

          <h2>💡 Remember</h2>

          <div className="twins-rules">

            <p>👯 Geometric twins can have the same shape and size.</p>

            <p>🔄 Rotation changes the position, not the shape.</p>

            <p>↔️ Translation moves a shape without changing it.</p>

            <p>🪞 Reflection creates a mirror image.</p>

            <p>✨ Same shape and same size means congruent shapes.</p>

          </div>

        </section>

        <section className="twins-section challenge">

          <div className="challenge-icon">
            🎯
          </div>

          <h2>Mini Challenge</h2>

          <p>
            Test your geometry skills!
          </p>

          <div className="twins-question">

            <p>1. What happens when a shape is rotated? ❓</p>

            <p>2. What is a mirror image called? ❓</p>

            <p>3. What does translation mean? ❓</p>

            <p>4. What do we call shapes with the same size and shape? ❓</p>

          </div>

        </section>

      </div>

    </div>
  )
}

export default GeometricTwins