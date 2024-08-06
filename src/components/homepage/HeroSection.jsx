import React from 'react'
import Contact from './Contact'
import GlassBtn from './GlassBtn'

const HeroSection = () => {
  return (
    <div className='bg-black'>
          <div className='hero-section gap-y-6 grid h-fit pb-20 bg-black pt-40 w-fit mx-auto'>
              <section className='grid gap-4'>
                <div className='w-fit text-center'>
                  <h3 className='text-5xl font-normal text-blue-green font-Monoton'>unleashing creativity</h3>
                </div>
                <div className='grid gap-2 w-[1074px]'>
                  <h1 className='text-2xl font-medium text-[#B0B8C1]'>Hello! I’m Newman Ogbo</h1>
                  <h4 className='text-5xl font-medium text-white'>I am a  UI/UX and Graphic  Designer. I specialize in UI/UX, Branding and Logos.</h4>
                  <Contact/>
                </div>
              </section>
          </div>
    </div>

  )
}

export default HeroSection