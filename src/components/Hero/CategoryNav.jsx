import React from "react";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";

export default function CategoryNav() {
  const { data } = useFetch("/categories/");

  return (
    <aside className="hidden xl:flex">
      <div className="bg-emeraude flex flex-col w-[286px] h-[500px] rounded-[8px] overflow-hidden">
        <div className="bg-light py-4 text-black uppercase font-semibold flex items-center justify-center">
          <h2>Browse Categories</h2>
        </div>
        <div className="flex flex-col gap-y-6 p-6">
          {data?.map((category) => {
            return (
              <Link
                to={`/products/${category.id}`}
                className="cursor-pointer uppercase"
                key={category.id}
              >
                {category.attributes.title}
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
