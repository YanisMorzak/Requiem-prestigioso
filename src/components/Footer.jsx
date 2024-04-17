import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="pt-16 px-5">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl capitalize mb-6">
            Subscribe to our newsletter
          </h2>
          <p className="text-white/70">
            Be the first to get the latest news about trends, promotion and much
            more!
          </p>
        </div>
        {/* form */}
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
        {/* links */}
        <div className="text-base text-white/60 flex gap-x-6 capitalize max-w-max mx-auto mb-9 md:mb-6">
          <a href="#" className="hover:text-white transition-all">
            Returns policy
          </a>
          <a href="#" className="hover:text-white transition-all">
            Track youy order
          </a>
          <a href="#" className="hover:text-white transition-all">
            Shipping & Delivery
          </a>
        </div>
        {/* socials */}
        <div className="flex gap-x-6 max-w-max mx-auto text-xl mb-16">
          <a href="#" className="hover:text-white text-light transition-all">
            <FaLinkedin />
          </a>
          <a href="#" className="hover:text-white text-light transition-all">
            <FaGithub />
          </a>
        </div>
        {/* Copyright */}
        <div className="py-10 border-t border-t-white/10">
          <div className="container mx-auto">
            <div className="text-center text-sm text-white/60">
              Copyright & copy; Requiem Prestigioso 2024. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
