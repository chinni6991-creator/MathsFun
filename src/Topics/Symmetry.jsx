import './Symmetry.css'

function Symmetry({ onBack }) {
  return (
    <div className="symmetry-topic">

      <button className="symmetry-back" onClick={onBack}>
        ← BACK TO LEARN
      </button>

      <div className="symmetry-content">

        <div className="symmetry-icon">
          🪞✨
        </div>

        <p className="symmetry-label">
          MATHS • LEARN
        </p>

        <h1>Symmetry</h1>

        <p className="symmetry-intro">
          Discover the beauty of balance, reflection and mirror-like shapes!
        </p>

        <section className="symmetry-section">

          <h2>🪞 What is Symmetry?</h2>

          <p>
            A shape has symmetry when one part matches another part
            perfectly after a reflection or fold.
          </p>

          <div className="symmetry-highlight">
            ✨ Symmetry creates balance and harmony in shapes.
          </div>

        </section>

        <section className="symmetry-section">

          <h2>📏 Line of Symmetry</h2>

          <p>
            A line of symmetry divides a shape into two matching halves.
          </p>

          <div className="symmetry-visual">
            ◀️ | ▶️
          </div>

          <p>
            If we fold the shape along the line, both halves match.
          </p>

        </section>

        <section className="symmetry-section">

          <h2>🔺 Shapes with Symmetry</h2>

          <div className="symmetry-cards">

            <div className="symmetry-card">
              <div className="shape-symbol">🦋</div>
              <h3>Butterfly</h3>
              <p>Has a line of symmetry.</p>
            </div>

            <div className="symmetry-card">
              <div className="shape-symbol">❤️</div>
              <h3>Heart</h3>
              <p>Has vertical symmetry.</p>
            </div>

            <div className="symmetry-card">
              <div className="shape-symbol">⬜</div>
              <h3>Square</h3>
              <p>Has 4 lines of symmetry.</p>
            </div>

            <div className="symmetry-card">
              <div className="shape-symbol">⭕</div>
              <h3>Circle</h3>
              <p>Has many lines of symmetry.</p>
            </div>

          </div>

        </section>

        <section className="symmetry-section">

          <h2>⬜ Symmetry in a Square</h2>

          <p>
            A square has four lines of symmetry.
          </p>

          <div className="symmetry-example">
            <strong>4 lines of symmetry</strong>
          </div>

          <p>
            Two pass through opposite vertices and two pass through
            the middle of opposite sides.
          </p>

        </section>

        <section className="symmetry-section">

          <h2>🔢 Symmetry in Numbers</h2>

          <p>
            Some digits can also have lines of symmetry depending on
            how they are written.
          </p>

          <div className="number-symmetry">
            0 &nbsp;&nbsp; 8
          </div>

        </section>

        <section className="symmetry-section">

          <h2>🔤 Symmetry in Letters</h2>

          <p>
            Some capital letters have lines of symmetry.
          </p>

          <div className="letter-symmetry">
            A &nbsp;&nbsp; H &nbsp;&nbsp; M &nbsp;&nbsp; T &nbsp;&nbsp; U
          </div>

        </section>

        <section className="symmetry-section">

          <h2>🌿 Symmetry in Nature</h2>

          <div className="symmetry-story">

            <div className="story-icon">
              🦋
            </div>

            <p>
              Many objects in nature show symmetry. Butterflies,
              leaves, flowers and some animals have beautiful balanced patterns.
            </p>

            <div className="symmetry-highlight">
              🔎 Nature is full of mathematical patterns!
            </div>

          </div>

        </section>

        <section className="symmetry-section">

          <h2>🏛️ Symmetry Around Us</h2>

          <div className="symmetry-cards">

            <div className="symmetry-card">
              <h3>🏛️ Buildings</h3>
              <p>Many buildings have balanced designs.</p>
            </div>

            <div className="symmetry-card">
              <h3>🎨 Art</h3>
              <p>Artists use symmetry to create beautiful patterns.</p>
            </div>

            <div className="symmetry-card">
              <h3>🪷 Rangoli</h3>
              <p>Many rangoli designs use repeated symmetry.</p>
            </div>

          </div>

        </section>

        <section className="symmetry-section">

          <h2>💡 Remember</h2>

          <div className="symmetry-rules">

            <p>🪞 Symmetry means matching parts.</p>

            <p>📏 A line of symmetry divides a shape into matching halves.</p>

            <p>✨ A shape can have one or more lines of symmetry.</p>

          </div>

        </section>

        <section className="symmetry-section challenge">

          <div className="challenge-icon">
            🎯
          </div>

          <h2>Mini Challenge</h2>

          <p>
            Test your symmetry skills!
          </p>

          <div className="symmetry-question">

            <p>1. What is a line of symmetry? ❓</p>

            <p>2. How many lines of symmetry does a square have? ❓</p>

            <p>3. Does a butterfly show symmetry? ❓</p>

            <p>4. How many lines of symmetry does a circle have? ❓</p>

          </div>

        </section>

      </div>

    </div>
  )
}

export default Symmetry
