"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HomeSVG from "../../public/assets/images/home.svg";
import RightArrowSVG from "../../public/assets/images/arrow-right.svg";
import { useEffect } from "react";
import { redirect } from "next/dist/server/api-utils";
const SideNavigation = () => {
  const [activeLink, setActiveLink] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser({
      name: "Ali Fatih Sal",
      phoneNumber: "+90 507 531 1978",
      profilePhoto: "https://picsum.photos/200",
    });
  }, []);
  const logoutHandler = () => {
    console.log("logout");
  };

  const handleLinkClick = (e) => {
    console.log(e);
    setActiveLink(e);
    // redirect(e); redirect user to the page
  };
  // const [user, setUser] = useState(null);
  // useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/users/1")
  //         .then((response) => response.json())
  //         .then((json) => setUser(json));
  // }, []);
  //     setUser({
  //         name: "Ali",
  //         phoneNumber: "123456789",
  //         profilePhoto: "https://picsum.photos/200",
  //     });
  return (
    <nav className="mt-[55px] fixed container left-30 z-50">
      <ul className="w-[250px] h-[182px]  flex-col rounded-2xl bg-[#1C1C1C] ">
        <button
          onClick={() => handleLinkClick("/home")}
          className="flex justify-between items-center h-1/3 w-full nav_button px-5"
        >
          <div className=" flex justify-between  gap-4 items-center align-middle !w-[174px]  ">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill={activeLink == "/home" ? "#ff6438" : "white"}
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity={` ${activeLink == "/home" ? "1" : "0.5"}`}>
                <path
                  d="M17.3584 6.6751L11.9 2.30843C10.8334 1.45843 9.16672 1.4501 8.10838 2.3001L2.65005 6.6751C1.86672 7.3001 1.39172 8.5501 1.55838 9.53343L2.60838 15.8168C2.85005 17.2251 4.15838 18.3334 5.58338 18.3334H14.4167C15.825 18.3334 17.1584 17.2001 17.4 15.8084L18.45 9.5251C18.6 8.5501 18.125 7.3001 17.3584 6.6751ZM10.625 15.0001C10.625 15.3418 10.3417 15.6251 10 15.6251C9.65838 15.6251 9.37505 15.3418 9.37505 15.0001V12.5001C9.37505 12.1584 9.65838 11.8751 10 11.8751C10.3417 11.8751 10.625 12.1584 10.625 12.5001V15.0001Z"
                  fill={activeLink == "/home" ? "#ff6438" : "white"}
                />
              </g>
            </svg>

            <div id="nav-item" className="w-full text-start">
              <span
                id="nav-link"
                className={`${
                  activeLink == "/home" ? "!text-[#ff6438]" : "text-white"
                } dssams40014 w-full`}
                href="home"
              >
                Anasayfa
              </span>
            </div>
          </div>
          <Image src={RightArrowSVG} alt="logo" width={16} height={16} />
        </button>

        <button
          onClick={() => handleLinkClick("/offers")}
          className="flex justify-between items-center h-1/3 w-full nav_button px-5 border-b-[1px] border-t-[1px] border-[#2C2C2C] "
        >
          <div className=" flex justify-between  gap-4 items-center align-middle !w-[174px]    ">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill={activeLink === "/offers" ? "#ff6438" : "none"}
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity={` ${activeLink == "/offers" ? "1" : "0.5"}`}>
                <path
                  d="M17.9167 12.9167C18.15 12.9167 18.3333 13.1001 18.3333 13.3334V14.1667C18.3333 15.5501 17.2167 16.6667 15.8333 16.6667C15.8333 15.2917 14.7083 14.1667 13.3333 14.1667C11.9583 14.1667 10.8333 15.2917 10.8333 16.6667H9.16667C9.16667 15.2917 8.04167 14.1667 6.66667 14.1667C5.29167 14.1667 4.16667 15.2917 4.16667 16.6667C2.78334 16.6667 1.66667 15.5501 1.66667 14.1667V12.5001C1.66667 12.0417 2.04167 11.6667 2.50001 11.6667H10.4167C11.5667 11.6667 12.5 10.7334 12.5 9.58341V5.00008C12.5 4.54175 12.875 4.16675 13.3333 4.16675H14.0333C14.6333 4.16675 15.1833 4.49175 15.4833 5.00841L16.0167 5.94175C16.0917 6.07508 15.9917 6.25008 15.8333 6.25008C14.6833 6.25008 13.75 7.18341 13.75 8.33341V10.8334C13.75 11.9834 14.6833 12.9167 15.8333 12.9167H17.9167Z"
                  fill={activeLink === "/offers" ? "#ff6438" : "white"}
                />
                <path
                  d="M6.66667 18.3333C7.58714 18.3333 8.33333 17.5871 8.33333 16.6667C8.33333 15.7462 7.58714 15 6.66667 15C5.74619 15 5 15.7462 5 16.6667C5 17.5871 5.74619 18.3333 6.66667 18.3333Z"
                  fill={activeLink === "/offers" ? "#ff6438" : "white"}
                />
                <path
                  d="M13.3333 18.3333C14.2538 18.3333 15 17.5871 15 16.6667C15 15.7462 14.2538 15 13.3333 15C12.4129 15 11.6667 15.7462 11.6667 16.6667C11.6667 17.5871 12.4129 18.3333 13.3333 18.3333Z"
                  fill={activeLink === "/offers" ? "#ff6438" : "white"}
                />
                <path
                  d="M18.3333 10.4417V11.6667H15.8333C15.375 11.6667 15 11.2917 15 10.8333V8.33333C15 7.875 15.375 7.5 15.8333 7.5H16.9083L18.1167 9.61667C18.2583 9.86667 18.3333 10.15 18.3333 10.4417Z"
                  fill={activeLink === "/offers" ? "#ff6438" : "white"}
                />
                <path
                  d="M10.9 1.66675H4.74167C3.04167 1.66675 1.66667 3.04175 1.66667 4.74175V10.0584C1.66667 10.5167 2.04167 10.8917 2.50001 10.8917H10.125C10.975 10.8917 11.6667 10.2001 11.6667 9.35008V2.43341C11.6667 2.00841 11.325 1.66675 10.9 1.66675ZM8.39167 5.89175L6.65 7.57508C6.525 7.69175 6.36667 7.75008 6.21667 7.75008C6.05834 7.75008 5.9 7.69175 5.78334 7.57508L4.94167 6.77508C4.69167 6.53341 4.68334 6.13341 4.925 5.88341C5.15834 5.63341 5.55834 5.63341 5.80834 5.86675L6.21667 6.25841L7.525 4.99175C7.775 4.75008 8.16667 4.75841 8.40834 5.00841C8.65 5.25841 8.64167 5.65008 8.39167 5.89175Z"
                  fill={activeLink === "/offers" ? "#ff6438" : "white"}
                />
              </g>
            </svg>
            <div id="nav-item" className="w-full text-start">
              <span
                id="nav-link"
                className={`${
                  activeLink == "/offers" ? "!text-[#ff6438]" : "text-white"
                } dssams40014 w-full`}
                href="offers"
              >
                Teklifler
              </span>
            </div>
          </div>
          <Image src={RightArrowSVG} alt="logo" width={16} height={16} />
        </button>

        <button
          onClick={() => handleLinkClick("/mesajlar")}
          className="flex justify-between items-center h-1/3 w-full nav_button px-5"
        >
          <div className=" flex justify-between  gap-4 items-center align-middle !w-[174px]  ">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill={` ${activeLink == "/mesajlar" ? "#FF6438" : "white"}`}
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity={` ${activeLink == "/mesajlar" ? "1" : "0.5"}`}>
                <path
                  d="M15.3917 14.0251L15.7167 16.6584C15.8 17.3501 15.0583 17.8334 14.4667 17.4751L11.5833 15.7584C11.3833 15.6417 11.3333 15.3917 11.4417 15.1917C11.8583 14.4251 12.0833 13.5584 12.0833 12.6917C12.0833 9.64175 9.46667 7.15841 6.25 7.15841C5.59167 7.15841 4.95 7.25841 4.35 7.45841C4.04167 7.55841 3.74167 7.27508 3.81667 6.95842C4.575 3.92508 7.49167 1.66675 10.975 1.66675C15.0417 1.66675 18.3333 4.74175 18.3333 8.53341C18.3333 10.7834 17.175 12.7751 15.3917 14.0251Z"
                  fill={` ${activeLink == "/mesajlar" ? "#FF6438" : "white"}`}
                />
                <path
                  d="M10.8333 12.6918C10.8333 13.6834 10.4667 14.6001 9.85 15.3251C9.025 16.3251 7.71667 16.9668 6.25 16.9668L4.075 18.2584C3.70834 18.4834 3.24167 18.1751 3.29167 17.7501L3.5 16.1084C2.38334 15.3334 1.66667 14.0918 1.66667 12.6918C1.66667 11.2251 2.45001 9.93345 3.65 9.16678C4.39167 8.68345 5.28334 8.40845 6.25 8.40845C8.78334 8.40845 10.8333 10.3251 10.8333 12.6918Z"
                  fill={` ${activeLink == "/mesajlar" ? "#FF6438" : "white"}`}
                />
              </g>
            </svg>

            <div id="nav-item" className="w-full text-start">
              <span
                id="nav-link"
                className={`${
                  activeLink == "/mesajlar" ? "!text-[#ff6438]" : "text-white"
                } dssams40014 w-full`}
                href="mesajlar"
              >
                Mesajlar
              </span>
            </div>
          </div>
          <Image src={RightArrowSVG} alt="logo" width={16} height={16} />
        </button>
      </ul>

      <ul className="w-[250px] h-[200px]  flex-col rounded-2xl bg-[#1C1C1C] mt-[17px] pt-[8px] ">
        <button
          onClick={() => handleLinkClick("/profile-edit")}
          className="flex justify-between items-center h-1/3 w-full nav_button px-5"
        >
          <div className="flex justify-between gap-4 align-bottom text-start">
            {user && (
              <>
                <div>
                  <Image
                    src={user.profilePhoto}
                    width={36}
                    className="rounded-full"
                    height={36}
                    alt="user Photo"
                  ></Image>
                </div>
                <div>
                  <div className="dmsans40014">{user.name}</div>
                  <div className="dmsans40012 opacity-50">
                    {user.phoneNumber}
                  </div>
                </div>
              </>
            )}
          </div>
        </button>
        <button
          onClick={() => handleLinkClick("/profile-edit")}
          className="flex justify-between items-center h-1/3 w-full nav_button px-5"
        >
          <div className=" flex justify-between  gap-4 items-center align-middle !w-[174px]  ">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill={activeLink == "/profile-edit" ? "#ff6438" : "white"}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99992 10.6251C7.35825 10.6251 5.20825 8.47508 5.20825 5.83341C5.20825 3.19175 7.35825 1.04175 9.99992 1.04175C12.6416 1.04175 14.7916 3.19175 14.7916 5.83341C14.7916 8.47508 12.6416 10.6251 9.99992 10.6251ZM9.99992 2.29175C8.04992 2.29175 6.45825 3.88341 6.45825 5.83341C6.45825 7.78341 8.04992 9.37508 9.99992 9.37508C11.9499 9.37508 13.5416 7.78341 13.5416 5.83341C13.5416 3.88341 11.9499 2.29175 9.99992 2.29175Z"
                fill={activeLink == "/profile-edit" ? "#ff6438" : "white"}
              />
              <path
                d="M13.1833 18.9583C12.8666 18.9583 12.5666 18.8416 12.35 18.625C12.0916 18.3666 11.975 17.9916 12.0333 17.6L12.1916 16.475C12.2333 16.1833 12.4083 15.8416 12.6166 15.625L15.5666 12.675C16.75 11.4917 17.7916 12.1667 18.3 12.675C18.7333 13.1083 18.9583 13.575 18.9583 14.0416C18.9583 14.5166 18.7416 14.9583 18.3 15.4L15.3499 18.35C15.1416 18.5583 14.7916 18.7333 14.5 18.775L13.375 18.9333C13.3083 18.95 13.25 18.9583 13.1833 18.9583ZM16.925 13.2666C16.775 13.2666 16.6416 13.3667 16.45 13.5583L13.5 16.5083C13.475 16.5333 13.4333 16.6166 13.4333 16.65L13.2833 17.6916L14.325 17.5416C14.3583 17.5333 14.4416 17.4917 14.4666 17.4667L17.4166 14.5166C17.55 14.3833 17.7083 14.1916 17.7083 14.0416C17.7083 13.9166 17.6083 13.7417 17.4166 13.5583C17.2166 13.3583 17.0666 13.2666 16.925 13.2666Z"
                fill={activeLink == "/profile-edit" ? "#ff6438" : "white"}
              />
              <path
                d="M17.4333 16.0165C17.375 16.0165 17.3167 16.0082 17.2667 15.9916C16.1667 15.6832 15.2917 14.8082 14.9833 13.7082C14.8917 13.3749 15.0833 13.0333 15.4167 12.9416C15.75 12.8499 16.0917 13.0416 16.1833 13.3749C16.375 14.0582 16.9167 14.5999 17.6 14.7916C17.9333 14.8832 18.125 15.2332 18.0334 15.5582C17.9584 15.8332 17.7083 16.0165 17.4333 16.0165Z"
                fill={activeLink == "/profile-edit" ? "#ff6438" : "white"}
              />
              <path
                d="M2.8418 18.9583C2.50013 18.9583 2.2168 18.675 2.2168 18.3333C2.2168 14.775 5.70849 11.875 10.0002 11.875C10.9085 11.875 11.8085 12.0084 12.6501 12.2584C12.9835 12.3584 13.1668 12.7083 13.0668 13.0333C12.9668 13.3667 12.6168 13.55 12.2918 13.45C11.5585 13.2333 10.7918 13.1167 10.0002 13.1167C6.40015 13.1167 3.4668 15.45 3.4668 18.325C3.4668 18.675 3.18346 18.9583 2.8418 18.9583Z"
                fill={activeLink == "/profile-edit" ? "#ff6438" : "white"}
              />
            </svg>

            <div id="nav-item" className="w-full text-start">
              <span
                id="nav-link"
                className={`${
                  activeLink == "/profile-edit"
                    ? "!text-[#ff6438]"
                    : "text-white"
                } dssams40014 w-full`}
                href="home"
              >
                Profili Düzenle
              </span>
            </div>
          </div>
          <Image src={RightArrowSVG} alt="logo" width={16} height={16} />
        </button>

        <button
          onClick={() => handleLinkClick("/support")}
          className="flex justify-between items-center h-1/3 w-full nav_button px-5 border-t-[1px] border-[#2C2C2C]"
        >
          <div className=" flex justify-between  gap-4 items-center align-middle !w-[174px]  ">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill={activeLink === "/support" ? "#ff6438" : "white"}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0001 13.9584C9.66675 13.9584 9.33341 13.9334 9.01675 13.8751C7.25008 13.6167 5.64175 12.6001 4.62508 11.0917C3.91675 10.0251 3.54175 8.78341 3.54175 7.50008C3.54175 3.94175 6.44175 1.04175 10.0001 1.04175C13.5584 1.04175 16.4584 3.94175 16.4584 7.50008C16.4584 8.78341 16.0834 10.0251 15.3751 11.0917C14.3501 12.6084 12.7417 13.6168 10.9584 13.8834C10.6667 13.9334 10.3334 13.9584 10.0001 13.9584ZM10.0001 2.29175C7.12508 2.29175 4.79175 4.62508 4.79175 7.50008C4.79175 8.54175 5.09175 9.54175 5.65841 10.3917C6.48341 11.6084 7.77508 12.4251 9.20842 12.6334C9.74175 12.7251 10.2667 12.7251 10.7584 12.6334C12.2167 12.4251 13.5084 11.6001 14.3334 10.3834C14.9001 9.53341 15.2001 8.53341 15.2001 7.49174C15.2084 4.62507 12.8751 2.29175 10.0001 2.29175Z"
                fill={activeLink === "/support" ? "#ff6438" : "white"}
              />
              <path
                d="M5.3916 18.8249C5.27493 18.8249 5.1666 18.8082 5.04993 18.7832C4.50826 18.6582 4.0916 18.2416 3.9666 17.6999L3.67493 16.4749C3.65826 16.3999 3.59993 16.3415 3.5166 16.3165L2.1416 15.9916C1.62493 15.8666 1.2166 15.4832 1.07493 14.9749C0.933263 14.4666 1.07493 13.9166 1.44993 13.5416L4.69993 10.2916C4.83326 10.1582 5.0166 10.0916 5.19993 10.1082C5.38326 10.1249 5.54993 10.2249 5.65826 10.3832C6.48326 11.5999 7.77493 12.4249 9.2166 12.6332C9.74993 12.7249 10.2749 12.7249 10.7666 12.6332C12.2249 12.4249 13.5166 11.5999 14.3416 10.3832C14.4416 10.2249 14.6166 10.1249 14.7999 10.1082C14.9833 10.0916 15.1666 10.1582 15.2999 10.2916L18.5499 13.5416C18.9249 13.9166 19.0666 14.4666 18.9249 14.9749C18.7833 15.4832 18.3666 15.8749 17.8583 15.9916L16.4833 16.3165C16.4083 16.3332 16.3499 16.3916 16.3249 16.4749L16.0333 17.6999C15.9083 18.2416 15.4916 18.6582 14.9499 18.7832C14.4083 18.9166 13.8499 18.7249 13.4999 18.2999L9.99993 14.2749L6.49993 18.3082C6.2166 18.6416 5.8166 18.8249 5.3916 18.8249ZM5.07493 11.6916L2.33326 14.4332C2.25826 14.5082 2.2666 14.5916 2.28326 14.6416C2.2916 14.6832 2.33326 14.7666 2.43326 14.7832L3.80826 15.1082C4.34993 15.2332 4.7666 15.6499 4.8916 16.1916L5.18326 17.4166C5.20826 17.5249 5.2916 17.5582 5.3416 17.5749C5.3916 17.5832 5.47493 17.5916 5.54993 17.5082L8.7416 13.8332C7.32493 13.5582 6.02493 12.7999 5.07493 11.6916ZM11.2583 13.8249L14.4499 17.4916C14.5249 17.5832 14.6166 17.5832 14.6666 17.5665C14.7166 17.5582 14.7916 17.5166 14.8249 17.4082L15.1166 16.1832C15.2416 15.6416 15.6583 15.2249 16.1999 15.0999L17.5749 14.7749C17.6749 14.7499 17.7166 14.6749 17.7249 14.6332C17.7416 14.5916 17.7499 14.4999 17.6749 14.4249L14.9333 11.6832C13.9749 12.7916 12.6833 13.5499 11.2583 13.8249Z"
                fill={activeLink === "/support" ? "#ff6438" : "white"}
              />
              <path
                d="M11.575 10.7416C11.3584 10.7416 11.1 10.6833 10.7917 10.5L10 10.025L9.20837 10.4916C8.48337 10.925 8.00837 10.675 7.83337 10.55C7.65837 10.425 7.28337 10.05 7.47504 9.22497L7.67504 8.36663L7.00837 7.74995C6.6417 7.38328 6.50837 6.94163 6.63337 6.54163C6.75837 6.14163 7.12504 5.85829 7.6417 5.77495L8.53337 5.62496L8.95837 4.69163C9.20004 4.21663 9.57504 3.94995 10 3.94995C10.425 3.94995 10.8084 4.22497 11.0417 4.69997L11.5334 5.6833L12.3584 5.78329C12.8667 5.86663 13.2334 6.14995 13.3667 6.54995C13.4917 6.94995 13.3584 7.39162 12.9917 7.75829L12.3 8.44997L12.5167 9.22497C12.7084 10.05 12.3334 10.425 12.1584 10.55C12.0667 10.625 11.8667 10.7416 11.575 10.7416ZM8.00837 6.99164L8.58337 7.56661C8.85004 7.83328 8.98337 8.2833 8.90004 8.64996L8.7417 9.31662L9.40837 8.92495C9.7667 8.71662 10.25 8.71662 10.6 8.92495L11.2667 9.31662L11.1167 8.64996C11.0334 8.27496 11.1584 7.83328 11.425 7.56661L12 6.99164L11.275 6.86662C10.925 6.80828 10.575 6.54997 10.4167 6.2333L10 5.41663L9.58337 6.24996C9.43337 6.55829 9.08337 6.82497 8.73337 6.8833L8.00837 6.99164Z"
                fill={activeLink === "/support" ? "#ff6438" : "white"}
              />
            </svg>

            <div id="nav-item" className="w-full text-start">
              <span
                id="nav-link"
                className={`${
                  activeLink == "/support" ? "!text-[#ff6438]" : "text-white"
                } dssams40014 w-full`}
                href="support"
              >
                Destek
              </span>
            </div>
          </div>
          <Image src={RightArrowSVG} alt="logo" width={16} height={16} />
        </button>
      </ul>

      <ul className="w-[250px] h-[182px]  flex-col rounded-2xl bg-[#1C1C1C] mt-[17px] ">
        <button
          onClick={() => handleLinkClick("/posts")}
          className="flex justify-between items-center h-1/3 w-full  nav_button px-5"
        >
          <div className=" flex justify-between  gap-4 items-center align-middle !w-[174px]  ">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill={activeLink == "/posts" ? "#ff6438" : "white"}
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity={activeLink == "/posts" ? "1" : "0.5"}>
                <path
                  d="M6.89167 18.9584H3.52501C1.85001 18.9584 1.04167 18.1834 1.04167 16.5834V3.41675C1.04167 1.81675 1.85834 1.04175 3.52501 1.04175H6.89167C8.56667 1.04175 9.375 1.81675 9.375 3.41675V16.5834C9.375 18.1834 8.55834 18.9584 6.89167 18.9584ZM3.52501 2.29175C2.46667 2.29175 2.29167 2.57508 2.29167 3.41675V16.5834C2.29167 17.4251 2.46667 17.7084 3.52501 17.7084H6.89167C7.95001 17.7084 8.125 17.4251 8.125 16.5834V3.41675C8.125 2.57508 7.95001 2.29175 6.89167 2.29175H3.52501Z"
                  fill={activeLink == "/posts" ? "#ff6438" : "white"}
                />
                <path
                  d="M16.475 9.37508H13.1083C11.4333 9.37508 10.625 8.63341 10.625 7.10008V3.31675C10.625 1.78341 11.4417 1.04175 13.1083 1.04175H16.475C18.15 1.04175 18.9583 1.78341 18.9583 3.31675V7.09175C18.9583 8.63341 18.1417 9.37508 16.475 9.37508ZM13.1083 2.29175C11.9917 2.29175 11.875 2.60841 11.875 3.31675V7.09175C11.875 7.80841 11.9917 8.11675 13.1083 8.11675H16.475C17.5917 8.11675 17.7083 7.80008 17.7083 7.09175V3.31675C17.7083 2.60008 17.5917 2.29175 16.475 2.29175H13.1083Z"
                  fill={activeLink == "/posts" ? "#ff6438" : "white"}
                />
                <path
                  d="M16.475 18.9583H13.1083C11.4333 18.9583 10.625 18.1417 10.625 16.475V13.1083C10.625 11.4333 11.4417 10.625 13.1083 10.625H16.475C18.15 10.625 18.9583 11.4417 18.9583 13.1083V16.475C18.9583 18.1417 18.1417 18.9583 16.475 18.9583ZM13.1083 11.875C12.125 11.875 11.875 12.125 11.875 13.1083V16.475C11.875 17.4583 12.125 17.7083 13.1083 17.7083H16.475C17.4583 17.7083 17.7083 17.4583 17.7083 16.475V13.1083C17.7083 12.125 17.4583 11.875 16.475 11.875H13.1083Z"
                  fill={activeLink == "/posts" ? "#ff6438" : "white"}
                />
              </g>
            </svg>

            <div id="nav-item" className="w-full text-start">
              <span
                id="nav-link"
                className={`${
                  activeLink == "/posts" ? "!text-[#ff6438]" : "text-white"
                } dssams40014 w-full`}
                href="posts"
              >
                İlanlarım
              </span>
            </div>
          </div>
          <Image src={RightArrowSVG} alt="logo" width={16} height={16} />
        </button>

        <button
          onClick={() => handleLinkClick("/cars")}
          className="flex justify-between items-center h-1/3 w-full  nav_button px-5"
        >
          <div className=" flex justify-between  gap-4 items-center align-middle !w-[174px]  ">
            <svg
              opacity={"0.5"}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.4998 1.6665V9.99984C12.4998 10.9165 11.7498 11.6665 10.8332 11.6665H1.6665V4.99984C1.6665 3.15817 3.15817 1.6665 4.99984 1.6665H12.4998Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.3332 11.6665V14.1665C18.3332 15.5498 17.2165 16.6665 15.8332 16.6665H14.9998C14.9998 15.7498 14.2498 14.9998 13.3332 14.9998C12.4165 14.9998 11.6665 15.7498 11.6665 16.6665H8.33317C8.33317 15.7498 7.58317 14.9998 6.6665 14.9998C5.74984 14.9998 4.99984 15.7498 4.99984 16.6665H4.1665C2.78317 16.6665 1.6665 15.5498 1.6665 14.1665V11.6665H10.8332C11.7498 11.6665 12.4998 10.9165 12.4998 9.99984V4.1665H14.0332C14.6332 4.1665 15.1832 4.49151 15.4832 5.00818L16.9082 7.49984H15.8332C15.3748 7.49984 14.9998 7.87484 14.9998 8.33317V10.8332C14.9998 11.2915 15.3748 11.6665 15.8332 11.6665H18.3332Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.66667 18.3333C7.58714 18.3333 8.33333 17.5871 8.33333 16.6667C8.33333 15.7462 7.58714 15 6.66667 15C5.74619 15 5 15.7462 5 16.6667C5 17.5871 5.74619 18.3333 6.66667 18.3333Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.3332 18.3333C14.2536 18.3333 14.9998 17.5871 14.9998 16.6667C14.9998 15.7462 14.2536 15 13.3332 15C12.4127 15 11.6665 15.7462 11.6665 16.6667C11.6665 17.5871 12.4127 18.3333 13.3332 18.3333Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.3333 10V11.6667H15.8333C15.375 11.6667 15 11.2917 15 10.8333V8.33333C15 7.875 15.375 7.5 15.8333 7.5H16.9083L18.3333 10Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div id="nav-item" className="w-full text-start">
              <span
                id="nav-link"
                className={`${
                  activeLink == "/cars" ? "!text-[#ff6438]" : "text-white"
                } dssams40014 w-full`}
                href="cars"
              >
                Araçlarım
              </span>
            </div>
          </div>
          <Image src={RightArrowSVG} alt="logo" width={16} height={16} />
        </button>
        <button
          onClick={() => handleLinkClick("/reviews")}
          className="flex justify-between items-center h-1/3 w-full  nav_button px-5"
        >
          <div className=" flex justify-between  gap-4 items-center align-middle !w-[174px]  ">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill={activeLink === "/reviews" ? "#ff6438" : "white"}
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity={activeLink === "/reviews" ? "1" : "0.5"}>
                <path
                  d="M10.0084 18.9581C9.48341 18.9581 8.95841 18.7831 8.55008 18.4331L7.2334 17.2998C7.10006 17.1831 6.76674 17.0664 6.59174 17.0664H5.15006C3.91673 17.0664 2.91674 16.0665 2.91674 14.8332V13.4081C2.91674 13.2331 2.80007 12.9081 2.6834 12.7748L1.5584 11.4498C0.875065 10.6415 0.875065 9.36648 1.5584 8.55814L2.6834 7.23317C2.80007 7.09984 2.91674 6.77483 2.91674 6.59983V5.17476C2.91674 3.94143 3.91673 2.94148 5.15006 2.94148H6.59174C6.76674 2.94148 7.10006 2.81646 7.2334 2.70813L8.55008 1.5748C9.36674 0.874805 10.6417 0.874805 11.4584 1.5748L12.7751 2.70813C12.9084 2.82479 13.2417 2.94148 13.4167 2.94148H14.8334C16.0667 2.94148 17.0667 3.94143 17.0667 5.17476V6.59149C17.0667 6.76649 17.1917 7.09984 17.3084 7.23317L18.4334 8.5498C19.1334 9.36647 19.1334 10.6415 18.4334 11.4581L17.3084 12.7748C17.1917 12.9081 17.0751 13.2414 17.0751 13.4164V14.8332C17.0751 16.0665 16.0751 17.0664 14.8417 17.0664H13.4251C13.2501 17.0664 12.9167 17.1915 12.7834 17.2998L11.4667 18.4331C11.0501 18.7831 10.5251 18.9581 10.0084 18.9581ZM5.15006 4.18314C4.6084 4.18314 4.16674 4.62475 4.16674 5.16642V6.59149C4.16674 7.06649 3.94173 7.6748 3.64173 8.03314L2.51673 9.35811C2.22506 9.69978 2.22506 10.2915 2.51673 10.6331L3.64173 11.9581C3.95007 12.3248 4.17508 12.9331 4.17508 13.3998V14.8248C4.17508 15.3665 4.61674 15.8081 5.1584 15.8081H6.60008C7.08341 15.8081 7.69175 16.0331 8.05841 16.3498L9.37507 17.4831C9.71674 17.7748 10.3167 17.7748 10.6584 17.4831L11.9751 16.3498C12.3417 16.0415 12.9501 15.8081 13.4334 15.8081H14.8501C15.3917 15.8081 15.8334 15.3665 15.8334 14.8248V13.4081C15.8334 12.9248 16.0584 12.3164 16.3751 11.9498L17.5001 10.6331C17.7917 10.2915 17.7917 9.69143 17.5001 9.34977L16.3751 8.03314C16.0667 7.66647 15.8334 7.05814 15.8334 6.5748V5.15808C15.8334 4.61641 15.3917 4.1748 14.8501 4.1748H13.4334C12.9584 4.1748 12.3417 3.94978 11.9751 3.63311L10.6584 2.49979C10.3167 2.20813 9.71674 2.20813 9.37507 2.49979L8.05841 3.63311C7.69175 3.94145 7.08341 4.1748 6.60008 4.1748H5.15006V4.18314Z"
                  fill={activeLink === "/reviews" ? "#ff6438" : "white"}
                />
                <path
                  d="M11.6663 14.1417H10.183C9.83297 14.1417 9.30796 14.0334 8.99962 13.725L7.84964 12.8417L8.6163 11.85L9.82464 12.7833C9.90797 12.8417 10.058 12.8833 10.183 12.8833H11.6663C11.8663 12.8833 12.108 12.7084 12.1496 12.5334L13.0996 9.64167C13.1246 9.56667 13.1246 9.51673 13.1163 9.50006C13.0996 9.47506 13.0413 9.45002 12.958 9.45002H11.3996C11.0996 9.45002 10.8246 9.32508 10.6246 9.10008C10.433 8.87508 10.3413 8.57508 10.383 8.26675L10.583 7.00841C10.5996 6.94174 10.5496 6.85835 10.4996 6.84168C10.4496 6.83335 10.3746 6.85004 10.3496 6.87504L8.75798 9.24168L7.71631 8.54171L9.31629 6.16673C9.64963 5.66673 10.3496 5.45008 10.9163 5.65841C11.5496 5.86674 11.958 6.58342 11.8163 7.23342L11.6663 8.18333H12.958C13.4496 8.18333 13.883 8.39172 14.1413 8.75839C14.3913 9.11672 14.4496 9.5834 14.2913 10.0251L13.358 12.8584C13.183 13.5751 12.4413 14.1417 11.6663 14.1417Z"
                  fill={activeLink === "/reviews" ? "#ff6438" : "white"}
                />
                <path
                  d="M7.4167 13.7165H7.02503C5.80003 13.7165 5.6167 12.8581 5.6167 12.3498V8.53318C5.6167 8.02485 5.80003 7.1665 7.02503 7.1665H7.4167C8.6417 7.1665 8.82504 8.02485 8.82504 8.53318V12.3498C8.82504 12.8581 8.6417 13.7165 7.4167 13.7165ZM6.88338 12.4581C6.91672 12.4665 6.96671 12.4665 7.03338 12.4665H7.42504C7.49171 12.4665 7.5417 12.4665 7.57504 12.4581C7.57504 12.4331 7.58338 12.3998 7.58338 12.3498V8.53318C7.58338 8.48318 7.58337 8.44985 7.57504 8.42485C7.5417 8.41651 7.49171 8.4165 7.42504 8.4165H7.03338C6.96671 8.4165 6.91672 8.41651 6.88338 8.42485C6.88338 8.44985 6.87504 8.48318 6.87504 8.53318V12.3498C6.87504 12.3998 6.87505 12.4331 6.88338 12.4581Z"
                  fill={activeLink === "/reviews" ? "#ff6438" : "white"}
                />
              </g>
            </svg>

            <div id="nav-item" className="w-full text-start">
              <span
                id="nav-link"
                className={`${
                  activeLink == "/reviews" ? "!text-[#ff6438]" : "text-white"
                } dssams40014 w-full`}
                href="reviews"
              >
                Değerlendirmelerim
              </span>
            </div>
          </div>
          <Image src={RightArrowSVG} alt="logo" width={16} height={16} />
        </button>
        <button
          onClick={logoutHandler}
          className="btn_outline_black dmsans50014 mt-4"
        >
          <span className="opacity-50 text-white">Çıkış yap</span>
        </button>
      </ul>
    </nav>
  )
};

export default SideNavigation;
