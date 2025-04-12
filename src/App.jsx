import { useState } from 'react'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <Hero />
      <div className="content-wrapper">
        <Portfolio />
        <About />
        <Contact />
      </div>
    </div>
  )
}

export default App