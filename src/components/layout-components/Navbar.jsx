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

  return (
    <nav className="navbar flex justify-between items-center py-4 px-16 w-full bg-black fixed">
      <Link to="/">
        <img src={logo} alt="Company Logo" />
      </Link>
      <div className="flex py-2 px-0 gap-x-8 items-center">
        <a
          className="text-sm font-medium text-text-color hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#BC3CD8] hover:to-[#C54B8C]"
          href="document/Resume.docx"
          download
        >
          CV
        </a>
        <a
          className="text-sm font-medium text-text-color hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#BC3CD8] hover:to-[#C54B8C]"
          href="#work"
        >
          work
        </a>
        <a
          className="text-sm font-medium text-text-color hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#BC3CD8] hover:to-[#C54B8C]"
          href="#about"
        >
          about
        </a>
        <a
          href="#footer"
          className={`rounded-lg px-4 py-2 glass-btn text-sm font-medium text-text-color ${isHovered ? 'glass-gradient px-7' : 'glass-btn px-4'}`}
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