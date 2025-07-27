import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState, useRef } from "react";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import Modal from "react-bootstrap/Modal";
import { useCart } from '../context/CartContext';
function Checkout() {
  const { cart } = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const target = useRef(null);
  // State for Sign In Offcanvas
  const [showSignIn, setShowSignIn] = useState(false);

  // State for Order Summary Offcanvas
  const [showOrderSummary, setShowOrderSummary] = useState(false);

  // Toggle function for Sign In Offcanvas
  const handleSignInToggle = () => setShowSignIn((prev) => !prev);

  // Toggle function for Order Summary Offcanvas
  const handleOrderSummaryToggle = () => setShowOrderSummary((prev) => !prev);

  const renderTooltip = (props) => (
    <Tooltip className="mt-2" id="button-tooltip" {...props}>
      <p>For delivery questions.</p>
    </Tooltip>
    
  );

  return (
    <div>
      <div class="container-fluid">
        <div class="row">
          <div className="bg-gray-100 block lg:hidden md:hidden p-2 ">
            <div className="flex  justify-end gap-3">
              {/* Button to open the Sign In Offcanvas */}
              <button variant="primary" onClick={handleSignInToggle}>
                Sign In
              </button>

              {/* Sign In Offcanvas */}
              <Offcanvas
                show={showSignIn}
                onHide={handleSignInToggle}
                placement="end"
              >
                <Offcanvas.Header
                  className="ml-auto"
                  closeButton
                ></Offcanvas.Header>
                <Offcanvas.Body>
                  <p className="font-medium">SIGN IN</p>
                  <Form>
                    <Form.Group className="lg:w-80 w-full">
                      <Form.Label className="mt-4 after:content-['*'] after:text-red-600 after:font-bold text-1xl font-normal">
                        Email Address
                      </Form.Label>
                      <Form.Control
                        className="rounded-none border-t-0 border-l-0 border-r-0"
                        type="email"
                        required
                      />

                      <Form.Label className="mt-4 after:content-['*'] after:text-red-600 after:font-bold text-1xl font-normal">
                        Password
                      </Form.Label>
                      <Form.Control
                        className="rounded-none border-t-0 border-l-0 border-r-0"
                        type="password"
                        required
                      />
                    </Form.Group>
                    <div className="mt-4 flex justify-between">
                      <span className="text-sm font-medium hover:text-gray-400">
                        Forgot Your Password?
                      </span>
                      <button type="submit">Sign In</button>
                    </div>
                  </Form>
                </Offcanvas.Body>
              </Offcanvas>

              {/* Button to open the Order Summary Offcanvas */}
              <button variant="primary" onClick={handleOrderSummaryToggle}>
                <img
                  className="w-5 h-5"
                  src="https://cdn-icons-png.flaticon.com/512/60/60992.png"
                  alt="sign in icon"
                />
              </button>

              {/* Order Summary Offcanvas */}
              <Offcanvas
                show={showOrderSummary}
                onHide={handleOrderSummaryToggle}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Order Summary</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <div className="col-12 col-md-5 col-lg-3 ">
     
            <div className="h-80 border-1 w-[22rem]  overflow-y-auto border-black p-8  ">
              <span className="text-3xl  font-semibold mt-3 ">
                Order Summary
              </span>
              
      <div className="space-y-6 ">
        {cart.map((item, index) => (
          <div key={index} className="flex items-center justify-between border-b pb-4 mt-[10px]">
            <div className="flex items-center">
              {/* Display product image */}
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover" />
              <div className="ml-6">
                <p className="text-xs mt-[-5px] font-semibold">{item.name}</p>
                <p className="text-gray-600">PKR {item.price} x {item.quantity}</p>
                <p className="text-sm font-semibold">Total: PKR {(item.price * item.quantity).toFixed(2)}</p>
                <p className="text-md font-semibold mt-2">Selected Size: {item.size || "N/A"}</p>
              </div>
            </div>
          </div>
        ))}

        <div className="text-right text-2xl font-bold mt-8">
          Total Amount: PKR {totalPrice.toFixed(2)} {/* Show updated total price */}
        </div>

        
      </div>
              {/* <Accordion defaultActiveKey="0" className="w-auto  mt-2 ">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="font-semibold">
                    I Item In Cart
                  </Accordion.Header>
                  <Accordion.Body className="!visible !block">
                    <div className="flex h-auto ">
                      <div>
                        <img
                          className="h-20 w-32"
                          src="https://www.junaidjamshed.com/media/catalog/product/3/2/3210_4_.jpg?width=150&height=150&canvas=150,150&optimize=medium&bg-color=255,255,255&fit=bounds"
                        />
                      </div>
                      <div>
                        <p className="text-[0.6rem] font-semibold">
                          BEIGE LAWN UNSTITCHED 3PC | JLAWN-S-23-060
                        </p>
                        <p className="text-sm font-semibold">QTY:1</p>
                        <p className="text-sm font-semibold">PKR 4,585.00</p>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion> */}
            </div>
          </div>
                </Offcanvas.Body>
              </Offcanvas>
            </div>
            <p className="font-bold text-xl">Estimated Total</p>
            <p className="font-bold text-xl">PKR 4,585.00</p>
          </div>

          <div className="sm:block hidden">
            <div className="flex justify-center ">
              <img
                className="w-16 mb-5"
                src="https://t3.ftcdn.net/jpg/01/31/38/66/360_F_131386691_masUVl2XJWujkvbJrCfZPdGZIG9MIKjv.jpg"
              />
              <p className="font-normal text-5xl mt-2">Secure CHECKOUT</p>
            </div>
          </div>

          <div className="sm:block hidden">
            <div className="flex items-center gap-3">
              
            
              <span className="ml-auto mt-3 ">
                <button className="hover:underline hover:font-bold" variant="primary" onClick={handleShow}>
                  Sign In
                </button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton></Modal.Header>
                  <Modal.Body>
                    <Form>
                      <p className="font-medium">SIGN IN</p>
                      <Form>
                        <Form.Group className="lg:w-80 w-full">
                          <Form.Label className="mt-4 after:content-['*'] after:text-red-600 after:font-bold text-1xl font-normal">
                            Email Address
                          </Form.Label>
                          <Form.Control
                            className="rounded-none border-t-0 border-l-0 border-r-0"
                            type="email"
                            required
                          />

                          <Form.Label className="mt-4 after:content-['*'] after:text-red-600 after:font-bold text-1xl font-normal">
                            Password
                          </Form.Label>
                          <Form.Control
                            className="rounded-none border-t-0 border-l-0 border-r-0"
                            type="password"
                            required
                          />
                        </Form.Group>
                        <div className="mt-4 flex justify-between">
                          <span className="text-sm font-medium hover:text-gray-400">
                            Forgot Your Password?
                          </span>
                          <button type="submit">Sign In</button>
                        </div>
                      </Form>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </span>
            </div>
          </div>

          <p className="text-2xl font-bold mb-4 mt-5">Shipping Address</p>

          <div className="col-12  col-md-7 col-lg-8">
            <Form>
              <div className="flex">
                <Form.Group className="lg:w-80 w-full">
                  <Form.Label className="after:content-['*'] after:text-red-600 after:font-bold text-1xl font-semibold">
                    Email Address
                  </Form.Label>
                  <Form.Control
                    className="rounded-none "
                    type="email"
                    required
                  />
                </Form.Group>
              </div>

         
              <p className="text-sm font-semibold mt-2">
                You can create an account after checkout.
              </p>
              <hr className="w-full mt-9" />
              <div className="lg:flex md:flex  gap-4">
                <Form.Group className="lg:w-80 w-full">
                  <Form.Label className="after:content-['*'] after:text-red-600 after:font-bold text-1xl font-semibold lg:mt-0 mt-2">
                    First Name
                  </Form.Label>
                  <Form.Control
                    className="rounded-none lg:mt-0 mt-2 "
                    type="name"
                    required
                  />
                 
                </Form.Group>

                <Form.Group className="lg:w-80 w-full ">
                  <Form.Label className="after:content-['*'] after:text-red-600 after:font-bold text-1xl font-semibold lg:mt-0 mt-2">
                    Last Name
                  </Form.Label>
                  <Form.Control
                    className="rounded-none lg:mt-0 mt-2 "
                    type="name"
                    required
                  />
                  
                </Form.Group>
              </div>

              <Form.Group className="mb-3 mt-3 " controlId="formGridAddress1">
                <Form.Label className="after:content-['*'] after:text-red-600 after:text-xl  text-1xl font-semibold mt-3">
                  Address
                </Form.Label>
                <Form.Control
                  className="lg:w-[42rem] w-full rounded-none "
                  required
                />
              
              </Form.Group>

              <div className="lg:flex md:flex  gap-4">
                <Form.Group className="lg:w-80  w-full ">
                  <p className="after:content-['*'] after:text-red-600 after:text-xl  text-1xl font-semibold mt-0 ">
                    Country
                  </p>
                  <Form.Select
                    className="  rounded-none mt-2"
                    aria-label="Default select example"
                  >
                    <option>Pakistan</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="lg:w-80 w-full ">
                  <Form.Label className="after:content-['*'] after:text-red-600 after:font-bold text-1xl font-semibold  lg:mt-0 mt-2">
                    State/Province
                  </Form.Label>
                  <Form.Control
                    className="rounded-none mt-1 "
                    type="text"
                    required
                  />
                </Form.Group>
              </div>

              <div className="lg:flex md:flex  gap-4">
                <Form.Group className="lg:w-80  w-full ">
                  <p className="after:content-['*'] after:text-red-600 after:text-xl  text-1xl font-semibold mt-0 ">
                    City
                  </p>
                  <Form.Select
                    className="  rounded-none mt-2"
                    aria-label="Default select example"
                  >
                    <option>--Select City---</option>
                    <option value="1">Lahore</option>
                    <option value="2">Karachi</option>
                    <option value="3">Kasur</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="lg:w-80 w-full ">
                  <Form.Label className="text-1xl font-semibold  lg:mt-0 mt-2">
                    Zip/Postal Code
                  </Form.Label>
                  <Form.Control
                    className="rounded-none mt-1 "
                    type="text"
                    required
                  />
                </Form.Group>
              </div>

              <div className=" mt-3">
                <p className="after:content-['*'] after:text-red-600 after:text-xl  text-1xl font-semibold mt-3">
                  Phone Number
                </p>
                <div className="flex">
                  <Form.Control
                    className="lg:w-60 sm:w-[43rem] mt-4 rounded-none"
                    type="text"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                    required
                  />
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                  >
                    <button variant="success" className="sm:block hidden">
                      <img
                        className="hidden lg:block w-6 h-7 mt-4 ml-3"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXh7yrGUPaNARIbDhYqanyZObxwelxZmQdcQ&s"
                      />
                    </button>
                  </OverlayTrigger>
                </div>
            
              </div>

              <div className="lg:flex md:flex justify-end mt-7 mb-3">
            
                <Link to="/Header8">
                  <p className="hover:underline  mt-2 font-semibold text-sm ">
                    See Our Shipping Policy
                  </p>
                </Link>
              </div>

            

              <div className="flex justify-center">
              <Link to="/Payment">
          <button 
            className="mt-6 p-3 bg-black text-white font-bold rounded-lg hover:bg-gray-800"
          >
            Place Order
          </button>
        </Link>
              </div>
            </Form>
          </div>

  

          <div className="col-12 col-md-5 col-lg-3 ">
     
            <div className="h-80 border-1 w-[22rem]  overflow-y-auto border-black p-8 sm:block hidden ">
              <span className="text-3xl  font-semibold mt-3 ">
                Order Summary
              </span>
              
      <div className="space-y-6 ">
        {cart.map((item, index) => (
          <div key={index} className="flex items-center justify-between border-b pb-4 mt-[10px]">
            <div className="flex items-center">
              {/* Display product image */}
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover" />
              <div className="ml-6">
                <p className="text-xs mt-[-5px] font-semibold">{item.name}</p>
                <p className="text-gray-600">PKR {item.price} x {item.quantity}</p>
                <p className="text-sm font-semibold">Total: PKR {(item.price * item.quantity).toFixed(2)}</p>
                <p className="text-md font-semibold mt-2">Selected Size: {item.size || "N/A"}</p>
              </div>
            </div>
          </div>
        ))}

        <div className="text-right text-2xl font-bold mt-8">
          Total Amount: PKR {totalPrice.toFixed(2)} {/* Show updated total price */}
        </div>

        
      </div>
              {/* <Accordion defaultActiveKey="0" className="w-auto  mt-2 ">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="font-semibold">
                    I Item In Cart
                  </Accordion.Header>
                  <Accordion.Body className="!visible !block">
                    <div className="flex h-auto ">
                      <div>
                        <img
                          className="h-20 w-32"
                          src="https://www.junaidjamshed.com/media/catalog/product/3/2/3210_4_.jpg?width=150&height=150&canvas=150,150&optimize=medium&bg-color=255,255,255&fit=bounds"
                        />
                      </div>
                      <div>
                        <p className="text-[0.6rem] font-semibold">
                          BEIGE LAWN UNSTITCHED 3PC | JLAWN-S-23-060
                        </p>
                        <p className="text-sm font-semibold">QTY:1</p>
                        <p className="text-sm font-semibold">PKR 4,585.00</p>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;

