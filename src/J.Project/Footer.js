import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="bg-black mt-5 h-60   ">
        <p className="text-white text-center  font-semibold mb-2 text-2xl pt-12 ">
          BR THE FIRST
        </p>

        <p className="text-white text-center   font-semibold ">
          New arrivals.Exclusive previews.First access to <br /> sales.Sign up
          to Stay in the Know.
        </p>

<form>
<div className="flex justify-center">
  <div>
<input
          className=" mt-4 p-2 "
          type="email"
          placeholder="Enter Your Email Address" required
        /></div>

        <button type="submit" className="ml-2  mt-6 font-medium p-2 bg-white">Sign Up</button>
        
      </div>
      </form>
      </div>
   

      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pl-9 pt-3">
        <div class="sm:text-left text-center">
          <p className="text-2xl font-medium ">NEED HELP?</p>
          <div className="flex p-2">
            <img
              className="w-6 "
              src="https://www.junaidjamshed.com/media/wysiwyg/telephone.png"
            />
            <p>+92 21 111 112 111</p>
          </div>
          <p className="p-2">(Mon - Sat: 9am - 10pm | Sun: 11am - 8pm)</p>

          <div className="flex p-2">
            <img
              className="w-5"
              src="https://www.junaidjamshed.com/media/wysiwyg/email.png"
            />
            <p>eshop@junaidjamshed.com</p>
          </div>
        </div>

        <div class="sm:text-left text-center">
          <p className="text-2xl font-medium ">CUSTOMER SERVICE</p>
          <ol >
            <Link to="/FooterC1">
              <li className="hover:font-bold">Contact Us</li>
            </Link>
            <Link to="/Header8">
              <li className="hover:font-bold">Delivery & Orders</li>
            </Link>
            <li className="hover:font-bold">Returns & Exchanges</li>
            <Link to="/FooterT">
              <li className="hover:font-bold">Terms & Conditions</li>
            </Link>
            <Link to='/FooterP' className="hover:font-bold"><li>Privacy Policy</li></Link>
          <Link to='/Header11' className="hover:font-bold"><li>Track My Order</li></Link> 
          <Link to='/FooterPA' className="hover:font-bold"><li>Payment Guide</li></Link>  
          </ol>
        </div>

        <div class="sm:text-left text-center">
          <p className="text-2xl font-medium ">Company</p>
          <ol>
            <Link to="/FooterAB" className="hover:font-bold"><li>About Us</li></Link>
            <li className="hover:font-bold">Careers</li>
           <Link to="/FooterC1" className="hover:font-bold"> <li>Store Addresses</li></Link>
          </ol>
        </div>

        <div class="...">
          <p className="text-2xl font-medium sm:text-left text-center">FOLLOW US</p>
          <div className="flex justify-center mt-3">
            <img
              className="w-11 filter grayscale hover:grayscale-0 transform hover:-translate-y-2 transition duration-500 ease-in-out"
              src="https://static.vecteezy.com/system/resources/previews/018/910/719/non_2x/facebook-logo-facebook-icon-free-free-vector.jpg"
            />
            <img
              className="w-11 ml-4 filter grayscale hover:grayscale-0 transform hover:-translate-y-2 transition duration-500 ease-in-out"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBokEkMMIYLDbhA_J_gFGJKQvprU9q6KlNDw&s"
            />
            <img
              className="w-11 ml-4 filter grayscale hover:grayscale-0 transform hover:-translate-y-2 transition duration-500 ease-in-out"
              src="https://cdn-icons-png.flaticon.com/512/174/174883.png"
            />
          </div>
          <div className="flex mt-2 justify-center">
            <img
              className="w-12 ml-4  filter grayscale hover:grayscale-0 transform hover:-translate-y-2 transition duration-500 ease-in-out"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREiNFtPCpgaLwF4O14R82_uxfuQ-TEAxDAqQ&s"
            />
            <img
              className="w-11 ml-4 filter grayscale hover:grayscale-0 transform hover:-translate-y-2 transition duration-500 ease-in-out"
              src="https://logoeps.com/wp-content/uploads/2012/02/pinterest-icon-vector.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
