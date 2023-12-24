"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { signIn, signUp, useSession, getProviders } from "next-auth/react";

const Header = () => {
  const isAuthenticated = false;
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <header className="max-with-[1440px] bg-[#FF6438]">
      <div className="flex justify-between items-center px-[4.5rem] py-[1.5rem]">
        <span>LOGO</span>
        <div className="flex justify-between gap-5 ">
          {!isAuthenticated && (
            <>
              <button className="btn_black">Giriş yap</button>
              <button className="btn_white">Kayit ol</button>
            </>
          )}
          {isAuthenticated && (
            <nav className="flex justify-between gap-5  ">
              <div className="flex items-center justify-center ">
                <Link href="/" passHref legacyBehavior>
                  <a
                    className={` ${
                      activeLink === "home" ? "text-[#000000]" : ""
                    } flex flex-col items-center gap-2 justify-center align-middle`}
                    onClick={() => handleLinkClick("home")}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill={activeLink === "home" ? "black" : "white"}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.83 8.01002L14.28 2.77002C13 1.75002 11 1.74002 9.73002 2.76002L3.18002 8.01002C2.24002 8.76002 1.67002 10.26 1.87002 11.44L3.13002 18.98C3.42002 20.67 4.99002 22 6.70002 22H17.3C18.99 22 20.59 20.64 20.88 18.97L22.14 11.43C22.32 10.26 21.75 8.76002 20.83 8.01002ZM12.75 18C12.75 18.41 12.41 18.75 12 18.75C11.59 18.75 11.25 18.41 11.25 18V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V18Z"
                        fill={activeLink === "home" ? "black" : "white"}
                      />
                    </svg>
                    Anasayfa
                  </a>
                </Link>
              </div>
              <div>
                <Link href="/offer" passHref legacyBehavior>
                  <a
                    className={` ${
                      activeLink === "offer" ? "text-[#000000]" : ""
                    } flex flex-col items-center gap-2 justify-center align-middle`}
                    onClick={() => handleLinkClick("offer")}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill={activeLink === "offer" ? "black" : "white"}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.5 15.5C21.78 15.5 22 15.72 22 16V17C22 18.66 20.66 20 19 20C19 18.35 17.65 17 16 17C14.35 17 13 18.35 13 20H11C11 18.35 9.65 17 8 17C6.35 17 5 18.35 5 20C3.34 20 2 18.66 2 17V15C2 14.45 2.45 14 3 14H12.5C13.88 14 15 12.88 15 11.5V6C15 5.45 15.45 5 16 5H16.84C17.56 5 18.22 5.39 18.58 6.01L19.22 7.13C19.31 7.29 19.19 7.5 19 7.5C17.62 7.5 16.5 8.62 16.5 10V13C16.5 14.38 17.62 15.5 19 15.5H21.5Z"
                        fill={activeLink === "offer" ? "black" : "white"}
                      />
                      <path
                        d="M8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22Z"
                        fill={activeLink === "offer" ? "black" : "white"}
                      />
                      <path
                        d="M16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22Z"
                        fill={activeLink === "offer" ? "black" : "white"}
                      />
                      <path
                        d="M22 12.53V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L21.74 11.54C21.91 11.84 22 12.18 22 12.53Z"
                        fill={activeLink === "offer" ? "black" : "white"}
                      />
                      <path
                        d="M13.08 2H5.69C3.65 2 2 3.65 2 5.69V12.07C2 12.62 2.45 13.07 3 13.07H12.15C13.17 13.07 14 12.24 14 11.22V2.92C14 2.41 13.59 2 13.08 2ZM10.07 7.07L7.98 9.09C7.83 9.23 7.64 9.3 7.46 9.3C7.27 9.3 7.08 9.23 6.94 9.09L5.93 8.13C5.63 7.84 5.62 7.36 5.91 7.06C6.19 6.76 6.67 6.76 6.97 7.04L7.46 7.51L9.03 5.99C9.33 5.7 9.8 5.71 10.09 6.01C10.38 6.31 10.37 6.78 10.07 7.07Z"
                        fill={activeLink === "offer" ? "black" : "white"}
                      />
                    </svg>

                    <span>Teklifler</span>
                  </a>
                </Link>
              </div>
              <div>
                <Link href="/messages" passHref legacyBehavior>
                  <a
                    className={` ${
                      activeLink === "messages" ? "text-[#000000]" : ""
                    } flex flex-col items-center gap-2 justify-center align-middle`}
                    onClick={() => handleLinkClick("messages")}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill={activeLink === "messages" ? "black" : "white"}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.47 16.83L18.86 19.99C18.96 20.82 18.07 21.4 17.36 20.97L13.9 18.91C13.66 18.77 13.6 18.47 13.73 18.23C14.23 17.31 14.5 16.27 14.5 15.23C14.5 11.57 11.36 8.59 7.50002 8.59C6.71002 8.59 5.94002 8.71 5.22002 8.95C4.85002 9.07 4.49002 8.73 4.58002 8.35C5.49002 4.71 8.99002 2 13.17 2C18.05 2 22 5.69 22 10.24C22 12.94 20.61 15.33 18.47 16.83Z"
                        fill={activeLink === "messages" ? "black" : "white"}
                      />
                      <path
                        d="M13 15.2298C13 16.4198 12.56 17.5198 11.82 18.3898C10.83 19.5898 9.26 20.3598 7.5 20.3598L4.89 21.9098C4.45 22.1798 3.89 21.8098 3.95 21.2998L4.2 19.3298C2.86 18.3998 2 16.9098 2 15.2298C2 13.4698 2.94 11.9198 4.38 10.9998C5.27 10.4198 6.34 10.0898 7.5 10.0898C10.54 10.0898 13 12.3898 13 15.2298Z"
                        fill={activeLink === "messages" ? "black" : "white"}
                      />
                    </svg>

                    <span>Mesajlar</span>
                  </a>
                </Link>
              </div>
              <div>
                <Link href="/profile" passHref legacyBehavior>
                  <a
                    className={` ${
                      activeLink === "profile" ? "text-[#000000]" : ""
                    } flex flex-col items-center gap-2 justify-center align-middle`}
                    onClick={() => handleLinkClick("profile")}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill={activeLink === "profile" ? "black" : "white"}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="1">
                        <path
                          d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z"
                          fill={activeLink === "profile" ? "black" : "white"}
                        />
                        <path
                          d="M17.08 14.1499C14.29 12.2899 9.73996 12.2899 6.92996 14.1499C5.65996 14.9999 4.95996 16.1499 4.95996 17.3799C4.95996 18.6099 5.65996 19.7499 6.91996 20.5899C8.31996 21.5299 10.16 21.9999 12 21.9999C13.84 21.9999 15.68 21.5299 17.08 20.5899C18.34 19.7399 19.04 18.5999 19.04 17.3599C19.03 16.1299 18.34 14.9899 17.08 14.1499Z"
                          fill={activeLink === "profile" ? "black" : "white"}
                        />
                      </g>
                    </svg>
                    Profil
                  </a>
                </Link>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
