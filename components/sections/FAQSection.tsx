'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const faqs = [
  {
    q: 'How long does it take to build a website or app?',
    a: 'Timelines depend on scope. A focused landing page typically takes 1–2 weeks. A full marketing site with custom animations: 3–5 weeks. A complex web app or mobile product: 8–16 weeks. We always give you a precise timeline after our discovery call.',
  },
  {
    q: 'What does the process look like from start to finish?',
    a: "We start with a discovery call to understand your goals and users. Then we move into design (wireframes → high-fidelity mockups), development sprints with weekly check-ins, thorough QA and testing, and finally a smooth launch. You're involved every step of the way.",
  },
  {
    q: 'Do you work with early-stage startups or only established companies?',
    a: "Both. We love working with founders who have a bold vision and need a technical partner to bring it to life. We also help established brands scale, redesign, or modernise their digital products. The common thread is ambition.",
  },
  {
    q: 'What technologies do you use?',
    a: 'Our primary stack is Next.js, React, TypeScript, Node.js, and PostgreSQL — chosen for performance, scalability, and long-term maintainability. For mobile we use React Native. For 3D and immersive web we use Three.js and React Three Fiber. We adapt to your project requirements.',
  },
  {
    q: 'Will I own the code and design files after the project?',
    a: 'Yes, completely. Upon final payment, all code, design files, assets, and intellectual property transfer fully to you. No lock-in, no ongoing fees beyond any optional retainer.',
  },
  {
    q: 'Do you offer ongoing support after launch?',
    a: 'Absolutely. We offer flexible retainer plans for maintenance, performance monitoring, feature additions, and ongoing development. Many of our clients work with us on a continuous basis long after launch.',
  },
]

const questionParticles = [
  { left: '8%', top: '24%', size: 4, delay: 0.1, duration: 4.8, dx: 16, dy: -18 },
  { left: '14%', top: '40%', size: 3, delay: 0.7, duration: 5.2, dx: -10, dy: -16 },
  { left: '19%', top: '60%', size: 5, delay: 0.4, duration: 4.5, dx: 12, dy: -24 },
  { left: '28%', top: '30%', size: 3, delay: 1.1, duration: 5.6, dx: 14, dy: -14 },
  { left: '33%', top: '52%', size: 4, delay: 0.3, duration: 4.9, dx: -16, dy: -20 },
  { left: '69%', top: '22%', size: 3, delay: 0.8, duration: 5.4, dx: 14, dy: -18 },
  { left: '74%', top: '36%', size: 5, delay: 0.2, duration: 4.7, dx: -12, dy: -22 },
  { left: '79%', top: '54%', size: 3, delay: 1.3, duration: 5.8, dx: 18, dy: -16 },
  { left: '85%', top: '66%', size: 4, delay: 0.5, duration: 5.1, dx: -14, dy: -18 },
  { left: '91%', top: '44%', size: 3, delay: 0.9, duration: 4.6, dx: 11, dy: -12 },
  { left: '24%', top: '74%', size: 2, delay: 1.5, duration: 6.2, dx: 10, dy: -10 },
  { left: '63%', top: '72%', size: 2, delay: 1.2, duration: 5.9, dx: -8, dy: -14 },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section
      ref={ref}
      className="relative py-28 overflow-hidden px-6 md:px-12 lg:px-20"
      style={{ background: 'var(--dark-3)' }}
    >
      {/* Particle question marks */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, delay: 0.1 }}
          style={{
            position: 'absolute',
            left: '3%',
            top: '8%',
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(11rem, 22vw, 22rem)',
            fontWeight: 800,
            lineHeight: 0.9,
            color: 'rgba(62,199,110,0.08)',
            textShadow: '0 0 28px rgba(34,197,94,0.16), 0 0 80px rgba(34,197,94,0.06)',
            filter: 'blur(0.2px)',
          }}
        >
          ?
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, delay: 0.2 }}
          style={{
            position: 'absolute',
            right: '4%',
            bottom: '6%',
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(11rem, 24vw, 24rem)',
            fontWeight: 800,
            lineHeight: 0.9,
            color: 'rgba(62,199,110,0.07)',
            textShadow: '0 0 34px rgba(34,197,94,0.16), 0 0 90px rgba(34,197,94,0.06)',
            filter: 'blur(0.25px)',
          }}
        >
          ?
        </motion.div>

        {questionParticles.map((dot, i) => (
          <motion.span
            key={i}
            style={{
              position: 'absolute',
              left: dot.left,
              top: dot.top,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              borderRadius: '999px',
              background: 'rgba(62, 199, 110, 0.65)',
              boxShadow: '0 0 10px rgba(34,197,94,0.5), 0 0 22px rgba(34,197,94,0.2)',
            }}
            animate={{
              x: [0, dot.dx, 0],
              y: [0, dot.dy, 0],
              opacity: [0.2, 0.9, 0.2],
              scale: [0.9, 1.2, 0.9],
            }}
            transition={{
              duration: dot.duration,
              delay: dot.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Background text */}
      <div
        className="section-bg-text"
        style={{ top: '50%', right: '-2%', transform: 'translateY(-50%)' }}
        aria-hidden
      >
        FAQ
      </div>

      {/* Glow */}
      <div
        className="absolute top-1/2 right-0 pointer-events-none"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(26,107,60,0.07), transparent)',
          filter: 'blur(80px)',
          transform: 'translateY(-50%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left: Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                color: 'var(--green-bright)',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '1.25rem',
              }}
            >
              Got questions?
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4.5vw, 3.8rem)',
                fontWeight: 800,
                color: 'var(--cream)',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: '1.5rem',
              }}
            >
              Frequently<br />
              <em style={{ fontStyle: 'italic', color: 'var(--green-bright)' }}>
                Asked
              </em>
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                color: 'rgba(245,234,208,0.70)',
                lineHeight: 1.8,
                maxWidth: '38ch',
                marginBottom: '2.5rem',
              }}
            >
              Everything you need to know before we start building together.
              Don't see your question? Just reach out.
            </p>

            <a href="/contact">
              <button className="btn-outline flex items-center gap-2 text-sm">
                Ask us directly
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </a>
          </motion.div>

          {/* Right: Accordion */}
          <div className="flex flex-col">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.08 * i + 0.1 }}
                className="border-b"
                style={{ borderColor: 'rgba(34,197,94,0.1)' }}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full text-left py-6 flex items-start justify-between gap-4"
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
                      fontWeight: 700,
                      color: openIndex === i ? 'var(--cream-light)' : 'rgba(245,234,208,0.75)',
                      lineHeight: 1.4,
                      transition: 'color 0.3s',
                    }}
                  >
                    {faq.q}
                  </span>

                  {/* Toggle icon */}
                  <div
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      background: openIndex === i ? 'var(--green)' : 'rgba(34,197,94,0.1)',
                      border: `1px solid ${openIndex === i ? 'var(--green)' : 'rgba(34,197,94,0.2)'}`,
                      transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" style={{ color: openIndex === i ? 'var(--cream)' : 'var(--green-bright)' }} />
                    </svg>
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.875rem',
                          color: 'rgba(245,234,208,0.75)',
                          lineHeight: 1.8,
                          paddingBottom: '1.5rem',
                          paddingRight: '2rem',
                        }}
                      >
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
