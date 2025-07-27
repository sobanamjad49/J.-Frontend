import React from "react";
import { Link } from "react-router-dom";

function FooterC() {
  return (
    <div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-6 bg-gray-200 ">
            <div className="ml-5">
              <p className="font-bold">Let us know what you think.</p>
              <p className="text-sm font-medium mt-3">
                Should you have any questions, comments, or inquiries please
                reach out to us.
              </p>
              <p className="mt-4 font-semibold text-2xl">FOR ONLINE STORE</p>
              <p className="font-medium text-sm hover:text-gray-400">
                eshop@junaidjamshed.com
              </p>
              <p className="font-bold mt-2">BY TELEPHONE</p>
              <span className="font-medium text-md text-blue-700">
                021 111 112 111
              </span>
              <span className="text-sm font-medium">
                {" "}
                (9am - 10pm , Monday - Saturday, Sunday 11am - 08pm )
              </span>
              <p className="font-bold mt-2">BY EMAIL</p>
              <p className="font-medium text-sm hover:text-gray-400">
                J. Junaid Jamshed Pvt Ltd
              </p>
              <p className="font-medium text-sm hover:text-gray-400">
                Head office, 40 Sector 19, Korangi Industrial Area
              </p>

              <p className="mt-4 font-semibold text-2xl">
                FOR OUTLETS INQUIRIES
              </p>
              <p className="font-bold mt-4">BY EMAIL</p>
              <p className="font-medium text-sm hover:text-gray-400">
                feedback@junaidjamshed.com
              </p>
              <p className="font-bold mt-2">BY TELEPHONE</p>
              <span className="font-medium text-md text-blue-700">
                021 111 112 111
              </span>
              <span className="text-sm font-medium">
                (9am - 6pm , Monday - Saturday )
              </span>
              <p className="font-bold mt-2">
                IN-STORE LOCATIONS & PHONE NUMBERS
              </p>
              <span className="font-medium text-sm ">
                For complete store details,
              </span>
              <Link to="/FooterC1">
                <span className="font-medium text-sm hover:text-gray-400">
                  click here
                </span>
              </Link>
              <p className="mt-4 font-semibold text-2xl">
                FOR CORPORATE ORDERS AND INQUIRIES
              </p>
              <p className="font-bold mt-4">BY EMAIL</p>
              <p className="font-medium text-sm ">
                corporate@junaidjamshed.com
              </p>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-6">
            <p className="text-2xl font-semibold lg:mt-0 mt-3">CONTACT US</p>
            <p className="mt-7 font-bold text-md">Name</p>
            <input
              type="text"
              class="border-none focus:outline-none font-semibold mt-3"
            />
            <hr className="mt-2" />
            <p className="mt-7 font-bold text-md">Email</p>
            <input
              type="text"
              class="border-none focus:outline-none font-semibold mt-3"
            />
            <hr className="mt-2" />
            <p className="mt-7 font-bold text-md">Phone Number</p>
            <input
              type="text"
              class="border-none focus:outline-none font-semibold mt-3"
            />
            <hr className="mt-2" />
            <p className="mt-7 font-bold text-md">What’s on your mind?</p>
            <textarea
              className="border-2 border-black w-full h-48 p-2"
              placeholder="Type here..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterC;
