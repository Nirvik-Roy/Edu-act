import React,{useEffect} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
const HomeCategories = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000,
  };
   useEffect(() => {
                    AOS.init({
                      duration: 1000, // animation duration in ms
                      once: true,     // whether animation should happen only once
                    });
              }, []);
  return (
    <>
      <div className='home_categories_wrapper'>
        <h3 data-aos='fade-up'>Our Categories</h3>
        <h1 data-aos='fade-up'>Favorite Topics To Learn</h1>
        <div data-aos='fade-up' className='universal_container fav_topics_wrapper'>
<Slider {...settings}>
<div className='fab_topic_div'>
<div style={{
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  flexDirection:'column',
    height:"100%"
}}>
            <i class="fa-solid fa-business-time"></i>
            <p>Business <br/> Management</p>
            </div>
</div>

<div className='fab_topic_div'> 
<div style={{
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  flexDirection:'column',
    height:"100%"
}} >
            <i class="fa-solid fa-computer"></i>
            <p>Computer<br/> Science</p>
            </div>
</div>
          
          <div className='fab_topic_div'>
          <div style={{
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  flexDirection:'column',
    height:"100%"
  
}} >
            <i class="fa-solid fa-stairs"></i>
            <p>Personal<br/> Development</p>
            </div>
          </div>
          
<div className='fab_topic_div'>
<div style={{
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  flexDirection:'column',
  height:"100%"
}} >
            <i class="fa-solid fa-palette"></i>
            <p>Art And<br/> Design</p>
            </div>
</div>
           
</Slider>
           

            
        </div>
      </div>
    </>
  )
}

export default HomeCategories
