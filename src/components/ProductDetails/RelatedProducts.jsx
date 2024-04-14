import React from "react";
import useFetch from "../../hooks/useFetch";
import ProductSlider from "../LatestProduct/ProductSlider";

export default function RelatedProducts({ categoryTitle }) {
  const { data } = useFetch(
    `/products?populate=*&filters[categories][title]=${categoryTitle}`
  );
  console.log(data);
  return (
    <div>
      <div className="container mx-auto">
        <h2 className="text-3xl text-center lg:text-left">Related Products</h2>
        <ProductSlider data={data} />
      </div>
    </div>
  );
}
