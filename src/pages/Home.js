import React from 'react'

import Slider from '../components/Slider'
import Products from '../components/games/Products'

const Home = () => {
  return (
    <div className='bg-[#141414] w-full px-[20px] lg:px-[40px] pt-[15px] transition-all duration-[500ms]' >
        <Slider />
        <Products />
    </div>
  )
}

export default Home