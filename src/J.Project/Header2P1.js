import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
function Header2P1() {
        const [index, setIndex] = useState(0);
    
        const handleSelect = (selectedIndex) => {
          setIndex(selectedIndex);}
  return (
    <div>
    
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
  <img className='p-3 ' src="https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/images/s/h/shades-of-summer1_1.jpg"/>
        
      </Carousel.Item>
      <Carousel.Item>
      <img className='p-3' src="https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/images/j/a/janan-tobacco.jpg"/>       
      </Carousel.Item>
      <Carousel.Item>
   <img className='p-3' src="https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/images/m/e/mens-summer.jpg"/>
      
      </Carousel.Item>
    </Carousel>

    <div class="container-fluid">
        <div class="row">
        <div className='md:flex lg:flex  lg:mt-10  '>
    <div className='md:ml-20 lg:ml-36  col-12 col-md-6 col-lg-6'>
  <Link to="/Pic1"><img className='' src="https://www.junaidjamshed.com/media/wysiwyg/sc-111.jpg" /></Link> 
  
  <p className='font-semibold text-xl '>Unstitched</p>
  <p className='font-bold text-xl '>Shop Now</p>

</div>

      <div className=' lg:flex lg:flex-col md:justify-between lg:justify-between md:ml-9 lg:ml-6   '>
        <div >
          <Link to="/H1"><img className='col-12 col-md-8 col-lg-7 ' src="https://www.junaidjamshed.com/media/wysiwyg/sc-113.jpg"/></Link>
<p className='font-semibold text-xl '>Kurti</p>
<p className='font-semibold text-xl md:hidden lg:block sm:block '>Shop Now</p>
       </div>
       
        <div className='lg:mt-3'>
        <Link to="/H1"><img className='col-12 col-md-8 col-lg-7' src="https://www.junaidjamshed.com/media/wysiwyg/sc-112.jpg" /></Link>

  <p className='font-semibold text-xl '>Stitched</p>
<p className='font-semibold text-xl '>Shop Now</p>
 
</div>
</div>
</div>


<div className='md:flex lg:flex  '>

<div className='col-12 col-md-8 col-lg-3 ml-36 md:flex-col lg:flex-col '>
  <div>
  <img src='https://www.junaidjamshed.com/media/wysiwyg/supersale5.jpg'/>
</div>
<div >
  <img src='https://www.junaidjamshed.com/media/wysiwyg/supersale5.jpg'/>
</div>
</div>
<div className='col-12 col-md-6 col-lg-6 lg:ml-8'>
  <img className='  max-w-[92%]' src="https://www.junaidjamshed.com/media/wysiwyg/supersale4.jpg"/>
</div>
</div>


</div>
</div>
</div>

  )
}

export default Header2P1
