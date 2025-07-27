import { useCart } from "../context/CartContext";
import { Offcanvas, Button, Accordion, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import Slider from "react-slick";
function Pic5P1() {
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
  const { cart, addToCart, removeFromCart, updateCartQuantity } = useCart();
  const [show, setShow] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleAddToCart = () => {
    const product = {
      _id: "12345",
      size: selectedSize,
      name: "LIGHT BEIGE CAMBRIC UNSTITCHED 2PC | JJLS-W-JWU-22-1863",
      price: 4867.5,
      image:
        "https://www.junaidjamshed.com/media/catalog/product/4/7/47390_3__8.jpg?width=150&height=150&canvas=150,150&optimize=medium&bg-color=255,255,255&fit=bounds",
    };
    addToCart(product); // Add product to cart
    handleShow();
  };

  const handleDecreaseQuantity = (item) => {
    if (item.quantity > 1) {
      updateCartQuantity(item._id, item.quantity - 1); // Update quantity by decreasing
    }
  };

  const handleIncreaseQuantity = (item) => {
    updateCartQuantity(item._id, item.quantity + 1); // Update quantity by increasing
  };

  const handleRemoveFromCart = (item) => {
    removeFromCart(item._id); // Remove the item from the cart based on its _id
  };

  let [change, setChange] = useState(
    "https://www.junaidjamshed.com/media/catalog/product/4/7/47390_3__8.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
  );
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-6 ">
            <div className="flex justify-center">
              <img
                src={change}
                alt="Selected"
                className="w-full max-w-[436px] h-auto" // Adjust the image size using TailwindCSS
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 justify-center mt-4">
              <img
                className="mt-4 cursor-pointer"
                onClick={() =>
                  setChange(
                    "https://www.junaidjamshed.com/media/catalog/product/4/7/47390_3__8.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
                  )
                }
                src="https://www.junaidjamshed.com/media/catalog/product/4/7/47390_3__8.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
                alt="Thumbnail 1"
                class="w-[86px] h-[110px] object-cover"
              />
              <img
                className="mt-4 cursor-pointer"
                onClick={() =>
                  setChange(
                    "https://www.junaidjamshed.com/media/catalog/product/4/7/47390_2__8.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
                  )
                }
                src="https://www.junaidjamshed.com/media/catalog/product/4/7/47390_2__8.jpg?width=86&height=110&canvas=86,110&optimize=medium&bg-color=255,255,255&fit=bounds"
                alt="Thumbnail 2"
                class="w-[86px] h-[110px] object-cover"
              />
              <img
                className="mt-4 cursor-pointer"
                onClick={() =>
                  setChange(
                    "https://www.junaidjamshed.com/media/catalog/product/4/7/47390_1__8.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
                  )
                }
                src="https://www.junaidjamshed.com/media/catalog/product/4/7/47390_1__8.jpg?width=86&height=110&canvas=86,110&optimize=medium&bg-color=255,255,255&fit=bounds"
                alt="Thumbnail 3"
                class="w-[86px] h-[110px] object-cover"
              />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            <div>
              <p className="font-semibold text-lg mt-2">
                LIGHT BEIGE CAMBRIC UNSTITCHED 2PC | JJLS-W-JWU-22-1863
              </p>
              <p className="font-bold text-gray-600">
                SKU #: GL177828-3PS-LGB-L
              </p>
              <p className="font-bold text-gray-600">IN STOCK</p>
              <p className="text-xs text-black underline">
                Be the first to review this product
              </p>
              <span className="text-black text-2xl font-bold">
                PKR 4,867.50
              </span>
              <span className="ml-2 font-bold text-gray-600 text-2xl line-through">
                PKR 6,490.00
              </span>
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
            <div>
              <p className="underline font-bold text-md mt-4 mb-3 ">
                Basic 3 Piece
              </p>
              <p className="text-sm font-semibold font-mono">
                Embroidered Digital Printed Dobby Shirt: 2.5 Meters
              </p>
              <p className="text-sm font-semibold font-mono">
                Digital Printed Burnout Organza Dupatta: 2.5 Meters
              </p>

              <p className="text-sm font-semibold font-mono">
                Lawn Trouser: 2.5 Meters
              </p>

              <p className="mt-3 text-sm font-serif font-medium">
                * The stitch style and decorative accessories featured in the
                dress are for illustrative purposes only and are not included as
                part of the product.
              </p>
            </div>
            <Accordion defaultActiveKey="0" className="mt-3">
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
            </Accordion>
          </div>
          <p className="text-center font-semibold text-3xl  mt-5">
            RELATED PRODUCTS{" "}
          </p>

          <div className="slider-container ">
            <Slider {...settings}>
              <div className="lg:hover:bg-white lg:hover:shadow-2xl ">
                <p className="absolute ml-auto mt-8 bg-red-500 text-white text-sm p-1">
                  25% OFF
                </p>
                <Link to="/Pic3P1">
                  <img
                    className="p-3  "
                    src="https://www.junaidjamshed.com/media/catalog/product/4/7/47390_3__1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2"
                  />
                </Link>
                <Link to="/Pic3P1">
                  <p className="text-[0.7rem] text-center font-bold hover:underline">
                    BEIGE LAWN UNSTITCHED 3PC | JLAWN-S-23-060
                  </p>
                </Link>
                <p className="text-[0.9rem] ml-11 font-bold text-red-500 ">
                  PKR 5,917.50
                </p>
                <p className="text-[0.9rem] ml-11 font-bold line-through">
                  PKR 7,890.00
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
      </div>
    </div>
  );
}

export default Pic5P1;
