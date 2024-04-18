import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import FormFooter from "./FormFooter";
import LinksFooter from "./LinksFooter";

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
        <FormFooter />
        {/* links */}
        <LinksFooter />
        {/* <div className="text-base text-white/60 flex gap-x-6 capitalize max-w-max mx-auto mb-9 md:mb-6">
          <a href="#" className="hover:text-white transition-all">
            Returns policy
          </a>
          <a href="#" className="hover:text-white transition-all">
            Track youy order
          </a>
          <a href="#" className="hover:text-white transition-all">
            Shipping & Delivery
          </a>
        </div> */}
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
