import React from 'react'
import Contact from './Contact'
import WorkCard from '../WorkCard'
import GlassBtn from './GlassBtn'

const Work = () => {
  return (
    <div className='work px-[110] py-10 bg-black'>
      <div className='w-fit mx-auto grid gap-12'>
          <div className='justify-between flex w-full'>
              <h3 className='text-[32px] font-normal text-blue-green font-Monoton'>my work</h3>
              <GlassBtn text='view all'/>
          </div>
          <div className='grid grid-cols-2 gap-x-6 gap-y-12 w-fit mx-auto'>
            <WorkCard 
                title='Igodo Car Detailing Services'
                content='Case Study: Designing the Igodo Car Detailing Service App'
                src='images/work1.png'
                style='work-card1'
            />
            <WorkCard 
                title='caretaker'
                content='a real estate management web app'
                src='images/work2.png'
                style='work-card2'
            />
            <WorkCard 
                title='real estate template'
                content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices lorem non feugiat egestas amet.'
                src='images/work3.png'
                style='work-card3'
            />
            <WorkCard 
                title='caretaker'
                content='a real estate management web app'
                src='images/work4.png'
                style='work-card4'
            />
          </div>
          <div className='mx-auto'>
              <Contact />
          </div>
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