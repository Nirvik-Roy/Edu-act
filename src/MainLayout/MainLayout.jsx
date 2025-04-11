import React from 'react'
import Header from '../Layout/Header.jsx'
import {Outlet} from 'react-router-dom'
import Footer from '../Layout/Footer'
const MainLayout = () => {
  return (
    <>

    <Header/>
      <Outlet/>
      <Footer/>
  
    
    </>
  )
}

export default MainLayout
