import React from 'react'

const HomeCounter = () => {
  return (
    <>
    <div className='home_counter_main'>
    <div className=' home_counter_wrapper'>
    {['30.3k','40.5k','88.9%','6.3+'].map((e,i)=>(
        <div className='home_counter'>
    <svg viewBox="0 0 303 181" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1.5" y="2.00049" width="300" height="177" rx="7" stroke="#4F5DE4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="20 20"></rect>
                            </svg>
                            <h3>{e}</h3>
                            <p>{i === 0 ? 'Student enrolled' : i === 1 ? 'Class completed': i === 2 ? 'satisfaction rate' : i===3 ? 'Top instructors' : '' }</p>
    </div>
    ))}
  
    
</div>
    </div>
      
    </>
  )
}

export default HomeCounter
