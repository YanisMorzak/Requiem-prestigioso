import React from "react";

import { IoClose } from "react-icons/io5";

export default function Cart() {
  return (
    <div className="px-4">
      <div>
        {/* close icon */}
        <div className="text-4xl w-20 h-[98px] flex justify-start items-center cursor-pointer">
          <IoClose />
        </div>
      </div>
    </div>
  );
}
