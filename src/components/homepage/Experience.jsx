import React from 'react'

const Experience = () => {
  return (
    <div className='bg-black grid gap-10 w-screen'>
        <div className='mx-auto w-fit text-center'>
            <h3 className='text-[32px] font-normal text-blue-green font-Monoton'>work experience</h3>
        </div>
        <div className='w-full h-[504px] relative overflow-x-auto whitespace-nowrap custom-scrollbar'>
            <div className='bg-[#E6AF2E] h-2 opacity-10 mt-[264px] w-[1550px]'></div>
            <TopExperience/>
            <BottomExperience/>
            <div className='flex gap-6 absolute top-[208px] left-[882px]'>
                <div className='relative h-fit w-fit'>
                    <h5 className='text-white absolute left-1/2 -translate-x-1/2 -translate-y-1/2 mb-28 text-center text-sm font-semibold w-32'>oct 2022-present</h5>
                    <div className='absolute left-1/2 -translate-x-1/2 w-8 h-8 mt-10 bg-white rounded-full'></div>
                    <div className=' border-r border-white h-[270px] mt-10'></div>
                </div>
                <div className='grid absolute top-[173px] left-6'>
                    <h5 className='text-white'>caretaker technologies - product designer</h5>
                    <ul className='text-[#FFE66D] w-[362px] list-disc inline-block'>
                        <li>designed and conceptualized version 1 of the mobile app</li>
                        <li>contributed to the redesign of the web app</li>
                        <li>ideated, wireframed & conceptualized features and their application in the web app</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}


export const TopExperience = () => {
  return (
            <div className='flex gap-6 absolute top-[0.5px] left-[513px]'>
                <div className='relative h-fit w-fit'>
                    <div className=' border-r border-white h-[270px]'></div>
                    <div className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full'></div>
                    <h5 className='text-white absolute left-1/2 -translate-x-1/2 -translate-y-1/2 mt-14 text-center text-sm font-semibold w-32'>oct 2022-july 2023</h5>
                </div>
                <div className='grid absolute left-6'>
                    <h5 className='text-white'>Genesys tech hub - Product design intern</h5>
                    <ul className='text-[#FFE66D] w-[362px] list-disc inline-block'>
                        <li>designed a car rental mobile app</li>
                        <li>designed a responsive ecommerce for tech products</li>
                        <li>designed an automated payroll system that utilizes blockchain and cryptocurrency</li>
                    </ul>
                </div>
            </div>
  )
}

export const BottomExperience = () => {
  return (
      <div className='flex gap-6 absolute top-[208px] left-[208.5px]'>
          <div className='relative h-fit w-fit'>
              <h5 className='text-white absolute left-1/2 -translate-x-1/2 -translate-y-1/2 mb-28 text-center text-sm font-semibold w-32'>sep 2020-may 2021</h5>
              <div className='absolute left-1/2 -translate-x-1/2 w-8 h-8 mt-10 bg-white rounded-full'></div>
              <div className=' border-r border-white h-[270px] mt-10'></div>
          </div>
          <div className='grid absolute top-[173px] left-6'>
              <h5 className='text-white'>Glee education - graphic designer</h5>
              <ul className='text-[#FFE66D] w-[362px] list-disc inline-block'>
                  <li>designed flyers & posters</li>
                  <li>designed posters for social media</li>
              </ul>
          </div>
      </div>
  )
}



export default Experience