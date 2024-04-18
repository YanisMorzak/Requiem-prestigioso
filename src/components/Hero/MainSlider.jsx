import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./../../slider.css";

import { Pagination } from "swiper/modules";
import { sliderData } from "../../data/sliderData";

export default function MainSlider() {
  return (
    <Swiper
      modules={[Pagination]}
      loop={true}
      pagination={{
        clickable: true,
      }}
      className="mainSlider h-full bg-gradient-to-r from-teal-900 to-teal-600 max-w-lg lg:max-w-none rounded-[8px] overflow-hidden drop-shadow-2xl"
    >
      <>
        {sliderData.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col lg:flex-row h-full p-[20px] md:p-[60px]">
                {/* text */}
                <div className="w-full lg:flex-1">
                  <div className="uppercase mb-1 text-center lg:text-left">
                    {slide.pretitle}
                  </div>
                  <div className="text-3xl md:text-[44px] font-semibold uppercase leading-none text-center lg:text-left mb-8">
                    {slide.titlePart1} <br />
                    {slide.titlePart2} <br />
                    {slide.titlePart3}
                  </div>
                  <button className="h-[50px] flex justify-center items-center rounded-[8px] px-10 py-[10px] text-sm uppercase font-bold bg-extraLight text-primary hover:bg-accent-hover transition-all mx-auto lg:mx-0">
                    Shop now
                  </button>
                </div>
                {/* image */}
                <div className="flex-1">
                  <img
                    className="xl:absolute xl:-right-12 xl:-bottom-4"
                    src={slide.img}
                    alt={slide.pretitle}
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </>
    </Swiper>
  );
}
