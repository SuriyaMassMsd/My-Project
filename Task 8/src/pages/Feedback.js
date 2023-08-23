import React from 'react'
import Video1 from '../images/backroundimg.jpg'

const Feedback = () => {
  return (
    <div>
    <div className='home-title'>
       <h1>Feedback </h1>
    </div> 
 <div className='input-value'>
    <input type='text'  className='input' placeholder='Enter Your Name'/> <br/>
    <input type='email' className='input' placeholder='Enter Your Email'/>
 </div>
    <div className='comment-box'> 
       <textarea placeholder='Give a Feedback About our Shop' className='box' rows={4}/>
       <button type='submit' className='btn-primary'> Submit</button>
    </div>
    <div className='bg-video'> 
    <img className='bg-vid' src={Video1} alt=''  />
   </div>
 </div>
  )
}

export default Feedback