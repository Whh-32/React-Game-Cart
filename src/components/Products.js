import React from 'react'

import pic from '../asset/game_cover/FortNight.jpg'

const Products = () => {
    return (
        <div className='w-full h-auto bg-[#262735] rounded-t-[15px] px-[30px] py-[60px] relative'>
            <span className='text-[#ffffff] absolute left-4 top-4'>STORE</span>

            <div className='w-full h-auto bg-[#ffffff00] grid grid-cols-2 gap-y-10 sm:grid-cols-3 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
                <div className='w-full h-[100%]  aspect-w-1 aspect-h-1 rounded-2xl overflow-hidden xl:aspect-w-6 xl:aspect-h-8 bg-[#161724]'>
                    <div className='w-full h-[]'>
                        <img src={pic} alt="pix" />
                    </div>
                    <div className='w-full h-auto py-[15px] px-[10px] text-white flex flex-col'>
                        <span className='font-medium'>FORTNITE</span>
                        <span className='text-[12px]'>action game in new genert</span>
                        <button className='bg-red-500 mt-[10px] rounded-[5px]'>add to cart</button>
                    </div>
                </div>

                <div className='w-full h-[100%]  aspect-w-1 aspect-h-1 rounded-2xl overflow-hidden xl:aspect-w-6 xl:aspect-h-8 bg-[#161724]'>
                    <div className='w-full h-[]'>
                        <img src={pic} alt="pix" />
                    </div>
                    <div className='w-full h-auto py-[15px] px-[10px] text-white flex flex-col'>
                        <span className='font-medium'>FORTNITE</span>
                        <span className='text-[12px]'>action game in new genert</span>
                        <button className='bg-red-500 mt-[10px] rounded-[5px]'>add to cart</button>
                    </div>
                </div>

                <div className='w-full h-[100%]  aspect-w-1 aspect-h-1 rounded-2xl overflow-hidden xl:aspect-w-6 xl:aspect-h-8 bg-[#161724]'>
                    <div className='w-full h-[]'>
                        <img src={pic} alt="pix" />
                    </div>
                    <div className='w-full h-auto py-[15px] px-[10px] text-white flex flex-col'>
                        <span className='font-medium'>FORTNITE</span>
                        <span className='text-[12px]'>action game in new genert</span>
                        <button className='bg-red-500 mt-[10px] rounded-[5px]'>add to cart</button>
                    </div>
                </div>

                <div className='w-full h-[100%]  aspect-w-1 aspect-h-1 rounded-2xl overflow-hidden xl:aspect-w-6 xl:aspect-h-8 bg-[#161724]'>
                    <div className='w-full h-[]'>
                        <img src={pic} alt="pix" />
                    </div>
                    <div className='w-full h-auto py-[15px] px-[10px] text-white flex flex-col'>
                        <span className='font-medium'>FORTNITE</span>
                        <span className='text-[12px]'>action game in new genert</span>
                        <button className='bg-red-500 mt-[10px] rounded-[5px]'>add to cart</button>
                    </div>
                </div>

                <div className='w-full h-[100%]  aspect-w-1 aspect-h-1 rounded-2xl overflow-hidden xl:aspect-w-6 xl:aspect-h-8 bg-[#161724]'>
                    <div className='w-full h-[]'>
                        <img src={pic} alt="pix" />
                    </div>
                    <div className='w-full h-auto py-[15px] px-[10px] text-white flex flex-col'>
                        <span className='font-medium'>FORTNITE</span>
                        <span className='text-[12px]'>action game in new genert</span>
                        <button className='bg-red-500 mt-[10px] rounded-[5px]'>add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products