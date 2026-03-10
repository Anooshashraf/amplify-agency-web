/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#020a06',
        'dark-2': '#060f09',
        'dark-3': '#0a160c',
        'dark-4': '#0f1f12',
        green: {
          DEFAULT: '#1a6b3c',
          light: '#2d9b5a',
          bright: '#3ec76e',
          glow: '#22c55e',
          deep: '#0d4a28',
          muted: '#14532d',
        },
        cream: {
          DEFAULT: '#f5ead0',
          light: '#fdf6e8',
          dark: '#d4c4a0',
          muted: '#a89878',
        },
        white: {
          DEFAULT: '#ffffff',
          muted: '#a0b0a8',
          dim: '#506058',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 35s linear infinite',
        'counter': 'counter 2s ease forwards',
        'preloader-fill': 'preloaderFill 2.5s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(34,197,94,0.15)' },
          '50%': { boxShadow: '0 0 60px rgba(34,197,94,0.35)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        preloaderFill: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
}
