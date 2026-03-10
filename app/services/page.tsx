import type { Metadata } from 'next'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import ServicesPageContent from './ServicesPageContent'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore Amplify\'s full suite of web development, mobile app, UI/UX design, and AI integration services.',
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <ServicesPageContent />
      <Footer />
    </>
  )
}
