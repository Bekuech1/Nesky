import React from 'react'

const KeyFeatures = () => {
  return (
    <div className='grid w-screen gap-6 pb-6'>
      <div className='m-auto w-fit grid gap-6'>
        <h5 className='font-semibold text-[32px]'>key features and screens</h5>
        <img src="images/igodo5.png" alt="" className='w-[90vw]'/>
        <img src="images/igodo6.png" alt="" className='w-[90vw]'/>
        <img src="images/igodo7.png" alt="" className='w-[90vw]'/>
        <img src="images/igodo8.png" alt="" className='w-[90vw]'/>
        <img src="images/igodo9.png" alt="" className='w-[90vw]'/>
        <div className='mt-6 w-fit'>
            <h5 className='font-semibold text-[32px]'>lessons learned</h5>
            <ul className='list-disc pl-7 font-medium text-base'>
                <li>User Feedback: Continuous user feedback is crucial for iterative improvement.</li>
                <li>simplicity: a simple and intuitive design enhances user satisfaction.</li>
                <li>Integration: Seamless integration with existing systems is vital for operational efficiency.</li>
            </ul>
            <h5 className='font-semibold text-[32px]'>future plans</h5>
            <ul className='list-disc pl-7 font-medium text-base'>
                <li>Feature Expansion: Adding new features like loyalty programs and referral bonuses.</li>
                <li>Continuous Improvement: Regular updates based on user feedback to enhance the app’s functionality.</li>
            </ul>
        </div>
        
      </div>
    </div>
  )
}

export default KeyFeatures