import React from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function CartItem({ item }) {
  console.log("item: ", item);
  return (
    <div className="flex">
      <Link to={`/product/${item.id}`} className="w-[70px] h-[70px]">
        <img
          src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
          alt=""
        />
      </Link>
      <div>
        {/* title & remove icon */}
        <Link to={`/product/${item.id}`}>{item.attributes.title}</Link>
        <div className="cursor-pointer text-[24px] hover:text-accent transition-all">
          <IoClose />
        </div>
      </div>
    </div>
  );
}
