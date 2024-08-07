import React from 'react'

import Navbar from '../components/layout-components/Navbar'
import HeroSection from '../components/homepage/HeroSection'
import Work from '../components/homepage/Work'
import About from '../components/homepage/About'
import Experience from '../components/homepage/Experience'
import Testimonials from '../components/homepage/Testimonials'
import Footer from '../components/layout-components/Footer'

const Home = () => {
  return (
    <>

    <HeroSection/>
    <Work/>
    <About/>  
    <Experience/>
    <Testimonials/>
    
    </>
  )
}

export default Home