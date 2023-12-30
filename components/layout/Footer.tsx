import React from "react";
import footerLogo from "@/public/images/footer-logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="relative bg-white rounded-[15px] sm:rounded-[30px] px-[10vw] py-[2vw] flex flex-col sm:flex-row gap-y-1 items-center justify-between sm:justify-center mx-[3vw]">
      <Image
        src={footerLogo}
        alt="AlphaSaas"
        className="w-24 sm:w-36 md:absolute inline left-[10vw]"
      />
      <div className="text-[#707070] text-sm sm:text-base font-medium">
        Made with ❤️ AlphaSaas © 2024
      </div>
      <div className="hidden md:block"></div>
    </div>
  );
};

export default Footer;
