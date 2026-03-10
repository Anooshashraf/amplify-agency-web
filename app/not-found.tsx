import Link from 'next/link'

export default function NotFound() {
  return (
    <main
      style={{
        background: 'var(--dark)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(6rem, 20vw, 16rem)',
          fontWeight: 900,
          color: 'transparent',
          WebkitTextStroke: '1px rgba(245,234,208,0.08)',
          lineHeight: 1,
          userSelect: 'none',
        }}
        aria-hidden
      >
        404
      </div>

      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          fontWeight: 800,
          color: 'var(--cream)',
          letterSpacing: '-0.03em',
          marginTop: '-4rem',
        }}
      >
        Page Not Found
      </h1>

      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.95rem',
          color: 'rgba(245,234,208,0.4)',
          maxWidth: '36ch',
          lineHeight: 1.7,
        }}
      >
        The page you're looking for doesn't exist or has been moved.
      </p>

      <Link href="/">
        <button className="btn-primary">
          <span>Back to Home</span>
        </button>
      </Link>
    </main>
  )
}
