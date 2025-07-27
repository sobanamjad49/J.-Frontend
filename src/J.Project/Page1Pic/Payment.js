import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext'; // Assuming you're using context for cart state

function Payment() {
  const { cart } = useCart(); // Access cart from context
  const [paymentMethod, setPaymentMethod] = useState('JazzCash');
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardExpiry: '',
    cardCVV: '',
    jazzCashNumber: '',
  });


  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle payment method change
  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  // Handle form submission
  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    if (paymentMethod === 'JazzCash' && formData.jazzCashNumber === '') {
      alert('Please enter your JazzCash number.');
      return;
    }
    alert('Payment submitted successfully!');
    // Yahan backend payment integration karni hogi
  };

  // Validate form
  const isFormValid = () => {
    if (paymentMethod === 'JazzCash') {
      return formData.jazzCashNumber !== ''; // Ensure JazzCash number is entered
    } else if (paymentMethod === 'CreditCard') {
      return (
        formData.cardNumber !== '' &&
        formData.cardExpiry !== '' &&
        formData.cardCVV !== ''
      );
    }
    return false;
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Payment Page</h2>

      {/* Order Summary */}
      <div className="space-y-6 mb-12">
        <h3 className="text-2xl font-semibold mb-4">Order Summary</h3>
        {cart.map((item, index) => (
          <div key={index} className="flex items-center gap-6 border-b pb-4">
            {/* Product Image */}
            {item.image && (
              <div className="w-32 h-32 overflow-hidden rounded-lg shadow-md">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
            )}

            {/* Product Details */}
            <div className="flex-1">
              <p className="text-lg font-semibold">{item.name}</p>
              <p className="text-gray-600">PKR {item.price} x {item.quantity}</p>
              <p className="text-gray-800 font-semibold">
                Total: PKR {(item.price * item.quantity).toFixed(2)}
              </p>
              <p className="text-md font-semibold mt-2">Selected Size: {item.size || "N/A"}</p>
            </div>
          </div>
        ))}

        {/* Grand Total */}
        <div className="text-right text-2xl font-bold mt-8">
          Total Amount: PKR {totalPrice.toFixed(2)}
        </div>
      </div>

      {/* Payment Form */}
      <form onSubmit={handlePaymentSubmit} className="space-y-8">
        {/* Payment Method */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Select Payment Method</h4>
          <div className="flex gap-8">
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="JazzCash"
                checked={paymentMethod === 'JazzCash'}
                onChange={handlePaymentMethodChange}
                className="mr-2"
              />
              JazzCash
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="CreditCard"
                checked={paymentMethod === 'CreditCard'}
                onChange={handlePaymentMethodChange}
                className="mr-2"
              />
              Credit Card
            </label>
          </div>
        </div>

        {/* JazzCash Fields */}
        {paymentMethod === 'JazzCash' && (
          <div className="space-y-4">
            <div>
              <label htmlFor="jazzCashNumber" className="block text-sm font-semibold mb-1">
                JazzCash Number
              </label>
              <input
                type="text"
                id="jazzCashNumber"
                name="jazzCashNumber"
                value={formData.jazzCashNumber}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter your JazzCash number"
              />
            </div>
            <button
              type="button"
              onClick={() => alert('Redirecting to JazzCash payment gateway...')}
              className="w-full p-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500"
            >
              Pay with JazzCash
            </button>
          </div>
        )}

        {/* Credit Card Fields */}
        {paymentMethod === 'CreditCard' && (
          <div className="space-y-4">
            <div>
              <label htmlFor="cardNumber" className="block text-sm font-semibold mb-1">
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter your card number"
              />
            </div>
            <div className="flex gap-4">
              <div className="w-1/2">
                <label htmlFor="cardExpiry" className="block text-sm font-semibold mb-1">
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="cardExpiry"
                  name="cardExpiry"
                  value={formData.cardExpiry}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="MM/YY"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="cardCVV" className="block text-sm font-semibold mb-1">
                  CVV
                </label>
                <input
                  type="text"
                  id="cardCVV"
                  name="cardCVV"
                  value={formData.cardCVV}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="CVV"
                />
              </div>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!isFormValid()}
          className={`w-full p-3 ${!isFormValid() ? 'bg-gray-400' : 'bg-green-600'} text-white font-bold rounded-lg hover:bg-green-500`}
        >
          Submit Payment
        </button>
      </form>
    </div>
  );
}

export default Payment;
