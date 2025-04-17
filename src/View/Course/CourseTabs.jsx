import React, { useState } from 'react'
import './Course.css'
import CourseCurriculum from './CourseCurriculum'
import CourseReviews from './CourseReviews'
import CourseInstructor from './CourseInstructor'
import CourseOverview from './CourseOverview'
const CourseTabs = () => {
    const [toggle,setoggle]=useState({
        toggle1:false,
        toggle2:true,
        toggle3:false,
        toggle4:false,
    })
    const Togglefuntion = (i) =>{
      setoggle({
        toggle1:i === 1 ? true:false,
        toggle2:i === 2 ? true:false,
        toggle3:i === 3 ? true:false,
        toggle4:i === 4 ? true:false,
      })
    }
  return (
    <>
      <div className='course_tabs_wrapper'>
        <div className={toggle.toggle1 ? 'overview_button_active':'overview_button'} onClick={(()=>Togglefuntion(1))}><p>Overview</p></div>
        <div className={toggle.toggle2 ? 'overview_button_active':'overview_button'} onClick={(()=>Togglefuntion(2))}><p>Curriculum</p></div>
        <div className={toggle.toggle3 ? 'overview_button_active':'overview_button'} onClick={(()=>Togglefuntion(3))}><p>Reviews</p></div>
        <div className={toggle.toggle4 ? 'overview_button_active':'overview_button'} onClick={(()=>Togglefuntion(4))}><p>Instructor</p></div>
      </div>
     { toggle.toggle2 && <CourseCurriculum/>}
     {toggle.toggle3 && <CourseReviews/>}
     {toggle.toggle4 && <CourseInstructor/>}
     {toggle.toggle1 && <CourseOverview/>}
    </>
  )
}

export default CourseTabs
