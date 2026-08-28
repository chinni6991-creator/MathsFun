import { useState } from 'react'
import './JoinBattle.css'

function JoinBattle({ battleCode, onBack, onJoin }) {

  const [name, setName] = useState('')

  const handleJoin = () => {

    if (!name.trim()) {
      alert('Please enter your name 😊')
      return
    }

    onJoin({
      name: name.trim(),
      battleCode: battleCode
    })
  }


  return (
    <div className="join-battle">

      {/* BACK BUTTON */}

      <button
        className="join-back"
        onClick={onBack}
      >
        ← BACK
      </button>


      <div className="join-content">

        {/* HEADER */}

        <div className="join-icon">
          🔗
        </div>

        <p className="join-label">
          MATHSFUN • FRIEND BATTLE
        </p>

        <h1>
          JOIN BATTLE
        </h1>

        <p className="join-intro">
          Your friend has invited you to a Maths Battle! 🔥
        </p>


        {/* BATTLE CARD */}

        <div className="join-card">


          {/* BATTLE CODE */}

          <div className="join-code-section">

            <span>
              🏆
            </span>

            <div>

              <small>
                BATTLE CODE
              </small>

              <strong>
                {battleCode || '------'}
              </strong>

            </div>

          </div>


          {/* NAME */}

          <div className="join-input-section">

            <label>
              👤 YOUR NAME
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              maxLength="30"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleJoin()
                }
              }}
            />

          </div>


          {/* JOIN BUTTON */}

          <button
            type="button"
            className="join-button"
            onClick={handleJoin}
          >
            🚀 JOIN BATTLE
          </button>


        </div>


        {/* INFORMATION */}

        <div className="join-info">

          <span>
            💡
          </span>

          <p>
            Enter your name and get ready.
            The battle will begin when everyone is ready!
          </p>

        </div>


      </div>

    </div>
  )
}

export default JoinBattle