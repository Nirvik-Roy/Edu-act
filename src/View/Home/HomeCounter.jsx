import React, { useEffect, useState } from 'react'
import {useInView} from 'react-intersection-observer'
import Countup from 'react-countup'
import AOS from "aos";
import "aos/dist/aos.css";
const HomeCounter = () => {
  const [count,setcount]=useState(false)
  const {ref,inView}=useInView({
    triggerOnce:true,
  })
  useEffect(()=>{
 if(inView){
  setcount(true)
 }else{
  setcount(false)
 }
  },[inView])
    useEffect(() => {
            AOS.init({
              duration: 1000, // animation duration in ms
              once: true,     // whether animation should happen only once
            });
      }, []);
  return (
    <>
    <div  className='home_counter_main'>
    <div ref={ref} className=' home_counter_wrapper'>
    {count && ['30.3','40.5','88.9','6.3'].map((e,i)=>(
        <div className='home_counter' data-aos='fade-up' data-aos-delay={i * 100}>
    <svg viewBox="0 0 303 181" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1.5" y="2.00049" width="300" height="177" rx="7" stroke="#4F5DE4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="20 20"></rect>
                            </svg>
                            <h3>
                            <Countup start={0} end={e}></Countup>
                            {i===0 ? 'K' : i === 1 ? "K" : i===2 ? "%" : i===3 ? "+":''}</h3>
                            <p>{i === 0 ? 'Student enrolled' : i === 1 ? 'Class completed': i === 2 ? 'satisfaction rate' : i===3 ? 'Top instructors' : '' }</p>
    </div>
    ))}
  
    
</div>
    </div>
      
    </>
  )
}

export default HomeCounter
