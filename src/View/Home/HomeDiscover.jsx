import React from 'react'
import img from '../../assets/images/backgrounds/video-btn-bg-1.png'
const HomeDiscover = () => {
  return (
    <>
      <div className='universal_container discover_wrapper'>
        <div className='dicover_content_wrapper'>
            <div className='left_discover_content'>
                <h1>Discover the Campus Through a Video Tour</h1>
                <div className='banner_button'><p>Discover More </p><i class="fa-solid fa-arrow-right"></i></div>    
            </div>
            <div className='right_discover_content'>
                <div className='discover_cicrle_div'>
                    <img src={img}/>
                    <div className='video_play_div'>
                    <i class="fa-solid fa-play"></i>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default HomeDiscover
