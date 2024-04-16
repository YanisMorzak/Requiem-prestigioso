import React, { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const addToCart = (item, id) => {
    const itemID = parseInt(id);
    const newItem = { ...item[0], amount: 1 };
    setCart([...cart, newItem]);
    console.log(cart);
  };

  return (
    <CartContext.Provider value={{ isOpen, setIsOpen, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
