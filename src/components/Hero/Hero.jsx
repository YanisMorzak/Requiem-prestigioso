import React from "react";
import CategoryNav from "./CategoryNav";
import MainSlider from "./MainSlider";
import Promo from "./Promo";

export default function Hero() {
  return (
    <section className="mb-[30px] pt-36 lg:pt-0 px-5">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-[30px] xl:flex-row xl:gap-x-[30px]">
          {/* sidebar */}
          <div>
            <CategoryNav />
          </div>
          {/* main slider */}
          <div className="w-full max-w-lg lg:max-w-[734px] mx-auto">
            <MainSlider />
          </div>
          {/* promo */}
          <Promo />
        </div>
      </div>
    </section>
  );
}
