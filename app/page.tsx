'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Navbar from '@/components/ui/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import MarqueeSection from '@/components/sections/MarqueeSection'
import ServicesSection from '@/components/sections/ServicesSection'
import TechStackSection from '@/components/sections/TechStackSection'
import WorkSection from '../components/sections/WorkSection'
import AboutSection from '@/components/sections/AboutSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import FAQSection from '@/components/sections/FAQSection'
import CTASection from '@/components/sections/CTASection'
import Footer from '@/components/ui/Footer'
import SmoothScrollProvider from '@/components/ui/SmoothScrollProvider'

const Preloader = dynamic(() => import('@/components/ui/Preloader'), { ssr: false })
const CustomCursor = dynamic(() => import('@/components/ui/CustomCursor'), { ssr: false })

export default function HomePage() {
  const [loaded, setLoaded] = useState(false)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const seen = sessionStorage.getItem('preloader-seen')
    if (seen) {
      setLoaded(true)
      setShowContent(true)
    } else {
      setLoaded(false)
    }
  }, [])

  const handlePreloaderComplete = () => {
    sessionStorage.setItem('preloader-seen', '1')
    setLoaded(true)
    setTimeout(() => setShowContent(true), 100)
  }

  return (
    <SmoothScrollProvider>
      <CustomCursor />
      <div className="noise" aria-hidden />

      {!loaded && (
        <Preloader onComplete={handlePreloaderComplete} />
      )}

      <main
        style={{
          opacity: showContent || loaded ? 1 : 0,
          transition: 'opacity 0.5s ease',
        }}
      >
        <Navbar />
        <HeroSection />
        <MarqueeSection />
        <ServicesSection />
        <TechStackSection />
        {/* <WorkSection /> */}
        <AboutSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </main>
    </SmoothScrollProvider>
  )
}
