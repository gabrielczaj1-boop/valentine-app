import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import CutePet from './CutePet.jsx'

function App() {
  const [noClicks, setNoClicks] = useState(0)
  const [hasWon, setHasWon] = useState(false)
  const [isHoveringYes, setIsHoveringYes] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 1000, height: 800 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
    }
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const handleNoClick = () => {
    setNoClicks(prev => prev + 1)
  }

  const handleYesClick = () => {
    setHasWon(true)
  }

  // Calculate button scales based on clicks
  const yesScale = noClicks === 0 ? 1 : 1.5 + ((noClicks - 1) * 0.3)
  const noScale = noClicks === 0 ? 1 : Math.max(0.1, 0.8 - ((noClicks - 1) * 0.1))

  // Get button texts
  const getNoText = () => {
    if (noClicks === 0) return 'No'
    if (noClicks === 1) return 'Are you sure? 🥺'
    return 'Are you sure? 🥺'
  }

  const getYesText = () => {
    if (noClicks === 0) return 'Yes'
    return 'Correct Answer ✅'
  }

  if (hasWon) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-300 to-rose-300 flex flex-col items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="text-center"
        >
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-rose-600 mb-8"
          >
            Yay! See you on the 14th! 🌹✨
          </motion.h1>
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 150 }}
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHp0Znd6Z3ZueHByZ3A0eHh3Z3ZueHByZ3A0eHh3Z3ZueHByZ3A0eHh3JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZ2VudGlmaWVyJmN0PWc/c77vAnfU7vKVS/giphy.gif"
            alt="Happy Dance"
            className="mx-auto rounded-lg shadow-2xl max-w-md w-full"
          />
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-200 to-rose-200 relative overflow-hidden">
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl"
            initial={{
              x: Math.random() * dimensions.width,
              y: Math.random() * dimensions.height,
              opacity: 0.3,
            }}
            animate={{
              y: [null, -100],
              x: [null, (Math.random() - 0.5) * 50],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          >
            💖
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        {/* Header */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="text-3xl md:text-5xl font-bold text-rose-600 mb-8 text-center"
        >
          Will you be my valentine? 💖
        </motion.h1>

        {/* Cute Pet */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="mb-8"
        >
          <CutePet noClicks={noClicks} isHoveringYes={isHoveringYes} />
        </motion.div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center w-full max-w-2xl px-4">
          {/* Yes Button */}
          <motion.button
            onClick={handleYesClick}
            onMouseEnter={() => setIsHoveringYes(true)}
            onMouseLeave={() => setIsHoveringYes(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              scale: yesScale,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 md:py-6 md:px-12 rounded-full text-xl md:text-2xl shadow-lg hover:shadow-xl transition-shadow"
          >
            {getYesText()}
          </motion.button>

          {/* No Button */}
          <motion.button
            onClick={handleNoClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              scale: noScale,
              opacity: noClicks > 5 ? 0.3 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 md:py-6 md:px-12 rounded-full text-xl md:text-2xl shadow-lg hover:shadow-xl transition-shadow"
            style={{ pointerEvents: noClicks > 10 ? 'none' : 'auto' }}
          >
            {getNoText()}
          </motion.button>
        </div>
      </div>
    </div>
  )
}

export default App

