import { useState } from 'react'
import Screen6 from './Screen6'
import './Screen3.css'

function Screen3({ onBack }) {
  const [selectedTopic, setSelectedTopic] = useState(null)

  if (selectedTopic) {
    return (
      <Screen6
        topic={selectedTopic}
        onBack={() => setSelectedTopic(null)}
      />
    )
  }

  return (
    <div className="screen3">

      {/* Back to Screen 2 */}
      <button className="back-button" onClick={onBack}>
        ← BACK
      </button>

      <div className="screen3-content">

        <h1>LEARN 📚</h1>

        <p className="learn-subtitle">
          Explore mathematics through fun, concepts and discovery
        </p>

        <div className="learn-cards">

          {/* 1 */}
          <button
            className="learn-card"
            onClick={() => setSelectedTopic('Numbers & Number System')}
          >
            <span>🔢</span>
            <h2>Numbers & Number System</h2>
            <p>Explore numbers, place value and number lines</p>
          </button>

          {/* 2 */}
          <button
            className="learn-card"
            onClick={() => setSelectedTopic('Patterns in Mathematics')}
          >
            <span>🔢</span>
            <h2>Patterns in Mathematics</h2>
            <p>Discover patterns, sequences and relationships</p>
          </button>

          {/* 3 */}
          <button
            className="learn-card"
            onClick={() => setSelectedTopic('Addition & Subtraction')}
          >
            <span>➕</span>
            <h2>Addition & Subtraction</h2>
            <p>Learn to add and subtract with confidence</p>
          </button>

          {/* 4 */}
          <button
            className="learn-card"
            onClick={() => setSelectedTopic('Multiplication & Division')}
          >
            <span>✖️</span>
            <h2>Multiplication & Division</h2>
            <p>Understand multiplication and division visually</p>
          </button>

          {/* 5 */}
          <button
            className="learn-card"
            onClick={() => setSelectedTopic('Mental Arithmetic')}
          >
            <span>🧠</span>
            <h2>Mental Arithmetic</h2>
            <p>Build speed and confidence with numbers</p>
          </button>

          {/* 6 */}
          <button
            className="learn-card"
            onClick={() => setSelectedTopic('Factors, Multiples & Prime Numbers')}
          >
            <span>🔢</span>
            <h2>Factors, Multiples & Prime Numbers</h2>
            <p>Discover factors, multiples and prime numbers</p>
          </button>

          {/* 7 */}
          <button
            className="learn-card"
            onClick={() => setSelectedTopic('Number Play')}
          >
            <span>🎲</span>
            <h2>Number Play</h2>
            <p>Have fun with mathematical puzzles and games</p>
          </button>

          {/* 8 */}
          <button
            className="learn-card"
            onClick={() => setSelectedTopic('Arithmetic Expressions')}
          >
            <span>➕</span>
            <h2>Arithmetic Expressions</h2>
            <p>Learn how numbers work together in expressions</p>
          </button>

          {/* 9 */}
          <button
            className="learn-card"
            onClick={() => setSelectedTopic('Integers & Number Line')}
          >
            <span>➖</span>
            <h2>Integers & Number Line</h2>
            <p>Explore positive and negative numbers</p>
          </button>

          {/* 10 */}
          <button
            className="learn-card"
            onClick={() => setSelectedTopic('Fractions')}
          >
            <span>🍕</span>
            <h2>Fractions</h2>
            <p>Understand parts, wholes and fraction operations</p>
          </button>

          {/* 11 */}
          <button
            className="learn-card"
            onClick={() => setSelectedTopic('Decimals')}
          >
            <span>🔢</span>
            <h2>Decimals</h2>
            <p>Explore decimal numbers and their place values</p>
          </button>

          {/* 12 */}
          <button
            className="learn-card"
            onClick={() => setSelectedTopic('Money')}
          >
            <span>💰</span>
            <h2>Money</h2>
            <p>Use mathematics in real-life money situations</p>
          </button>

          {/* 13 */}
          <button
            className="learn-card"
            onClick={() => setSelectedTopic('Measurement')}
          >
            <span>⚖️</span>
            <h2>Measurement</h2>
            <p>Learn about length, weight, volume and units</p>
          </button>

          {/* 14 */}
          <button
            className="learn-card"
            onClick={() => setSelectedTopic('Time')}
          >
            <span>⏰</span>
            <h2>Time</h2>
            <p>Understand clocks, calendars and time calculations</p>
          </button>

          {/* 15 */}
          <button
            className="learn-card"
            onClick={() => setSelectedTopic('Ratio & Proportion')}
          >
            <span>🎯</span>
            <h2>Ratio & Proportion</h2>
            <p>Compare quantities and understand relationships</p>
          </button>

          {/* 16 */}
          <button
            className="learn-card"
            onClick={() => setSelectedTopic('Percentage')}
          >
            <span>💯</span>
            <h2>Percentage</h2>
            <p>Learn percentages through everyday examples</p>
          </button>

          {/* 17 */}
          <button
            className="learn-card"
            onClick={() => setSelectedTopic('Algebra & Letter-Numbers')}
          >
            <span>🔤</span>
            <h2>Algebra & Letter-Numbers</h2>
            <p>Discover variables and algebraic thinking</p>
          </button>

          {/* 18 */}
          <button
            className="learn-card"
            onClick={() => setSelectedTopic('Finding the Unknown')}
          >
            <span>❓</span>
            <h2>Finding the Unknown</h2>
            <p>Learn how to find missing values</p>
          </button>

          {/* 19 */}
          <button
            className="learn-card"
            onClick={() => setSelectedTopic('Lines & Angles')}
          >
            <span>📐</span>
            <h2>Lines & Angles</h2>
            <p>Explore lines, rays and different types of angles</p>
          </button>

          {/* 20 */}
          <button
            className="learn-card"
            onClick={() => setSelectedTopic('Parallel & Intersecting Lines')}
          >
            <span>📏</span>
            <h2>Parallel & Intersecting Lines</h2>
            <p>Understand how lines meet and interact</p>
          </button>

          {/* 21 */}
          <button
            className="learn-card"
            onClick={() => setSelectedTopic('Shapes & Geometry')}
          >
            <span>🔺</span>
            <h2>Shapes & Geometry</h2>
            <p>Explore shapes and their amazing properties</p>
          </button>

          {/* 22 */}
          <button
            className="learn-card"
            onClick={() => setSelectedTopic('Circles')}
          >
            <span>⭕</span>
            <h2>Circles</h2>
            <p>Discover radius, diameter and parts of a circle</p>
          </button>

          {/* 23 */}
          <button
            className="learn-card"
            onClick={() => setSelectedTopic('Symmetry')}
          >
            <span>🪞</span>
            <h2>Symmetry</h2>
            <p>Explore reflection, symmetry and beautiful patterns</p>
          </button>

          {/* 24 */}
          <button
            className="learn-card"
            onClick={() => setSelectedTopic('Constructions & Tilings')}
          >
            <span>✏️</span>
            <h2>Constructions & Tilings</h2>
            <p>Create geometric constructions and tiling patterns</p>
          </button>

          {/* 25 */}
          <button
            className="learn-card"
            onClick={() => setSelectedTopic('Perimeter & Area')}
          >
            <span>📏</span>
            <h2>Perimeter & Area</h2>
            <p>Measure boundaries and surfaces of shapes</p>
          </button>

          {/* 26 */}
          <button
            className="learn-card"
            onClick={() => setSelectedTopic('3D & Geometric Figures')}
          >
            <span>🧊</span>
            <h2>3D & Geometric Figures</h2>
            <p>Explore cubes, cuboids and three-dimensional shapes</p>
          </button>

          {/* 27 */}
          <button
            className="learn-card"
            onClick={() => setSelectedTopic('Data Handling & Presentation')}
          >
            <span>📊</span>
            <h2>Data Handling & Presentation</h2>
            <p>Read, organize and present information with graphs</p>
          </button>

          {/* 28 */}
          <button
            className="learn-card"
            onClick={() => setSelectedTopic('Connecting the Dots')}
          >
            <span>📍</span>
            <h2>Connecting the Dots</h2>
            <p>Discover relationships between points and shapes</p>
          </button>

          {/* 29 */}
          <button
            className="learn-card"
            onClick={() => setSelectedTopic('Geometric Twins')}
          >
            <span>🧩</span>
            <h2>Geometric Twins</h2>
            <p>Explore matching and related geometric figures</p>
          </button>

          {/* 30 */}
          <button
            className="learn-card"
            onClick={() => setSelectedTopic('Maths in Everyday Life')}
          >
            <span>🌍</span>
            <h2>Maths in Everyday Life</h2>
            <p>See how mathematics helps us every day</p>
          </button>

        </div>

      </div>

    </div>
  )
}

export default Screen3