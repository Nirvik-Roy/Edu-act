import React from 'react'
import HomeAbout from '../Home/HomeAbout'
import HomeCounter from '../Home/HomeCounter'
import BestCourse from '../Home/BestCourse'
import Testimonial from '../Home/Testimonial'
import OurTeam from '../Home/OurTeam'

const About = () => {
  return (
    <>
       <div className='course_banner'>
        <h1>About</h1>
        <h4>Home / About</h4>
      </div>
      <HomeAbout/>
      <HomeCounter/>
      <BestCourse/>
      <Testimonial/>
      <OurTeam/>
    </>
  )
}

export default About
