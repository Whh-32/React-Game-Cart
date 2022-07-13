import React from 'react'

import pic from '../asset/game_cover/WarZone.jpg'

const Slider = () => {
    return (
        <div className='w-full max-h-[570px] h-[42vw] bg-[#676cbd] rounded-2xl mb-20 overflow-hidden'>
            <img className='object-cover w-full h-full' src={pic} alt="ppp" />

        </div>
    )
}

export default Slider