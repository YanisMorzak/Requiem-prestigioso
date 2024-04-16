import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(0);
  const [itemsAmount, setItemsAmount] = useState(0);

  // cart amount
  useEffect(() => {
    const amount = cart.reduce((a, c) => {
      return a + c.amount;
    }, 0);

    setItemsAmount(amount);
  }, [cart]);

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
    // open the card sidebar
    setIsOpen(true);
  };

  const removeFromCart = (id) => {
    const cartCopy = [...cart];

    const cartUpdated = cartCopy.filter((item) => item.id !== id);

    setCart(cartUpdated);
  };

  const handleInput = (e, id) => {
    const value = parseInt(e.target.value);

    // find the item in the cart by id
    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          if (isNaN(value)) {
            setAmount(1);
            return { ...item, amount: 1 };
          } else {
            setAmount(value);
            return { ...item, amount: value };
          }
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    setIsOpen(true);
  };

  return (
    <CartContext.Provider
      value={{
        isOpen,
        setIsOpen,
        addToCart,
        cart,
        removeFromCart,
        itemsAmount,
        handleInput,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
