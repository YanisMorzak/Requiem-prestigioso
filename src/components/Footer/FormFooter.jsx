import React from "react";

export default function FormFooter() {
  return (
    <form className="w-full max-w-3xl mx-auto flex flex-col md:flex-row gap-5 my-12">
      <input
        type="text"
        placeholder="Your email adress"
        className="h-[50px] rounded-[8px] w-full outline-none px-6 text-primary"
      />
      <button className="h-[50px] flex justify-center items-center rounded-[8px] px-10 py-[10px] text-sm uppercase font-bold bg-extraLight text-primary hover:bg-accent-hover transition-all min-w-[150px]">
        Join
      </button>
    </form>
  );
}
