import { useState } from 'react'
import { Outlet } from "react-router-dom";
import Footer from './components/footer';

import NavBar from './components/navbar'

function Layout() {

  return (
    <section className='min-h-full'>
      <NavBar></NavBar>

      <section className='min-h-screen'>
        <Outlet />
      </section>

      <Footer></Footer>
    </section>
  )
}

export default Layout