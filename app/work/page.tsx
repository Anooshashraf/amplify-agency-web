import type { Metadata } from 'next'
import WorkPageContent from '@/app/work/WorkPageContent'

export const metadata: Metadata = {
  title: 'Our Work',
  description: 'Selected projects by Amplify — digital products built to perform across automotive, restaurant, tech, and e-commerce industries.',
}

export default function WorkPage() {
  return <WorkPageContent />
}
