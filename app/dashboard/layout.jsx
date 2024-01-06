"use client"

import SideNavigation from "../components/SideNavigation"
import Header from "../components/Header"
import FooterPartial from "../components/FooterPartial"

export default function RootLayout({ children }) {
  return (
    <>
      <div className="flex flex-row pb-52">
        <SideNavigation />
        <div className="pl-[18.5rem] pt-16">{children}</div>
      </div>
      <footer className="border-t container mt-5 border-solid border-[#2C2C2C] py-[36px] rounded-b-2xl flex justify-start pl-[2rem] gap-[9rem] text-[16px] font-[400] leading-[21px] footer_t1 mb-10">
        <FooterPartial />
      </footer>
    </>
  )
}
