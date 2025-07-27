import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
function Page3() {
  return (
    <div>
      <div class="container-fluid mt-2 mb-2 d-flex justify-center" >
        <div class="row">

<img class="h-20" src="/logo.png" />
 </div>
      </div>
<hr/>

<div class="container  ">
  <div class="row">
<div class="col-12 col-md-12 col-lg-6 col-xl-6 mt-6 ">

<div class="col-12 col-md-12 col-lg-12 col-xl-12  d-flex justify-between mb-4  ">
<p>Contact</p>
<p><u>Log in</u></p>
</div>

<InputGroup hasValidation>

      <Form.Control placeholder='Email' type="text" />
  
    </InputGroup>
<br/>
    <Form.Group className="mb-3 font-bold">
        <Form.Check
          required
          label="Email me with news and offers"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <div class="h-24 w-full border-black border-1">
<div class="d-flex ">
<img class="h-6 ml-4 mr-2 mt-1" src="/error.png"/>
<p class="font-bold mt-1">International Website</p>
</div>
<p class="text-sm ml-9 font-medium">To deliver products outside of Pakistan visit our International Website:</p>
<p class="text-sm ml-9 font-medium"><u>https://baroque.com.pk</u></p>
      </div>

<p class="mt-3 font-bold text-2xl mb-3 ">Delivery</p>
<Form.Select size="md " >
        <option>Select Country</option>
      </Form.Select>
    
      <div class="Row  mt-3">
        
      <div class="col-12 col-md-12 col-lg-12 col-xl-12">
      <InputGroup hasValidation>

<Form.Control placeholder='First Name' type="text" />

</InputGroup>
      </div>
      <div class="col-12 col-md-12 col-lg-12 col-xl-12 mt-3">
      <InputGroup hasValidation>

<Form.Control placeholder='Last Name' type="text"  />

</InputGroup>

</div>
</div>
<br/>
<InputGroup hasValidation>

      <Form.Control placeholder='Address' type="text" />
  
    </InputGroup>
    <br/>
<InputGroup hasValidation>
<Form.Control placeholder='Apartment,Suit,etc.' type="text" />
  </InputGroup>
  
  
      <div class="col-12 col-md-12 col-lg-12 col-xl-12 mt-3">
      <InputGroup hasValidation>

<Form.Control placeholder='City' type="text" />

</InputGroup>
      </div>
      <div class="col-12 col-md-12 col-lg-12 col-xl-12 mt-3">
      <InputGroup hasValidation>

<Form.Control placeholder='Postal Code' type="text"  />

</InputGroup>

</div>
<br/>
  <InputGroup hasValidation>
<Form.Control placeholder='Phone' type="text" />
  </InputGroup>

  <br/>
    <Form.Group className="mb-3 font-bold">
        <Form.Check
          required
          label="Save this Information for next time."
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <p class="mt-3 font-bold text-2xl mb-3 ">Select your City</p>
      <Form.Select size="md " >
        <option></option>
      </Form.Select>
      <p class="mt-3 font-bold text-2xl mb-3 ">Payment</p>
      <p>All transactions are secure and encrypted.</p>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><Form.Check type="radio" aria-label="radio 1" /></InputGroup.Text>
        
        <Form.Control
        
          placeholder="Credit Card"
          aria-label="Username"
          
          aria-describedby="basic-addon1"
        />
        
         </InputGroup>

<button  class="bg-black text-white h-11 w-full text-2xl p-1">Pay Now</button>
</div>






<div class="col-12 col-md-12 col-lg-6 col-xl-6 border-l-4  ">

<div style={{top:"0px",position:"sticky"}}>
<div class="d-flex mt-8 justify-between">

<div class="relative">
  
  <div class="absolute text-white  border-2 ml-16 bg-black border-black  rounded-full w-6 h-6 text-center  leading-5">1</div>
  <img src="https://cdn.shopify.com/s/files/1/2277/5269/files/25_3629ca91-8c19-4ae4-8ea7-80cce77d28e0_128x128.jpg?v=1733486050"/>
</div>

  <p class="font-medium">EMBROIDERED KHADDAR PR-1031 <br/><p class="font-normal">xs</p></p>
  <p class="font-bold">Rs 11,900.00</p>

</div>
<br/><br/>
<Form.Group  md="4" controlId="validationFormikUsername2">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation  >
               
                <Form.Control
                  type="text"
                  placeholder="Discount Code or Gift Code"
                  aria-describedby="inputGroupPrepend"
                  name="username"
          
                />
                 <InputGroup.Text id="inputGroupPrepend"  ><button >Apply</button></InputGroup.Text>
                <Form.Control.Feedback type="invalid" tooltip>
                  
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          <div class="d-flex justify-between mt-2 ">
<p  class="ml-2 font-semibold ">Subtotal • 4 items</p>
<p   class="ml-2 font-semibold ">Rs 34,100.00</p>
          </div>
          <div class="d-flex justify-between mt-2 ">
<p  class="ml-2 font-semibold ">Shipping</p>
<p   class="ml-2 font-semibold ">Free</p>
          </div>
          <div class="d-flex justify-between mt-2 ">
<p  class="ml-2 font-extrabold text-1xl ">Total</p>
<div class="d-flex ">
<p  class="font-semibold mr-3">PKR</p>
<p   class=" font-extrabold text-1xl">Rs 34,100.00</p>
          </div>
          </div>

















</div>

  </div>
</div>




















</div>

    </div>
  )
}

export default Page3
