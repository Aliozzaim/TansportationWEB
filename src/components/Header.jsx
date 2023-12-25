"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { signIn, signUp, useSession, getProviders } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import googleSVG from "../../public/assets/images/google.svg";
import appleSVG from "../../public/assets/images/apple.svg";
import headerICON from "../../public/assets/images/truck.svg";

const Header = () => {
  const isAuthenticated = false;
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  // check if user is authenticated
  const AuthentionChecker = () => {
    if (isAuthenticated) {
      return redirect("/singin");
    } else {
      return redirect("/singup");
    }
  };
  return (
    <header>
      <div className="flex   justify-between items-center px-[4.5rem] py-[1.5rem]">
        <a href="/">
          <Image src={headerICON} alt="header-icon" />
        </a>
        <div className="flex gap-4">
          <a
            className="header_button"
            href="https://play.google.com/store/games?device=windows"
          >
            <Image src={googleSVG} alt="google" />
            <div className="header_content">
              <div className="header_t1">Şimdi yükle</div>
              <div className="header_t2">Google Play</div>
            </div>
          </a>
          <a
            className="header_button !w-[8.875rem]"
            href="https://www.apple.com/tr/"
          >
            <Image src={appleSVG} alt="apple" />
            <div>
              <div className="header_t1">Şimdi yükle</div>
              <div className="header_t2">App Store</div>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
