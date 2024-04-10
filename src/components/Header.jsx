import React, { useContext } from "react";
import SearchForm from "./SearchForm";

import { FiMenu } from "react-icons/fi";
import { SlBag } from "react-icons/sl";
import CategoryNavMobile from "./CategoryNavMobile";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { CartContext } from "../context/CartContext";

export default function Header() {
  const { isOpen, setIsOpen } = useContext(CartContext);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header>
      <div className="container mx-auto">
        <div>
          {/* menu */}
          <div>
            <FiMenu />
          </div>
          {/* category nav mobile*/}
          <div>
            <CategoryNavMobile />
          </div>
          {/* logo */}
          <Link to={"/"}>
            <img src="/images/Logo-RP.png" alt="logo" />
          </Link>
          {/* searchform - show on desktop only */}
          <div className="hidden w-full xl:flex xl:max-w-[734px]">
            <SearchForm />
          </div>
          <div>
            {/* cart icon*/}
            <div onClick={handleClick} className="relative cursor-pointer">
              <SlBag className="text-2xl" />
              {/* amount */}
              <div>2</div>
            </div>
            {/* cart */}
            {isOpen && (
              <div
                className={`
              bg-[#0e0f10] shadow-xl fixed top-0 bottom-0 right-0 w-full md:max-w-[500px] z-10 transition-all duration-300`}
              >
                <Cart />
              </div>
            )}
          </div>
        </div>
        {/* searchform - show on mobile only */}
        <div className="lg:hidden">
          <SearchForm />
        </div>
      </div>
    </header>
  );
}
