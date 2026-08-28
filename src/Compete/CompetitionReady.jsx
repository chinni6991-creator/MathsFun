import { useState } from 'react'
import './CompetitionReady.css'

function CompetitionReady({ competition, onBack, onStart }) {

  const [copied, setCopied] = useState(false)

  // Generate a battle code from the competition
  const [battleCode] = useState(() => {
    return Math.random()
      .toString(36)
      .substring(2, 8)
      .toUpperCase()
  })

  // Current website address
  const battleLink =
    `${window.location.origin}/join/${battleCode}`


  // COPY LINK
  const handleCopyLink = async () => {

    try {

      await navigator.clipboard.writeText(battleLink)

      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, 2000)

    } catch (error) {

      console.log('Could not copy link')

    }
  }


  return (
    <div className="competition-ready">


      {/* BACK */}

      <button
        className="ready-back"
        onClick={onBack}
      >
        ← BACK
      </button>


      <div className="ready-content">


        {/* HEADER */}

        <div className="ready-trophy">
          🏆
        </div>


        <p className="ready-label">
          MATHSFUN • COMPETE
        </p>


        <h1>
          BATTLE READY!
        </h1>


        <p className="ready-intro">
          Everything is set. Are you ready to battle? 🔥
        </p>


        {/* FRIEND BATTLE */}

        {competition.mode === 'friend' && (

          <div className="friend-battle-box">


            <div className="friend-battle-icon">
              🔗
            </div>


            <h2>
              INVITE YOUR FRIEND
            </h2>


            <p>
              Share this battle code or link with your friend.
            </p>


            {/* BATTLE CODE */}

            <div className="battle-code-box">

              <small>
                BATTLE CODE
              </small>

              <strong>
                {battleCode}
              </strong>

            </div>


            {/* LINK */}

            <div className="battle-link-box">

              <input
                type="text"
                value={battleLink}
                readOnly
              />

              <button
                type="button"
                onClick={handleCopyLink}
              >
                {copied ? '✓ COPIED' : '📋 COPY'}
              </button>

            </div>


            <p className="share-message">
              💬 Send this link to your friend
            </p>


          </div>

        )}


        {/* BATTLE CARD */}

        <div className="battle-ready-card">


          {/* MODE */}

          <div className="ready-item">

            <span className="ready-item-icon">
              🏁
            </span>

            <div>

              <small>
                MODE
              </small>

              <strong>

                {competition.mode === 'team'
                  ? '👥 Team'
                  : competition.mode === 'friend'
                  ? '🔗 Friend Battle'
                  : '👤 Individual'}

              </strong>

            </div>

          </div>


          {/* PARTICIPANTS */}

          <div className="ready-item">

            <span className="ready-item-icon">
              👥
            </span>

            <div>

              <small>
                PARTICIPANTS
              </small>

              <strong>
                {competition.participants}
              </strong>

            </div>

          </div>


          {/* TOPIC */}

          <div className="ready-item">

            <span className="ready-item-icon">
              📚
            </span>

            <div>

              <small>
                MATHS TOPIC
              </small>

              <strong>
                {competition.topic}
              </strong>

            </div>

          </div>


          {/* DIFFICULTY */}

          <div className="ready-item">

            <span className="ready-item-icon">
              🎯
            </span>

            <div>

              <small>
                DIFFICULTY
              </small>

              <strong>
                {competition.difficulty}
              </strong>

            </div>

          </div>


          {/* QUESTIONS */}

          <div className="ready-item">

            <span className="ready-item-icon">
              ❓
            </span>

            <div>

              <small>
                QUESTIONS
              </small>

              <strong>
                {competition.questions}
              </strong>

            </div>

          </div>


          {/* TIME */}

          <div className="ready-item">

            <span className="ready-item-icon">
              ⏱️
            </span>

            <div>

              <small>
                TIME / QUESTION
              </small>

              <strong>
                {competition.time} seconds
              </strong>

            </div>

          </div>


        </div>


        {/* ROUNDS */}

        <div className="ready-rounds">

          <h2>
            🏆 BATTLE ROUNDS
          </h2>


          <div className="ready-round-list">


            <div>
              <span>1</span>
              <strong>Quick Start</strong>
              <small>5 pts</small>
            </div>


            <div>
              <span>2</span>
              <strong>Think Fast</strong>
              <small>10 pts</small>
            </div>


            <div>
              <span>3</span>
              <strong>Challenge</strong>
              <small>20 pts</small>
            </div>


            <div>
              <span>4</span>
              <strong>Super Challenge</strong>
              <small>30 pts</small>
            </div>


          </div>

        </div>


        {/* START */}

        <button
          className="start-battle-button"
          onClick={onStart}
        >
          🔥 START BATTLE
        </button>


        <p className="ready-warning">
          ⚡ Once the battle starts, the timer will begin!
        </p>


      </div>

    </div>
  )
}

export default CompetitionReady