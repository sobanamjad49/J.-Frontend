
import React from 'react'
import { useState } from "react";
import { Container, Modal, Navbar, Offcanvas, Tab, Tabs } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useCart } from './context/CartContext';
function Header1() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [key, setKey] = useState("home");
  const { cart } = useCart();
  const cartItemCount = Array.isArray(cart) ? cart.length : 0;
  // Dropdown open/close state for desktop
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hoverEnabled, setHoverEnabled] = useState(true);
  return (
    <div >
      
      <div className="sticky top-0 bg-white z-50">
    <div className="hidden sm:hidden md:block lg:block">
      <div className="flex justify-between bg-gray-300 mb-3">
        <div >
      <Navbar expand="lg" className="mt-1" >
        <Container fluid>
          <p className="text-xs font-semibold ml-3 hover:underline decoration-1 ">
            WELCOME TO J.
          </p>

          <Link to="/Header10">
            <p className="text-xs font-semibold ml-7 hover:underline decoration-1 ">
              SIGN IN
            </p>
          </Link>
          <Link to="/Header11">
            <p className="text-xs font-semibold ml-7 hover:underline decoration-1 ">
              TRACKING INFO
            </p>
          </Link>
          <Link to="/Header12">
            <p className="text-xs font-semibold ml-7 hover:underline decoration-1 ">
              CORPORATE INQUIRY
            </p>
          </Link>
          <Link to="/Header13">
            <p className="text-xs font-semibold ml-7 hover:underline decoration-1 ">
              CREATE AN ACCOUNT
            </p>
          </Link>
          </Container>
          </Navbar>
          </div>
          <div>
          <div className="flex">
            <div className="flex items-center">
  {/* Search Icon Button - Responsive */}
  <button
    className="me-2 p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 w-8 h-8 sm:w-10 sm:h-10 md:w-8 md:h-8 lg:w-10 lg:h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200"
    aria-label="Open search"
  >
    <img
      className="w-5 h-5 sm:w-6 sm:h-6 md:w-5 md:h-5 lg:w-6 lg:h-6"
      src="https://cdn-icons-png.flaticon.com/128/151/151773.png"
      alt="Search"
    />
  </button>
  {/* Cart Icon and Items (unchanged) */}
  <div>
    <img
      className="w-7 h-7 mt-1 ml-2"
      src="https://www.junaidjamshed.com/static/version1744491123/frontend/Rltsquare/junaidjamshed/en_US/Magento_Theme/images/cart.png"
      alt="Cart"
    />
    <p>Cart Items: {cartItemCount}</p>
  </div>
</div>
          </div>
          </div>
      </div>
      </div>
      
      <div className=" sm:block md:hidden lg:hidden  h-11 mb-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* Menu Icon */}
            <button onClick={handleShow} className="p-1 ml-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200" aria-label="Open menu">
              <img className="w-7 h-7" src="https://cdn-icons-png.flaticon.com/512/7216/7216128.png" alt="Menu" />
            </button>
            {/* Offcanvas Mobile Menu */}
            <Offcanvas show={show} onHide={handleClose} placement="start">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Menu</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Tabs
                  id="controlled-tab-example"
                  activeKey={key}
                  onSelect={(k) => setKey(k)}
                  className="mb-3"
                >
                  <Tab
                    eventKey="home"
                    title={<div className="w-[138px] lg:w-40 "><span>MENU</span></div>}
                  >
                    <div>
                      <Link to="Header2" onClick={handleClose}><p className="font-semibold text-center text-gray-800 hover:text-red-500 hover:border-b-2 hover:border-red-500 mt-3">HOME</p></Link>
                      <Link to="MainPage" onClick={handleClose}><p className="font-semibold text-center text-gray-800 hover:text-red-500 hover:border-b-2 hover:border-red-500 mt-3">NEW ARRIVALS</p></Link>
                      <Link to="Pic84P1" onClick={handleClose}><p className="font-semibold text-center text-gray-800 hover:text-red-500 hover:border-b-2 hover:border-red-500 mt-3">SYNCC</p></Link>
                      <Link to="Pic70" onClick={handleClose}><p className="font-semibold text-center text-gray-800 hover:text-red-500 hover:border-b-2 hover:border-red-500 mt-3">WOMEN</p></Link>
                      <Link to="Men" onClick={handleClose}><p className="font-semibold text-center text-gray-800 hover:text-red-500 hover:border-b-2 hover:border-red-500 mt-3">MEN</p></Link>
                      <Link to="KIDS" onClick={handleClose}><p className="font-semibold text-center text-gray-800 hover:text-red-500 hover:border-b-2 hover:border-red-500 mt-3">BOYS & GIRLS</p></Link>
                      <Link to="Pic70" onClick={handleClose}><p className="font-semibold text-center text-gray-800 hover:text-red-500 hover:border-b-2 hover:border-red-500 mt-3">FRAGRANCES</p></Link>
                      <Link to="MakeUp" onClick={handleClose}><p className="font-semibold text-center text-gray-800 hover:text-red-500 hover:border-b-2 hover:border-red-500 mt-3">MAKEUP</p></Link>
                    </div>
                    <p className="mt-4 font-bold">Tracking Info</p>
                    <div>
                      <p className="mt-3 font-semibold ">NEED HELP?</p>
                      <div className="flex p-2">
                        <img className="w-6 " src="https://www.junaidjamshed.com/media/wysiwyg/telephone.png" />
                        <p>+92 21 111 112 111</p>
                      </div>
                      <p className="p-2">(Mon - Sat: 9am - 10pm | Sun: 11am - 8pm)</p>
                      <div className="flex p-2">
                        <img className="w-5" src="https://www.junaidjamshed.com/media/wysiwyg/email.png" />
                        <p>eshop@junaidjamshed.com</p>
                      </div>
                    </div>
                  </Tab>
                  <Tab
                    eventKey="profile"
                    title={<div className="lg:pl-5"><span>MY ACCOUNT</span></div>}
                  >
                    <p className="text-center text-2xl font-bold underline font-serif">WELCOME TO J.</p>
                    <Link to="Header10" onClick={handleClose}><p className="font-serif font-bold text-xl  mt-3 mb-2">SIGN IN</p></Link>
                    <hr />
                    <Link to="Header11" onClick={handleClose}><p className="font-serif font-bold text-xl mt-3 mb-2">TRACKING INFO</p></Link>
                    <hr />
                    <Link to="Header12" onClick={handleClose}><p className="font-serif font-bold text-xl mt-3 mb-2">CORPORATE INQUIRY</p></Link>
                    <hr />
                    <Link to="Header13" onClick={handleClose}><p className="font-serif font-bold text-xl mt-3 mb-2">CREATE AN ACCOUNT</p></Link>
                    <hr />
                    <div>
                      <p className="mt-3 font-semibold ">NEED HELP?</p>
                      <div className="flex p-2">
                        <img className="w-6 " src="https://www.junaidjamshed.com/media/wysiwyg/telephone.png" />
                        <p>+92 21 111 112 111</p>
                      </div>
                      <p className="p-2">(Mon - Sat: 9am - 10pm | Sun: 11am - 8pm)</p>
                      <div className="flex p-2">
                        <img className="w-5" src="https://www.junaidjamshed.com/media/wysiwyg/email.png" />
                        <p>eshop@junaidjamshed.com</p>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </Offcanvas.Body>
            </Offcanvas>
            {/* End Offcanvas Mobile Menu */}
            {/* Search Icon for Mobile (only one) */}
            <button
              className="ml-2 p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200"
              aria-label="Open search"
            >
            
            </button>
          </div>
          <div>
            <p>
              <img
                className="h-[2.30rem] mt-1"
                src="https://www.junaidjamshed.com/media/logo/stores/1/new_logo.png"
                alt="Logo"
              />
            </p>
          </div>
          {/* Cart Icon only, no search icon here */}
          <div className="flex items-center">
            <button  className="me-2 p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200" aria-label="Open cart">
              <img className="w-7 h-7" src="https://cdn-icons-png.flaticon.com/128/151/151773.png" alt="Cart" />
            </button>
            <Modal
              size="sm"
              show={smShow}
              onHide={() => setSmShow(false)}
              aria-labelledby="example-modal-sizes-title-lg"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg"></Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="flex justify-center ">
                  <input
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    className="px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />{" "}
                  <button
                    type="submit"
                    className="px-4 py-2 ml-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                  >
                    Search
                  </button>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        <p className="h-20 flex justify-center ">
          <img src="https://www.junaidjamshed.com/media/logo/stores/1/new_logo.png" />
        </p>
      </div>

      <div className="hidden lg:block">
        <div className="flex justify-evenly mt-4 mb-3 ">


<div>
<Link to="Header2" onClick={handleClose}>
<p className="text-md font-semibold text-gray-800 hover:text-black hover:border-b-2 hover:border-black font-serif">
              HOME
            </p>
</Link>
</div>

          <div
  className="group"
  onMouseEnter={() => { if (hoverEnabled) setOpenDropdown('NEW_ARRIVALS'); }}
  onMouseLeave={() => { setOpenDropdown(null); setHoverEnabled(true); }}
>
  <Link to="MainPage" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}>
    <button className="text-md font-semibold text-gray-800 hover:text-black hover:border-b-2 hover:border-black ">
      NEW ARRIVALS
    </button>
  </Link>
  <div className={`hidden group-hover:flex flex-col absolute left-0 p-10 w-full bg-white z-20 text-black ${openDropdown === 'NEW_ARRIVALS' ? 'flex' : 'hidden'}`}>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                <p className="text-md font-semibold">
                  <img src="https://www.junaidjamshed.com/media/catalog/product/v/o/vortex.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2" />
                </p>
                <div>
                  <p className="underline text-gray-600 font-bold  hover:text-black">
                    BODY SPRAY
                  </p>
                  <Link to="Pic61P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    ENIGMA - NO GAS POUR HOMME
                  </p></Link>
                  <p className="underline text-gray-600 font-bold  hover:text-black mt-5">
                    {" "}
                    JANAN BODY SPRAY
                  </p>
                  <Link to="Pic66P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    JANAN - NO GAS POUR HOMME{" "}
                  </p></Link>
                </div>

                <div>
                  <p className="underline text-gray-600 font-bold  hover:text-black">
                    FOR BOYS & GIRLS
                  </p>
                  <Link to="Pic63P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}>  <p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    EXODUS - NO GAS POUR HOMME
                  </p></Link>
                  <p className="underline text-gray-600 font-bold  hover:text-black mt-5">
                    ZARAR BODY SPRAY
                  </p>
                  <Link to="Pic68P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    NO GAS POUR HOMME{" "}
                  </p></Link>
                </div>

            

                <div>
                  <p className="text-md font-semibold">
                    <img src="https://www.junaidjamshed.com/media/catalog/product/v/e/velocity.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2" />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
  className="group"
  onMouseEnter={() => { if (hoverEnabled) setOpenDropdown('SYNCC'); }}
  onMouseLeave={() => { setOpenDropdown(null); setHoverEnabled(true); }}
>
  <Link to="Pic84P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}>
    <button className="text-md font-semibold text-gray-800 hover:text-black hover:border-b-2 hover:border-black font-serif">
      SYNCC
    </button>
  </Link>
  <div className={`hidden group-hover:flex flex-col absolute left-0 p-10 w-full bg-white z-20 text-black ${openDropdown === 'SYNCC' ? 'flex' : 'hidden'}`}>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                <p className="text-md font-semibold">
                  <img src="https://www.junaidjamshed.com/media/catalog/product/w/t/wtop-25-0005-a_1_.jpg?width=420&height=560&canvas=420,560&optimize=medium&bg-color=255,255,255&fit=bounds" />
                </p>
                <div>
                  <p className="underline text-gray-600 font-bold  hover:text-black">
                    TRENDY KURTI
                  </p>
                  <Link to="Pic81P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    MULTICOLOR HIGH-LOW TUIC-B
                  </p></Link>
                </div>

                <div>
                  <p className="underline text-gray-600 font-bold  hover:text-black">
                    KURIT
                  </p>
                  <Link to="Pic83P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    MULTICOLOR HIGH-LOW TUIC-B
                  </p></Link>
                </div>

                <div>
                  <p className="text-md font-semibold">
                    <video
                      src="https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/videos/Syncc-Top01.mp4"
                      autoPlay
                      loop
                      muted
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
  className="group"
  onMouseEnter={() => { if (hoverEnabled) setOpenDropdown('WOMEN'); }}
  onMouseLeave={() => { setOpenDropdown(null); setHoverEnabled(true); }}
>
  <Link to="Pic70" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}>
    <button className="text-md font-semibold text-gray-800 hover:text-black hover:border-b-2 hover:border-black">
      WOMEN
    </button>
  </Link>
  <div className={`hidden group-hover:flex flex-col absolute left-0 p-10 w-full bg-white z-20 text-black ${openDropdown === 'WOMEN' ? 'flex' : 'hidden'}`}>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                <p className="text-md font-semibold">
                  <img src="https://www.junaidjamshed.com/media/wysiwyg/ekd-312.jpg" />
                </p>
                <div>
                  <p className="underline text-gray-600 font-bold  hover:text-black">
                    STITCHED
                  </p>
                  <Link to="Pic1P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    2 piece
                  </p></Link>
                  <Link to="Pic4P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    3 piece
                  </p></Link>
                  <p className="underline text-gray-600 font-bold  hover:text-black">
                    UNSTITCHED
                  </p>
                  <Link to="Pic24P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    1 piece
                  </p></Link>
                  <Link to="Pic26P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    2 piece
                  </p></Link> 
                  <Link to="Pic28P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    3 piece
                  </p></Link>
                </div>

                <div>
                  <p className="underline text-gray-600 font-bold  hover:text-black">
                    FORMALS
                  </p>
                  <Link to="Pic35P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    FORMAL STITCHED
                  </p></Link>
                  <Link to="Pic30P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    FORMAL UNSTITCHED
                  </p></Link>
                  <Link to="Pic22P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    HANDWOVEN
                  </p></Link>
                </div>

                <div>
                  <p className="underline text-gray-600 font-bold  hover:text-black">
                    KURTI
                  </p>
                  <Link to="Pic14P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    FORMAL KURTI
                  </p></Link>
                
                </div>
              </div>
            </div>
          </div>

          <div
  className="group"
  onMouseEnter={() => { if (hoverEnabled) setOpenDropdown('MEN'); }}
  onMouseLeave={() => { setOpenDropdown(null); setHoverEnabled(true); }}
>
  <Link to="Men" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}>
    <button className="text-md font-semibold text-gray-800 hover:text-black hover:border-b-2 hover:border-black">
      MEN
    </button>
  </Link>
  <div className={`hidden group-hover:flex flex-col absolute left-0 p-10 w-full bg-white z-20 text-black ${openDropdown === 'MEN' ? 'flex' : 'hidden'}`}>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                <p className="text-md font-semibold">
                  <img src="https://www.junaidjamshed.com/media/wysiwyg/IJ-3.jpg" />
                </p>
                <div>
                  <p className="underline text-gray-600 font-bold  hover:text-black">
                    KAMEEZ SHALWAR
                  </p>
                  <Link to="Pic40P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    2 piece
                  </p></Link>
                  <Link to="Pic41P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    3 piece
                  </p></Link>
                  <p className="underline text-gray-600 font-bold  hover:text-black">
                    UNSTITCHED
                  </p>
                  <Link to="Pic46P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    1 piece
                  </p></Link>
                  <Link to="Pic48P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    2 piece
                  </p></Link>
                  <Link to="Pic45P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    3 piece
                  </p></Link>
                </div>

                <div>
                  <p className="underline text-gray-600 font-bold  hover:text-black">
                    FORMALS
                  </p>
                  <Link to="Pic47P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    FORMAL STITCHED
                  </p></Link>
                  <Link to="Pic52P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    FORMAL UNSTITCHED
                  </p></Link>
                  
                </div>

                <div>
                  <p className="underline text-gray-600 font-bold  hover:text-black">
                    KURTA
                  </p>
                  <Link to="Pic53P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    FORMAL KURTA
                  </p></Link>
                
                </div>
              </div>
            </div>
          </div>

          <div
            className="group"
            onMouseEnter={() => { if (hoverEnabled) setOpenDropdown('BOYS_GIRLS'); }}
            onMouseLeave={() => { setOpenDropdown(null); setHoverEnabled(true); }}
          >
            <Link to="KIDS" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}>
              <button className="text-md font-semibold text-gray-800 hover:text-black hover:border-b-2 hover:border-black">
                BOYS & GIRLS
              </button>
            </Link>
            <div className={`hidden group-hover:flex flex-col absolute left-0 p-10 w-full bg-white z-20 text-black ${openDropdown === 'BOYS_GIRLS' ? 'flex' : 'hidden'}`}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                <p className="text-md font-semibold">
                  <img src="https://www.junaidjamshed.com/media/wysiwyg/IJ-3.jpg" />
                </p>
                <div>
                  <p className="underline text-gray-600 font-bold  hover:text-black">
                    TEEN BOYS
                  </p>
                  <Link to="Pic41P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    2 piece
                  </p></Link>
                  <Link to="Kids42P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    3 piece
                  </p></Link>
                  <p className="underline text-gray-600 font-bold  hover:text-black">
                    TEEN GIRLS
                  </p>
                  <Link to="Kids3P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    STITCHED COLLECTION
                  </p></Link>
                  <Link to="Kids4P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    KURTI
                  </p></Link>
                </div>

                <div>
               <p className="underline text-gray-600 font-bold  hover:text-black">
                    KIDS BOYS
                  </p>
                  <Link to="Kids1P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    KURTA
                  </p></Link>
                  <Link to="Kids2P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    UNSTITCHED
                  </p></Link>
                </div>

                <div>
                  <p className="underline text-gray-600 font-bold  hover:text-black">
                    KIDS GIRLS
                  </p>
                  <Link to="Pic86P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    TROUSER
                  </p></Link>
                  <Link to="Pic89P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    PENTS
                  </p></Link>
                </div>
              </div>
            </div>
          </div>

          <div
  className="group"
  onMouseEnter={() => { if (hoverEnabled) setOpenDropdown('FRAGRANCES'); }}
  onMouseLeave={() => { setOpenDropdown(null); setHoverEnabled(true); }}
>
  <Link to="Pic70" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}>
    <button className="text-md font-semibold text-gray-800 hover:text-black hover:border-b-2 hover:border-black">
      FRAGRANCES
    </button>
  </Link>
  <div className={`hidden group-hover:flex flex-col absolute left-0 p-10 w-full bg-white z-20 text-black ${openDropdown === 'FRAGRANCES' ? 'flex' : 'hidden'}`}>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                <p className="text-md font-semibold">
                  <img src="https://www.junaidjamshed.com/media/wysiwyg/jv.jpg" />
                </p>
                <div>
                  <p className="underline text-gray-600 font-bold  hover:text-black">
                    FOR MENS
                  </p>
                  <Link to="Pic101P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    J.POUR FEMME
                  </p></Link>
                  <Link to="Pic102P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    MARJAAN
                  </p></Link>
                </div>

                <div>
                  <p className="underline text-gray-600 font-bold  hover:text-black">
                    FOR GIRLS
                  </p>
                  <Link to="Pic103P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    WASIM AKRAM 502 FOR HER
                  </p></Link>
                  <Link to="Pic100P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    JANAN POUR FEMME
                  </p></Link>
                </div>

                <div>
                  <p className="underline text-gray-600 font-bold  hover:text-black">
                    FOR OTHERS
                  </p>
                  <Link to="Pic99P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    BEAUTIFUL by Shaniera Akram
                  </p></Link>
                </div>
              </div>
            </div>
          </div>

          <div
  className="group"
  onMouseEnter={() => { if (hoverEnabled) setOpenDropdown('MAKEUP'); }}
  onMouseLeave={() => { setOpenDropdown(null); setHoverEnabled(true); }}
>
  <Link to="MakeUp" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}>
    <button className="text-md font-semibold text-gray-800 hover:text-black hover:border-b-2 hover:border-black">
      MAKEUP
    </button>
  </Link>
  <div className={`hidden group-hover:flex flex-col absolute left-0 p-10 w-full bg-white z-20 text-black ${openDropdown === 'MAKEUP' ? 'flex' : 'hidden'}`}>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                <p className="text-md font-semibold">
                  <img src="https://www.junaidjamshed.com/media/wysiwyg/W-96.jpg" />
                </p>
                 <div>
                  <p className="underline text-gray-600 font-bold  hover:text-black">
                    FACE
                  </p>
                  <Link to="Pic112P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    MATTIFYING EXTREME WEAR FOUNDATION
                  </p></Link>
                  <Link to="Pic113P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    MINERAL EYESHADOW
                  </p></Link>
                </div>

                <div>
                  <p className="underline text-gray-600 font-bold  hover:text-black">
                    LIPS
                  </p>
                  <Link to="Pic110P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    MATTE QUEEN LIQUID LIPSTICK
                  </p></Link>
                  <Link to="Pic114P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    LONG WEARING LIPSTICK
                  </p></Link>
                </div>

                <div>
                  <p className="text-md font-semibold">
                    <img src="https://www.junaidjamshed.com/media/catalog/product/m/a/main_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:hidden md:block lg:hidden">
        <div className="flex justify-center">
          <p>
            <img
              className="h-[2.30rem] mt-1 "
              src="https://www.junaidjamshed.com/media/logo/stores/1/new_logo.png"
            />
          </p>
        </div>
        <div className="flex justify-evenly space-x-7 mt-4 mb-3 ">
          <div>
          <Link to="Header2" onClick={handleClose}>
            <p className="text-md ml-2 font-semibold text-gray-800 hover:text-black hover:border-b-2 hover:border-black font-serif">
            HOME
            </p>
          </Link>
            </div>

          <div
  className="group"
  onMouseEnter={() => { if (hoverEnabled) setOpenDropdown('NEW_ARRIVALS'); }}
  onMouseLeave={() => { setOpenDropdown(null); setHoverEnabled(true); }}
>
  <Link to="MainPage" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}>
    <button className="text-md font-semibold text-gray-800 hover:text-black hover:border-b-2 hover:border-black ">
      NEW ARRIVALS
    </button>
  </Link>
  <div className={`hidden group-hover:flex  flex-col absolute left-0 p-10 w-full bg-white z-20 text-black ${openDropdown === 'NEW_ARRIVALS' ? 'flex' : 'hidden'}`}>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                <p className="text-md font-semibold">
                  <img src="https://www.junaidjamshed.com/media/catalog/product/v/o/vortex.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2" />
                </p>
                <div>
                  <p className="underline text-gray-600 font-bold  hover:text-black">
                    BODY SPRAY
                  </p>
                  <Link to="Pic61P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    ENIGMA - NO GAS POUR HOMME
                  </p></Link>
                  <p className="underline text-gray-600 font-bold  hover:text-black mt-5">
                    {" "}
                    JANAN BODY SPRAY
                  </p>
                  <Link to="Pic66P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    JANAN - NO GAS POUR HOMME{" "}
                  </p></Link>
                </div>

                <div>
                  <p className="underline text-gray-600 font-bold  hover:text-black">
                    FOR BOYS & GIRLS
                  </p>
                  <Link to="Pic63P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}>  <p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    EXODUS - NO GAS POUR HOMME
                  </p></Link>
                  <p className="underline text-gray-600 font-bold  hover:text-black mt-5">
                    ZARAR BODY SPRAY
                  </p>
                  <Link to="Pic68P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    NO GAS POUR HOMME{" "}
                  </p></Link>
                </div>

                <div>
                  <p className="text-md font-semibold">
                    <img src="https://www.junaidjamshed.com/media/catalog/product/v/e/velocity.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2" />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
  className="group"
  onMouseEnter={() => { if (hoverEnabled) setOpenDropdown('SYNCC'); }}
  onMouseLeave={() => { setOpenDropdown(null); setHoverEnabled(true); }}
>
  <Link to="Pic84P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}>
    <button className="text-md font-semibold text-gray-800 hover:text-black hover:border-b-2 hover:border-black font-serif">
      SYNCC
    </button>
  </Link>
  <div className={`hidden group-hover:flex flex-col absolute left-0 p-10 w-full bg-white z-20 text-black ${openDropdown === 'SYNCC' ? 'flex' : 'hidden'}`}>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                <p className="text-md font-semibold">
                  <img src="https://www.junaidjamshed.com/media/catalog/product/w/t/wtop-25-0005-a_1_.jpg?width=420&height=560&canvas=420,560&optimize=medium&bg-color=255,255,255&fit=bounds" />
                </p>
                <div>
                  <p className="underline text-gray-600 font-bold  hover:text-black">
                    TRENDY KURTI
                  </p>
                  <Link to="Pic81P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    MULTICOLOR HIGH-LOW TUIC-B
                  </p></Link>
                </div>

                <div>
                  <p className="underline text-gray-600 font-bold  hover:text-black">
                    KURIT
                  </p>
                  <Link to="Pic83P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    MULTICOLOR HIGH-LOW TUIC-B
                  </p></Link>
                </div>

                <div>
                  <p className="text-md font-semibold">
                    <video
                      src="https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/videos/Syncc-Top01.mp4"
                      autoPlay
                      loop
                      muted
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
  className="group"
  onMouseEnter={() => { if (hoverEnabled) setOpenDropdown('WOMEN'); }}
  onMouseLeave={() => { setOpenDropdown(null); setHoverEnabled(true); }}
>
  <Link to="Pic70" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}>
    <button className="text-md font-semibold text-gray-800 hover:text-black hover:border-b-2 hover:border-black">
      WOMEN
    </button>
  </Link>
  <div className={`hidden group-hover:flex flex-col absolute left-0 p-10 w-full bg-white z-20 text-black ${openDropdown === 'WOMEN' ? 'flex' : 'hidden'}`}>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                <p className="text-md font-semibold">
                  <img src="https://www.junaidjamshed.com/media/wysiwyg/ekd-312.jpg" />
                </p>
                <div>
                  <p className="underline text-gray-600 font-bold  hover:text-black">
                    STITCHED
                  </p>
                  <Link to="Pic1P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    2 piece
                  </p></Link>
                  <Link to="Pic4P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    3 piece
                  </p></Link>
                  <p className="underline text-gray-600 font-bold  hover:text-black">
                    UNSTITCHED
                  </p>
                  <Link to="Pic24P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    1 piece
                  </p></Link>
                  <Link to="Pic26P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    2 piece
                  </p></Link> 
                  <Link to="Pic28P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    3 piece
                  </p></Link>
                </div>

                <div>
                  <p className="underline text-gray-600 font-bold  hover:text-black">
                    FORMALS
                  </p>
                  <Link to="Pic35P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    FORMAL STITCHED
                  </p></Link>
                  <Link to="Pic30P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    FORMAL UNSTITCHED
                  </p></Link>
                  <Link to="Pic22P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    HANDWOVEN
                  </p></Link>
                </div>
                <div>
                  <p className="underline text-gray-600 font-bold  hover:text-black">
                    KURTI
                  </p>
                  <p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    FORMAL KURTI
                  </p>
                  <p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    TOPS
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
  className="group"
  onMouseEnter={() => { if (hoverEnabled) setOpenDropdown('MEN'); }}
  onMouseLeave={() => { setOpenDropdown(null); setHoverEnabled(true); }}
>
  <Link to="Men" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}>
    <button className="text-md font-semibold text-gray-800 hover:text-black hover:border-b-2 hover:border-black">
      MEN
    </button>
  </Link>
  <div className={`hidden group-hover:flex flex-col absolute left-0 p-10 w-full bg-white z-20 text-black ${openDropdown === 'MEN' ? 'flex' : 'hidden'}`}>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                <p className="text-md font-semibold">
                  <img src="https://www.junaidjamshed.com/media/wysiwyg/IJ-3.jpg" />
                </p>
                <div>
                  <p className="underline text-gray-600 font-bold  hover:text-black">
                    KAMEEZ SHALWAR
                  </p>
                  <Link to="Pic40P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    2 piece
                  </p></Link>
                  <Link to="Pic41P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    3 piece
                  </p></Link>
                  <p className="underline text-gray-600 font-bold  hover:text-black">
                    UNSTITCHED
                  </p>
                  <Link to="Pic46P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    1 piece
                  </p></Link>
                  <Link to="Pic48P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    2 piece
                  </p></Link>
                  <Link to="Pic45P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    3 piece
                  </p></Link>
                </div>

                <div>
                  <p className="underline text-gray-600 font-bold  hover:text-black">
                    FORMALS
                  </p>
                  <Link to="Pic47P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    FORMAL STITCHED
                  </p></Link>
                  <Link to="Pic52P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    FORMAL UNSTITCHED
                  </p></Link>
                  
                </div>

                <div>
                  <p className="underline text-gray-600 font-bold  hover:text-black">
                    KURTA
                  </p>
                  <Link to="Pic53P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    FORMAL KURTA
                  </p></Link>
                
                </div>
                </div>
              </div>
            </div>
         

          <div
           className="group"
           onMouseEnter={() => { if (hoverEnabled) setOpenDropdown('BOYS_GIRLS'); }}
           onMouseLeave={() => { setOpenDropdown(null); setHoverEnabled(true); }}
          >
            <Link to="KIDS" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}>
              <button className="text-md font-semibold text-gray-800 hover:text-black hover:border-b-2 hover:border-black">
                BOYS & GIRLS
              </button>
            </Link>
            <div className={`hidden group-hover:flex flex-col absolute left-0 p-10 w-full bg-white z-20 text-black ${openDropdown === 'BOYS_GIRLS' ? 'flex' : 'hidden'}`}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                <p className="text-md font-semibold">
                  <img src="https://www.junaidjamshed.com/media/wysiwyg/IJ-3.jpg" />
                </p>
                <div>
                  <p className="underline text-gray-600 font-bold  hover:text-black">
                    TEEN BOYS
                  </p>
                  <Link to="Pic41P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    2 piece
                  </p></Link>
                  <Link to="Kids42P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    3 piece
                  </p></Link>
                  <p className="underline text-gray-600 font-bold  hover:text-black">
                    TEEN GIRLS
                  </p>
                  <Link to="Kids3P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    STITCHED COLLECTION
                  </p></Link>
                  <Link to="Kids4P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    KURTI
                  </p></Link>
                </div>

                <div>
               <p className="underline text-gray-600 font-bold  hover:text-black">
                    KIDS BOYS
                  </p>
                  <Link to="Kids1P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    KURTA
                  </p></Link>
                  <Link to="Kids2P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    UNSTITCHED
                  </p></Link>
                </div>

                <div>
                  <p className="underline text-gray-600 font-bold  hover:text-black">
                    KIDS GIRLS
                  </p>
                  <Link to="Pic86P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    TROUSER
                  </p></Link>
                  <Link to="Pic89P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    PENTS
                  </p></Link>
                </div>
              </div>
            </div>
          </div>

          <div
            className="group"
            onMouseEnter={() => { if (hoverEnabled) setOpenDropdown('FRAGRANCES'); }}
            onMouseLeave={() => { setOpenDropdown(null); setHoverEnabled(true); }}
          >
            <Link to="Pic70" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}>
              <button className="text-md font-semibold text-gray-800 hover:text-black hover:border-b-2 hover:border-black">
                FRAGRANCES
              </button>
            </Link>
            <div className={`hidden group-hover:flex flex-col absolute left-0 p-10 w-full bg-white z-20 text-black ${openDropdown === 'FRAGRANCES' ? 'flex' : 'hidden'}`}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                <p className="text-md font-semibold">
                  <img src="https://www.junaidjamshed.com/media/wysiwyg/jv.jpg" />
                </p>
                <div>
                  <p className="underline text-gray-600 font-bold  hover:text-black">
                    FOR MENS
                  </p>
                  <Link to="Pic101P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    J.POUR FEMME
                  </p></Link>
                  <Link to="Pic102P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    MARJAAN
                  </p></Link>
                </div>

                <div>
                  <p className="underline text-gray-600 font-bold  hover:text-black">
                    FOR GIRLS
                  </p>
                  <Link to="Pic103P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    WASIM AKRAM 502 FOR HER
                  </p></Link>
                  <Link to="Pic100P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    JANAN POUR FEMME
                  </p></Link>
                </div>

                <div>
                  <p className="underline text-gray-600 font-bold  hover:text-black">
                    FOR OTHERS
                  </p>
                  <Link to="Pic99P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    BEAUTIFUL by Shaniera Akram
                  </p></Link>
                </div>
              </div>
            </div>
          </div>

          <div
  className="group"
  onMouseEnter={() => { if (hoverEnabled) setOpenDropdown('MAKEUP'); }}
  onMouseLeave={() => { setOpenDropdown(null); setHoverEnabled(true); }}
>
  <Link to="MakeUp" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}>
    <button className="text-md font-semibold text-gray-800 hover:text-black hover:border-b-2 hover:border-black">
      MAKEUP
    </button>
  </Link>
  <div className={`hidden group-hover:flex flex-col absolute left-0 p-10 w-full bg-white z-20 text-black ${openDropdown === 'MAKEUP' ? 'flex' : 'hidden'}`}>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                <p className="text-md font-semibold">
                  <img src="https://www.junaidjamshed.com/media/wysiwyg/W-96.jpg" />
                </p>
                 <div>
                  <p className="underline text-gray-600 font-bold  hover:text-black">
                    FACE
                  </p>
                  <Link to="Pic112P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    MATTIFYING EXTREME WEAR FOUNDATION
                  </p></Link>
                  <Link to="Pic113P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    MINERAL EYESHADOW
                  </p></Link>
                </div>

                <div>
                  <p className="underline text-gray-600 font-bold  hover:text-black">
                    LIPS
                  </p>
                  <Link to="Pic110P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    MATTE QUEEN LIQUID LIPSTICK
                  </p></Link>
                  <Link to="Pic114P1" onClick={() => { setOpenDropdown(null); setHoverEnabled(false); }}><p className="mt-6 mb-2 text-gray-600 font-medium hover:text-black">
                    LONG WEARING LIPSTICK
                  </p></Link>
                </div>

                <div>
                  <p className="text-md font-semibold">
                    <img src="https://www.junaidjamshed.com/media/catalog/product/m/a/main_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2" />
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
     </div>
 </div>
 
  )
}

export default Header1
