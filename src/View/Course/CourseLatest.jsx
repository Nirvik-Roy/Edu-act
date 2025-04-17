import React from 'react'
import img from '../../assets/images/course/lc-3.jpg'
import img2 from '../../assets/images/course/lc-2.jpg'
import img3 from '../../assets/images/course/lc-1.jpg'
const CourseLatest = () => {
  return (
    <>
      <div  className='course_features_wrapper'>
      <h3>Latest Course
</h3>
{[img3,img2,img].map((e,i)=>{
    return (
        <>
        <div className='latest_course_div'>
    <div className='latest_course_img'>
        <img src={e}/>
    </div>
    <div className='latest_course_details'>
        <h5>By <span>Robert Fox</span></h5>
        <h2>The Complete Web......</h2>
        <div className='rating_course_div'>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <p>4.8(30)</p>
    </div>
    </div>
    
</div>
        </>
    )
})}

      </div>
    </>
  )
}

export default CourseLatest
