import React from 'react'

const About = () => {
  return (
    <div className='px-[110] py-10 grid gap-10 bg-black' id='about'>
        <div className='mx-auto w-fit text-center'>
            <h3 className='text-[32px] font-normal text-blue-green font-Monoton'>about me</h3>
        </div>
        <AboutContainer>
            <AboutImage>
                <img src="images/me1.png" alt="" className='my-auto'/> 
                <div className='grid gap-8 w-fit h-fit items-center'>
                    <img src="images/me2.png" alt="" />
                    <img src="images/me3.png" alt="" />
                </div>
            </AboutImage>
            <AboutText>
                <h6 className='text-base font-semibold uppercase'>Introduction</h6>
                <p className='text-base font-semibold'>Hey there! I'm Newman Ogbo, a multi-faceted creative who wears multiple hats as a UI/UX designer, Artist, and Graphic designer. My creative journey has been a fascinating exploration of the intersection between design and human experiences. With a background in creating visually engaging content and a passion for understanding how users interact with digital interfaces, I'm all about crafting meaningful and aesthetic solutions.</p>
            </AboutText>
        </AboutContainer>
        <AboutContainer> 
            <AboutText>
                <h6 className='text-base font-semibold uppercase'>work philosophy</h6>
                <p className='text-base font-semibold'>I firmly believe in the power of design to connect, engage, and inspire. It's not just about creating beautiful visuals; it's about creating experiences that resonate with people, improve their lives, and tell compelling stories.</p>
            </AboutText>
            <AboutImage>
                <img src="images/me4.png" alt="" className='my-auto'/>
                <div className='gap-8 grid'>
                    <img src="images/me14.png" alt="" className='mt-auto w-[247px] h-[312px]' />
                    <img src="images/me5.png" alt="" className='mt-auto' />
                </div>
            </AboutImage>
        </AboutContainer>
        <AboutContainer>
            <AboutImage>
                <div className='m-auto grid gap-8'>
                    <img src="images/me6.png" alt="" />
                    <img src="images/me7.png" alt="" />
                </div>
                <div className='grid gap-8'>
                    <img src="images/me8.png" alt="" />
                    <img src="images/me9.png" alt="" />
                    <img src="images/me10.png" alt="" />
                </div>
            </AboutImage>
            <AboutText>
                <h6 className='text-base font-semibold uppercase'>beyond the experience</h6>
                <p className='text-base font-semibold'>When I'm not designing, you'll often find me enjoying quality time with friends, either on the basketball court, in a gaming session, or hitting the gym. Building meaningful relationships with people is something I value. It not only enriches my life but also informs my design choices. My ability to connect with others and work collaboratively is a strength I carry into my professional life.</p>
            </AboutText>
        </AboutContainer>
        <AboutContainer>
            <AboutText>
                <h6 className='text-base font-semibold uppercase'>artistic passion</h6>
                <p className='text-base font-semibold'>As an artist, I find inspiration in the everyday and aim to translate that into visually appealing creations. My artistic journey involves experimenting with various mediums, from digital to traditional art, exploring themes that captivate the senses.</p>
            </AboutText>
            <AboutImage>
                <img src="images/me11.png" alt="" className='my-auto' />
                <div className='grid gap-8'>
                    <img src="images/me12.png" alt="" />
                    <img src="images/me13.png" alt="" />
                </div>
            </AboutImage>
        </AboutContainer>
    </div>
  )
}

const AboutText = ({children}) => {
  return (
    <div className='w-[526px] grid gap-3 text-white h-fit my-auto'>
        {children}
    </div>
  )
}

export const AboutImage = ({children}) => {
  return (
    <section className='flex gap-8 w-fit h-fit'>
        {children}
    </section>
  )
}


export const AboutContainer = ({children}) => {
  return (
    <div className='md:flex grid gap-6 w-fit mx-auto'>
        {children}
    </div>
  )
}



export default About