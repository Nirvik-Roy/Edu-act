import React,{useEffect} from 'react'
import img2 from '../../assets/images/team/team-2-1.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
const CourseInstructor = () => {
      useEffect(() => {
                          AOS.init({
                            duration: 1000, // animation duration in ms
                            once: true,     // whether animation should happen only once
                          });
                        }, []);
  return (
    <>
        <div className='review_div_wrapper' data-aos='fade-up'>
                    <div className='review_client_img'>
                        <img src={img2}/>
                    </div>
                    <div className='review_all_info_wrapper'>
                    <div className='review_client_name_and_rating_wrapper'>
                    <div>
                    <h3 style={{
                        marginBottom:'-5px'
                    }}>David Shon</h3>
                    <p style={{
                        textTransform:'uppercase',
                        color:'grey',
                        fontSize:'11px',
                        fontWeight:'400'
                    }}>PROJECT MANAGER</p>
                    </div>
                  
                   
                    </div>
                       

                        <p>Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh.
                     Nam nec eros id magna hendrerit sagittis. 
                     Nullam sed mi non odio feugiat volutpat sit amet nec elit. 
                     Maecenas id hendrerit ipsum. Sed eget auctor metus, 
                     ac dapibus dolor.</p>
                    </div>
                  
                </div>
    </>
  )
}

export default CourseInstructor
