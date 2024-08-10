import React, { useState } from 'react'
import logo from '/images/logo.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  

  return (
    <nav className='navbar flex justify-between items-center py-4 px-16 w-full bg-black fixed '>
      <Link to='/'>
          <img src={logo} />
      </Link>
      <div className='flex py-2 px-0 gap-x-8 items-center'>
        <a className='text-sm font-medium text-text-color' href="document/Resume.docx" download>CV</a>
        <a className='text-sm font-medium text-text-color'  href="#work">work</a>
        <a className='text-sm font-medium text-text-color' href="#about">about</a>
        <button className={`rounded-lg px-4 py-2 glass-btn 
            ${isHovered ? 'glass-gradient px-7' : 'glass-btn px-4'}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
          <a href="#footer" className='text-sm font-medium text-text-color'>contact me</a>
        </button>
      </div>
    </nav>
  )
}

export default Navbar