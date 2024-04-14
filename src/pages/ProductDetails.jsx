import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import RelatedProducts from "../components/RelatedProducts";

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
        {/* text */}
        <div className="flex flex-col md:flex-row mb-[30px] gap-[30px]">
          <div className="md:max-w-[40%] lg:h-[540px] bg-emeraude rounded-[8px] overflow-hidden drop-shadow-2xl flex justify-center p-5">
            <img
              src={`http://localhost:1337${data[0].attributes.image.data.attributes.url}`}
              alt={data[0].attributes.title}
              className=" max-w-[90%]"
            />
          </div>
          <div className="flex-1 bg-primary p-12 xl:p-20 rounded-[8px]">
            {/* category title */}
            <div className="uppercase text-gold text-lg mb-2">
              {data[0].attributes.categories.data[0].attributes.title}
            </div>
            {/* title */}
            <div className="text-3xl capitalize mb-4">
              {data[0].attributes.title}
            </div>
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
        </div>
        {/* related products */}
        <RelatedProducts categoryTitle={categoryTitle} />
      </div>
    </div>
  );
}
