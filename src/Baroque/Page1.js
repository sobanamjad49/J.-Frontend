import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import { Link,Outlet } from 'react-router-dom';

import InputGroup from 'react-bootstrap/InputGroup';
function Page1() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img class="h-10" src="/logo.png"  height={'30px'}/></Navbar.Brand>
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
    <br/><br/><br/>
      <div class="container-fluid">
          <h1 class="text-capitalize text-center text-4xl text-black">UNSTITCHED CHANTELLE</h1>
      </div>
      <br/><br/>
      <div class="container-fluid" >
        <div class="row">
            <div class="col-6 col-sm-10 col-md-10 col-lg-10 col-xl-10 border-black border-2 p-2">
            <p class="text-center  container-fluid">12 Products</p>
            </div>
            <div class="col-6 col-sm-2 col-md-2 col-lg-2 col-xl-2 border-black border-2">
                <p class="text-center container-fluid">SORT BY</p>
            </div>

        </div>

      </div>
      <br/><br/>

      <div class="container-fluid">
        <div class="row">
<div class="col-12 col-md-4 col-lg-4 col-xl-4">
<div style={{display:"flex",padding:"20px"}}>
<p class="container-fluid text-capitalize ">Availability  </p>
<img style={{marginLeft:'60px'}} src="/arrow.png" height={'20px'} width={'25px'} alt="" class="img-fluid"/>
</div>
<hr/>
<div style={{display:"flex",padding:"20px"}}>
<p class="container-fluid text-capitalize ">Price</p>
<img style={{marginLeft:'60px'}} src="/arrow.png" height={'20px'} width={'25px'} alt="" class="img-fluid"/>
</div>
<hr/>
<div style={{display:"flex",padding:"20px"}}>
<p class="container-fluid text-capitalize ">Product Type </p>
<img style={{marginLeft:'60px'}} src="/arrow.png" height={'20px'} width={'25px'} alt="" class="img-fluid"/>
</div>
<hr/>
<div style={{display:"flex",padding:"20px"}}>
<p class="container-fluid text-capitalize ">Type </p>
<img style={{marginLeft:'60px'}} src="/arrow.png" height={'20px'} width={'25px'} alt="" class="img-fluid"/>
</div>
<hr/>
<div style={{display:"flex",padding:"20px"}}>
<p class="container-fluid text-capitalize ">Fabric </p>
<img style={{marginLeft:'60px'}} src="/arrow.png" height={'20px'} width={'25px'} alt="" class="img-fluid"/>
</div>
<hr/>
<div style={{display:"flex",padding:"20px"}}>
<p class="container-fluid text-capitalize ">Size </p>
<img style={{marginLeft:'60px'}} src="/arrow.png" height={'20px'} width={'25px'} alt="" class="img-fluid"/>
</div>
<hr/>
<div style={{display:"flex",padding:"20px"}}>
<p class="container-fluid text-capitalize ">Pieces</p>
<img style={{marginLeft:'60px'}} src="/arrow.png" height={'20px'} width={'25px'} alt="" class="img-fluid"/>
</div>
<hr/>
<div style={{display:"flex",padding:"20px"}}>
<p class="container-fluid text-capitalize ">Product style</p>
<img style={{marginLeft:'60px'}} src="/arrow.png" height={'20px'} width={'25px'} alt="" class="img-fluid"/>
</div>
<hr/>
<div style={{display:"flex",padding:"20px"}}>
<p class="container-fluid text-capitalize ">Color</p>
<img style={{marginLeft:'60px'}} src="/arrow.png" height={'20px'} width={'25px'} alt="" class="img-fluid"/>
</div>
<hr/>


</div>
<div class="col-12 col-md-4 col-lg-4 col-xl-4" >
<Link to="/Page2"><img src="https://baroque.pk/cdn/shop/files/01_0019707b-c8a5-43bb-bbc1-b6cf227c36bb.jpg?v=1731482562&width=700" alt="" class="img-fluid"/></Link> 
        <p class="container-fluid text-capitalize text-center">EMBROIDERED VELVET SHAWL VS-49</p>
        <div  style={{display:'flex' ,}}>
        <div class="container-fluid text-capitalize text-center font-bold text-black line-through decoration-2 "  style={{paddingLeft:'120px'}}> 23,990.00</div>
       <div class="container-fluid text-capitalize text-center font-extrabold text-red-700"  style={{paddingRight:'150px'}}> 23,990.00</div>
        </div>
        <p class="container-fluid text-capitalize text-center">SHAWLS</p>
        <br/><br/>
</div>
<div class="col-12 col-md-4 col-lg-4 col-xl-4" >
<img src="https://baroque.pk/cdn/shop/files/27_5c2c3cec-1266-442b-8a75-f18c64058527.jpg?v=1731483899&width=700" alt="" class="img-fluid"/>
        <p class="container-fluid text-capitalize text-center">EMBROIDERED VELVET SHAWL VS-49</p>
        <h6 class="container-fluid text-capitalize text-center font-extrabold"> 19,990.00</h6>
        <p class="container-fluid text-capitalize text-center">SHAWLS</p>
     
</div>


<div class="col-12 col-md-4 col-lg-4 col-xl-4" >
<img src="https://baroque.pk/cdn/shop/files/52_135d276a-c816-4834-b08d-8ef3736d5e72.jpg?v=1731485932&width=700" alt="" class="img-fluid"/>
        <p class="container-fluid text-capitalize text-center">EMBROIDERED VELVET SHAWL VS-49</p>
        <h6 class="container-fluid text-capitalize text-center font-extrabold"> 20,990.00</h6>
        <p class="container-fluid text-capitalize text-center">SHAWLS</p>
        <br/><br/>
</div>

<div class="col-12 col-md-4 col-lg-4 col-xl-4" >
<img src="https://baroque.pk/cdn/shop/files/164_b204a39a-08ef-4735-a673-ba49e07fced1.jpg?v=1731495880&width=600" alt="" class="img-fluid"/>
        <p class="container-fluid text-capitalize text-center">EMBROIDERED VELVET SHAWL VS-49</p>
        <h6 class="container-fluid text-capitalize text-center font-extrabold"> 25,990.00</h6>
        <p class="container-fluid text-capitalize text-center">SHAWLS</p>
     
</div>
<div class="col-12 col-md-4 col-lg-4 col-xl-4" >
<img src="https://baroque.pk/cdn/shop/files/140_43dc3951-2d38-4f77-b46d-23dacb5024b8.jpg?v=1731494323&width=600" alt="" class="img-fluid"/>
        <p class="container-fluid text-capitalize text-center">EMBROIDERED VELVET SHAWL VS-49</p>
        <h6 class="container-fluid text-capitalize text-center font-extrabold"> 18,990.00</h6>
        <p class="container-fluid text-capitalize text-center">SHAWLS</p>
     
</div>
<div class="col-12 col-md-4 col-lg-4 col-xl-4" >
<img src="https://baroque.pk/cdn/shop/files/52_21d554c2-8ef6-4627-9847-3a0ce772f43c.jpg?v=1705564218&width=600" alt="" class="img-fluid"/>
        <p class="container-fluid text-capitalize text-center">EMBROIDERED VELVET SHAWL VS-49</p>
        <h6 class="container-fluid text-capitalize text-center font-extrabold"> 28,990.00</h6>
        <p class="container-fluid text-capitalize text-center">SHAWLS</p>
     
</div>

<div class="col-12 col-md-4 col-lg-4 col-xl-4" >
<img src="https://baroque.pk/cdn/shop/products/c2_1_71098c76-34e6-405c-84c0-2108d1dfeb16.jpg?v=1669115725&width=600" alt="" class="img-fluid"/>
        <p class="container-fluid text-capitalize text-center">EMBROIDERED VELVET SHAWL VS-49</p>
        <h6 class="container-fluid text-capitalize text-center font-extrabold"> 2,990.00</h6>
        <p class="container-fluid text-capitalize text-center">SHAWLS</p>
     
</div>
<div class="col-12 col-md-4 col-lg-4 col-xl-4" >
<img src="https://baroque.pk/cdn/shop/files/140_b5d09bc4-aabd-40bb-906a-b954eae81e15.jpg?v=1705736503&width=600" alt="" class="img-fluid"/>
        <p class="container-fluid text-capitalize text-center">EMBROIDERED VELVET SHAWL VS-49</p>
        <h6 class="container-fluid text-capitalize text-center font-extrabold"> 24,990.00</h6>
        <p class="container-fluid text-capitalize text-center">SHAWLS</p>
     
</div>
<div>


</div>

        </div>
        
      </div>

      <br/><br/><hr/><br/><br/>
<div class="container">
  <div class="row  justify-center">
    <div class="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4  " >
        <h4  class="container-fluid font-extrabold">About</h4>
        <br/>
        <p >Who We Are</p>
<p >Our Responsibility</p>
<p >Service We Provide</p>
<p >Careers</p>
<p >Legal </p>

    </div>
    <div class="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4" >
        <h4 class="container-fluid font-extrabold">Customer Service</h4>
        <br/>
      
        <p >Contact Us</p>
        <p>Dispatch Timeline</p>
        <p>Email: info@baroque.pk</p>
        <p>Call: +92 325 700 1111</p>
        <p>WhatsApp: +92 325 7001111</p>
    </div>
    <div class="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4"   >
        <h5 class="container-fluid font-extrabold " >Policies</h5>
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

export default Page1
