import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Button from 'react-bootstrap/Button';
import { Link,Outlet } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

import Offcanvas from 'react-bootstrap/Offcanvas';
function Page2() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary  ">
      <Container>
        <Navbar.Brand href="#home"><img class="h-10" src="/logo.png"  height={'30px'} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          </Nav>
          <img style={{marginRight:'10px'}} src="/search.png" height={'30px'}  width={'30px'}/>
          <img style={{marginRight:'10px'}}   src="/menu.png" height={'30px'}  width={'30px'}/>
          <img src="/men.png" height={'30px'}  width={'30px'}/>
        </Navbar.Collapse>
      </Container>
    </Navbar>

<div  class="container-fluid">
  <div  class="row">

<div  class="col-12 col-md-7 col-lg-7 col-xl-7">
<br/><br/>
<div >
<img  src="https://baroque.pk/cdn/shop/files/13_65b346fb-0733-4d8b-b8e6-5f83c0bb6aba.jpg?v=1731482562&width=1000" class="img-fluid"  alt=""/>
<br/>
<img  src="https://baroque.pk/cdn/shop/files/01_0019707b-c8a5-43bb-bbc1-b6cf227c36bb.jpg?v=1731482562&width=1000" class="img-fluid"  alt=""/>
<br/>
<img  src="https://baroque.pk/cdn/shop/files/06_2b9b5bde-7802-4946-9e3f-9968dcbb1caa.jpg?v=1731482562&width=1000" class="img-fluid"  alt=""/>
<br/>
<img  src="https://baroque.pk/cdn/shop/videos/c/vp/1389f935b57340d69e9933577bfb34ba/1389f935b57340d69e9933577bfb34ba.HD-1080p-4.8Mbps-38082932.mp4?v=0" class="img-fluid"  alt=""/>
<br/>
<img  src="https://baroque.pk/cdn/shop/files/16_4b56fc46-020a-456b-baba-be599a4e1588.jpg?v=1731482562&width=1000" class="img-fluid"  alt=""/>
<br/>
<img  src="https://baroque.pk/cdn/shop/files/17_4142cce3-a692-432d-9e1d-e8c15b7eedaf.jpg?v=1731482563&width=1000" class="img-fluid"  alt=""/>
<br/>
<img  src="https://baroque.pk/cdn/shop/files/20_b3b4dba9-9c7f-4960-9acf-ee190e313c59.jpg?v=1731482562&width=1000" class="img-fluid"  alt=""/>
<br/>
<img  src="https://baroque.pk/cdn/shop/files/02_c1b3e779-92c8-4237-8090-ce0a84cbe3ae.jpg?v=1731482562&width=1000" class="img-fluid"  alt=""/>
<br/>
<img  src="https://baroque.pk/cdn/shop/files/11_cc3d1735-7915-4587-8cbc-8d25e2d65dca.jpg?v=1731482562&width=1000" class="img-fluid"  alt=""/>
<br/>
<img  src="https://baroque.pk/cdn/shop/files/25_d34639a0-72bc-4b85-856b-b9dc36129cad.jpg?v=1731482562&width=1000" class="img-fluid"  alt=""/>
</div>
</div>

<div class="col-12 col-lg-4  " >
<br/><br/>
<div style={{top:"0px" ,position:"sticky",height:"500px"}}>




            <h6 class="text-capitalize text-gray-500 ml-5  font-semibold">E M B R O I D E R E D&nbsp;&nbsp; V E L V E T&nbsp;&nbsp; S H A W L VS-49</h6>
          <br/>
            <h6 class="ml-5 font-bold mb-2">PKR 19,990.00</h6>
            <h6 class="text-capitalize text-gray-500 ml-5  mb-2">SKU: BQU-VS-D49</h6>
            <h6 class="text-capitalize text-gray-500 ml-5" >COLOR: MAROON | 1 PIECE</h6>
         <br/>
          <div class="w-30 ml-3">
          <hr/>
          
          <h6 class="ml-1 font-bold mb-3 mt-3">SIZE</h6>
        
          <div class="border-black border-2 p-1 mb-3"style={{width:"80px"}}>
DEFAULT
          </div>
      
        
          <hr/>
        
          <div class="border-black border-2 p-1 mt-3 mb-2" style={{width:"75px"}}>
          <button  >&nbsp;&nbsp;-&nbsp;&nbsp;1&nbsp;&nbsp;+&nbsp;&nbsp;</button>
          </div>
         
          <Button  class="bg-black text-white w-96 h-10 text-lg" variant="primary" onClick={handleShow}>
       Add To Cart
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
   <hr/>
   <p class="text-lg p-2">You are eligible for free shipping.</p>
   <hr/>
   <br/>
   <div  style={{display:"flex"}}>
<div>
  <img src="https://baroque.pk/cdn/shop/files/13_65b346fb-0733-4d8b-b8e6-5f83c0bb6aba.jpg?v=1731482562&width=140" />
</div>
<div class="ml-4">
  <p>UNSTITCHED CHANTELLE</p>
  <p>EMBROIDERED VELVET SHAWL VS-49</p>
  <p class='font-bold'>PKR 19,990.00</p>
  <p>UNSTITCHED/DEFAULT</p>
  <div class="border-black border-2 p-1 mt-3 mb-2" style={{width:"75px"}}>
          <button  >&nbsp;&nbsp;-&nbsp;&nbsp;1&nbsp;&nbsp;+&nbsp;&nbsp;</button> 
          </div>
         
        
</div>

   </div>
<div class="mt-44 mb-2">
   <hr/>
   </div>
   <p>Taxes and shipping calculated at checkout</p>
   <Link  to="/Header3"><button class="bg-black text-white w-80 h-11 mt-2">Checkout . PKR 12,182.00</button></Link>
        </Offcanvas.Body>
      </Offcanvas>
   
     <div style={{display:"flex",marginBottom:"5px" ,marginTop:"15px"}}>
     <img style={{marginRight:"10px"}} src="/menu.png" height="25" width="25" alt=""/>
Description
<img style={{marginLeft:"240px"}} src="/arrow.png" height="25" width="25" alt=""/>

     </div>
    
     <hr/>
 
     <div style={{display:"flex"  ,marginTop:"20px",marginBottom:"5px"}}>
     <img style={{marginRight:"10px"}} src="/menu.png" height="25" width="25" alt=""/>
Product Details
<img style={{marginLeft:"213px"}} src="/arrow.png" height="25" width="25" alt=""/>

     </div>
 
     <hr/>

     <div style={{display:"flex",marginTop:"20px",marginBottom:"5px"}}>
     <img style={{marginRight:"10px"}} src="/menu.png" height="25" width="25" alt=""/>
Delivery
<img style={{marginLeft:"261px"}} src="/arrow.png" height="25" width="25" alt=""/>

     </div>
   
     <hr/>
     
     <div style={{display:"flex",marginTop:"20px",marginBottom:"5px"}}>
     <img style={{marginRight:"10px"}} src="/menu.png" height="25" width="25" alt=""/>
Return And Exchange
<img style={{marginLeft:"167px"}} src="/arrow.png" height="25" width="25" alt=""/>

     </div>
   
     <hr/>
     
     <div style={{display:"flex",marginTop:"20px",marginBottom:"5px"}}>
     <img style={{marginRight:"10px"}} src="/menu.png" height="25" width="25" alt=""/>
Care Instruction
<img style={{marginLeft:"205px"}} src="/arrow.png" height="25" width="25" alt=""/>

     </div>

     <hr/>

    

     <hr/>
     </div>
          </div>
            </div>
            

<div>

</div>


  </div>

</div>
<br/><br/>
<hr/>

  <p Class="text-3xl font-bold text-center mt-9">R E L A T E D &nbsp; P R O D U C T</p>
<br/>
<div class="container-fluid">
  <div class="row">
<div class="col-12 col-md-12 col-lg-3 col-xl-3">
<img src="https://baroque.pk/cdn/shop/files/140_43dc3951-2d38-4f77-b46d-23dacb5024b8.jpg?v=1731494323&width=600" class="img-fluid" />
<br/>
<p class="text-capitalize text-center">EMBROIDERED VELVET SHAWL VS-51</p>
    <h6 class="text-capitalize text-center">PKR 17,990.00</h6>
    <p class="text-capitalize text-center">SHAWLS</p>
</div>
<div class="col-12 col-md-12 col-lg-3 col-xl-3">
<img src="https://baroque.pk/cdn/shop/files/75_750c6a1f-b960-4428-a19f-8ce78ae165e5.jpg?v=1731486591&width=600" class="img-fluid" />
<br/>
<p class="text-capitalize text-center">EMBROIDERED VELVET SHAWL VS-51</p>
    <h6 class="text-capitalize text-center">PKR 22,990.00</h6>
    <p class="text-capitalize text-center">SHAWLS</p>
</div>
<div class="col-12 col-md-12 col-lg-3 col-xl-3">
<img src="https://baroque.pk/cdn/shop/files/164_b204a39a-08ef-4735-a673-ba49e07fced1.jpg?v=1731495880&width=600" class="img-fluid" />
<br/>
<p class="text-capitalize text-center">EMBROIDERED VELVET SHAWL VS-51</p>
    <h6 class="text-capitalize text-center">PKR 29,990.00</h6>
    <p class="text-capitalize text-center">SHAWLS</p>
</div>
<div class="col-12 col-md-12 col-lg-3 col-xl-3">
<img src="https://baroque.pk/cdn/shop/files/88_5c1ad661-f75b-475d-bf3f-ae05701128f1.jpg?v=1731668881&width=600" class="img-fluid" />
<br/>
<p class="text-capitalize text-center">EMBROIDERED VELVET SHAWL VS-51</p>
    <h6 class="text-capitalize text-center">PKR 20,990.00</h6>
    <p class="text-capitalize text-center">SHAWLS</p>
</div>
  </div>
</div>
<br/><br/>
<hr/>
<br/><br/>
<div class="container-fluid">
  <div class="row  justify-center">
    <div class="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4  " >
    <br/>
        <h4  class=" font-extrabold">About</h4>
        <br/>
        <p >Who We Are</p>
<p >Our Responsibility</p>
<p >Service We Provide</p>
<p >Careers</p>
<p >Legal </p>

    </div>
    <div class="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4" >
    <br/>
        <h4 class=" font-extrabold">Customer Service</h4>
        <br/>
      
        <p >Contact Us</p>
        <p>Dispatch Timeline</p>
        <p>Email: info@baroque.pk</p>
        <p>Call: +92 325 700 1111</p>
        <p>WhatsApp: +92 325 7001111</p>
    </div>
    <div class="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4"   >
      <br/>
        <h5 class="font-extrabold " >Policies</h5>
        <br/>
        <p>Privacy Policy</p>
        <p>Refund Policy</p>
        <p>Shipping Policy</p>
        <p>Terms of Service</p>
        <p>Exchange Information</p>
        <br/><br/>
        © 2024 - BAROQUE

</div>
    </div>
    </div>
    <Outlet/>
    </div>
  )
}

export default Page2
