import { useEffect, useState } from 'react'
import './Leaderboard.css'
import { supabase } from '../supabase'

function Leaderboard({ onBack }) {

  const [players, setPlayers] = useState([])
  const [loading, setLoading] = useState(true)

  // ==========================================
  // LOAD LEADERBOARD
  // ==========================================

  useEffect(() => {

    const loadLeaderboard = async () => {

      try {

        const { data, error } =
          await supabase
            .from('Battles')
            .select('scores, winner')

        if (error) {

          console.error(
            '❌ Could not load leaderboard:',
            error
          )

          return
        }


        // ======================================
        // COMBINE ALL PLAYER SCORES
        // ======================================

        const scoreMap = {}


        data.forEach((battle) => {

          const scores =
            battle.scores &&
            typeof battle.scores === 'object'
              ? battle.scores
              : {}


          Object.entries(scores).forEach(
            ([name, score]) => {

              const numericScore =
                Number(score) || 0


              if (!scoreMap[name]) {

                scoreMap[name] = 0

              }


              scoreMap[name] += numericScore

            }
          )

        })


        // ======================================
        // CONVERT TO ARRAY
        // ======================================

        const sortedPlayers =
          Object.entries(scoreMap)
            .map(
              ([name, score]) => ({
                name,
                score
              })
            )
            .sort(
              (a, b) =>
                b.score - a.score
            )
            .map(
              (player, index) => ({
                ...player,
                rank: index + 1
              })
            )


        setPlayers(sortedPlayers)

      } catch (error) {

        console.error(
          '❌ Leaderboard error:',
          error
        )

      } finally {

        setLoading(false)

      }

    }


    loadLeaderboard()

  }, [])


  // ==========================================
  // TOP 3
  // ==========================================

  const first =
    players[0]

  const second =
    players[1]

  const third =
    players[2]


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


        {/* LOADING */}

        {loading && (

          <p>
            ⏳ Loading leaderboard...
          </p>

        )}


        {/* TOP 3 */}

        {!loading &&
          players.length > 0 && (

          <div className="top-players">

            {/* SECOND */}

            {second && (

              <div className="top-player second">

                <div className="player-medal">
                  🥈
                </div>

                <div className="player-avatar">
                  👤
                </div>

                <h2>
                  {second.name}
                </h2>

                <strong>
                  {second.score} pts
                </strong>

              </div>

            )}


            {/* FIRST */}

            {first && (

              <div className="top-player first">

                <div className="crown">
                  👑
                </div>

                <div className="player-avatar">
                  👑
                </div>

                <h2>
                  {first.name}
                </h2>

                <strong>
                  {first.score} pts
                </strong>

              </div>

            )}


            {/* THIRD */}

            {third && (

              <div className="top-player third">

                <div className="player-medal">
                  🥉
                </div>

                <div className="player-avatar">
                  👤
                </div>

                <h2>
                  {third.name}
                </h2>

                <strong>
                  {third.score} pts
                </strong>

              </div>

            )}

          </div>

        )}


        {/* NO PLAYERS */}

        {!loading &&
          players.length === 0 && (

          <div className="leaderboard-card">

            <h2>
              📊 BATTLE RANKINGS
            </h2>

            <p>
              No battles have been completed yet.
            </p>

          </div>

        )}


        {/* ALL PLAYERS */}

        {!loading &&
          players.length > 0 && (

          <div className="leaderboard-card">

            <h2>
              📊 BATTLE RANKINGS
            </h2>


            <div className="ranking-list">

              {players.map((player) => (

                <div
                  className={`ranking-row ${
                    player.rank === 1
                      ? 'winner'
                      : ''
                  }`}
                  key={player.name}
                >

                  <span className="rank">
                    #{player.rank}
                  </span>


                  <span className="rank-emoji">

                    {player.rank === 1
                      ? '👑'
                      : player.rank === 2
                      ? '🥈'
                      : player.rank === 3
                      ? '🥉'
                      : '⭐'}

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

        )}


        {/* FOOTER */}

        <div className="leaderboard-note">

          <span>
            ⚡
          </span>

          <p>
            Keep solving, keep climbing!
            <strong>
              {' '}Become the Maths Champion! 🏆
            </strong>
          </p>

        </div>

      </div>

    </div>

  )
}

export default Leaderboard