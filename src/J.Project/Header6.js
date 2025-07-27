import React from 'react'
import Form from 'react-bootstrap/Form';
import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
function Header6() {
    const [show, setShow] = useState(false);
    const target = useRef(null);

    const renderTooltip = (props) => (
        
        <Tooltip className='mt-2' id="button-tooltip" {...props}>
         <p>For delivery questions.</p>
        </Tooltip>
       
      );
    
  return (
    <div>

{/* <div className='bg-gray-100 sm:block lg:hidden '>
  <p className='font-semibold sm:ml-[38rem] hover:underline'>Sign In</p>
  <p className='font-semibold text-xl'>Estimated Total</p>
  <p className='font-semibold text-xl'>PKR 5,265.00</p>
</div> */}

      <div className='hidden lg:block'>
        <div className='flex justify-center '>
     <img className='w-16 mb-5' src="https://t3.ftcdn.net/jpg/01/31/38/66/360_F_131386691_masUVl2XJWujkvbJrCfZPdGZIG9MIKjv.jpg"/> <p className='font-semibold text-5xl mt-2'>SECURE CHECKOUT</p>
     </div>
     </div>
<div className='hidden lg:block'>
     <div className='flex ml-[30rem] mb-5'>
<p className='font-semibold text-2xl font-mono mr-8 border-2 border-black p-2 hover:bg-black hover:text-white'>Shipping</p>
<Link to='/Header7'><p className='font-semibold text-2xl font-mono border-2 border-black p-2 hover:bg-black hover:text-white'>Review & Payments</p></Link> 
<p className='hover:underline mt-3 font-semibold ml-72'>Sign In</p>
     </div>
     </div>
     <div className='flex ml-4'>
     <div className='ml-2 '>
     <p className='text-2xl font-bold mb-4'>Shipping Address</p>
     <p className="after:content-['*'] after:text-red-600 after:text-xl  text-1xl font-semibold">Email Address</p>
    <div className='flex'>
      <Form.Control className='lg:w-80 sm:w-[43rem] mt-4 rounded-none '
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
       <button className='lg:block hidden ' ref={target} onClick={() => setShow(!show)}>
       <img className='w-6 h-7 mt-4 ml-3 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXh7yrGUPaNARIbDhYqanyZObxwelxZmQdcQ&s"/>
      </button>
      <Overlay class="hidden sm:block" target={target.current} show={show} placement="right">
        {(props) => (
          <Tooltip id="overlay-example" {...props} className='mt-2'>
            <p >We'll send your order confirmation here.</p>
          </Tooltip>
        )}
      </Overlay>
    </div>
    <p className='text-sm font-semibold mt-4'>You can create an account after checkout.</p>

    <hr className='lg:w-[40rem] mt-9'/>
    <div className='lg:flex   mt-3'>
<div>
<p className="after:content-['*'] after:text-red-600 after:text-xl  text-1xl font-semibold">First Name</p>
<Form.Control className='lg:w-60 sm:w-[43rem] mt-4 rounded-none'
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
</div>
<div className='lg:ml-14'>
<p className="after:content-['*'] after:text-red-600 after:text-xl  text-1xl font-semibold ">Last Name</p>
<Form.Control className='lg:w-60 sm:w-[43rem] mt-4 rounded-none ' 
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock" 
      />
</div>

    </div>

    <p className="after:content-['*'] after:text-red-600 after:text-xl  text-1xl font-semibold mt-3">Street Address</p>
    <Form.Control className='lg:w-60 sm:w-[43rem]  mt-4 rounded-none'
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
      <div className='lg:flex'>
<div>
<p className="after:content-['*'] after:text-red-600 after:text-xl  text-1xl font-semibold mt-3">Country</p>
<Form.Select className='lg:w-60 sm:w-[43rem] mt-3 rounded-none' aria-label="Default select example">
      <option>Pakistan</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>

</div>
<div>
<div className='lg:ml-14 mt-2'>
<p className=" text-1xl font-semibold">State/Province</p>
<Form.Control className='lg:w-60 sm:w-[43rem] mt-4 rounded-none' 
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
</div>
</div>
      </div>
      <div className='lg:flex'>
<div>
<p className="after:content-['*'] after:text-red-600 after:text-xl  text-1xl font-semibold mt-3">City</p>
<Form.Select className='lg:w-60 sm:w-[43rem] mt-3 rounded-none' aria-label="Default select example">
      <option>--Select City---</option>
      <option value="1">Lahore</option>
      <option value="2">Karachi</option>
      <option value="3">Kasur</option>
    </Form.Select>

</div>
<div>
<div className='lg:ml-14 mt-3'>
<p className=" text-1xl font-semibold">Zip/Postal Code</p>
<Form.Control className='lg:w-60 sm:w-[43rem] mt-4 rounded-none' 
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
</div>
</div>
      </div>
      <div className=' mt-3'>
      <p className="after:content-['*'] after:text-red-600 after:text-xl  text-1xl font-semibold mt-3">Phone Number</p>
      <div className='flex'>
<Form.Control className='lg:w-60 sm:w-[43rem] mt-4 rounded-none' 
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
       <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <button variant="success"><img className='hidden lg:block w-6 h-7 mt-4 ml-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXh7yrGUPaNARIbDhYqanyZObxwelxZmQdcQ&s"/></button>
    </OverlayTrigger>
</div>
</div>

<div className='lg:flex mt-7'>
<p className='text-2xl font-semibold'>Shipping Methods</p>
<Link to='/Header8'><p className='hover:underline lg:ml-96 mt-2 font-semibold text-sm'>See Our Shipping Policy</p></Link> 
</div>
<div className='flex mt-10'>
<div>
    <p className='font-semibold'>Select Method</p>
    <p className='mt-6'><input type='radio'/></p>
</div>
<div className='ml-3'>
    <p className='font-semibold'>Price</p>
    <p className='font-bold text-sm mt-6'>PKR 4,933.00</p>
</div>
<div className='ml-3' >
<p className='font-semibold'>Method Title</p>
<p className='font-bold  text-sm  mt-6'>Fixed</p>
</div>
<div className='ml-4'>
<p className='font-semibold'>Carrier Tilte</p>
<p className='font-bold  text-sm  mt-6'>Local Shipment</p>
</div>
</div>
<button className='mt-4 ml-96 p-2 w-16 border-black border-2 hover:text-white hover:bg-black text-lg'>Next</button>
</div>

<div className='border-1 border-black ml-4 hidden lg:block'>
</div>
  <div className='border-1 border-black ml-28 h-60 w-72 mt-36 hidden lg:block md:block'>
<p className='text-3xl text-center font-semibold mt-3 mb-2'>Order Summary</p>
<Accordion defaultActiveKey="0" className='w-60 ml-6 mt-2'>
      <Accordion.Item eventKey="0">
        <Accordion.Header className='font-semibold'>I Item In Cart</Accordion.Header>
        <Accordion.Body className='!visible !block'>
       <div className='flex h-auto '>
<div>
    <img className='h-20 w-32' src="https://www.junaidjamshed.com/media/catalog/product/2/3/23-060-11_1_.jpg?width=150&height=150&canvas=150,150&optimize=medium&bg-color=255,255,255&fit=bounds"/>
</div>
<div>
    <p className='text-[0.6rem] font-semibold'>BEIGE LAWN UNSTITCHED 3PC | JLAWN-S-23-060</p>
    <p className='text-sm font-semibold'>QTY:6</p>
    <p className='text-sm font-semibold'>PKR 27,510.00</p>
</div>
       </div>
        </Accordion.Body>
      </Accordion.Item>
    
    </Accordion>

  </div>




    </div>
    </div>
  )
}

export default Header6
