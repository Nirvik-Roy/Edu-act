import React, { useEffect } from 'react'
import img from '../../assets/images/course/course-detail-2.jpg'
import img2 from '../../assets/images/course/author-7.png'
import CourseTabs from './CourseTabs'
import CourseFeatures from './CourseFeatures'
import CourseLatest from './CourseLAtest'
const CourseDetails = () => {
  useEffect(()=>{
window.scrollTo({top:0,behavior:'instant'})
  },[])
  return (
    <>
        <div className='course_banner'>
        <h1>WEB DEVELOPMENT</h1>
        <h4>Home / Course</h4>
      </div>
<div style={{
  background:'white'
}}>
<div className='couser_details_wrapper universal_container'>
          <div className='course_details_left'>
            <div className='course_details_img'>
                <img src={img}/>
            </div>
            <div className='course_seller_wrapper'>
                <div className='course_seller_div5682'>
                    <div className='course_img_div8953'>
                        <img src={img2}/>
                    </div>
                    <div className='course_details7898'>
                        <h1>Guy Hawkins</h1>
                        <p>Project Manager</p>
                    </div>
                    <div className='course_rating_wrapper56520'>
                        <button>Development</button>
                        <div className='rating_inside_wrapper525'>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <p>(25 Reviews)</p>
                        </div>
                    </div>
                </div>
                <p className='course_price8985'>$473.00</p>
            </div>
            <h1 className='course_heading_8985'>The Ultimate Developer Course For Future Learner</h1>
            <CourseTabs/>
          </div>
          <div className='course_details_right'>

            <CourseFeatures/>
     <CourseLatest/>
          </div>
      </div>
</div>
      
    </>
  )
}

export default CourseDetails
