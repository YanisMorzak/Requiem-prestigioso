import React, { useContext } from "react";

import { IoClose } from "react-icons/io5";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { setIsOpen } = useContext(CartContext);
  return (
    <div className="w-full h-full px-4">
      <div>
        {/* close icon */}
        <div
          onClick={() => setIsOpen(false)}
          className="text-4xl w-20 h-[98px] flex justify-start items-center cursor-pointer"
        >
          <IoClose />
        </div>
      </div>
    </div>
  );
}
