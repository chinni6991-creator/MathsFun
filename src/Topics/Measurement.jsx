import './Measurement.css'

function Measurement({ onBack }) {
  return (
    <div className="measurement-topic">

      <button className="measurement-back" onClick={onBack}>
        ← BACK TO LEARN
      </button>

      <div className="measurement-content">

        <div className="measurement-icon">
          📏
        </div>

        <p className="measurement-label">
          MATHS • LEARN
        </p>

        <h1>Measurement</h1>

        <p className="measurement-intro">
          Learn how we measure length, weight, capacity and more!
        </p>

        {/* WHAT IS MEASUREMENT */}

        <section className="measurement-section">

          <h2>📏 What is Measurement?</h2>

          <p>
            Measurement tells us how long, heavy, large or how much
            of something there is.
          </p>

          <div className="measurement-highlight">
            💡 We use standard units to measure different quantities.
          </div>

        </section>

        {/* LENGTH */}

        <section className="measurement-section">

          <h2>📐 Measuring Length</h2>

          <p>
            Length tells us how long or short something is.
          </p>

          <div className="measurement-cards">

            <div className="measurement-card">
              <h3>📏 Millimetre</h3>
              <p>mm</p>
            </div>

            <div className="measurement-card">
              <h3>📏 Centimetre</h3>
              <p>cm</p>
            </div>

            <div className="measurement-card">
              <h3>📏 Metre</h3>
              <p>m</p>
            </div>

            <div className="measurement-card">
              <h3>🛣️ Kilometre</h3>
              <p>km</p>
            </div>

          </div>

          <div className="measurement-example">
            1 metre = <strong>100 centimetres</strong>
          </div>

        </section>

        {/* MASS */}

        <section className="measurement-section">

          <h2>⚖️ Measuring Mass</h2>

          <p>
            Mass tells us how heavy or light something is.
          </p>

          <div className="measurement-cards">

            <div className="measurement-card">
              <h3>⚖️ Gram</h3>
              <p>g</p>
            </div>

            <div className="measurement-card">
              <h3>⚖️ Kilogram</h3>
              <p>kg</p>
            </div>

          </div>

          <div className="measurement-example">
            1 kilogram = <strong>1000 grams</strong>
          </div>

        </section>

        {/* CAPACITY */}

        <section className="measurement-section">

          <h2>🥛 Measuring Capacity</h2>

          <p>
            Capacity tells us how much liquid a container can hold.
          </p>

          <div className="measurement-cards">

            <div className="measurement-card">
              <h3>🥤 Millilitre</h3>
              <p>mL</p>
            </div>

            <div className="measurement-card">
              <h3>🪣 Litre</h3>
              <p>L</p>
            </div>

          </div>

          <div className="measurement-example">
            1 litre = <strong>1000 millilitres</strong>
          </div>

        </section>

        {/* CONVERSION */}

        <section className="measurement-section">

          <h2>🔄 Converting Units</h2>

          <p>
            Sometimes we need to change one measurement unit into another.
          </p>

          <div className="measurement-example">
            3 m = <strong>300 cm</strong>
          </div>

          <div className="measurement-example">
            2 kg = <strong>2000 g</strong>
          </div>

        </section>

        {/* EVERYDAY LIFE */}

        <section className="measurement-section">

          <h2>🌟 Measurement Around Us</h2>

          <div className="measurement-story">

            <div className="story-icon">
              🏠
            </div>

            <p>
              We measure the length of a room, the weight of vegetables,
              the amount of water in a bottle and the distance between places.
            </p>

            <div className="measurement-highlight">
              Measurement is everywhere around us! 📏
            </div>

          </div>

        </section>

        {/* CHALLENGE */}

        <section className="measurement-section challenge">

          <div className="challenge-icon">
            🎯
          </div>

          <h2>Mini Challenge</h2>

          <p>
            Test your measurement skills!
          </p>

          <div className="measurement-question">

            <p>1. How many centimetres are in 2 metres? ❓</p>

            <p>2. How many grams are in 1 kilogram? ❓</p>

            <p>3. Which unit would you use to measure water in a bottle? ❓</p>

          </div>

        </section>

      </div>

    </div>
  )
}

export default Measurement