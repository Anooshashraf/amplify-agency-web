'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

const projects = [
  {
    id: '01',
    title: 'AutoElite',
    category: 'Automotive',
    color: '#22c55e',
    accentDim: 'rgba(34,197,94,0.08)',
    stat1: { label: 'Conversion', value: '+38%' },
    stat2: { label: 'Bounce Rate', value: '-52%' },
    imgSrc: '/images/ui-ux.jpg',
    liveUrl: '/work/Autoelite.html',
  },
  {
    id: '02',
    title: 'Ember & Salt',
    category: 'Restaurant',
    color: '#22c55e',
    accentDim: 'rgba(34,197,94,0.08)',
    stat1: { label: 'Reservations', value: '+61%' },
    stat2: { label: 'Session Time', value: '4.2 min' },
    imgSrc: '/images/mobile-app.jpg',
    liveUrl: '/work/EmberSalt.html',
  },
  {
    id: '03',
    title: 'NovaTech',
    category: 'Tech Agency',
    color: '#22c55e',
    accentDim: 'rgba(34,197,94,0.08)',
    stat1: { label: 'Lead Gen', value: '+89%' },
    stat2: { label: 'Time on Site', value: '+3.1x' },
    imgSrc: '/images/devops.jpg',
    liveUrl: '/work/Novatech.html',
  },
  {
    id: '04',
    title: 'FreshCart',
    category: 'E-Commerce',
    color: '#3ec76e',
    accentDim: 'rgba(62,199,110,0.08)',
    stat1: { label: 'Cart Value', value: '+44%' },
    stat2: { label: 'Return Users', value: '67%' },
    imgSrc: '/images/ecommerce.webp',
    liveUrl: '/work/Freshcart.html',
  },
]

export default function WorkSection() {
  const { ref: sectionRef, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const active = projects[activeIndex]

  const goNext = () => {
    setDirection(1)
    setActiveIndex((prev) => (prev + 1) % projects.length)
  }

  const goPrev = () => {
    setDirection(-1)
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative overflow-hidden py-28 px-6 md:px-12 lg:px-20"
      style={{ background: 'var(--dark-2)' }}
    >
      <div
        className="absolute left-0 top-1/2 pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          background: `radial-gradient(circle, ${active.accentDim} 0%, transparent 70%)`,
          filter: 'blur(80px)',
          transform: 'translateY(-50%)',
        }}
      />

      <div className="section-bg-text" style={{ top: '50%', left: '-2%', transform: 'translateY(-50%)' }} aria-hidden>
        WORK
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                color: 'var(--green-bright)',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '1rem',
              }}
            >
              Selected Work
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.4rem, 5.2vw, 5.2rem)',
                fontWeight: 800,
                color: 'var(--cream)',
                letterSpacing: '-0.03em',
                lineHeight: 1.0,
                marginBottom: '1rem',
              }}
            >
              Work That
              <br />
              <em style={{ color: 'var(--green-bright)', fontStyle: 'italic' }}>Performs</em>
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                color: 'rgba(245,234,208,0.72)',
                maxWidth: '40ch',
                lineHeight: 1.8,
                marginBottom: '1.5rem',
              }}
            >
              Digital products built to perform from concept to launch, each project crafted with precision and purpose.
            </p>

            <div className="flex items-center gap-3 mb-5">
              <span style={{ fontFamily: 'var(--font-number)', fontSize: '0.66rem', color: 'rgba(245,234,208,0.65)', letterSpacing: '0.09em' }}>
                {active.id} / {String(projects.length).padStart(2, '0')}
              </span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.62rem', color: 'rgba(245,234,208,0.35)', letterSpacing: '0.06em' }}>
                Tap card to flip
              </span>
            </div>

            <Link href="/work">
              <button className="btn-primary text-xs py-3 px-5 flex items-center gap-2">
                <span>View All Work</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative w-full max-w-[460px] mx-auto lg:ml-auto"
            style={{ perspective: '1200px', minHeight: '520px' }}
          >
            {[2, 1, 0].map((depth) => {
              const idx = (activeIndex + depth) % projects.length
              const p = projects[idx]
              const isFront = depth === 0

              return (
                <motion.article
                  key={`${p.id}-${depth}`}
                  initial={{ opacity: 0, x: direction > 0 ? 70 : -70, rotateY: direction > 0 ? 14 : -14 }}
                  animate={{
                    opacity: depth === 0 ? 1 : depth === 1 ? 0.2 : 0.1,
                    x: depth * 46,
                    y: depth * 22,
                    scale: 1 - depth * 0.08,
                    rotateY: -depth * 11,
                    zIndex: 30 - depth,
                  }}
                  transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 rounded-2xl overflow-hidden"
                  onClick={isFront ? goNext : undefined}
                  whileTap={isFront ? { scale: 0.985 } : undefined}
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: `1px solid ${p.color}30`,
                    boxShadow: `0 10px 24px ${p.color}12`,
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden',
                    transform: 'translateZ(0)',
                    pointerEvents: isFront ? 'auto' : 'none',
                    willChange: 'transform, opacity',
                    cursor: isFront ? 'pointer' : 'default',
                  }}
                >
                  <div className="relative" style={{ aspectRatio: '16/9' }}>
                    <img
                      src={p.imgSrc}
                      alt={p.title}
                      className="w-full h-full object-cover"
                      style={{ filter: 'brightness(0.62)' }}
                    />
                    <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${p.color}66 0%, transparent 62%)` }} />
                    <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full" style={{ border: `1px solid ${p.color}65` }}>
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.62rem', color: p.color, letterSpacing: '0.08em' }}>
                        {p.id}
                      </span>
                    </div>
                    {isFront && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(p.liveUrl, '_blank', 'noopener,noreferrer')
                        }}
                        className="absolute bottom-3 right-3 flex items-center justify-center gap-2 py-2 px-3 rounded-lg transition-opacity hover:opacity-85"
                        style={{
                          background: 'rgba(2,10,6,0.78)',
                          border: `1px solid ${p.color}65`,
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.62rem',
                          fontWeight: 600,
                          color: p.color,
                          backdropFilter: 'blur(6px)',
                        }}
                      >
                        Preview
                      </button>
                    )}
                  </div>

                  {isFront ? (
                    <div className="p-5 md:p-6" style={{ background: 'rgba(2,10,6,0.96)' }}>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.62rem', color: p.color, letterSpacing: '0.11em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                        {p.category}
                      </p>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.05rem, 1.9vw, 1.45rem)', fontWeight: 700, color: 'var(--cream)', marginBottom: '0.8rem' }}>
                        {p.title}
                      </h3>

                      <div className="grid grid-cols-2 gap-2">
                        {[p.stat1, p.stat2].map((stat, si) => (
                          <div key={si} className="rounded-lg px-3 py-2.5" style={{ border: `1px solid ${p.color}22`, background: 'rgba(255,255,255,0.015)' }}>
                            <div style={{ fontFamily: 'var(--font-number)', fontSize: '0.95rem', color: p.color, fontWeight: 700, lineHeight: 1.1 }}>
                              {stat.value}
                            </div>
                            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.54rem', color: 'rgba(245,234,208,0.38)', marginTop: '2px', letterSpacing: '0.04em' }}>
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>

                    </div>
                  ) : (
                    <div className="h-0" />
                  )}
                </motion.article>
              )
            })}
          </motion.div>
        </div>

        <div className="mt-8 flex items-center justify-end">
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'rgba(245,234,208,0.3)' }}>
            {projects.length} projects showcased
          </span>
        </div>
      </div>
    </section>
  )
}
