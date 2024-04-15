import React from "react";
import { FiX } from "react-icons/fi";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";

export default function CategoryNavMobile({ setCatNavMobile }) {
  const { data } = useFetch("/categories");
  return (
    <div className="w-full h-full bg-black p-8">
      <div
        onClick={() => setCatNavMobile(false)}
        className="flex justify-end mb-8 cursor-pointer"
      >
        <FiX className="text-3xl" />
      </div>
      <div className="flex flex-col gap-y-8">
        {data?.map((category) => {
          return (
            <Link
              to={`products/${category.id}`}
              onClick={() => setCatNavMobile(false)}
              className="uppercase font-medium"
              key={category.id}
            >
              {category.attributes.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
