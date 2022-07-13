import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='relative w-full flex justify-center'>
      <div className='relative w-full max-w-[1400px] flex'>

          <div className='w-[230px] bg-[#232325] h-screen border-r-2 border-[#313131] relative top-0 left-0'>
          </div>

          <div className='absolute w-[calc(100%-230px)] right-0'>
            <nav className='w-full bg-[#232325] h-[65px] sticky top-0'></nav>

            <main className='w-full bg-[#0f0f18] h-[calc(100vh-65px)] relative overflow-auto flex justify-start items-center flex-col' >
              <Outlet />
            </main>
          </div>

      </div>
    </div>
  )
}

export default Layout