import React from 'react'
import './Home.css'
import Banner from './Banner'
import HomeAbout from './HomeAbout'
import HomeService from './HomeService'
import HomeCounter from './HomeCounter'
import BestCourse from './BestCourse'
import HomeCategories from './HomeCategories'
import HomeDiscover from './HomeDiscover'
import OurTeam from './OurTeam'
import Brand from './Brand'
import Testimonial from './Testimonial'
import Blog from './Blog'
const Home = () => {
  return (
    <>
      <Banner/>
      <HomeAbout/>
      <HomeService/>
      <HomeCounter/>
      <BestCourse/>
      <HomeCategories/>
      <HomeDiscover/>
      <OurTeam/>
      <Brand/>
      <Testimonial/>
      <Blog/>
    </>
  )
}

export default Home
