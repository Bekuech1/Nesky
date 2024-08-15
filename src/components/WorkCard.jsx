import React, { useState } from 'react'
import GlassBtn from './GlassBtn'

const WorkCard = ( {src, title, content, style, design, goto} ) => {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className='workcard grid gap-y-3 w-[398px] lg:w-[526px] cursor-pointer '>
        <div className={`w-[398px] h-[250px] lg:w-[526px] lg:h-[326px] ${style} justify-center items-center grid place-items-center`}> 
            <img className={`rounded-[4px] ${isHovered ? 'scale-x-[1.067] scale-y-[1.116] lg:w-[478px] lg:h-[278px] w-[350px] h-[200px]' : 'scale-x-1 scale-y-1 lg:w-[478px] lg:h-[278px] w-[350px] h-[200px]'}  transition-all duration-300 delay-150`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                src={src}
            />
        </div>
        <section className='h-fit grid gap-y-4'>
            <div className='grid gap-4 text-white'>
                <h6 className='text-base font-semibold uppercase'>{title}</h6>
                <p  className='text-base font-semibold capitalize'>{content}</p>
            </div>
            <div className='flex justify-between text-[#E3E4E6]'>
                <h6 className='text-[18px] font-light capitalize my-auto'>{design} design</h6>
                <a href={goto} target='_blank'>
                    <GlassBtn text='view'/>
                </a>
            </div>
        </section>
    </div>
  )
}

export default WorkCard