import { useCart } from '../context/CartContext';  // Correct import
import { Offcanvas, Spinner, Button, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";


function Pic101P1() {

  const { cart, addToCart, removeFromCart, updateCartQuantity } = useCart();  // Access cart from context

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [show, setShow] = useState(false);
const[selectedSize,setSelectedSize]=useState("")
  const [index, setIndex] = useState(0);  
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

 
  const handleAddToCart = () => {
    const product = {
      _id: "111",
      name: "J. POUR FEMME",
      price: 4717.50,
      size:selectedSize,
      image:"https://www.junaidjamshed.com/media/catalog/product/p/o/pour-femme-j._1.jpg?width=86&height=110&canvas=86,110&optimize=medium&bg-color=255,255,255&fit=bounds",
    };
    addToCart(product);  // Add product to cart
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

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
  };

  let [change, setChange] = useState(
    <img src="https://www.junaidjamshed.com/media/catalog/product/p/o/pour-femme-j._1.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds" />
  );
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-6 ">
            <div className="flex justify-center">{change}</div>
            <div className="flex gap-4 justify-center">
              <img
                className="mt-4"
                onClick={() =>
                  setChange(
                    (change = (
                      <img src="https://www.junaidjamshed.com/media/catalog/product/p/o/pour-femme-j._1.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds" />
                    ))
                  )
                }
                src="https://www.junaidjamshed.com/media/catalog/product/p/o/pour-femme-j._1.jpg?width=86&height=110&canvas=86,110&optimize=medium&bg-color=255,255,255&fit=bounds"
              />{" "}
              <img
                className="mt-4"
                onClick={() =>
                  setChange(
                    (change = (
                      <img src="https://www.junaidjamshed.com/media/catalog/product/p/o/pour_femme_box.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds" />
                    ))
                  )
                }
                src="https://www.junaidjamshed.com/media/catalog/product/p/o/pour_femme_box.jpg?width=86&height=110&canvas=86,110&optimize=medium&bg-color=255,255,255&fit=bounds"
              />{" "}
            
            </div>{" "}
          </div>

          <div class="col-12 col-md-6 col-lg-6 ">
            <div>
              <p className="font-semibold text-lg mt-2">
              J. POUR FEMME
              </p>
              <p className="font-bold text-gray-600">SKU #: GL177828-3PS-LGB-L</p>
              <p className="font-bold text-gray-600">IN STOCK</p>
              <p className="text-xs text-black underline">Be the first to review this product</p>
              <span className="text-black text-2xl font-bold">PKR 4,717.50</span>
              
              <hr />
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
                onClick={handleAddToCart}
                className="border-black border-2 p-2 w-[20rem] hover:bg-black hover:text-white mt-10 text-lg font-semibold"
              >
                ADD TO BAG
              </button>

                 {/* Offcanvas Cart */}
                 <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton className="border-2 border-black bg-slate-100">
                  <Offcanvas.Title className="font-semibold text-sm ml-40">MY BAG</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  {cart.length === 0 ? (
                    <p>Your cart is empty!</p>
                  ) : (
                    cart.map((item) => (
                      <div key={item._id} className="flex mb-4">
                        <img src={item.image} alt={item.name} className="w-24 h-24 object-cover" />
                        <div className="ml-4">
                          <p className="font-bold text-sm">{item.name}</p>
                          <p className="text-sm">PKR {item.price}</p>
                          <p className="text-xs font-semibold mt-1">
                            Size: {item.size || "N/A"}
                          </p>
                          <div className="flex items-center">
                            <Button variant="secondary" onClick={() => handleDecreaseQuantity(item)}>-</Button>
                            <span className="mx-2">{item.quantity}</span>
                            <Button variant="secondary" onClick={() => handleIncreaseQuantity(item)}>+</Button>
                          </div>
                          <button onClick={() => handleRemoveFromCart(item)} className="text-red-500 mt-2">
                            Remove
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </Offcanvas.Body>

                <div className="flex justify-between bg-slate-100 p-3">
                  <div className="ml-2 font-semibold text-md">CART SUBTOTAL:</div>
                  <div className="ml-2 font-semibold text-md">
                    PKR {cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                  </div>
                </div>

                <Link to="/Cart">
                  <p className="hover:underline text-center text-sm font-semibold p-2">VIEW AND EDIT CART</p>
                </Link>
                <Link to="/Checkout">
                  <button className="p-2 m-2 w-96 border-2 border-black hover:bg-black hover:text-white">
                    GO TO CHECKOUT
                  </button>
                </Link>
              </Offcanvas>
            </div>
            <hr className="mt-3" />
            <Accordion>
                 <Accordion.Item eventKey="0" className="border-none ">
                   <Accordion.Header className="font-bold text-xs">
                     More Information
                   </Accordion.Header>
                   <Accordion.Body  className="!visible !block">
        
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
    </div>
  );
}

export default Pic101P1;