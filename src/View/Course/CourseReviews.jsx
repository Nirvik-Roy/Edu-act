import React,{useEffect} from 'react'
import './Course.css'
import reviewimg from '../../assets/images/team/team-1-3.jpg'
import img2 from '../../assets/images/team/team-2-1.jpg'
import AddReviewForm from './AddReviewForm'
import AOS from "aos";
import "aos/dist/aos.css";
const CourseReviews = () => {
     useEffect(() => {
                      AOS.init({
                        duration: 1000, // animation duration in ms
                        once: true,     // whether animation should happen only once
                      });
                    }, []);
    return (
        <>
            <div className='course_review_wrapper5685' data-aos='fade-up'>
                <h2>2 Reviews</h2>
                {[reviewimg,img2].map((e,i)=>{
                    return(
                        <>
                        <div className='review_div_wrapper'>
                    <div className='review_client_img'>
                        <img src={e}/>
                    </div>
                    <div className='review_all_info_wrapper'>
                    <div className='review_client_name_and_rating_wrapper'>
                    <h3>David Shon</h3>
                    <div className='review_rating_div565289'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
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
                })}
                <AddReviewForm/>
            </div>

        </>
    )
}

export default CourseReviews
