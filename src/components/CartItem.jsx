import React from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import CartItemQuantity from "./CartItemQuantity";

export default function CartItem({ item }) {
  console.log("item: ", item);
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
        <div className="flex">
          <Link to={`/product/${item.id}`}>{item.attributes.title}</Link>
          <div className="cursor-pointer text-[24px] hover:text-accent transition-all">
            <IoClose />
          </div>
        </div>
        {/* quantity */}
        <div>
          <div>
            <CartItemQuantity item={item} />
          </div>
          <div>$ {item.attributes.price * item.amount}</div>
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
