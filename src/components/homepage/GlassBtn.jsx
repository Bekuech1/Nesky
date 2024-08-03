import React from 'react'

const GlassBtn = (prop) => {
  return (
    <button className='glass-btn rounded-full w-fit py-2 px-4 inline-flex text-white gap-2 capitalize'>
      {prop.text}
      <img src="icons/arrow-right.svg" alt="" />
    </button>
  )
}

export default GlassBtn