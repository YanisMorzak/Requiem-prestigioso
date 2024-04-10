import React from "react";
import { Link } from "react-router-dom";

export default function Product({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-emeraude drop-shadow-2xl w-full h-[382px] rounded-[8px] overflow-hidden relative group">
        {/* badge */}
        {product.attributes.isNew ? (
          <div className="absolute bg-gold text-black text-[12px] font-bold uppercase top-4 right-4 px-2 rounded-full z-10">
            new
          </div>
        ) : (
          ""
        )}
        {/* image */}
        <div className="w-full h-[200px] flex items-center justify-center relative">
          <img
            className="absolute top-8 mb-12 w-[170px] h-[170px] group-hover:scale-90 transition-all"
            src={`http://localhost:1337${product.attributes.image.data.attributes.url}`}
            alt=""
          />
        </div>
        {/* text */}
        <div className="px-6 mt-6 flex flex-col">
          {/* category */}
          <div className="text-[18px] text-gold capitalize font-semibold mb-2">
            {product.attributes.categories.data[0].attributes.title}
          </div>
          {/* title */}
          <div className="text-[15px] mb-4 lg:mb-9">
            {product.attributes.title.substring(0, 25)}...
          </div>
          {/* price */}
          <div className="text-lg text-gold font-semibold">
            ${product.attributes.price.toLocaleString()}
          </div>
        </div>
      </div>
    </Link>
  );
}
