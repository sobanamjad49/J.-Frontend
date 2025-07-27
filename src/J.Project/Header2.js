import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { Link, Outlet } from "react-router-dom";

function Header2() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <div class="container-fluid">
        <div class="row">
          <div className="col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img
                  className="w-full p-2"
                  src="https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/images/s/h/shades-of-summer1_1.jpg"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="w-full p-2"
                  src="https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/images/j/a/janan-tobacco.jpg"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="w-full p-2"
                  src="https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/images/m/e/mens-summer.jpg"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>

      

      <div className="container-fluid">
        <div className="row p-3">
        <span className="ml-1 mt-6 text-3xl font-serif font-extrabold">
        Shop By Men Category
      </span>
          <div className="col-12 col-md-3 col-lg-3 col-xl-3">
            <Link to="/Men">
              {" "}
              <img
                className="mt-4"
                src="https://www.junaidjamshed.com/media/catalog/product/j/j/jjks-46734_3_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2"
              />
              <button className="p-2 border-2 border-black  hover:bg-black hover:text-white w-full  mt-3 text-lg font-body  font-bold">
                Kameez Shalwar
              </button>
            </Link>
          </div>
          <div className="col-12 col-md-3 col-lg-3 col-xl-3">
            <Link to="/Men">
              {" "}
              <img
                className="mt-4"
                src="https://www.junaidjamshed.com/media/catalog/product/j/j/jjks-50161_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2"
              />
              <button className="p-2 border-2 border-black  hover:bg-black hover:text-white w-full  mt-3 text-lg font-body  font-bold">
                Kurta
              </button>
            </Link>
          </div>
          <div className="col-12 col-md-3 col-lg-3 col-xl-3">
            <Link to="/Men">
              <img
                className="mt-4"
                src="https://www.junaidjamshed.com/media/catalog/product/2/7/27380r11-1_2__1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2"
              />
              <button className="p-2 border-2 border-black  hover:bg-black hover:text-white w-full  mt-3 text-lg font-body  font-bold">
                Suit
              </button>
            </Link>
          </div>
          <div className="col-12 col-md-3 col-lg-3 col-xl-3">
            <Link to="/Men">
              {" "}
              <img
                className="mt-4"
                src="https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-33211_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2"
              />
              <button className="p-2 border-2 border-black  hover:bg-black hover:text-white w-full  mt-3 text-lg font-body  font-bold">
                Unstitched
              </button>
            </Link>
          </div>
        </div>
      </div>


      <div className="container-fluid">
        <div className="row p-3">
        <span className="ml-1 mt-6 text-3xl font-serif font-extrabold">
        Shop By Women Category
      </span>
          <div className="col-12 col-md-3 col-lg-3 col-xl-3">
            <Link to="/Pic1">
              {" "}
              <img
                className="mt-4"
                src="https://www.junaidjamshed.com/media/catalog/product/3/3/3371_2_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2"
              />
              <button className="p-2 border-2 border-black  hover:bg-black hover:text-white w-full  mt-3 text-lg font-body  font-bold">
                Unstitched
              </button>
            </Link>
          </div>
          <div className="col-12 col-md-3 col-lg-3 col-xl-3">
            <Link to="/H1">
              {" "}
              <img
                className="mt-4"
                src="https://www.junaidjamshed.com/media/catalog/product/j/l/jlu-25-3374_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2"
              />
              <button className="p-2 border-2 border-black  hover:bg-black hover:text-white w-full  mt-3 text-lg font-body  font-bold">
                Kurti
              </button>
            </Link>
          </div>
          <div className="col-12 col-md-3 col-lg-3 col-xl-3">
            <Link to="/Pic1">
              <img
                className="mt-4"
                src="https://www.junaidjamshed.com/media/catalog/product/j/s/jss-25-315_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2"
              />
              <button className="p-2 border-2 border-black  hover:bg-black hover:text-white w-full  mt-3 text-lg font-body  font-bold">
                Stitched
              </button>
            </Link>
          </div>
          <div className="col-12 col-md-3 col-lg-3 col-xl-3">
            <Link to="/H1">
              {" "}
              <img
                className="mt-4 "
                src="https://www.junaidjamshed.com/media/catalog/product/2/5/25-183_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2"
              />
              <button className="p-2 border-2 border-black  hover:bg-black hover:text-white w-full  mt-3 text-lg font-body  font-bold">
              Suit
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* 
    <div className='lg:flex  lg:mt-10  '>
    <div className='lg:w-1/2 lg:ml-36'>
  <Link to="/Pic1"><img className='' src="https://www.junaidjamshed.com/media/wysiwyg/sc-111.jpg" /></Link> 
  
  <p className='font-semibold text-xl '>Unstitched</p>
  <p className='font-bold text-xl '>Shop Now</p>

</div>



      

      <div className='lg:flex lg:flex-col lg:justify-between lg:ml-9  sm:flex flex-col'>
        <div >
          <Link to="/H1"><img className='lg:w-72  ' src="https://www.junaidjamshed.com/media/wysiwyg/sc-113.jpg"/></Link>
<p className='font-semibold text-xl '>Kurti</p>
<p className='font-semibold text-xl '>Shop Now</p>
       </div>
       
        <div className='lg:mt-3'>
        <Link to="/H1"><img className='lg:w-72 ' src="https://www.junaidjamshed.com/media/wysiwyg/sc-112.jpg" /></Link>

  <p className='font-semibold text-xl '>Stitched</p>

  <p className='font-semibold text-xl '>Shop Now</p>
 
</div>

      </div>

    </div> */}

      {/* <div className='lg:flex  lg:mt-10  '>
   


      

      <div className='lg:flex lg:flex-col lg:justify-between lg:ml-36  sm:flex flex-col'>
      <div><Link to="/Men"><img className='lg:w-72' src="https://www.junaidjamshed.com/media/wysiwyg/sc-104.jpg"/></Link>

        <p className='font-semibold text-xl'>Kurta</p>
       
       <p className='font-semibold text-xl'>Shop Now</p>
    
        </div>
       
        <div >
       <Link to="/Men"> <img className='lg:w-72 ' src="https://www.junaidjamshed.com/media/wysiwyg/supersale5.jpg" /></Link>

  <p className='font-semibold text-xl '>Suit</p>

  <p className='font-semibold text-xl '>Shop Now</p>

</div>

      </div>
      <div className='lg:w-1/2 lg:ml-10'>
      <Link to="/Men"><img className='' src="https://www.junaidjamshed.com/media/wysiwyg/sc-105.jpg" /></Link>

  <p className='font-semibold text-xl '>Kameez Shalwar</p>

  <p className='font-semibold text-xl '>Shop Now</p>

</div>

    </div> */}

      <div className="  lg:border-[#fff8ee] lg:mt-28 mt-20  lg:border-[72px] lg:ml-[87px] lg:mr-[96px]">
        <Link to="/MainPage">
          <img
            className="p-3 lg:p-0"
            src="https://www.junaidjamshed.com/media/wysiwyg/no-gas.jpg"
          />
        </Link>
      </div>
      <Link to="/MainPage">
        {" "}
        <p className="text-center font-extrabold font-mono text-lg hover:text-gray-500">
          SHOP NOW
        </p>
      </Link>

      <p className="underline underline-offset-1 lg:mt-24 lg:text-2xl font-bold text-center mt-7  sm:text-1xl">
        NEW ARRIVALS
      </p>

      <p className=" lg:mt-16 lg:text-7xl font-bold text-center font-serif text-4xl mt-4">
        Boys & Girls
      </p>

      <div class="container-fluid">
        <div class="row">
          <div className="col-12 col-md-3 col-lg-3  mt-5">
            <Link to="/MakeUp">
              <img src="https://www.junaidjamshed.com/media/catalog/product/r/o/romantic_date_2_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2" />
            </Link>
            <Link to="/MakeUp">
              <button className="p-2 border-2 border-black  hover:bg-black hover:text-white w-full mt-3">
                MAKEUP
              </button>
            </Link>
          </div>
          <div className="col-12 col-md-3 col-lg-3 mt-5">
            <Link to="/Pic70">
              <img src="https://www.junaidjamshed.com/media/catalog/product/j/t/jtp-25-606_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2" />
            </Link>
            <Link to="/Pic70">
              <button className="p-2 border-2 border-black  hover:bg-black hover:text-white w-full mt-3">
                SUIT UNSTITCHED
              </button>
            </Link>
          </div>
          <div className="col-12 col-md-3 col-lg-3  mt-5">
            <Link to="/Pic90">
              <img src="https://www.junaidjamshed.com/media/catalog/product/j/l/jldp-25-2621.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2" />
            </Link>
            <Link to="/Pic90">
              <button className="p-2 border-2 border-black  hover:bg-black hover:text-white w-full  mt-3">
                DUPATTA
              </button>
            </Link>
          </div>
          <div className="col-12 col-md-3 col-lg-3  mt-5">
            <Link to="/KIDS">
              <img src="https://www.junaidjamshed.com/media/catalog/product/5/0/50020_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2" />
            </Link>
            <Link to="/KIDS">
              <button className="p-2 border-2 border-black  hover:bg-black hover:text-white w-full mt-3">
                KIDS BOYS
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default Header2;
