import React from 'react'
import Contact from './Contact'
import GlassBtn from './GlassBtn'
import Navbar from '../layout-components/Navbar'

const HeroSection = () => {
  return (
    <div className='hero-section gap-y-6 grid bg-no-repeat h-fit pb-20'>
        <Navbar/>
        <section className='gap-x-4'>
          <div className='mx-auto w-fit text-center'>
            <h3 className='text-5xl font-normal text-blue-green font-Monoton'>unleashing creativity</h3>
          </div>
          <div className='grid w-fit gap-3 mx-auto'>
            <div className='py-0 px-16'>
              <h4 className='text-white text-2xl font-semibold'>recent projects</h4>
            </div>
            <section className='flex w-fit align items-center'>
              <button className='glass-btn rounded-full p-2 h-fit'>
                <img src="icons/arrow-left.svg " alt="" />
              </button>
              <div className='flex gap-4 items-center'>
                <img className='cursor-pointer w-[415px] h-[300] rounded-sm' src="images/Card1.png" alt="" />
                <img className='cursor-pointer w-[265px] h-[190] rounded-sm opacity-30' src="images/Card2.png" alt="" />
                <img className='cursor-pointer w-[265px] h-[190] rounded-sm opacity-30' src="images/Card3.png" alt="" />
                <img className='cursor-pointer w-[265px] h-[190] rounded-sm opacity-30' src="images/Card4.png" alt="" />
              </div>
              <button className='glass-btn rounded-full p-2 h-fit'>
                <img src="icons/arrow-right.svg" alt="" />
              </button>
            </section>
            <div className='mx-auto'>
              <GlassBtn text='view all my work' />
            </div>
          </div>
          <button></button>
        </section>
        <div className='grid gap-y-8 w-full items-center'>
          <div className='text-center'>
              <h2 className='text-white text-2xl font-medium text-center'>My name is <span className='text-white text-[36px] font-bold'>Newman Ogbo.</span> I am a versatile <span className='text-white text-[36px] font-bold'>UI/UX</span> and <span className='text-white text-[36px] font-bold'>Graphic Designer.</span></h2>
              <h2 className='text-white text-2xl font-medium'>If you are looking for a designer that will elevate your business then look no further.</h2>
          </div>
        </div>
        <Contact/>
    </div>

  )
}

export default HeroSection