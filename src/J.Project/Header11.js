import React from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function Header11() {
  return (
    <div>
      <div className="hidden lg:block">
        <div className="flex  bg-slate-200 p-3 ">
          <Link to="/Header2">
            {" "}
            <p className="font-light text-sm">HOME</p>
          </Link>
          <img
            className="w-4 h-4  ml-2 mt-[0.2rem] mr-2 "
            src="https://www.freeiconspng.com/thumbs/greater-than-sign-icon/greater-than-sign-icon-30.png"
          />
          <p className="font-medium text-sm"> TRACK MY ORDER</p>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-6 ">
            <p className="text-sm font-semibold mt-3">
              Please enter the required information below to track your order
              status.
            </p>
            <p className="mt-3 font-semibold">Order Number</p>
            <Form className=" w-full mt-4">
              <Form.Control
                className="rounded-none border-1 border-black"
                type="text"
              />
            </Form>

            <button className=" border-2 border-black lg:w-36 p-1 hover:bg-black w-full  mt-3  lg:ml-0 hover:text-white ">
              TRACK MY ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header11;
