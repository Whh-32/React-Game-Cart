import React from 'react'

import Slider from '../components/Slider'
import Products from '../components/games/Products'

const Home = () => {
  return (
    <div className='bg-[#141414] w-full px-[10px] pt-[15px]' >
        <Slider />
        <Products />
    </div>
  )
}

export default Home