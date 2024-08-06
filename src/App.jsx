import React from 'react'
import './App.css'
import HeroSection from './components/homepage/HeroSection'
import Work from './components/homepage/Work'
import About from './components/homepage/About'
import Testimonials from './components/homepage/Testimonials'
import Footer from './components/layout-components/Footer'
import Navbar from './components/layout-components/Navbar'
import Experience from './components/homepage/Experience'

const App = () => {
  return (
    <>

    <Navbar/>
    <HeroSection />
    <Work/>
    <About/>
    <Experience/>
    <Testimonials/>
    <Footer/>

    </>
  )
}

export default App
