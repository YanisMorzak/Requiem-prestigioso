import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 1000);

    return () => clearTimeout(timeout);
  });

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm.length > 0) {
      navigate(`/search?query=${searchTerm}`);
      setSearchTerm("");
    } else {
      setIsAnimating(true);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${
        isAnimating ? "animate-shake" : "animate-none"
      } w-full relative`}
    >
      <input
        value={searchTerm}
        onChange={handleSearchInput}
        className="h-[50px] rounded-[8px] w-full outline-none px-6 text-primary font-semibold"
        type="text"
        placeholder="Search for a product..."
      />
      <button className="h-[50px] flex justify-center items-center rounded-[6px] px-10 py-[10px] bg-light text-primary hover:bg-accent-hover transition-all absolute top-0 right-0 rounded-bl-none rounded-tl-none">
        <FiSearch className="text-xl" />
      </button>
    </form>
  );
}
