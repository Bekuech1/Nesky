import React from 'react'
import GlassBtn from './homepage/GlassBtn'

const WorkCard = () => {
  return (
    <div className='workcard grid gap-y-3 w-[526px]'>
        <div className='w-[526px] h-[326px] work-card p-6'> 
            <img className='w-[478px] h-[278] rounded-[4px]' src="images/workcard.png" alt=''/>
        </div>
        <section className='h-fit grid gap-y-4'>
            <div className='grid gap-4 text-white'>
                <h6 className='text-base font-semibold uppercase'>real estate template</h6>
                <p  className='text-base font-semibold capitalize'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices lorem non feugiat egestas amet.</p>
            </div>
            <div className='flex justify-between text-[#E3E4E6]'>
                <h6 className='text-[18px] font-light capitalize my-auto'>website design</h6>
                <GlassBtn text='view live link'/>
            </div>
        </section>
    </div>
  )
}

export default WorkCard