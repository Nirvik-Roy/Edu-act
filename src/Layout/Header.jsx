import React, { useState } from 'react'
import logo from '../../public/Screenshot_2025-04-11_193306-removebg-preview.png'
import { NavLink } from 'react-router-dom'
import Sidebar from './Sidebar'

const Header = () => {
  const [sideBaropen,setsideBaropen]=useState(false);
  const [navbar,setNavbar]=useState(false)
  const sidebarFunction = () =>{
    setsideBaropen(!sideBaropen)
  }
  const scroll =()=>{
    console.log(scrollY)
    if(window.scrollY > 50) {
      setNavbar(true)
    }else{
      setNavbar(false)
    }
  }
  window.addEventListener('scroll',scroll)
  return (
    <>
<Sidebar sideBaropen={sideBaropen} sidebarFunction={sidebarFunction}/>
      <nav className={navbar ? "nav_wrapper2":'nav_wrapper '}>
        <div className='universal_container nav_links_wrapper_div'>
            <div className='nav_logo_wrapper'>
                <img src={logo}/>
            </div>
            <div className='nav_links_wrapper'>
                <NavLink to={'/'}>Home</NavLink>
          
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/course'}>Courses</NavLink>
                <NavLink to={'/contact'}>Contact</NavLink>
                <div className='maginfy_wrapper'>
                <i class="fa-solid fa-bars-staggered" onClick={sidebarFunction}></i>
                <i class="fa-solid fa-magnifying-glass"></i>
                <i class="fa-regular fa-user"></i>
                </div>
            </div>
            <div className='call_for_questions'>
              <div className='call_circle'>
              <i class="fa-solid fa-phone-volume"></i>
              </div>
              <div className='call_questions_wrapper'>
                <h5>(303) 555-0105</h5>
                <p>Call to Questions</p>
              </div>
            </div>
        </div>
      </nav>
     
    </>
  )
}

export default Header
