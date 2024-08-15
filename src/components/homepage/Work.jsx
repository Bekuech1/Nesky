import React from 'react'
import Contact from './Contact'
import WorkCard from '../WorkCard'
import GlassBtn from '../GlassBtn'

import { useNavigate } from 'react-router-dom'


const Work = () => {

  const navigate = useNavigate();

  const handleIgodo = () => {
    navigate('/igodo')
  };


  return (
    <div className='work px-[110] py-10 bg-black  w-screen' id='work'>
      <div className='w-fit mx-auto grid gap-12'>
          <div className='justify-between flex w-full'>
              <h3 className='text-[32px] font-normal text-blue-green font-Monoton'>my work</h3>
              <a href="https://www.dribbble.com/Nesky" target='_blank'>
                  <GlassBtn text='view all'/>
              </a>
          </div>
          <div className='grid grid-cols-1 gap-6 gap-y-12 w-fit mx-auto md:grid md:grid-cols-2'>
            <div
                onClick={handleIgodo}
            >
                <WorkCard 
                    on
                    title='Igodo Car Detailing Services'
                    content='Case Study: Designing the Igodo Car Detailing Service App'
                    src='images/work1.png'
                    style='work-card1'
                    design='mobile app'
                    goto='https://www.igodo.net'
                />
            </div>
            <a href="https://www.usecaretaker.com/" target='_blank' rel="noopener noreferrer">
                <WorkCard 
                    title='caretaker'
                    content='a real estate management web app'
                    src='images/work2.png'
                    style='work-card2'
                    design='website'
                    goto='https://www.usecaretaker.com/'
                />
            </a>
            <a href="https://www.venohr.io/" target='_blank' rel="noopener noreferrer">
                <WorkCard 
                    title='venohr'
                    content='VenoHr is a HR management system where you can manage employees and recruiters can manage their job applicants.'
                    src='images/work3.png'
                    style='work-card3'
                    design='website'
                    goto='https://www.venohr.io/'
                />
            </a>
            <a href='https://www.rivala.io/' target="_blank" rel="noopener noreferrer">
                <WorkCard 
                    title='rivala'
                    content='Rivala is a platform for hiring talents at a cheaper cost from different countries'
                    src='images/work4.png'
                    style='work-card4'
                    design='website'
                    goto='https://www.rivala.io/'
                />
            </a>
          </div>
          <div className='mx-auto'>
              <Contact />
          </div>
          <div className='grid gap-10 h-fit mx-auto'>
              <div className='text-center'>
                  <h6 className='text-white text-2xl font-medium text-center'>some of the clients i have</h6>
                  <h6 className='text-white text-2xl font-medium text-center'>designed for</h6>
              </div>
              <div className='py-4 grid md:flex gap-20 m-auto '>
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