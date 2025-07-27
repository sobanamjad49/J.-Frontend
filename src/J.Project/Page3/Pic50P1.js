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
function Pic50P1() {
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
      _id: "550",
      name: "DULL BLUE COTTON SEMI-FORMAL KURTA",
      price: 12490.5,
      size: selectedSize,
      image:
        "https://www.junaidjamshed.com/media/catalog/product/4/6/46463_1_.jpg?width=86&height=110&canvas=86,110&optimize=medium&bg-color=255,255,255&fit=bounds",
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
    <img src="https://www.junaidjamshed.com/media/catalog/product/4/6/46463_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds" />
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
                      <img src="https://www.junaidjamshed.com/media/catalog/product/4/6/46463_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds" />
                    ))
                  )
                }
                src="https://www.junaidjamshed.com/media/catalog/product/4/6/46463_1_.jpg?width=86&height=110&canvas=86,110&optimize=medium&bg-color=255,255,255&fit=bounds"
              />{" "}
              <img
                className="mt-4"
                onClick={() =>
                  setChange(
                    (change = (
                      <img src="https://www.junaidjamshed.com/media/catalog/product/4/6/46463_2_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds" />
                    ))
                  )
                }
                src="https://www.junaidjamshed.com/media/catalog/product/4/6/46463_2_.jpg?width=86&height=110&canvas=86,110&optimize=medium&bg-color=255,255,255&fit=bounds"
              />{" "}
              <img
                className="mt-4"
                onClick={() =>
                  setChange(
                    (change = (
                      <img src="https://www.junaidjamshed.com/media/catalog/product/4/6/46463_3_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds" />
                    ))
                  )
                }
                src="https://www.junaidjamshed.com/media/catalog/product/4/6/46463_3_.jpg?width=86&height=110&canvas=86,110&optimize=medium&bg-color=255,255,255&fit=bounds"
              />{" "}
            </div>{" "}
          </div>

          <div class="col-12 col-md-6 col-lg-6 ">
            <div>
              <p className="font-semibold text-lg mt-2">
                DULL BLUE COTTON SEMI-FORMAL KURTA
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
            <Link to="/Pic45P1">
              <img
                className="p-3  ml-5"
                src="https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-sp-inr-a-45512_1__1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2"
              />
            </Link>
            <Link to="/Pic45P1">
              <p className="text-[0.7rem] text-center font-bold hover:underline">
                MAROON COTTON SEMI-FORMAL KURTA
              </p>
            </Link>

            <p className="text-[0.9rem] text-center font-bold ">
              PKR 11,192.00
            </p>
          </div>

          <div className="lg:hover:bg-white lg:hover:shadow-2xl ">
            <Link to="/Pic41P1">
              <img
                className="p-3  "
                src="https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-33211_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2"
              />
            </Link>
            <Link to="/Pic41P1">
              <p className="text-[0.7rem] text-center font-bold hover:underline">
                GREEN COTTON SEMI-FORMAL KURTA
              </p>
            </Link>
            <p className="text-[0.9rem] ml-11 font-bold">PKR 11,192.00</p>
          </div>

          <div className="lg:hover:bg-white  lg:hover:shadow-2xl ">
            <Link to="/Pic43P1">
              <img
                className="p-3  "
                src="https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-47409_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2"
              />
            </Link>
            <p className="text-[0.7rem] ml-5 font-bold">
              CHARCOAL GREY COTTON SEMI-FORMAL KURTA
            </p>
            <p className="text-[0.9rem] ml-11 font-bold">PKR 11,192.00</p>
          </div>

          <div className="lg:hover:bg-white  lg:hover:shadow-2xl ">
            <Link to="/Pic46P1">
              {" "}
              <img
                className="p-3  "
                src="https://www.junaidjamshed.com/media/catalog/product/3/3/33015_2_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2"
              />
            </Link>
            <p className="text-[0.7rem] ml-5 font-bold">
              BROWN COTTON SEMI-FORMAL KURTA
            </p>
            <p className="text-[0.9rem] ml-11 font-bold">PKR 11,192.00</p>
          </div>

          <div className="lg:hover:bg-white  lg:hover:shadow-2xl ">
            <Link to="/Pic47P1">
              <img
                className="p-3  "
                src="https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-47309_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2"
              />
            </Link>
            <p className="text-[0.7rem] ml-5 font-bold">
              DULL BLUE COTTON SEMI-FORMAL KURTA
            </p>
            <p className="text-[0.9rem] ml-11 font-bold ">PKR 11,192.00</p>
          </div>

          <div className="lg:hover:bg-white  lg:hover:shadow-2xl ">
            <Link to="/Pic48P1">
              <img
                className="p-3  "
                src="https://www.junaidjamshed.com/media/catalog/product/4/6/46586_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2"
              />
            </Link>
            <p className="text-[0.7rem] ml-5 font-bold">
              YELLOW COTTON SEMI-FORMAL KURTA
            </p>
            <p className="text-[0.9rem] ml-11 font-bold ">PKR 11,192.00</p>
          </div>

          <div className="lg:hover:bg-white  lg:hover:shadow-2xl ">
            <Link to="/Pic49P1">
              <img
                className="p-3  "
                src="https://www.junaidjamshed.com/media/catalog/product/3/4/34890_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2s"
              />
            </Link>
            <p className="text-[0.7rem] ml-5 font-bold">
              DARK BLUE COTTON SEMI-FORMAL KURTA
            </p>
            <p className="text-[0.9rem] ml-11 font-bold ">PKR 11,192.00</p>
          </div>

          <div className="lg:hover:bg-white  lg:hover:shadow-2xl ">
            <Link to="/Pic50P1">
              {" "}
              <img
                className="p-3  "
                src="https://www.junaidjamshed.com/media/catalog/product/4/6/46463_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2"
              />
            </Link>
            <p className="text-[0.7rem] ml-5 font-bold">
              DULL BLUE COTTON SEMI-FORMAL KURTA
            </p>
            <p className="text-[0.9rem] ml-11 font-bold ">PKR 11,192.00</p>
          </div>

          <div className="lg:hover:bg-white  lg:hover:shadow-2xl ">
            <Link to="/Pic51P1">
              <img
                className="p-3  "
                src="https://www.junaidjamshed.com/media/catalog/product/3/3/33125_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2"
              />
            </Link>
            <p className="text-[0.7rem] ml-5 font-bold">
              HALF WHITE COTTON SEMI-FORMAL KURTA
            </p>
            <p className="text-[0.9rem] ml-11 font-bold ">PKR 11,192.00</p>
          </div>

          <div className="lg:hover:bg-white  lg:hover:shadow-2xl ">
            <Link to="/Pic52P1">
              <img
                className="p-3  "
                src="https://www.junaidjamshed.com/media/catalog/product/3/3/33123_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2"
              />
            </Link>
            <p className="text-[0.7rem] ml-5 font-bold">
              SKY BLUE COTTON SEMI-FORMAL KURTA
            </p>
            <p className="text-[0.9rem] ml-11 font-bold ">PKR 11,192.00</p>
          </div>

          <div className="lg:hover:bg-white  lg:hover:shadow-2xl ">
            <Link to="/Pic53P1">
              <img
                className="p-3  "
                src="https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-sp-48131_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2"
              />
            </Link>
            <p className="text-[0.7rem] ml-5 font-bold">
              BLACK FORMAL COTTON SEMI-FORMAL KURTA
            </p>
            <p className="text-[0.9rem] ml-11 font-bold">PKR 11,192.00</p>
          </div>

          <div className="lg:hover:bg-white  lg:hover:shadow-2xl ">
            <Link to="/Pic14P1">
              <img
                className="p-3  "
                src="https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-sp-48126_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2"
              />
            </Link>
            <p className="text-[0.7rem] ml-5 font-bold">
              DEEP PURPLE COTTON SEMI-FORMAL KURTA
            </p>
            <p className="text-[0.9rem] ml-11 font-bold ">PKR 11,192.00</p>
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

export default Pic50P1;
