import React from 'react'

const CourseFeatures = () => {
  return (
    <>
      <div className='course_features_wrapper'>
        <h3>Course Features
</h3>
<div className='course_features_divs_wrapper'>
    <div className='course_feature_div'>
    <i class="fa-solid fa-clock-rotate-left fa-flip-horizontal"></i>
    <p>Duration:</p>
    </div>
    <h5>20 Hours</h5>
</div>




<div className='course_features_divs_wrapper'>
    <div className='course_feature_div'>
    <i class="fa-solid fa-book"></i>
    <p>Lessons:</p>
    </div>
    <h5>15</h5>
</div>


<div className='course_features_divs_wrapper'>
    <div className='course_feature_div'>
    <i class="fa-solid fa-book"></i>
    <p>Students:</p>
    </div>
    <h5>Max 15</h5>
</div>






<div className='course_features_divs_wrapper'>
    <div className='course_feature_div'>
    <i class="fa-regular fa-circle-play"></i>
    <p>Videos</p>
    </div>
    <h5>10 Hours</h5>
</div>



<div className='course_features_divs_wrapper'>
    <div className='course_feature_div'>
    <i class="fa-regular fa-lightbulb"></i>
    <p>Skills Level</p>
    </div>
    <h5>Advanced</h5>
</div>


<div className='course_features_divs_wrapper'>
    <div className='course_feature_div'>
    <i class="fa-solid fa-language"></i>
    <p>Language</p>
    </div>
    <h5>English</h5>
</div>

<div className='banner_button' style={{
    width:'100%',
    display:'flex',
    justifyContent:'center',
    marginTop:'30px'
}}><p>Buy This Course </p><i class="fa-solid fa-arrow-right"></i></div>  
      </div>
    </>
  )
}

export default CourseFeatures
