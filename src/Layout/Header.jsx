import React from 'react'
import logo from '../assets/images/logo-two.png'
const Header = () => {
  return (
    <>
      <nav className='nav_wrapper'>
        <div className='universal_container nav_links_wrapper_div'>
            <div className='nav_logo_wrapper'>
                <img src={logo}/>
            </div>
            <div className='nav_links_wrapper'>
                <p>Home</p>
                <p>Pages</p>
                <p>About</p>
                <p>Courses</p>
                <p>Contact</p>
                <div className='maginfy_wrapper'>
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
