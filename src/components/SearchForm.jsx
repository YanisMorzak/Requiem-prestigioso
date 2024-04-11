import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <form className="w-full relative">
      <input
        onChange={handleSearchInput}
        className="h-[50px] rounded-[8px] w-full outline-none px-6 text-primary font-semibold"
        type="text"
        placeholder="Search for a product..."
      />
      <button className="h-[50px] flex justify-center items-center rounded-[6px] px-10 py-[10px] bg-accent text-primary hover:bg-accent-hover transition-all absolute top-0 right-0 rounded-bl-none rounded-tl-none">
        <FiSearch className="text-xl" />
      </button>
    </form>
  );
}
