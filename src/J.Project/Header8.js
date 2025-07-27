import React from 'react'
import { Link } from 'react-router-dom'

function Header8() {
  return (
    <div>
      <div className='flex  bg-slate-200 p-3'>
<Link to='/Header2'> <p className='font-light text-sm'>HOME</p></Link>
<img className='w-4 h-4  ml-2 mt-[0.2rem] mr-2 ' src="https://www.freeiconspng.com/thumbs/greater-than-sign-icon/greater-than-sign-icon-30.png"/>
<p className='font-medium text-sm'> DELIVERY & ORDERS</p>
      </div>
<p className='ml-3 font-semibold font-mono text-lg p-2'>DELIVERY TIME</p>
<ul className='list-disc pl-14 '>
    <li className='font-normal p-1'>The estimated average Delivery time (after the order is dispatched) across Pakistan is 2 to 4 working days for the major cities. For remote areas delivery can take longer.</li>
    <li className='font-normal p-1'>You are requested to be available on the provided contact number so our team can reach you.</li>
    <li className='font-normal p-1'>Timely delivery is subjected to availability of the articles and order confirmation.</li>
    <li className='font-normal p-1'>During sale period, both order processing and delivery may take longer than usual.</li>
</ul>
<div className='flex p-1'>
    <p className='font-semibold ml-3'>Note:</p>
    <p className='font-normal ml-1' >To avoid unsafe delivery, we strongly suggest getting your orders delivered to your own address. J. will not be liable for any loss or damage to the order in the case of delivery at the self-pickup point, such as any courier office.</p>
</div>
<p className='ml-3 font-semibold font-mono text-lg p-2'>INTERNATIONAL DELIVERY </p>
<ul className='list-disc pl-14'>
    <li className='font-normal p-1'>The estimated dispatch time for International order is 5 to 7 working after the order has been confirmed.</li>
    <li className='font-normal p-1'>The delivery time may vary depending on the destination.</li>
    <li className='font-normal p-1'>J. will not be responsible for any refund if the consignee requests for order cancelation once the order "is in process".</li>
    <li className='font-normal p-1'>Customers will be liable to bear the shipment and custom charges if they refuse or receive the delivery.</li>
</ul>

<p className='ml-3 font-semibold font-mono text-lg p-2'>CANCELLATION POLICY</p>
<ul className='list-disc pl-14'>
    <li className='font-normal p-1'>To cancel a prepaid order, please reach out to us within 6 hours of placing your order. Upon cancellation, refund will be made via store credit/credit voucher.</li>
    <li className='font-normal p-1'>Once the Order is “in process”, it can no longer be canceled or refunded.</li>
</ul>


<p className='ml-3 font-semibold font-mono text-lg p-2'>PAYMENT THROUGH CARDS:</p>
<ul className='list-disc pl-14'>
    <li className='font-normal p-1'>To cancel a prepaid order, please reach out to us within 6 hours of placing your order. Upon cancellation, refund will be made via store credit/credit voucher.</li>
    <li className='font-normal p-1'>Once the Order is “in process”, it can no longer be canceled or refunded.</li>
</ul>

<p className='ml-3 font-semibold font-mono text-lg p-2'>DELIVERY CHARGES</p>
<ul className='list-disc pl-14'>
    <li className='font-normal p-1'>Shipping charges of Flat Rs.149 will be charged on all orders delivered within Pakistan.</li>
    <li className='font-normal p-1'>Charges for all International delivery vary from country to country depending upon city, state, country, and locality. To calculate shipment charges you can select any product and checkout with your delivery address to calculate the estimated delivery charges (doesn’t include any taxes & duties).</li>
    <li className='font-normal p-1'>Please note that international orders may be subject to taxes & duties and will be the responsibility of the customer. Any applicable duties or fees will be collected at the time of order delivery by the courier.</li>
</ul>

<p className='ml-3 font-semibold font-mono text-lg p-2'>TRACK YOUR ORDER</p>
<ul className='list-disc pl-14'>
    <li className='font-normal p-1'>Once your order is dispatched you will receive an email/SMS with your tracking number.</li>
    <li className='font-normal p-1'>You can track your order on the respective courier website mentioned in your email.</li>
    <li className='font-normal p-1'>If you don't get any tracking updates, please write to us at eshop@junaidjamshed.com</li>
    <li className='font-normal p-1'>J. cannot be held liable for late delivery/collection by third-party postal/courier companies. </li>
</ul>


<p className='ml-3 font-semibold font-mono text-lg p-2'>WANT TO AMEND YOUR ORDER?</p>
<p className='font-normal  pl-7'>You can revise your order so that it's just the way you want it by calling our Customer Services team on 021 111 112 111 (9 am - 10 pm, PKT Mon-Sat, 11 am – 8 pm on Sundays)  or emailing us at eshop@junaidjamshed.com before order is processed. If the order hasn’t already been processed, we'll be happy to assist you.</p>















    </div>
  )
}

export default Header8
