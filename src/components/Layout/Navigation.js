import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

import logo from '../../asset/logo_game.png'
import { FaRegUser } from 'react-icons/fa'
import { BiSearch } from 'react-icons/bi'

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(true);
    const menuHandler = () => {
        setIsOpen(prev => {
            return !prev
        })
        console.log(isOpen)
    }

    return (
        <header className=' bg-[#8a8a8a18] flex items-center justify-between w-full h-[65px] sticky top-0 border-[#4d4d4d] border-b-[1px] px-[20px] lg:px-[40px] transition-all duration-[500ms]'>
            <div className='h-full py-[10px] flex items-center'>
                <Link className='h-full flex items-center' to='/'>
                    <img className='w-full h-full object-contain' src={logo} alt="logo" />
                    <span className='ml-2 text-[#ffffff] text-[20px] font-black tracking-[4px]'>Foxy</span>
                </Link>
            </div>

            <div >
                <nav>
                    <ul className='hidden items-center md:flex'>
                        <li className='text-white font-medium m-4'>
                            <NavLink
                                style={({ isActive }) => isActive ? { color: "#FAD860", fontSize: "18px" } : undefined} to='/'>
                                Home
                            </NavLink>
                        </li>
                        <li className='text-white font-medium m-4'>
                            <NavLink
                                style={({ isActive }) => isActive ? { color: "#FAD860", fontSize: "18px" } : undefined} to='/Store'>
                                Store
                            </NavLink>
                        </li>
                        <li className='text-white font-medium m-4'>
                            <NavLink
                                style={({ isActive }) => isActive ? { color: "#FAD860", font: "18px" } : undefined} to='/Collection'>
                                Collection
                            </NavLink>
                        </li>
                        {/* <li className='text-white font-medium m-4'>
                            <NavLink
                                style={({ isActive }) => isActive ? { color: "#FAD860", font: "18px" } : undefined} to='/About'>
                                About
                            </NavLink>
                        </li> */}
                    </ul>
                </nav>
            </div>

            <div className='hidden flex-row-reverse items-center md:flex'>
                <div className='text-white bg-[#3f3f3f] w-[40px] h-[40px] overflow-hidden rounded-[50%] flex justify-center items-center ml-4'>
                    <FaRegUser />
                </div>
                <div className='relative flex items-center'>
                    <input spellCheck={false} type="text" placeholder='Search Game' className='bg-transparent border-[1px] border-[#b1b1b1]  outline-none w-[200px] h-[30px] text-[12px] rounded-lg pl-8 text-white' />
                    <BiSearch color='#ffffff' className='absolute left-2' />
                </div>
            </div>
            
            <div className='flex md:hidden'>
                <div onClick={menuHandler} className='relative flex flex-col justify-center items-center h-[15px] w-[20px] cursor-pointer'>
                    <span className={`transition-all duration-[100ms] absolute rounded-sm flex w-full h-[2px] bg-white ${isOpen ? 'rotate-[-45deg] ' : 'top-0'}`}></span>
                    <span className={`flex rounded-sm w-full h-[2px] bg-white ${isOpen ? 'hidden' : ''}`}></span>
                    <span className={`transition-all duration-[100ms] absolute rounded-sm flex w-full h-[2px] bg-white ${isOpen ? 'rotate-45 ' : 'bottom-0'}`}></span>
                </div>
            </div>
        </header>
    )
}

export default Navigation