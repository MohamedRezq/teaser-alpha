import React from "react";
import logo from "@/public/images/alpha-teaser-logo.png";
import Image from "next/image";

const Header = () => {
  return (
    <div className="fixed top-0 py-6 w-full flex items-center px-[9vw] bg-darkmineshaft z-30 bg-opacity-90">
      <Image src={logo} alt="AlphaSaas" width={150} />
    </div>
  );
};

export default Header;
