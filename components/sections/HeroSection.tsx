'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Image from 'next/image'

const ParticleGlobe = dynamic(() => import('../three/ParticleGlobe'), {
  ssr: false,
  loading: () => null,
})

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support Available' },
]

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'var(--dark)' }}
    >
      {/* Background text */}
      <div
        className="section-bg-text"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: 'clamp(5rem, 15vw, 15rem)',
          opacity: 1,
        }}
        aria-hidden
      >
        AMPLIFY
      </div>

      {/* Radial glow */}
      <div className="hero-gradient absolute inset-0" />

      {/* Particle Globe */}
      <ParticleGlobe
        className="absolute inset-0"
        particleCount={3200}
      />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 pt-32 pb-12">
        <div className="max-w-7xl mx-auto">

          {/* Nav hint */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6 flex items-center gap-3"
          >
            <span
              style={{
                display: 'inline-block',
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: 'var(--green-glow)',
                boxShadow: '0 0 10px var(--green-glow)',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.7rem',
                letterSpacing: '0.2em',
                color: 'rgba(245,234,208,0.5)',
                textTransform: 'uppercase',
              }}
            >
              Web & App Development Agency
            </span>
          </motion.div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left: Text */}
            <div>
              <div className="mb-6 overflow-hidden">
                <motion.h1
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2.2rem, 5vw, 4.8rem)',
                    fontWeight: 800,
                    lineHeight: 1.05,
                    letterSpacing: '-0.03em',
                    color: 'var(--cream-light)',
                    maxWidth: '16ch',
                  }}
                >
                  Building{' '}
                  <em
                    style={{
                      fontStyle: 'italic',
                      color: 'var(--green-bright)',
                      textShadow: '0 0 40px rgba(62,199,110,0.3)',
                    }}
                  >
                    Digital
                  </em>
                  <br />
                  Solutions<br />That Matter
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(0.82rem, 1.2vw, 0.95rem)',
                  color: 'rgba(245,234,208,0.5)',
                  maxWidth: '42ch',
                  lineHeight: 1.75,
                  marginBottom: '2rem',
                }}
              >
                We empower organisations with AI-driven digital products that turn
                complex challenges into real-world outcomes.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="flex flex-wrap items-center gap-3 mb-10"
              >
                <Link href="/contact">
                  <button className="btn-primary text-xs py-3 px-6">
                    <span>Start Your Project</span>
                  </button>
                </Link>
                <Link href="/work">
                  <button className="btn-outline flex items-center gap-2 text-xs py-3 px-6">
                    Explore Our Work
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex items-center gap-8 md:gap-12"
              >
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)',
                        fontWeight: 700,
                        color: 'var(--cream)',
                        lineHeight: 1,
                      }}
                    >
                      {stat.value}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.68rem',
                        color: 'rgba(245,234,208,0.4)',
                        letterSpacing: '0.08em',
                        marginTop: '0.2rem',
                      }}
                    >
                      {stat.label}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: Workspace Image */}
            <motion.div
              initial={{ opacity: 0, x: 60, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative hidden lg:block"
            >
              {/* Glow behind image */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(34,197,94,0.12) 0%, transparent 70%)',
                  filter: 'blur(30px)',
                  transform: 'scale(1.1)',
                }}
              />

              {/* Image frame */}
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  border: '1px solid rgba(34,197,94,0.15)',
                  boxShadow: '0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(34,197,94,0.08)',
                }}
              >
                <Image
                  src="/images/hero-workspace.png"
                  alt="Amplify Agency workspace"
                  width={720}
                  height={480}
                  className="w-full h-auto"
                  style={{ display: 'block' }}
                  priority
                />
                {/* Subtle dark overlay at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to top, var(--dark), transparent)',
                  }}
                />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="absolute -bottom-4 -left-4 glass-card rounded-xl px-4 py-3 flex items-center gap-3"
                style={{ border: '1px solid rgba(34,197,94,0.2)' }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: 'var(--green-glow)', boxShadow: '0 0 8px var(--green-glow)', animation: 'pulse 2s infinite' }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.72rem',
                    color: 'rgba(245,234,208,0.7)',
                    letterSpacing: '0.05em',
                  }}
                >
                  Currently taking new projects
                </span>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to top, var(--dark), transparent)' }}
      />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 right-8 md:right-12 flex flex-col items-center gap-2"
      >
        <span
          style={{
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            color: 'rgba(245,234,208,0.3)',
            textTransform: 'uppercase',
            writingMode: 'vertical-rl',
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: '1px',
            height: '50px',
            background: 'linear-gradient(to bottom, rgba(34,197,94,0.6), transparent)',
          }}
        />
      </motion.div>
    </section>
  )
}
