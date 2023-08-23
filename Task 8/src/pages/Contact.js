import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTwitterSquare} from 'react-icons/fa'
  
const Contact = () => {
  return (
    <div >
      <ul className='social-icon' >
        <li> <a href='/'><BsFacebook/> </a>Facebook</li>
        <li> <a href='/'><AiFillInstagram/> </a>Instagram</li>
        <li > <a href='/'><FaTwitterSquare/> </a>Twitter</li><hr/>
      </ul>
    </div>
  )
}

export default Contact