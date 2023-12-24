import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import messagesImage from "../assets/images/messages.png";
import homeImage from "../assets/images/home.png";
import profileImage from "../assets/images/profile.png";
import truckImage from "../assets/images/truck.png";

const Footer = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <footer>
      <div className="footer bg-black">
        <div>
          <NavLink
            to="/"
            className={` ${activeLink === "home" ? "text-[#FF6438]" : ""}`}
            onClick={() => handleLinkClick("home")}
          >
            <img src={homeImage} alt="Home" />
            Anasayfa
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/offer"
            className={` ${activeLink === "offer" ? "text-[#FF6438]" : ""}`}
            onClick={() => handleLinkClick("offer")}
          >
            <img src={truckImage} alt="Teklifler" />
            <span>Teklifler</span>
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/massages"
            className={` ${activeLink === "massages" ? "text-[#FF6438]" : ""}`}
            onClick={() => handleLinkClick("massages")}
          >
            <img src={messagesImage} alt="Mesajlar" />
            <span>Mesajlar</span>
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/profile"
            className={` ${activeLink === "profile" ? "text-[#FF6438]" : ""}`}
            onClick={() => handleLinkClick("profile")}
          >
            <img src={profileImage} alt="Profil" />
            Profil21
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
