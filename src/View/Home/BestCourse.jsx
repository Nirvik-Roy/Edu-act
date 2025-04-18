import React,{useEffect} from 'react'
import img from '../../assets/images/course/course-2-1.png'
import img2 from '../../assets/images/course/author-1.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
const BestCourse = () => {
    const PrevArrow = ({onClick}) =>{
        return(
            <i onClick={onClick} class="fa-solid fa-arrow-right previous_arrow"></i>
        )

    }
    const NextArrow = ({onClick}) =>{
        return(
            <i onClick={onClick} class="fa-solid fa-arrow-left next_arrow"></i>
        )

    }
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:true,
        autoplay:true,
        autoplaySpeed:1000,
        prevArrow:<PrevArrow/>,
        nextArrow:<NextArrow/>,
        responsive: [
            {
              breakpoint: 1099,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
               
              }
            },
            {
                breakpoint: 799,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                 
                }
              },
        ]
      };
         useEffect(() => {
                  AOS.init({
                    duration: 1000, // animation duration in ms
                    once: true,     // whether animation should happen only once
                  });
            }, []);
  return (
    <>
      <div data-aos='fade-up' className='universal_container best_course_wrapper'>
      <h2 className='arrow_head_text'>Best Course <svg class="arrow-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 13">
                                        <g clip-path="url(#clip0_324_36194)">
                                            <path d="M10.5406 6.49995L0.700562 12.1799V8.56995L4.29056 6.49995L0.700562 4.42995V0.819946L10.5406 6.49995Z"></path>
                                            <path d="M25.1706 6.49995L15.3306 12.1799V8.56995L18.9206 6.49995L15.3306 4.42995V0.819946L25.1706 6.49995Z"></path>
                                            <path d="M39.7906 6.49995L29.9506 12.1799V8.56995L33.5406 6.49995L29.9506 4.42995V0.819946L39.7906 6.49995Z"></path>
                                            <path d="M54.4206 6.49995L44.5806 12.1799V8.56995L48.1706 6.49995L44.5806 4.42995V0.819946L54.4206 6.49995Z"></path>
                                        </g>
                                    </svg></h2>
                                    <h1>Featured Course On This Month</h1>

                                    <div className='featured_course_wrapper' style={{
                                        position:'relative'
                                    }}>
                                    <Slider {...settings}>
                                    {[1,2,3].map((e,i)=>(
                                        <div className='featured_course_div'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 353 177">
                                    <path d="M37 0C16.5655 0 0 16.5655 0 37V93.4816C0 103.547 4.00259 113.295 11.7361 119.737C54.2735 155.171 112.403 177 176.496 177C240.589 177 298.718 155.171 341.261 119.737C348.996 113.295 353 103.546 353 93.4795V37C353 16.5655 336.435 0 316 0H37Z"></path>
                                </svg>
                                <div className='feature_img_div'>
                                    <img src={img}/>
                                    <div className='circle_div'>
                                    <i class="fa-regular fa-heart"></i>
                                    </div>
                                </div>
                                <div className='course_content_div'>
                                    <h5>20 Hours</h5>
                                    <div className='rating_div_wrapper'>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <p>(25 Reviews)</p>
                                    </div>
                                    <h3>The Special HTML & CSS Bootcamp Edition</h3>

                                    <div className='tutor_details_wrapper'>
                                        <div className='tutor_div'>
                                            <div className='tutor_img_div'>
                                               <img src={img2}/>
                                            </div>
                                            <div className='tutor_details_div'>
                                            <h6>Guy Hawkins</h6>
                                            <p>PROJECT MANAGER</p>
                                            </div>
                                        </div>
                                        <div className='tutor_price' style={{
                                            marginLeft:'auto'
                                        }}>
                                        <h6>$473.00</h6>
                                        <p>15 LESSONS</p>
                                        </div>
                                    </div>
                                </div>

                                        </div>
                                    ))}
                                    </Slider>
                                  
                                       
                                    </div>
      </div> 
    </>
  )
}

export default BestCourse
