import React from 'react'
import { Link } from 'react-router-dom'

function Page1() {
  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
<div className='col-12 col-md-12 col-lg-12'>
<div   className="bg-cover bg-center h-screen  hidden sm:hidden md:block lg:block" style={{ backgroundImage: "url('https://www.junaidjamshed.com/media/wysiwyg/eid02.jpg')" }}>
   <div className='flex flex-col items-center justify-center h-screen '>
   <select className='pl-28 h-10 w-72  bg-black text-white   border-1 border-white '>
                 <option>Pakistan</option>
                 <option>Austrila</option>
                 <option>Canada</option>
                 <option>New Zealand</option>
                 <option>South Africa</option>
                 </select> 
   <Link to='/Header2'><button className=' w-72 p-2 mt-3  bg-black text-white  border-1 border-white  '>ENTER</button></Link>
</div>
</div>
</div>

<div className='col-12 col-md-12 col-lg-12'>
<div   className="bg-cover bg-center h-screen   sm:block md:hidden lg:hidden " style={{ backgroundImage: "url('https://www.junaidjamshed.com/media/wysiwyg/eid03.jpg')" }}>
   <div className='flex flex-col items-center justify-center h-screen '>
   <select className='pl-28 h-10 w-72  bg-black text-white   border-1 border-white '>
                 <option>Pakistan</option>
                 <option>Austrila</option>
                 <option>Canada</option>
                 <option>New Zealand</option>
                 <option>South Africa</option>
                 </select> 
   <Link to='/Header2'><button className=' w-72 p-2 mt-3  bg-black text-white  border-1 border-white  '>ENTER</button></Link>
</div>
</div>
</div>

        </div>
      </div>
       </div>
  )
}

export default Page1
