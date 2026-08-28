import './DataHandlingPresentation.css'

function DataHandlingPresentation({ onBack }) {
  return (
    <div className="data-topic">

      <button className="data-back" onClick={onBack}>
        ← BACK TO LEARN
      </button>

      <div className="data-content">

        <div className="data-icon">
          📊📈
        </div>

        <p className="data-label">
          MATHS • LEARN
        </p>

        <h1>Data Handling & Presentation</h1>

        <p className="data-intro">
          Learn how to collect, organise, represent and understand information!
        </p>

        <section className="data-section">

          <h2>📊 What is Data?</h2>

          <p>
            Data is a collection of facts, numbers or information gathered
            for a particular purpose.
          </p>

          <div className="data-highlight">
            ✨ Data helps us understand information and make decisions.
          </div>

        </section>

        <section className="data-section">

          <h2>📝 Collecting Data</h2>

          <p>
            We can collect data by asking questions, observing things,
            counting objects or conducting surveys.
          </p>

          <div className="data-example">
            <strong>Question:</strong> What is your favourite fruit?
            <br /><br />
            🍎 Apple &nbsp; 🍌 Banana &nbsp; 🍊 Orange
          </div>

        </section>

        <section className="data-section">

          <h2>📋 Organising Data</h2>

          <p>
            A table can help us organise collected information clearly.
          </p>

          <div className="data-table">

            <div className="data-row data-heading">
              <span>Fruit</span>
              <span>Students</span>
            </div>

            <div className="data-row">
              <span>🍎 Apple</span>
              <span>8</span>
            </div>

            <div className="data-row">
              <span>🍌 Banana</span>
              <span>5</span>
            </div>

            <div className="data-row">
              <span>🍊 Orange</span>
              <span>7</span>
            </div>

          </div>

        </section>

        <section className="data-section">

          <h2>🔢 Tally Marks</h2>

          <p>
            Tally marks are a quick way of counting and recording data.
            Every group of five is usually represented by four vertical
            marks crossed by a fifth mark.
          </p>

          <div className="tally-box">

            <p>🍎 Apple: &nbsp; ||||/ |||</p>

            <p>🍌 Banana: ||||/</p>

            <p>🍊 Orange: ||||/ ||</p>

          </div>

        </section>

        <section className="data-section">

          <h2>📊 Bar Graph</h2>

          <p>
            A bar graph uses rectangular bars to compare different
            categories of data.
          </p>

          <div className="bar-graph">

            <div className="bar-item">
              <span>🍎</span>
              <div className="bar apple-bar">8</div>
            </div>

            <div className="bar-item">
              <span>🍌</span>
              <div className="bar banana-bar">5</div>
            </div>

            <div className="bar-item">
              <span>🍊</span>
              <div className="bar orange-bar">7</div>
            </div>

          </div>

        </section>

        <section className="data-section">

          <h2>🥧 Pie Chart</h2>

          <p>
            A pie chart represents data as parts of a whole using a circle.
          </p>

          <div className="pie-visual">
            🥧
          </div>

          <div className="data-highlight">
            ✨ Each part represents a portion of the total.
          </div>

        </section>

        <section className="data-section">

          <h2>📈 Line Graph</h2>

          <p>
            A line graph is useful for showing how data changes over time.
          </p>

          <div className="line-graph">
            ●────●
            <br />
            &nbsp;&nbsp;&nbsp;╲&nbsp;&nbsp;&nbsp;╲
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;●────●
          </div>

        </section>

        <section className="data-section">

          <h2>🔍 Reading Data</h2>

          <div className="data-cards">

            <div className="data-card">
              <h3>👀 Observe</h3>
              <p>Look carefully at the table or graph.</p>
            </div>

            <div className="data-card">
              <h3>🔢 Compare</h3>
              <p>Find the highest, lowest or equal values.</p>
            </div>

            <div className="data-card">
              <h3>💡 Conclude</h3>
              <p>Use the information to answer questions.</p>
            </div>

          </div>

        </section>

        <section className="data-section">

          <h2>🌍 Data Around Us</h2>

          <div className="data-story">

            <div className="story-icon">
              🏫
            </div>

            <p>
              Schools, shops, hospitals, sports teams and businesses
              use data every day to understand information and make decisions.
            </p>

            <div className="data-highlight">
              🔎 Data is everywhere around us!
            </div>

          </div>

        </section>

        <section className="data-section">

          <h2>💡 Remember</h2>

          <div className="data-rules">

            <p>📊 Data = collected information.</p>

            <p>📋 Tables organise data.</p>

            <p>📊 Bar graphs compare data.</p>

            <p>🥧 Pie charts show parts of a whole.</p>

            <p>📈 Line graphs show changes over time.</p>

          </div>

        </section>

        <section className="data-section challenge">

          <div className="challenge-icon">
            🎯
          </div>

          <h2>Mini Challenge</h2>

          <p>
            Test your data-handling skills!
          </p>

          <div className="data-question">

            <p>1. What is a collection of information called? ❓</p>

            <p>2. Which graph uses rectangular bars? ❓</p>

            <p>3. Which graph shows parts of a whole? ❓</p>

            <p>4. What are tally marks used for? ❓</p>

          </div>

        </section>

      </div>

    </div>
  )
}

export default DataHandlingPresentation