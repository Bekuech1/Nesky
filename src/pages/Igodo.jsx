import React from 'react'
import Overview from '../components/workspage/Overview'
import CRandD from '../components/workspage/CRandD'
import DesignProcess from '../components/workspage/DesignProcess'
import KeyFeatures from '../components/workspage/KeyFeatures'

 

const Igodo = () => {
  return (
    <div className='bg-black text-[#E3E4E6] px-'>

      <div>
          <Overview/>
          <CRandD/>
          <DesignProcess/>
          <KeyFeatures/>
      </div>

    </div>
  )
}

export default Igodo