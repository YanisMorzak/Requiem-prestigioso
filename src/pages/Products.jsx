import React from "react";
import CategoryNav from "../components/Hero/CategoryNav";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Product from "../components/LatestProduct/Product";

export default function Products() {
  const { id } = useParams();

  // get products based on category id
  const { data } = useFetch(
    `/products?populate=*&filters[categories][id][$eq]=${id}`
  );
  console.log(data);
  return (
    <div className="mb-16 pt-40 lg:pt-2 px-5">
      <div className="container mx-auto">
        <div className="flex gap-x-[30px]">
          <CategoryNav />
          <main className="flex-1">
            {/* title */}
            <div>title</div>
            {/* product grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px] ">
              {data?.map((product) => {
                return <Product product={product} key={product.id} />;
              })}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
