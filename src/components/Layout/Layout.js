import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navigation from './Navigation'

const Layout = () => {
  return (
    <div className='relative w-full flex justify-center'>
      <div className='relative w-full max-w-[1400px] flex'>
        <Navigation />

        <div className='flex absolute top-[65px] w-full right-0'>
          <main className='w-full h-[calc(100vh-65px)] relative overflow-auto flex justify-start items-center flex-col' >
            <Outlet />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  )
}

export default Layout