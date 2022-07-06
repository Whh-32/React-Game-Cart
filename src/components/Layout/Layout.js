import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <Fragment>
      <div className='w-full flex justify-center items-center'>
          <nav className='w-[85%] bg-[#232325] h-[65px] fixed right-0 top-0'>
          </nav>

          <div className='w-[15%] bg-[#232325] h-screen border-r-2 border-[#313131] fixed top-0 left-0'>
          </div>

          <main className='w-[85%] bg-[#0f0f18] h-[calc(100vh-65px)] absolute right-0 top-[65px] overflow-auto flex justify-start items-center flex-col' >
            <Outlet />
          </main>
      </div>
    </Fragment>
  )
}

export default Layout