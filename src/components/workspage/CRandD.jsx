import React from 'react'

const CRandD = () => {
  return (
    <div className='grid gap-6 w-screen bg-black text-white'>
        <div className='m-auto w-[90vw]'>
            <div className='grid gap-6'>
                <h5 className='font-semibold text-[32px]'>challenge</h5>
                <p className='font-medium text-base'>the primary challenges were:</p>
                <ul className='list-disc pl-7 font-medium text-base'>
                    <li>User Convenience: Ensuring the app was easy to use for all age groups.</li>
                    <li>Efficient Booking System: Implementing a seamless booking process with minimal steps</li>
                    <li>Real-Time Updates: Providing users with real-time updates on their service status.</li>
                </ul>
            </div>
            <div className='grid gap-6'>
                <h5 className='font-semibold text-[32px]'>research and discovery</h5>
                <div>
                    <p className='font-medium text-base'>user research</p>
                    <ul className='list-disc pl-7 font-medium text-base'>
                        <li>Surveys and Interviews: Conducted with existing customers to understand their pain points and preferences.</li>
                    </ul>
                </div>
                <div>
                    <p className='font-medium text-base'>key findings</p>
                    <ul className='list-disc pl-7 font-medium text-base'>
                        <li>users wanted a quick and simple booking process</li>
                        <li>Real-time notifications and updates were highly desired</li>
                        <li>Easy access to service history and upcoming appointments was a must</li>
                    </ul>
                </div>
            </div>
            <img src="images/igodo2.png" alt="" className='h-[200px]lg:h-[661px] w-[90vw]'/>
        </div>
    </div>
  )
}

export default CRandD