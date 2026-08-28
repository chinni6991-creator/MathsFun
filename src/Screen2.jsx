import { useState } from 'react'
import Screen3 from './Screen3'
import Screen4 from './Screen4'
import Screen5 from './Screen5'
import './Screen2.css'

function Screen2() {
  const [selectedScreen, setSelectedScreen] = useState(null)

  if (selectedScreen === 'learn') {
    return <Screen3 onBack={() => setSelectedScreen(null)} />
  }

  if (selectedScreen === 'play') {
    return <Screen4 onBack={() => setSelectedScreen(null)} />
  }

  if (selectedScreen === 'compete') {
    return <Screen5 onBack={() => setSelectedScreen(null)} />
  }

  return (
    <div className="screen2">
      <div className="screen2-content">

        <div className="screen2-icon">🧮</div>

        <h1>Welcome to MATHSFUN</h1>

        <p>Choose your journey</p>

        <div className="menu-options">

          <button
            className="menu-card"
            onClick={() => setSelectedScreen('learn')}
          >
            <span>📚</span>
            <h2>LEARN</h2>
            <p>Discover mathematical concepts</p>
          </button>

          <button
            className="menu-card"
            onClick={() => setSelectedScreen('play')}
          >
            <span>🎮</span>
            <h2>PLAY</h2>
            <p>Have fun with mathematics</p>
          </button>

          <button
            className="menu-card"
            onClick={() => setSelectedScreen('compete')}
          >
            <span>🏆</span>
            <h2>COMPETE</h2>
            <p>Challenge yourself and others</p>
          </button>

        </div>

      </div>
    </div>
  )
}

export default Screen2