import { useState } from 'react'
import './JoinBattle.css'
import { supabase } from '../supabase'

function JoinBattle({ battleCode, onBack, onJoin }) {

  const [name, setName] = useState('')
  const [joining, setJoining] = useState(false)

  const handleJoin = async () => {

    if (!name.trim()) {
      alert('Please enter your name 😊')
      return
    }

    if (!battleCode) {
      alert('Battle code is missing.')
      return
    }

    setJoining(true)

    try {

      // ==========================================
      // FIND BATTLE
      // ==========================================

      const { data: battle, error: findError } =
        await supabase
          .from('Battles')
          .select('*')
          .eq('battle_code', battleCode)
          .single()

      if (findError || !battle) {

        console.error(
          'Battle not found:',
          findError
        )

        alert(
          'Battle not found. Please check the battle code.'
        )

        return
      }


      // ==========================================
      // CHECK STATUS
      // ==========================================

      if (battle.status !== 'waiting') {

        alert(
          'This battle has already started or is no longer available.'
        )

        return
      }


      // ==========================================
      // CURRENT PLAYERS
      // ==========================================

      const currentParticipants =
        Array.isArray(battle.participants)
          ? battle.participants
          : []


      // ==========================================
      // CHECK DUPLICATE NAME
      // ==========================================

      const cleanName =
        name.trim()

      const alreadyJoined =
        currentParticipants.some(
          (player) =>
            player &&
            typeof player === 'object' &&
            player.name?.toLowerCase() ===
              cleanName.toLowerCase()
        )


      if (
        battle.host_name &&
        battle.host_name.toLowerCase() ===
          cleanName.toLowerCase()
      ) {

        alert(
          'That name is already being used by the host. Please choose another name.'
        )

        return
      }


      if (alreadyJoined) {

        alert(
          'This name has already joined the battle.'
        )

        return
      }


      // ==========================================
      // CREATE PLAYER
      // ==========================================

      const newPlayer = {
        name: cleanName,
        joined_at: new Date().toISOString()
      }


      const updatedParticipants = [
        ...currentParticipants,
        newPlayer
      ]


      // ==========================================
      // SAVE PLAYER
      // ==========================================

      const {
        data: updatedBattle,
        error: updateError
      } = await supabase
        .from('Battles')
        .update({
          participants: updatedParticipants
        })
        .eq(
          'battle_code',
          battleCode
        )
        .select()
        .single()


      if (updateError) {

        console.error(
          'Join battle error:',
          updateError
        )

        alert(
          'Could not join the battle. Please try again.'
        )

        return
      }


      console.log(
        '✅ Player joined:',
        updatedBattle
      )


      // ==========================================
      // SEND DATA TO SCREEN5
      // ==========================================

      onJoin({

        name: cleanName,

        battleCode: battleCode,

        battle: updatedBattle

      })

    } catch (error) {

      console.error(
        'Unexpected join error:',
        error
      )

      alert(
        'Something went wrong. Please try again.'
      )

    } finally {

      setJoining(false)

    }
  }


  return (

    <div className="join-battle">

      <button
        className="join-back"
        onClick={onBack}
      >
        ← BACK
      </button>


      <div className="join-content">

        <div className="join-icon">
          🔗
        </div>

        <p className="join-label">
          MATHSFUN • FRIEND BATTLE
        </p>

        <h1>
          JOIN BATTLE
        </h1>

        <p className="join-intro">
          Your friend has invited you to a Maths Battle! 🔥
        </p>


        <div className="join-card">

          <div className="join-code-section">

            <span>
              🏆
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


          <div className="join-input-section">

            <label>
              👤 YOUR NAME
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              placeholder="Enter your name"
              maxLength={30}
              disabled={joining}
              onKeyDown={(e) => {

                if (e.key === 'Enter') {
                  handleJoin()
                }

              }}
            />

          </div>


          <button
            type="button"
            className="join-button"
            onClick={handleJoin}
            disabled={joining}
          >

            {joining
              ? '⏳ JOINING...'
              : '🚀 JOIN BATTLE'}

          </button>

        </div>


        <div className="join-info">

          <span>
            💡
          </span>

          <p>
            Enter your name and get ready.
            The battle will begin when everyone is ready!
          </p>

        </div>

      </div>

    </div>
  )
}

export default JoinBattle