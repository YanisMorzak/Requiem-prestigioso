import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import Product from "./Product";

export default function ProductSlider({ data }) {
  console.log(data);
  return (
    <Swiper>
      <>
        {data?.map((product) => {
          return (
            <SwiperSlide key={product.id}>
              <Product product={product} />
            </SwiperSlide>
          );
        })}
      </>
    </Swiper>
  );
}
