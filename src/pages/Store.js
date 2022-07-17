import React from 'react'
import { useParams } from 'react-router-dom'

import Products from '../components/games/Products'

const Store = () => {
    const param = useParams();

    return (
        <div className='bg-[#141414] w-full px-[20px] lg:px-[40px] pt-[15px] transition-all duration-[500ms]' >
            <Products param={parseInt(param.page)} />
        </div>

    )
}

export default Store