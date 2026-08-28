import './LinesAngles.css'

function LinesAngles({ onBack }) {
  return (
    <div className="lines-topic">

      <button className="lines-back" onClick={onBack}>
        ← BACK TO LEARN
      </button>

      <div className="lines-content">

        <div className="lines-icon">
          📐
        </div>

        <p className="lines-label">
          MATHS • LEARN
        </p>

        <h1>Lines & Angles</h1>

        <p className="lines-intro">
          Explore different types of lines and discover the fascinating world of angles!
        </p>

        {/* LINES */}

        <section className="lines-section">

          <h2>📏 What is a Line?</h2>

          <p>
            A line is a straight path that extends endlessly in both directions.
            It has no beginning or end.
          </p>

          <div className="line-visual">
            ←──────────────→
          </div>

        </section>

        {/* TYPES OF LINES */}

        <section className="lines-section">

          <h2>📏 Types of Lines</h2>

          <div className="lines-cards">

            <div className="lines-card">
              <h3>➖ Horizontal</h3>
              <div className="small-line horizontal"></div>
              <p>Runs from left to right.</p>
            </div>

            <div className="lines-card">
              <h3>│ Vertical</h3>
              <div className="small-line vertical"></div>
              <p>Runs from top to bottom.</p>
            </div>

            <div className="lines-card">
              <h3>↗️ Slanting</h3>
              <div className="small-line slanting"></div>
              <p>Runs at an angle.</p>
            </div>

          </div>

        </section>

        {/* LINE SEGMENT */}

        <section className="lines-section">

          <h2>📍 Line Segment</h2>

          <p>
            A line segment is a part of a line with two fixed endpoints.
          </p>

          <div className="line-visual">
            ●────────────●
          </div>

          <p>
            The two dots represent the endpoints.
          </p>

        </section>

        {/* RAY */}

        <section className="lines-section">

          <h2>➡️ Ray</h2>

          <p>
            A ray has one fixed endpoint and extends endlessly in one direction.
          </p>

          <div className="line-visual">
            ●──────────────→
          </div>

        </section>

        {/* ANGLE */}

        <section className="lines-section">

          <h2>📐 What is an Angle?</h2>

          <p>
            An angle is formed when two rays meet at a common endpoint.
          </p>

          <div className="angle-visual">
            ∠
          </div>

          <p>
            The common endpoint is called the <strong>vertex</strong>.
          </p>

        </section>

        {/* TYPES OF ANGLES */}

        <section className="lines-section">

          <h2>📐 Types of Angles</h2>

          <div className="angle-cards">

            <div className="angle-card">
              <h3>🟢 Acute Angle</h3>
              <div className="angle-symbol">∠ 45°</div>
              <p>Less than 90°.</p>
            </div>

            <div className="angle-card">
              <h3>🟡 Right Angle</h3>
              <div className="angle-symbol">∟ 90°</div>
              <p>Exactly 90°.</p>
            </div>

            <div className="angle-card">
              <h3>🟠 Obtuse Angle</h3>
              <div className="angle-symbol">∠ 120°</div>
              <p>More than 90° but less than 180°.</p>
            </div>

            <div className="angle-card">
              <h3>🔵 Straight Angle</h3>
              <div className="angle-symbol">──── 180°</div>
              <p>Exactly 180°.</p>
            </div>

          </div>

        </section>

        {/* ANGLE MEASUREMENT */}

        <section className="lines-section">

          <h2>📏 Measuring Angles</h2>

          <p>
            We measure angles in <strong>degrees (°)</strong> using a
            protractor.
          </p>

          <div className="measurement-example">
            90° = Right Angle
          </div>

          <div className="measurement-example">
            180° = Straight Angle
          </div>

        </section>

        {/* EVERYDAY LIFE */}

        <section className="lines-section">

          <h2>🌟 Lines & Angles Around Us</h2>

          <div className="lines-story">

            <div className="story-icon">
              🏠
            </div>

            <p>
              We can see lines and angles in doors, windows, roads,
              buildings, clocks and many objects around us.
            </p>

            <div className="lines-highlight">
              📐 Geometry is all around us!
            </div>

          </div>

        </section>

        {/* CHALLENGE */}

        <section className="lines-section challenge">

          <div className="challenge-icon">
            🎯
          </div>

          <h2>Mini Challenge</h2>

          <p>
            Test your geometry skills!
          </p>

          <div className="lines-question">

            <p>1. How many degrees are in a right angle? ❓</p>

            <p>2. Which angle is less than 90°? ❓</p>

            <p>3. How many endpoints does a line segment have? ❓</p>

            <p>4. How many degrees are in a straight angle? ❓</p>

          </div>

        </section>

      </div>

    </div>
  )
}

export default LinesAngles