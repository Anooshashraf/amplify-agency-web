# Amplify Agency — Next.js Website

Dark, premium Web & App Development agency site inspired by antimatterai.com.
Built with Next.js 14, Three.js particle globe, Framer Motion animations, and a deep green/cream color scheme.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Copy env file
cp .env.example .env.local

# 3. Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🏗️ Project Structure

```
amplify-agency/
├── app/
│   ├── layout.tsx          # Root layout, fonts, global SEO metadata
│   ├── page.tsx            # Homepage (preloader + all sections)
│   ├── robots.ts           # SEO robots.txt
│   ├── sitemap.ts          # SEO sitemap
│   ├── not-found.tsx       # 404 page
│   ├── services/
│   │   ├── page.tsx        # Services page (SSR + metadata)
│   │   └── ServicesPageContent.tsx
│   ├── contact/
│   │   ├── page.tsx        # Contact page (SSR + metadata)
│   │   └── ContactContent.tsx
│   └── api/
│       └── contact/
│           └── route.ts    # Contact form API endpoint
├── components/
│   ├── three/
│   │   ├── ParticleGlobe.tsx   # 3D particle sphere (Three.js / R3F)
│   │   └── DotWorldMap.tsx     # Dot-map world graphic
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── CTASection.tsx
│   └── ui/
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       ├── Preloader.tsx
│       ├── CustomCursor.tsx
│       └── SmoothScrollProvider.tsx
├── styles/
│   └── globals.css         # All CSS variables, utilities, animations
├── public/
│   └── (add your images, logo, og-image.jpg, favicon.ico here)
└── .env.example
```

---

## 🎨 Color System

| Token | Value | Usage |
|---|---|---|
| `--dark` | `#020a06` | Main background |
| `--dark-2` | `#060f09` | Section alternation |
| `--dark-3` | `#0a160c` | Card backgrounds |
| `--dark-4` | `#0f1f12` | CTA section |
| `--green` | `#1a6b3c` | Primary brand green |
| `--green-bright` | `#3ec76e` | Accents, highlights |
| `--green-glow` | `#22c55e` | Particles, glows |
| `--cream` | `#f5ead0` | Primary text |
| `--cream-light` | `#fdf6e8` | Headlines |
| `--cream-dark` | `#d4c4a0` | Secondary text |

---

## 📦 Key Dependencies

| Package | Purpose |
|---|---|
| `next` 14 | Framework, SSR, routing |
| `@react-three/fiber` | Three.js React renderer |
| `@react-three/drei` | Three.js helpers |
| `three` | 3D particle globe |
| `framer-motion` | Page/section animations |
| `lenis` | Smooth scroll |
| `react-hook-form` | Contact form |
| `react-intersection-observer` | Scroll-triggered reveals |

---

## 📧 Contact Form Setup

The form POSTs to `/api/contact`. By default it logs to console.

**To enable email sending**, edit `app/api/contact/route.ts` and uncomment the Nodemailer block, then add to `.env.local`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your@gmail.com
SMTP_PASS=your-app-password
CONTACT_EMAIL=hello@amplifyagency.com
```

---

## 🌐 Deployment

### Vercel (recommended)
```bash
npm i -g vercel
vercel --prod
```

### Self-hosted
```bash
npm run build
npm start
```

### Docker
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 🔍 SEO Features

- ✅ Dynamic `<title>` with template
- ✅ Full Open Graph + Twitter Card metadata
- ✅ `robots.ts` — auto-generates `/robots.txt`
- ✅ `sitemap.ts` — auto-generates `/sitemap.xml`
- ✅ Semantic HTML, proper heading hierarchy
- ✅ `next/font` for zero-CLS font loading
- ✅ Image optimisation via `next/image`
- ✅ `compress: true` in Next.js config
- ✅ Viewport meta tag

---

## 🖼️ Adding Your Logo & Images

1. Place your logo PNG at `public/logo.png`
2. Place OG image at `public/og-image.jpg` (1200×630px)
3. Place favicon at `public/favicon.ico`
4. Update `Navbar.tsx` to use `<Image src="/logo.png" ... />` instead of the SVG

---

## 📱 Pages

| Route | Description |
|---|---|
| `/` | Homepage — preloader, hero, services, about, testimonials, CTA |
| `/services` | Full services page with expandable cards |
| `/contact` | Contact form with API route |
| `*` | 404 not-found page |
