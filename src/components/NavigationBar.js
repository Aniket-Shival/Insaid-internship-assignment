import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavigationBar = () => {

    const hoverFunc=(e)=>{
        e.target.style.color = 'yellow'

     }
     const removeFunc=(e)=>{
       e.target.style.color= 'whitesmoke'
     }

  return (
    <div>
        <Navbar bg="dark" variant='dark' expand="lg">
      
        <Navbar.Brand className='me-5 ms-3' style={{color:'whitesmoke' }}>Game Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">
          <Link className='nav-link mx-3'   style={{ textDecoration:'none', color:'white', fontWeight:'bold' }} onMouseOver={hoverFunc} onMouseLeave={removeFunc} to='/'>Home</Link>
          <Link className='nav-link mx-3'  style={{ textDecoration:'none', color:'white',fontWeight:'bold' }}  onMouseOver={hoverFunc} onMouseLeave={removeFunc} to='/contact'>Contact</Link>
          <Link className='nav-link mx-3'  style={{ textDecoration:'none', color:'white',fontWeight:'bold' }}  onMouseOver={hoverFunc} onMouseLeave={removeFunc} to='/cart'>Cart</Link>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
    </div>
  )
}

export default NavigationBar