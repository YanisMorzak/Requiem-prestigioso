import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function ProductDetails() {
  const { id } = useParams();

  //  get product data base on the id
  const { data } = useFetch(`/products?populate=*&filters[id][$eq]=${id}`);
  console.log("data: ", data);

  return (
    <div className="mb-16 pt-44 lg:pt-[30px] xl:pt-2">
      <div className="container mx-auto">
        {/* text */}
        <div>text</div>
      </div>
    </div>
  );
}
