import React from 'react'
import logo from '../assets/images/Screenshot_2025-04-11_193306-removebg-preview.png'
import { NavLink } from 'react-router-dom'
const Sidebar = ({sidebarFunction,sideBaropen}) => {
  return (
    <>
      <div className={sideBaropen ? 'sidebar_wrapper2' : 'sidebar_wrapper'}>
        <div className={sideBaropen ? 'sidebar_main_div2':'sidebar_main_div'}>
        <i class="fa-solid fa-xmark" onClick={sidebarFunction}></i>
          <div className='sidebar_logo_div'>
            <img src={logo}/>
          </div>
          <div className='sidebar_nav_links_wrapper'>
            <NavLink>Home</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Courses</NavLink>
            <NavLink>Contact</NavLink>
          </div>
          <div className='contact_us_sidebar'>
            <p>Contact Us</p>
            <div className='mail_div'>
            <i class="fa-solid fa-envelope"></i>
            <p>loremIpsum@gmail.com</p>
            </div>
            <div className='mail_div'>
            <i class="fa-solid fa-phone-volume"></i>
            <p>096474 42941
</p>
            </div>
            <div className='mail_div' style={{
              marginTop:"35px"
            }}>
            <i class="fa-brands fa-threads"></i>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-whatsapp"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
