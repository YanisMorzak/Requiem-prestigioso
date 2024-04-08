import React from "react";
import { Link } from "react-router-dom";

export default function Product({ product }) {
  console.log(product);
  return (
    <Link>
      <div className="bg-gradient-to-t from-[#1F2126] to-[#33363D] drop-shadow-2xl w-full h-[362px] rounded-[8px] overflow-hidden relative group">
        <div className="mb-4">new</div>
        <div className="w-full h-[200px] flex items-center justify-center relative">
          <img
            className="mb-12 w-[170px] h-[170px] group-hover:scale-90 transition-all"
            src={`http://localhost:1337${product.attributes.image.data.attributes.url}`}
            alt=""
          />
        </div>
      </div>
    </Link>
  );
}
