import './MathsEverydayLife.css'

function MathsEverydayLife({ onBack }) {
  return (
    <div className="everyday-topic">

      <button className="everyday-back" onClick={onBack}>
        ← BACK TO LEARN
      </button>

      <div className="everyday-content">

        <div className="everyday-icon">
          🌍🧮
        </div>

        <p className="everyday-label">
          MATHS • LEARN
        </p>

        <h1>Maths in Everyday Life</h1>

        <p className="everyday-intro">
          Maths is everywhere! Discover how we use mathematics in our
          everyday activities.
        </p>

        <section className="everyday-section">

          <h2>🛒 Maths While Shopping</h2>

          <p>
            We use addition, subtraction, multiplication, division,
            money and percentages while shopping.
          </p>

          <div className="everyday-card">

            <div className="story-icon">
              🛍️
            </div>

            <p>
              A toy costs ₹250 and you pay ₹500.
            </p>

            <div className="everyday-example">
              ₹500 − ₹250 = <strong>₹250 change</strong>
            </div>

          </div>

        </section>

        <section className="everyday-section">

          <h2>⏰ Maths and Time</h2>

          <p>
            We use maths to read clocks, plan schedules and calculate
            how long activities take.
          </p>

          <div className="everyday-example">
            🕐 2:00 PM → 🕒 3:30 PM
            <br />
            Time taken = <strong>1 hour 30 minutes</strong>
          </div>

        </section>

        <section className="everyday-section">

          <h2>🍳 Maths in Cooking</h2>

          <p>
            Recipes use measurements, fractions and ratios to tell us
            how much of each ingredient is needed.
          </p>

          <div className="everyday-example">
            🥛 ½ cup + ½ cup = <strong>1 cup</strong>
          </div>

        </section>

        <section className="everyday-section">

          <h2>📏 Maths in Measurement</h2>

          <p>
            We measure length, weight, capacity and temperature in
            our daily lives.
          </p>

          <div className="everyday-cards">

            <div className="everyday-small-card">
              📏
              <h3>Length</h3>
              <p>cm, m, km</p>
            </div>

            <div className="everyday-small-card">
              ⚖️
              <h3>Weight</h3>
              <p>g, kg</p>
            </div>

            <div className="everyday-small-card">
              🥤
              <h3>Capacity</h3>
              <p>mL, L</p>
            </div>

            <div className="everyday-small-card">
              🌡️
              <h3>Temperature</h3>
              <p>°C</p>
            </div>

          </div>

        </section>

        <section className="everyday-section">

          <h2>🏠 Maths at Home</h2>

          <p>
            We use maths when arranging furniture, measuring rooms,
            counting objects and managing household expenses.
          </p>

          <div className="everyday-highlight">
            🏠 Measuring a room helps us decide how much flooring or
            paint we need.
          </div>

        </section>

        <section className="everyday-section">

          <h2>🚗 Maths While Travelling</h2>

          <p>
            Distance, speed, time, fuel and fares all involve mathematics.
          </p>

          <div className="everyday-example">
            🚗 Distance = <strong>120 km</strong>
            <br />
            ⏰ Time = <strong>2 hours</strong>
            <br />
            🚀 Average speed = <strong>60 km/h</strong>
          </div>

        </section>

        <section className="everyday-section">

          <h2>💰 Maths and Money</h2>

          <p>
            We use maths to save money, calculate expenses, compare prices
            and understand discounts.
          </p>

          <div className="everyday-example">
            Original price = ₹1,000
            <br />
            Discount = 10%
            <br />
            Discount amount = <strong>₹100</strong>
          </div>

        </section>

        <section className="everyday-section">

          <h2>📊 Maths and Data</h2>

          <p>
            Charts, tables and graphs help us understand information
            about weather, marks, sports and many other things.
          </p>

          <div className="data-visual">
            📊 📈 📉
          </div>

        </section>

        <section className="everyday-section">

          <h2>🏃 Maths in Sports</h2>

          <div className="everyday-cards">

            <div className="everyday-small-card">
              ⚽
              <h3>Scores</h3>
              <p>Counting goals and points.</p>
            </div>

            <div className="everyday-small-card">
              🏃
              <h3>Time</h3>
              <p>Measuring race timings.</p>
            </div>

            <div className="everyday-small-card">
              🏏
              <h3>Statistics</h3>
              <p>Comparing player performance.</p>
            </div>

          </div>

        </section>

        <section className="everyday-section">

          <h2>🌟 Why is Maths Important?</h2>

          <div className="everyday-highlight">
            🧠 Maths helps us think logically.
          </div>

          <div className="everyday-highlight">
            💰 Maths helps us manage money.
          </div>

          <div className="everyday-highlight">
            📏 Maths helps us measure things.
          </div>

          <div className="everyday-highlight">
            🧩 Maths helps us solve problems.
          </div>

        </section>

        <section className="everyday-section">

          <h2>🔎 Maths is Everywhere!</h2>

          <div className="everyday-story">

            <div className="story-icon">
              🌍
            </div>

            <p>
              From waking up in the morning to travelling, shopping,
              cooking, studying and playing, mathematics is part of
              almost everything we do.
            </p>

            <div className="everyday-highlight">
              ✨ Maths is not just a subject — it is a part of life!
            </div>

          </div>

        </section>

        <section className="everyday-section">

          <h2>💡 Remember</h2>

          <div className="everyday-rules">

            <p>🛒 We use maths while shopping.</p>

            <p>⏰ We use maths to manage time.</p>

            <p>🍳 We use maths while cooking.</p>

            <p>📏 We use maths for measurement.</p>

            <p>💰 We use maths to manage money.</p>

            <p>🌍 Maths is part of our everyday life.</p>

          </div>

        </section>

        <section className="everyday-section challenge">

          <div className="challenge-icon">
            🎯
          </div>

          <h2>Mini Challenge</h2>

          <p>
            Can you find maths around you?
          </p>

          <div className="everyday-question">

            <p>1. Where do you use addition while shopping? ❓</p>

            <p>2. How do you use fractions while cooking? ❓</p>

            <p>3. Name one situation where you use measurement. ❓</p>

            <p>4. Where do you use percentages in daily life? ❓</p>

          </div>

        </section>

      </div>

    </div>
  )
}

export default MathsEverydayLife