import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Component1.css'
function component1() {
  return (
    <div id="box1">
      <Navbar expand="lg"  className="bg-body-tertiary  ">
      <Container fluid   >
        <Navbar.Brand href="#" >WELCOME TO J</Navbar.Brand>
        <Navbar.Toggle  aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='c1'>Sign IN</Nav.Link>
            <Nav.Link href="#action2"><img  src="https://th.bing.com/th/id/OIP.onx9IraiCbuEyC7NWLKvawHaE8?w=1200&h=800&rs=1&pid=ImgDetMain"  height={"20px"} /></Nav.Link>
            
            <Nav.Link href="#"  className='c1' >
              Create An Account
            </Nav.Link>
            &nbsp;
            <Navbar.Brand href="#">Corporate Inquiry</Navbar.Brand>
            <NavDropdown id="navbarScrollingDropdown" title="Tracking Info" >
            </NavDropdown>
          </Nav>
          <img src="https://th.bing.com/th/id/R.1ef77791345918a3be4b8d724bd01bc6?rik=khIHTeqV21mX2Q&pid=ImgRaw&r=0" height={"40px"}/>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default component1


