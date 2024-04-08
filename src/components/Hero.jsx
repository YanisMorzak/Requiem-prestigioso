import React from "react";
import CategoryNav from "./CategoryNav";
import MainSlider from "./MainSlider";

export default function Hero() {
  return (
    <section className="mb-[30px] pt-36 lg:pt-0">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-[30px] xl:flex-row xl:gap-x-[30px]">
          {/* sidebar */}
          <div className="w-full bg-red-500 max-w-lg mx-auto">
            <CategoryNav />
          </div>
          {/* main slider */}
          <div className="w-full max-w-lg bg-pink-300 lg:max-w-[734px] mx-auto">
            <MainSlider />
          </div>
          {/* promo imgs */}
          <div className="flex flex-col gap-y-[30px] w-full bg-blue-500 max-w-lg mx-auto h-[500px]">
            {/* promo img 1 */}
            <div className="">promo 1</div>
            {/* promo img 2 */}
            <div>promo 2</div>
          </div>
        </div>
      </div>
    </section>
  );
}
