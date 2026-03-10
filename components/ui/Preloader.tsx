'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0)
  const [done, setDone] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    let current = 0
    intervalRef.current = setInterval(() => {
      current += Math.floor(Math.random() * 2) + 1
      if (current >= 100) {
        current = 100
        clearInterval(intervalRef.current)
        setTimeout(() => {
          setDone(true)
          setTimeout(onComplete, 700)
        }, 400)
      }
      setCount(current)
    }, 50)

    return () => clearInterval(intervalRef.current)
  }, [onComplete])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Background text */}
          <div className="preloader-text select-none" aria-hidden>
            AMPLIFY
          </div>

          {/* Noise */}
          <div className="noise" />

          {/* Counter */}
          <div className="preloader-counter">
            {String(count).padStart(2, '0')}
          </div>

          {/* Bottom right bar + label */}
          <div className="preloader-bar-wrap">
            <span className="preloader-label">Loading</span>
            <div className="preloader-bar">
              <div
                className="preloader-bar-fill"
                style={{ height: `${count}%` }}
              />
            </div>
          </div>

          {/* Bottom left brand */}
          <div className="absolute bottom-8 left-8">
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.75rem',
                letterSpacing: '0.25em',
                color: 'rgba(245,234,208,0.3)',
                textTransform: 'uppercase',
              }}
            >
              Amplify Agency
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
