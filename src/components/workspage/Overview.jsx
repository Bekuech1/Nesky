import React from 'react'
import GlassBtn from '../GlassBtn'

const Overview = () => {
  return (
    <div className=' w-screen grid gap-6 pt-[130px] bg-black text-white'>
        <div className='m-auto w-[90vw] grid gap-10'>
            <div className='grid lg:flex lg:justify-between gap-5'>
                <div className='grid gap-4 w-fit'>
                    <h1 className='text-5xl lg:text-[64px] font-semibold'>igodo car detailing services</h1>
                    <p className='text-base font-medium'>Case Study: Designing the Igodo Car Detailing Service App</p>
                </div>
                <div className='flex lg:grid gap-6 h-fit mt-auto text-right'>
                    <h6 className='text-[18px] font-light capitalize my-auto'>app design</h6>
                    <GlassBtn text='link to project'/>
                </div>
            </div>
            <div className='grid gap-6'>
                <h6 className='text-[32px] font-semibold'>product Overview</h6>
                <p className='text-xl font-medium w-[90vw] '>Igodo Car Detailing Services, a premium mobile car detailing company in the Benin(Nigeria), aimed to enhance its customer experience by developing a mobile application. The goal was to simplify the booking process, provide real-time updates, and improve customer engagement.</p>
            </div>
            <img src="images/igodo1.png" alt="" className='w-[90vw] h-[280px] lg:h-[731.25px] m-auto'/>
        </div>
    </div>
  )
}

export default Overview