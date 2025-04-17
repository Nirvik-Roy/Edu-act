import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
const CourseCurriculum = () => {
     useEffect(() => {
                AOS.init({
                  duration: 1000, // animation duration in ms
                  once: true,     // whether animation should happen only once
                });
              }, []);
  return (
    <>
      <div className='course_curriculum_wrapper' data-aos='fade-up'>
        <h2>Starting Beginners Level Course</h2>
        <p className='course_para8985746'>Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor. Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh.</p>
        <div className='course_editing_curriculum_wrapper'>
        <div className='course_edit'>
        <div className='course_editing_wrapper'>
                <div className='course_play_button'>
                <i class="fa-solid fa-play"></i>
                </div>
                <h5>Introduction of Editing</h5>
            </div>
            <p>Preview</p>
        </div>

           <p className='course_video_time_para'>10 Minutes</p> 
        </div> 


        <div className='course_editing_curriculum_wrapper'>
        <div className='course_edit'>
        <div className='course_editing_wrapper'>
                <div className='course_play_button'>
                <i class="fa-solid fa-play"></i>
                </div>
                <h5>Overview of Editing</h5>
            </div>
            <p>Preview</p>
        </div>

           <p className='course_video_time_para'>10 Minutes</p> 
        </div> 


        <div className='course_editing_curriculum_wrapper'>
        <div className='course_edit'>
        <div className='course_editing_wrapper'>
        <i class="fa-solid fa-folder-open" style={{
            fontSize:'30px',
            color:'rgb(240, 113, 28)'
        }}></i>
                <h5>
                Basic Editing Technology</h5>
            </div>
       
        </div>

       
        </div> 


        <div className='course_editing_curriculum_wrapper'>
        <div className='course_edit'>
        <div className='course_editing_wrapper'>
        <i class="fa-regular fa-lightbulb" style={{
            fontSize:'30px',
            color:'rgb(240, 113, 28)'
        }}></i>
                <h5>Quiz</h5>
            </div>
          
        </div>

           <p className='course_video_time_para'>6 Questions</p> 
        </div> 
      </div>

      <div className='course_curriculum_wrapper' data-aos='fade-up'>
        <h2>Intermediate Level Course</h2>
        <p className='course_para8985746'>Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor. Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh.</p>
        <div className='course_editing_curriculum_wrapper'>
        <div className='course_edit'>
        <div className='course_editing_wrapper'>
                <div className='course_play_button'>
                <i class="fa-solid fa-play"></i>
                </div>
                <h5>Introduction of Editing</h5>
            </div>
            <p>Preview</p>
        </div>

           <p className='course_video_time_para'>10 Minutes</p> 
        </div> 


        <div className='course_editing_curriculum_wrapper'>
        <div className='course_edit'>
        <div className='course_editing_wrapper'>
        <i class="fa-solid fa-folder-open" style={{
            fontSize:'30px',
            color:'rgb(240, 113, 28)'
        }}></i>
                <h5>
                Basic Editing Technology</h5>
            </div>
       
        </div>

       
        </div> 


        <div className='course_editing_curriculum_wrapper'>
        <div className='course_edit'>
        <div className='course_editing_wrapper'>
        <i class="fa-regular fa-lightbulb" style={{
            fontSize:'30px',
            color:'rgb(240, 113, 28)'
        }}></i>
                <h5>Quiz</h5>
            </div>
          
        </div>

           <p className='course_video_time_para'>6 Questions</p> 
        </div> 
      </div>
    </>
  )
}

export default CourseCurriculum
