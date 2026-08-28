import './BattleWaiting.css'

function BattleWaiting({
  battleCode,
  playerName,
  players = [],
  isHost = false,
  onBack,
  onStart
}) {

  return (
    <div className="battle-waiting">

      {/* BACK BUTTON */}

      <button
        className="waiting-back"
        onClick={onBack}
      >
        ← BACK
      </button>


      <div className="waiting-content">

        {/* HEADER */}

        <div className="waiting-trophy">
          🏆
        </div>

        <p className="waiting-label">
          MATHSFUN • FRIEND BATTLE
        </p>

        <h1>
          BATTLE LOBBY
        </h1>

        <p className="waiting-intro">
          Get your friends ready! The battle is about to begin 🔥
        </p>


        {/* BATTLE CODE */}

        <div className="waiting-code-card">

          <span>
            🔗
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


        {/* PLAYERS */}

        <div className="players-card">

          <div className="players-header">

            <h2>
              👥 PLAYERS
            </h2>

            <span>
              {players.length + 1}
            </span>

          </div>


          {/* HOST / CURRENT PLAYER */}

          <div className="player-row host-player">

            <div className="player-avatar">
              👑
            </div>

            <div className="player-details">

              <strong>
                {playerName || 'Host'}
              </strong>

              <small>
                HOST
              </small>

            </div>

            <div className="ready-status">
              ✓ READY
            </div>

          </div>


          {/* FRIENDS */}

          {players.map((player, index) => (

            <div
              className="player-row"
              key={index}
            >

              <div className="player-avatar">
                👤
              </div>

              <div className="player-details">

                <strong>
                  {player.name}
                </strong>

                <small>
                  PLAYER
                </small>

              </div>

              <div className="ready-status">
                ✓ JOINED
              </div>

            </div>

          ))}


          {/* NO FRIENDS YET */}

          {players.length === 0 && (

            <div className="waiting-for-friends">

              <div>
                ⏳
              </div>

              <p>
                Waiting for your friends...
              </p>

              <small>
                Share the battle code with them!
              </small>

            </div>

          )}

        </div>


        {/* SHARE SECTION */}

        <div className="share-card">

          <span>
            📢
          </span>

          <div>

            <strong>
              INVITE YOUR FRIENDS
            </strong>

            <p>
              Share this code:
              <b> {battleCode}</b>
            </p>

          </div>

        </div>


        {/* START BUTTON */}

        {isHost ? (

          <button
            className="start-waiting-button"
            onClick={onStart}
          >
            🔥 START BATTLE
          </button>

        ) : (

          <div className="waiting-message">

            <span>
              ⏳
            </span>

            <p>
              Waiting for the host to start the battle...
            </p>

          </div>

        )}


        <p className="waiting-warning">
          ⚡ Make sure everyone has joined before starting!
        </p>


      </div>

    </div>
  )
}

export default BattleWaiting