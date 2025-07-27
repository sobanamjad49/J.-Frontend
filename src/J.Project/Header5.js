// import React, { useState } from "react";
// import Spinner from "react-bootstrap/Spinner";
// import Accordion from "react-bootstrap/Accordion";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Offcanvas from "react-bootstrap/Offcanvas";
// import Carousel from "react-bootstrap/Carousel";
// import { Link } from "react-router-dom";

// function Header5() {
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
//       <div className="lg:flex">
//         <div className="lg:ml-52 ml-10 ">
//           {change}
//           <div className="flex justify-evenly">
//             <img className="mt-4"
//               onClick={() =>
//                 setChange(
//                   (change = (
//                     <img src="https://www.junaidjamshed.com/media/catalog/product/2/3/23-060-11_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds" />
//                   ))
//                 )
//               }
//               src="https://www.junaidjamshed.com/media/catalog/product/2/2/22-1863-1_1_.jpg?width=86&height=110&canvas=86,110&optimize=medium&bg-color=255,255,255&fit=bounds"
//             />
//             <img  className="mt-4"
//               onClick={() =>
//                 setChange(
//                   (change = (
//                     <img  src="https://www.junaidjamshed.com/media/catalog/product/2/3/23-060-11_3_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds" />
//                   ))
//                 )
//               }
//               src="https://www.junaidjamshed.com/media/catalog/product/2/2/22-1863-1_2_.jpg?width=86&height=110&canvas=86,110&optimize=medium&bg-color=255,255,255&fit=bounds"
//             />
//             <img className="mt-4"
//               onClick={() =>
//                 setChange(
//                   (change = (
//                     <img src="https://www.junaidjamshed.com/media/catalog/product/2/3/23-060-11_2_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds" />
//                   ))
//                 )
//               }
//               src="https://www.junaidjamshed.com/media/catalog/product/2/2/22-1863-1_3_.jpg?width=86&height=110&canvas=86,110&optimize=medium&bg-color=255,255,255&fit=bounds5"
//             />
//           </div>
//         </div>

//         <div className="mt-5 ml-4">
//           <p className="font-semibold text-lg mt-2">
//             LIGHT BEIGE CAMBRIC UNSTITCHED 3PC | JJLS-W-JWU-22-1863
//           </p>
//           <p className="font-bold">SKU #: GL177828-3PS-LGB-L</p>
//           <p className="font-bold">IN STOCK</p>
//           <p className="text-xs underline">
//             Be the first to review this product
//           </p>
//           <p className=" font-bold text-2xl mb-3 mt-4">PKR 8,430.00</p>
//           <hr />
//           <div className="flex mt-6">
//             <Spinner
//               className="w-4 h-[0.9rem] mt-1 text-red-500"
//               animation="grow"
//             />{" "}
//             <p className="ml-3 font-bold">Only 11 Left in Stock – Act Fast!</p>
//           </div>
//           <button onClick={handleShow}>
//             <button className="border-black  border-2 p-2 lg:w-[350px] lg:h-[53px] w-[28rem] hover:bg-black hover:text-white mt-10 text-lg font-semibold">
//               ADD TO BAG
//             </button>
//           </button>

//           <Offcanvas show={show} onHide={handleClose} placement="end">
//             <Offcanvas.Header
//               closeButton
//               className="border-2 border-black bg-slate-100"
//             >
//               <Offcanvas.Title className="font-semibold text-sm ml-40">
//                 MY BAG
//               </Offcanvas.Title>
//             </Offcanvas.Header>
//             <Offcanvas.Body>
//               <div className="flex ">
//                 <img
//                   className="w-24"
//                   src="https://www.junaidjamshed.com/media/catalog/product/2/3/23-060-11_1_.jpg?width=150&height=150&canvas=150,150&optimize=medium&bg-color=255,255,255&fit=bounds"
//                 />

//                 <div>
//                   <div className="flex">
//                     <p className="text-xs font-bold">
//                       BEIGE LAWN UNSTITCHED 3PC | <br /> JLAWN-S-23-060
//                     </p>
//                     <img
//                       className="w-6 h-5 ml-14"
//                       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYvZNgwSJFO0HpucBoFCNrRA1noXhds7qVTQ&s"
//                     />
//                   </div>

//                   <div className="flex mt-9">
//                     <p className="text-xs font-bold">QTY:</p>
//                     <button>
//                       <img
//                         className="w-2 mt-[0.1rem] ml-1"
//                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbfo-64GJ9egugzDhnNTynHj0bOkQO8qK68Q&s"
//                       />
//                     </button>
//                     <p className="font-semibold text-xs ml-4 mt-[0.1rem]">1</p>
//                     <button>
//                       <img
//                         className="w-2 mt-[0.1rem] ml-4"
//                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjA-r16Dow9Wb4OaeWV4457H8E5G2Ejh-TQg&s"
//                       />
//                     </button>
//                     <p className="text-sm font-bold ml-3 text-red-600">
//                       PKR 4,585.00
//                     </p>
//                     <p className="text-sm font-bold">PKR 3,585.00</p>
//                   </div>
//                 </div>
//               </div>
//               <hr className="mt-3" />
//             </Offcanvas.Body>
//             <div className="flex justify-between bg-slate-100 p-3">
//               <div className="ml-2 font-semibold text-md">CART SUBTOTAL:</div>
//               <div className="ml-2 font-semibold text-md">PKR 27,510.00</div>
//             </div>
//            <Link to='/Header9'> <p className="hover:underline text-center text-sm font-semibold p-2">
//               VIEW AND EDIT CART
//             </p></Link>
//             <Link to="/Header6">
//               {" "}
//               <button className="p-2  m-2 w-96 border-2 border-black hover:bg-black hover:text-white">
//                 GO TO CHECKOUT
//               </button>
//             </Link>
//           </Offcanvas>

//           <p className="underline font-bold text-md mt-4 mb-3 ">
//             Basic 3 Piece
//           </p>
//           <p className="text-sm font-semibold font-mono">
//             Printed Jacquard Dupatta : 2.5 Meters
//           </p>
//           <p className="text-sm font-semibold font-mono">
//             Foil Cambric Shirt: 2.5 Meters
//           </p>
//           <p className="text-sm font-semibold font-mono">
//             Cambric Trouser: 2.25 Meters
//           </p>

//           <hr className="mt-5" />

//           <Accordion>
//             <Accordion.Item eventKey="0" className="border-none ">
//               <Accordion.Header className="font-bold text-xs">
//                 More Information
//               </Accordion.Header>
//               <Accordion.Body>
//                 <div className="flex ">
//                   <p className="font-bold text-sm ">Size</p>
//                   <p className="ml-32 text-sm ">3piece</p>
//                 </div>
//                 <div className="flex mt-2 mb-2">
//                   <p className="font-bold text-sm">Color</p>
//                   <p className="ml-[7.50rem] text-sm">Light Beige</p>
//                 </div>
//                 <div className="flex mt-2 mb-2">
//                   <p className="font-bold text-sm">Fabric</p>
//                   <p className="ml-[7.30rem] text-sm"> Cambric</p>
//                 </div>
//                 <div className="flex mt-2 mb-2">
//                   <p className="font-bold text-sm">Product Category</p>
//                   <p className="ml-10 text-sm">Unstitched 3 Piece</p>
//                 </div>
//                 <div className="flex mt-2 mb-2">
//                   <p className="font-bold text-sm">Season</p>
//                   <p className="ml-28 text-sm">Winter Collection</p>
//                 </div>
//               </Accordion.Body>
//             </Accordion.Item>
//             <hr />
//             <Accordion.Item eventKey="1" className="border-none ">
//               <Accordion.Header className="font-bold text-xs">
//                 Reviews
//               </Accordion.Header>
//               <Accordion.Body>
//                 <p className="text-xs font-bold mt-4">You're reviewing:</p>
//                 <p className="font-bold text-xs">
//                   LIGHT BEIGE CAMBRIC UNSTITCHED 3PC | JJLS-W-JWU-22-1863
//                 </p>
//                 <p class="after:content-['*'] after:text-red-600 after:text-xl text-sm font-bold mt-3">
//                   {" "}
//                   Your Rating{" "}
//                 </p>
//                 <p className="font-semibold text-sm mt-2">Quality</p>
//                 <div className="flex mt-2 ">
//                   <img
//                     className="w-6 mr-2"
//                     src="https://cdn-icons-png.flaticon.com/128/2099/2099045.png"
//                   />
//                   <img
//                     className="w-6 mr-2"
//                     src="https://cdn-icons-png.flaticon.com/128/2099/2099045.png"
//                   />
//                   <img
//                     className="w-6 mr-2"
//                     src="https://cdn-icons-png.flaticon.com/128/2099/2099045.png"
//                   />
//                   <img
//                     className="w-6 mr-2"
//                     src="https://cdn-icons-png.flaticon.com/128/2099/2099045.png"
//                   />
//                   <img
//                     className="w-6"
//                     src="https://cdn-icons-png.flaticon.com/128/2099/2099045.png"
//                   />
//                 </div>
//                 <p className="ml-1 after:content-['*'] after:text-red-600 after:text-xl text-xs font-bold mt-3 ">
//                   NickName
//                 </p>
//                 <Form.Control
//                   className="mt-2 rounded-none"
//                   size="md"
//                   type="text"
//                 />

//                 <p className="ml-1 after:content-['*'] after:text-red-600 after:text-xl text-xs font-bold mt-3 ">
//                   Summary
//                 </p>
//                 <Form.Control
//                   className="mt-2 rounded-none"
//                   size="md"
//                   type="text"
//                 />

//                 <p className="ml-1 after:content-['*'] after:text-red-600 after:text-xl text-xs font-bold mt-3 ">
//                   Review
//                 </p>
//                 <Form.Control
//                   className="mt-2 rounded-none"
//                   size="md"
//                   type="text"
//                 />
//                 <button className="text-lg border-black  border-2 p-1  w-[250px] h-[40px] hover:bg-black hover:text-white mt-10  font-semibold">
//                   Submit Review
//                 </button>
//               </Accordion.Body>
//             </Accordion.Item>
//           </Accordion>
//         </div>
//       </div>

//       <p className="text-center font-semibold text-2xl mt-5">
//         RELATED PRODUCTS{" "}
//       </p>
//       <div className="flex mb-5">
//         <p className="font-semibold text-sm mt-1 mr-3 ml-16">
//           Check items to add to the cart or{" "}
//         </p>
//         <button className="bg-black text-white p-1 font-semibold">
//           Select all
//         </button>
//       </div>

//       <Carousel activeIndex={index} onSelect={handleSelect} col>
//         <Carousel.Item>
//           <div className="flex justify-between ">
//             <div className="hover:bg-white hover:p-2 hover:shadow-2xl ">
//               <p className="absolute mt-52 ml-40 bg-red-500 text-white text-sm p-1">
//                 20% OFF
//               </p>
//               <img
//                 className="p-3 w-64 h-64 "
//                 src="https://www.junaidjamshed.com/media/catalog/product/2/5/25-3097_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=640&width=640&canvas=640:640&dpr=2"
//               />
//               <p className="text-[0.7rem] ml-5 font-bold">
//                 BEIGE LAWN UNSTITCHED 3PC | JLAWN-S-23-060
//               </p>
//               <p className="text-[0.9rem] ml-11 font-bold text-red-500 ">
//                 PKR 4,500.00
//               </p>
//               <p className="text-[0.9rem] ml-11 font-bold line-through">
//                 PKR 9,123.00
//               </p>
//               <div className="ml-32 mt-2 relative z-20">
//                 <input className="mr-2" type="checkbox" />
//                 <label className="text-sm font-semibold">Add To Bag</label>
//               </div>
//             </div>
//             <div className="hover:bg-white hover:p-2 hover:shadow-2xl ">
//               <p className="absolute mt-52 ml-40 bg-red-500 text-white text-sm p-1">
//                 20% OFF
//               </p>
//               <img
//                 className="p-3 w-64 h-64 "
//                 src="https://www.junaidjamshed.com/media/catalog/product/j/s/jst-25-2032_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=640&width=640&canvas=640:640&dpr=2"
//               />
//               <p className="text-[0.7rem] ml-5 font-bold">
//                 BEIGE LAWN UNSTITCHED 3PC | JLAWN-S-23-060
//               </p>
//               <p className="text-[0.9rem] ml-11 font-bold text-red-500 ">
//                 PKR 3,500.00
//               </p>
//               <p className="text-[0.9rem] ml-11 font-bold line-through">
//                 PKR 6,123.00
//               </p>

//               <div className="ml-32 mt-2 relative z-20">
//                 <input className="mr-2" type="checkbox" />
//                 <label className="text-sm font-semibold">Add To Bag</label>
//               </div>
//             </div>
//             <div className="hover:bg-white hover:p-2 hover:shadow-2xl ">
//               <p className="absolute mt-52 ml-40 bg-red-500 text-white text-sm p-1">
//                 30% OFF
//               </p>
//               <img
//                 className="p-3 w-64 h-64 "
//                 src="https://www.junaidjamshed.com/media/catalog/product/2/0/2034_2_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=640&width=640&canvas=640:640&dpr=2"
//               />
//               <p className="text-[0.7rem] ml-5 font-bold">
//                 BEIGE LAWN UNSTITCHED 3PC | JLAWN-S-23-060
//               </p>
//               <p className="text-[0.9rem] ml-11 font-bold text-red-500 ">
//                 PKR 3,500.00
//               </p>
//               <p className="text-[0.9rem] ml-11 font-bold line-through">
//                 PKR 6,123.00
//               </p>

//               <div className="ml-32 mt-2 relative z-20">
//                 <input className="mr-2" type="checkbox" />
//                 <label className="text-sm font-semibold">Add To Bag</label>
//               </div>
//             </div>
//             <div className="hover:bg-white hover:p-2 hover:shadow-2xl ">
//               <img
//                 className="p-3 w-64 h-64 "
//                 src="https://www.junaidjamshed.com/media/catalog/product/2/5/25-3299b_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=640&width=640&canvas=640:640&dpr=2"
//               />
//               <p className="text-[0.7rem] ml-5 font-bold">
//                 BEIGE LAWN UNSTITCHED 3PC | JLAWN-S-23-060
//               </p>

//               <p className="text-[0.9rem] ml-11 font-bold ">PKR 6,123.00</p>

//               <div className="ml-32 mt-2 relative z-20">
//                 <input className="mr-2" type="checkbox" />
//                 <label className="text-sm font-semibold">Add To Bag</label>
//               </div>
//             </div>
//           </div>
//         </Carousel.Item>
//         <Carousel.Item>
//           <div className="flex justify-between">
//             <div className="hover:bg-white hover:p-2 hover:shadow-2xl ">
//               <p className="absolute mt-52 ml-40 bg-red-500 text-white text-sm p-1">
//                 50% OFF
//               </p>
//               <img
//                 className="p-3 w-64 h-64 "
//                 src="https://www.junaidjamshed.com/media/catalog/product/2/5/25-3180_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=640&width=640&canvas=640:640&dpr=2"
//               />
//               <p className="text-[0.7rem] ml-5 font-bold">
//                 BEIGE LAWN UNSTITCHED 3PC | JLAWN-S-23-060
//               </p>
//               <p className="text-[0.9rem] ml-11 font-bold text-red-500 ">
//                 PKR 5,500.00
//               </p>
//               <p className="text-[0.9rem] ml-11 font-bold line-through">
//                 PKR 10,123.00
//               </p>

//               <div className="ml-32 mt-2 relative z-30">
//                 <input className="mr-2" type="checkbox" />
//                 <label className="text-sm font-semibold">Add To Bag</label>
//               </div>
//             </div>
//             <div className="hover:bg-white hover:p-2 hover:shadow-2xl ">
//               <p className="absolute mt-52 ml-40 bg-red-500 text-white text-sm p-1">
//                 50% OFF
//               </p>
//               <img
//                 className="p-3 w-64 h-64 "
//                 src="https://www.junaidjamshed.com/media/catalog/product/2/5/25-3299b_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=640&width=640&canvas=640:640&dpr=2"
//               />
//               <p className="text-[0.7rem] ml-5 font-bold">
//                 BEIGE LAWN UNSTITCHED 3PC | JLAWN-S-23-060
//               </p>
//               <p className="text-[0.9rem] ml-11 font-bold text-red-500 ">
//                 PKR 5,500.00
//               </p>
//               <p className="text-[0.9rem] ml-11 font-bold line-through">
//                 PKR 10,123.00
//               </p>

//               <div className="ml-32 mt-2 relative z-30">
//                 <input className="mr-2" type="checkbox" />
//                 <label className="text-sm font-semibold">Add To Bag</label>
//               </div>
//             </div>
//             <div className="hover:bg-white hover:p-2 hover:shadow-2xl ">
//               <p className="absolute mt-52 ml-40 bg-red-500 text-white text-sm p-1">
//                 30% OFF
//               </p>
//               <img
//                 className="p-3 w-64 h-64 "
//                 src="https://www.junaidjamshed.com/media/catalog/product/j/d/jds-25-1060_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=640&width=640&canvas=640:640&dpr=2"
//               />
//               <p className="text-[0.7rem] ml-5 font-bold">
//                 BEIGE LAWN UNSTITCHED 3PC | JLAWN-S-23-060
//               </p>

//               <p className="text-[0.9rem] ml-11 font-bold ">PKR 7,123.00</p>

//               <div className="ml-32 mt-2 relative z-20">
//                 <input className="mr-2" type="checkbox" />
//                 <label className="text-sm font-semibold">Add To Bag</label>
//               </div>
//             </div>
//             <div className="hover:bg-white hover:p-2 hover:shadow-2xl ">
//               <img
//                 className="p-3 w-64 h-64 "
//                 src="https://www.junaidjamshed.com/media/catalog/product/2/4/24-1745_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=640&width=640&canvas=640:640&dpr=2"
//               />
//               <p className="text-[0.7rem] ml-5 font-bold">
//                 BEIGE LAWN UNSTITCHED 3PC | JLAWN-S-23-060
//               </p>

//               <p className="text-[0.9rem] ml-11 font-bold ">PKR 10,123.00</p>

//               <div className="ml-32 mt-2 relative z-20">
//                 <input className="mr-2" type="checkbox" />
//                 <label className="text-sm font-semibold">Add To Bag</label>
//               </div>
//             </div>
//           </div>
//         </Carousel.Item>
//         <Carousel.Item>
//           <div className="flex justify-between">
//             <div className="hover:bg-white hover:p-2 hover:shadow-2xl ">
//               <img
//                 className="p-3 w-64 h-64 "
//                 src="https://www.junaidjamshed.com/media/catalog/product/9/4/940_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=640&width=640&canvas=640:640&dpr=2"
//               />
//               <p className="text-[0.7rem] ml-5 font-bold">
//                 BEIGE LAWN UNSTITCHED 3PC | JLAWN-S-23-060
//               </p>
//               <p className="text-[0.9rem] ml-11 font-bold text-red-500 ">
//                 PKR 5,500.00
//               </p>
//               <p className="text-[0.9rem] ml-11 font-bold line-through">
//                 PKR 10,123.00
//               </p>

//               <div className="ml-32 mt-2 relative z-20">
//                 <input className="mr-2" type="checkbox" />
//                 <label className="text-sm font-semibold">Add To Bag</label>
//               </div>
//             </div>
//             <div className="hover:bg-white hover:p-2 hover:shadow-2xl ">
//               <img
//                 className="p-3 w-64 h-64 "
//                 src="https://www.junaidjamshed.com/media/catalog/product/j/s/jst-25-2051_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=640&width=640&canvas=640:640&dpr=2"
//               />
//               <p className="text-[0.7rem] ml-5 font-bold">
//                 BEIGE LAWN UNSTITCHED 3PC | JLAWN-S-23-060
//               </p>

//               <p className="text-[0.9rem] ml-11 font-bold ">PKR 13,123.00</p>

//               <div className="ml-32 mt-2 relative z-20">
//                 <input className="mr-2" type="checkbox" />
//                 <label className="text-sm font-semibold">Add To Bag</label>
//               </div>
//             </div>
//             <div className="hover:bg-white hover:p-2 hover:shadow-2xl ">
//               <p className="absolute mt-52 ml-40 bg-red-500 text-white text-sm p-1">
//                 30% OFF
//               </p>
//               <img
//                 className="p-3 w-64 h-64 "
//                 src="https://www.junaidjamshed.com/media/catalog/product/2/5/25-3180_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=640&width=640&canvas=640:640&dpr=2"
//               />
//               <p className="text-[0.7rem] ml-5 font-bold">
//                 BEIGE LAWN UNSTITCHED 3PC | JLAWN-S-23-060
//               </p>
//               <p className="text-[0.9rem] ml-11 font-bold text-red-500 ">
//                 PKR 5,500.00
//               </p>
//               <p className="text-[0.9rem] ml-11 font-bold line-throughe-">
//                 PKR 10,123.00
//               </p>

//               <div className="ml-32 mt-2 relative z-20">
//                 <input className="mr-2" type="checkbox" />
//                 <label className="text-sm font-semibold">Add To Bag</label>
//               </div>
//             </div>
//             <div className="hover:bg-white hover:p-2 hover:shadow-2xl ">
//               <p className="absolute mt-52 ml-40 bg-red-500 text-white text-sm p-1">
//                 30% OFF
//               </p>
//               <img
//                 className="p-3 w-64 h-64 "
//                 src="https://www.junaidjamshed.com/media/catalog/product/2/0/2034_2_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=640&width=640&canvas=640:640&dpr=2"
//               />

//               <p className="text-[0.7rem] ml-5 font-bold">
//                 BEIGE LAWN UNSTITCHED 3PC | JLAWN-S-23-060
//               </p>
//               <p className="text-[0.9rem] ml-11 font-bold text-red-500 ">
//                 PKR 5,500.00
//               </p>
//               <p className="text-[0.9rem] ml-11 font-bold line-throughe-">
//                 PKR 10,123.00
//               </p>

//               <div className="ml-32 mt-2  relative z-20">
//                 <input className="mr-2" type="checkbox" />
//                 <label className="text-sm font-semibold">Add To Bag</label>
//               </div>
//             </div>
//           </div>
//         </Carousel.Item>
//       </Carousel>
//     </div>
//   );
// }

// export default Header5;

import React, { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

function Header5() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  let [change, setChange] = useState(
    <img src="https://www.junaidjamshed.com/media/catalog/product/2/3/23-060-11_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds" />
  );
  return (
    <div>
      <div class="grid lg:grid-cols-2 md:grid-cols-2  gap-4">
        <div class="...">
          <div className="lg:ml-52 md:ml-32 ml-20">
            {change}
            <div className="flex justify-between">
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
        </div>

        <div class="...">
          <div className="mt-5 ml-4">
            <p className="font-semibold text-lg mt-2">
              LIGHT BEIGE CAMBRIC UNSTITCHED 3PC | JJLS-W-JWU-22-1863
            </p>
            <p className="font-bold">SKU #: GL177828-3PS-LGB-L</p>
            <p className="font-bold">IN STOCK</p>
            <p className="text-xs underline">
              Be the first to review this product
            </p>
            <p className=" font-bold text-2xl mb-3 mt-4">PKR 8,430.00</p>
            <hr />
            <div className="flex mt-6">
              <Spinner
                className="w-4 h-[0.9rem] mt-1 text-red-500"
                animation="grow"
              />{" "}
              <p className="ml-3 font-bold">
                Only 11 Left in Stock – Act Fast!
              </p>
            </div>
            <button onClick={handleShow}>
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
                <div className="flex ">
                  <img
                    className="w-24"
                    src="https://www.junaidjamshed.com/media/catalog/product/2/3/23-060-11_1_.jpg?width=150&height=150&canvas=150,150&optimize=medium&bg-color=255,255,255&fit=bounds"
                  />

                  <div>
                    <div className="flex">
                      <p className="text-xs font-bold">
                        BEIGE LAWN UNSTITCHED 3PC | <br /> JLAWN-S-23-060
                      </p>
                      <img
                        className="w-6 h-5 ml-14"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYvZNgwSJFO0HpucBoFCNrRA1noXhds7qVTQ&s"
                      />
                    </div>

                    <div className="flex mt-9">
                      <p className="text-xs font-bold">QTY:</p>
                      <button>
                        <img
                          className="w-2 mt-[0.1rem] ml-1"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbfo-64GJ9egugzDhnNTynHj0bOkQO8qK68Q&s"
                        />
                      </button>
                      <p className="font-semibold text-xs ml-4 mt-[0.1rem]">
                        1
                      </p>
                      <button>
                        <img
                          className="w-2 mt-[0.1rem] ml-4"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjA-r16Dow9Wb4OaeWV4457H8E5G2Ejh-TQg&s"
                        />
                      </button>
                      <p className="text-sm font-bold ml-3 text-red-600">
                        PKR 4,585.00
                      </p>
                      <p className="text-sm font-bold">PKR 3,585.00</p>
                    </div>
                  </div>
                </div>
                <hr className="mt-3" />
              </Offcanvas.Body>
              <div className="flex justify-between bg-slate-100 p-3">
                <div className="ml-2 font-semibold text-md">CART SUBTOTAL:</div>
                <div className="ml-2 font-semibold text-md">PKR 27,510.00</div>
              </div>
              <Link to="/Header9">
                {" "}
                <p className="hover:underline text-center text-sm font-semibold p-2">
                  VIEW AND EDIT CART
                </p>
              </Link>
              <Link to="/Header6">
                {" "}
                <button className="p-2  m-2 w-96 border-2 border-black hover:bg-black hover:text-white">
                  GO TO CHECKOUT
                </button>
              </Link>
            </Offcanvas>

            <p className="underline font-bold text-md mt-4 mb-3 ">
              Basic 3 Piece
            </p>
            <p className="text-sm font-semibold font-mono">
              Printed Jacquard Dupatta : 2.5 Meters
            </p>
            <p className="text-sm font-semibold font-mono">
              Foil Cambric Shirt: 2.5 Meters
            </p>
            <p className="text-sm font-semibold font-mono">
              Cambric Trouser: 2.25 Meters
            </p>

            <hr className="mt-5" />

            <Accordion>
              <Accordion.Item eventKey="0" className="border-none ">
                <Accordion.Header className="font-bold text-xs">
                  More Information
                </Accordion.Header>
                <Accordion.Body className="!visible !block">
                  <div className="flex ">
                    <p className="font-bold text-sm ">Size</p>
                    <p className="ml-32 text-sm ">3piece</p>
                  </div>
                  <div className="flex mt-2 mb-2">
                    <p className="font-bold text-sm">Color</p>
                    <p className="ml-[7.50rem] text-sm">Light Beige</p>
                  </div>
                  <div className="flex mt-2 mb-2">
                    <p className="font-bold text-sm">Fabric</p>
                    <p className="ml-[7.30rem] text-sm"> Cambric</p>
                  </div>
                  <div className="flex mt-2 mb-2">
                    <p className="font-bold text-sm">Product Category</p>
                    <p className="ml-10 text-sm">Unstitched 3 Piece</p>
                  </div>
                  <div className="flex mt-2 mb-2">
                    <p className="font-bold text-sm">Season</p>
                    <p className="ml-28 text-sm">Winter Collection</p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <hr />
              <Accordion.Item eventKey="1" className="border-none ">
                <Accordion.Header className="font-bold text-xs">
                  Reviews
                </Accordion.Header>
                <Accordion.Body className="!visible !block">
                  <p className="text-xs font-bold mt-4">You're reviewing:</p>
                  <p className="font-bold text-xs">
                    LIGHT BEIGE CAMBRIC UNSTITCHED 3PC | JJLS-W-JWU-22-1863
                  </p>
                  <p class="after:content-['*'] after:text-red-600 after:text-xl text-sm font-bold mt-3">
                    {" "}
                    Your Rating{" "}
                  </p>
                  <p className="font-semibold text-sm mt-2">Quality</p>
                  <div className="flex mt-2 ">
                    <img
                      className="w-6 mr-2"
                      src="https://cdn-icons-png.flaticon.com/128/2099/2099045.png"
                    />
                    <img
                      className="w-6 mr-2"
                      src="https://cdn-icons-png.flaticon.com/128/2099/2099045.png"
                    />
                    <img
                      className="w-6 mr-2"
                      src="https://cdn-icons-png.flaticon.com/128/2099/2099045.png"
                    />
                    <img
                      className="w-6 mr-2"
                      src="https://cdn-icons-png.flaticon.com/128/2099/2099045.png"
                    />
                    <img
                      className="w-6"
                      src="https://cdn-icons-png.flaticon.com/128/2099/2099045.png"
                    />
                  </div>
                  <p className="ml-1 after:content-['*'] after:text-red-600 after:text-xl text-xs font-bold mt-3 ">
                    NickName
                  </p>
                  <Form.Control
                    className="mt-2 rounded-none"
                    size="md"
                    type="text"
                  />

                  <p className="ml-1 after:content-['*'] after:text-red-600 after:text-xl text-xs font-bold mt-3 ">
                    Summary
                  </p>
                  <Form.Control
                    className="mt-2 rounded-none"
                    size="md"
                    type="text"
                  />

                  <p className="ml-1 after:content-['*'] after:text-red-600 after:text-xl text-xs font-bold mt-3 ">
                    Review
                  </p>
                  <Form.Control
                    className="mt-2 rounded-none"
                    size="md"
                    type="text"
                  />
                  <button className="text-lg border-black  border-2 p-1  w-[250px] h-[40px] hover:bg-black hover:text-white mt-10  font-semibold">
                    Submit Review
                  </button>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>

      <p className="text-center font-semibold text-2xl mt-5">
        RELATED PRODUCTS{" "}
      </p>
      <div className="flex mb-5">
        <p className="font-semibold text-sm mt-1 mr-3 ml-16">
          Check items to add to the cart or{" "}
        </p>
        <button className="bg-black text-white p-1 font-semibold">
          Select all
        </button>
      </div>

      <Carousel activeIndex={index} onSelect={handleSelect} col>
        <Carousel.Item>
          <div className="flex justify-between ">
            <div className="hover:bg-white hover:p-2 hover:shadow-2xl ">
              <p className="absolute mt-52 ml-40 bg-red-500 text-white text-sm p-1">
                20% OFF
              </p>
              <img
                className="p-3 w-64 h-64 "
                src="https://www.junaidjamshed.com/media/catalog/product/2/5/25-3097_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=640&width=640&canvas=640:640&dpr=2"
              />
              <p className="text-[0.7rem] ml-5 font-bold">
                BEIGE LAWN UNSTITCHED 3PC | JLAWN-S-23-060
              </p>
              <p className="text-[0.9rem] ml-11 font-bold text-red-500 ">
                PKR 4,500.00
              </p>
              <p className="text-[0.9rem] ml-11 font-bold line-through">
                PKR 9,123.00
              </p>
              <div className="ml-32 mt-2 relative z-20">
                <input className="mr-2" type="checkbox" />
                <label className="text-sm font-semibold">Add To Bag</label>
              </div>
            </div>
            <div className="hover:bg-white hover:p-2 hover:shadow-2xl ">
              <p className="absolute mt-52 ml-40 bg-red-500 text-white text-sm p-1">
                20% OFF
              </p>
              <img
                className="p-3 w-64 h-64 "
                src="https://www.junaidjamshed.com/media/catalog/product/j/s/jst-25-2032_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=640&width=640&canvas=640:640&dpr=2"
              />
              <p className="text-[0.7rem] ml-5 font-bold">
                BEIGE LAWN UNSTITCHED 3PC | JLAWN-S-23-060
              </p>
              <p className="text-[0.9rem] ml-11 font-bold text-red-500 ">
                PKR 3,500.00
              </p>
              <p className="text-[0.9rem] ml-11 font-bold line-through">
                PKR 6,123.00
              </p>

              <div className="ml-32 mt-2 relative z-20">
                <input className="mr-2" type="checkbox" />
                <label className="text-sm font-semibold">Add To Bag</label>
              </div>
            </div>
            <div className="hover:bg-white hover:p-2 hover:shadow-2xl ">
              <p className="absolute mt-52 ml-40 bg-red-500 text-white text-sm p-1">
                30% OFF
              </p>
              <img
                className="p-3 w-64 h-64 "
                src="https://www.junaidjamshed.com/media/catalog/product/2/0/2034_2_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=640&width=640&canvas=640:640&dpr=2"
              />
              <p className="text-[0.7rem] ml-5 font-bold">
                BEIGE LAWN UNSTITCHED 3PC | JLAWN-S-23-060
              </p>
              <p className="text-[0.9rem] ml-11 font-bold text-red-500 ">
                PKR 3,500.00
              </p>
              <p className="text-[0.9rem] ml-11 font-bold line-through">
                PKR 6,123.00
              </p>

              <div className="ml-32 mt-2 relative z-20">
                <input className="mr-2" type="checkbox" />
                <label className="text-sm font-semibold">Add To Bag</label>
              </div>
            </div>
            <div className="hover:bg-white hover:p-2 hover:shadow-2xl ">
              <img
                className="p-3 w-64 h-64 "
                src="https://www.junaidjamshed.com/media/catalog/product/2/5/25-3299b_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=640&width=640&canvas=640:640&dpr=2"
              />
              <p className="text-[0.7rem] ml-5 font-bold">
                BEIGE LAWN UNSTITCHED 3PC | JLAWN-S-23-060
              </p>

              <p className="text-[0.9rem] ml-11 font-bold ">PKR 6,123.00</p>

              <div className="ml-32 mt-2 relative z-20">
                <input className="mr-2" type="checkbox" />
                <label className="text-sm font-semibold">Add To Bag</label>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="flex justify-between">
            <div className="hover:bg-white hover:p-2 hover:shadow-2xl ">
              <p className="absolute mt-52 ml-40 bg-red-500 text-white text-sm p-1">
                50% OFF
              </p>
              <img
                className="p-3 w-64 h-64 "
                src="https://www.junaidjamshed.com/media/catalog/product/2/5/25-3180_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=640&width=640&canvas=640:640&dpr=2"
              />
              <p className="text-[0.7rem] ml-5 font-bold">
                BEIGE LAWN UNSTITCHED 3PC | JLAWN-S-23-060
              </p>
              <p className="text-[0.9rem] ml-11 font-bold text-red-500 ">
                PKR 5,500.00
              </p>
              <p className="text-[0.9rem] ml-11 font-bold line-through">
                PKR 10,123.00
              </p>

              <div className="ml-32 mt-2 relative z-30">
                <input className="mr-2" type="checkbox" />
                <label className="text-sm font-semibold">Add To Bag</label>
              </div>
            </div>
            <div className="hover:bg-white hover:p-2 hover:shadow-2xl ">
              <p className="absolute mt-52 ml-40 bg-red-500 text-white text-sm p-1">
                50% OFF
              </p>
              <img
                className="p-3 w-64 h-64 "
                src="https://www.junaidjamshed.com/media/catalog/product/2/5/25-3299b_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=640&width=640&canvas=640:640&dpr=2"
              />
              <p className="text-[0.7rem] ml-5 font-bold">
                BEIGE LAWN UNSTITCHED 3PC | JLAWN-S-23-060
              </p>
              <p className="text-[0.9rem] ml-11 font-bold text-red-500 ">
                PKR 5,500.00
              </p>
              <p className="text-[0.9rem] ml-11 font-bold line-through">
                PKR 10,123.00
              </p>

              <div className="ml-32 mt-2 relative z-30">
                <input className="mr-2" type="checkbox" />
                <label className="text-sm font-semibold">Add To Bag</label>
              </div>
            </div>
            <div className="hover:bg-white hover:p-2 hover:shadow-2xl ">
              <p className="absolute mt-52 ml-40 bg-red-500 text-white text-sm p-1">
                30% OFF
              </p>
              <img
                className="p-3 w-64 h-64 "
                src="https://www.junaidjamshed.com/media/catalog/product/j/d/jds-25-1060_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=640&width=640&canvas=640:640&dpr=2"
              />
              <p className="text-[0.7rem] ml-5 font-bold">
                BEIGE LAWN UNSTITCHED 3PC | JLAWN-S-23-060
              </p>

              <p className="text-[0.9rem] ml-11 font-bold ">PKR 7,123.00</p>

              <div className="ml-32 mt-2 relative z-20">
                <input className="mr-2" type="checkbox" />
                <label className="text-sm font-semibold">Add To Bag</label>
              </div>
            </div>
            <div className="hover:bg-white hover:p-2 hover:shadow-2xl ">
              <img
                className="p-3 w-64 h-64 "
                src="https://www.junaidjamshed.com/media/catalog/product/2/4/24-1745_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=640&width=640&canvas=640:640&dpr=2"
              />
              <p className="text-[0.7rem] ml-5 font-bold">
                BEIGE LAWN UNSTITCHED 3PC | JLAWN-S-23-060
              </p>

              <p className="text-[0.9rem] ml-11 font-bold ">PKR 10,123.00</p>

              <div className="ml-32 mt-2 relative z-20">
                <input className="mr-2" type="checkbox" />
                <label className="text-sm font-semibold">Add To Bag</label>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="flex justify-between">
            <div className="hover:bg-white hover:p-2 hover:shadow-2xl ">
              <img
                className="p-3 w-64 h-64 "
                src="https://www.junaidjamshed.com/media/catalog/product/9/4/940_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=640&width=640&canvas=640:640&dpr=2"
              />
              <p className="text-[0.7rem] ml-5 font-bold">
                BEIGE LAWN UNSTITCHED 3PC | JLAWN-S-23-060
              </p>
              <p className="text-[0.9rem] ml-11 font-bold text-red-500 ">
                PKR 5,500.00
              </p>
              <p className="text-[0.9rem] ml-11 font-bold line-through">
                PKR 10,123.00
              </p>

              <div className="ml-32 mt-2 relative z-20">
                <input className="mr-2" type="checkbox" />
                <label className="text-sm font-semibold">Add To Bag</label>
              </div>
            </div>
            <div className="hover:bg-white hover:p-2 hover:shadow-2xl ">
              <img
                className="p-3 w-64 h-64 "
                src="https://www.junaidjamshed.com/media/catalog/product/j/s/jst-25-2051_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=640&width=640&canvas=640:640&dpr=2"
              />
              <p className="text-[0.7rem] ml-5 font-bold">
                BEIGE LAWN UNSTITCHED 3PC | JLAWN-S-23-060
              </p>

              <p className="text-[0.9rem] ml-11 font-bold ">PKR 13,123.00</p>

              <div className="ml-32 mt-2 relative z-20">
                <input className="mr-2" type="checkbox" />
                <label className="text-sm font-semibold">Add To Bag</label>
              </div>
            </div>
            <div className="hover:bg-white hover:p-2 hover:shadow-2xl ">
              <p className="absolute mt-52 ml-40 bg-red-500 text-white text-sm p-1">
                30% OFF
              </p>
              <img
                className="p-3 w-64 h-64 "
                src="https://www.junaidjamshed.com/media/catalog/product/2/5/25-3180_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=640&width=640&canvas=640:640&dpr=2"
              />
              <p className="text-[0.7rem] ml-5 font-bold">
                BEIGE LAWN UNSTITCHED 3PC | JLAWN-S-23-060
              </p>
              <p className="text-[0.9rem] ml-11 font-bold text-red-500 ">
                PKR 5,500.00
              </p>
              <p className="text-[0.9rem] ml-11 font-bold line-throughe-">
                PKR 10,123.00
              </p>

              <div className="ml-32 mt-2 relative z-20">
                <input className="mr-2" type="checkbox" />
                <label className="text-sm font-semibold">Add To Bag</label>
              </div>
            </div>
            <div className="hover:bg-white hover:p-2 hover:shadow-2xl ">
              <p className="absolute mt-52 ml-40 bg-red-500 text-white text-sm p-1">
                30% OFF
              </p>
              <img
                className="p-3 w-64 h-64 "
                src="https://www.junaidjamshed.com/media/catalog/product/2/0/2034_2_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=640&width=640&canvas=640:640&dpr=2"
              />

              <p className="text-[0.7rem] ml-5 font-bold">
                BEIGE LAWN UNSTITCHED 3PC | JLAWN-S-23-060
              </p>
              <p className="text-[0.9rem] ml-11 font-bold text-red-500 ">
                PKR 5,500.00
              </p>
              <p className="text-[0.9rem] ml-11 font-bold line-throughe-">
                PKR 10,123.00
              </p>

              <div className="ml-32 mt-2  relative z-20">
                <input className="mr-2" type="checkbox" />
                <label className="text-sm font-semibold">Add To Bag</label>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default Header5;
