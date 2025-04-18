import React ,{useRef,useState,useEffect}from 'react'
import img2 from '../../assets/images/course/author-1.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination,Autoplay, Navigation } from 'swiper/modules';
const TestimonialCard = () => {
      const NextArrow = () =>{
        return(
            <button ><i class="fa-solid fa-arrow-left"></i></button>
        )
      }
    return (
        <>
          <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        speed={1000}
        modules={[Autoplay,Navigation]}
        autoplay={{
        delay: 2500, // 2.5 seconds
        disableOnInteraction: false,
        
      }}
      breakpoints={{
       320:{
        slidesPerView:1,
        spaceBetween:0,
       },
       480:{
        slidesPerView:1,
        spaceBetween:0,
       },
       768:{
        slidesPerView:1,
        spaceBetween:0,
       },
       999:{
        slidesPerView:1,
        spaceBetween:0,
       },
       1000:{
        slidesPerView:3,
       },
       1299:{
        slidesPerView:3,
        
       },
       1500:{
        slidesPerView:3,
       },
      }}
      
  
      
      >

{[1,2,3,4,5,6].map((e,i)=>(
            <SwiperSlide>
            <div className= 'testimonial_card_1'>
                <div className='testimonial_rating_wrapper'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>

                <p>
                    Flexible Classes refers to the process of acquiring knowledge or skills through the use of digital technologies and the internet
                </p>

                <div className='tutor_div' style={{
                    marginTop:'15px'
                }}>
                    <div className='tutor_img_div'>
                        <img src={img2} />
                    </div>
                    <div className='tutor_details_div'>
                        <h2>Guy Hawkins</h2>
                        <h3>PROJECT MANAGER</h3>
                    </div>
                </div>
                <svg viewBox="0 0 416 249" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_324_36064)">
                        <path d="M296.443 526.351C291.626 517.219 286.22 508.4 280.351 499.907C274.064 490.803 267.257 482.07 260.072 473.662C252.166 464.412 243.802 455.551 235.132 447.015C225.525 437.563 215.537 428.493 205.305 419.728C193.907 409.977 182.21 400.591 170.293 391.477C157.025 381.325 143.506 371.508 129.809 361.934C114.574 351.278 99.1373 340.919 83.5681 330.773C66.2815 319.506 48.8344 308.493 31.2774 297.659C11.8453 285.67 -7.71089 273.899 -27.3627 262.269C-49.0253 249.452 -70.8004 236.801 -92.632 224.268C-112.751 212.719 -132.553 200.599 -151.773 187.605C-167.672 176.859 -183.186 165.529 -198.079 153.411C-210.223 143.528 -221.954 133.126 -233.015 122.043C-242.024 113.01 -250.588 103.518 -258.425 93.4561C-264.651 85.4701 -270.424 77.1028 -275.483 68.3262C-279.503 61.3457 -283.079 54.0865 -285.969 46.5676C-288.192 40.7857 -290.021 34.8356 -291.27 28.7606C-292.209 24.2029 -292.822 19.5763 -292.986 14.9289C-293.101 11.7908 -293.016 8.64358 -292.628 5.53246C-292.424 3.91736 -292.165 2.29171 -291.728 0.72597C-291.679 0.529505 -291.617 0.330416 -291.559 0.139576C-291.56 1.6512 -291.422 3.17245 -291.258 4.67452C-290.799 8.90587 -289.976 13.0825 -288.939 17.2111C-287.309 23.703 -285.103 30.0422 -282.479 36.194C-278.927 44.5375 -274.604 52.5471 -269.706 60.1738C-263.507 69.8349 -256.393 78.8972 -248.649 87.3719C-238.942 97.9926 -228.245 107.691 -216.918 116.571C-203.009 127.487 -188.159 137.18 -172.79 145.896C-153.752 156.686 -133.883 165.972 -113.594 174.141C-88.9088 184.08 -63.5671 192.361 -37.9282 199.441C-11.3405 206.779 15.589 212.887 42.7613 217.66C67.4471 221.999 92.326 225.272 117.29 227.514C141.053 229.653 164.9 230.869 188.764 231.226C211.313 231.559 233.873 231.113 256.392 229.925C277.174 228.838 297.929 227.116 318.614 224.801C337.536 222.679 356.4 220.056 375.184 216.945C391.68 214.211 408.11 211.094 424.452 207.59C438.374 204.605 452.242 201.341 466.025 197.777C476.913 194.966 487.745 191.97 498.512 188.749C506.072 186.491 513.591 184.133 521.068 181.624C524.972 180.313 528.87 178.974 532.737 177.541C533.207 177.365 533.677 177.189 534.148 177.014L296.443 526.351Z"></path>
                    </g>
                </svg>
            </div>
            </SwiperSlide>
           
        ))}
      </Swiper>
        

     {/* <div className='swiper_slider_button_wrapper'>
        <button ref={prevRef}><i class="fa-solid fa-arrow-left"></i></button>
        <button ref={nextRef}><i class="fa-solid fa-arrow-right"></i></button>
     </div> */}
      
            
        </>
    )
}

export default TestimonialCard
