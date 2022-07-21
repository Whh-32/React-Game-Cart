import React, { useRef,useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navigation from './Navigation'

const Layout = () => {
  const location = useLocation();
  const elem = useRef('');

  useEffect(() => {
    elem.current.scrollTo(0, 0);
  }, [location.pathname])

  return (
    <div className='relative w-full flex justify-center overflow-hidden h-screen'>
      <div className='relative w-full max-w-[1400px] flex'>
        <Navigation />

        <div className='flex absolute top-[65px] w-full right-0'>
          <main ref={elem} className='w-full h-[calc(100vh-65px)] relative overflow-auto flex justify-start items-center flex-col' >
            <Outlet />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  )
}

export default Layout