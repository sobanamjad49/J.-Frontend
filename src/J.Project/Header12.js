import React from "react";
import { Link } from "react-router-dom";

function Header12() {
  return (
    <div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-md-7 col-lg-8">
            <img src="https://www.junaidjamshed.com/media/CorporateImages/default/corporate.jpg" />
          </div>
          <div class="col-12 col-md-4 col-lg-4  text-center lg:mt-36  ">
            <p className="mt-4   ">
              Please fill out the form below based on the type of inquiry you
              have.
            </p>
            <div className="flex lg:flex-row  flex-col justify-between mt-4 ">
              <Link to="/Header121">
                <button className="border-2 border-black p-2 hover:bg-black hover:text-white lg:mt-0 mt-3">
                  For Corporate & Gifting
                </button>
              </Link>
              <Link to="/Header122">
                <button className="border-2 border-black p-2 hover:bg-black hover:text-white lg:mt-0 mt-3">
                  Distribution Business
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header12;
