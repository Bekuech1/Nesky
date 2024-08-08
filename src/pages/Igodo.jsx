import React from 'react'
import WorkTitle from '../components/workspage/WorkTitle'
import Overview from '../components/workspage/Overview'
import CRandD from '../components/workspage/CRandD'
import DesignProcess from '../components/workspage/DesignProcess'
import KeyFeatures from '../components/workspage/KeyFeatures'
import Lessons from '../components/workspage/Lessons'
 

const Igodo = () => {
  return (
    <div className='bg-black text-[#E3E4E6] px-'>

      <div className='w-fit mx-auto grid gap-10 py-28'>
          <WorkTitle/>
          <Overview/>
          <CRandD/>
          <DesignProcess/>
          <KeyFeatures/>
          <Lessons/>
      </div>

    </div>
  )
}

export default Igodo