import React from 'react'
import { Link } from 'react-router-dom'

function FooterP() {
  return (
    <div>
        <div className="flex  bg-slate-200 p-3">
        <Link to="/Header2">
          {" "}
          <p className="font-light text-sm">HOME</p>
        </Link>
        <img
          className="w-4 h-4  ml-2 mt-[0.2rem] mr-2 "
          src="https://www.freeiconspng.com/thumbs/greater-than-sign-icon/greater-than-sign-icon-30.png"
        />
        <p className="font-medium text-sm uppercase">Privacy Policy</p>
      </div>

<p className='text-3xl font-semibold text-center p-2 mt-9'>PRIVACY POLICY</p> 
<div class="lg:grid lg:grid-cols-8 lg:gap-4">
<div class="lg:col-start-3 lg:col-end-7 lg:ml-0 ml-4 mt-3 font-semibold">Your privacy is important to us. It is Junaid Jamshed (Pvt.) Ltd's policy to respect your privacy regarding any information we may collect from you across our website, http://www.junaidjamshed.com/, and other sites we own and operate.</div>
    </div>

    <p className='text-3xl font-semibold text-center p-2 mt-3'>THE INFORMATION WE MAY COLLECT </p> 
<div class="lg:grid lg:grid-cols-8 lg:gap-4">
<div class="lg:col-start-3 lg:col-end-7 lg:ml-0 ml-4 font-semibold mt-2">We may collect and process the following types of personal information:
<ul className='list-disc  pl-8'>
    <li className='font-semibold p-1'>Personal contact details such as name, title, address, email address and telephone number as part of orders & account signup.</li>
    <li className='font-semibold p-1'>Details of purchases and transactions</li>
    <li className='font-semibold p-1'>Information submitted as part of a survey</li>
    <li className='font-semibold p-1'>Details of your visits to the website, and information about how your device has interacted with our website, including search and browsing history, the pages accessed and links clicked</li>
    </ul>
   </div>
    </div>

    <p className='text-3xl font-semibold text-center p-2 mt-3'>How your data is collected</p> 
<div class="lg:grid lg:grid-cols-8 lg:gap-4">
<div class="lg:col-start-3 lg:col-end-7 lg:ml-0 ml-4 font-semibold mt-2">We may collect, hold, use and disclose information for the following purposes and personal information will not be further processed in a manner that is incompatible with these purposes:
<ul className='list-disc  pl-8'>
    <li className='font-semibold p-1'>To enable you to customize or personalize your experience of our website</li>
    <li className='font-semibold p-1'>To process any transactional or ongoing payments</li>
    <li className='font-semibold p-1'>To store information about your preferences to allow us to customize our website and marketing communications according to your interests</li>
    <li className='font-semibold p-1'>to comply with our legal obligations and resolve any disputes that we may have.</li>
    <li className='font-semibold p-1'>To notify you about changes to our service</li>
    <li className='font-semibold p-1'>To process refunds</li>
    </ul>
   </div>
    </div>


    <p className='text-3xl font-semibold text-center p-2 mt-9'>HOW WE SECURE YOUR DATA</p> 
<div class="lg:grid lg:grid-cols-8 lg:gap-4">
<div class="lg:col-start-3 lg:col-end-7 lg:ml-0 ml-4 mt-3 font-semibold">We have put in place the necessary and appropriate safeguards and access controls to ensure the security, integrity, and privacy of the information you provide us with. Our website uses a Secure Socket Layer (SSL) encryption which encrypts your information to protect it from unauthorized use.</div>
    </div>

    <p className='text-3xl font-semibold text-center p-2 mt-9'>CONTACT DETAILS</p> 
<div class="lg:grid lg:grid-cols-8 lg:gap-4">
<div class="lg:col-start-3 lg:col-end-7 lg:ml-0 ml-4 mt-3 font-semibold">For any questions about this policy or information requests please email</div>
    </div>
    </div>
  )
}

export default FooterP
