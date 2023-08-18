import React from 'react';
import {BsCart2} from "react-icons/bs";
import logo from '../compo/images/logo.png'


const Navbar = () => {
  
  return (
    <div className='nav-container'>

        <div className='nav-logo'>
            <img src={logo} alt='logo'/>
        </div>
      <div className='nav-links'>
        <a href=''>Home</a>
        <a href=''>Contact Us</a>
        <a href=''>About Us</a>
        <a href=''>Offers</a>
        <a href=''>
        <BsCart2 className='cart-icon' />
        </a>
        <button className='order-button'>Log In</button>

      </div>
      

    </div>
  )
}

export default Navbar