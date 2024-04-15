import React from "react";

export default function ProductDetailsImage({ data }) {
  return (
    <div className="md:max-w-[40%] lg:h-[540px] bg-emeraude rounded-[8px] overflow-hidden drop-shadow-2xl flex justify-center p-5">
      <img
        src={`http://localhost:1337${data[0].attributes.image.data.attributes.url}`}
        alt={data[0].attributes.title}
        className=" max-w-[90%]"
      />
    </div>
  );
}
