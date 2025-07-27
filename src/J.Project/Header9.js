import React, { useState } from "react";
import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";
function Header9() {
  const [input, setInput] = useState(17);

  const handlechange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <p className="font-bold text-2xl mt-5 ml-5">SHOPPING CART</p>

      <div className="flex md:flex-row lg:flex-row flex-col ">
        <div className="hidden lg:block">
          <div className="flex  ml-5 mt-9 ">
            <p className="font-semibold">Item</p>
            <p className="font-semibold ml-[33rem]"> Price</p>
            <p className="font-semibold ml-14">Qty</p>
            <p className="font-semibold ml-24">Subtotal</p>
          </div>
          <hr className="ml-4 mt-3  w-[54rem]" />
          <div className="flex mt-4">
            <img
              className="w-44"
              src="https://www.junaidjamshed.com/media/catalog/product/2/3/23-060-11_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=165&width=165&canvas=165:165&dpr=2"
            />
            <Link to="/Header5">
              <p className="text-md font-semibold">
                BEIGE LAWN UNSTITCHED 3PC | <br /> JLAWN-S-23-060
              </p>
            </Link>
            <p className="text-lg font-semibold ml-32">PKR 4,585.00</p>
            <input
              className="w-14 h-7 ml-7 mt-1 pl-3 shadow-2xl border-1 border-black "
              type="number"
              value={input}
              onChange={handlechange}
            />
            <p className="text-lg font-semibold ml-5">PKR 77,945.00</p>
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
          <hr className="ml-4 mt-3  w-[54rem]" />
          <button className="p-2 mt-4 ml-[43rem] font-semibold border-2 border-black hover:bg-black hover:text-white">
            Update Shipping Cart
          </button>
        </div>

        <div className="  p-3  ml-5 bg-gray-100 md:hidden block">
          <p className="text-2xl font-semibold ml-5 mt-2 hidden lg:block ">
            Summary
          </p>
          <hr className="w-64 ml-3 mt-2 mb-4 hidden lg:block" />

          <p className="font-bold  ml-3 text-lg">Estimate Shipping and Tax</p>

          <p className="lg:text-xs font-semibold ml-3 ">
            Enter your destination to get a shipping estimate.
          </p>
          <p className="font-bold  p-1 ml-3 mt-3">Country</p>
          <Form.Select size="sm" className="lg:w-64 p-2 ml-3">
            <option className="text-sm">Uganda</option>
            <option className="text-sm">Tialand</option>
            <option className="text-sm">China</option>
          </Form.Select>
          <p className="font-bold p-1 ml-3 mt-3">State/Province</p>
          <Form.Control
            className="rounded-none ml-3 lg:w-64"
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
          />

          <p className="font-bold p-1 ml-3 mt-3">ZIP/Postal Code</p>
          <Form.Control
            className="rounded-none ml-3 lg:w-64"
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
          />
          <p className="font-semibold text-xs mt-4 ml-3">Local Shipment</p>
          <div className="flex ml-3">
            <input type="radio" />
            <p className="font-semibold text-sm ml-1 ">Fixed </p>
            <p className="font-bold text-sm ml-1 ">PKR 149.00</p>
          </div>
          <hr className="lg:w-64 ml-3 mt-9 mb-4" />
          <div className="flex justify-between">
            <p className="font-semibold ml-3">Subtotal</p>
            <p className="font-semibold">PKR 4,585.0</p>
          </div>
          <div className="flex justify-between mt-4">
            <p className="font-semibold ml-3">
              Shipping (Local <br /> Shipment - Fixed)
            </p>
            <p className="font-semibold">PKR 149.00</p>
          </div>
          <hr className="lg:w-64 ml-3 mt-2 mb-4" />
          <div className="flex justify-between">
            <p className="font-bold text-lg ml-3">Order Total</p>
            <p className="font-bold text-lg">PKR 4,734.00</p>
          </div>
          <Link to="/Header6">
            <button className="p-2 lg:w-64 w-96 mt-4 ml-3 font-semibold border-2 border-black hover:bg-black hover:text-white">
              PROCEED TO CHECKOUT
            </button>
          </Link>
        </div>

        <div className="flex lg:flex-row flex-col">
          <div className="lg:hidden block">
            <hr className="mt-3  w-[30rem]" />
            <div className="flex mt-4">
              <img
                className="w-24"
                src="https://www.junaidjamshed.com/media/catalog/product/2/3/23-060-11_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=165&width=165&canvas=165:165&dpr=2"
              />
              <Link to="/Header5">
                <p className="text-md font-semibold">
                  BEIGE LAWN UNSTITCHED 3PC |JLAWN-S-23-060
                </p>
              </Link>
            </div>
            <span className="text-lg font-semibold ml-3">Price</span>
            <span className="text-lg font-semibold ml-40">QTY</span>
            <span className="text-lg font-semibold ml-14">Sub Total</span>
            <br />
            <br />
            <span className="text-lg font-semibold ml-3">PKR 4,585.00</span>
            <input
              className="w-14 h-7 ml-20 mt-1 pl-3 shadow-2xl border-1 border-black "
              type="number"
              value={input}
              onChange={handlechange}
            />
            <span className="text-lg font-semibold ml-14">PKR 77,945.00</span>

            <div className="flex ml-96 mt-3">
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
            <button className="w-[29rem] p-2 mt-4 ml-2 font-semibold border-2 border-black hover:bg-black hover:text-white">
              Update Shppping Cart
            </button>
          </div>
        </div>

        <div className="  p-3  ml-5 bg-gray-100  md:block hidden">
          <p className="font-bold  ml-3 text-lg">Estimate Shipping and Tax</p>

          <p className="text-xs font-semibold ml-3 ">
            Enter your destination to get a <br /> shipping estimate.
          </p>
          <p className="font-bold  p-1 ml-3 mt-3">Country</p>
          <Form.Select size="sm" className="w-60 p-2 ml-3">
            <option className="text-sm">Uganda</option>
            <option className="text-sm">Tialand</option>
            <option className="text-sm">China</option>
          </Form.Select>
          <p className="font-bold p-1 ml-3 mt-3">State/Province</p>
          <Form.Control
            className="rounded-none ml-3 w-60"
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
          />

          <p className="font-bold p-1 ml-3 mt-3">ZIP/Postal Code</p>
          <Form.Control
            className="rounded-none ml-3 w-60"
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
          />
          <p className="font-semibold text-xs mt-4 ml-3">Local Shipment</p>
          <div className="flex ml-3">
            <input type="radio" />
            <p className="font-semibold text-sm ml-1 ">Fixed </p>
            <p className="font-bold text-sm ml-1 ">PKR 149.00</p>
          </div>
          <hr className="w-60 ml-3 mt-9 mb-4" />
          <div className="flex">
            <p className="font-semibold ml-3">Subtotal</p>
            <p className="font-semibold ml-20">PKR 4,585.0</p>
          </div>
          <div className="flex  mt-4">
            <p className="font-semibold ml-3">
              Shipping (Local <br /> Shipment - Fixed)
            </p>
            <p className="font-semibold ml-5">PKR 149.00</p>
          </div>
          <hr className="w-60 ml-3 mt-2 mb-4" />
          <div className="flex ">
            <p className="font-bold text-lg ml-3">Order Total</p>
            <p className="font-bold text-lg ml-6">PKR 4,734.00</p>
          </div>
          <Link to="/Header6">
            <button className="p-2 w-56 mt-4 ml-3 font-semibold border-2 border-black hover:bg-black hover:text-white">
              PROCEED TO CHECKOUT
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header9;
