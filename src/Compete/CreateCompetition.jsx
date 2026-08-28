import { useState } from 'react'
import './CreateCompetition.css'

function CreateCompetition({ onBack, onCreate }) {

  // Competition mode
  const [mode, setMode] = useState('individual')

  // Difficulty
  const [difficulty, setDifficulty] = useState('easy')

  // Participants
  const [participants, setParticipants] = useState('')

  // Maths topic
  const [topic, setTopic] = useState('')

  // Questions
  const [questions, setQuestions] = useState('10')

  // Time
  const [time, setTime] = useState('30')


  // CREATE COMPETITION
  const handleCreate = () => {

    const competitionData = {
      mode: mode,
      participants: participants || '2',
      topic: topic || 'Mixed Maths',

      difficulty:
        difficulty === 'easy'
          ? 'Easy'
          : difficulty === 'moderate'
          ? 'Moderate'
          : 'Difficult',

      questions: questions,
      time: time
    }

    onCreate(competitionData)
  }


  return (
    <div className="create-competition">


      {/* BACK BUTTON */}

      <button
        className="create-back"
        onClick={onBack}
      >
        ← BACK
      </button>


      <div className="create-content">


        {/* HEADER */}

        <div className="create-icon">
          🏆
        </div>

        <p className="create-label">
          MATHSFUN • COMPETE
        </p>

        <h1>
          CREATE COMPETITION
        </h1>

        <p className="create-intro">
          Choose how you want to battle! 🔥
        </p>


        {/* SETUP CARD */}

        <div className="setup-card">


          {/* =========================
              COMPETITION TYPE
          ========================= */}

          <div className="setup-section">

            <label>
              🏁 HOW DO YOU WANT TO PLAY?
            </label>


            <div className="choice-buttons">


              {/* INDIVIDUAL */}

              <button
                type="button"
                className={`choice-button ${
                  mode === 'individual' ? 'active' : ''
                }`}
                onClick={() => setMode('individual')}
              >

                <span>
                  👤
                </span>

                <strong>
                  Individual
                </strong>

                <small>
                  Play Solo
                </small>

              </button>


              {/* TEAM */}

              <button
                type="button"
                className={`choice-button ${
                  mode === 'team' ? 'active' : ''
                }`}
                onClick={() => setMode('team')}
              >

                <span>
                  👥
                </span>

                <strong>
                  Team
                </strong>

                <small>
                  Team Battle
                </small>

              </button>


              {/* FRIEND */}

              <button
                type="button"
                className={`choice-button ${
                  mode === 'friend' ? 'active' : ''
                }`}
                onClick={() => setMode('friend')}
              >

                <span>
                  🔗
                </span>

                <strong>
                  Friend Battle
                </strong>

                <small>
                  Share a Link
                </small>

              </button>


            </div>

          </div>


          {/* =========================
              MODE INFORMATION
          ========================= */}

          {mode === 'individual' && (

            <div className="mode-info">

              <span>
                👤
              </span>

              <div>

                <strong>
                  Individual Battle
                </strong>

                <p>
                  Play by yourself and challenge your Maths skills.
                </p>

              </div>

            </div>

          )}


          {mode === 'team' && (

            <div className="mode-info">

              <span>
                👥
              </span>

              <div>

                <strong>
                  Team Battle
                </strong>

                <p>
                  Create teams and compete together.
                </p>

              </div>

            </div>

          )}


          {mode === 'friend' && (

            <div className="mode-info">

              <span>
                🔗
              </span>

              <div>

                <strong>
                  Friend Battle
                </strong>

                <p>
                  Create a battle and share the link with your friend.
                </p>

              </div>

            </div>

          )}


          {/* =========================
              PARTICIPANTS
          ========================= */}

          <div className="setup-section">

            <label>
              👥 PARTICIPANTS
            </label>

            <input
              type="number"
              min="2"
              max="100"
              value={participants}
              onChange={(e) => setParticipants(e.target.value)}
              placeholder={
                mode === 'individual'
                  ? 'Number of players'
                  : mode === 'team'
                  ? 'Total number of players'
                  : 'Number of players'
              }
            />

          </div>


          {/* =========================
              TOPIC
          ========================= */}

          <div className="setup-section">

            <label>
              📚 MATHS TOPIC
            </label>

            <select
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            >

              <option value="" disabled>
                Select a topic
              </option>

              <option value="Arithmetic">
                Arithmetic
              </option>

              <option value="Algebra">
                Algebra
              </option>

              <option value="Geometry">
                Geometry
              </option>

              <option value="Fractions">
                Fractions
              </option>

              <option value="Decimals">
                Decimals
              </option>

              <option value="Percentages">
                Percentages
              </option>

              <option value="Number System">
                Number System
              </option>

              <option value="Mixed Maths">
                Mixed Maths
              </option>

            </select>

          </div>


          {/* =========================
              DIFFICULTY
          ========================= */}

          <div className="setup-section">

            <label>
              🎯 DIFFICULTY
            </label>

            <div className="difficulty-buttons">


              <button
                type="button"
                className={`difficulty-button easy ${
                  difficulty === 'easy' ? 'active' : ''
                }`}
                onClick={() => setDifficulty('easy')}
              >
                🟢 Easy
              </button>


              <button
                type="button"
                className={`difficulty-button moderate ${
                  difficulty === 'moderate' ? 'active' : ''
                }`}
                onClick={() => setDifficulty('moderate')}
              >
                🟡 Moderate
              </button>


              <button
                type="button"
                className={`difficulty-button difficult ${
                  difficulty === 'difficult' ? 'active' : ''
                }`}
                onClick={() => setDifficulty('difficult')}
              >
                🔴 Difficult
              </button>


            </div>

          </div>


          {/* =========================
              QUESTIONS + TIME
          ========================= */}

          <div className="setup-row">


            {/* QUESTIONS */}

            <div className="setup-section">

              <label>
                ❓ QUESTIONS
              </label>

              <select
                value={questions}
                onChange={(e) => setQuestions(e.target.value)}
              >

                <option value="5">
                  5 Questions
                </option>

                <option value="10">
                  10 Questions
                </option>

                <option value="15">
                  15 Questions
                </option>

                <option value="20">
                  20 Questions
                </option>

              </select>

            </div>


            {/* TIME */}

            <div className="setup-section">

              <label>
                ⏱️ TIME / QUESTION
              </label>

              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
              >

                <option value="10">
                  10 Seconds
                </option>

                <option value="20">
                  20 Seconds
                </option>

                <option value="30">
                  30 Seconds
                </option>

                <option value="60">
                  60 Seconds
                </option>

              </select>

            </div>

          </div>


          {/* =========================
              POINTS
          ========================= */}

          <div className="points-info">

            <span>
              ⭐
            </span>

            <div>

              <strong>
                Battle Points
              </strong>

              <p>
                Points increase as the battle gets harder!
              </p>

            </div>

          </div>


          {/* =========================
              CREATE BUTTON
          ========================= */}

          <button
            type="button"
            className="create-button"
            onClick={handleCreate}
          >

            {mode === 'friend'
              ? '🔗 CREATE & GET LINK'
              : '🚀 CREATE COMPETITION'
            }

          </button>


        </div>


        {/* =========================
            BATTLE ROUNDS
        ========================= */}

        <div className="round-preview">

          <h2>
            🏆 BATTLE ROUNDS
          </h2>


          <div className="rounds">


            <div className="round easy-round">

              <span>
                1
              </span>

              <strong>
                Quick Start
              </strong>

              <small>
                Easy • 5 pts
              </small>

            </div>


            <div className="round moderate-round">

              <span>
                2
              </span>

              <strong>
                Think Fast
              </strong>

              <small>
                Moderate • 10 pts
              </small>

            </div>


            <div className="round difficult-round">

              <span>
                3
              </span>

              <strong>
                Challenge
              </strong>

              <small>
                Difficult • 20 pts
              </small>

            </div>


            <div className="round final-round">

              <span>
                4
              </span>

              <strong>
                Super Challenge
              </strong>

              <small>
                Final • 30 pts
              </small>

            </div>


          </div>

        </div>


      </div>

    </div>
  )
}

export default CreateCompetition