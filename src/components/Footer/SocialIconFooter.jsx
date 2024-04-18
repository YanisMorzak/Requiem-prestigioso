import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function SocialIconFooter() {
  return (
    <div className="flex gap-x-6 max-w-max mx-auto text-xl mb-16">
      <a href="#" className="hover:text-white text-light transition-all">
        <FaLinkedin />
      </a>
      <a href="#" className="hover:text-white text-light transition-all">
        <FaGithub />
      </a>
    </div>
  );
}
