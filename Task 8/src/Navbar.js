import React from 'react'
// import Logo from './images/logo.png'
import {Link} from 'react-router-dom'

const Navbar = () => {

  return (

  
    <div className='navbar'>
     
    <div className='nav-shop-title'>
    <h1 className='shop-title'>Coffee & Tea</h1>
      </div> 
      
     <div className='nav-links'>
      <Link className='links' to="/">Home</Link>
      <Link className='links'to="/About">About</Link>
      <Link className='links'to="/Contact"> Contact</Link>
      <Link className='links'to="/Feedback"> Feedback</Link>
      <Link className='links'to="/Gift"> Gift</Link>
     </div>
     
      </div>
      
  )
}

export default Navbar