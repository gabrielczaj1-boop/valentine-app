import { motion } from 'framer-motion'

function CutePet({ noClicks, isHoveringYes }) {
  // Happy GIF URL
  const happyGifUrl = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdG82ZWVkcml4eHdwOWdhMGtzc3pneDRjdHcxM3VwNXF0M28xYjAybCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L8HOX7DbJSKiuWJQZ4/giphy.gif"
  // Sad GIF URL
  const sadGifUrl = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHp0Znd6Z3ZueHByZ3A0eHh3Z3ZueHByZ3A0eHh3Z3ZueHByZ3A0eHh3JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZ2VudGlmaWVyJmN0PWc/9Y5BbDSkSTiY8/giphy.gif"
  
  // Use sad GIF if "No" has been clicked, otherwise use happy GIF
  const imageUrl = noClicks > 0 ? sadGifUrl : happyGifUrl

  return (
    <motion.img
      src={imageUrl}
      alt={noClicks > 0 ? "Sad pet" : "Happy pet"}
      className="max-w-xs md:max-w-md w-full rounded-lg shadow-xl drop-shadow-lg"
      animate={{
        y: [0, -10, 0],
        scale: isHoveringYes ? [1, 1.05, 1] : 1,
      }}
      transition={{
        y: {
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        },
        scale: {
          duration: 0.5,
          repeat: isHoveringYes ? Infinity : 0,
          repeatType: "reverse",
        },
      }}
    />
  )
}

export default CutePet

