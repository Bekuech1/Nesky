import React from 'react'
import Contact from '../homepage/Contact'

const Footer = () => {
  return (
    <footer className='text-white'>
        <div className='grid m-auto w-fit gap-10 text-center'>
            <div className='text-center grid gap-10'>
                <h3 className='text-[32px] font-normal text-blue-green font-Monoton'>get inspired</h3>
                <h5 className='text-sm font-medium w-[380px]'>Ready for jaw-dropping designs? Let’s collaborate to unleash your brand’s full potential.</h5>
                <Contact/>
            </div>
            <p className='text-[#B0B8C1]'>© 2023 Newman Ogbo. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer