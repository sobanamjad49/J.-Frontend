import React from 'react'
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { Carousel } from 'react-bootstrap';
import './P1.css'

function P1() {
  
    
  return (
    <div>
        <div class="container">
           <div class="row">
    
      <div  id='n1'  class="col-12 col-md-12 col-lg-12 col-xl-12 col-xs-12">

<div class="row ">
 <div class="col-10 col-md-10 col-lg-9 col-xl-9 col-xs-6 text-4xl text-red-600 font-bold mt-4 lg:ml-20 "> NETFLIX</div>
    <div class="col-2 col-md-2 col-lg-1 col-xl-1 col-xs-6 text-white "><button class="bg-red-600  text-white p-1 rounded-md mt-4">Sign In</button></div>
    </div>
    <div class="row">
<h5 class="text-center text-5xl text-white font-extrabold mt-36">Unlimited movies, TV shows, and more
</h5>
<h5 class="text-center text-2xl text-white font-bold mt-2">Starts at Rs 250. Cancel anytime.</h5>
<h5 class="text-center text-1xl text-white font-medium mt-2">Ready to watch? Enter your email to create or restart your membership.</h5>
</div>
<div class="row  justify-center mt-7">
        <div class="col-8 col-md-8 col-lg-3 col-xl-3 ">
<InputGroup hasValidation >
<Form.Control
        className="custom-input"
        style={{
         backgroundColor:"black",color: 'white',borderColor: 'white'}}
        placeholder="Email Address"
        type="text"
      />
  </InputGroup>
  </div>
  <div class="col-4 col-md-4 col-lg-2 col-xl-2">
<button class="text-white  p-1 text-2xl bg-red-600 rounded-md">Get Started</button>
  </div>


  </div>




       </div>

  
       </div>
    
       </div>


       <div style={{backgroundColor:"black"}}>
       <div class="container-fluid">
<h4 class="text-white text-3xl  font-bold ">Trending Now</h4>
<div class="row">
    <div class="col-12 col-md-12 col-lg-5 col-xl-1 mt-2"> 
    <Form.Select
      size="sm"
      style={{
        backgroundColor: 'black',color: 'white', borderColor: 'white',padding:'5px',width:"90px", borderRadius: '6px', }}>
      <option>Pakistan</option>
   
    </Form.Select>
      </div>
    <div  class="col-12 col-md-12 col-lg-5 col-xl-1 mt-2">
    
    <Form.Select
      size="sm"
      style={{
        backgroundColor: 'black',color: 'white', borderColor: 'white',padding:'5px',width:"90px", borderRadius: '6px', }}>
      <option>Movies</option>
   
    </Form.Select>
    </div>

</div>

<div  class="mt-8">
       <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100  h-80"
          src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/05/best-family-and-kids-movies-netflix-feature.jpg"
          alt="First slide"
        />
      
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 h-80"
          src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY-1200-80.jpg"
          alt="Second slide"
        />
       
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 h-80"
          src="https://hips.hearstapps.com/hmg-prod/images/netflix-thanksgiving-movies-64de900abcc74.jpg"
          alt="Third slide"
        />
       
      </Carousel.Item>
    </Carousel>
    </div>


</div>
<h4  class="text-white text-3xl font-bold lg:ml-40 mt-16">&nbsp;&nbsp;More Reasons to Join</h4>
<div class="container-fluid mt-10">
<div class="row">
<div class="col-12 col-md-12 col-lg-2 col-xl-2 lg:ml-40">
    <div  className='qq' >
<p class="text-white text-2xl font-bold ">Enjoy on your TV</p>
<br/>
<p class="text-white font-thin ">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
</div>
</div>
<div class="col-12 col-md-12 col-lg-2 col-xl-2">
    <div className='qq'>
<p class="text-white text-2xl font-bold">Download your shows to watch offline</p><br/>
<p class="text-white font-thin ">Save your favorites easily and always have something to watch.</p>
</div>
</div>
<div class="col-12 col-md-12 col-lg-2 col-xl-2">
<div className='qq'>
<p class="text-white text-2xl font-bold">Watch everywhere</p><br/>
<p class="text-white  font-thin">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
</div>
</div>
<div class="col-12 c0l-md-12 col-lg-2 col-xl-2">
<div className='qq'>
<p class="text-white text-2xl font-bold">Create profiles for kids</p><br/>
<p class="text-white  font-thin">Send kids on adventures with their favorite characters in a space made just for them — free with your membership.</p>
</div>
</div>
</div>
</div>
<h4  class="text-white text-3xl font-bold lg:ml-40 mt-16">&nbsp;&nbsp;Frequently Asked Questions</h4>
<br/>

<div class="container-fluid">
    <div class="row">
<div class="col-12 col-md-12 col-lg-8 col-xl-9 container-fluid ">
    <div class="bg-gray-900 h-16 flex flex-row justify-between p-3 ">
        <div class="text-white text-2xl font-semibold ml-2">What is Netflix?</div>
        <div class="text-white text-2xl font-bold mr-2">+</div>
</div>
<br/>
<div class="bg-gray-900 h-16 flex flex-row justify-between p-3 ">
        <div class="text-white text-2xl font-semibold ml-2">How much does Netflix cost?</div>
        <div class="text-white text-2xl font-bold mr-2">+</div>
</div>
<br/>
<div class="bg-gray-900 h-16 flex flex-row justify-between p-3 ">
        <div class="text-white text-2xl font-semibold ml-2">Where can I watch?</div>
        <div class="text-white text-2xl font-bold mr-2">+</div>
</div>
<br/>
<div class="bg-gray-900 h-16 flex flex-row justify-between p-3 ">
        <div class="text-white text-2xl font-semibold ml-2">How do I cancel?</div>
        <div class="text-white text-2xl font-bold mr-2">+</div>
</div>
</div>

<h5 class="text-center text-1xl text-white font-medium mt-6">Ready to watch? Enter your email to create or restart your membership.</h5>
<div class="row  justify-center mt-7">
        <div class="col-8 col-md-8 col-lg-5 col-xl-5 ">
        <InputGroup hasValidation>
      <Form.Control
        className="custom-input"
        style={{
         backgroundColor:"black",color: 'white',borderColor: 'white'}}
        placeholder="Email Address"
        type="text"
      />
    </InputGroup>
  </div>
  <div class="col-4 col-md-4 col-lg-2 col-xl-2">
<button class="text-white  p-1  text-2xl bg-red-600 rounded-md">Get Started</button>
  </div>
  <br/><br/><br/><br/>

  </div>


    </div>
</div>

<p class="text-white lg:ml-40 underline decoration-solid ">&nbsp;Questions? Contact us.</p>
<br/>

<div class="container-fluid mt-3">
<div class="row ">
<div class="col-12 col-md-12 col-lg-2 col-xl-2 lg:ml-40 col-xs-12  text-white underline decoration-solid ">
    
FAQ?<br/><br/>
Investor Relations<br/><br/>
Privacy<br/><br/>
Speed Test<br/>

</div>
<div class="col-12 col-md-12 col-lg-2 col-xl-2 col-xs-12  text-white  underline decoration-solid">
Help Center<br/><br/>
Jobs<br/><br/>
Cookie Preferences<br/><br/>
Legal Notices<br/>
</div>
<div class="col-12 col-md-12 col-lg-2 col-xl-2 col-xs-12  text-white  underline decoration-solid">
Account<br/><br/>
Ways to Watch<br/><br/>
Corporate Information<br/><br/>
Only on Netflix
<br/>
</div>
<div class="col-12 col-md-12 col-lg-2 col-xl-2 col-xs-12  text-white  underline decoration-solid">

Media Center<br/><br/>
Terms of Use
<br/><br/>

Contact Us<br/><br/>

</div>
</div>
</div>

    <div class="lg:ml-40 mt-10">
<Form.Select
      size="sm"
      style={{
        backgroundColor: 'black',color: 'white', borderColor: 'white',padding:'5px',width:"90px", borderRadius: '6px', }}>
      <option>English</option>
   
    </Form.Select>
    <br/><br/><br/><br/>
</div>
</div>
</div>


  )
}

export default P1
