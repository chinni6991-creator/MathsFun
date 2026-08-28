import { useState } from 'react'
import './Screen5.css'

import QuickBattle from './Compete/QuickBattle'
import CreateCompetition from './Compete/CreateCompetition'
import CompetitionReady from './Compete/CompetitionReady'
import MathsBattle from './Compete/MathsBattle'
import JoinBattle from './Compete/JoinBattle'
import BattleWaiting from './Compete/BattleWaiting'
import Leaderboard from './Compete/Leaderboard'


function Screen5({ onBack }) {

  // ==============================
  // SCREEN STATES
  // ==============================

  const [showQuickBattle, setShowQuickBattle] = useState(false)
  const [showCreateCompetition, setShowCreateCompetition] = useState(false)
  const [showCompetitionReady, setShowCompetitionReady] = useState(false)
  const [showMathsBattle, setShowMathsBattle] = useState(false)
  const [showJoinBattle, setShowJoinBattle] = useState(false)
  const [showBattleWaiting, setShowBattleWaiting] = useState(false)
  const [showLeaderboard, setShowLeaderboard] = useState(false)


  // ==============================
  // DATA
  // ==============================

  const [competition, setCompetition] = useState(null)
  const [joinedPlayer, setJoinedPlayer] = useState(null)


  // ==============================
  // QUICK BATTLE
  // ==============================

  if (showQuickBattle) {

    return (
      <QuickBattle
        onBack={() => setShowQuickBattle(false)}
      />
    )

  }


  // ==============================
  // CREATE COMPETITION
  // ==============================

  if (showCreateCompetition) {

    return (
      <CreateCompetition

        onBack={() => {
          setShowCreateCompetition(false)
        }}

        onCreate={(data) => {

          setCompetition(data)

          setShowCreateCompetition(false)

          setShowCompetitionReady(true)

        }}

      />
    )

  }


  // ==============================
  // COMPETITION READY
  // ==============================

  if (showCompetitionReady) {

    return (
      <CompetitionReady

        competition={competition}

        onBack={() => {

          setShowCompetitionReady(false)

          setShowCreateCompetition(true)

        }}

        onStart={() => {

          setShowCompetitionReady(false)

          setShowMathsBattle(true)

        }}

      />
    )

  }


  // ==============================
  // LIVE MATHS BATTLE
  // ==============================

  if (showMathsBattle) {

    return (
      <MathsBattle

        competition={competition}

        onBack={() => {

          setShowMathsBattle(false)

          setShowCompetitionReady(true)

        }}

      />
    )

  }


  // ==============================
  // JOIN BATTLE
  // ==============================

  if (showJoinBattle) {

    return (
      <JoinBattle

        battleCode="HTP163"

        onBack={() => {
          setShowJoinBattle(false)
        }}

        onJoin={(data) => {

          console.log('Player joined:', data)

          setJoinedPlayer(data)

          setShowJoinBattle(false)

          setShowBattleWaiting(true)

        }}

      />
    )

  }


  // ==============================
  // BATTLE WAITING ROOM
  // ==============================

  if (showBattleWaiting) {

    return (
      <BattleWaiting

        battleCode={
          joinedPlayer?.battleCode || 'HTP163'
        }

        playerName={
          joinedPlayer?.name || 'Player'
        }

        isHost={false}

        onBack={() => {

          setShowBattleWaiting(false)

          setShowJoinBattle(true)

        }}

        onStart={() => {

          setShowBattleWaiting(false)

          setShowMathsBattle(true)

        }}

      />
    )

  }


  // ==============================
  // LEADERBOARD
  // ==============================

  if (showLeaderboard) {

    return (
      <Leaderboard

        onBack={() => {
          setShowLeaderboard(false)
        }}

      />
    )

  }


  // ==============================
  // MAIN COMPETE SCREEN
  // ==============================

  return (

    <div className="screen5">

      {/* BACK BUTTON */}

      <button
        className="screen5-back"
        onClick={onBack}
      >
        ← BACK
      </button>


      <div className="screen5-content">


        {/* ==============================
            HEADER
        ============================== */}

        <div className="compete-icon">
          🏆
        </div>


        <p className="compete-label">
          MATHSFUN • COMPETE
        </p>


        <h1>
          MATHS BATTLE
        </h1>


        <p className="compete-intro">
          Challenge yourself. Challenge your friends. 🔥
        </p>


        {/* ==============================
            COMPETITION CARDS
        ============================== */}

        <div className="competition-cards">


          {/* =========================
              QUICK BATTLE
          ========================= */}

          <div className="competition-card">

            <div className="competition-card-icon">
              🥊
            </div>


            <h2>
              Quick Battle
            </h2>


            <p>
              Jump into a quick Maths battle
              and test your skills.
            </p>


            <button
              className="competition-button"
              onClick={() => setShowQuickBattle(true)}
            >
              START BATTLE →
            </button>

          </div>


          {/* =========================
              CREATE COMPETITION
          ========================= */}

          <div className="competition-card">

            <div className="competition-card-icon">
              👥
            </div>


            <h2>
              Create Competition
            </h2>


            <p>
              Set up your own Maths competition
              for students or teams.
            </p>


            <button
              className="competition-button"
              onClick={() => setShowCreateCompetition(true)}
            >
              CREATE →
            </button>

          </div>


          {/* =========================
              JOIN FRIEND BATTLE
          ========================= */}

          <div className="competition-card">

            <div className="competition-card-icon">
              🔗
            </div>


            <h2>
              Join Friend Battle
            </h2>


            <p>
              Join your friend's Maths Battle
              using a battle code or link.
            </p>


            <button
              className="competition-button"
              onClick={() => setShowJoinBattle(true)}
            >
              JOIN →
            </button>

          </div>


          {/* =========================
              LEADERBOARD
          ========================= */}

          <div className="competition-card">

            <div className="competition-card-icon">
              🏅
            </div>


            <h2>
              Leaderboard
            </h2>


            <p>
              See scores, rankings and
              celebrate the winners.
            </p>


            <button
              className="competition-button"
              onClick={() => setShowLeaderboard(true)}
            >
              VIEW →
            </button>

          </div>


        </div>


        {/* ==============================
            BATTLE NOTE
        ============================== */}

        <div className="battle-note">

          <span>
            ⚡
          </span>


          <p>
            Think fast. Solve smart. Become the
            <strong> Maths Champion!</strong>
          </p>

        </div>


      </div>

    </div>

  )

}


export default Screen5