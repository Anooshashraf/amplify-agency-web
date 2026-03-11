'use client'

import Link from 'next/link'

const IconFacebook = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)
const IconLinkedin = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
)
const IconTwitter = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)
const IconWhatsapp = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.118.555 4.107 1.526 5.833L.057 23.25l5.565-1.457A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.65-.51-5.17-1.4l-.37-.22-3.302.866.88-3.217-.24-.38A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
)
const IconInstagram = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.118.555 4.107 1.526 5.833L.057 23.25l5.565-1.457A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.65-.51-5.17-1.4l-.37-.22-3.302.866.88-3.217-.24-.38A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
)
const IconMail = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
)
const IconPhone = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 14a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.9 3.3h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 10a16 16 0 0 0 5.91 5.91l1.02-1.02a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)
const IconPin = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
)
const IconClock = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
  </svg>
)

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span style={{
        fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700,
        letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--green-bright)',
        whiteSpace: 'nowrap',
      }}>
        {children}
      </span>
      <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(34,197,94,0.35), transparent)', minWidth: '20px' }} />
    </div>
  )
}

function SocialTile({ icon, label, handle, href, color }: {
  icon: React.ReactNode; label: string; handle: string; href: string; color: string
}) {
  return (
    <a
      href={href} target="_blank" rel="noopener noreferrer"
      className="flex flex-col items-center justify-center gap-1.5 rounded-xl p-2.5 transition-all duration-300 cursor-pointer"
      style={{
        background: 'rgba(255,255,255,0.025)',
        border: `1px solid ${color}22`,
        aspectRatio: '1', textDecoration: 'none',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement
        el.style.background = `${color}10`
        el.style.borderColor = `${color}50`
        el.style.transform = 'translateY(-3px)'
        el.style.boxShadow = `0 8px 30px ${color}18`
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement
        el.style.background = 'rgba(255,255,255,0.025)'
        el.style.borderColor = `${color}22`
        el.style.transform = 'translateY(0)'
        el.style.boxShadow = 'none'
      }}
    >
      <div className="flex items-center justify-center rounded-lg"
        style={{ width: '34px', height: '34px', background: `${color}18`, border: `1px solid ${color}30`, color }}>
        {icon}
      </div>
      <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 700, color: 'rgba(245,234,208,0.65)' }}>
        {label}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.55rem',
          color,
          letterSpacing: '0.03em',
          width: '100%',
          textAlign: 'center',
          lineHeight: 1.3,
          overflowWrap: 'anywhere',
          wordBreak: 'break-word',
        }}
      >
        {handle}
      </span>
    </a>
  )
}

function SmallSocialBtn({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      className="flex items-center justify-center w-7 h-7 rounded-lg transition-all duration-250"
      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(34,197,94,0.14)', color: 'rgba(245,234,208,0.45)', textDecoration: 'none' }}
      onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(34,197,94,0.12)'; el.style.borderColor = 'rgba(34,197,94,0.4)'; el.style.color = 'var(--green-bright)' }}
      onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(255,255,255,0.04)'; el.style.borderColor = 'rgba(34,197,94,0.14)'; el.style.color = 'rgba(245,234,208,0.45)' }}
    >
      {icon}
    </a>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', transition: 'all 0.2s' }}
      onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color = 'var(--green-bright)'; el.style.paddingLeft = '5px' }}
      onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color = 'rgba(245,234,208,0.4)'; el.style.paddingLeft = '0' }}
    >
      <span style={{ color: 'rgba(34,197,94,0.35)', fontSize: '0.55rem' }}>▸</span>
      <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'rgba(245,234,208,0.4)' }}>
        {children}
      </span>
    </Link>
  )
}

function ContactRow({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <div style={{ color: 'var(--green-bright)', flexShrink: 0, marginTop: '1px' }}>{icon}</div>
      <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'rgba(245,234,208,0.45)', lineHeight: 1.55 }}>
        {children}
      </span>
    </div>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: 'var(--dark)', borderTop: '1px solid rgba(34,197,94,0.08)' }}>

      {/* Top accent line */}
      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(34,197,94,0.45), transparent)' }} />

      {/* ──────────── TOP BLOCK ──────────── */}
      <div className="px-6 md:px-12 lg:px-20 pt-6 pb-5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">

          {/* 1 — About */}
          <div>
            <FooterHeading>About Us</FooterHeading>
            <Link href="/" className="flex items-center gap-3 mb-3" style={{ textDecoration: 'none' }}>
              <svg width="20" height="20" viewBox="0 0 100 100" fill="none">
                <path d="M50 8L85 30L85 70L50 92L15 70L15 30Z" stroke="#22c55e" strokeWidth="3" fill="none" opacity="0.5"/>
                <path d="M35 58L50 30L65 58" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M38 52L62 52" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" fill="none"/>
              </svg>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--cream)', fontSize: '0.95rem' }}>
                Amplify
              </span>
            </Link>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'rgba(245,234,208,0.4)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
              Established 2020, Amplify Agency is a professional web & app development studio. We build AI-driven digital products for startups and enterprises across 8+ countries.
            </p>
            <div className="flex items-center gap-2">
              <SmallSocialBtn icon={<IconFacebook />} href="https://facebook.com" />
              <SmallSocialBtn icon={<IconLinkedin />} href="https://linkedin.com" />
              <SmallSocialBtn icon={<IconTwitter />} href="https://twitter.com" />
              <SmallSocialBtn icon={<IconWhatsapp />} href="https://wa.me/923108486366" />
            </div>
          </div>

          <div>
            <FooterHeading>Social Feeds</FooterHeading>
            <div className="grid grid-cols-2 gap-2.5 mb-4">
              <SocialTile icon={<IconFacebook />}  label="Facebook"   handle="@amplify.com.pk" href="https://facebook.com"  color="#0c853f" />
              <SocialTile icon={<IconLinkedin />}  label="LinkedIn"   handle="Amplify" href="https://linkedin.com"  color="#0c853f" />
              <SocialTile icon={<IconInstagram />}   label="Instagram" handle="@amplify.com.pk" href="https://instagram.com"   color="#0c853f" />
            </div>
          </div>

          {/* 3 — Find Us */}
          <div>
            <FooterHeading>Find Us</FooterHeading>
            <div className="flex flex-col gap-3">
              <div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.55rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--green-bright)', marginBottom: '0.25rem' }}>Office</p>
                <ContactRow icon={<IconPin />}> Karachi, Pakistan.</ContactRow>
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.55rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--green-bright)', marginBottom: '0.25rem' }}>Phone</p>
                <ContactRow icon={<IconPhone />}>+92 310 848 6366</ContactRow>
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.55rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--green-bright)', marginBottom: '0.25rem' }}>Email</p>
                <ContactRow icon={<IconMail />}>anooshaashraf321@gmail.com</ContactRow>
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.55rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--green-bright)', marginBottom: '0.25rem' }}>Open Hours</p>
                <ContactRow icon={<IconClock />}>Mon – Sat: 9 am – 7 pm<br />Sunday: CLOSED</ContactRow>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div style={{ height: '1px', background: 'rgba(34,197,94,0.07)', margin: '0 3rem' }} />

      {/* ──────────── LINK COLUMNS ──────────── */}
      <div className="px-6 md:px-12 lg:px-20 py-5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          <div>
            <FooterHeading>Amplify</FooterHeading>
            <div className="flex flex-col gap-3">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/work">Our Work</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </div>
          </div>
          <div>
            <FooterHeading>Web Services</FooterHeading>
            <div className="flex flex-col gap-3">
              <FooterLink href="/services">UI/UX Design</FooterLink>
              <FooterLink href="/services">Web Development</FooterLink>
              <FooterLink href="/services">Mobile Apps</FooterLink>
              <FooterLink href="/services">SEO & Analytics</FooterLink>
            </div>
          </div>
          <div>
            <FooterHeading>Tech Stack</FooterHeading>
            <div className="flex flex-col gap-3">
              <FooterLink href="/services">Next.js & React</FooterLink>
              <FooterLink href="/services">Node.js & APIs</FooterLink>
              <FooterLink href="/services">PostgreSQL</FooterLink>
            </div>
          </div>
          <div>
            <FooterHeading>Industries</FooterHeading>
            <div className="flex flex-col gap-3">
              <FooterLink href="/work">Automotive</FooterLink>
              <FooterLink href="/work">E-Commerce</FooterLink>
              <FooterLink href="/work">Healthcare</FooterLink>
            </div>
          </div>
          <div>
            <FooterHeading>Support</FooterHeading>
            <div className="flex flex-col gap-3">
              <FooterLink href="/contact">Start a Project</FooterLink>
              <FooterLink href="/contact">Request a Demo</FooterLink>
              <FooterLink href="/contact">Partnerships</FooterLink>
              <FooterLink href="/contact">Privacy Policy</FooterLink>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: '1px', background: 'rgba(34,197,94,0.07)', margin: '0 3rem' }} />

      {/* ──────────── BOTTOM BAR ──────────── */}
      <div className="px-6 md:px-12 lg:px-20 py-3">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'rgba(245,234,208,0.2)', letterSpacing: '0.04em' }}>
            © {year} Amplify Agency. All rights reserved. Built with precision in Karachi, Pakistan.
          </p>
          <div className="flex items-center gap-5">
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map(item => (
              <a key={item} href="#"
                style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', color: 'rgba(245,234,208,0.2)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--green-bright)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,234,208,0.2)')}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  )
}
