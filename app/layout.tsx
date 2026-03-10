import type { Metadata, Viewport } from 'next'
import { Syne, DM_Sans, Space_Grotesk } from 'next/font/google'
import '../styles/globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-number',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://amplifyagency.com'),
  title: {
    default: 'Amplify — Web & App Development Agency',
    template: '%s | Amplify',
  },
  description:
    'Amplify builds high-performance web and mobile applications that transform businesses. Expert React, Next.js, and mobile development for ambitious brands.',
  keywords: [
    'web development agency',
    'app development',
    'Next.js development',
    'React development',
    'mobile app development',
    'UI/UX design',
    'digital agency',
  ],
  authors: [{ name: 'Amplify Agency' }],
  creator: 'Amplify Agency',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://amplifyagency.com',
    siteName: 'Amplify Agency',
    title: 'Amplify — Web & App Development Agency',
    description:
      'We build digital products that transform businesses. Expert web and app development.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Amplify Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amplify — Web & App Development Agency',
    description: 'We build digital products that transform businesses.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#020a06',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}