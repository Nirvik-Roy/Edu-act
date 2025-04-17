import React from 'react'

const AddReviewForm = () => {
  return (
    <>
      <div className='add_review_wrapper'>
        <h2>Add a Review</h2>
        <div className='rate_this_product'>
            <h3>Rate this Product</h3>
            <div className='rate_this_product_rating_wrapper'>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            </div>
        </div>

        <form className='add_review_form_wrapper'>
            <div className='review_form_input_div'>
                <input type='text' placeholder='Your Name'/>
            </div>
            <div className='review_form_input_div'>
                <input type='text'/>
            </div>
            <div className='review_form_input_div_2'>
                <textarea placeholder='Write a Message'/>
            </div>
        </form>
        <div className='banner_button'><p>Leave a Review </p><i class="fa-solid fa-arrow-right"></i></div>  
      </div>
    </>
  )
}

export default AddReviewForm
