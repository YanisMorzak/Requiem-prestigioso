import React from "react";
import CategoryNav from "./CategoryNav";
import MainSlider from "./MainSlider";

export default function Hero() {
  return (
    <section className="mb-[30px] pt-36 lg:pt-0">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-[30px] xl:flex-row xl:gap-x-[30px]">
          {/* sidebar */}
          <div>
            <CategoryNav />
          </div>
          {/* main slider */}
          <div className="w-full max-w-lg bg-pink-300 lg:max-w-[734px] mx-auto">
            <MainSlider />
          </div>
          {/* promo */}
          <div className="flex flex-col gap-y-[30px] w-full bg-blue-500 max-w-lg mx-auto h-[500px]">
            {/* promo 1 */}
            <div className="bg-gradient-to-t from-[#1F2126] to-[#33363D] drop-shadow-2xl flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6">
              {/* text */}
              <div className="flex flex-col max-w-[144px] h-full justify-center">
                <div className="text-[20px] uppercase font-medium leading-tight mb-4">
                  Save 35% all Piano{" "}
                </div>
                <a href="#" className="uppercase text-yellow-300">
                  Shop now
                </a>
              </div>
              {/* image */}
              <img
                className="absolute z-20 -top-2 -right-0"
                src={"/images/Design_sans_titre__2_-removebg-preview.png"}
                alt=""
              />
            </div>
            {/* promo 2 */}
            <div className="bg-gradient-to-t from-[#1F2126] to-[#33363D] drop-shadow-2xl flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6">
              {/* text */}
              <div className="flex flex-col max-w-[144px] h-full justify-center">
                <div className="text-[20px] uppercase font-medium leading-tight mb-4">
                  Save 25% all Drums{" "}
                </div>
                <a href="#" className="uppercase text-yellow-300">
                  Shop now
                </a>
              </div>
              {/* image */}
              <img
                className="absolute z-20 -top-2 -right-0"
                src={"/images/Design_sans_titre__2_-removebg-preview.png"}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
