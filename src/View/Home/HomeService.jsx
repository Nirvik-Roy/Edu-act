import React,{useEffect} from 'react'
import './Home.css'
import AOS from "aos";
import "aos/dist/aos.css";
const HomeService = () => {
      useEffect(() => {
          AOS.init({
            duration: 1000, // animation duration in ms
            once: true,     // whether animation should happen only once
          });
        }, []);
  return (
    <>
      <div className='home_service_wrapper'>
        <h2 className='arrow_head_text' style={{
            textAlign:'center',
           
        }}>Our Service <svg class="arrow-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 13">
                                        <g clip-path="url(#clip0_324_36194)">
                                            <path d="M10.5406 6.49995L0.700562 12.1799V8.56995L4.29056 6.49995L0.700562 4.42995V0.819946L10.5406 6.49995Z"></path>
                                            <path d="M25.1706 6.49995L15.3306 12.1799V8.56995L18.9206 6.49995L15.3306 4.42995V0.819946L25.1706 6.49995Z"></path>
                                            <path d="M39.7906 6.49995L29.9506 12.1799V8.56995L33.5406 6.49995L29.9506 4.42995V0.819946L39.7906 6.49995Z"></path>
                                            <path d="M54.4206 6.49995L44.5806 12.1799V8.56995L48.1706 6.49995L44.5806 4.42995V0.819946L54.4206 6.49995Z"></path>
                                        </g>
                                    </svg></h2>

                                    <h1>Creating a Lifelong Learning <br/>
                                    Best Community</h1>
                                    
                                    <div className='service_card_div_wrapper'>
                                    {[1,2,3,4].map((e,i)=>{
                                        return (
                                            <>
                                            <div data-aos='fade-up' data-aos-delay={i * 100} className='service_card'>
                                           
                                        <div className='service-two__icon'>
                                        {i === 0 ? <i class="fa-solid fa-book"></i> : i===1 ? <i class="fa-regular fa-lightbulb"></i> : i ===2 ? <i class="fa-solid fa-laptop"></i> : i===3 ? <i class="fa-solid fa-atom"></i> : ''}
                                        </div>
                                        <svg viewBox="0 0 303 117" fill="#F6F6F6" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="151" cy="-129" r="246"></circle>
                                </svg>

                                <h3>{ i === 0 ? 'Exclusive Coach' : i=== 1 ? 'Creative Minds' : i === 2 ? 'Video Tutorials' : i===3 ? 'Worlds Record' : ''}</h3>
                                <div className='para_div'>
                                <p>Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id hendrerit</p>
                                </div>
                              <div className='hr_line'></div>
                              <h4>Read More <i class="fa-solid fa-greater-than"></i></h4>
                                        </div>
                                            </>
                                        )
                                    })}
                                       
                                     
                                    </div>
      </div>
    </>
  )
}

export default HomeService
