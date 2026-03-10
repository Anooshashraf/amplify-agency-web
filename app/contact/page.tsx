import type { Metadata } from 'next'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import ContactContent from './ContactContent'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Amplify Agency. Let\'s build something remarkable together.',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ContactContent />
      <Footer />
    </>
  )
}
