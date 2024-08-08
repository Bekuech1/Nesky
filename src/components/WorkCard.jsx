import React from 'react'
import GlassBtn from './GlassBtn'

const WorkCard = ( {src, title, content, style, design} ) => {
  return (
    <div className='workcard grid gap-y-3 w-[526px]'>
        <div className={`w-[526px] h-[326px] p-6 ${style}`}> 
            <img className='w-[478px] h-[278] rounded-[4px]' src={src} alt=''/>
        </div>
        <section className='h-fit grid gap-y-4'>
            <div className='grid gap-4 text-white'>
                <h6 className='text-base font-semibold uppercase'>{title}</h6>
                <p  className='text-base font-semibold capitalize'>{content}</p>
            </div>
            <div className='flex justify-between text-[#E3E4E6]'>
                <h6 className='text-[18px] font-light capitalize my-auto'>{design} design</h6>
                <GlassBtn text='view'/>
            </div>
        </section>
    </div>
  )
}

export default WorkCard