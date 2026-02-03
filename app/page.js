import AboutMe from '@/components/AboutMe'
import ContactMe from '@/components/ContactMe'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import TeckStack from '@/components/TeckStack'
import React from 'react'

const Home = () => {
  return (
    <div className=''>
      <Hero />
      <AboutMe />
      <TeckStack />
      <Projects />
      <ContactMe />
    </div>
  )
}

export default Home