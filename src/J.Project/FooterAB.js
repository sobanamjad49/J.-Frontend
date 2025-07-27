import React from 'react'
import { Link } from 'react-router-dom'

function FooterAB() {
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
             </div>

<p className="uppercase font-semibold text-3xl m-3">About us</p>
<div class="container-fluid">
    <div class="row">
             <div className='col-12 col-md-12 col-lg-5 lg:ml-10'>
<p className='font-medium'>J. was established in 2002 with a unique philosophy to revive the country's cultural heritage and make Shalwar Kameez; the popular wear, and soon became one of the most famous and recognizable clothing brands in South East Asia.</p>
<p className='font-medium  mt-4'>It expanded its store network to 100+ outlets nationwide. J. has further expanded globally by opening 20 outlets in the UK, Australia, Canada, New Zealand, UAE, Qatar, to name a few.</p>
<p className='font-medium  mt-4'>We pride ourselves on being a complete apparel brand that deals in eastern wear, perfumes, footwear and accessories for women and men of all ages. We work in different categories and textures like silk, chiffon, cotton, cambric, lawn and fabrics that suit the season.</p>
<p className='font-medium  mt-4'>From the humble beginnings of a brand that believed in being Soully East, we have moved forward with more decorative touches to our portfolio and have strung together a loyal base of customers all over the world</p>
<p className='font-medium  mt-4'>Our clothing line reflects current fashion trends with modest detailing. Designs are inspired from Renaissance, Aztec, Fusion, Arabian and other aesthetics.</p>         
             </div>

             <div className='col-12 col-md-12 col-lg-6 mt-4 '>
                <img src="https://www.junaidjamshed.com/media/wysiwyg/ABOUTUS.jpg"/>
             </div>
             </div>
             </div>
             <p className="uppercase font-semibold text-3xl  mt-14 ml-10">THIS IS J.</p>
             <div class="grid lg:grid-cols-12 md:m-6 mt-16 lg:mt-12 ">
             <div class="col-start-3 col-end-11 ..."><video src="https://www.junaidjamshed.com/media/j.mp4" controls autoPlay muted></video></div>
            </div>

    </div>
  )
}

export default FooterAB
