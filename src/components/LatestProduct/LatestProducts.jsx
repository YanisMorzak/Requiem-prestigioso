import React from "react";
import ProductSlider from "./ProductSlider";
import useFetch from "../../hooks/useFetch";

export default function LatestProducts() {
  const { data } = useFetch("/products?populate=*&filters[isNew]=true");
  return (
    <div className="mb-16">
      <div className="container mx-auto">
        <h2 className="h2 text-center text-2xl xl:text-left">
          Latest Products
        </h2>
      </div>
      <ProductSlider data={data} />
    </div>
  );
}
