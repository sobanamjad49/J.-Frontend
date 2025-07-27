import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import React, { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link, Outlet } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Pagination from "react-bootstrap/Pagination";
function Men() {
  const [isList, setIsList] = useState(false);
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  return (
    <div>
    <div className="flex justify-between mt-4  ">
<div >
<Button className="bg-white text-black rounded-none ml-2 border-black sm:hidden block w-auto"  onClick={() => setLgShow(true)}>SHOP BY</Button>
<Modal
      
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton >
   
        </Modal.Header>
        <Modal.Body>
          


        <div className="flex ">
        <div className="pl-2">
          <p className="text-sm font-bold ml-3 p-2">SHOPPING OPTIONS</p>
          <hr className="w-96 mt-2" />
          <Accordion defaultActiveKey="0" >
            <Accordion.Header className="text-xs font-medium  w-[24rem] ">
              CATEGORY
            </Accordion.Header>
            <Accordion.Body className="text-xs   w-96">
              <div className="flex hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1"> 1 piece</p>
                <p className="font-medium ml-1">(43)</p>
              </div>
              <div className="flex mt-2 hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1"> 2 piece</p>
                <p className="font-medium ml-1">(143)</p>
              </div>
              <div className="flex  mt-2 hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1"> 3 piece</p>
                <p className="font-medium ml-1">(163)</p>
              </div>
            </Accordion.Body>
          </Accordion>
          <hr className="w-96 mt-2" />

          <Accordion defaultActiveKey="0" className=" w-60">
            <Accordion.Header className="text-xs font-medium  w-[24rem] ">
              STYLING
            </Accordion.Header>
            <Accordion.Body className="text-xs   w-60">
              <div className="flex mt-2 hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1"> Embroidered</p>
                <p className="font-medium ml-1">(215)</p>
              </div>
              <div className="flex mt-2 hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1">Printed</p>
                <p className="font-medium ml-1">(251)</p>
              </div>
              <div className="flex mt-2 hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1">Digital Printed</p>
                <p className="font-medium ml-1">(143)</p>
              </div>
              <div className="flex mt-2 hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1">Burnout</p>
                <p className="font-medium ml-1">(213)</p>
              </div>
              <div className="flex mt-2 hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1">Textured</p>
                <p className="font-medium ml-1">(14)</p>
              </div>
              <div className="flex mt-2 hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1">Dyed</p>
                <p className="font-medium ml-1">(16)</p>
              </div>
            </Accordion.Body>
          </Accordion>

          <hr className=" w-[24rem] mt-2" />
          <Accordion defaultActiveKey="0" className=" w-60">
            <Accordion.Header className="text-xs font-medium w-96 ">
              Color Family
            </Accordion.Header>
            <Accordion.Body className="text-xs   w-60">
              <div className="flex ">
                <Pagination>
                  <Pagination.Item>
                    {
                      <input
                        className="w-8 h-6 rounded-full ml-2"
                        type="color"
                        value="#FF0000"
                      />
                    }
                  </Pagination.Item>
                  <Pagination.Item>
                    {
                      <input
                        className="w-8 h-6 rounded-full ml-2"
                        type="color"
                        value="#6d4c41"
                      />
                    }
                  </Pagination.Item>
                  <Pagination.Item>
                    {
                      <input
                        className="w-8 h-6  rounded-full ml-2"
                        type="color"
                        value="#ffcd00"
                      />
                    }
                  </Pagination.Item>
                </Pagination>
                <Pagination >
                  <Pagination.Item>
                    {
                      <input
                        className="w-8 h-6  rounded-full ml-2"
                        type="color"
                        value="#9c27b0"
                      />
                    }
                  </Pagination.Item>
                  <Pagination.Item>
                    {
                      <input
                        className="w-8 h-6  rounded-full ml-2"
                        type="color"
                        value="#42a5f5"
                      />
                    }
                  </Pagination.Item>
                </Pagination>
              </div>
            </Accordion.Body>
          </Accordion>
          <hr className="w-96 mt-2" />

          <Accordion defaultActiveKey="0" className=" w-60">
            <Accordion.Header className="text-xs font-medium w-96 ">
              SEASON
            </Accordion.Header>
            <Accordion.Body className="text-xs   w-60">
              <div className="flex mt-2 hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1">Festive Collection</p>
                <p className="font-medium ml-1">(15)</p>
              </div>
              <div className="flex mt-2 hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1">Limited Collection</p>
                <p className="font-medium ml-1">(151)</p>
              </div>
              <div className="flex mt-2 hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1">Midsummer Collection</p>
                <p className="font-medium ml-1">(183)</p>
              </div>
              <div className="flex mt-2 hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1">Summer Collection</p>
                <p className="font-medium ml-1">(243)</p>
              </div>
              <div className="flex mt-2 hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1">Winter Collection</p>
                <p className="font-medium ml-1">(164)</p>
              </div>
              <div className="flex mt-2 hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1">Monsoon Collection</p>
                <p className="font-medium ml-1">(163)</p>
              </div>
            </Accordion.Body>
          </Accordion>
          <hr className="w-96 mt-2" />

          <Accordion defaultActiveKey="0" className=" w-96">
            <Accordion.Header className="text-xs font-medium w-96 ">
              PRODUCT CATEGORY
            </Accordion.Header>
            <Accordion.Body className="text-xs   w-60">
              <div className="flex mt-2 hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1">Unstitched 1 piece</p>
                <p className="font-medium ml-1">(615)</p>
              </div>
              <div className="flex mt-2 hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1">
                  Unstitched 2 piece - Shirt and Trouser
                </p>
                <p className="font-medium ml-1">(251)</p>
              </div>
              <div className="flex mt-2 hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1">Unstitched 3 piece</p>
                <p className="font-medium ml-1">(143)</p>
              </div>
              <div className="flex mt-2 hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1">Saree</p>
                <p className="font-medium ml-1">(6)</p>
              </div>
            </Accordion.Body>
          </Accordion>

          <hr className="w-96 mt-2" />

          <Accordion defaultActiveKey="0" className=" w-96">
            <Accordion.Header className="text-xs font-medium w-96 ">
              SIZE
            </Accordion.Header>
            <Accordion.Body className="text-xs   w-60">
              <Pagination>
                <Pagination.Item className="ml-16">
                  {
                    <input
                      className=" w-9 h-7 font-medium p-2  rounded-full  text-white bg-neutral-500  "
                      type="text"
                      value="1P"
                      disabled
                    />
                  }
                </Pagination.Item>
                <Pagination.Item>
                  {
                    <input
                      className=" w-9 h-7 font-medium p-2  rounded-full ml-2 text-white bg-neutral-500  "
                      type="text"
                      value="2P"
                      disabled
                    />
                  }
                </Pagination.Item>
                <Pagination.Item>
                  {
                    <input
                      className=" w-9 h-7 font-medium p-2  rounded-full ml-2 text-white bg-neutral-500  "
                      type="text"
                      value="3P"
                      disabled
                    />
                  }
                </Pagination.Item>
              </Pagination>
            </Accordion.Body>
          </Accordion>
          <hr className="w-96 mt-2" />
          <Accordion defaultActiveKey="0" className=" w-96">
            <Accordion.Header className="text-xs font-medium w-96 ">
              FABRIC
            </Accordion.Header>
            <Accordion.Body className="text-xs   w-96">
              <div className="flex hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1">Cotton</p>
                <p className="font-medium ml-1">(2)</p>
              </div>
              <div className="flex mt-2 hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1">Chiffon</p>
                <p className="font-medium ml-1">(2)</p>
              </div>
              <div className="flex  mt-2 hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1">Lawn</p>
                <p className="font-medium ml-1">(163)</p>
              </div>
              <div className="flex  mt-2 hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1">Cambric</p>
                <p className="font-medium ml-1">(363)</p>
              </div>
              <div className="flex  mt-2 hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1">Raw Silk</p>
                <p className="font-medium ml-1">(163)</p>
              </div>
              <div className="flex  mt-2 hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1">Khaddar</p>
                <p className="font-medium ml-1">(100)</p>
              </div>
              <div className="flex  mt-2 hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1">Textured</p>
                <p className="font-medium ml-1">(66)</p>
              </div>
              <div className="flex  mt-2 hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1">Handwoven</p>
                <p className="font-medium ml-1">(1)</p>
              </div>
            </Accordion.Body>
          </Accordion>
        </div>

        <div></div></div>

        </Modal.Body>
      </Modal>
</div>

<div>
  <div className=" sm:hidden block text-sm ">
<Dropdown>
      <Dropdown.Toggle  className="mr-8 bg-white border-black rounded-none text-black">
        SORT BY 
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item className="text-xs">SORT</Dropdown.Item>
        <Dropdown.Item className="text-xs">ALPHABETICALLY(A TO Z)</Dropdown.Item>
        <Dropdown.Item className="text-xs">ALPHABETICALLY(Z TO A)</Dropdown.Item>
        <Dropdown.Item className="text-xs">PRICE(LOW TO HIGH)</Dropdown.Item>
        <Dropdown.Item className="text-xs">PRICE(HIGH TO LOW)</Dropdown.Item>
        <Dropdown.Item className="text-xs">NEWSET ARRIVALS</Dropdown.Item>
        <Dropdown.Item className="text-xs">BEST SELLING</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>

</div>
</div>

      <div className="flex ">
        <div className="pl-2 hidden sm:block">
          <p className="text-sm font-bold ml-3 p-2 ">SHOPPING OPTIONS</p>
          <hr className="w-auto mt-2" />
          <Accordion defaultActiveKey="0" className=" w-60">
            <Accordion.Header className="text-xs font-medium w-60 ">
              CATEGORY
            </Accordion.Header>
            <Accordion.Body className="text-xs   w-60">
              <div className="flex hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1"> 1 piece</p>
                <p className="font-medium ml-1">(43)</p>
              </div>
              <div className="flex mt-2 hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1"> 2 piece</p>
                <p className="font-medium ml-1">(143)</p>
              </div>
              <div className="flex  mt-2 hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1"> 3 piece</p>
                <p className="font-medium ml-1">(163)</p>
              </div>
            </Accordion.Body>
          </Accordion>
          <hr className="w-56 mt-2" />

          <Accordion defaultActiveKey="0" className=" w-60">
            <Accordion.Header className="text-xs font-medium w-60 ">
              STYLING
            </Accordion.Header>
            <Accordion.Body className="text-xs   w-60">
              <div className="flex mt-2 hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1"> Embroidered</p>
                <p className="font-medium ml-1">(215)</p>
              </div>
              <div className="flex mt-2 hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1">Printed</p>
                <p className="font-medium ml-1">(251)</p>
              </div>
              <div className="flex mt-2 hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1">Digital Printed</p>
                <p className="font-medium ml-1">(143)</p>
              </div>
              <div className="flex mt-2 hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1">Burnout</p>
                <p className="font-medium ml-1">(213)</p>
              </div>
              <div className="flex mt-2 hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1">Textured</p>
                <p className="font-medium ml-1">(14)</p>
              </div>
              <div className="flex mt-2 hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1">Dyed</p>
                <p className="font-medium ml-1">(16)</p>
              </div>
            </Accordion.Body>
          </Accordion>

          <hr className="w-56 mt-2" />
          <Accordion defaultActiveKey="0" className=" w-60">
            <Accordion.Header className="text-xs font-medium w-60 ">
              Color Family
            </Accordion.Header>
            <Accordion.Body className="text-xs   w-60">
              <div className="flex flex-col">
                <Pagination>
                  <Pagination.Item>
                    {
                      <input
                        className="w-8 h-6 rounded-full ml-2"
                        type="color"
                        value="#FF0000"
                      />
                    }
                  </Pagination.Item>
                  <Pagination.Item>
                    {
                      <input
                        className="w-8 h-6 rounded-full ml-2"
                        type="color"
                        value="#6d4c41"
                      />
                    }
                  </Pagination.Item>
                  <Pagination.Item>
                    {
                      <input
                        className="w-8 h-6  rounded-full ml-2"
                        type="color"
                        value="#ffcd00"
                      />
                    }
                  </Pagination.Item>
                </Pagination>
                <Pagination className="ml-10 mt-3">
                  <Pagination.Item>
                    {
                      <input
                        className="w-8 h-6  rounded-full ml-2"
                        type="color"
                        value="#9c27b0"
                      />
                    }
                  </Pagination.Item>
                  <Pagination.Item>
                    {
                      <input
                        className="w-8 h-6  rounded-full ml-2"
                        type="color"
                        value="#42a5f5"
                      />
                    }
                  </Pagination.Item>
                </Pagination>
              </div>
            </Accordion.Body>
          </Accordion>
          <hr className="w-56 mt-2" />

          <Accordion defaultActiveKey="0" className=" w-60">
            <Accordion.Header className="text-xs font-medium w-60 ">
              SEASON
            </Accordion.Header>
            <Accordion.Body className="text-xs   w-60">
              <div className="flex mt-2 hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1">Festive Collection</p>
                <p className="font-medium ml-1">(15)</p>
              </div>
              <div className="flex mt-2 hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1">Limited Collection</p>
                <p className="font-medium ml-1">(151)</p>
              </div>
              <div className="flex mt-2 hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1">Midsummer Collection</p>
                <p className="font-medium ml-1">(183)</p>
              </div>
              <div className="flex mt-2 hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1">Summer Collection</p>
                <p className="font-medium ml-1">(243)</p>
              </div>
              <div className="flex mt-2 hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1">Winter Collection</p>
                <p className="font-medium ml-1">(164)</p>
              </div>
              <div className="flex mt-2 hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1">Monsoon Collection</p>
                <p className="font-medium ml-1">(163)</p>
              </div>
            </Accordion.Body>
          </Accordion>
          <hr className="w-56 mt-2" />

          <Accordion defaultActiveKey="0" className=" w-60">
            <Accordion.Header className="text-xs font-medium w-60 ">
              PRODUCT CATEGORY
            </Accordion.Header>
            <Accordion.Body className="text-xs   w-60">
              <div className="flex mt-2 hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1">Unstitched 1 piece</p>
                <p className="font-medium ml-1">(615)</p>
              </div>
              <div className="flex mt-2 hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1">
                  Unstitched 2 piece - Shirt and Trouser
                </p>
                <p className="font-medium ml-1">(251)</p>
              </div>
              <div className="flex mt-2 hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1">Unstitched 3 piece</p>
                <p className="font-medium ml-1">(143)</p>
              </div>
              <div className="flex mt-2 hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1">Saree</p>
                <p className="font-medium ml-1">(6)</p>
              </div>
            </Accordion.Body>
          </Accordion>

          <hr className="w-56 mt-2" />

          <Accordion defaultActiveKey="0" className=" w-60">
            <Accordion.Header className="text-xs font-medium w-60 ">
              SIZE
            </Accordion.Header>
            <Accordion.Body className="text-xs   w-60">
              <Pagination>
                <Pagination.Item>
                  {
                    <input
                      className=" w-9 h-7 font-medium p-2  rounded-full ml-2 text-white bg-neutral-500  "
                      type="text"
                      value="1P"
                      disabled
                    />
                  }
                </Pagination.Item>
                <Pagination.Item>
                  {
                    <input
                      className=" w-9 h-7 font-medium p-2  rounded-full ml-2 text-white bg-neutral-500  "
                      type="text"
                      value="2P"
                      disabled
                    />
                  }
                </Pagination.Item>
                <Pagination.Item>
                  {
                    <input
                      className=" w-9 h-7 font-medium p-2  rounded-full ml-2 text-white bg-neutral-500  "
                      type="text"
                      value="3P"
                      disabled
                    />
                  }
                </Pagination.Item>
              </Pagination>
            </Accordion.Body>
          </Accordion>
          <hr className="w-56 mt-2" />
          <Accordion defaultActiveKey="0" className=" w-60">
            <Accordion.Header className="text-xs font-medium w-60 ">
              FABRIC
            </Accordion.Header>
            <Accordion.Body className="text-xs   w-60">
              <div className="flex hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1">Cotton</p>
                <p className="font-medium ml-1">(2)</p>
              </div>
              <div className="flex mt-2 hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1">Chiffon</p>
                <p className="font-medium ml-1">(2)</p>
              </div>
              <div className="flex  mt-2 hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1">Lawn</p>
                <p className="font-medium ml-1">(163)</p>
              </div>
              <div className="flex  mt-2 hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1">Cambric</p>
                <p className="font-medium ml-1">(363)</p>
              </div>
              <div className="flex  mt-2 hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1">Raw Silk</p>
                <p className="font-medium ml-1">(163)</p>
              </div>
              <div className="flex  mt-2 hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1">Khaddar</p>
                <p className="font-medium ml-1">(100)</p>
              </div>
              <div className="flex  mt-2 hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1">Textured</p>
                <p className="font-medium ml-1">(66)</p>
              </div>
              <div className="flex  mt-2 hover:underline">
                <input type="radio" />
                <p className="font-medium ml-1">Handwoven</p>
                <p className="font-medium ml-1">(1)</p>
              </div>
            </Accordion.Body>
          </Accordion>
 
        </div>
<div>

<p className="text-md font-semibold mt-3 ml-4 sm:hidden block">Items 1-36 of 620</p>

 <div className="hidden lg:block mb-3">
   <div className="flex ml-6 ">
            <Link onClick={() => setIsList(false)}>
              {["bottom"].map((placement) => (
                <OverlayTrigger
                  key={placement}
                  placement={placement}
                  overlay={<Tooltip id={`tooltip-${placement}`}>Grid</Tooltip>}
                >
                  <button>
                    <img
                      className="w-5 h-5 mt-2"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcTTliSOUynMCS5twVdiHzthG3vxF4O-GU5w&s"
                    />
                  </button>
                </OverlayTrigger>
              ))}
            </Link>
            {["bottom"].map((placement) => (
              <Link onClick={() => setIsList(true)}>
                {" "}
                <OverlayTrigger
                  key={placement}
                  placement={placement}
                  overlay={<Tooltip id={`tooltip-${placement}`}>List</Tooltip>}
                >
                  <button className="ml-3">
                    <img
                      className="w-5 h-5 mt-2"
                      src="https://img.icons8.com/ios7/600w/list.png"
                    />
                  </button>
                </OverlayTrigger>
              </Link>
            ))}
            <p className="ml-6 mt-1 ">ITEMS 1-19 of 812</p>
            <div className="flex ml-auto">
              <p className="mr-2 font-medium mt-2 ">Sort By</p>

              <select className="text-black border-black border-2 text-xs mt-2 ">
                MOST RELEVANT
                <option className="text-xs">MOST RELEVANT</option>
                <option className="text-xs">ALPHABETICALLY(A TO Z)</option>
                <option className="text-xs">ALPHABETICALLY(Z TO A)</option>
                <option className="text-xs">PRICE(LOW TO HIGH)</option>
                <option className="text-xs">PRICE(HIGH TO LOW)</option>
                <option className="text-xs">NEWSET ARRIVALS</option>
                <option className="text-xs">BEST SELLING</option>
              </select>
            </div> 
          </div>

          </div> 
          {!isList ? (
            <div>
           <div class="grid lg:gap-y-5  gap-y-2 gap-x-2 lg:gap-x-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-2 mt-12">
           <div class="..." className="lg:hover:bg-white lg:hover:p-2 lg:hover:drop-shadow-2xl">
    <Link to='/Pic40P1'><img  src="https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-47408_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2"/></Link>
  <p className="ml-2 mb-2 font-semibold hover:underline">MAROON COTTON SEMI-FORMAL KURTA</p>
  <div className="flex gap-1">
<span className="font-bold ">PKR 12,490.00</span>
  </div>
  <Link to='/Pic40P1'><button className="border-2 border-black  p-2 mt-2 ml-auto  lg:w-auto w-full  hover:bg-black hover:text-white ">ADD TO BAG</button></Link>
  
  </div>

  <div class="..." className="lg:hover:bg-white lg:hover:p-2 lg:hover:drop-shadow-2xl">
    <Link to='/Pic41P1'><img  src="https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-33211_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2"/></Link>
  <p className="ml-2 mb-2 font-semibold">GREEN COTTON SEMI-FORMAL KURTA</p>
  <div className="flex ">
<span className=" font-bold " >PKR 11,192.00</span>
  </div>
  <Link to='/Pic41P1'><button className="border-2 border-black  p-2 mt-2 ml-auto  lg:w-auto w-full  hover:bg-black hover:text-white ">ADD TO BAG</button></Link>

  </div>

  <div class="..." className="lg:hover:bg-white lg:hover:p-2 lg:hover:drop-shadow-2xl">
    <Link to='/Pic43P1'><img  src="https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-47409_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2"/></Link>
  <p className="ml-2 mb-2 font-semibold">CHARCOAL GREY SEMI-FORMAL KURTA</p>
  <div className="flex ">
<span className=" font-bold " >PKR 7,992.00</span>
  </div>
  <Link to='/Pic43P1'><button className="border-2 border-black  p-2 mt-2 ml-auto  lg:w-auto w-full  hover:bg-black hover:text-white ">ADD TO BAG</button></Link>
  
  </div>

  <div class="..." className="lg:hover:bg-white lg:hover:p-2 lg:hover:drop-shadow-2xl">
    <Link to='/Pic44P1'><img  src="https://www.junaidjamshed.com/media/catalog/product/j/j/jjshk-90485_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2"/></Link>
  <p className="ml-2 mb-2 font-semibold">MAROON COTTON SEMI-FORMAL KURTA</p>
  <div className="flex ">
<span className=" font-bold " >PKR 11,192.00</span>
  </div>
  <Link to='/Pic24P1'><button className="border-2 border-black  p-2 mt-2 ml-auto  lg:w-auto w-full  hover:bg-black hover:text-white ">ADD TO BAG</button></Link>
 
  </div>

  <div class="..." className="lg:hover:bg-white lg:hover:p-2 lg:hover:drop-shadow-2xl">
    <Link to='/Pic45P1'><img  src="https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-sp-inr-a-45512_1__1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2"/></Link>
  <p className="ml-2 mb-2 font-semibold">GREY COTTON SEMI-FORMAL KURTA</p>
  <div className="flex ">
<span className=" font-bold " >PKR 7,992.00</span>
  </div>
  <Link to='/Pic45P1'><button className="border-2 border-black  p-2 mt-2 ml-auto  lg:w-auto w-full  hover:bg-black hover:text-white ">ADD TO BAG</button></Link>

  </div>

  <div class="..." className="lg:hover:bg-white lg:hover:p-2 lg:hover:drop-shadow-2xl">
    <Link to='/Pic46P1'><img  src="https://www.junaidjamshed.com/media/catalog/product/3/3/33015_2_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2"/></Link>
  <p className="ml-2 mb-2 font-semibold">BROWN COTTON SEMI-FORMAL KURTA</p>
  <div className="flex ">
<span className=" font-bold " >PKR 11,192.00</span>
  </div>
  <Link to='/Pic46P1'><button className="border-2 border-black  p-2 mt-2 ml-auto  lg:w-auto w-full  hover:bg-black hover:text-white ">ADD TO BAG</button></Link>

  </div>
  
  <div class="..." className="lg:hover:bg-white lg:hover:p-2 lg:hover:drop-shadow-2xl">
    <Link to='/Pic47P1'><img  src="https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-47309_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2"/></Link>
  <p className="ml-2 mb-2 font-semibold">DULL BLUE COTTON SEMI-FORMAL KURTA</p>
  <div className="flex ">
<span className=" font-bold " >PKR 11,192.00</span>
  </div>
  <Link to='/Pic47P1'><button className="border-2 border-black  p-2 mt-2 ml-auto  lg:w-auto w-full  hover:bg-black hover:text-white ">ADD TO BAG</button></Link>
  
  </div>

  <div class="..." className="lg:hover:bg-white lg:hover:p-2 lg:hover:drop-shadow-2xl">
    <Link to='/Pic48P1'><img  src="https://www.junaidjamshed.com/media/catalog/product/4/6/46586_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2"/></Link>
  <p className="ml-2 mb-2 font-semibold">YELLOW COTTON SEMI-FORMAL KURTA</p>
  <div className="flex ">
<span className=" font-bold " >PKR 11,192.00</span>
  </div>
  <Link to='/Pic48P1'><button className="border-2 border-black  p-2 mt-2 ml-auto  lg:w-auto w-full  hover:bg-black hover:text-white ">ADD TO BAG</button></Link>

  </div>

  <div class="..." className="lg:hover:bg-white lg:hover:p-2 lg:hover:drop-shadow-2xl">
    <Link to='/Pic49P1'><img  src="https://www.junaidjamshed.com/media/catalog/product/3/4/34890_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2"/></Link>
  <p className="ml-2 mb-2 font-semibold">DARK BLUE COTTON SEMI-FORMAL KURTA</p>
  <div className="flex ">
<span className=" font-bold " >PKR 11,192.00</span>
  </div>
  <Link to='/Pic49P1'><button className="border-2 border-black  p-2 mt-2 ml-auto  lg:w-auto w-full  hover:bg-black hover:text-white ">ADD TO BAG</button></Link> 
  
  </div>

  <div class="..." className="lg:hover:bg-white lg:hover:p-2 lg:hover:drop-shadow-2xl">
    <Link to='/Pic50P1'><img  src="https://www.junaidjamshed.com/media/catalog/product/4/6/46463_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2"/></Link>
  <p className="ml-2 mb-2 font-semibold">DULL BLUE COTTON  EMBROIDERED SCHIFFLI 3PC STITCHED</p>
  <div className="flex ">
<span className=" font-bold " >PKR 11,192.00</span>
  </div>
  <Link to='/Pic50P1'><button className="border-2 border-black  p-2 mt-2 ml-auto  lg:w-auto w-full  hover:bg-black hover:text-white ">ADD TO BAG</button></Link>

  </div>

  <div class="..." className="lg:hover:bg-white lg:hover:p-2 lg:hover:drop-shadow-2xl">
    <Link to='/Pic51P1'><img  src="https://www.junaidjamshed.com/media/catalog/product/3/3/33125_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2"/></Link>
  <p className="ml-2 mb-2 font-semibold">HALF WHITE COTTON  EMBROIDERED SCHIFFLI 3PC STITCHED</p>
  <div className="flex ">
<span className=" font-bold " >PKR 11,192.00</span>
  </div>
  <Link to='/Pic51P1'><button className="border-2 border-black  p-2 mt-2 ml-auto  lg:w-auto w-full  hover:bg-black hover:text-white ">ADD TO BAG</button></Link>

  </div>

  <div class="..." className="lg:hover:bg-white lg:hover:p-2 lg:hover:drop-shadow-2xl">
    <Link to='/Pic52P1'><img  src="https://www.junaidjamshed.com/media/catalog/product/3/3/33123_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2"/></Link>
  <p className="ml-2 mb-2 font-semibold">SKY BLUE COTTON  EMBROIDERED SCHIFFLI 3PC STITCHED</p>
  <div className="flex ">
<span className=" font-bold " >PKR 11,192.00</span>
  </div>
  <Link to='/Pic52P1'><button className="border-2 border-black  p-2 mt-2 ml-auto  lg:w-auto w-full  hover:bg-black hover:text-white ">ADD TO BAG</button></Link>
 
  </div>

  <div class="..." className="lg:hover:bg-white lg:hover:p-2 lg:hover:drop-shadow-2xl">
    <Link to='/Pic53P1'><img  src="https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-sp-48131_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2"/></Link>
  <p className="ml-2 mb-2 font-semibold">BLACK FORMAL  EMBROIDERED SCHIFFLI 3PC STITCHED</p>
  <div className="flex ">
<span className=" font-bold " >PKR 11,192.00</span>
  </div>
  <Link to='/Pic53P1'> <button className="border-2 border-black  p-2 mt-2 ml-auto  lg:w-auto w-full  hover:bg-black hover:text-white ">ADD TO BAG</button></Link>
 
  </div>

  <div class="..." className="lg:hover:bg-white lg:hover:p-2 lg:hover:drop-shadow-2xl">
    <Link to='/Pic54P1'><img  src="https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-sp-48126_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2"/></Link>
  <p className="ml-2 mb-2 font-semibold">DEEP PURPLE  EMBROIDERED SCHIFFLI 3PC STITCHED</p>
  <div className="flex ">
<span className=" font-bold " >PKR 11,192.00</span>
  </div>
  <Link to='/Pic54P1'> <button className="border-2 border-black  p-2 mt-2 ml-auto  lg:w-auto w-full  hover:bg-black hover:text-white ">ADD TO BAG</button></Link>
 
  </div>

  <div class="..." className="lg:hover:bg-white lg:hover:p-2 lg:hover:drop-shadow-2xl">
    <Link to='/Pic55P1'><img  src="https://www.junaidjamshed.com/media/catalog/product/3/4/34730_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2"/></Link>
  <p className="ml-2 mb-2 font-semibold">RED BLENDED  EMBROIDERED SCHIFFLI 3PC STITCHED</p>
  <div className="flex ">
<span className=" font-bold " >PKR 11,192.00</span>
  </div>
  <Link to='/Pic55P1'><button className="border-2 border-black  p-2 mt-2 ml-auto  lg:w-auto w-full  hover:bg-black hover:text-white ">ADD TO BAG</button></Link>
  
  </div>


 



</div>
            </div>
          ) : (
              <div>
            
                          <div className="flex   mt-5 hover:bg-white hover:shadow-lg  hover:drop-shadow-2xl ">
                            <div>
                           <Link to="/Pic44P1"> <img
                              className="lg:w-[17rem] "
                              src="https://www.junaidjamshed.com/media/catalog/product/j/j/jjshk-90485_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=240&canvas=240:300&dpr=2"
                            /></Link>
                            </div>
            
                            <div className="ml-3">
                            <Link to="/Pic44P1">  <p className="text-sm  mt-3 ">
                            MAROON COTTON SEMI-FORMAL KURTA
                              </p></Link>
                              <p className="font-bold">   PKR 11,192.00</p>
                              <Link to="/Pic44P1"> <button className="border-black border-2 mt-3 p-2 font-semibold hover:bg-black hover:text-white">
                                ADD TO BAG
                              </button></Link>
                              <p className="underline text-md font-bold mb-3 mt-4">
                                Basic 3 Piece
                              </p>
                              <p className="text-xs font-semibold">
                                Printed Jacquard Dupatta : 2.5 Meters
                              </p>
                              <p className="text-xs font-semibold">
                                Foil Cambric Shirt: 2.5 Meters
                              </p>
                              <p className="text-xs font-semibold">
                                {" "}
                                Cambric Trouser: 2.25 Meters
                              </p>
                            </div>
                          </div>
            
                          <div className="flex   mt-5 hover:bg-white hover:shadow-lg  hover:drop-shadow-2xl ">
                            <div>
                           <Link to="/Pic47P1"> <img
                              className="lg:w-[17rem] "
                              src="https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-47309_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=240&canvas=240:300&dpr=2"
                            /></Link>
                            </div>
            
                            <div className="ml-3">
                            <Link to="/Pic47P1">  <p className="text-sm  mt-3 ">
                            DULL BLUE COTTON SEMI-FORMAL KURTA
                              </p></Link>
                              <p className="font-bold">   PKR 11,192.00</p>
                              <Link to="/Pic47P1"> <button className="border-black border-2 mt-3 p-2 font-semibold hover:bg-black hover:text-white">
                                ADD TO BAG
                              </button></Link>
                              <p className="underline text-md font-bold mb-3 mt-4">
                                Basic 3 Piece
                              </p>
                              <p className="text-xs font-semibold">
                                Printed Jacquard Dupatta : 2.5 Meters
                              </p>
                              <p className="text-xs font-semibold">
                                Foil Cambric Shirt: 2.5 Meters
                              </p>
                              <p className="text-xs font-semibold">
                                {" "}
                                Cambric Trouser: 2.25 Meters
                              </p>
                            </div>
                          </div>
            
                          <div className="flex   mt-5 hover:bg-white hover:shadow-lg  hover:drop-shadow-2xl ">
                            <div>
                           <Link to="/Pic48P1"> <img
                              className="lg:w-[17rem] "
                              src="https://www.junaidjamshed.com/media/catalog/product/4/6/46586_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=240&canvas=240:300&dpr=2"
                            /></Link>
                            </div>
            
                            <div className="ml-3">
                            <Link to="/Pic48P1">  <p className="text-sm  mt-3 ">
                            YELLOW COTTON SEMI-FORMAL KURTA
                              </p></Link>
                              <p className="font-bold">   PKR 11,192.00</p>
                              <Link to="/Pic48P1"> <button className="border-black border-2 mt-3 p-2 font-semibold hover:bg-black hover:text-white">
                                ADD TO BAG
                              </button></Link>
                              <p className="underline text-md font-bold mb-3 mt-4">
                                Basic 3 Piece
                              </p>
                              <p className="text-xs font-semibold">
                                Printed Jacquard Dupatta : 2.5 Meters
                              </p>
                              <p className="text-xs font-semibold">
                                Foil Cambric Shirt: 2.5 Meters
                              </p>
                              <p className="text-xs font-semibold">
                                {" "}
                                Cambric Trouser: 2.25 Meters
                              </p>
                            </div>
                          </div>

                          <div className="flex   mt-5 hover:bg-white hover:shadow-lg  hover:drop-shadow-2xl ">
                            <div>
                           <Link to="/Pic49P1"> <img
                              className="lg:w-[17rem] "
                              src="https://www.junaidjamshed.com/media/catalog/product/3/4/34890_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=240&canvas=240:300&dpr=2"
                            /></Link>
                            </div>
            
                            <div className="ml-3">
                            <Link to="/Pic49P1">  <p className="text-sm  mt-3 ">
                            DARK BLUE COTTON SEMI-FORMAL KURTA
                              </p></Link>
                              <p className="font-bold">   PKR 11,192.00</p>
                              <Link to="/Pic49P1"> <button className="border-black border-2 mt-3 p-2 font-semibold hover:bg-black hover:text-white">
                                ADD TO BAG
                              </button></Link>
                              <p className="underline text-md font-bold mb-3 mt-4">
                                Basic 3 Piece
                              </p>
                              <p className="text-xs font-semibold">
                                Printed Jacquard Dupatta : 2.5 Meters
                              </p>
                              <p className="text-xs font-semibold">
                                Foil Cambric Shirt: 2.5 Meters
                              </p>
                              <p className="text-xs font-semibold">
                                {" "}
                                Cambric Trouser: 2.25 Meters
                              </p>
                            </div>
                          </div>
            
                          <div className="flex   mt-5 hover:bg-white hover:shadow-lg  hover:drop-shadow-2xl ">
                            <div>
                           <Link to="/Pic41P1"> <img
                              className="lg:w-[17rem] "
                              src="https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-33211_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2"
                            /></Link>
                            </div>
            
                            <div className="ml-3">
                            <Link to="/Pic41P1">  <p className="text-sm  mt-3 ">
                            GREEN COTTON SEMI-FORMAL KURTA
                              </p></Link>
                              <p className="font-bold">   PKR 11,192.00</p>
                              <Link to="/Pic41P1"> <button className="border-black border-2 mt-3 p-2 font-semibold hover:bg-black hover:text-white">
                                ADD TO BAG
                              </button></Link>
                              <p className="underline text-md font-bold mb-3 mt-4">
                                Basic 3 Piece
                              </p>
                              <p className="text-xs font-semibold">
                                Printed Jacquard Dupatta : 2.5 Meters
                              </p>
                              <p className="text-xs font-semibold">
                                Foil Cambric Shirt: 2.5 Meters
                              </p>
                              <p className="text-xs font-semibold">
                                {" "}
                                Cambric Trouser: 2.25 Meters
                              </p>
                            </div>
                          </div>
            
                          <div className="flex   mt-5 hover:bg-white hover:shadow-lg  hover:drop-shadow-2xl ">
                            <div>
                           <Link to="/Pic43P1"> <img
                              className="lg:w-[17rem] "
                              src="https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-47409_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2"
                            /></Link>
                            </div>
            
                            <div className="ml-3">
                            <Link to="/Pic43P1">  <p className="text-sm  mt-3 ">
                            CHARCOAL GREY COTTON SEMI-FORMAL KURTA
                              </p></Link>
                              <p className="font-bold">   PKR 11,192.00</p>
                              <Link to="/Pic43P1"> <button className="border-black border-2 mt-3 p-2 font-semibold hover:bg-black hover:text-white">
                                ADD TO BAG
                              </button></Link>
                              <p className="underline text-md font-bold mb-3 mt-4">
                                Basic 3 Piece
                              </p>
                              <p className="text-xs font-semibold">
                                Printed Jacquard Dupatta : 2.5 Meters
                              </p>
                              <p className="text-xs font-semibold">
                                Foil Cambric Shirt: 2.5 Meters
                              </p>
                              <p className="text-xs font-semibold">
                                {" "}
                                Cambric Trouser: 2.25 Meters
                              </p>
                            </div>
                          </div>
            
                          <div className="flex   mt-5 hover:bg-white hover:shadow-lg  hover:drop-shadow-2xl ">
                            <div>
                           <Link to="/Pic45P1"> <img
                              className="lg:w-[17rem] "
                              src="https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-sp-inr-a-45512_1__1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2"
                            /></Link>
                            </div>
            
                            <div className="ml-3">
                            <Link to="/Pic45P1">  <p className="text-sm  mt-3 ">
                            GREY COTTON SEMI-FORMAL KURTA
                              </p></Link>
                              <p className="font-bold">   PKR 11,192.00</p>
                              <Link to="/Pic45P1"> <button className="border-black border-2 mt-3 p-2 font-semibold hover:bg-black hover:text-white">
                                ADD TO BAG
                              </button></Link>
                              <p className="underline text-md font-bold mb-3 mt-4">
                                Basic 3 Piece
                              </p>
                              <p className="text-xs font-semibold">
                                Printed Jacquard Dupatta : 2.5 Meters
                              </p>
                              <p className="text-xs font-semibold">
                                Foil Cambric Shirt: 2.5 Meters
                              </p>
                              <p className="text-xs font-semibold">
                                {" "}
                                Cambric Trouser: 2.25 Meters
                              </p>
                            </div>
                          </div>
            
                        </div>
          )}
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default Men;
