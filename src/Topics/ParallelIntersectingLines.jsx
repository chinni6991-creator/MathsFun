import './ParallelIntersectingLines.css'

function ParallelIntersectingLines({ onBack }) {
  return (
    <div className="parallel-topic">

      <button className="parallel-back" onClick={onBack}>
        ← BACK TO LEARN
      </button>

      <div className="parallel-content">

        <div className="parallel-icon">
          📏✖️
        </div>

        <p className="parallel-label">
          MATHS • LEARN
        </p>

        <h1>Parallel & Intersecting Lines</h1>

        <p className="parallel-intro">
          Discover how lines travel, meet and form interesting patterns!
        </p>

        {/* PARALLEL LINES */}

        <section className="parallel-section">

          <h2>📏 What are Parallel Lines?</h2>

          <p>
            Parallel lines are lines that remain the same distance apart
            and never meet, even when extended.
          </p>

          <div className="parallel-visual">
            <div>←──────────────→</div>
            <div>←──────────────→</div>
          </div>

          <div className="parallel-highlight">
            ✨ Parallel lines never intersect.
          </div>

        </section>

        {/* EXAMPLES */}

        <section className="parallel-section">

          <h2>🌟 Examples of Parallel Lines</h2>

          <div className="parallel-cards">

            <div className="parallel-card">
              <h3>🚆 Railway Tracks</h3>
              <p>
                Railway tracks run side by side and are approximately
                parallel.
              </p>
            </div>

            <div className="parallel-card">
              <h3>📒 Notebook Lines</h3>
              <p>
                The ruled lines on a notebook are parallel to each other.
              </p>
            </div>

            <div className="parallel-card">
              <h3>🪜 Ladder</h3>
              <p>
                The two long sides of a ladder are usually parallel.
              </p>
            </div>

          </div>

        </section>

        {/* INTERSECTING LINES */}

        <section className="parallel-section">

          <h2>✖️ What are Intersecting Lines?</h2>

          <p>
            Intersecting lines are lines that cross or meet at one point.
          </p>

          <div className="intersection-visual">
            ✕
          </div>

          <p>
            The point where two lines meet is called the
            <strong> point of intersection</strong>.
          </p>

        </section>

        {/* PERPENDICULAR */}

        <section className="parallel-section">

          <h2>📐 Perpendicular Lines</h2>

          <p>
            When two lines intersect at a right angle of 90°, they are
            called perpendicular lines.
          </p>

          <div className="perpendicular-visual">
            ─────┐
                 │
                 │
          </div>

          <div className="parallel-example">
            90° = Right Angle
          </div>

        </section>

        {/* TRANSVERSAL */}

        <section className="parallel-section">

          <h2>📐 A Line Crossing Parallel Lines</h2>

          <p>
            A line that crosses two or more lines is called a
            <strong> transversal</strong>.
          </p>

          <div className="transversal-visual">
            <div>──────────────</div>
            <div>──────╱───────</div>
            <div>────╱─────────</div>
          </div>

        </section>

        {/* COMPARISON */}

        <section className="parallel-section">

          <h2>⚖️ Parallel vs Intersecting</h2>

          <div className="comparison-cards">

            <div className="comparison-card">
              <h3>📏 Parallel</h3>
              <p>Never meet.</p>
              <p>Same distance apart.</p>
            </div>

            <div className="comparison-card">
              <h3>✖️ Intersecting</h3>
              <p>Meet at a point.</p>
              <p>Can form different angles.</p>
            </div>

          </div>

        </section>

        {/* EVERYDAY LIFE */}

        <section className="parallel-section">

          <h2>🌍 Lines Around Us</h2>

          <div className="parallel-story">

            <div className="story-icon">
              🛣️
            </div>

            <p>
              Roads, railway tracks, windows, buildings and many
              everyday objects contain parallel or intersecting lines.
            </p>

            <div className="parallel-highlight">
              🔎 Look around you and find examples!
            </div>

          </div>

        </section>

        {/* CHALLENGE */}

        <section className="parallel-section challenge">

          <div className="challenge-icon">
            🎯
          </div>

          <h2>Mini Challenge</h2>

          <p>
            Test your understanding!
          </p>

          <div className="parallel-question">

            <p>1. Do parallel lines ever meet? ❓</p>

            <p>2. What is the angle between perpendicular lines? ❓</p>

            <p>3. What is the point where two lines meet called? ❓</p>

            <p>4. Are railway tracks an example of parallel lines? ❓</p>

          </div>

        </section>

      </div>

    </div>
  )
}

export default ParallelIntersectingLines