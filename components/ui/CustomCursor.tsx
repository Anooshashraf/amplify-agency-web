'use client'

import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement[]>([])
  const posRef = useRef({ x: -100, y: -100 })
  const ringPosRef = useRef({ x: -100, y: -100 })
  const rafRef = useRef<number>(0)
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [cursorColor, setCursorColor] = useState('var(--green-glow)')

  const TRAIL_COUNT = 6

  useEffect(() => {
    // Create trail dots
    const trailContainer = document.createElement('div')
    trailContainer.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:9997;'
    document.body.appendChild(trailContainer)

    const trails: HTMLDivElement[] = []
    for (let i = 0; i < TRAIL_COUNT; i++) {
      const trail = document.createElement('div')
      const size = 6 - i * 0.7
      const opacity = 0.4 - i * 0.06
      trail.style.cssText = `
        position:fixed;
        width:${size}px;height:${size}px;
        border-radius:50%;
        background:var(--green-glow);
        pointer-events:none;
        transform:translate(-50%,-50%);
        transition:background 0.3s;
        opacity:${opacity};
        will-change:transform;
      `
      trailContainer.appendChild(trail)
      trails.push(trail)
    }
    trailRef.current = trails

    const trailPositions = Array.from({ length: TRAIL_COUNT }, () => ({ x: -100, y: -100 }))

    const onMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY }
    }

    const onMouseDown = () => setIsClicking(true)
    const onMouseUp = () => setIsClicking(false)

    const addHoverListeners = () => {
      const interactables = document.querySelectorAll('a, button, [data-cursor]')
      interactables.forEach(el => {
        el.addEventListener('mouseenter', () => {
          setIsHovering(true)
          const color = (el as HTMLElement).dataset.cursorColor
          if (color) setCursorColor(color)
        })
        el.addEventListener('mouseleave', () => {
          setIsHovering(false)
          setCursorColor('var(--green-glow)')
        })
      })
    }

    // Animate loop
    let frame = 0
    const animate = () => {
      rafRef.current = requestAnimationFrame(animate)
      frame++

      const { x, y } = posRef.current

      // Dot — instant
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x - 6}px, ${y - 6}px)`
      }

      // Ring — lagged follow
      ringPosRef.current.x += (x - ringPosRef.current.x) * 0.12
      ringPosRef.current.y += (y - ringPosRef.current.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPosRef.current.x - 20}px, ${ringPosRef.current.y - 20}px)`
      }

      // Trail — cascading lag
      trailPositions[0].x += (x - trailPositions[0].x) * 0.3
      trailPositions[0].y += (y - trailPositions[0].y) * 0.3
      for (let i = 1; i < TRAIL_COUNT; i++) {
        trailPositions[i].x += (trailPositions[i - 1].x - trailPositions[i].x) * 0.35
        trailPositions[i].y += (trailPositions[i - 1].y - trailPositions[i].y) * 0.35
        if (trails[i]) {
          trails[i].style.left = trailPositions[i].x + 'px'
          trails[i].style.top = trailPositions[i].y + 'px'
        }
      }
      if (trails[0]) {
        trails[0].style.left = trailPositions[0].x + 'px'
        trails[0].style.top = trailPositions[0].y + 'px'
      }
    }
    animate()
    addHoverListeners()

    // Re-scan for hover targets on DOM changes
    const observer = new MutationObserver(addHoverListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
      observer.disconnect()
      document.body.removeChild(trailContainer)
    }
  }, [])

  return (
    <>
      {/* Main dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          width: isClicking ? '8px' : isHovering ? '14px' : '12px',
          height: isClicking ? '8px' : isHovering ? '14px' : '12px',
          borderRadius: '50%',
          background: cursorColor,
          pointerEvents: 'none',
          zIndex: 9999,
          willChange: 'transform',
          mixBlendMode: 'difference',
          transition: 'width 0.2s, height 0.2s, background 0.3s',
          boxShadow: `0 0 ${isHovering ? '20px' : '10px'} ${cursorColor}`,
        }}
      />

      {/* Outer ring */}
       {/* <div
        ref={ringRef}
        style={{
          position: 'fixed',
          width: isHovering ? '50px' : '40px',
          height: isHovering ? '50px' : '40px',
          borderRadius: '50%',
          border: `1px solid ${isHovering ? cursorColor : 'rgba(34,197,94,0.45)'}`,
          pointerEvents: 'none',
          zIndex: 9998,
          willChange: 'transform',
          transition: 'width 0.35s cubic-bezier(0.16,1,0.3,1), height 0.35s cubic-bezier(0.16,1,0.3,1), border-color 0.3s',
          backdropFilter: isHovering ? 'blur(2px)' : 'none',
        }} 
      /> */}
    </>
  )
}
