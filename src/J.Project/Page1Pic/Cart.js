import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Cart() {

  const { cart, removeFromCart, updateCartQuantity } = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

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
    <div className="max-w-6xl mx-auto p-8">
      <h2 className="text-4xl font-bold mb-8 text-center">🛒 Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className="text-center text-xl text-gray-600">
          Your cart is empty!
        </div>
      ) : (
        <div className="space-y-8">
          {cart.map((item) => (
            <div 
              key={item._id} 
              className="flex flex-col md:flex-row items-center justify-between p-4 border rounded-lg shadow-sm hover:shadow-md transition duration-300"
            >
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-24 h-24 object-cover rounded-md"
              />

              <div className="flex-1 md:ml-6 text-center md:text-left mt-4 md:mt-0">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-500 mt-1">Price: PKR {item.price.toFixed(2)}</p>
                <p className="text-gray-500">Total: PKR {(item.price * item.quantity).toFixed(2)}</p>
                
              <p className="text-md font-semibold mt-2">Selected Size: {item.size || "N/A"}</p>
              </div>

              <div className="flex items-center space-x-2 mt-4 md:mt-0">
                {/* Decrease Quantity */}
                <Button 
                  variant="outline-primary" 
                  onClick={() => handleDecreaseQuantity(item)}
                  disabled={item.quantity === 1}
                >
                  -
                </Button>

                <span className="px-3 text-lg">{item.quantity}</span>

                {/* Increase Quantity */}
                <Button 
                  variant="outline-primary" 
                  onClick={() => handleIncreaseQuantity(item)}
                >
                  +
                </Button>
              </div>

              {/* Remove Button */}
              <div className="mt-4 ml-2 md:mt-0">
                <Button 
                  variant="outline-danger" 
                  onClick={() => handleRemoveFromCart(item._id)}
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}

          {/* Cart Total */}
          <div className="text-right text-3xl font-bold mt-8">
            Grand Total: PKR {totalPrice.toFixed(2)}
          </div>
          <div className='flex justify-end'>
          <Link to="/Checkout"><button  className=' border-2 border-black p-3 rounded-lg font-body text-lg font-semibold bg-black text-white'>CheckOut</button></Link>
        </div>
        </div>
  
      )}
    </div>
  );
}

export default Cart;
