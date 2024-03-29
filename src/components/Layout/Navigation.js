import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import logo from '../../asset/logo_game.png';
import { FaRegUser } from 'react-icons/fa';


const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuHandler = () => {
        setIsOpen(prev => {
            return !prev
        })
    }

    const closeMenu = () => {
        setIsOpen(false)
    }

    return (
        <header className='z-[1000] bg-[#8a8a8a18] flex items-center justify-between w-full h-[65px] sticky top-0 border-[#4d4d4d] border-b-[1px] px-[20px] lg:px-[40px] transition-all duration-[500ms]'>
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
            </div>

            <div className='flex md:hidden'>
                <div onClick={menuHandler} className='relative flex flex-col justify-center items-center h-[15px] w-[20px] cursor-pointer z-10'>
                    <span className={`transition-all duration-[100ms] absolute rounded-sm flex w-full h-[2px] bg-white ${isOpen ? 'rotate-[-45deg] ' : 'top-0'}`}></span>
                    <span className={`flex rounded-sm w-full h-[2px] bg-white ${isOpen ? 'hidden' : ''}`}></span>
                    <span className={`transition-all duration-[100ms] absolute rounded-sm flex w-full h-[2px] bg-white ${isOpen ? 'rotate-45 ' : 'bottom-0'}`}></span>
                </div>
                <div className={`bg-[#000000] w-full h-screen absolute top-0 flex justify-center items-center transition-all duration-500 ${isOpen ? 'left-0' : 'left-full'}`}>
                    <nav>
                        <ul className='text-white flex flex-col justify-center items-center'>
                            <li onClick={closeMenu} className='text-white font-medium m-2'>
                                <NavLink
                                    style={({ isActive }) => isActive ? { color: "#FAD860", fontSize: "18px" } : undefined} to='/'>
                                    Home
                                </NavLink>
                            </li>
                            <li onClick={closeMenu} className='text-white font-medium m-2'>
                                <NavLink
                                    style={({ isActive }) => isActive ? { color: "#FAD860", fontSize: "18px" } : undefined} to='/Store'>
                                    Store
                                </NavLink>
                            </li>
                            <li onClick={closeMenu} className='text-white font-medium m-2'>
                                <NavLink
                                    style={({ isActive }) => isActive ? { color: "#FAD860", font: "18px" } : undefined} to='/Collection'>
                                    Collection
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header >
    )
}

export default Navigation