import React from 'react'
import Contact from './Contact'
import GlassBtn from '../GlassBtn'

const HeroSection = () => {
  return (
    <div className='bg-black w-screen'>
          <div className='hero-section gap-y-6 grid h-fit pb-20 bg-black pt-40 w-fit mx-auto fix'>
              <section className='grid gap-4'>
                <div className=' text-left'>
                  <h3 className='text-5xl font-normal text-blue-green font-Monoton w-[398px] lg:w-fit'>unleashing creativity</h3>
                </div>
                <div className='grid gap-6 w-fit text-left'>
                  <h1 className='text-2xl font-medium text-[#B0B8C1]'>Hello! I’m Newman Ogbo</h1>
                  <h4 className='text-5xl font-medium text-white w-[78vw]'>I am a  UI/UX and Graphic  Designer. I specialize in UI/UX, Branding and Logos.</h4>
                  <Contact/>
                </div>
              </section>
          </div>
    </div>

  )
}

export default HeroSection