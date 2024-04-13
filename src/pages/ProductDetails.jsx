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

  return (
    <div className="mb-16 pt-44 lg:pt-[30px] xl:pt-2 px-5">
      <div className="container mx-auto">
        {/* text */}
        <div>
          <div>
            <img
              src={`http://localhost:1337${data[0].attributes.image.data.attributes.url}`}
              alt={data[0].attributes.title}
              className="w-full max-w-[65%]"
            />
          </div>
          <div>
            {/* category title */}
            <div>{data[0].attributes.categories.data[0].attributes.title}</div>
            {/* title */}
            <div>{data[0].attributes.title}</div>
            {/* description */}
            <div>{data[0].attributes.description}</div>
            {/* price & btn */}
            <div>
              {/* price */}
              <div>${data[0].attributes.price.toLocaleString()}</div>
              {/* button */}
              <button className="h-[50px] flex justify-center items-center rounded-[8px] px-10 py-[10px] text-sm uppercase font-bold bg-gold text-primary hover:bg-accent-hover transition-all lg:mx-0">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        {/* related products */}
        <RelatedProducts />
      </div>
    </div>
  );
}
