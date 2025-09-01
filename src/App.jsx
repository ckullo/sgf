import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Milestones from './components/Milestones'
import Products from './components/Products'
import Facility from './components/Facility'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Milestones />
        <Products />
        <Facility />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App