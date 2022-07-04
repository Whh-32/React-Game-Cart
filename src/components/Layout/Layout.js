import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <nav className='w-full bg-[#1f2025] h-[65px]'>
            
        </nav>

        <Outlet/>
    </div>
  )
}

export default Layout