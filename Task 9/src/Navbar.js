import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {HashLink as Link } from 'react-router-hash-link'


function Navbars() {
  return (
      <Navbar bg="dark" data-bs-theme="dark"   className='nav-bar fixed-top'>
        <Container>
          <Navbar.Brand href="#home" className='fw-bolder'>Career</Navbar.Brand>
          <Nav className="ms-auto fw-bolder" >
            <Link   className='nav-link'  smooth  to='#home' > Home </Link>
            <Link   className='nav-link'  smooth to='#about' >About Us</Link>
            <Link   className='nav-link'  smooth to='#contact' > Contact Us</Link>
            <Link   className='nav-link'  smooth to='#feedback' > Feedback</Link>
          </Nav>
        </Container>
      </Navbar>
);
}
export default Navbars