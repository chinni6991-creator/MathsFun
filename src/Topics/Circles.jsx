import './Circles.css'

function Circles({ onBack }) {
  return (
    <div className="circles-topic">

      <button className="circles-back" onClick={onBack}>
        ← BACK TO LEARN
      </button>

      <div className="circles-content">

        <div className="circles-icon">
          ⭕
        </div>

        <p className="circles-label">
          MATHS • LEARN
        </p>

        <h1>Circles</h1>

        <p className="circles-intro">
          Explore the beautiful world of circles and learn about their
          centre, radius, diameter and circumference!
        </p>

        <section className="circles-section">

          <h2>⭕ What is a Circle?</h2>

          <p>
            A circle is a closed curved shape in which every point on
            the boundary is at the same distance from the centre.
          </p>

          <div className="circle-visual">
            ⭕
          </div>

          <div className="circles-highlight">
            ✨ A circle has no straight sides and no vertices.
          </div>

        </section>

        <section className="circles-section">

          <h2>🎯 Centre of a Circle</h2>

          <p>
            The centre is the fixed point located exactly in the middle
            of a circle.
          </p>

          <div className="circle-example">
            Centre = <strong>O</strong>
          </div>

        </section>

        <section className="circles-section">

          <h2>📏 Radius</h2>

          <p>
            The radius is the distance from the centre of a circle
            to any point on its boundary.
          </p>

          <div className="circle-example">
            Radius = <strong>5 cm</strong>
          </div>

          <p>
            All radii of the same circle have equal length.
          </p>

        </section>

        <section className="circles-section">

          <h2>📐 Diameter</h2>

          <p>
            The diameter is a line segment that passes through the centre
            and joins two points on the circle.
          </p>

          <div className="circle-example">
            Diameter = <strong>2 × Radius</strong>
          </div>

          <div className="circle-example">
            If radius = 5 cm → Diameter = <strong>10 cm</strong>
          </div>

        </section>

        <section className="circles-section">

          <h2>🔄 Circumference</h2>

          <p>
            The circumference is the distance around the boundary
            of a circle.
          </p>

          <div className="circle-example">
            Circumference = <strong>2πr</strong>
          </div>

          <p>
            Here, <strong>r</strong> represents the radius.
          </p>

        </section>

        <section className="circles-section">

          <h2>🧩 Parts of a Circle</h2>

          <div className="circle-cards">

            <div className="circle-card">
              <h3>🎯 Centre</h3>
              <p>The middle point of the circle.</p>
            </div>

            <div className="circle-card">
              <h3>📏 Radius</h3>
              <p>Centre to boundary.</p>
            </div>

            <div className="circle-card">
              <h3>📐 Diameter</h3>
              <p>Passes through the centre.</p>
            </div>

            <div className="circle-card">
              <h3>🔄 Circumference</h3>
              <p>Distance around the circle.</p>
            </div>

          </div>

        </section>

        <section className="circles-section">

          <h2>🌟 Circles Around Us</h2>

          <div className="circles-story">

            <div className="story-icon">
              🚲
            </div>

            <p>
              Wheels, coins, clocks, plates, buttons and many other
              objects around us have circular shapes.
            </p>

            <div className="circles-highlight">
              🔎 Look around and find circular objects!
            </div>

          </div>

        </section>

        <section className="circles-section">

          <h2>💡 Remember</h2>

          <div className="circle-rules">

            <p>📏 Diameter = 2 × Radius</p>

            <p>🎯 Radius = Diameter ÷ 2</p>

            <p>⭕ All points on a circle are equally distant from its centre.</p>

          </div>

        </section>

        <section className="circles-section challenge">

          <div className="challenge-icon">
            🎯
          </div>

          <h2>Mini Challenge</h2>

          <p>
            Test your circle skills!
          </p>

          <div className="circles-question">

            <p>1. What is the distance from the centre to the boundary called? ❓</p>

            <p>2. If the radius is 6 cm, what is the diameter? ❓</p>

            <p>3. What do we call the distance around a circle? ❓</p>

            <p>4. Does a circle have any vertices? ❓</p>

          </div>

        </section>

      </div>

    </div>
  )
}

export default Circles