import React from 'react'
import logo from '/images/logo.svg'

const Navbar = () => {
  return (
    <nav className='navbar flex justify-between items-center py-4 px-16 w-full bg-black fixed '>
      <img src={logo} alt="" />
      <div className='flex py-2 px-0 gap-x-8 items-center'>
        <a className='text-sm font-medium text-text-color' href="#portfolio">CV</a>
        <a className='text-sm font-medium text-text-color'  href="#work">work</a>
        <a className='text-sm font-medium text-text-color' href="#about">about</a>
        <button className='rounded-lg border border-1 px-4 py-2 glass-btn'>
          <a href="#contact" className='text-sm font-medium text-text-color'>contact me</a>
        </button>
      </div>
    </nav>
  )
}

export default Navbar