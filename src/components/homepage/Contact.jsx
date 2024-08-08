import React from 'react'

const Contact = (prop) => {
  return (
        <div className='grid gap-y-4 items-center'>
            <h3 className='text-2xl text-blue-green uppercase font-bold'>{prop.contact}</h3>
            <section className='flex gap-x-14 w-fit'>
              <a href="mailto:newman.ogbo.s@gmail.com?subject=work  Here&body=Hello Newman" target='_blank' className='m-auto' >
                  <img src="icons/mail.svg" alt="" />
              </a>
              <a href="https://www.behance.net/newmanogbo" target='_blank' className='m-auto' >
                  <img src="icons/behance.svg" alt="" />
              </a>
              <a href="https://www.dribbble.com/Nesky" target='_blank'  className='m-auto' >
                  <img src="icons/dribble.svg" alt="" />
              </a>
              <a href=""  className='m-auto' >
                  <img src="icons/linkedin.svg" alt="" />                
              </a>
              <a href="https://wa.me/+2349028260161?text=Hello%20Newman" target='_blank' className='m-auto' >
                  <img src="icons/call.svg" alt="" />
              </a>
            </section>
        </div>
  )
}

export default Contact