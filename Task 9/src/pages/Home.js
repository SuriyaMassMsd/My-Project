import React from 'react'
import Feedback from './Feedback'
import About from './About'
import Contact from './Contact'

function Home() {
  return (
    <section  id='home'>

<div className='abouta'>
     <h1>Wellcome <br/> To <br/> Home Page</h1>
     
    </div>
    <About />
    <Contact />
    <Feedback />
    
    </section>
  )
}

export default Home