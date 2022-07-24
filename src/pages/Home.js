import React, { useEffect, useState } from 'react'

import Product from '../components/games/Product'
import Slider from '../components/Slider'

import { TbTruckDelivery } from 'react-icons/tb'
import { MdPayment } from 'react-icons/md'
import { BiSupport } from 'react-icons/bi'
import { MdOutlineHighQuality } from 'react-icons/md'


const Home = () => {
  const BASE_URL = 'https://api.rawg.io/api/games?key=00d647439340449eae7acb7e965ca18b&page_size=8&exclude_stores=1';
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}`)
      .then(res => res.json())
      .then(data => {
        setGames(data.results);
      })
  }, [])

  return (
    <div className='bg-[#141414] w-full px-[20px] lg:px-[40px] pt-[15px] transition-all duration-[500ms]' >
      <Slider />

      <div className='w-full h-auto grid grid-cols-2 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8 mb-[40px] text-[12px] sm:text-[16px] py-5'>
        <div className='flex justify-center items-center text-white h-[60px] borderr-[1px] border-r font-medium'>
          <TbTruckDelivery size={30} className='mr-4' />
          <span >HASSLE FREE<br />Express Delivery</span>
        </div>
        <div className='flex justify-center items-center text-white h-[60px]  lg:borderr-[1px] lg:border-r font-medium'>
          <MdPayment size={30} className='mr-4' />
          <span>ONLINE<br />Secured Payment</span>
        </div>
        <div className='flex justify-center items-center text-white h-[60px] borderr-[1px] border-r font-medium'>
          <BiSupport size={30} className='mr-4' />
          <span>RELIABLE<br />Customer Support</span>
        </div>
        <div className='flex justify-center items-center text-white h-[60px] font-medium'>
          <MdOutlineHighQuality size={30} className='mr-2' />
          <span>HIGH QUALITY<br />Trusted Products</span>
        </div>
      </div>

      <div className='w-full h-auto'>
        <span className='flex text-white text-[20px] mb-4'>Best Games</span>
        <div className='w-full h-auto bg-[#ffffff00] grid grid-cols-2 gap-y-10 sm:grid-cols-3 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
          {games.map(game => (
            <Product
              key={game.id}
              id={game.id}
              released={game.released}
              name={game.name}
              cover={game.background_image}
              pics={game.short_screenshots}
              genres={game.genres}
              platforms={game.parent_platforms}
              slug={game.slug}
            />))}
        </div>
      </div>
    </div >
  )
}

export default Home