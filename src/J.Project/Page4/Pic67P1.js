import { useCart } from "../context/CartContext"; // Correct import
import { Offcanvas, Spinner, Button, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

function Pic67P1() {
  const { cart, addToCart, removeFromCart, updateCartQuantity } = useCart(); // Access cart from context

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
      _id: "718",
      size:selectedSize,
      name: " JANAN - NO GAS POUR HOMME BODY SPRAY",
      price: 800.0,
      image:
        "https://www.junaidjamshed.com/media/catalog/product/j/a/janan_platinum.jpg?width=150&height=150&canvas=150,150&optimize=medium&bg-color=255,255,255&fit=bounds",
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

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          {/* Product Details */}
          <div className="col-12 col-md-6 col-lg-6">
            <div className="flex justify-center">
              <img src="https://www.junaidjamshed.com/media/catalog/product/j/a/janan_platinum.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2" />
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-6">
            <div>
              {/* Product Info */}
              <p className="font-semibold text-lg mt-2">
                JANAN - NO GAS POUR HOMME BODY SPRAY
              </p>
              <p className="font-bold text-gray-600">
                SKU #: GL177828-3PS-LGB-L
              </p>
              <p className="font-bold text-gray-600">IN STOCK</p>
              <p className="text-xs text-black underline">
                Be the first to review this product
              </p>
              <span className="text-black text-2xl font-bold">PKR 800.00</span>

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
                            Size: {item.size || "N/A"}
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
            </div>
            <hr className="mt-3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pic67P1;
