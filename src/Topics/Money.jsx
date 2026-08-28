import './Money.css'

function Money({ onBack }) {
  return (
    <div className="money-topic">

      <button className="money-back" onClick={onBack}>
        ← BACK TO LEARN
      </button>

      <div className="money-content">

        <div className="money-icon">
          💰
        </div>

        <p className="money-label">
          MATHS • LEARN
        </p>

        <h1>Money</h1>

        <p className="money-intro">
          Learn how to count, compare, add and use money in everyday life!
        </p>

        {/* INDIAN CURRENCY */}

        <section className="money-section">

          <h2>🇮🇳 Indian Currency</h2>

          <p>
            The currency used in India is the <strong>Indian Rupee</strong>.
            The symbol for rupee is <strong>₹</strong>.
          </p>

          <div className="money-cards">

            <div className="money-card">
              <h3>₹1</h3>
              <p>One Rupee</p>
            </div>

            <div className="money-card">
              <h3>₹5</h3>
              <p>Five Rupees</p>
            </div>

            <div className="money-card">
              <h3>₹10</h3>
              <p>Ten Rupees</p>
            </div>

            <div className="money-card">
              <h3>₹20</h3>
              <p>Twenty Rupees</p>
            </div>

          </div>

        </section>

        {/* RUPEES AND PAISE */}

        <section className="money-section">

          <h2>🪙 Rupees and Paise</h2>

          <p>
            One rupee is equal to <strong>100 paise</strong>.
          </p>

          <div className="money-example">
            ₹1 = 100 paise
          </div>

          <div className="money-example">
            ₹5.50 = 5 rupees and 50 paise
          </div>

        </section>

        {/* ADDING MONEY */}

        <section className="money-section">

          <h2>➕ Adding Money</h2>

          <p>
            We often add prices when buying more than one item.
          </p>

          <div className="money-calculation">

            <div>₹25</div>
            <div>+ ₹15</div>
            <div className="money-line"></div>
            <div><strong>₹40</strong></div>

          </div>

        </section>

        {/* SUBTRACTING MONEY */}

        <section className="money-section">

          <h2>➖ Finding Change</h2>

          <p>
            Subtraction helps us find the change we receive after paying.
          </p>

          <div className="money-example">
            ₹100 − ₹65 = <strong>₹35</strong>
          </div>

          <p>
            So the change received is <strong>₹35</strong>.
          </p>

        </section>

        {/* SHOPPING */}

        <section className="money-section">

          <h2>🛒 Shopping with Money</h2>

          <div className="shopping-box">

            <div className="shopping-item">
              📒 Notebook
              <strong>₹30</strong>
            </div>

            <div className="shopping-item">
              ✏️ Pencil
              <strong>₹10</strong>
            </div>

            <div className="shopping-item">
              🖊️ Pen
              <strong>₹20</strong>
            </div>

            <div className="shopping-total">
              Total = <strong>₹60</strong>
            </div>

          </div>

        </section>

        {/* COMPARING PRICES */}

        <section className="money-section">

          <h2>⚖️ Comparing Prices</h2>

          <p>
            We can compare prices to decide which item costs more or less.
          </p>

          <div className="money-example">
            ₹75 &gt; ₹50
          </div>

          <p>
            Therefore, the item costing ₹75 is more expensive.
          </p>

        </section>

        {/* EVERYDAY LIFE */}

        <section className="money-section">

          <h2>🌟 Money in Everyday Life</h2>

          <div className="money-story">

            <div className="story-icon">
              🏪
            </div>

            <p>
              We use mathematics with money while shopping,
              saving, budgeting and checking our change.
            </p>

            <div className="money-highlight">
              Smart maths helps us become smart with money! 💡
            </div>

          </div>

        </section>

        {/* CHALLENGE */}

        <section className="money-section challenge">

          <div className="challenge-icon">
            🎯
          </div>

          <h2>Mini Challenge</h2>

          <p>
            Test your money skills!
          </p>

          <div className="money-question">

            <p>1. How many paise are there in ₹2? ❓</p>

            <p>2. ₹50 + ₹25 = ❓</p>

            <p>3. You pay ₹100 for an item costing ₹65. Change = ❓</p>

          </div>

        </section>

      </div>

    </div>
  )
}

export default Money