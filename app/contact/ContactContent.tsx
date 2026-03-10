'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'

type FormData = {
  name: string
  email: string
  company: string
  budget: string
  message: string
}

const budgets = [
  'Under $5k',
  '$5k – $15k',
  '$15k – $50k',
  '$50k+',
]

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setSubmitted(true)
        reset()
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main style={{ background: 'var(--dark)', minHeight: '100vh' }}>
      <section className="relative pt-40 pb-32 px-6 md:px-12 lg:px-20 overflow-hidden">
        {/* BG text */}
        <div
          className="section-bg-text"
          style={{ top: '20%', left: '-5%' }}
          aria-hidden
        >
          CONTACT
        </div>

        {/* Glow */}
        <div
          className="absolute top-1/3 right-0 pointer-events-none"
          style={{
            width: '500px',
            height: '500px',
            background: 'radial-gradient(ellipse at center, rgba(26,107,60,0.08), transparent)',
            filter: 'blur(80px)',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left: heading */}
            <div className="lg:pt-8">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.2em',
                  color: 'var(--green-bright)',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '1.5rem',
                }}
              >
                Let's talk
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
                  fontWeight: 800,
                  color: 'var(--cream)',
                  letterSpacing: '-0.04em',
                  lineHeight: 1.0,
                  marginBottom: '2rem',
                }}
              >
                Start Your<br />
                <em style={{ fontStyle: 'italic', color: 'var(--green-bright)' }}>Project</em>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  color: 'rgba(245,234,208,0.45)',
                  lineHeight: 1.8,
                  marginBottom: '3rem',
                  maxWidth: '40ch',
                }}
              >
                Tell us about your project and we'll get back to you within 24
                hours with ideas, questions, and a clear path forward.
              </motion.p>

              {/* Contact details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-4"
              >
                {[
                  { label: 'Email', value: 'hello@amplifyagency.com' },
                  { label: 'Response time', value: 'Within 24 hours' },
                  { label: 'Available', value: '24/7 Support' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <span
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.75rem',
                        letterSpacing: '0.1em',
                        color: 'rgba(245,234,208,0.25)',
                        textTransform: 'uppercase',
                        width: '120px',
                        flexShrink: 0,
                      }}
                    >
                      {item.label}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.875rem',
                        color: 'rgba(245,234,208,0.6)',
                      }}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {submitted ? (
                <div
                  className="glass-card rounded-2xl p-12 flex flex-col items-center justify-center text-center"
                  style={{ minHeight: '500px' }}
                >
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, var(--green), var(--green-light))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem',
                      boxShadow: '0 0 40px rgba(34,197,94,0.3)',
                    }}
                  >
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M5 14l7 7 11-11" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: 'var(--cream)',
                      marginBottom: '0.75rem',
                    }}
                  >
                    Message Sent!
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(245,234,208,0.5)', fontSize: '0.9rem' }}>
                    We'll get back to you within 24 hours. Talk soon!
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="glass-card rounded-2xl p-8 space-y-5"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.7rem',
                          letterSpacing: '0.1em',
                          color: 'rgba(245,234,208,0.35)',
                          textTransform: 'uppercase',
                          display: 'block',
                          marginBottom: '0.5rem',
                        }}
                      >
                        Full Name *
                      </label>
                      <input
                        {...register('name', { required: true })}
                        placeholder="John Doe"
                        className="input-field"
                        style={{ borderColor: errors.name ? 'rgba(239,68,68,0.5)' : undefined }}
                      />
                    </div>
                    <div>
                      <label style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.1em', color: 'rgba(245,234,208,0.35)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                        Email *
                      </label>
                      <input
                        {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/ })}
                        type="email"
                        placeholder="john@company.com"
                        className="input-field"
                        style={{ borderColor: errors.email ? 'rgba(239,68,68,0.5)' : undefined }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.1em', color: 'rgba(245,234,208,0.35)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                      Company
                    </label>
                    <input
                      {...register('company')}
                      placeholder="Your company name"
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.1em', color: 'rgba(245,234,208,0.35)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                      Budget Range
                    </label>
                    <select
                      {...register('budget')}
                      className="input-field"
                      style={{ background: 'rgba(10,22,12,0.6)' }}
                    >
                      <option value="">Select budget range</option>
                      {budgets.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.1em', color: 'rgba(245,234,208,0.35)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                      Tell us about your project *
                    </label>
                    <textarea
                      {...register('message', { required: true })}
                      placeholder="Describe your project, goals, and timeline..."
                      rows={5}
                      className="input-field resize-none"
                      style={{ borderColor: errors.message ? 'rgba(239,68,68,0.5)' : undefined }}
                    />
                  </div>

                  {error && (
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'rgba(239,68,68,0.8)' }}>
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full py-4"
                    style={{ opacity: loading ? 0.7 : 1 }}
                  >
                    <span>
                      {loading ? 'Sending...' : 'Send Message →'}
                    </span>
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
