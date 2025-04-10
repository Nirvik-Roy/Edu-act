import React from 'react'
import './Home.css'
import img from '../../assets/images/resources/about-2-2.jpg'
import img2 from '../../assets/images/resources/about-2-1.jpg'
const HomeAbout = () => {
  return (
    <>
       <div className='universal_container' style={{
        paddingTop:'100px',
        paddingBottom:'80px'
       }}>
        <div className='about_wrapper'>
            <div className='about_left'>
                <div className='about_img'>
                    <img src={img}/>
                </div>
                <div className='about_img2'>
                    <img src={img2}/>
                </div>
            </div>
            <div className='about_right'>
                <h2  className='arrow_head_text'>About Us <svg class="arrow-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 13">
                                        <g clip-path="url(#clip0_324_36194)">
                                            <path d="M10.5406 6.49995L0.700562 12.1799V8.56995L4.29056 6.49995L0.700562 4.42995V0.819946L10.5406 6.49995Z"></path>
                                            <path d="M25.1706 6.49995L15.3306 12.1799V8.56995L18.9206 6.49995L15.3306 4.42995V0.819946L25.1706 6.49995Z"></path>
                                            <path d="M39.7906 6.49995L29.9506 12.1799V8.56995L33.5406 6.49995L29.9506 4.42995V0.819946L39.7906 6.49995Z"></path>
                                            <path d="M54.4206 6.49995L44.5806 12.1799V8.56995L48.1706 6.49995L44.5806 4.42995V0.819946L54.4206 6.49995Z"></path>
                                        </g>
                                    </svg></h2>

                                    <h1>Establishing a Community that Encourages Lifelong Learning</h1>
                                    <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks</p>

                                    <div className='flexible_classes_wrapper'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 295 125">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M86 0.0805664H58C25.9675 0.0805664 0 26.048 0 58.0806V79.5806C0 104.157 19.9233 124.081 44.5 124.081H46.5C69.9721 124.081 89 105.053 89 81.5806C89 58.1085 108.028 39.0806 131.5 39.0806H268C282.912 39.0806 295 26.9923 295 12.0806C295 5.45315 289.627 0.0805664 283 0.0805664H89H86Z"></path>
                                </svg>
                                <i class="fa-solid fa-person-chalkboard fa-beat"></i>
                                    <div className='flexible_para_div'>
                                    <h1>Flexible Classes</h1>
                                    <p>The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                                    </div>
                                     
                                    </div>

                                    <ul className='content_list_wrapper'>
                                        <li>
                                        <i class="fa-solid fa-circle-check"></i>
                                        Free Incoming method
                                        </li>

                                        <li>
                                        <i class="fa-solid fa-circle-check"></i>
                                        Provide Best Support
                                        </li>

                                        <li>
                                        <i class="fa-solid fa-circle-check"></i>
                                        Expert Many Teacher
                                        </li>

                                        <li>
                                        <i class="fa-solid fa-circle-check"></i>
                                        Lifetime access
                                        </li>
                                    </ul>

                                    <div style={{
                                        background:'rgb(112, 123, 231)'
                                    }} className='banner_button banner_button2'><p style={{
                                        color:'white',
                                        fontSize:'17px',
                                        marginTop:'0px',
                                        marginBottom:'0px'
                                    }}>Discover More </p><i class="fa-solid fa-arrow-right"></i></div>   

            </div>
        </div>
       </div>
    </>
  )
}

export default HomeAbout
