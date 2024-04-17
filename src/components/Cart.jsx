import React, { useContext } from "react";

import { IoClose } from "react-icons/io5";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import Total from "./Total";
import Button from "./Button";

export default function Cart() {
  const { setIsOpen, cart } = useContext(CartContext);
  return (
    <div className="w-full h-full px-4">
      <div className="overflow-y-auto overflow-x-hidden h-[77vh] ">
        {/* close icon */}
        <div
          onClick={() => setIsOpen(false)}
          className="text-4xl w-20 h-[98px] flex justify-start items-center cursor-pointer"
        >
          <IoClose />
        </div>
        <div className="flex flex-col gap-y-10 px-2">
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>
      </div>
      {/* subtotal & total */}
      <Total />
      {/* buttons */}
      <div className="px-6">
        {cart.length >= 1 ? (
          <div className="flex justify-between gap-x-4">
            <Button btnValue={"Clear Cart"} />
            <Button btnValue={"Checkout"} />
          </div>
        ) : (
          <div>Your cart is empty</div>
        )}
      </div>
    </div>
  );
}
