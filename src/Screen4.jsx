import { useState } from 'react'
import './Screen4.css'

import SolveIt from './Play/SolveIt'
import BeatTheClock from './Play/BeatTheClock'
import ThinkAndDiscover from './Play/ThinkAndDiscover'
import MathsPlayground from './Play/MathsPlayground'

function Screen4({ onBack }) {

  const [activeGame, setActiveGame] = useState(null)

  // SOLVE IT
  if (activeGame === 'solve') {
    return (
      <SolveIt
        onBack={() => setActiveGame(null)}
      />
    )
  }

  // BEAT THE CLOCK
  if (activeGame === 'clock') {
    return (
      <BeatTheClock
        onBack={() => setActiveGame(null)}
      />
    )
  }

  // THINK & DISCOVER
  if (activeGame === 'think') {
    return (
      <ThinkAndDiscover
        onBack={() => setActiveGame(null)}
      />
    )
  }

  // MATHS PLAYGROUND
  if (activeGame === 'playground') {
    return (
      <MathsPlayground
        onBack={() => setActiveGame(null)}
      />
    )
  }

  return (
    <div className="screen4">

      <button
        className="back-button"
        onClick={onBack}
      >
        ← BACK
      </button>

      <div className="screen4-content">

        <div className="play-icon">
          🎮
        </div>

        <p className="play-label">
          MATHSFUN • PLAY
        </p>

        <h1>PLAY</h1>

        <p className="play-intro">
          Don't just learn Maths... play with it! ✨
        </p>

        <div className="play-cards">

          {/* SOLVE IT */}

          <div className="play-card">

            <div className="play-card-icon">
              🧩
            </div>

            <h2>Solve It</h2>

            <p>
              Solve random Maths questions
              and test your skills.
            </p>

            <button
              className="play-card-button"
              onClick={() => setActiveGame('solve')}
            >
              PLAY NOW →
            </button>

          </div>


          {/* BEAT THE CLOCK */}

          <div className="play-card">

            <div className="play-card-icon">
              ⚡
            </div>

            <h2>Beat the Clock</h2>

            <p>
              Solve as many random questions
              as you can before time runs out.
            </p>

            <button
              className="play-card-button"
              onClick={() => setActiveGame('clock')}
            >
              PLAY NOW →
            </button>

          </div>


          {/* THINK & DISCOVER */}

          <div className="play-card">

            <div className="play-card-icon">
              🧠
            </div>

            <h2>Think & Discover</h2>

            <p>
              Explore patterns, puzzles,
              logic and missing numbers.
            </p>

            <button
              className="play-card-button"
              onClick={() => setActiveGame('think')}
            >
              PLAY NOW →
            </button>

          </div>


          {/* MATHS PLAYGROUND */}

          <div className="play-card">

            <div className="play-card-icon">
              🎨
            </div>

            <h2>Maths Playground</h2>

            <p>
              Explore Maths through fun
              interactive activities.
            </p>

            <button
              className="play-card-button"
              onClick={() => setActiveGame('playground')}
            >
              PLAY NOW →
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Screen4