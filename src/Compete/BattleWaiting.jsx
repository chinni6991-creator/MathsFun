import './BattleWaiting.css'

function BattleWaiting({
  battleCode,
  playerName,
  players = [],
  isHost = false,
  onBack,
  onStart
}) {

  // Safely get a player's name whether the
  // participant is an object or a string.
  const getPlayerName = (player) => {
    if (typeof player === 'string') {
      return player
    }

    if (player && typeof player === 'object') {
      return player.name || 'Player'
    }

    return 'Player'
  }

  // Screen5 currently sends the complete participants
  // array from Supabase.
  const allPlayers = Array.isArray(players)
    ? players
    : []

  return (
    <div className="battle-waiting">

      <button
        className="waiting-back"
        onClick={onBack}
      >
        ← BACK
      </button>

      <div className="waiting-content">

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
              {allPlayers.length}
            </span>

          </div>


          {allPlayers.length > 0 ? (

            allPlayers.map((player, index) => {

              const name = getPlayerName(player)

              // First participant is treated as host.
              const playerIsHost = index === 0

              return (

                <div
                  className={
                    playerIsHost
                      ? 'player-row host-player'
                      : 'player-row'
                  }
                  key={`${name}-${index}`}
                >

                  <div className="player-avatar">

                    {playerIsHost
                      ? '👑'
                      : '👤'}

                  </div>


                  <div className="player-details">

                    <strong>
                      {name}
                    </strong>

                    <small>
                      {playerIsHost
                        ? 'HOST'
                        : 'PLAYER'}
                    </small>

                  </div>


                  <div className="ready-status">

                    {playerIsHost
                      ? '✓ READY'
                      : '✓ JOINED'}

                  </div>

                </div>

              )

            })

          ) : (

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


        {/* INVITE */}

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


        {/* HOST / FRIEND */}

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