import { useEffect, useState } from 'react'
import './Screen5.css'

import { supabase } from './supabase'

import QuickBattle from './Compete/QuickBattle'
import CreateCompetition from './Compete/CreateCompetition'
import CompetitionReady from './Compete/CompetitionReady'
import MathsBattle from './Compete/MathsBattle'
import JoinBattle from './Compete/JoinBattle'
import BattleWaiting from './Compete/BattleWaiting'
import Leaderboard from './Compete/Leaderboard'

function Screen5({ onBack }) {

  // ==========================================
  // URL BATTLE CODE
  // ==========================================

  const pathParts = window.location.pathname.split('/')

  const urlBattleCode =
    pathParts[1] === 'join'
      ? pathParts[2]
      : null


  // ==========================================
  // SCREEN STATES
  // ==========================================

  const [showQuickBattle, setShowQuickBattle] =
    useState(false)

  const [showCreateCompetition, setShowCreateCompetition] =
    useState(false)

  const [showCompetitionReady, setShowCompetitionReady] =
    useState(false)

  const [showMathsBattle, setShowMathsBattle] =
    useState(false)

  const [showJoinBattle, setShowJoinBattle] =
    useState(
      window.location.pathname.startsWith('/join/')
    )

  const [showBattleWaiting, setShowBattleWaiting] =
    useState(false)

  const [showLeaderboard, setShowLeaderboard] =
    useState(false)


  // ==========================================
  // BATTLE DATA
  // ==========================================

  const [competition, setCompetition] =
    useState(null)

  const [joinedPlayer, setJoinedPlayer] =
    useState(null)

  const [players, setPlayers] =
    useState([])


  // ==========================================
  // REALTIME BATTLE LISTENER
  // ==========================================

  useEffect(() => {

    const battleCode =
      competition?.battle_code ||
      joinedPlayer?.battleCode ||
      urlBattleCode


    if (!battleCode) {
      return
    }


    console.log(
      '🔥 Listening for battle:',
      battleCode
    )


    // ========================================
    // LOAD CURRENT BATTLE
    // ========================================

    const loadBattle = async () => {

      const { data, error } = await supabase
        .from('Battles')
        .select('*')
        .eq('battle_code', battleCode)
        .single()


      if (error) {

        console.error(
          '❌ Could not load battle:',
          error
        )

        return
      }


      console.log(
        '📦 Current battle:',
        data
      )


      setCompetition(data)


      setPlayers(
        Array.isArray(data.participants)
          ? data.participants
          : []
      )


      // ======================================
      // FRIEND AUTO START
      // ======================================

      if (
        data.status === 'started' &&
        showBattleWaiting
      ) {

        console.log(
          '🚀 HOST ALREADY STARTED!'
        )


        setShowBattleWaiting(false)

        setShowMathsBattle(true)

      }

    }


    loadBattle()


    // ========================================
    // SUPABASE REALTIME
    // ========================================

    const channel = supabase
      .channel(`battle-${battleCode}`)

      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'Battles',
          filter: `battle_code=eq.${battleCode}`
        },

        (payload) => {

          console.log(
            '⚡ Battle updated:',
            payload.new
          )


          const updatedBattle = payload.new


          setCompetition(updatedBattle)


          setPlayers(
            Array.isArray(updatedBattle.participants)
              ? updatedBattle.participants
              : []
          )


          // ====================================
          // FRIEND ENTERS GAME AUTOMATICALLY
          // ====================================

          if (
            updatedBattle.status === 'started' &&
            showBattleWaiting
          ) {

            console.log(
              '🔥 HOST STARTED! FRIEND ENTERING GAME!'
            )


            setShowBattleWaiting(false)

            setShowMathsBattle(true)

          }

        }
      )

      .subscribe((status) => {

        console.log(
          '📡 Realtime status:',
          status
        )

      })


    // ========================================
    // CLEANUP
    // ========================================

    return () => {

      console.log(
        '🧹 Removing battle listener'
      )

      supabase.removeChannel(channel)

    }

  }, [
    competition?.battle_code,
    joinedPlayer?.battleCode,
    urlBattleCode,
    showBattleWaiting
  ])


  // ==========================================
  // QUICK BATTLE
  // ==========================================

  if (showQuickBattle) {

    return (
      <QuickBattle
        onBack={() => {
          setShowQuickBattle(false)
        }}
      />
    )

  }


  // ==========================================
  // CREATE COMPETITION
  // ==========================================

  if (showCreateCompetition) {

    return (
      <CreateCompetition

        onBack={() => {
          setShowCreateCompetition(false)
        }}

        onCreate={(data) => {

          console.log(
            '🏆 Competition created:',
            data
          )


          setCompetition(data)


          setPlayers(
            Array.isArray(data.participants)
              ? data.participants
              : []
          )


          setShowCreateCompetition(false)

          // HOST GOES TO READY SCREEN
          setShowCompetitionReady(true)

        }}

      />
    )

  }


  // ==========================================
  // COMPETITION READY
  // ==========================================

  if (showCompetitionReady) {

    return (
      <CompetitionReady

        competition={competition}

        onBack={() => {

          setShowCompetitionReady(false)

          setShowCreateCompetition(true)

        }}

        onStart={async () => {

          // ==================================
          // NORMAL / INDIVIDUAL / TEAM
          // ==================================

          if (
            competition?.mode !== 'friend'
          ) {

            setShowCompetitionReady(false)

            setShowMathsBattle(true)

            return

          }


          // ==================================
          // FRIEND BATTLE
          // HOST STARTS
          // ==================================

          console.log(
            '🔥 HOST STARTING FRIEND BATTLE'
          )


          const { data, error } = await supabase
            .from('Battles')
            .update({
              status: 'started'
            })
            .eq(
              'battle_code',
              competition.battle_code
            )
            .select()
            .single()


          if (error) {

            console.error(
              '❌ Could not start battle:',
              error
            )


            alert(
              'Could not start the battle. Please try again.'
            )

            return

          }


          console.log(
            '✅ Battle started:',
            data
          )


          setCompetition(data)


          setPlayers(
            Array.isArray(data.participants)
              ? data.participants
              : []
          )


          // HOST ENTERS GAME
          setShowCompetitionReady(false)

          setShowMathsBattle(true)

        }}

      />
    )

  }


  // ==========================================
  // LIVE MATHS BATTLE
  // ==========================================

if (showMathsBattle) {

  return (
    <MathsBattle

      competition={competition}

      playerName={
        joinedPlayer?.name || 'Host'
      }

      onBack={() => {

        console.log('🏠 Leaving Maths Battle')

        setShowMathsBattle(false)
        setShowBattleWaiting(false)
        setShowCompetitionReady(false)
        setShowCreateCompetition(false)
        setShowJoinBattle(false)


      }}

    />
  )

}
  // ==========================================
  // JOIN BATTLE
  // ==========================================

  if (showJoinBattle) {

    return (
      <JoinBattle

        battleCode={
          urlBattleCode || 'HTP163'
        }

        onBack={() => {

          setShowJoinBattle(false)

        }}

        onJoin={(data) => {

          console.log(
            '👤 Player joined:',
            data
          )


          setJoinedPlayer(data)


          setCompetition(
            data.battle
          )


          setPlayers(
            Array.isArray(
              data.battle?.participants
            )
              ? data.battle.participants
              : []
          )


          // GO TO WAITING ROOM
          setShowJoinBattle(false)

          setShowBattleWaiting(true)

        }}

      />
    )

  }


  // ==========================================
  // BATTLE WAITING ROOM
  // ==========================================

  if (showBattleWaiting) {

    return (
      <BattleWaiting

        battleCode={
          competition?.battle_code ||
          joinedPlayer?.battleCode ||
          urlBattleCode ||
          'HTP163'
        }

        playerName={
          joinedPlayer?.name ||
          'Player'
        }

        players={players}

        // FRIEND CANNOT START
        isHost={false}

        onBack={() => {

          setShowBattleWaiting(false)


          if (joinedPlayer) {

            setShowJoinBattle(true)

          } else {

            setShowCompetitionReady(true)

          }

        }}

        onStart={() => {

          console.log(
            '⏳ Waiting for host...'
          )

        }}

      />
    )

  }


  // ==========================================
  // LEADERBOARD
  // ==========================================

  if (showLeaderboard) {

    return (
      <Leaderboard

        onBack={() => {
          setShowLeaderboard(false)
        }}

      />
    )

  }


  // ==========================================
  // MAIN SCREEN
  // ==========================================

  return (

    <div className="screen5">

      <button
        className="screen5-back"
        onClick={onBack}
      >
        ← BACK
      </button>


      <div className="screen5-content">

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


        <div className="competition-cards">


          {/* QUICK BATTLE */}

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
              onClick={() => {
                setShowQuickBattle(true)
              }}
            >
              START BATTLE →
            </button>

          </div>


          {/* CREATE */}

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
              onClick={() => {
                setShowCreateCompetition(true)
              }}
            >
              CREATE →
            </button>

          </div>


          {/* JOIN */}

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
              onClick={() => {
                setShowJoinBattle(true)
              }}
            >
              JOIN →
            </button>

          </div>


          {/* LEADERBOARD */}

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
              onClick={() => {
                setShowLeaderboard(true)
              }}
            >
              VIEW →
            </button>

          </div>

        </div>


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