import React from 'react'
import img2 from '../../assets/images/course/author-1.png'
import img from '../../assets/images/blog/blog-2-1.jpg'
import img3 from '../../assets/images/blog/blog-2-2.jpg'
import img4 from '../../assets/images/blog/blog-2-3.jpg'
const BlogCard = () => {
  return (
    <>
    {[img,img3,img4].map((e,i)=>{
        return (
            <>
            <div className='blog_card' key={i}>
            
        <div className='blog_card_img'>
            <img src={e}/>
            <div className='blog_card_overlay'>
            <i class="fa-solid fa-plus"></i>
            </div>
        </div>
        <div className='blog_card_details_div'>
            <div className='blog_details_head_wrapper'>
                <p>Development</p>
                <h5>26 Mar, 2023</h5>
            </div>
            <h2>The Complete Web Developer Guideline 2023</h2>

             <div className='tutor_details_wrapper' style={{
                background:'none',
                marginTop:'15px'
             }}>
                                                    <div className='tutor_div'>
                                                        <div className='tutor_img_div'>
                                                           <img src={img2}/>
                                                        </div>
                                                        <div className='tutor_details_div'>
                                                        <h6>Guy Hawkins</h6>
                                                        <p>PROJECT MANAGER</p>
                                                        </div>
                                                    </div>
                                                    <div className='blog_small_circle'>
                                                    <i class="fa-solid fa-arrow-right black_arrow"></i>
                                                    <i class="white_arrow fa-solid fa-arrow-right"></i>
                                                    </div>
                                                </div>
        </div>
      </div>
            </>
        )
    })}
      
    </>
  )
}

export default BlogCard
