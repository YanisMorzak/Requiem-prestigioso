import React, { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(0);

  const addToCart = (item, id) => {
    const itemID = parseInt(id);
    const newItem = { ...item[0], amount: 1 };
    setCart([...cart, newItem]);

    // check if item is already in the cart
    const isAlreadyInCart = cart.find((item) => item.id === itemID);

    if (isAlreadyInCart) {
      const newCart = cart.map((item) => {
        if (item.id === itemID) {
          setAmount(isAlreadyInCart.amount + 1);
          return { ...item, amount: isAlreadyInCart.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
    setIsOpen(true);
  };

  return (
    <CartContext.Provider value={{ isOpen, setIsOpen, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
