import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function Total() {
  const { cart, total } = useContext(CartContext);
  return (
    <div>
      {cart.length >= 1 && (
        <div className="px-6 py-10 flex flex-col">
          {/* subtotal */}
          <div className="flex justify-between text-lg">
            <div>SubTotal</div>
            <div>$ {total.toLocaleString()}</div>
          </div>
          {/* total */}
          <div className="flex justify-between text-2xl">
            <div>Total</div>
            <div>$ {total.toLocaleString()}</div>
          </div>
        </div>
      )}
    </div>
  );
}
