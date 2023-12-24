// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import messagesImage from "../../public/assets/images/messages.png";
// import homeImage from "../../public/assets/images/home.png";
// import profileImage from "../../public/assets/images/profile.png";
// import truckImage from "../../public/assets/images/truck.png";
// import { useState } from "react";

// const Footer = () => {
//   const isAuthenticated = true;
//   const [activeLink, setActiveLink] = useState(null);

//   const handleLinkClick = (link) => {
//     setActiveLink(link);
//   };

//   return (
//     isAuthenticated && (
//       <nav className=" ">
//         <div className="footer bg-black">
//           <div>
//             <Link href="/" passHref legacyBehavior>
//               <a
//                 className={` ${activeLink === "home" ? "text-[#FF6438]" : ""}`}
//                 onClick={() => handleLinkClick("home")}
//               >
//                 <Image src={homeImage} alt="Home" width={24} height={24} />
//                 Anasayfa
//               </a>
//             </Link>
//           </div>
//           <div>
//             <Link href="/offer" passHref legacyBehavior>
//               <a
//                 className={` ${activeLink === "offer" ? "text-[#FF6438]" : ""}`}
//                 onClick={() => handleLinkClick("offer")}
//               >
//                 <Image
//                   src={truckImage}
//                   alt="Teklifler"
//                   width={24}
//                   height={24}
//                 />
//                 <span>Teklifler</span>
//               </a>
//             </Link>
//           </div>
//           <div>
//             <Link href="/messages" passHref legacyBehavior>
//               <a
//                 className={` ${
//                   activeLink === "messages" ? "text-[#FF6438]" : ""
//                 }`}
//                 onClick={() => handleLinkClick("messages")}
//               >
//                 <Image
//                   src={messagesImage}
//                   alt="Mesajlar"
//                   width={24}
//                   height={24}
//                 />
//                 <span>Mesajlar</span>
//               </a>
//             </Link>
//           </div>
//           <div>
//             <Link href="/profile" passHref legacyBehavior>
//               <a
//                 className={` ${
//                   activeLink === "profile" ? "text-[#FF6438]" : ""
//                 }`}
//                 onClick={() => handleLinkClick("profile")}
//               >
//                 <Image src={profileImage} alt="Profil" width={24} height={24} />
//                 Profil21
//               </a>
//             </Link>
//           </div>
//         </div>
//       </nav>
//     )
//   );
// };

// export default Footer;
