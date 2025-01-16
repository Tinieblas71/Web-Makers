import React from 'react'

import { BlurBackground, Navbar, Hero, Projects, About, Testimonials, Contact } from './components/index' 

function App() {
  return (
    <>
      <BlurBackground/>
      <Navbar/>
      <main className='overflow-hidden max-w-7xl mx-auto relative z-10'> 
        <Navbar/>
        <Hero/>
        <Projects/>
        <About/>
        <Testimonials/>
        <Contact/>
      </main>
    </>
  )
}

export default App