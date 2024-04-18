import React from "react";
import FormFooter from "./FormFooter";
import LinksFooter from "./LinksFooter";
import SocialIconFooter from "./SocialIconFooter";
import CopyrightFooter from "./CopyrightFooter";

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
        {/* socials */}
        <SocialIconFooter />
        {/* Copyright */}
        <CopyrightFooter />
      </div>
    </footer>
  );
}
