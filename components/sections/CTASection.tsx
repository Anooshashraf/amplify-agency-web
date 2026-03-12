'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const ParticleGlobe = dynamic(() => import('../three/ParticleGlobe'), {
  ssr: false,
  loading: () => null,
})

export default function CTASection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section
      ref={ref}
      className="relative py-32 overflow-hidden px-6 md:px-12 lg:px-20"
      style={{ background: 'var(--dark-4)' }}
    >
      {/* 3D globe background */}
      <ParticleGlobe className="absolute inset-0 opacity-45" particleCount={2200} />

      {/* Background text */}
      <div
        className="section-bg-text"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: 'clamp(6rem, 20vw, 20rem)',
          opacity: 1,
        }}
        aria-hidden
      >
        LET'S GO
      </div>

      {/* Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: '80%',
          height: '300px',
          background: 'radial-gradient(ellipse at center, rgba(26,107,60,0.12), transparent)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                color: 'var(--green-bright)',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
              }}
            >
              Ready to build?
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4.4vw, 4.2rem)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                lineHeight: 1.0,
                color: 'var(--cream)',
                marginBottom: '2rem',
              }}
            >
              Let's Create<br />
              <em
                style={{
                  fontStyle: 'italic',
                  color: 'var(--green-bright)',
                  textShadow: '0 0 40px rgba(62,199,110,0.25)',
                }}
              >
                Something
              </em>
              <br />That Matters
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                color: 'rgba(245,234,208,0.70)',
                lineHeight: 1.7,
                maxWidth: '44ch',
                marginBottom: '2.5rem',
              }}
            >
              We're here for the bold, the visionary, and the ambitious.
              Tell us what you're building and let's make it remarkable.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/contact">
                <button className="btn-primary">
                  <span>Start a Project</span>
                </button>
              </Link>
              <Link href="/work">
                <button className="btn-outline flex items-center gap-2">
                  Explore Our Work
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Right: contact info cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-4"
          >
            {[
              { label: 'Services', items: ['Web Development', 'Mobile Apps', 'UI/UX Design'] },
              { label: 'Instagram', items: ['@amplify.com.pk'] },
              { label: 'Facebook', items: ['@amplify.com.pk'] },
            ].map((col) => (
              <div
                key={col.label}
                className="glass-card rounded-xl p-5"
              >
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.15em',
                    color: 'rgba(245,234,208,0.3)',
                    textTransform: 'uppercase',
                    marginBottom: '0.75rem',
                  }}
                >
                  {col.label}
                </div>
                {col.items.map((item) => (
                  <div
                    key={item}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem',
                      color: 'rgba(245,234,208,0.6)',
                      lineHeight: 2,
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
