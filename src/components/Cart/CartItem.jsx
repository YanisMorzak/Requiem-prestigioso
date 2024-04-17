import React, { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";
import CartItemQuantity from "./CartItemQuantity";

export default function CartItem({ item }) {
  const { removeFromCart } = useContext(CartContext);
  return (
    <div className="flex gap-x-8">
      <Link to={`/product/${item.id}`} className="w-[70px] h-[70px]">
        <img
          src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
          alt=""
        />
      </Link>
      <div className="flex-1">
        {/* title & remove icon */}
        <div className="flex justify-between mb-3">
          <Link to={`/product/${item.id}`}>{item.attributes.title}</Link>
          <div
            onClick={() => removeFromCart(item.id)}
            className="cursor-pointer text-[24px] hover:text-accent transition-all"
          >
            <IoClose />
          </div>
        </div>
        <div className="flex items-center gap-x-12">
          {/* quantity */}
          <div className="flex gap-x-4 mb-2">
            <CartItemQuantity item={item} />
          </div>
          <div className="text-accent text-xl">
            $ {item.attributes.price * item.amount}
          </div>
        </div>
        {/* price */}
        <div>
          <span className="text-accent">
            $ {item.attributes.price.toLocaleString()} per piece
          </span>
        </div>
      </div>
    </div>
  );
}