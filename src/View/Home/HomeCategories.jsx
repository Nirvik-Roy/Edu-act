import React from 'react'

const HomeCategories = () => {
  return (
    <>
      <div className='home_categories_wrapper'>
        <h3>Our Categories</h3>
        <h1>Favorite Topics To Learn</h1>
        <div className='universal_container fav_topics_wrapper'>

            <div className='fab_topic_div'>
            <i class="fa-solid fa-business-time"></i>
            <p>Business <br/> Management</p>
            </div>
            <div className='fab_topic_div'>
            <i class="fa-solid fa-computer"></i>
            <p>Computer<br/> Science</p>
            </div>
            <div className='fab_topic_div'>
            <i class="fa-solid fa-stairs"></i>
            <p>Personal<br/> Development</p>
            </div>

            <div className='fab_topic_div'>
            <i class="fa-solid fa-palette"></i>
            <p>Art And<br/> Design</p>
            </div>

            
        </div>
      </div>
    </>
  )
}

export default HomeCategories
