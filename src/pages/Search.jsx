import React from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Product from "../components/LatestProduct/Product";

export default function Search() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("query");

  // get products based on search term
  const { data } = useFetch(
    `/products?populate=*&filters[title][$contains]=${searchTerm}`
  );
  console.log(data);

  return (
    <div className="mb-[30px] pt-40 lg:pt-2">
      <div className="container mx-auto px-5">
        <div>
          {/* products grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px]">
            {data?.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
