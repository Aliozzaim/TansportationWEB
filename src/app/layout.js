// pages/layout.js

import { Inter } from "next/font/google";
import "./globals.css";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Onboard from "./Onboard";
import CreateProfileCard from "../components/CreateProfileCard";
import SideNavigation from "../components/SideNavigation.jsx";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,100;9..40,200;9..40,300;9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&family=Inter:wght@400;500;700&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:wght@300;400;500;600;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="max-w-[1440px] mx-auto px-[7rem] pt-23px ">
          <PrimeReactProvider>
            <Header />
            {children}
            {/* <Onboard /> */}
            {/* <CreateProfileCard /> */}
            <SideNavigation />
            <Footer />
          </PrimeReactProvider>
        </div>
      </body>
    </html>
  );
}
