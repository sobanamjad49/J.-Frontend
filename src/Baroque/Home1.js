import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';


import InputGroup from 'react-bootstrap/InputGroup';
import { Link,Outlet } from 'react-router-dom';
function Home1() {
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
   
   
    <div >
    <img    src="https://baroque.pk/cdn/shop/files/MAin_BAnner85.jpg?v=1733469512&width=2000" width={'1250px'} class="img-fluid" />
 
 
    </div>
    <br/><br/>
    <div class='container'>
        <div  class='row' >
<div  class='col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 pb-5' style={{marginTop:'10px'}}>
    <img src="https://baroque.pk/cdn/shop/files/02_Banner222.jpg?v=1733469789&width=600"  class="img-fluid"/>
    <br/>
<h1 class="text-capitalize text-center">shawls</h1>
 <br/>
 <Link to="/page1" >  <button class="btn btn-dark " style={{marginLeft:"120px"}}>Shop Now</button></Link> 
</div>
<div  class='col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 pb-5' style={{marginTop:'10px'}}>
<img src="https://baroque.pk/cdn/shop/files/02_Banner225.jpg?v=1733472782&width=800"  class="img-fluid"/>
<br/>
<h1 class="text-capitalize text-center">shawls</h1>
<br/>
    <button class="btn btn-dark " style={{marginLeft:"120px"}}  >Shop Now</button>
</div>
<div  class='col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 pb-5' style={{marginTop:'10px'}}>
<img src="https://baroque.pk/cdn/shop/files/02_Banner223.jpg?v=1733469984&width=800"  class="img-fluid"/>
<br/>
<h1 class="text-capitalize text-center">shawls</h1>
<br/>
    <button class="btn btn-dark" style={{marginLeft:"120px"}}   >Shop Now</button>

</div>
        </div>
       </div>
     <br/><br/>
     <hr/>
     <br/><br/>
     <div  class="container">
        <div  class="row  justify-content-center " style={{marginTop:'10px'}}>
<div  class="col-12 col-md-12 col-lg-8">
<img  src="https://baroque.pk/cdn/shop/files/Shop_The_Look81.jpg?v=1728049596&width=1200"   class="img-fluid"/>
</div>

<div class="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4  " style={{paddingTop:'50px'}} >
    <img src="https://baroque.pk/cdn/shop/files/156_f170590c-d304-45f0-a95f-4b625e1f6b3f.jpg?v=1727507021&width=1200" alt=""  class="img-fluid" />
    <br/>
    <p class="text-capitalize text-center">EMBROIDERED VELVET SHAWL VS-54</p>
    <h6 style={{fontSize:'20px'}} class="text-center">  PKR 19,990.00</h6>
    <button class="btn btn-dark" style={{marginLeft:'120px',marginTop:'10px'}}>VIEW NOW </button>

</div>
 </div>
     </div>

     <br/><br/>
     <hr/>
     <br/><br/>

     <div class='container'>
        <div  class='row' >
<div  class='col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 pb-5' style={{marginTop:'10px'}}>
<video  src="https://baroque.pk/cdn/shop/videos/c/vp/49df78b3f23447afa6767a5f093f7b77/49df78b3f23447afa6767a5f093f7b77.HD-1080p-2.5Mbps-39116637.mp4?v=0" autoPlay muted class="video-fluid"/>
    <br/>
    <h1 class="text-capitalize text-center">shawls</h1>
 <br/>
    <button class="btn btn-dark " style={{marginLeft:"120px"}}>Shop Now</button>
</div>
<div  class='col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 pb-5' style={{marginTop:'10px'}}>
<video  src="https://baroque.pk/cdn/shop/videos/c/vp/49df78b3f23447afa6767a5f093f7b77/49df78b3f23447afa6767a5f093f7b77.HD-1080p-2.5Mbps-39116637.mp4?v=0" autoPlay muted class="video-fluid"/>
<br/>
<h1 class="text-capitalize text-center">shawls</h1>
<br/>
    <button class="btn btn-dark " style={{marginLeft:"120px"}}  >Shop Now</button>
</div>
<div  class='col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 pb-5' style={{marginTop:'10px'}}>
<video  src="https://baroque.pk/cdn/shop/videos/c/vp/1dd3a78ffe2b48e580a857aed2ff73ee/1dd3a78ffe2b48e580a857aed2ff73ee.HD-1080p-2.5Mbps-39116628.mp4?v=0" autoPlay muted class="video-fluid"/>
<br/>
<h1 class="text-capitalize text-center">shawls</h1>
<br/>
    <button class="btn btn-dark" style={{marginLeft:"120px"}}   >Shop Now</button>

</div>
        </div>
       </div>
       <br/><br/>
     <hr/>
     <br/><br/>
     <div class="container-fluid">
    <p class="text-capitalize text-center  text-2xl">SUBSCRIBE FOR NEWSLETTER</p>
</div>
<br/>
<div  style={{display:"flex" ,justifyContent:"center"}}>
<InputGroup className="mb-3"  style={{width:"350px"}}>
        <Form.Control 
          placeholder="Enter E-Mail"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Button
        </Button>
      </InputGroup>
    </div>

    <br/><br/>
<div class="container-fluid">
<div class="row" >
<div class="col-sm-3 col-md-3 col-lg-3 col-xl-3 col-12">
    <br/><br/>
    <p class="text-capitalize text-center">Priority Stitching</p>
    <p class="text-capitalize text-center">Receive your stitched orders more quickly in a timeline of 2 weeks</p>
</div>
<div class="col-sm-3 col-md-3 col-lg-3 col-xl-3 col-12 " >
   
    <br/><br/>
    <p  class="text-capitalize text-center">Custom SIze</p>
    <p  class="text-capitalize text-center " >Get your outfit tailored to perfection as per your desired measurements</p>
</div>
<div class="col-sm-3 col-md-3 col-lg-3 col-xl-3 col-12" >
    <br/>
    <br/>
    <p  class="text-capitalize text-center " >Free Shipping</p>
    <p  class="text-capitalize text-center " >We provide free shipping all across Pakistan on all of our orders</p>
</div>
<div class="col-sm-3 col-md-3 col-lg-3 col-xl-3 col-12" >
    <br/><br/>
    <p  class="text-capitalize text-center ">ORDER EXCHANGE</p>
    <p  class="text-capitalize text-center ">For a hassle free exchange service, fill out the exchange form</p>
</div>
</div>
</div>
    
<br/><br/><hr/><br/><br/>
<div class="container">
  <div class="row  justify-center">
    <div class="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4  " >
        <h5>About</h5>
        <br/>
        <p >Who We Are</p>
<p >Our Responsibility</p>
<p >Service We Provide</p>
<p >Careers</p>
<p >Legal </p>

    </div>
    <div class="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4" >
        <h4 class="container-fluid ">Customer Service</h4>
        <br/>
      
        <p >Contact Us</p>
        <p>Dispatch Timeline</p>
        <p>Email: info@baroque.pk</p>
        <p>Call: +92 325 700 1111</p>
        <p>WhatsApp: +92 325 7001111</p>
    </div>
    <div class="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4"   >
        <h5 class="container-fluid " >Policies</h5>
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

export default Home1
