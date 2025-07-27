import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function Kids5P2() {
  const [input, setInput] = useState(1);

  const handlechange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <p className="font-semibold text-2xl mt-5 ml-5">SHOPPING CART</p>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-9">
            <div className="hidden sm:hidden md:block lg:hidden">
              <hr className="mt-3  w-full" />
              <div className="flex mt-4">
                <img
                  className="w-24"
                  src="https://www.junaidjamshed.com/media/catalog/product/3/5/35835.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=165&width=165&canvas=165:165&dpr=2"
                />
       <Link to="/Kids5P2">
                  <p className="text-md font-semibold ml-3 hover:text-gray-400 hover:underline">
                   	
NAVY BLUE BLENDED KAMEEZ SHALWAR | JCKS-A-35835-R15-AP
                  </p></Link>
                
              </div>
              <div className="flex mt-2">
                <span className="text-lg font-semibold ">Price</span>
                <span className="text-lg font-semibold ml-auto">QTY</span>
                <span className="text-lg font-semibold ml-auto">Sub Total</span>
              </div>
              <br />

              <div className="flex">
                <span className="text-lg font-semibold ">PKR 11,192.00</span>
                <input
                  className="w-14 h-7 ml-auto mt-1 pl-3 shadow-2xl border-1 border-black "
                  type="number"
                  value={input}
                  onChange={handlechange}
                />
                <span className="text-lg font-semibold ml-auto">
                PKR 11,192.00
                </span>
              </div>
              <div className="flex justify-end mt-3">
                <img
                  className="w-5 mr-7"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-SyD2TR14xu4ygHex-2-NReYfrhJa5JmKiw&s"
                />
                <img
                  className="w-5"
                  src="https://w7.pngwing.com/pngs/29/45/png-transparent-delete-key-logo-button-text-rectangle-logo-thumbnail.png"
                />
              </div>
              <hr className="mt-4" />
           <button className="w-full p-2 mt-4 ml-2 font-semibold border-2 border-black hover:bg-black hover:text-white">
                Update Shppping Cart
              </button>
            </div>

            <div className="hidden lg:block ">
              <div className="flex  ml-5 mt-9 ">
                <p className="font-semibold">Item</p>
                
                <p className="font-semibold ml-auto"> Price</p>
                <p className="font-semibold ml-14">Qty</p>
                <p className="font-semibold ml-24">Subtotal</p>
              </div>
              <hr className="ml-4 mt-3  w-full" />

              <div className="flex mt-4">
                <img
                  className="w-44"
                  src="https://www.junaidjamshed.com/media/catalog/product/3/5/35835.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=165&width=165&canvas=165:165&dpr=2"
                />
<Link to="/Kids5P1">
             <p className="text-md font-bold ml-auto hover:text-gray-400 hover:underline">
 	
NAVY BLUE BLENDED KAMEEZ SHALWAR | JCKS-A-35835-R15-AP
                </p>
                </Link>
                <p className="ml-auto"></p>
                <p className="ml-auto"></p>
                <p className="text-lg font-bold ml-auto">PKR 11,192.00</p>
                <input
                  className="w-14 h-7 ml-auto mt-1 pl-3 shadow-2xl border-2 border-black "
                  type="number"
                  value={input}
                  onChange={handlechange}
                />
                <p className="text-lg font-bold ml-auto">PKR 11,192.00</p>
              </div>
              <div className="flex justify-end">
                <img
                  className="w-5 mr-7"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-SyD2TR14xu4ygHex-2-NReYfrhJa5JmKiw&s"
                />
                <img
                  className="w-5"
                  src="https://w7.pngwing.com/pngs/29/45/png-transparent-delete-key-logo-button-text-rectangle-logo-thumbnail.png"
                />
              </div>
              <hr className="ml-4 mt-3  w-full" />
              <div className="flex justify-end ">
              <button className="p-2 mt-4 font-semibold border-2 border-black hover:bg-black hover:text-white">
                  Update Shipping Cart
                </button>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-3">
            <div className="p-3  bg-gray-100  ">
              <p className="text-2xl font-semibold ml-auto mt-9">Summary</p>
              <hr className="w-full mt-2 p-1" />
              <p className="font-bold  ml-auto text-lg">
                Estimate Shipping and Tax
              </p>
              <p className="text-sm font-semibold ml-auto mt-2 ">
                Enter your destination to get a shipping estimate.
              </p>
              <p className="font-bold  p-1 ml-auto mt-3">Country</p>
              <Form.Select size="sm" className="w-full p-2 ml-auto">
                <option className="text-sm">Uganda</option>
                <option className="text-sm">Tialand</option>
                <option className="text-sm">China</option>
              </Form.Select>
              <p className="font-bold p-1 ml-auto mt-3">State/Province</p>
              <Form.Control
                className="rounded-none ml-auto w-full"
                type="password"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
              />

              <p className="font-bold p-1 ml-auto mt-3">ZIP/Postal Code</p>
              <Form.Control
                className="rounded-none ml-auto w-full"
                type="password"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
              />
              <p className="font-semibold text-xs mt-4 ml-auto">
                Local Shipment
              </p>
              <div className="flex ml-auto">
                <input type="radio" />
                <p className="font-semibold text-sm ml-1 ">Fixed </p>
                <p className="font-bold text-sm ml-1 ">PKR 149.00</p>
              </div>
              <hr className="w-full ml-auto mt-9 mb-4" />
              <div className="flex justify-between">
                <p className="font-semibold ">Subtotal</p>
                <p className="font-semibold">PKR 11,192.00</p>
              </div>
              <div className="flex justify-between mt-4">
                <p className="font-semibold ">
                  Shipping (Local
                  <br /> Shipment )
                </p>
                <p className="font-semibold">PKR 149.00</p>
              </div>
              <hr className="w-full ml-auto mt-9 mb-4" />
              <div className="flex justify-between">
                <p className="font-bold  ">Order Total</p>
                <p className="font-bold ">PKR 13,006.05</p>
              </div>
              <Link to="/Kids5P3"> <button className="p-2 mt-3 w-full font-semibold border-2 border-black hover:bg-black hover:text-white">
                PROCEED TO CHECKOUT
              </button></Link>
            </div>
          </div>

          <div className="sm:hidden  block">
            <hr className="mt-3  w-full" />
            <div className="flex mt-4">
              <img
                className="w-24"
                src="https://www.junaidjamshed.com/media/catalog/product/3/5/35835.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=165&width=165&canvas=165:165&dpr=2"
              />
           <Link to="/Kids5P1">
                <p className="text-md font-semibold ml-3 hover:text-gray-400 hover:underline">
	
                NAVY BLUE BLENDED KAMEEZ SHALWAR | JCKS-A-35835-R15-AP
                </p>
                </Link>
            </div>
            <div className="flex">
              <span className="text-lg font-semibold ">Price</span>
              <span className="text-lg font-semibold ml-auto">QTY</span>
              <span className="text-lg font-semibold ml-auto">Sub Total</span>
            </div>
            <br />
            <br />
            <div className="flex">
              <span className="text-lg font-semibold ">PKR 11,192.00</span>
              <input
                className="w-14 h-7 ml-auto mt-1 pl-3 shadow-2xl border-1 border-black "
                type="number"
                value={input}
                onChange={handlechange}
              />
              <span className="text-lg font-semibold ml-auto">
              PKR 11,192.00
              </span>
            </div>
            <div className="flex justify-end mt-3">
              <img
                className="w-5 mr-7"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-SyD2TR14xu4ygHex-2-NReYfrhJa5JmKiw&s"
              />
              <img
                className="w-5"
                src="https://w7.pngwing.com/pngs/29/45/png-transparent-delete-key-logo-button-text-rectangle-logo-thumbnail.png"
              />
            </div>
            <hr className="mt-4" />
           <button className="w-full p-2 mt-4 ml-2 font-semibold border-2 border-black hover:bg-black hover:text-white">
              Update Shppping Cart
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Kids5P2;

