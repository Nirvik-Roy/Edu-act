import React from 'react'
import img from '../../assets/images/brand/brand-1-1.png'
const Brand = () => {
  return (
    <>
    <div style={{
        background:'white'
    }}>
    <div className='universal_container brand_wrapper'>
      {[1,2,3,4,5].map((e,i)=>(
        <div className='brand_img_div'>
                <img src={img}/>
               </div>
      ))}
               
      </div>
    </div>
    
    </>
  )
}

export default Brand
