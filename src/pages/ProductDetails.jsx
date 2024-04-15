import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import RelatedProducts from "../components/ProductDetails/RelatedProducts";
import ProductDetailsImage from "../components/ProductDetails/ProductDetailsImage";
import ProductDetailsText from "../components/ProductDetails/ProductDetailsText";

export default function ProductDetails() {
  const { id } = useParams();

  //  get product data base on the id
  const { data } = useFetch(`/products?populate=*&filters[id][$eq]=${id}`);

  if (!data) {
    return <div className="container mx-auto">Loading...</div>;
  }

  const categoryTitle = data[0].attributes.categories.data[0].attributes.title;

  return (
    <div className="mb-16 pt-44 lg:pt-[30px] xl:pt-2 px-5">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row mb-[30px] gap-[30px]">
          {/* image */}
          <ProductDetailsImage data={data} />
          {/* text */}
          <ProductDetailsText data={data} />
        </div>
        {/* related products */}
        <RelatedProducts categoryTitle={categoryTitle} />
      </div>
    </div>
  );
}
