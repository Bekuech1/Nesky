import React from 'react'

const DesignProcess = () => {
  return (
    <div className='grid w-screen gap-6'>
        <div className='m-auto w-fit'>
            <div className='grid gap-6'>
                <h5 className='font-semibold text-[32px]'>deign process</h5>
                <p className='font-medium text-base'>1. ideation and conceptualizaion</p>
                <ul className='list-disc pl-7 font-medium text-base'>
                    <li>Brainstorming Sessions: Involved stakeholders, including founders, designers, and developers, to gather ideas.</li>
                    <li>User Personas: Created to represent the target audience and their needs.</li>
                </ul>
            </div>
            <img src="images/igodo3.png" alt="" className='w-[90vw]'/>
            <div className='grid gap-6'>
                <h5 className='font-semibold text-[32px]'>deign process</h5>
                <p className='font-medium text-base'>2. wireframing and prototyping</p>
                <ul className='list-disc pl-7 font-medium text-base'>
                    <li>Wireframes: Developed High-fidelity wireframes to outline the app’s structure.</li>
                    <li>Prototypes: Created interactive prototypes to test user flows and interactions.</li>
                </ul>
            </div>
            <img src="images/igodo4.png" alt="" className='w-[90vw]'/>

        </div>
    </div>
  )
}

export default DesignProcess