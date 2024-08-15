import React from 'react'
import GlassBtn from '../GlassBtn'

const WorkTitle = () => {
  return (
    <div className='justify-between flex w-screen'>
        <div className='grid gap-4'>
            <h1 className='text-[64px] font-semibold'>igodo car detailing services</h1>
            <p className='text-base font-medium'>Case Study: Designing the Igodo Car Detailing Service App</p>
        </div>
        <div className='grid gap-y-6 h-fit mt-auto text-right'>
            <h6 className='text-[18px] font-light capitalize my-auto'>app design</h6>
            <GlassBtn text='link to project'/>
        </div>
    </div>
  )
}

export default WorkTitle