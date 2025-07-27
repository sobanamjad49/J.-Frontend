import React from 'react'
import './Component1.css'

import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Component3() {
  return (
    <div >
      <Navbar expand="lg" className="bg-body-tertiary"  style={{marginTop:"10px"}}>
      <Container fluid>
      <Navbar.Brand href="#" >New Arrivals</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
          
          >
            <Nav.Link href="#action1"  style={{color:"black",paddingLeft:"40px",fontSize:"20px",}}>Women</Nav.Link>
            <Nav.Link href="#action2"  style={{color:"black",paddingLeft:"50px",fontSize:"20px"}}>Men</Nav.Link>
          
            <Nav.Link href="#" style={{color:"black",paddingLeft:"50px",fontSize:"20px"}}>
           Boys And Girls
            </Nav.Link>
            <Nav.Link href="#" style={{color:"black",paddingLeft:"50px",fontSize:"20px"}}>
           Make Up
            </Nav.Link>
            <Nav.Link href="#" style={{color:"black",paddingLeft:"50px",fontSize:"20px"}}>
           Fragrance
            </Nav.Link>
            <Nav.Link href="#" style={{color:"black",paddingLeft:"50px",fontSize:"20px"}}>
           Catalouge
            </Nav.Link>
            <Nav.Link href="#" style={{color:"black",paddingLeft:"50px",fontSize:"20px"}}>
          Skin Care
            </Nav.Link>
            <Nav.Link href="#" style={{color:"black",paddingLeft:"50px",color:"red",fontSize:"20px"}}>
           Sale
            </Nav.Link>
          </Nav>
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Component3
