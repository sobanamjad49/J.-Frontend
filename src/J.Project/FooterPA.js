import React from 'react'
import { Link } from 'react-router-dom'

function FooterPA() {
  return (
    <div>
        <div className='sm:block hidden bg-slate-200'>
       <div className="flex   p-3 ">
              <Link to="/Header2">
                {" "}
                <p className="font-light text-sm">HOME</p>
              </Link>
              <img
                className="w-4 h-4  ml-2 mt-[0.2rem] mr-2 "
                src="https://www.freeiconspng.com/thumbs/greater-than-sign-icon/greater-than-sign-icon-30.png"
              />
              <p className="font-medium text-sm uppercase">Payment Guideline</p>
              </div>
              <p className='p-3 text-center font-semibold text-2xl '>PAYMENT GUIDELINE</p>
           </div>

           <p className='mt-9 text-sm  font-medium'>We aim to provide a safe and secure shopping experience. However, in some instances, we would be needing your payment details and CNIC to ensure that your credentials are not being misused and the details are used by the real owner.</p>
           <p className='mt-4 text-sm  font-medium'>Following is the procedure:</p>
           <ul className='list-disc  pl-8'>
    <li className='font-normal p-1'>A picture of your<span className='font-bold'> CNIC (Front and back)</span></li>
    <li className='font-normal p-1'>Picture of your <span className='font-bold'> Credit/Debit card </span> with the following details only:</li>
    <li className='font-bold p-1'><span className='font-bold'>Card holder's name</span></li>
    <li className='font-normal p-1'><span className='font-bold'>First 6 digits </span> of the card number</li>
    <li className='font-normal p-1'><span className='font-bold'>First 4 digits </span> of the card number</li>
    </ul>
    <p className='mt-4 text-sm  font-medium '>We at J. never compromise on the security of the personal details of customers.</p>

    <div class="grid md:grid-cols-10 lg:grid-cols-8 lg:gap-4 mt-3">
<div class="md:col-start-3 md:col-end-9  lg:col-start-3 lg:col-end-7 lg:ml-0 ml-4 font-semibold mt-2">
<img src="https://www.junaidjamshed.com/media/logo/cc2.png"/>
</div>
       

    </div>
    </div>
  )
}

export default FooterPA
