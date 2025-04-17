import React, { useEffect } from 'react'
import BlogCard from './BlogCard'
import AOS from "aos";
import "aos/dist/aos.css";
const Blog = () => {
    useEffect(() => {
              AOS.init({
                duration: 1000, // animation duration in ms
                once: true,     // whether animation should happen only once
              });
            }, []);
  return (
    <>
    <div data-aos='fade-up' style={{
        background:'white'
    }}>
 <div className='universal_container blog_wrapper'>
     <h2 className='arrow_head_text' style={{
        textAlign:'center',
        marginTop:'0px'
      }}>Latest Blog <svg class="arrow-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 13">
                                        <g clip-path="url(#clip0_324_36194)">
                                            <path d="M10.5406 6.49995L0.700562 12.1799V8.56995L4.29056 6.49995L0.700562 4.42995V0.819946L10.5406 6.49995Z"></path>
                                            <path d="M25.1706 6.49995L15.3306 12.1799V8.56995L18.9206 6.49995L15.3306 4.42995V0.819946L25.1706 6.49995Z"></path>
                                            <path d="M39.7906 6.49995L29.9506 12.1799V8.56995L33.5406 6.49995L29.9506 4.42995V0.819946L39.7906 6.49995Z"></path>
                                            <path d="M54.4206 6.49995L44.5806 12.1799V8.56995L48.1706 6.49995L44.5806 4.42995V0.819946L54.4206 6.49995Z"></path>
                                        </g>
                                    </svg></h2>
                                    <h1>Latest Updates & Articles</h1>

                                    <div className='blog_cards_wrapper'>
                                        <BlogCard/>
                                    </div>
     </div> 
    </div>
    
    </>
  )
}

export default Blog
