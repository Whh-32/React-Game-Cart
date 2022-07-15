import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../asset/logo_game.png'

const Navigation = () => {
    return (
        <nav className='flex items-center justify-between w-full h-[65px] sticky top-0 border-[#4d4d4d] border-b-[1px] px-[20px] lg:px-[40px] transition-all duration-[500ms]'>
            <div className='h-full py-[10px] flex items-center'>
                <Link className='h-full flex items-center' to='/'>
                    <img className='w-full h-full object-contain' src={logo} alt="logo" />
                    <span className='ml-2 text-[#ffffff] text-[20px] font-black tracking-[4px]'>Foxy</span>
                </Link>
            </div>
            <div>
                <span className='text-white'>slasssm</span>
            </div>
        </nav>
    )
}

export default Navigation