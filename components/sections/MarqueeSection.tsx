'use client'

import { useRef, useEffect } from 'react'

const items = [
  { text: 'Next.js', type: 'tech' },
  { text: 'Automotive', type: 'industry' },
  { text: 'React Native', type: 'tech' },
  { text: 'E-Commerce', type: 'industry' },
  { text: 'Three.js', type: 'tech' },
  { text: 'Restaurant', type: 'industry' },
  { text: 'TypeScript', type: 'tech' },
  { text: 'SaaS', type: 'industry' },
  { text: 'Framer Motion', type: 'tech' },
  { text: 'HealthCare', type: 'industry' },
  { text: 'Node.js', type: 'tech' },
  { text: 'Fintech', type: 'industry' },
  { text: 'PostgreSQL', type: 'tech' },
  { text: 'Retail', type: 'industry' },
  { text: 'AWS', type: 'tech' },
  { text: 'Real Estate', type: 'industry' },
]

const Diamond = () => (
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" style={{ flexShrink: 0 }}>
    <rect x="4" y="0" width="5.66" height="5.66" transform="rotate(45 4 0)" fill="var(--green-bright)" opacity="0.5" />
  </svg>
)

export default function MarqueeSection() {
  const track1 = useRef<HTMLDivElement>(null)
  const track2 = useRef<HTMLDivElement>(null)
  const pos1 = useRef(0)
  const pos2 = useRef(0)
  const raf = useRef<number>(0)

  useEffect(() => {
    const speed = 0.4

    const animate = () => {
      if (track1.current && track2.current) {
        pos1.current -= speed
        pos2.current += speed

        const w1 = track1.current.scrollWidth / 2
        const w2 = track2.current.scrollWidth / 2

        if (Math.abs(pos1.current) >= w1) pos1.current = 0
        if (pos2.current >= 0) pos2.current = -w2

        track1.current.style.transform = `translateX(${pos1.current}px)`
        track2.current.style.transform = `translateX(${pos2.current}px)`
      }
      raf.current = requestAnimationFrame(animate)
    }

    // Init pos2 at -half
    if (track2.current) {
      pos2.current = -(track2.current.scrollWidth / 2)
    }

    raf.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf.current)
  }, [])

  const renderItems = (reversed = false) => {
    const list = reversed ? [...items].reverse() : items
    return [...list, ...list].map((item, i) => (
      <span
        key={i}
        className="inline-flex items-center gap-3 px-1"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '0.8rem',
          fontWeight: 600,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: item.type === 'tech' ? 'var(--cream)' : 'var(--green-bright)',
          opacity: item.type === 'tech' ? 0.4 : 0.7,
          whiteSpace: 'nowrap',
        }}
      >
        <Diamond />
        {item.text}
        <span style={{ display: 'inline-block', width: '2rem' }} />
      </span>
    ))
  }

  return (
    <div
      className="relative overflow-hidden py-5"
      style={{
        background: 'var(--dark-2)',
        borderTop: '1px solid rgba(34,197,94,0.07)',
        borderBottom: '1px solid rgba(34,197,94,0.07)',
      }}
    >
      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to right, var(--dark-2), transparent)' }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to left, var(--dark-2), transparent)' }}
      />

      {/* Row 1 — left */}
      <div className="overflow-hidden mb-3">
        <div ref={track1} className="flex will-change-transform" style={{ width: 'max-content' }}>
          {renderItems(false)}
        </div>
      </div>

      {/* Row 2 — right */}
      <div className="overflow-hidden">
        <div ref={track2} className="flex will-change-transform" style={{ width: 'max-content' }}>
          {renderItems(true)}
        </div>
      </div>
    </div>
  )
}
