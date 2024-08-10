import React, { useState } from 'react'

const Contact = (prop) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

  return (
        <div className='grid gap-y-4 items-center'>
            <h3 className='text-2xl text-blue-green uppercase font-bold'>{prop.contact}</h3>
            <section className='flex gap-x-14 w-fit'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
              <a href="mailto:newman.ogbo.s@gmail.com?subject=work  Here&body=Hello Newman" target='_blank' className='m-auto' >
                  <img 
                        src={isHovered ? 'icons/mail-h.svg' : 'icons/mail.svg'}
                  />
              </a>
              <a href="https://www.behance.net/newmanogbo" target='_blank' className='m-auto' >
                  <img 
                        src={isHovered ? 'icons/behance-h.svg' : 'icons/behance.svg'}
                  />
              </a>
              <a href="https://www.dribbble.com/Nesky" target='_blank'  className='m-auto' >
                  <img 
                        src={isHovered ? 'icons/dribble-h.svg' : 'icons/dribble.svg'}
                  />
              </a>
              <a href="https://www.linkedin.com/in/newman-ogbo-964213250" target='_blank'  className='m-auto' >
                  <img 
                        src={isHovered ? 'icons/linkedin-h.svg' : 'icons/linkedin.svg'}
                  />                
              </a>
              <a href="https://wa.me/+2349028260161?text=Hello%20Newman" target='_blank' className='m-auto' >
                  <img 
                        src={isHovered ? 'icons/call-h.svg' : 'icons/call.svg'}
                  />
              </a>
            </section>
        </div>
  )
}

export default Contact