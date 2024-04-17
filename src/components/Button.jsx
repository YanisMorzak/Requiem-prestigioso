import React from "react";

export default function Button({ btnValue, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className="h-[50px] flex justify-center items-center rounded-[8px] px-10 py-[10px] text-sm uppercase font-bold bg-accent text-primary hover:bg-accent-hover transition-all"
      >
        {btnValue}
      </button>
    </div>
  );
}
