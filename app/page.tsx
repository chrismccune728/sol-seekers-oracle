'use client'

import { useState } from 'react'
import oracleMessages from '../data/oracleMessages.json'

export default function Home() {
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

 const restDayMessages = [
  "Go play golf today instead. 🏌️‍♂️",
  "Go play golf today instead. 🏌️‍♂️",
  "Don’t knock today — go play golf instead. ",
  "The Oracle says… today’s a recharge day. Call your mom. ",
  "No doors today. Rest, reset, and hit it harder tomorrow. ",
  "Try again tomorrow — the sun will shine stronger. ",
  "The field can wait. Go do something fun today. "
]

  const playSoundsThenReveal = async () => {
    setIsLoading(true)
    setMessage('')

    const knock = new Audio('/door knock.mp3')
    const chime = new Audio('/chime.mp3')

    try {
      await knock.play()
      await new Promise(resolve => setTimeout(resolve, 1000))

      await chime.play()
      await new Promise(resolve => setTimeout(resolve, 1500))
    } catch (e) {
      console.log("Sound play error:", e)
    }

    // Random chance to show rest message
    const isRestDay = Math.random() < 0.2 // ~1 in 5

    if (isRestDay) {
      const index = Math.floor(Math.random() * restDayMessages.length)
      setMessage(restDayMessages[index])
    } else {
      const index = Math.floor(Math.random() * oracleMessages.length)
      setMessage(oracleMessages[index])
    }

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-orange-200 flex flex-col items-center justify-center p-6 text-center">
<img
  src="/solseeker.png"
  alt="SoulSeeker Logo"
  className="w-36 h-36 mb-6 rounded-full shadow-lg"
/>


      <h1 className="text-4xl font-bold mb-4">🔆 Sol Seekers: Door Knocker’s Oracle</h1>

      <button
        onClick={playSoundsThenReveal}
        disabled={isLoading}
        className={`px-6 py-3 bg-yellow-500 text-white rounded-lg shadow-lg transition hover:bg-yellow-600 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {isLoading ? 'Consulting the Oracle…' : 'Summon Your Prophecy'}
      </button>

      {message && (
        <p className="mt-10 text-2xl max-w-xl font-medium italic animate-fade-in">{message}</p>
      )}
    </div>
  )
}
