import './ConnectingDots.css'

function ConnectingDots({ onBack }) {
  return (
    <div className="dots-topic">

      <button className="dots-back" onClick={onBack}>
        ← BACK TO LEARN
      </button>

      <div className="dots-content">

        <div className="dots-icon">
          🔵📍
        </div>

        <p className="dots-label">
          MATHS • LEARN
        </p>

        <h1>Connecting the Dots</h1>

        <p className="dots-intro">
          Discover how points, lines and patterns come together to create
          interesting mathematical figures!
        </p>

        <section className="dots-section">

          <h2>📍 What is a Point?</h2>

          <p>
            A point represents an exact position or location.
            It has no length, width or height.
          </p>

          <div className="point-visual">
            •
          </div>

          <div className="dots-highlight">
            ✨ A point tells us where something is located.
          </div>

        </section>

        <section className="dots-section">

          <h2>📏 Joining Two Points</h2>

          <p>
            When two points are joined with a straight path,
            we get a line segment.
          </p>

          <div className="dots-visual">
            A •────────• B
          </div>

          <p>
            The points <strong>A</strong> and <strong>B</strong> are
            the endpoints of the line segment.
          </p>

        </section>

        <section className="dots-section">

          <h2>🔗 Connecting More Points</h2>

          <p>
            By connecting several points, we can create different
            shapes and patterns.
          </p>

          <div className="dots-visual">
            •────• 
            <br />
            │&nbsp;&nbsp;&nbsp;&nbsp;╲
            <br />
            •────• 
          </div>

          <div className="dots-highlight">
            🔎 Connecting points can create geometric figures.
          </div>

        </section>

        <section className="dots-section">

          <h2>🔺 Make a Triangle</h2>

          <p>
            Three points can be connected to form a triangle.
          </p>

          <div className="triangle-dots">
            &nbsp;&nbsp;&nbsp;&nbsp;•
            <br />
            &nbsp;&nbsp;&nbsp;╱&nbsp;╲
            <br />
            &nbsp;&nbsp;•────• 
          </div>

          <div className="dots-example">
            3 points → 3 line segments → Triangle
          </div>

        </section>

        <section className="dots-section">

          <h2>⬛ Make a Square</h2>

          <p>
            Four points can be connected in the correct way to form
            a square.
          </p>

          <div className="square-dots">
            •────•
            <br />
            │&nbsp;&nbsp;&nbsp;&nbsp;│
            <br />
            •────•
          </div>

          <div className="dots-example">
            4 points → 4 sides → Square
          </div>

        </section>

        <section className="dots-section">

          <h2>🧩 Dot Patterns</h2>

          <div className="dot-cards">

            <div className="dot-card">
              <h3>🔺 Triangle</h3>
              <p>Connect 3 points.</p>
            </div>

            <div className="dot-card">
              <h3>⬛ Square</h3>
              <p>Connect 4 points.</p>
            </div>

            <div className="dot-card">
              <h3>⬟ Polygon</h3>
              <p>Connect several points to make a closed shape.</p>
            </div>

          </div>

        </section>

        <section className="dots-section">

          <h2>🔢 Number Patterns with Dots</h2>

          <p>
            Dots can also be arranged to show number patterns.
          </p>

          <div className="number-dots">

            <div>•</div>

            <div>••</div>

            <div>•••</div>

            <div>••••</div>

          </div>

          <div className="dots-highlight">
            ✨ Adding one dot each time creates a simple pattern.
          </div>

        </section>

        <section className="dots-section">

          <h2>🎨 Connect-the-Dots Activities</h2>

          <div className="dots-story">

            <div className="story-icon">
              🎨
            </div>

            <p>
              Connect-the-dots activities help us practise counting,
              following sequences, recognising shapes and understanding
              positions.
            </p>

            <div className="dots-highlight">
              🧠 Maths and creativity can work together!
            </div>

          </div>

        </section>

        <section className="dots-section">

          <h2>🌍 Maths Around Us</h2>

          <p>
            Maps, drawings, graphs and geometric designs use points and
            lines to represent objects and information.
          </p>

          <div className="dots-example">
            📍 Point + 📏 Line + 🔗 Connections = Geometry
          </div>

        </section>

        <section className="dots-section">

          <h2>💡 Remember</h2>

          <div className="dots-rules">

            <p>📍 A point shows a position.</p>

            <p>📏 Two points can be joined by a line segment.</p>

            <p>🔺 Connecting points can create shapes.</p>

            <p>🧩 Different arrangements of points can create patterns.</p>

          </div>

        </section>

        <section className="dots-section challenge">

          <div className="challenge-icon">
            🎯
          </div>

          <h2>Mini Challenge</h2>

          <p>
            Test your knowledge!
          </p>

          <div className="dots-question">

            <p>1. What does a point represent? ❓</p>

            <p>2. How many points are needed to make a triangle? ❓</p>

            <p>3. How many sides does a square have? ❓</p>

            <p>4. What can we create by connecting points? ❓</p>

          </div>

        </section>

      </div>

    </div>
  )
}

export default ConnectingDots