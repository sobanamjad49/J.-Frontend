// import React, { useState } from "react";
// import Spinner from "react-bootstrap/Spinner";
// import Accordion from "react-bootstrap/Accordion";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Offcanvas from "react-bootstrap/Offcanvas";
// import Carousel from "react-bootstrap/Carousel";
// import { Link } from "react-router-dom";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";
// function HeaderAA() {
//   var settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     initialSlide: 0,

//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex) => {
//     setIndex(selectedIndex);
//   };

//   let [change, setChange] = useState(
//     <img src="https://www.junaidjamshed.com/media/catalog/product/2/3/23-060-11_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds" />
//   );
//   return (
//     <div>
//       <div class="container">
//         <div class="row">
//           <div class="col-12 col-md-6 col-lg-6 ">
//             <div className="lg:ml-14">{change}</div>
//             <div className="flex justify-around">
//               <img
//                 className="mt-4"
//                 onClick={() =>
//                   setChange(
//                     (change = (
//                       <img src="https://www.junaidjamshed.com/media/catalog/product/2/3/23-060-11_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds" />
//                     ))
//                   )
//                 }
//                 src="https://www.junaidjamshed.com/media/catalog/product/2/2/22-1863-1_1_.jpg?width=86&height=110&canvas=86,110&optimize=medium&bg-color=255,255,255&fit=bounds"
//               />{" "}
//               <img
//                 className="mt-4"
//                 onClick={() =>
//                   setChange(
//                     (change = (
//                       <img src="https://www.junaidjamshed.com/media/catalog/product/2/3/23-060-11_3_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds" />
//                     ))
//                   )
//                 }
//                 src="https://www.junaidjamshed.com/media/catalog/product/2/2/22-1863-1_2_.jpg?width=86&height=110&canvas=86,110&optimize=medium&bg-color=255,255,255&fit=bounds"
//               />{" "}
//               <img
//                 className="mt-4"
//                 onClick={() =>
//                   setChange(
//                     (change = (
//                       <img src="https://www.junaidjamshed.com/media/catalog/product/2/3/23-060-11_2_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds" />
//                     ))
//                   )
//                 }
//                 src="https://www.junaidjamshed.com/media/catalog/product/2/2/22-1863-1_3_.jpg?width=86&height=110&canvas=86,110&optimize=medium&bg-color=255,255,255&fit=bounds5"
//               />{" "}
//             </div>{" "}
//           </div>

//           <div class="col-12 col-md-6 col-lg-6 ">
//             <div>
//               <p className="font-semibold text-lg mt-2">
//                 LIGHT BEIGE CAMBRIC UNSTITCHED 3PC | JJLS-W-JWU-22-1863
//               </p>
//               <p className="font-bold">SKU #: GL177828-3PS-LGB-L</p>
//               <p className="font-bold">IN STOCK</p>
//               <p className="text-xs underline">
//                 Be the first to review this product
//               </p>
//               <p className=" font-bold text-2xl mb-3 mt-4">PKR 8,430.00</p>
//               <hr />
//               <div className="flex mt-6">
//                 <Spinner
//                   className="w-4 h-[0.9rem] mt-1 text-red-500"
//                   animation="grow"
//                 />{" "}
//                 <p className="ml-3 font-bold">
//                   Only 11 Left in Stock – Act Fast!
//                 </p>
//               </div>
//               <button onClick={handleShow}>
//                 <button className="border-black  border-2 p-2 lg:w-[350px] lg:h-[53px] w-[20rem] hover:bg-black hover:text-white mt-10 text-lg font-semibold">
//                   ADD TO BAG
//                 </button>
//               </button>

//               <Offcanvas show={show} onHide={handleClose} placement="end">
//                 <Offcanvas.Header
//                   closeButton
//                   className="border-2 border-black bg-slate-100"
//                 >
//                   <Offcanvas.Title className="font-semibold text-sm ml-40">
//                     MY BAG
//                   </Offcanvas.Title>
//                 </Offcanvas.Header>
//                 <Offcanvas.Body>
//                   <div className="flex ">
//                     <img
//                       className="w-24"
//                       src="https://www.junaidjamshed.com/media/catalog/product/2/3/23-060-11_1_.jpg?width=150&height=150&canvas=150,150&optimize=medium&bg-color=255,255,255&fit=bounds"
//                     />

//                     <div>
//                       <div className="flex">
//                         <p className="text-xs font-bold">
//                           BEIGE LAWN UNSTITCHED 3PC | <br /> JLAWN-S-23-060
//                         </p>
//                         <img
//                           className="w-6 h-5 ml-14"
//                           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYvZNgwSJFO0HpucBoFCNrRA1noXhds7qVTQ&s"
//                         />
//                       </div>

//                       <div className="flex mt-9">
//                         <p className="text-xs font-bold">QTY:</p>
//                         <button>
//                           <img
//                             className="w-2 mt-[0.1rem] ml-1"
//                             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbfo-64GJ9egugzDhnNTynHj0bOkQO8qK68Q&s"
//                           />
//                         </button>
//                         <p className="font-semibold text-xs ml-4 mt-[0.1rem]">
//                           1
//                         </p>
//                         <button>
//                           <img
//                             className="w-2 mt-[0.1rem] ml-4"
//                             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjA-r16Dow9Wb4OaeWV4457H8E5G2Ejh-TQg&s"
//                           />
//                         </button>
//                         <p className="text-sm font-bold ml-3 text-red-600">
//                           PKR 4,585.00
//                         </p>
//                         <p className="text-sm font-bold">PKR 3,585.00</p>
//                       </div>
//                     </div>
//                   </div>
//                   <hr className="mt-3" />
//                 </Offcanvas.Body>
//                 <div className="flex justify-between bg-slate-100 p-3">
//                   <div className="ml-2 font-semibold text-md">
//                     CART SUBTOTAL:
//                   </div>
//                   <div className="ml-2 font-semibold text-md">
//                     PKR 27,510.00
//                   </div>
//                 </div>
//                 <Link to="/View">
//                   {" "}
//                   <p className="hover:underline text-center text-sm font-semibold p-2">
//                     VIEW AND EDIT CART
//                   </p>
//                 </Link>
//                 <Link to="/Header6">
//                   {" "}
//                   <button className="p-2  m-2 w-96 border-2 border-black hover:bg-black hover:text-white">
//                     GO TO CHECKOUT
//                   </button>
//                 </Link>
//               </Offcanvas>

//               <p className="underline font-bold text-md mt-4 mb-3 ">
//                 Basic 3 Piece
//               </p>
//               <p className="text-sm font-semibold font-mono">
//                 Printed Jacquard Dupatta : 2.5 Meters
//               </p>
//               <p className="text-sm font-semibold font-mono">
//                 Foil Cambric Shirt: 2.5 Meters
//               </p>
//               <p className="text-sm font-semibold font-mono">
//                 Cambric Trouser: 2.25 Meters
//               </p>

//               <hr className="mt-5" />

//               <Accordion>
//                 <Accordion.Item eventKey="0" className="border-none ">
//                   <Accordion.Header className="font-bold text-xs">
//                     More Information
//                   </Accordion.Header>
//                   <Accordion.Body className="!visible !block">
//                     <div className="flex ">
//                       <p className="font-bold text-sm ">Size</p>
//                       <p className="ml-32 text-sm ">3piece</p>
//                     </div>
//                     <div className="flex mt-2 mb-2">
//                       <p className="font-bold text-sm">Color</p>
//                       <p className="ml-[7.50rem] text-sm">Light Beige</p>
//                     </div>
//                     <div className="flex mt-2 mb-2">
//                       <p className="font-bold text-sm">Fabric</p>
//                       <p className="ml-[7.30rem] text-sm"> Cambric</p>
//                     </div>
//                     <div className="flex mt-2 mb-2">
//                       <p className="font-bold text-sm">Product Category</p>
//                       <p className="ml-10 text-sm">Unstitched 3 Piece</p>
//                     </div>
//                     <div className="flex mt-2 mb-2">
//                       <p className="font-bold text-sm">Season</p>
//                       <p className="ml-28 text-sm">Winter Collection</p>
//                     </div>
//                   </Accordion.Body>
//                 </Accordion.Item>
//                 <hr />
//                 <Accordion.Item eventKey="1" className="border-none ">
//                   <Accordion.Header className="font-bold text-xs">
//                     Reviews
//                   </Accordion.Header>
//                   <Accordion.Body className="!visible !block">
//                     <p className="text-xs font-bold mt-4">You're reviewing:</p>
//                     <p className="font-bold text-xs">
//                       LIGHT BEIGE CAMBRIC UNSTITCHED 3PC | JJLS-W-JWU-22-1863
//                     </p>
//                     <p class="after:content-['*'] after:text-red-600 after:text-xl text-sm font-bold mt-3">
//                       {" "}
//                       Your Rating{" "}
//                     </p>
//                     <p className="font-semibold text-sm mt-2">Quality</p>
//                     <div className="flex mt-2 ">
//                       <img
//                         className="w-6 mr-2"
//                         src="https://cdn-icons-png.flaticon.com/128/2099/2099045.png"
//                       />
//                       <img
//                         className="w-6 mr-2"
//                         src="https://cdn-icons-png.flaticon.com/128/2099/2099045.png"
//                       />
//                       <img
//                         className="w-6 mr-2"
//                         src="https://cdn-icons-png.flaticon.com/128/2099/2099045.png"
//                       />
//                       <img
//                         className="w-6 mr-2"
//                         src="https://cdn-icons-png.flaticon.com/128/2099/2099045.png"
//                       />
//                       <img
//                         className="w-6"
//                         src="https://cdn-icons-png.flaticon.com/128/2099/2099045.png"
//                       />
//                     </div>
//                     <p className="ml-1 after:content-['*'] after:text-red-600 after:text-xl text-xs font-bold mt-3 ">
//                       NickName
//                     </p>
//                     <Form.Control
//                       className="mt-2 rounded-none"
//                       size="md"
//                       type="text"
//                     />

//                     <p className="ml-1 after:content-['*'] after:text-red-600 after:text-xl text-xs font-bold mt-3 ">
//                       Summary
//                     </p>
//                     <Form.Control
//                       className="mt-2 rounded-none"
//                       size="md"
//                       type="text"
//                     />

//                     <p className="ml-1 after:content-['*'] after:text-red-600 after:text-xl text-xs font-bold mt-3 ">
//                       Review
//                     </p>
//                     <Form.Control
//                       className="mt-2 rounded-none"
//                       size="md"
//                       type="text"
//                     />
//                     <button className="text-lg border-black  border-2 p-1  w-[250px] h-[40px] hover:bg-black hover:text-white mt-10  font-semibold">
//                       Submit Review
//                     </button>
//                   </Accordion.Body>
//                 </Accordion.Item>
//               </Accordion>
//             </div>
//           </div>
//         </div>

//         <p className="text-center font-semibold text-3xl  mt-5">
//           RELATED PRODUCTS{" "}
//         </p>

//         <div className="flex mb-5">
//           <p className="font-semibold text-sm mt-1 mr-3 ml-10">
//             Check items to add to the cart or{" "}
//           </p>
//           <button className="bg-black text-white p-1 font-semibold">
//             Select all
//           </button>
//         </div>
//       </div>

//       <div className="slider-container ">
//         <Slider {...settings}>
//           <div className="lg:hover:bg-white lg:hover:p-2 lg:hover:shadow-2xl ">
//             <p className="absolute mt-52 ml-40 bg-red-500 text-white text-sm p-1">
//               20% OFF
//             </p>
//             <img
//               className="p-3 w-64 h-64 "
//               src="https://www.junaidjamshed.com/media/catalog/product/2/5/25-3011_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=640&width=640&canvas=640:640&dpr=2"
//             />
//             <p className="text-[0.7rem] ml-5 font-bold">
//               BEIGE LAWN UNSTITCHED 3PC | JLAWN-S-23-060
//             </p>
//             <p className="text-[0.9rem] ml-11 font-bold text-red-500 ">
//               PKR 4,500.00
//             </p>
//             <p className="text-[0.9rem] ml-11 font-bold line-through">
//               PKR 9,123.00
//             </p>
//             <div className="ml-32 mt-2 relative z-20">
//               <input className="mr-2" type="checkbox" />
//               <label className="text-sm font-semibold">Add To Bag</label>
//             </div>
//           </div>
//           <div className="lg:hover:bg-white lg:hover:p-2 lg:hover:shadow-2xl ">
//             <p className="absolute mt-52 ml-40 bg-red-500 text-white text-sm p-1">
//               20% OFF
//             </p>
//             <img
//               className="p-3 w-64 h-64 "
//               src="https://www.junaidjamshed.com/media/catalog/product/2/3/23-601_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=640&width=640&canvas=640:640&dpr=2"
//             />
//             <p className="text-[0.7rem] ml-5 font-bold">
//               BEIGE LAWN UNSTITCHED 3PC | JLAWN-S-23-060
//             </p>
//             <p className="text-[0.9rem] ml-11 font-bold text-red-500 ">
//               PKR 4,500.00
//             </p>
//             <p className="text-[0.9rem] ml-11 font-bold line-through">
//               PKR 9,123.00
//             </p>
//             <div className="ml-32 mt-2 relative z-20">
//               <input className="mr-2" type="checkbox" />
//               <label className="text-sm font-semibold">Add To Bag</label>
//             </div>
//           </div>

//           <div className="lg:hover:bg-white lg:hover:p-2 lg:hover:shadow-2xl ">
//             <p className="absolute mt-52 ml-40 bg-red-500 text-white text-sm p-1">
//               20% OFF
//             </p>
//             <img
//               className="p-3 w-64 h-64 "
//               src="https://www.junaidjamshed.com/media/catalog/product/2/5/25-3299b_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=640&width=640&canvas=640:640&dpr=2"
//             />
//             <p className="text-[0.7rem] ml-5 font-bold">
//               BEIGE LAWN UNSTITCHED 3PC | JLAWN-S-23-060
//             </p>
//             <p className="text-[0.9rem] ml-11 font-bold text-red-500 ">
//               PKR 4,500.00
//             </p>
//             <p className="text-[0.9rem] ml-11 font-bold line-through">
//               PKR 9,123.00
//             </p>
//             <div className="ml-32 mt-2 relative z-20">
//               <input className="mr-2" type="checkbox" />
//               <label className="text-sm font-semibold">Add To Bag</label>
//             </div>
//           </div>

//           <div className="lg:hover:bg-white lg:hover:p-2 lg:hover:shadow-2xl ">
//             <p className="absolute mt-52 ml-40 bg-red-500 text-white text-sm p-1">
//               20% OFF
//             </p>
//             <img
//               className="p-3 w-64 h-64 "
//               src="https://www.junaidjamshed.com/media/catalog/product/2/2/22-277_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=640&width=640&canvas=640:640&dpr=2"
//             />
//             <p className="text-[0.7rem] ml-5 font-bold">
//               BEIGE LAWN UNSTITCHED 3PC | JLAWN-S-23-060
//             </p>
//             <p className="text-[0.9rem] ml-11 font-bold text-red-500 ">
//               PKR 4,500.00
//             </p>
//             <p className="text-[0.9rem] ml-11 font-bold line-through">
//               PKR 9,123.00
//             </p>
//             <div className="ml-32 mt-2 relative z-20">
//               <input className="mr-2" type="checkbox" />
//               <label className="text-sm font-semibold">Add To Bag</label>
//             </div>
//           </div>
//           <div className="lg:hover:bg-white lg:hover:p-2 lg:hover:shadow-2xl ">
//             <p className="absolute mt-52 ml-40 bg-red-500 text-white text-sm p-1">
//               20% OFF
//             </p>
//             <img
//               className="p-3 w-64 h-64 "
//               src="https://www.junaidjamshed.com/media/catalog/product/2/5/25-3196_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=640&width=640&canvas=640:640&dpr=2"
//             />
//             <p className="text-[0.7rem] ml-5 font-bold">
//               BEIGE LAWN UNSTITCHED 3PC | JLAWN-S-23-060
//             </p>
//             <p className="text-[0.9rem] ml-11 font-bold text-red-500 ">
//               PKR 4,500.00
//             </p>
//             <p className="text-[0.9rem] ml-11 font-bold line-through">
//               PKR 9,123.00
//             </p>
//             <div className="ml-32 mt-2 relative z-20">
//               <input className="mr-2" type="checkbox" />
//               <label className="text-sm font-semibold">Add To Bag</label>
//             </div>
//           </div>

//           <div className="lg:hover:bg-white lg:hover:p-2 lg:hover:shadow-2xl ">
//             <p className="absolute mt-52 ml-40 bg-red-500 text-white text-sm p-1">
//               20% OFF
//             </p>
//             <img
//               className="p-3 w-64 h-64 "
//               src="https://www.junaidjamshed.com/media/catalog/product/j/f/jfu-25-706_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=640&width=640&canvas=640:640&dpr=2"
//             />
//             <p className="text-[0.7rem] ml-5 font-bold">
//               BEIGE LAWN UNSTITCHED 3PC | JLAWN-S-23-060
//             </p>
//             <p className="text-[0.9rem] ml-11 font-bold text-red-500 ">
//               PKR 4,500.00
//             </p>
//             <p className="text-[0.9rem] ml-11 font-bold line-through">
//               PKR 9,123.00
//             </p>
//             <div className="ml-32 mt-2 relative z-20">
//               <input className="mr-2" type="checkbox" />
//               <label className="text-sm font-semibold">Add To Bag</label>
//             </div>
//           </div>

//           <div className="lg:hover:bg-white lg:hover:p-2 lg:hover:shadow-2xl ">
//             <p className="absolute mt-52 ml-40 bg-red-500 text-white text-sm p-1">
//               20% OFF
//             </p>
//             <img
//               className="p-3 w-64 h-64 "
//               src="https://www.junaidjamshed.com/media/catalog/product/1/7/1723_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=640&width=640&canvas=640:640&dpr=2"
//             />
//             <p className="text-[0.7rem] ml-5 font-bold">
//               BEIGE LAWN UNSTITCHED 3PC | JLAWN-S-23-060
//             </p>
//             <p className="text-[0.9rem] ml-11 font-bold text-red-500 ">
//               PKR 4,500.00
//             </p>
//             <p className="text-[0.9rem] ml-11 font-bold line-through">
//               PKR 9,123.00
//             </p>
//             <div className="ml-32 mt-2 relative z-20">
//               <input className="mr-2" type="checkbox" />
//               <label className="text-sm font-semibold">Add To Bag</label>
//             </div>
//           </div>

//           <div className="lg:hover:bg-white lg:hover:p-2 lg:hover:shadow-2xl ">
//             <p className="absolute mt-52 ml-40 bg-red-500 text-white text-sm p-1">
//               20% OFF
//             </p>
//             <img
//               className="p-3 w-64 h-64 "
//               src="https://www.junaidjamshed.com/media/catalog/product/2/5/25-3076-1_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=640&width=640&canvas=640:640&dpr=2"
//             />
//             <p className="text-[0.7rem] ml-5 font-bold">
//               BEIGE LAWN UNSTITCHED 3PC | JLAWN-S-23-060
//             </p>
//             <p className="text-[0.9rem] ml-11 font-bold text-red-500 ">
//               PKR 4,500.00
//             </p>
//             <p className="text-[0.9rem] ml-11 font-bold line-through">
//               PKR 9,123.00
//             </p>
//             <div className="ml-32 mt-2 relative z-20">
//               <input className="mr-2" type="checkbox" />
//               <label className="text-sm font-semibold">Add To Bag</label>
//             </div>
//           </div>
//           <div className="lg:hover:bg-white lg:hover:p-2 lg:hover:shadow-2xl ">
//             <p className="absolute mt-52 ml-40 bg-red-500 text-white text-sm p-1">
//               20% OFF
//             </p>
//             <img
//               className="p-3 w-64 h-64 "
//               src="https://www.junaidjamshed.com/media/catalog/product/2/4/24-056_1__1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=640&width=640&canvas=640:640&dpr=2"
//             />
//             <p className="text-[0.7rem] ml-5 font-bold">
//               BEIGE LAWN UNSTITCHED 3PC | JLAWN-S-23-060
//             </p>
//             <p className="text-[0.9rem] ml-11 font-bold text-red-500 ">
//               PKR 4,500.00
//             </p>
//             <p className="text-[0.9rem] ml-11 font-bold line-through">
//               PKR 9,123.00
//             </p>
//             <div className="ml-32 mt-2 relative z-20">
//               <input className="mr-2" type="checkbox" />
//               <label className="text-sm font-semibold">Add To Bag</label>
//             </div>
//           </div>

//           <div className="lg:hover:bg-white lg:hover:p-2 lg:hover:shadow-2xl ">
//             <p className="absolute mt-52 ml-40 bg-red-500 text-white text-sm p-1">
//               20% OFF
//             </p>
//             <img
//               className="p-3 w-64 h-64 "
//               src="https://www.junaidjamshed.com/media/catalog/product/2/5/25-3026_1__1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=640&width=640&canvas=640:640&dpr=2"
//             />
//             <p className="text-[0.7rem] ml-5 font-bold">
//               BEIGE LAWN UNSTITCHED 3PC | JLAWN-S-23-060
//             </p>
//             <p className="text-[0.9rem] ml-11 font-bold text-red-500 ">
//               PKR 4,500.00
//             </p>
//             <p className="text-[0.9rem] ml-11 font-bold line-through">
//               PKR 9,123.00
//             </p>
//             <div className="ml-32 mt-2 relative z-20">
//               <input className="mr-2" type="checkbox" />
//               <label className="text-sm font-semibold">Add To Bag</label>
//             </div>
//           </div>

//           <div className="lg:hover:bg-white lg:hover:p-2 lg:hover:shadow-2xl ">
//             <p className="absolute mt-52 ml-40 bg-red-500 text-white text-sm p-1">
//               20% OFF
//             </p>
//             <img
//               className="p-3 w-64 h-64 "
//               src="https://www.junaidjamshed.com/media/catalog/product/2/2/22-277_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=640&width=640&canvas=640:640&dpr=2"
//             />
//             <p className="text-[0.7rem] ml-5 font-bold">
//               BEIGE LAWN UNSTITCHED 3PC | JLAWN-S-23-060
//             </p>
//             <p className="text-[0.9rem] ml-11 font-bold text-red-500 ">
//               PKR 4,500.00
//             </p>
//             <p className="text-[0.9rem] ml-11 font-bold line-through">
//               PKR 9,123.00
//             </p>
//             <div className="ml-32 mt-2 relative z-20">
//               <input className="mr-2" type="checkbox" />
//               <label className="text-sm font-semibold">Add To Bag</label>
//             </div>
//           </div>

//           {/* Repeat the same structure for other slides */}
//         </Slider>

//         {/* Hide the Next button using custom CSS */}
//         <style>{`
//         .slick-next {
//           display: none !important;
//         }
//       `}</style>
//       </div>
//     </div>
//   );
// }

// export default HeaderAA;



import React, { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Pagination from "react-bootstrap/Pagination";
import { useCart } from "../context/CartContext"; // Correct import
import Modal from "react-bootstrap/Modal";
function HeaderAA() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [lgShow, setLgShow] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [index, setIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [showError, setShowError] = useState(false);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const { cart, addToCart, removeFromCart, updateCartQuantity } = useCart(); // Access cart from context
  const handleAddToCart = () => {
    const product = {
      _id: "15334208227",
      name: "LIGHT BEIGE CAMBRIC UNSTITCHED 3PC | JJLS-W-JWU-22-1863",
      price: 6917.5,
      image:"https://www.junaidjamshed.com/media/catalog/product/2/2/22-1863-1_1_.jpg?width=86&height=110&canvas=86,110&optimize=medium&bg-color=255,255,255&fit=bounds",
    };
    addToCart(product); // Add product to cart
    handleShow();
  };

  // Handler to increase quantity
  const handleIncreaseQuantity = (item) => {
    updateCartQuantity(item._id, item.quantity + 1);
  };

  const handleDecreaseQuantity = (item) => {
    if (item.quantity > 1) {
      updateCartQuantity(item._id, item.quantity - 1);
    }
  };

  const handleRemoveFromCart = (item) => {
    removeFromCart(item._id); // Remove the item from the cart based on its _id
  };
  let [change, setChange] = useState(
    <img src="https://www.junaidjamshed.com/media/catalog/product/2/3/23-060-11_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds" />
  );
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-6 ">
            <div className="lg:ml-14">{change}</div>
            <div className="flex justify-around">
              <img
                className="mt-4"
                onClick={() =>
                  setChange(
                    (change = (
                      <img src="https://www.junaidjamshed.com/media/catalog/product/2/3/23-060-11_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds" />
                    ))
                  )
                }
                src="https://www.junaidjamshed.com/media/catalog/product/2/2/22-1863-1_1_.jpg?width=86&height=110&canvas=86,110&optimize=medium&bg-color=255,255,255&fit=bounds"
              />{" "}
              <img
                className="mt-4"
                onClick={() =>
                  setChange(
                    (change = (
                      <img src="https://www.junaidjamshed.com/media/catalog/product/2/3/23-060-11_3_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds" />
                    ))
                  )
                }
                src="https://www.junaidjamshed.com/media/catalog/product/2/2/22-1863-1_2_.jpg?width=86&height=110&canvas=86,110&optimize=medium&bg-color=255,255,255&fit=bounds"
              />{" "}
              <img
                className="mt-4"
                onClick={() =>
                  setChange(
                    (change = (
                      <img src="https://www.junaidjamshed.com/media/catalog/product/2/3/23-060-11_2_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds" />
                    ))
                  )
                }
                src="https://www.junaidjamshed.com/media/catalog/product/2/2/22-1863-1_3_.jpg?width=86&height=110&canvas=86,110&optimize=medium&bg-color=255,255,255&fit=bounds5"
              />{" "}
            </div>{" "}
          </div>

          <div class="col-12 col-md-6 col-lg-6 ">
            <div>
              <p className="font-semibold text-lg mt-2">
                LIGHT BEIGE CAMBRIC UNSTITCHED 3PC | JJLS-W-JWU-22-1863
              </p>
              <p className="font-bold text-gray-600">SKU #: J-10000111735</p>
              <p className="font-bold text-gray-600">
                JLAWN-S-25-101/S SHEER ELEGANCE-01
              </p>
              <p className="font-bold text-gray-600">IN STOCK</p>
              <p className="text-xs text-black underline">
                Be the first to review this product
              </p>
              <span className="text-black text-2xl font-bold ">
                PKR 12,490.00
              </span>

              <div className="flex mt-2 gap-x-2">
                {["XS", "S", "M", "L"].map((size) => (
                  <button
                    key={size}
                    onClick={() => {
                      setSelectedSize(size);
                      setShowError(false);
                    }}
                    className={`border px-3 py-1 font-medium rounded ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "bg-slate-200 text-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {showError && (
                <p className="text-red-600 text-sm mt-2">
                  Please select a size.
                </p>
              )}

              <button className="mt-4" onClick={() => setLgShow(true)}>
                <div className="w-auto h-auto border-blue-300 p-1 hover:text-gray-500 font-semibold border-2 text-blue-300 text-sm">
                  SIZE CHART
                </div>
              </button>

              <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-lg"></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <img src="https://www.junaidjamshed.com/media/wysiwyg/Regular-Shirt-with-Trousers-UP_1.jpg" />
                </Modal.Body>
              </Modal>

              <hr className="mt-3" />
              <div className="flex mt-6">
                <Spinner
                  className="w-4 h-[0.9rem] mt-2 text-green-500"
                  animation="grow"
                />{" "}
                <p className="ml-3 font-bold">
                  Limited Stock Alert: Get Yours Before They're Gone!
                </p>
              </div>
              <button
                onClick={() => {
                  if (!selectedSize) {
                    setShowError(true);
                  } else {
                    setShowError(false);
                    localStorage.setItem("selectedSize", selectedSize);
                    handleAddToCart();
                  }
                }}
              >
                <button className="border-black  border-2 p-2 lg:w-[350px] lg:h-[53px] w-[20rem] hover:bg-black hover:text-white mt-10 text-lg font-semibold">
                  ADD TO BAG
                </button>
              </button>

              <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header
                  closeButton
                  className="border-2 border-black bg-slate-100"
                >
                  <Offcanvas.Title className="font-semibold text-sm ml-40">
                    MY BAG
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  {cart.length === 0 ? (
                    <p>Your cart is empty!</p>
                  ) : (
                    cart.map((item) => (
                      <div key={item._id} className="flex mb-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-24 object-cover"
                        />
                        <div className="ml-4">
                          <p className="font-bold text-sm">{item.name}</p>
                          <p className="text-sm">PKR {item.price}</p>
                          <p className="text-xs font-semibold mt-1">
                            Size: {selectedSize}
                          </p>
                          <div className="flex items-center">
                            <Button
                              variant="secondary"
                              onClick={() => handleDecreaseQuantity(item)}
                            >
                              -
                            </Button>
                            <span className="mx-2">{item.quantity}</span>
                            <Button
                              variant="secondary"
                              onClick={() => handleIncreaseQuantity(item)}
                            >
                              +
                            </Button>
                          </div>
                          <button
                            onClick={() => handleRemoveFromCart(item)}
                            className="text-red-500 mt-2"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))
                  )}

                  <hr className="mt-3" />
                </Offcanvas.Body>
                <div className="flex justify-between bg-slate-100 p-3">
                  <div className="ml-2 font-semibold text-md">
                    CART SUBTOTAL:
                  </div>
                  <div className="ml-2 font-semibold text-md">
                    PKR{" "}
                    {cart
                      .reduce(
                        (total, item) => total + item.price * item.quantity,
                        0
                      )
                      .toFixed(2)}
                  </div>
                </div>

                <Link to="/Cart">
                  <p className="hover:underline text-center text-sm font-semibold p-2">
                    VIEW AND EDIT CART
                  </p>
                </Link>
                <Link to="/Checkout">
                  <button className="p-2 m-2 w-96 border-2 border-black hover:bg-black hover:text-white">
                    GO TO CHECKOUT
                  </button>
                </Link>
              </Offcanvas>

              <p className="mt-3 text-sm font-serif font-semibold">
                <ol>
                  <li>Collection: Embroidered Paste Printed Cotton Silk</li>
                  <li> Shirt, Dyed Maple Silk Trouser, Dyed Chiffon Dupatta</li>
                  <li>Style Fit: Regular Fit </li>
                  <li>Fabric Type: Cotton Silk</li>
                  <li>Neckline: V-Neck With Pearls On It </li>
                  <li>Trouser: Straight Pants</li>
                  <li>Sleeves: Printed And Emb Bell Sleeves </li>
                  <li>Style Cut: Regular Shirt</li>
                  <li>Length: Long Length </li>
                </ol>
              </p>

              <hr className="mt-5" />

              <Accordion>
                <Accordion.Item eventKey="0" className="border-none ">
                  <Accordion.Header className="font-bold text-xs">
                    More Information
                  </Accordion.Header>
                  <Accordion.Body className="!visible !block">
                    <div className="flex mt-2 mb-2">
                      <p className="font-bold text-sm">Color</p>
                      <p className="ml-[7.50rem] text-sm">Blue</p>
                    </div>
                    <div className="flex mt-2 mb-2">
                      <p className="font-bold text-sm">Fabric</p>
                      <p className="ml-[7.30rem] text-sm"> Cotton Silk</p>
                    </div>
                    <div className="flex mt-2 mb-2">
                      <p className="font-bold text-sm">Product Category</p>
                      <p className="ml-10 text-sm">3 Piece Stitched</p>
                    </div>
                    <div className="flex mt-2 mb-2">
                      <p className="font-bold text-sm">Season</p>
                      <p className="ml-28 text-sm">Festive Collection</p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>

        <p className="text-center font-semibold text-3xl  mt-5">
          RELATED PRODUCTS{" "}
        </p>
      </div>

      <div className="slider-container ">
        <Slider {...settings}>
          <div className="lg:hover:bg-white  lg:hover:shadow-2xl ">
            <Link to="/Pic2P1">
              <img
                className="p-3 "
                src="https://www.junaidjamshed.com/media/catalog/product/j/d/jds-25-1003s_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
              />
            </Link>
            <Link to="/Pic2P1">
              <p className="text-[0.7rem] text-center font-bold hover:underline">
                ORANGE LAWN EMBROIDERED 2PC STITCHED | JLAWN-S-JDS-25-1003
              </p>
            </Link>

            <p className="text-[0.9rem] text-center font-bold ">PKR 5,103.00</p>
          </div>

          <div className="lg:hover:bg-white  lg:hover:shadow-2xl ">
            <p className="absolute ml-auto mt-8 bg-red-500 text-white text-sm p-1">
              25% OFF
            </p>
            <Link to="/Pic4P1">
              <img
                className="p-3  "
                src="https://www.junaidjamshed.com/media/catalog/product/2/5/25-3118_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
              />
            </Link>
            <p className="text-[0.7rem] ml-5 font-bold">
              BEIGE LAWN UNSTITCHED 3PC | JLAWN-S-23-060
            </p>
            <p className="text-[0.9rem] ml-11 font-bold text-red-500 ">
              PKR 4,500.00
            </p>
            <p className="text-[0.9rem] ml-11 font-bold line-through">
              PKR 9,123.00
            </p>
          </div>

          <div className="lg:hover:bg-white  lg:hover:shadow-2xl ">
            <p className="absolute ml-auto mt-8 bg-red-500 text-white text-sm p-1">
              25% OFF
            </p>
            <Link to="/Pic5P1">
              {" "}
              <img
                className="p-3  "
                src="https://www.junaidjamshed.com/media/catalog/product/4/7/47390_3__8.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
              />
            </Link>
            <p className="text-[0.7rem] ml-5 font-bold">
              BEIGE LAWN UNSTITCHED 3PC | JLAWN-S-23-060
            </p>
            <p className="text-[0.9rem] ml-11 font-bold text-red-500 ">
              PKR 4,500.00
            </p>
            <p className="text-[0.9rem] ml-11 font-bold line-through">
              PKR 9,123.00
            </p>
          </div>
          <div className="lg:hover:bg-white  lg:hover:shadow-2xl ">
            <p className="absolute ml-auto mt-8 bg-red-500 text-white text-sm p-1">
              25% OFF
            </p>
            <Link to="/Pic7P1">
              <img
                className="p-3  "
                src="https://www.junaidjamshed.com/media/catalog/product/2/5/25-3215_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
              />
            </Link>
            <p className="text-[0.7rem] ml-5 font-bold">
              BEIGE LAWN UNSTITCHED 3PC | JLAWN-S-23-060
            </p>
            <p className="text-[0.9rem] ml-11 font-bold text-red-500 ">
              PKR 4,500.00
            </p>
            <p className="text-[0.9rem] ml-11 font-bold line-through">
              PKR 9,123.00
            </p>
          </div>

          <div className="lg:hover:bg-white  lg:hover:shadow-2xl ">
            <p className="absolute ml-auto mt-8 bg-red-500 text-white text-sm p-1">
              25% OFF
            </p>
            <Link to="/Pic8P1">
              <img
                className="p-3  "
                src="https://www.junaidjamshed.com/media/catalog/product/3/2/3216_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
              />
            </Link>
            <p className="text-[0.7rem] ml-5 font-bold">
              BEIGE LAWN UNSTITCHED 3PC | JLAWN-S-23-060
            </p>
            <p className="text-[0.9rem] ml-11 font-bold text-red-500 ">
              PKR 4,500.00
            </p>
            <p className="text-[0.9rem] ml-11 font-bold line-through">
              PKR 9,123.00
            </p>
          </div>

          <div className="lg:hover:bg-white  lg:hover:shadow-2xl ">
            <p className="absolute ml-auto mt-8 bg-red-500 text-white text-sm p-1">
              25% OFF
            </p>
            <Link to="/Pic9P1">
              <img
                className="p-3  "
                src="https://www.junaidjamshed.com/media/catalog/product/2/0/2034_3__2.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
              />
            </Link>
            <p className="text-[0.7rem] ml-5 font-bold">
              BEIGE LAWN UNSTITCHED 3PC | JLAWN-S-23-060
            </p>
            <p className="text-[0.9rem] ml-11 font-bold text-red-500 ">
              PKR 4,500.00
            </p>
            <p className="text-[0.9rem] ml-11 font-bold line-through">
              PKR 9,123.00
            </p>
          </div>

          <div className="lg:hover:bg-white  lg:hover:shadow-2xl ">
            <p className="absolute ml-auto mt-8 bg-red-500 text-white text-sm p-1">
              25% OFF
            </p>
            <Link to="/Pic10P1">
              {" "}
              <img
                className="p-3  "
                src="https://www.junaidjamshed.com/media/catalog/product/2/5/25-3198_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
              />
            </Link>
            <p className="text-[0.7rem] ml-5 font-bold">
              BEIGE LAWN UNSTITCHED 3PC | JLAWN-S-23-060
            </p>
            <p className="text-[0.9rem] ml-11 font-bold text-red-500 ">
              PKR 4,500.00
            </p>
            <p className="text-[0.9rem] ml-11 font-bold line-through">
              PKR 9,123.00
            </p>
          </div>

          <div className="lg:hover:bg-white  lg:hover:shadow-2xl ">
            <p className="absolute ml-auto mt-8 bg-red-500 text-white text-sm p-1">
              25% OFF
            </p>
            <Link to="/Pic11P1">
              <img
                className="p-3  "
                src="https://www.junaidjamshed.com/media/catalog/product/3/2/3203_4_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
              />
            </Link>
            <p className="text-[0.7rem] ml-5 font-bold">
              BEIGE LAWN UNSTITCHED 3PC | JLAWN-S-23-060
            </p>
            <p className="text-[0.9rem] ml-11 font-bold text-red-500 ">
              PKR 4,500.00
            </p>
            <p className="text-[0.9rem] ml-11 font-bold line-through">
              PKR 9,123.00
            </p>
          </div>

          <div className="lg:hover:bg-white  lg:hover:shadow-2xl ">
            <p className="absolute ml-auto mt-8 bg-red-500 text-white text-sm p-1">
              25% OFF
            </p>
            <Link to="/Pic12P1">
              <img
                className="p-3  "
                src="https://www.junaidjamshed.com/media/catalog/product/4/7/47390_4__2.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
              />
            </Link>
            <p className="text-[0.7rem] ml-5 font-bold">
              BEIGE LAWN UNSTITCHED 3PC | JLAWN-S-23-060
            </p>
            <p className="text-[0.9rem] ml-11 font-bold text-red-500 ">
              PKR 4,500.00
            </p>
            <p className="text-[0.9rem] ml-11 font-bold line-through">
              PKR 9,123.00
            </p>
          </div>

          <div className="lg:hover:bg-white  lg:hover:shadow-2xl ">
            <p className="absolute ml-auto mt-8 bg-red-500 text-white text-sm p-1">
              25% OFF
            </p>
            <Link to="/Pic13P1">
              <img
                className="p-3  "
                src="https://www.junaidjamshed.com/media/catalog/product/3/0/3084_2_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
              />
            </Link>
            <p className="text-[0.7rem] ml-5 font-bold">
              BEIGE LAWN UNSTITCHED 3PC | JLAWN-S-23-060
            </p>
            <p className="text-[0.9rem] ml-11 font-bold text-red-500 ">
              PKR 4,500.00
            </p>
            <p className="text-[0.9rem] ml-11 font-bold line-through">
              PKR 9,123.00
            </p>
          </div>

          <div className="lg:hover:bg-white  lg:hover:shadow-2xl ">
            <p className="absolute ml-auto mt-8 bg-red-500 text-white text-sm p-1">
              25% OFF
            </p>
            <Link to="/Pic14P1">
              <img
                className="p-3  "
                src="https://www.junaidjamshed.com/media/catalog/product/4/7/47390_2__7.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
              />
            </Link>
            <p className="text-[0.7rem] ml-5 font-bold">
              BEIGE LAWN UNSTITCHED 3PC | JLAWN-S-23-060
            </p>
            <p className="text-[0.9rem] ml-11 font-bold text-red-500 ">
              PKR 4,500.00
            </p>
            <p className="text-[0.9rem] ml-11 font-bold line-through">
              PKR 9,123.00
            </p>
          </div>
          {/* Repeat the same structure for other slides */}
        </Slider>

        {/* Hide the Next button using custom CSS */}
        <style>{`
        .slick-next {
          display: none !important;
        }
      `}</style>
      </div>
    </div>
  );
}

export default HeaderAA;