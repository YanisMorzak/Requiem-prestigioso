import React from "react";
import { FiX } from "react-icons/fi";

export default function CategoryNavMobile({ setCatNavMobile }) {
  return (
    <div className="w-full h-full bg-black p-8">
      <div
        onClick={() => setCatNavMobile(false)}
        className="flex justify-end mb-8 cursor-pointer"
      >
        <FiX className="text-3xl" />
      </div>
    </div>
  );
}
