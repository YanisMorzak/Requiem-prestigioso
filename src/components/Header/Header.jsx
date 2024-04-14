import React, { useContext, useState } from "react";
import SearchForm from "./SearchForm";

import { FiMenu } from "react-icons/fi";
import { SlBag } from "react-icons/sl";
import CategoryNavMobile from "./CategoryNavMobile";
import { Link } from "react-router-dom";
import Cart from "../Cart";
import { CartContext } from "../../context/CartContext";

export default function Header() {
  const { isOpen, setIsOpen } = useContext(CartContext);
  const [catNavMobile, setCatNavMobile] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="bg-[#0B292E] py-6 px-5 fixed w-full top-0 z-40 lg:relative xl:mb-[30px]">
      <div className="container mx-auto">
        <div className="flex flex-row gap-4 lg:items-center justify-between mb-4 xl:mb-0">
          {/* menu */}
          <div
            onClick={() => setCatNavMobile(true)}
            className="text-3xl xl:hidden cursor-pointer"
          >
            <FiMenu />
          </div>
          {/* category nav mobile*/}
          <div
            className={`${
              catNavMobile ? "left-0" : "-left-full"
            } fixed top-0 bottom-0 z-30 w-full h-screen transition-all duration-200 `}
          >
            <CategoryNavMobile setCatNavMobile={setCatNavMobile} />
          </div>
          {/* logo */}
          <Link to={"/"}>
            <img src="/images/Logo-RP.png" alt="logo" />
          </Link>
          {/* searchform - show on desktop only */}
          <div className="hidden w-full xl:flex xl:max-w-[734px]">
            <SearchForm />
          </div>
          <div className="flex gap-x-[15px]">
            <div className="hidden xl:flex">Need Help ? 123 456 789</div>
            {/* cart icon*/}
            <div onClick={handleClick} className="relative cursor-pointer">
              <SlBag className="text-2xl" />
              {/* amount */}
              <div className="bg-gold text-primary font-semibold absolute w-[18px] h-[18px] rounded-full flex justify-center items-center top-3 -right-1">
                2
              </div>
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
        <div className="xl:hidden">
          <SearchForm />
        </div>
      </div>
    </header>
  );
}
