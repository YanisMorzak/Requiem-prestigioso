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
    <div>
      <div className="container mx-auto">
        <div>
          {/* products grid */}
          <div>
            {data?.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
