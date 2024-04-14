import React from "react";

export default function ProductDetailsText({ data }) {
  return (
    <div className="flex-1 bg-primary p-12 xl:p-20 rounded-[8px]">
      {/* category title */}
      <div className="uppercase text-gold text-lg mb-2">
        {data[0].attributes.categories.data[0].attributes.title}
      </div>
      {/* title */}
      <div className="text-3xl capitalize mb-4">{data[0].attributes.title}</div>
      {/* description */}
      <div className="mb-12">{data[0].attributes.description}</div>
      {/* price & btn */}
      <div className="flex items-center gap-x-8">
        {/* price */}
        <div className="text-2xl text-gold font-semibold">
          ${data[0].attributes.price.toLocaleString()}
        </div>
        {/* button */}
        <button className="h-[50px] flex justify-center items-center rounded-[8px] px-10 py-[10px] text-sm uppercase font-bold bg-gold text-primary hover:bg-accent-hover transition-all lg:mx-0">
          Add to cart
        </button>
      </div>
    </div>
  );
}
