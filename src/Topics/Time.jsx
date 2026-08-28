import './Time.css'

function Time({ onBack }) {
  return (
    <div className="time-topic">

      <button className="time-back" onClick={onBack}>
        ← BACK TO LEARN
      </button>

      <div className="time-content">

        <div className="time-icon">
          ⏰
        </div>

        <p className="time-label">
          MATHS • LEARN
        </p>

        <h1>Time</h1>

        <p className="time-intro">
          Learn to read clocks, calculate time and understand our daily schedule!
        </p>

        {/* WHAT IS TIME */}

        <section className="time-section">

          <h2>⏰ What is Time?</h2>

          <p>
            Time helps us understand when something happens
            and how long an activity takes.
          </p>

          <div className="time-highlight">
            🕐 We use clocks and calendars to measure and organise time.
          </div>

        </section>

        {/* UNITS OF TIME */}

        <section className="time-section">

          <h2>📅 Units of Time</h2>

          <div className="time-cards">

            <div className="time-card">
              <h3>⏱️ Second</h3>
              <p>60 seconds = 1 minute</p>
            </div>

            <div className="time-card">
              <h3>⏰ Minute</h3>
              <p>60 minutes = 1 hour</p>
            </div>

            <div className="time-card">
              <h3>🕐 Hour</h3>
              <p>24 hours = 1 day</p>
            </div>

            <div className="time-card">
              <h3>📅 Day</h3>
              <p>7 days = 1 week</p>
            </div>

          </div>

        </section>

        {/* READING CLOCK */}

        <section className="time-section">

          <h2>🕒 Reading a Clock</h2>

          <p>
            The short hand shows the hour and the long hand shows the minutes.
          </p>

          <div className="clock-example">
            🕒 <strong>3:00</strong>
          </div>

          <p>
            The short hand points to 3 and the minute hand points to 12.
          </p>

        </section>

        {/* AM PM */}

        <section className="time-section">

          <h2>🌞 AM and PM</h2>

          <p>
            A day has 24 hours. We commonly use AM and PM
            to describe time in a 12-hour clock.
          </p>

          <div className="time-example">
            🌅 8:00 AM = Morning
          </div>

          <div className="time-example">
            🌙 8:00 PM = Evening
          </div>

        </section>

        {/* DURATION */}

        <section className="time-section">

          <h2>⏳ Finding Duration</h2>

          <p>
            Duration tells us how long an activity lasts.
          </p>

          <div className="time-example">
            2:00 PM → 3:00 PM
          </div>

          <p>
            Duration = <strong>1 hour</strong>
          </p>

        </section>

        {/* CALENDAR */}

        <section className="time-section">

          <h2>📆 Days, Weeks and Months</h2>

          <div className="calendar-grid">

            <div className="calendar-card">
              <h3>7</h3>
              <p>Days in a week</p>
            </div>

            <div className="calendar-card">
              <h3>12</h3>
              <p>Months in a year</p>
            </div>

            <div className="calendar-card">
              <h3>365</h3>
              <p>Days in a normal year</p>
            </div>

          </div>

        </section>

        {/* EVERYDAY LIFE */}

        <section className="time-section">

          <h2>🌟 Time in Everyday Life</h2>

          <div className="time-story">

            <div className="story-icon">
              🏫
            </div>

            <p>
              We use time to plan school, work, meals, travel,
              sleep and many other daily activities.
            </p>

            <div className="time-highlight">
              ⏰ Good time management helps us stay organised!
            </div>

          </div>

        </section>

        {/* CHALLENGE */}

        <section className="time-section challenge">

          <div className="challenge-icon">
            🎯
          </div>

          <h2>Mini Challenge</h2>

          <p>
            Test your time skills!
          </p>

          <div className="time-question">

            <p>1. How many minutes are in 2 hours? ❓</p>

            <p>2. How many days are in one week? ❓</p>

            <p>3. What is the duration from 4:00 PM to 6:00 PM? ❓</p>

          </div>

        </section>

      </div>

    </div>
  )
}

export default Time