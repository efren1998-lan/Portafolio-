import { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'
import './CustomCursor.css'

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)

  const springConfig = { damping: 25, stiffness: 200 }
  const cursorX = useSpring(0, springConfig)
  const cursorY = useSpring(0, springConfig)
  
  const dotX = useMotionValue(0)
  const dotY = useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      dotX.set(e.clientX - 4)
      dotY.set(e.clientY - 4)
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('glass-card')
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [cursorX, cursorY, dotX, dotY])

  return (
    <>
      <motion.div
        className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />
      <motion.div
        className="custom-cursor-dot"
        style={{
          x: dotX,
          y: dotY,
        }}
      />
    </>
  )
}
