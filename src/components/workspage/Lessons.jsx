import React from 'react'

const Lessons = () => {
  return (
        <div className=' w-screen grid gap-6'>
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
  )
}

export default Lessons