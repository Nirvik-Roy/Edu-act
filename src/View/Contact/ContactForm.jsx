import React from 'react'
import './Contact.css'
const ContactForm = () => {
  return (
    <>
      <div className='contact_wrapper'>
      <h2  className='arrow_head_text' style={{
        textAlign:'center'
      }}>Contact with Us  <svg class="arrow-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 13">
                                        <g clip-path="url(#clip0_324_36194)">
                                            <path d="M10.5406 6.49995L0.700562 12.1799V8.56995L4.29056 6.49995L0.700562 4.42995V0.819946L10.5406 6.49995Z"></path>
                                            <path d="M25.1706 6.49995L15.3306 12.1799V8.56995L18.9206 6.49995L15.3306 4.42995V0.819946L25.1706 6.49995Z"></path>
                                            <path d="M39.7906 6.49995L29.9506 12.1799V8.56995L33.5406 6.49995L29.9506 4.42995V0.819946L39.7906 6.49995Z"></path>
                                            <path d="M54.4206 6.49995L44.5806 12.1799V8.56995L48.1706 6.49995L44.5806 4.42995V0.819946L54.4206 6.49995Z"></path>
                                        </g>
                                    </svg></h2>
                                    <h1 style={{
                                        textAlign:'center',
                                        fontWeight:600,
                                    }}>Feel Free to Write us Anytime</h1>
                                    
                                    <form className='contact_form_main'>
                                        <div className='review_form_input_div '>
                                            <input type='text' placeholder='Your Name'/>
                                        </div>
                                        <div className='review_form_input_div '>
                                            <input type='text' placeholder='Email Address'/>
                                        </div>
                                        <div className='review_form_input_div_2 '>
                                            <textarea placeholder='Write a Message'/>
                                        </div>
                                    </form>
                                    <div className='banner_button' style={{
                                        marginInline:'auto'
                                    }}><p>Send a Message </p><i class="fa-solid fa-arrow-right"></i></div>

                                    <div className='contact_map_wrapper'>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29065.53912271488!2d85.9624578444328!3d24.409382886411883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f3eba5427e4fff%3A0xd77cd0cc711de8f0!2sRajdhanwar%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1744884077854!5m2!1sen!2sin" width="100%" height="100%"  allowfullscreen="true" loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade"/>
                                    </div>   
      </div>
    </>
  )
}

export default ContactForm
