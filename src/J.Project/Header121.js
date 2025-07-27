import React from "react";

function Header121() {
  return (
    <div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-6 ">
            <div className="lg:ml-12">
              <p className="text-2xl ml-7  mb-2 font-semibold   uppercase ">
                Corporate & Gifting Inquiry Form
              </p>
              <p className="font-semibold ml-7">
                If you need help, please fill out the form below. We will
                respond to every email within 24 hours excluding holidays.
              </p>
              <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 ">
                <input
                  className="p-3 border-b-2  ml-5  "
                  type="text"
                  placeholder="Business Name*"
                  required
                />
                <input
                  className="p-3 border-b-2  ml-5  "
                  type="text"
                  placeholder="Your City*"
                />
                <input
                  className="p-3 border-b-2  ml-5  "
                  type="text"
                  placeholder="Your Nmae*"
                />
                <input
                  className="p-3 border-b-2  ml-5  "
                  type="text"
                  placeholder="Your Email*"
                />
                <input
                  className="p-3 border-b-2  ml-5  "
                  type="text"
                  placeholder="Your Contact No*"
                />
                <select className="p-3 border-b-2  ml-5  ">
                  <option disabled selected>
                    Select Category
                  </option>
                  <option>Apparel</option>
                  <option>Fragances</option>
                  <option>Cosmetics</option>
                  <option>Gift Box</option>
                </select>
                <input
                  className="p-3 border-b-2  ml-5  "
                  type="text"
                  placeholder="Your Country*"
                />
                <input
                  className="p-3 border-b-2  ml-5  "
                  type="date"
                  placeholder="hello"
                />
              </div>
              <div className="ml-3 lg:mt-2 p-3">
                <p>Inquiry Details</p>
                <textarea
                  className="border-1 border-black w-full"
                  placeholder="Write Your Message"
                ></textarea>
                <button
                  className="border-1 border-black mb-5 mt-2 hover:bg-black hover:text-white p-2 font-bold"
                  type="submit"
                >
                  Submit{" "}
                </button>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-6">
            <img src="https://www.junaidjamshed.com/media/CorporateImages/default/corporate.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header121;
