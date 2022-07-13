import React from 'react'

import Slider from '../components/Slider'
import Products from '../components/games/Products'

const Home = () => {
  return (
    <div className='bg-[#0f0f18] w-full px-[20px] pt-[15px]' >
        <Slider />
        <Products />
    </div>
  )
}

export default Home