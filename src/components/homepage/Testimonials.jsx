import React from 'react'

const Testimonials = () => {
  return (
    <div className='bg-black grid gap-10 py-10'> 
        <div className='mx-auto w-fit text-center'>
            <h3 className='text-[32px] font-normal text-blue-green font-Monoton'>testimonials</h3>
        </div>
        <section className='grid gap-6 m-auto md:flex '>
            <TestimonialsCard
                remark='Working with Newman has been an absolute pleasure. His ability to transform our vision into stunning designs is unparalleled.'
                position='caretaker'
            />
             <TestimonialsCard
                remark='Newman’s passion for design and innovative thinking makes him an invaluable asset to our team.'
                position='glee education'
            />
             <TestimonialsCard
                remark='Newman’s passion for design and innovative thinking makes him an invaluable asset to our team.'
                position='genesys tech hub'
            />
        </section>
    </div>
  )
}


export const TestimonialsCard = (props) => {
  return (
            <div className='p-[1px] gradient h-fit w-fit'>
                <div className='h-fit py-[52px] px-8 rounded-[32px] grid gap-8 text-center w-fit bg-black m-auto'>
                    <img src="images/testimonial.png" alt="" className='mx-auto ' />
                    <p className='text-sm font-medium text-white w-[240px]'>{props.remark}</p>
                    <p className='text-sm font-medium text-[#ffe66d]'>{props.position}</p>
                </div>
            </div>
  )
}


export default Testimonials