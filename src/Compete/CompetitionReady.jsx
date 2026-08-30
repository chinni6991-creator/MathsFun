import { useState } from 'react'
import './CompetitionReady.css'

function CompetitionReady({ competition, onBack, onStart }) {
  const [copied, setCopied] = useState(false)

  const battleCode = competition?.battle_code || 'BATTLE'
  const battleLink = window.location.origin + '/join/' + battleCode

  const copyLink = () => {
    navigator.clipboard.writeText(battleLink)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <div className="competition-ready">

      <button
        className="ready-back"
        onClick={onBack}
      >
        ← BACK
      </button>

      <div className="ready-content">

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

        <div className="battle-ready-card">

          <div className="ready-item">
            <span className="ready-item-icon">🏁</span>
            <div>
              <small>MODE</small>
              <strong>
                {competition?.mode === 'team'
                  ? '👥 Team'
                  : competition?.mode === 'friend'
                  ? '🔗 Friend Battle'
                  : '👤 Individual'}
              </strong>
            </div>
          </div>

          <div className="ready-item">
            <span className="ready-item-icon">👥</span>
            <div>
              <small>PARTICIPANTS</small>
              <strong>
  {competition?.participants_limit ??
    (Array.isArray(competition?.participants)
      ? competition.participants.length + 1
      : 1)}
</strong>
            </div>
          </div>

          <div className="ready-item">
            <span className="ready-item-icon">📚</span>
            <div>
              <small>MATHS TOPIC</small>
              <strong>
                {competition?.topic || 'Mixed Maths'}
              </strong>
            </div>
          </div>

          <div className="ready-item">
            <span className="ready-item-icon">🎯</span>
            <div>
              <small>DIFFICULTY</small>
              <strong>
                {competition?.difficulty || 'Easy'}
              </strong>
            </div>
          </div>

          <div className="ready-item">
            <span className="ready-item-icon">❓</span>
            <div>
              <small>QUESTIONS</small>
              <strong>
                {competition?.questions || 10}
              </strong>
            </div>
          </div>

          <div className="ready-item">
            <span className="ready-item-icon">⏱️</span>
            <div>
              <small>TIME / QUESTION</small>
              <strong>
  {competition?.time_per_ques ||
    competition?.time_per_question ||
    competition?.time ||
    30} seconds
</strong>
            </div>
          </div>

        </div>

        {competition?.mode === 'friend' && (
          <div className="friend-battle-box">

            <div className="friend-battle-icon">
              🔗
            </div>

            <h2>
              INVITE YOUR FRIEND
            </h2>

            <p>
              Share this battle code with your friend.
            </p>

            <div className="battle-code-box">
              <small>BATTLE CODE</small>

              <strong>
                {battleCode}
              </strong>
            </div>

            <div className="battle-link-box">

              <input
                type="text"
                value={battleLink}
                readOnly
              />

              <button
                type="button"
                onClick={copyLink}
              >
                {copied ? '✓ COPIED' : '📋 COPY'}
              </button>

            </div>

            <p className="share-message">
              💬 Send this link to your friend
            </p>

          </div>
        )}

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

        <button
          type="button"
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