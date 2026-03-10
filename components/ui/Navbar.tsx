'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'Company', href: '/#about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex items-center justify-between transition-all duration-500 ${
          scrolled ? 'nav-blur' : ''
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <AmplifyLogo />
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.1rem',
              fontWeight: 700,
              color: 'var(--cream)',
              letterSpacing: '-0.01em',
            }}
          >
            Amplify
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                color: 'rgba(245,234,208,0.6)',
                transition: 'color 0.3s',
                letterSpacing: '0.02em',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--cream)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,234,208,0.6)')}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/contact">
            <button className="btn-primary text-xs py-3 px-6">
              <span>Start Your Project</span>
            </button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block h-px w-6 transition-all duration-300"
            style={{
              background: 'var(--cream)',
              transform: mobileOpen ? 'rotate(45deg) translateY(4px)' : '',
            }}
          />
          <span
            className="block h-px transition-all duration-300"
            style={{
              background: 'var(--cream)',
              width: mobileOpen ? '1.5rem' : '1rem',
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <span
            className="block h-px w-6 transition-all duration-300"
            style={{
              background: 'var(--cream)',
              transform: mobileOpen ? 'rotate(-45deg) translateY(-4px)' : '',
            }}
          />
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2rem, 8vw, 3.5rem)',
                    fontWeight: 700,
                    color: 'var(--cream)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <Link href="/contact" onClick={() => setMobileOpen(false)}>
              <button className="btn-primary mt-4">
                <span>Start Your Project</span>
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function AmplifyLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 100 100" fill="none">
      <path
        d="M50 8 L85 30 L85 70 L50 92 L15 70 L15 30 Z"
        stroke="#22c55e"
        strokeWidth="3"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M50 20 L75 35 L75 65 L50 80 L25 65 L25 35 Z"
        stroke="#22c55e"
        strokeWidth="2"
        fill="none"
        opacity="0.35"
      />
      <path
        d="M35 58 L50 30 L65 58"
        stroke="#22c55e"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M38 52 L62 52"
        stroke="#22c55e"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}
