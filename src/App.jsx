import React from 'react'
import './App.css'
import HeroSection from './components/homepage/HeroSection'
import Work from './components/homepage/Work'
import About from './components/homepage/About'
import Testimonials from './components/homepage/Testimonials'
import Footer from './components/layout-components/Footer'

const App = () => {
  return (
    <>
    <HeroSection />
    <Work/>
    <About/>
    <Testimonials/>
    <Footer/>

    </>
  )
}

export default App
