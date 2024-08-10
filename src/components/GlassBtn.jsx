
import React, { useState } from 'react'

const GlassBtn = (prop) => {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  return (
    <div className='p-[1px] h-fit w-fit'>
        <div className={` rounded-full cursor-pointer py-2 flex text-white gap-2 capitalize w-fit *
            ${isHovered ? 'glass-gradient px-7' : 'glass-btn px-4'}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
          <h1 className='text-sm  m-auto w-full'>{prop.text}</h1>
          <img  
              src={isHovered ? 'icons/glass-hover.svg' : 'icons/arrow-right.svg'}
              alt=""
          />
        </div>
    </div>
  )
}

export default GlassBtn