import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import RelatedProducts from "../components/RelatedProducts";

export default function ProductDetails() {
  const { id } = useParams();

  //  get product data base on the id
  const { data } = useFetch(`/products?populate=*&filters[id][$eq]=${id}`);
  console.log("data: ", data);

  return (
    <div className="mb-16 pt-44 lg:pt-[30px] xl:pt-2">
      <div className="container mx-auto">
        {/* text */}
        <div>
          <div>
            <img
              src={`http://localhost:1337${data[0].attributes.image.data.attributes.url}`}
              alt={data[0].attributes.title}
            />
          </div>
        </div>
        {/* related products */}
        <RelatedProducts />
      </div>
    </div>
  );
}
