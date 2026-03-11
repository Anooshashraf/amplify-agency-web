'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const teamMembers = [
  {
    name: 'Alex Carter',
    title: 'Co-Founder & CEO',
    bio: 'Full-stack architect with 10+ years building scalable products for startups and Fortune 500s.',
    initials: 'AC',
  },
  {
    name: 'Sarah Mitchell',
    title: 'Head of Design',
    bio: 'Award-winning UI/UX designer who believes every pixel should serve a purpose.',
    initials: 'SM',
  },
  {
    name: 'James Okafor',
    title: 'Lead Developer',
    bio: 'React & Next.js specialist. Obsessed with performance, accessibility, and clean code.',
    initials: 'JO',
  },
]

export default function TeamSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section
      ref={ref}
      className="relative py-32 overflow-hidden px-6 md:px-12 lg:px-20"
      style={{ background: 'var(--dark-2)' }}
    >
      <div className="section-bg-text" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} aria-hidden>
        TEAM
      </div>
      <div className="absolute top-0 right-0 pointer-events-none" style={{
        width: '500px', height: '500px',
        background: 'radial-gradient(ellipse at top right, rgba(26,107,60,0.07), transparent 70%)',
      }} />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span style={{
              fontFamily: 'var(--font-body)', fontSize: '0.75rem',
              letterSpacing: '0.2em', color: 'var(--green-bright)',
              textTransform: 'uppercase' as const, display: 'block', marginBottom: '1rem',
            }}>The people behind the work</span>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontWeight: 800, color: 'var(--cream)',
              letterSpacing: '-0.03em', lineHeight: 1.1,
            }}>
              Meet the Team<br />Behind Amplify
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            style={{
              fontFamily: 'var(--font-body)', fontSize: '0.9rem',
              color: 'rgba(245,234,208,0.4)', maxWidth: '38ch', lineHeight: 1.7,
            }}
          >
            A tight-knit team of engineers, designers, and strategists who care deeply about craft and outcomes.
          </motion.p>
        </div>

        {/* Hero team photo */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl overflow-hidden mb-8"
          style={{ height: 'clamp(260px, 38vw, 460px)', border: '1px solid rgba(34,197,94,0.1)' }}
        >
          <Image
            src="/images/team_collaboration.png"
            alt="Amplify team celebrating a win together"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
            priority
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(2,10,6,0.88) 0%, rgba(2,10,6,0.15) 50%, transparent 100%)',
          }} />
          <div style={{ position: 'absolute', bottom: '2rem', left: '2rem' }}>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.3rem, 3.5vw, 2.2rem)',
              fontWeight: 800, color: 'var(--cream)',
              letterSpacing: '-0.03em', display: 'block',
            }}>Built together. Shipped with pride.</span>
            <span style={{
              fontFamily: 'var(--font-body)', fontSize: '0.82rem',
              color: 'rgba(245,234,208,0.45)', marginTop: '0.3rem', display: 'block',
            }}>Every project is a full-team effort from day one.</span>
          </div>
          <div style={{
            position: 'absolute', top: '1.5rem', right: '1.5rem',
            background: 'rgba(10,22,12,0.75)', backdropFilter: 'blur(12px)',
            border: '1px solid rgba(34,197,94,0.2)', borderRadius: '100px',
            padding: '0.45rem 1.1rem',
            display: 'flex', alignItems: 'center', gap: '0.5rem',
          }}>
            <span style={{
              width: '7px', height: '7px', borderRadius: '50%',
              background: 'var(--green-glow)', boxShadow: '0 0 8px var(--green-glow)',
              display: 'inline-block',
            }} />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--cream)', letterSpacing: '0.04em' }}>
              12+ Team Members
            </span>
          </div>
        </motion.div>

        {/* Meeting photo + team cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-2xl overflow-hidden"
            style={{ height: 'clamp(230px, 28vw, 360px)', border: '1px solid rgba(34,197,94,0.1)' }}
          >
            <Image
              src="/images/team_meeting.png"
              alt="Amplify strategy meeting"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(135deg, rgba(2,10,6,0.65) 0%, transparent 55%)',
            }} />
            <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem' }}>
              <span style={{
                fontFamily: 'var(--font-display)', fontSize: '1.05rem',
                fontWeight: 700, color: 'var(--cream)', display: 'block',
              }}>Strategy-first thinking.</span>
              <span style={{
                fontFamily: 'var(--font-body)', fontSize: '0.76rem',
                color: 'rgba(245,234,208,0.45)',
              }}>Every project starts with deep understanding.</span>
            </div>
          </motion.div>

          {/* Team member cards */}
          <div className="flex flex-col gap-3 justify-center">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.25 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card rounded-xl p-4 flex items-center gap-4"
                style={{ cursor: 'default', transition: 'border-color 0.3s ease' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(34,197,94,0.3)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(34,197,94,0.12)')}
              >
                <div style={{
                  width: '48px', height: '48px', flexShrink: 0,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--green-deep), var(--green-light))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 700,
                  color: 'var(--cream)', border: '2px solid rgba(34,197,94,0.2)',
                }}>
                  {member.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, color: 'var(--cream)', marginBottom: '0.1rem' }}>
                    {member.name}
                  </div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'var(--green-bright)', letterSpacing: '0.04em', marginBottom: '0.3rem' }}>
                    {member.title}
                  </div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.76rem', color: 'rgba(245,234,208,0.4)', lineHeight: 1.5 }}>
                    {member.bio}
                  </div>
                </div>
                <div
                  style={{
                    width: '30px', height: '30px', flexShrink: 0,
                    border: '1px solid rgba(245,234,208,0.1)', borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(245,234,208,0.3)', transition: 'all 0.3s ease', cursor: 'pointer',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.borderColor = 'var(--green-bright)'
                    el.style.color = 'var(--green-bright)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.borderColor = 'rgba(245,234,208,0.1)'
                    el.style.color = 'rgba(245,234,208,0.3)'
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
