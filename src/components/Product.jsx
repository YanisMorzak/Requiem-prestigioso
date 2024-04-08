import React from "react";
import { Link } from "react-router-dom";

export default function Product({ product }) {
  console.log(product);
  return (
    <Link>
      <div className="group">
        <div className="w-full h-[200px] flex items-center justify-center relative">
          <img
            className="w-[170px] h-[170px] group-hover:scale-90 transition-all"
            src={`http://localhost:1337${product.attributes.image.data.attributes.url}`}
            alt=""
          />
        </div>
      </div>
    </Link>
  );
}
