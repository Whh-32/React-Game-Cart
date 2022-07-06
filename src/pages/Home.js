import React from 'react'

import Slider from '../components/Slider'
import Products from '../components/Products'

const Home = () => {
  return (
    <div className='bg-[#0f0f18] w-full max-w-[1150px] px-[30px] pt-[15px]' >
        <Slider />
        <Products />
    </div>
  )
}

export default Home