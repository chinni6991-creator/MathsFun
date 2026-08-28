import './Leaderboard.css'

function Leaderboard({ onBack }) {

  const players = [
    {
      rank: 1,
      name: 'Anu',
      score: 120,
      emoji: '👑'
    },
    {
      rank: 2,
      name: 'Rahul',
      score: 100,
      emoji: '🥈'
    },
    {
      rank: 3,
      name: 'Sneha',
      score: 85,
      emoji: '🥉'
    },
    {
      rank: 4,
      name: 'Arjun',
      score: 70,
      emoji: '⭐'
    },
    {
      rank: 5,
      name: 'Priya',
      score: 55,
      emoji: '⭐'
    }
  ]

  return (
    <div className="leaderboard">

      {/* BACK */}

      <button
        className="leaderboard-back"
        onClick={onBack}
      >
        ← BACK
      </button>


      <div className="leaderboard-content">

        {/* HEADER */}

        <div className="leaderboard-icon">
          🏆
        </div>

        <p className="leaderboard-label">
          MATHSFUN • COMPETE
        </p>

        <h1>
          LEADERBOARD
        </h1>

        <p className="leaderboard-intro">
          See who's leading the Maths Battle! 🔥
        </p>


        {/* TOP 3 */}

        <div className="top-players">

          <div className="top-player second">

            <div className="player-medal">
              🥈
            </div>

            <div className="player-avatar">
              👤
            </div>

            <h2>
              Rahul
            </h2>

            <strong>
              100 pts
            </strong>

          </div>


          <div className="top-player first">

            <div className="crown">
              👑
            </div>

            <div className="player-avatar">
              👑
            </div>

            <h2>
              Anu
            </h2>

            <strong>
              120 pts
            </strong>

          </div>


          <div className="top-player third">

            <div className="player-medal">
              🥉
            </div>

            <div className="player-avatar">
              👤
            </div>

            <h2>
              Sneha
            </h2>

            <strong>
              85 pts
            </strong>

          </div>

        </div>


        {/* ALL PLAYERS */}

        <div className="leaderboard-card">

          <h2>
            📊 BATTLE RANKINGS
          </h2>


          <div className="ranking-list">

            {players.map((player) => (

              <div
                className={`ranking-row ${
                  player.rank === 1 ? 'winner' : ''
                }`}
                key={player.rank}
              >

                <span className="rank">
                  #{player.rank}
                </span>

                <span className="rank-emoji">
                  {player.emoji}
                </span>

                <strong className="rank-name">
                  {player.name}
                </strong>

                <span className="rank-score">
                  {player.score} pts
                </span>

              </div>

            ))}

          </div>

        </div>


        {/* FOOTER */}

        <div className="leaderboard-note">

          <span>
            ⚡
          </span>

          <p>
            Keep solving, keep climbing!
            <strong> Become the Maths Champion! 🏆</strong>
          </p>

        </div>

      </div>

    </div>
  )
}

export default Leaderboard