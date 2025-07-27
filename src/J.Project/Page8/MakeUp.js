import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import React, { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link, Outlet } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Pagination from "react-bootstrap/Pagination";
function MakeUp() {
    const [selectedPage, setSelectedPage] = useState(1); // State to track the selected page
  const totalPages = 4; // Total number of pages, aap apne data ke hisaab se update kar sakte hain

  // Handle page click (for numbered pages)
  const handlePageClick = (pageNumber) => {
    setSelectedPage(pageNumber);
  };

  // Handle Next button click
  const handleNextClick = () => {
    if (selectedPage < totalPages) {
      setSelectedPage(selectedPage + 1);
    }
  };

  // Handle Previous button click
  const handlePreviousClick = () => {
    if (selectedPage > 1) {
      setSelectedPage(selectedPage - 1);
    }
  };
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
            <Accordion.Body className="text-xs !visible !block w-96">
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
            <Accordion.Body className="text-xs !visible !block   w-60">
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
            <Accordion.Body className="text-xs !visible !block    w-60">
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
            <Accordion.Body className="text-xs !visible !block   w-60">
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
            <Accordion.Body className="text-xs  !visible !block   w-60">
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
            <Accordion.Body className="text-xs !visible !block   w-60">
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
            <Accordion.Body className="text-xs !visible !block   w-96">
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
            <Accordion.Body className="text-xs !visible !block   w-60">
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
            <Accordion.Body className="text-xs !visible !block   w-60">
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
            <Accordion.Body className="text-xs !visible !block    w-60">
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
            <Accordion.Body className="text-xs  !visible !block  w-60">
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
            <Accordion.Body className="text-xs  !visible !block  w-60">
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
            <Accordion.Body className="text-xs  !visible !block  w-60">
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
            <Accordion.Body className="text-xs !visible !block   w-60">
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

<p className="text-md font-semibold mt-3 ml-4 sm:hidden block">6 Items </p>

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
            <p className="ml-6 mt-1 ">6 ITEMS</p>
            <div className="flex ml-auto">
              <p className="mr-2 font-medium mt-2 ">Sort By</p>

              <select className="text-black border-black border-2 text-xs mt-2 w-auto ">
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
           <div class="grid lg:gap-y-5  gap-y-2 gap-x-2 lg:gap-x-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-2 ">
 <div class="..." className="lg:hover:bg-white lg:hover:p-2 lg:hover:drop-shadow-2xl">
    <span className="absolute ml-2 bg-red-500 text-white w-auto p-auto sm:block lg:hidden mt-12 ">25% OFF</span>
    <Link to='/Pic110P1'><img  src="https://www.junaidjamshed.com/media/catalog/product/m/a/matte_queen_liquid_lipstick_16_1__1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2"/></Link>
  <p className="ml-2 mb-2 font-semibold">MATTE QUEEN LIQUID LIPSTICK
  </p>
  <div className="flex gap-1">
  <span className=" bg-red-500 text-white w-fit h-fit  p-1  lg:block hidden " >25% OFF</span><span className="text-red-500 font-bold ">PKR 6,490.00</span><span className=" font-bold line-through" >PKR 8,890.00</span>
  </div>
 <Link to="/Pic110P1"><button className="border-2 border-black  p-2 mt-2 ml-auto  lg:w-auto w-full  hover:bg-black hover:text-white ">ADD TO BAG</button></Link>
  </div>

  <div class="..." className="lg:hover:bg-white lg:hover:p-2 lg:hover:drop-shadow-2xl">
    <span className="absolute ml-2 bg-red-500 text-white w-auto p-auto sm:block lg:hidden mt-12 ">25% OFF</span>
    <Link to='/Pic111P1'><img  src="https://www.junaidjamshed.com/media/catalog/product/r/o/romantic_date_2_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2"/></Link>
  <p className="ml-2 mb-2 font-semibold">FLAWLESS EYESHADOW</p>
  <div className="flex gap-1">
  <span className=" bg-red-500 text-white w-fit h-fit  p-1  lg:block hidden " >25% OFF</span><span className="text-red-500 font-bold ">PKR 6,490.00</span><span className=" font-bold line-through" > PKR 8,290.00</span>
  </div>
  <Link to="/Pic111P1"><button className="border-2 border-black  p-2 mt-2 ml-auto  lg:w-auto w-full  hover:bg-black hover:text-white ">ADD TO BAG</button></Link>
  </div>

  <div class="..." className="lg:hover:bg-white lg:hover:p-2 lg:hover:drop-shadow-2xl">
    <span className="absolute ml-2 bg-red-500 text-white w-auto p-auto sm:block lg:hidden mt-12 ">25% OFF</span>
    <Link to='/Pic112P1'><img  src="https://www.junaidjamshed.com/media/catalog/product/m/a/mattifying_extreme_wear_foundation.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2"/></Link>
  <p className="ml-2 mb-2 font-semibold">MATTIFYING EXTREME WEAR FOUNDATION</p>
  <div className="flex gap-1">
  <span className=" bg-red-500 text-white w-fit h-fit  p-1  lg:block hidden " >25% OFF</span><span className="text-red-500 font-bold ">PKR 6,490.00</span><span className=" font-bold line-through" > PKR 8,290.00</span>
  </div>
  <Link to="/Pic112P1"><button className="border-2 border-black  p-2 mt-2 ml-auto  lg:w-auto w-full  hover:bg-black hover:text-white ">ADD TO BAG</button></Link>
  </div>

  <div class="..." className="lg:hover:bg-white lg:hover:p-2 lg:hover:drop-shadow-2xl">
    <span className="absolute ml-2 bg-red-500 text-white w-auto p-auto sm:block lg:hidden mt-12 ">25% OFF</span>
    <Link to='/Pic113P1'><img  src="https://www.junaidjamshed.com/media/catalog/product/m/i/min_eyeshadow-main.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2"/></Link>
  <p className="ml-2 mb-2 font-semibold">MINERAL EYESHADOW</p>
  <div className="flex gap-1">
  <span className=" bg-red-500 text-white w-fit h-fit  p-1  lg:block hidden " >25% OFF</span><span className="text-red-500 font-bold ">PKR 6,490.00</span><span className=" font-bold line-through" > PKR 8,290.00</span>
  </div>
  <Link to="/Pic113P1"><button className="border-2 border-black  p-2 mt-2 ml-auto  lg:w-auto w-full  hover:bg-black hover:text-white ">ADD TO BAG</button></Link>
  </div>

  <div class="..." className="lg:hover:bg-white lg:hover:p-2 lg:hover:drop-shadow-2xl">
    <span className="absolute ml-2 bg-red-500 text-white w-auto p-auto sm:block lg:hidden mt-12 ">25% OFF</span>
    <Link to='/Pic114P1'><img  src="https://www.junaidjamshed.com/media/catalog/product/1/8/18-blue-raspberry.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"/></Link>
  <p className="ml-2 mb-2 font-semibold">LONG WEARING LIPSTICK</p>
  <div className="flex gap-1">
  <span className=" bg-red-500 text-white w-fit h-fit  p-1  lg:block hidden " >25% OFF</span><span className="text-red-500 font-bold ">PKR 6,490.00</span><span className=" font-bold line-through" > PKR 8,290.00</span>
  </div>
  <Link to="/Pic114P1"><button className="border-2 border-black  p-2 mt-2 ml-auto  lg:w-auto w-full  hover:bg-black hover:text-white ">ADD TO BAG</button></Link>
  </div>

  <div class="..." className="lg:hover:bg-white lg:hover:p-2 lg:hover:drop-shadow-2xl">
    <span className="absolute ml-2 bg-red-500 text-white w-auto p-auto sm:block lg:hidden mt-12 ">25% OFF</span>
    <Link to='/Pic115P1'><img  src="https://www.junaidjamshed.com/media/catalog/product/s/c/scupt_2_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2"/></Link>
  <p className="ml-2 mb-2 font-semibold">SCULPT MAST MASCARA</p>
  <div className="flex gap-1">
  <span className=" bg-red-500 text-white w-fit h-fit  p-1  lg:block hidden " >25% OFF</span><span className="text-red-500 font-bold ">PKR 6,490.00</span><span className=" font-bold line-through" > PKR 8,290.00</span>
  </div>
  <Link to="/Pic115P1"><button className="border-2 border-black  p-2 mt-2 ml-auto  lg:w-auto w-full  hover:bg-black hover:text-white ">ADD TO BAG</button></Link>
  </div>
</div>
            </div>
          ) : (
            <div>

              <div className="flex mt-5  hover:bg-white hover:shadow-lg  hover:drop-shadow-2xl ">
                <div>
                <Link to="/Pic110P1"> <img
                  className=" lg:w-[17rem] "
                  src="https://www.junaidjamshed.com/media/catalog/product/m/a/matte_queen_liquid_lipstick_16_1__1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2"
                /></Link>
                </div>
                <div className="ml-3">
                <Link to="/Pic110P1"> <p className="text-sm mt-3">
                MATTE QUEEN LIQUID LIPSTICK
                  </p></Link>
                  <div className="flex mt-2 lg:w-[19rem] w-52">
                    <p className="h-6 w-20 bg-red-500 text-white pl-3 lg:block hidden">
                      25% OFF
                    </p>
                    <p className="text-red-600  font-bold mr-2">PKR 6,490.00</p>
                    <p className=" font-semibold   line-through">
                      PKR 8,750.00
                    </p>
                  </div>
                  <Link to="/Pic110P1">  <button className="border-black border-2 mt-3 p-2 font-semibold hover:bg-black hover:text-white">
                    ADD TO BAG
                  </button></Link>
                  <p className="h-6 w-20 bg-red-500 text-white pl-3 mt-3 lg:hidden">
                      25%OFF
                    </p>
                  </div>
              </div>

              <div className="flex mt-5  hover:bg-white hover:shadow-lg  hover:drop-shadow-2xl">
                <div>
                <Link to="/Pic111P1">  <img
                  className=" lg:w-[17rem] "
                  src="https://www.junaidjamshed.com/media/catalog/product/r/o/romantic_date_2_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2"
                /></Link>
                </div>
                <div className="ml-3">
                <Link to="/Pic111P1"><p className="text-sm mt-3">
                FLAWLESS EYESHADOW
                  </p></Link>
                  <div className="flex mt-2 lg:w-[19rem] w-52">
                    <p className="h-6 w-20 bg-red-500 text-white pl-3 lg:block hidden">
                      25% OFF
                    </p>
                    <p className="text-red-600  font-bold mr-2">PKR 6,490.00</p>
                    <p className=" font-semibold   line-through">
                    PKR 8,490.00
                    </p>
                  </div>
                  <Link to="/Pic111P1"> <button className="border-black border-2 mt-3 p-2 font-semibold hover:bg-black hover:text-white">
                    ADD TO BAG
                  </button></Link>
                  <p className="h-6 w-20 bg-red-500 text-white pl-3 mt-3 lg:hidden">
                      25%OFF
                    </p>
                  
                </div>
              </div>

              <div className="flex mt-5  hover:bg-white hover:shadow-lg  hover:drop-shadow-2xl">
                <div>
                <Link to="/Pic112P1"> <img
                  className=" lg:w-[17rem] "
                  src="https://www.junaidjamshed.com/media/catalog/product/m/a/mattifying_extreme_wear_foundation.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2"
                /></Link>
                </div>
                <div className="ml-3">
                <Link to="/Pic112P1"> <p className="text-sm mt-3">
                MATTIFYING EXTREME WEAR FOUNDATION
                  </p></Link>
                  <div className="flex mt-2 lg:w-[19rem] w-52">
                    <p className="h-6 w-20 bg-red-500 text-white pl-3 lg:block hidden">
                      25% OFF
                    </p>
                    <p className="text-red-600  font-bold mr-2">PKR 6,490.00</p>
                    <p className=" font-semibold   line-through">
                      PKR 9,750.00
                    </p>
                  </div>
                  <Link to="/Pic112P1">  <button className="border-black border-2 mt-3 p-2 font-semibold hover:bg-black hover:text-white">
                    ADD TO BAG
                  </button></Link>
                  <p className="h-6 w-20 bg-red-500 text-white pl-3 mt-3 lg:hidden">
                      25%OFF
                    </p>
                  </div>
              </div>

              <div className="flex mt-5  hover:bg-white hover:shadow-lg  hover:drop-shadow-2xl">
                <div>
                <Link to="/Pic113P1"> <img
                  className=" lg:w-[17rem] "
                  src="https://www.junaidjamshed.com/media/catalog/product/m/i/min_eyeshadow-main.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2"
                /></Link>
                </div>
                <div className="ml-3">
                <Link to="/Pic113P1"> <p className="text-sm mt-3">
                MINERAL EYESHADOW
                  </p></Link>
                  <div className="flex mt-2 lg:w-[19rem] w-52">
                    <p className="h-6 w-20 bg-red-500 text-white pl-3 lg:block hidden">
                      25% OFF
                    </p>
                    <p className="text-red-600  font-bold mr-2">PKR 6,490.00</p>
                    <p className=" font-semibold   line-through">
                      PKR 9,750.00
                    </p>
                  </div>
                  <Link to="/Pic113P1"> <button className="border-black border-2 mt-3 p-2 font-semibold hover:bg-black hover:text-white">
                    ADD TO BAG
                  </button></Link>
                  <p className="h-6 w-20 bg-red-500 text-white pl-3 mt-3 lg:hidden">
                      25%OFF
                    </p>
              
                </div>
              </div>

              <div className="flex mt-5  hover:bg-white hover:shadow-lg  hover:drop-shadow-2xl">
                <div>
                <Link to="/Pic114P1"> <img
                  className=" lg:w-[17rem] "
                  src="https://www.junaidjamshed.com/media/catalog/product/1/8/18-blue-raspberry.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
                /></Link>
                </div>
                <div className="ml-3">
                <Link to="/Pic114P1"> <p className="text-sm mt-3">
                LONG WEARING LIPSTICK
                  </p></Link>
                  <div className="flex mt-2 lg:w-[19rem] w-52">
                    <p className="h-6 w-20 bg-red-500 text-white pl-3 lg:block hidden">
                      25% OFF
                    </p>
                    <p className="text-red-600  font-bold mr-2">PKR 6,490.00</p>
                    <p className=" font-semibold   line-through">
                      PKR 9,750.00
                    </p>
                  </div>
                  <Link to="/Pic114P1"> <button className="border-black border-2 mt-3 p-2 font-semibold hover:bg-black hover:text-white">
                    ADD TO BAG
                  </button></Link>
                  <p className="h-6 w-20 bg-red-500 text-white pl-3 mt-3 lg:hidden">
                      25%OFF
                    </p>
              
                </div>
              </div>

              <div className="flex mt-5  hover:bg-white hover:shadow-lg  hover:drop-shadow-2xl">
                <div>
                <Link to="/Pic115P1"> <img
                  className=" lg:w-[17rem] "
                  src="https://www.junaidjamshed.com/media/catalog/product/s/c/scupt_2_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2"
                /></Link>
                </div>
                <div className="ml-3">
                <Link to="/Pic115P1"> <p className="text-sm mt-3">
                SCULPT MAST MASCARA
                  </p></Link>
                  <div className="flex mt-2 lg:w-[19rem] w-52">
                    <p className="h-6 w-20 bg-red-500 text-white pl-3 lg:block hidden">
                      25% OFF
                    </p>
                    <p className="text-red-600  font-bold mr-2">PKR 6,490.00</p>
                    <p className=" font-semibold   line-through">
                      PKR 9,750.00
                    </p>
                  </div>
                  <Link to="/Pic115P1"> <button className="border-black border-2 mt-3 p-2 font-semibold hover:bg-black hover:text-white">
                    ADD TO BAG
                  </button></Link>
                  <p className="h-6 w-20 bg-red-500 text-white pl-3 mt-3 lg:hidden">
                      25%OFF
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

export default MakeUp;
