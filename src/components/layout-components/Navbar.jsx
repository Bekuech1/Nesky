import React, { useState } from 'react';
import logo from '/images/logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [activeLink, setActiveLink] = useState(-1);

  const handleMouseIn = () => {
    setActiveLink(id);
  };

  const handleMouseOut = () => {
    setActiveLink(null);
  };



  return (
    <nav className="navbar flex justify-between items-center py-4 px-16 w-full bg-black fixed">
      <Link to="/">
        <img src={logo} alt="Company Logo" className='hover:animate-bounce'/>
      </Link>
      <div className="flex py-2 px-0 gap-x-8 items-center"
          onMouseEnter={() => handleMouseIn(index)}
          onMouseLeave={handleMouseOut}
      >
        <a
          className="text-sm font-medium text-text-color hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#BC3CD8] hover:to-[#C54B8C]"
          href="document/Resume.docx"
          download
          id='1'
        >
          CV
        </a>
        <a
          className="text-sm font-medium text-text-color hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#BC3CD8] hover:to-[#C54B8C]"
          href="#work"
          id='2'
        >
          work
        </a>
        <a
          className="text-sm font-medium text-text-color hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#BC3CD8] hover:to-[#C54B8C]"
          href="#about"
          id='3'
        >
          about
        </a>
        <a
          href="#footer"
          className={`rounded-lg px-4 py-2 glass-btn text-sm font-medium text-text-color ${isHovered ? 'glass-gradient px-7 animate-element' : 'glass-btn px-4'}  transition-all duration-300 ease-in `} 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
          contact me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;