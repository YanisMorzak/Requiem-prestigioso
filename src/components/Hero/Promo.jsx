import React from "react";

export default function Promo() {
  return (
    <div className="flex flex-col gap-y-[30px] w-full max-w-lg mx-auto h-[500px]">
      {/* promo 1 */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-900 drop-shadow-2xl flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6">
        {/* text */}
        <div className="flex flex-col max-w-[144px] h-full justify-center">
          <div className="text-[20px] uppercase font-medium leading-tight mb-4">
            Save 35% all Piano{" "}
          </div>
          <a href="#" className="uppercase text-gold font-semibold">
            Shop now
          </a>
        </div>
        {/* image */}
        <img
          className="absolute z-10 -top-2 -right-0"
          src={"/images/Design_sans_titre__2_-removebg-preview.png"}
          alt=""
        />
      </div>
      {/* promo 2 */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-900 drop-shadow-2xl flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6">
        {/* text */}
        <div className="flex flex-col max-w-[144px] h-full justify-center">
          <div className="text-[20px] uppercase font-medium leading-tight mb-4">
            Save 25% all Drums{" "}
          </div>
          <a href="#" className="uppercase text-gold font-semibold">
            Shop now
          </a>
        </div>
        {/* image */}
        <img
          className="absolute z-10 -top-2 -right-0"
          src={"/images/Design_sans_titre__2_-removebg-preview.png"}
          alt=""
        />
      </div>
    </div>
  );
}
