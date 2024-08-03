import React from 'react'

const Contact = () => {
  return (
        <div className='grid gap-y-4 items-center text-center'>
            <h3 className='text-2xl text-blue-green uppercase font-bold'>contact me</h3>
            <section className='flex gap-x-14 w-fit mx-auto'>
              <a href="" className='m-auto' >
                  <img src="icons/mail.svg" alt="" />
              </a>
              <a href="" className='m-auto' >
                  <img src="icons/behance.svg" alt="" />
              </a>
              <a href=""  className='m-auto' >
                  <img src="icons/dribble.svg" alt="" />
              </a>
              <a href=""  className='m-auto' >
                  <img src="icons/linkedin.svg" alt="" />                
              </a>
              <a href="" className='m-auto' >
                  <img src="icons/call.svg" alt="" />
              </a>
            </section>
        </div>
  )
}

export default Contact