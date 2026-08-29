import { useState } from 'react'
import Screen2 from './Screen2'
import { supabase } from './supabase'
import './App.css'

function App() {
  const [showScreen2, setShowScreen2] = useState(
  window.location.pathname.startsWith('/join/')
)
  if (showScreen2) {
    return <Screen2 />
  }

  return (
    <div className="welcome-screen">

      {/* Animated Maths Background */}
      <div className="math-background">
        <span>+</span>
        <span>×</span>
        <span>÷</span>
        <span>−</span>
        <span>π</span>
        <span>√</span>
        <span>∞</span>
        <span>∑</span>
        <span>=</span>
        <span>7</span>
        <span>3 + 5 = 8</span>
        <span>x²</span>
      </div>

      {/* Main Content */}
      <div className="welcome-content">
        <div className="calculator-icon">🧮</div>

        <h1>MATHSFUN</h1>

        <button
          className="enter-button"
          onClick={() => setShowScreen2(true)}
        >
          ENTER
        </button>
      </div>

    </div>
  )
}

export default App