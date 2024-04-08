import React from "react";
import useFetch from "../hooks/useFetch";
import ProductSlider from "../components/ProductSlider";

export default function Home() {
  const { data } = useFetch("/products?populate=*&filters[isNew]=true");
  return (
    <div className="mb-16">
      <ProductSlider data={data} />
    </div>
  );
}
