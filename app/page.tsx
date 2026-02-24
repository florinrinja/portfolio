'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import WorksOne from '@/components/WorksOne'
import WorksTwo from '@/components/WorksTwo'
import WorksThree from '@/components/WorksThree'

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
      <WorksOne />
      <WorksTwo />
      <WorksThree />
    </>
  )
}
