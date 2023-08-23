import React from 'react'
import Vido1 from '../videos/vid1.mp4'

const About = () => {
  return (

    <div >
      <video  className='bg-vidoo' src={Vido1} autoPlay muted loop  />
      
 <div className='bg-text'>
      <h2>Our Heritage
Our story begins in 1971 along the cobblestone streets of Seattle’s historic Pike Place Market. It was here where Starbucks opened its first store, offering fresh-roasted coffee beans, tea and spices from around the world for our customers to take home. Our name was inspired by the classic tale, “Moby-Dick,” evoking the seafaring tradition of the early coffee traders.</h2>
  </div>
    </div>
  )
}

export default About