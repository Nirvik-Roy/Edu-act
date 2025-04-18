import React,{useEffect} from 'react'
import CourseBanner from './CourseBanner'
import img from '../../assets/images/course/course-2-1.png'
import img2 from '../../assets/images/course/author-1.png'
import {useNavigate} from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";
const Course = () => {
    const navigate = useNavigate()
      useEffect(() => {
                      AOS.init({
                        duration: 1000, // animation duration in ms
                        once: true,     // whether animation should happen only once
                      });
                }, []);
  return (
    <>
      <CourseBanner/>
<div className='universal_container'>
<div className='featured_course_wrapper2' style={{
    marginBottom:'150px'
}}>
                                          {[1,2,3,4,5,6].map((e,i)=>(
                                              <div data-aos='fade-up' data-aos-delay={i * 100} className='featured_course_div2'>
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
                                          <h3 onClick={(()=>navigate('/course-details'))}>The Special HTML & CSS Bootcamp Edition</h3>
      
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
                                              <div className='tutor_price'>
                                              <h6>$473.00</h6>
                                              <p>15 LESSONS</p>
                                              </div>
                                          </div>
                                      </div>
      
                                              </div>
                                          ))}
                                             
                                          </div>
</div>

    </>
  )
}

export default Course
