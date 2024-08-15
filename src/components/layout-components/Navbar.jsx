import React, { useState } from 'react';
import logo from '/images/logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseIn = (id) => {
    setActiveLink(id);
  };

  const handleMouseOut = () => {
    setActiveLink(null);
  };

  const handleCloseMenu = (e) => {
    if (e.target.id === "menu-overlay") {
      setShowMenu(false);
    }
  };

  return (
    <nav className="navbar flex justify-between items-center py-4 px-16 w-full bg-black fixed z-[100]">
      <Link to="/">
        <img src={logo} alt="Company Logo" className="hover:animate-bounce" />
      </Link>
      <div className="flex py-2 px-0 gap-x-8 items-center">
        <a
          className="text-sm font-medium text-text-color hover:bg-clip-text hover:text-transparent hover:font-bold hover:bg-gradient-to-r hover:from-[#BC3CD8] hover:to-[#C54B8C]"
          href="document/Resume.docx"
          download
          id="1"
          onMouseEnter={() => handleMouseIn("1")}
          onMouseLeave={handleMouseOut}
        >
          CV
          {activeLink === "1" && (
            <div className="w-[9px] border-white mt-2 mx-auto border-[2.5px] rounded-full"></div>
          )}
        </a>
        <a
          className="text-sm font-medium text-text-color hover:bg-clip-text hover:text-transparent hover:font-bold hover:bg-gradient-to-r hover:from-[#BC3CD8] hover:to-[#df67a7]"
          href="#work"
          id="2"
          onMouseEnter={() => handleMouseIn("2")}
          onMouseLeave={handleMouseOut}
        >
          work
          {activeLink === "2" && (
            <div className="w-[9px] border-white mt-2 mx-auto border-[2.5px] rounded-full"></div>
          )}
        </a>
        <a
          className="text-sm font-medium text-text-color hover:bg-clip-text hover:text-transparent hover:font-bold hover:bg-gradient-to-r hover:from-[#BC3CD8] hover:to-[#C54B8C]"
          href="#about"
          id="3"
          onMouseEnter={() => handleMouseIn("3")}
          onMouseLeave={handleMouseOut}
        >
          about
          {activeLink === "3" && (
            <div className="w-[9px] border-white mt-2 mx-auto border-[2.5px] rounded-full"></div>
          )}
        </a>
        <a
          href="#footer"
          className={`rounded-lg px-4 py-2 glass-btn text-sm font-medium text-text-color ${
            isHovered ? "glass-gradient px-7 animate-element" : "glass-btn px-4"
          } transition-all duration-300 ease-in`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          contact me
        </a>
      </div>
      <div className="flex py-2 px-0 gap-x-8 items-center">
        <img 
          src="icons/menu.svg"
          onClick={() => setShowMenu((prev) => !prev)}
          className='cursor-pointer'
        />
      </div>


      {showMenu && (
        <div
          id=""
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={handleCloseMenu}
        >
          <div className="absolute right-0 top-0 h-full w-1/2 bg-black p-8 shadow-black">
            <button onClick={() => setShowMenu(false)}>
              <img src="icons/close.svg" alt="" />
            </button>
            <div className="flex flex-col gap-4 mt-4">
            <a
          className="m-auto text-sm font-medium text-text-color hover:bg-clip-text hover:text-transparent hover:font-bold hover:bg-gradient-to-r hover:from-[#BC3CD8] hover:to-[#C54B8C]"
          href="document/Resume.docx"
          download
          id="1"
          onMouseEnter={() => handleMouseIn("1")}
          onMouseLeave={handleMouseOut}
        >
          CV
          {activeLink === "1" && (
            <div className="w-[9px] border-white mt-2 mx-auto border-[2.5px] rounded-full"></div>
          )}
        </a>
        <a
          className="m-auto text-sm font-medium text-text-color hover:bg-clip-text hover:text-transparent hover:font-bold hover:bg-gradient-to-r hover:from-[#BC3CD8] hover:to-[#df67a7]"
          href="#work"
          id="2"
          onMouseEnter={() => handleMouseIn("2")}
          onMouseLeave={handleMouseOut}
        >
          work
          {activeLink === "2" && (
            <div className="w-[9px] border-white mt-2 mx-auto border-[2.5px] rounded-full"></div>
          )}
        </a>
        <a
          className="m-auto text-sm font-medium text-text-color hover:bg-clip-text hover:text-transparent hover:font-bold hover:bg-gradient-to-r hover:from-[#BC3CD8] hover:to-[#C54B8C]"
          href="#about"
          id="3"
          onMouseEnter={() => handleMouseIn("3")}
          onMouseLeave={handleMouseOut}
        >
          about
          {activeLink === "3" && (
            <div className="w-[9px] border-white mt-2 mx-auto border-[2.5px] rounded-full"></div>
          )}
        </a>
        <a
          href="#footer"
          className={`w-fit m-auto rounded-lg px-4 py-2 glass-btn text-sm font-medium text-text-color ${
            isHovered ? "glass-gradient px-7 animate-element" : "glass-btn px-4"
          } transition-all duration-300 ease-in`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          contact me
        </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;