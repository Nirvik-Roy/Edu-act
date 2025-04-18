import React from 'react'
import img from '../../assets/images/brand/brand-1-1.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Brand = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    autoplaySpeed:1000,
    responsive: [
      {
        breakpoint: 699,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
         
        }
      },
      {
        breakpoint: 499,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
         
        }
      },
    ]
  };
  return (
    <>
    <div style={{
        background:'white'
    }}>
    <div className='universal_container brand_wrapper'>
    <div style={{
      marginInline:'auto'
    }}>
    <Slider {...settings}>
    {[1,2,3,4,5].map((e,i)=>(
        <div className='brand_img_div'>
                <img src={img}/>
               </div>
      ))}
    </Slider>
    </div>

   
               
      </div>
    </div>
    
    </>
  )
}

export default Brand
