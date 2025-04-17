import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
const CourseOverview = () => {
   useEffect(() => {
                  AOS.init({
                    duration: 1000, // animation duration in ms
                    once: true,     // whether animation should happen only once
                  });
                }, []);
  return (
    <>
      <p className='overview_para' data-aos='fade-up'>Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. 
      Nam nec eros id magna hendrerit sagittis. 
      Nullam sed mi non odio feugiat volutpat sit amet nec elit. 
      Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor. 
      Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. 
    <br/>
    <br/>
      Himenaeos. Vestibulum sollicitudin varius mauris non dignissim. 
      Sed quis iaculis est. Nulla quam neque, interdum vitae fermentum lacinia, 
      interdum eu magna. Mauris non posuere tellus. 
      Donec quis euismod tellus. 
      Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. 
      Nam nec eros id magna hendrerit sagittis. 
      Nullam sed mi non odio feugiat volutpat sit amet nec elit. 
      Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolo
      <br/>
      <br/>

      Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. 
      Nam nec eros id magna hendrerit sagittis. 
      Nullam sed mi non odio feugiat volutpat sit amet nec elit. 
      Maecenas id hendrerit ipsum. 
      Sed eget auctor metus, ac dapibus dolor. 
      Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh.
      </p>

<div className='overview_list' data-aos='fade-up'>
    <div className='overview_1'>
    <i class="fa-solid fa-circle-check"></i>
    <p>Nam at elit nec neque suscipit gravida.</p>
    </div>

    <div className='overview_1'>
    <i class="fa-solid fa-circle-check"></i>
    <p>Aenean egestas orci eu maximus tincidunt.</p>
    </div>

    <div className='overview_1'>
    <i class="fa-solid fa-circle-check"></i>
    <p>Curabitur vel turpis id tellus cursus laoreet.</p>
    </div>
</div>
    </>
  )
}

export default CourseOverview
