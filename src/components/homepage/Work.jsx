import React from 'react'
import Contact from './Contact'
import WorkCard from '../WorkCard'

const Work = () => {
  return (
    <div className='work px-[110] py-10 grid gap-12 bg-black'>
        <div className='mx-auto w-fit text-center'>
            <h3 className='text-[32px] font-normal text-blue-green font-Monoton'>my work</h3>
        </div>
        <div className='flex gap-x-[2px] bg-[#F7FFF71A] rounded-[100px] h-fit w-fit mx-auto work-border'>
          <WorkType title='UI/UX design' active='active-work'/>
          <WorkType title='brand design'/>
          <WorkType title='gallery'/>
          <WorkType title='logo design'/>
        </div>
        <div className='grid grid-cols-2 gap-x-6 gap-y-12 w-fit mx-auto'>
          <WorkCard/>
          <WorkCard/>
          <WorkCard/>
          <WorkCard/>
        </div>
        <Contact/>
        <div className='grid gap-10 h-fit mx-auto'>
            <div className='text-center'>
                <h6 className='text-white text-2xl font-medium text-center'>some of the clients i have</h6>
                <h6 className='text-white text-2xl font-medium text-center'>designed for</h6>
            </div>
            <div className='py-4 flex gap-20'>
              <img src="images/logo1.png" alt="" />
              <img src="images/logo2.png" alt="" />
              <img src="images/logo3.png" alt="" />
              <img src="images/logo4.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export const WorkType = ( {title, active} ) => {
  return (
          <div className={`px-4 py-[10px] rounded-[100px] h-fit w-fit cursor-pointer ${active}`}>
            <h5 className='text-xs font-medium text-white'>{title}</h5>
          </div>
  )
}


export default Work