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
    <div className='workcard grid gap-y-3 w-[526px] cursor-pointer'>
        <div className={`w-[526px] h-[326px] ${style} justify-center items-center grid place-items-center`}> 
            <img className={`rounded-[4px] ${isHovered ? 'w-[510px] h-[310px]' : 'w-[478px] h-[278]'}`}
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