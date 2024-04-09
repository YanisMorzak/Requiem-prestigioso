import React from "react";

export default function Promo() {
  return (
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
  );
}
