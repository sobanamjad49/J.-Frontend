// // CartContext.js (where cart state and addToCart function are defined)
// import React, { createContext, useState, useContext } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (item) => {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find((i) => i._id === item._id); // Check if item already exists
//       if (existingItem) {
//         // If item exists, increase quantity
//         return prevCart.map((i) =>
//           i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i
//         );
//       }
//       // If item does not exist, add new item to cart
//       return [...prevCart, { ...item, quantity: 1 }];
//     });
//   };

//   const removeFromCart = (id) => {
//     setCart((prevCart) => prevCart.filter((i) => i._id !== id));
//   };

//   // ⭐ Correct updateCartQuantity function
//   const updateCartQuantity = (id, newQuantity) => {
//     setCart((prevCart) =>
//       prevCart.map((i) =>
//         i._id === id ? { ...i, quantity: newQuantity } : i
//       )
//     );
//   }; 
  

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCartQuantity }}>
//       {children}
//     </CartContext.Provider>
//   );

  
// };

// export const useCart = () => useContext(CartContext);

import React, { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Initialize cart from localStorage if available
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Sync cart to localStorage on every change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (i) => i._id === item._id && i.size === item.size
      );
      if (existingItem) {
        return prevCart.map((i) =>
          i._id === item._id && i.size === item.size
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };
  

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((i) => i._id !== id));
  };

  const updateCartQuantity = (id, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((i) =>
        i._id === id ? { ...i, quantity: newQuantity } : i
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCartQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
