import React from 'react'

const GlassBtn = (prop) => {
  return (
    <div className='p-[1px] h-fit w-fit'>
        <div className='glass-btn rounded-full cursor-pointer py-2 px-4 flex text-white gap-2 capitalize w-fit'>
          <h1 className='text-sm  m-auto w-full'>{prop.text}</h1>
          <img src="icons/arrow-right.svg" alt="" />
        </div>
    </div>
  )
}

export default GlassBtn