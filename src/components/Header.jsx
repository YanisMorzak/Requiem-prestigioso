import React from "react";
import SearchForm from "./SearchForm";

import { FiMenu } from "react-icons/fi";
import { SlBag } from "react-icons/sl";
import CategoryNavMobile from "./CategoryNavMobile";
import { Link } from "react-router-dom";
import Cart from "./Cart";

export default function Header() {
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
          {/* cart icon*/}
          <div className="relative cursor-pointer">
            <SlBag className="text-2xl" />
            {/* amount */}
            <div>2</div>
          </div>
          {/* cart */}
          <div className="bg-[#0e0f10] shadow-xl fixed top-0 bottom-0 w-full z-50 md:max-w-[500px] transition-all duration-300">
            <Cart />
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
