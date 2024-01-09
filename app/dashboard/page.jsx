"use client";
import React, { use } from "react";
import { useState, useEffect } from "react";
import PostCardItem from "../components/atoms/postCardItem";
import ArrowDown from "../../public/assets/images/Vector.png";
import Image from "next/image";
import CustomDropdown from "../components/atoms/DropDown.jsx";
const HomePage = () => {
  //feche posts data from api

  const [posts, setPosts] = useState([]);
  const [selectedCity1, setSelectedCity1] = useState(""); //nereden
  const [selectedCity2, setSelectedCity2] = useState(""); //nereye
  const [sortType, setSortType] = useState("");
  const sortOptions = [
    { name: "Fiyat" },
    { name: "En ucuz" },
    { name: "Yorum Sayısına Göre" },
  ];
  const cities = [
    { name: "Adana" },
    { name: "Adıyaman" },
    { name: "Afyonkarahisar" },
    { name: "Ağrı" },
    { name: "Aksaray" },
    { name: "Amasya" },
    { name: "Ankara" },
    { name: "Antalya" },
    { name: "Ardahan" },
    { name: "Artvin" },
    { name: "Aydın" },
    { name: "Balıkesir" },
    { name: "Bartın" },
    { name: "Batman" },
    { name: "Bayburt" },
    { name: "Bilecik" },
    { name: "Bingöl" },
    { name: "Bitlis" },
    { name: "Bolu" },
    { name: "Burdur" },
    { name: "Bursa" },
    { name: "Çanakkale" },
    { name: "Çankırı" },
    { name: "Çorum" },
    { name: "Denizli" },
    { name: "Diyarbakır" },
    { name: "Düzce" },
    { name: "Edirne" },
    { name: "Elazığ" },
    { name: "Erzincan" },
    { name: "Erzurum" },
    { name: "Eskişehir" },
    { name: "Gaziantep" },
    { name: "Giresun" },
    { name: "Gümüşhane" },
    { name: "Hakkâri" },
    { name: "Hatay" },
    { name: "Iğdır" },
    { name: "Isparta" },
    { name: "İstanbul" },
    { name: "İzmir" },
    { name: "Kahramanmaraş" },
    { name: "Karabük" },
    { name: "Karaman" },
    { name: "Kars" },
    { name: "Kastamonu" },
    { name: "Kayseri" },
    { name: "Kilis" },
    { name: "Kırıkkale" },
    { name: "Kırklareli" },
    { name: "Kırşehir" },
    { name: "Kocaeli" },
    { name: "Konya" },
    { name: "Kütahya" },
    { name: "Malatya" },
    { name: "Manisa" },
    { name: "Mardin" },
    { name: "Mersin" },
    { name: "Muğla" },
    { name: "Muş" },
    { name: "Nevşehir" },
    { name: "Niğde" },
    { name: "Ordu" },
    { name: "Osmaniye" },
    { name: "Rize" },
    { name: "Sakarya" },
    { name: "Samsun" },
    { name: "Şanlıurfa" },
    { name: "Siirt" },
    { name: "Sinop" },
    { name: "Sivas" },
    { name: "Şırnak" },
    { name: "Tekirdağ" },
    { name: "Tokat" },
    { name: "Trabzon" },
    { name: "Tunceli" },
    { name: "Uşak" },
    { name: "Van" },
    { name: "Yalova" },
    { name: "Yozgat" },
    { name: "Zonguldak" },
  ];

  const dummyData = async () => {
    try {
      const response = await fetch(
        "https://picsum.photos/v2/list?page=1&limit=5"
      );
      const data = await response.json();

      return data.map((item, index) => ({
        key: index + 1,
        post: {
          image: item.download_url,
          price: Math.floor(Math.random() * 1000) + 1,
          commentNumber: Math.floor(Math.random() * 50) + 1,
          commentValue: "4.5",
          postDescription: `Lorem ipsum dolor sit amet, consectetur elit ... `,
          destination1: "istanbul",
          destination2: "ankara",
        },
      }));
    } catch (error) {
      console.error("Error fetching dummy data:", error);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await dummyData();
        setPosts(data);
      } catch (error) {
        console.error("Error setting posts:", error);
        setPosts([]);
      }
    };

    fetchData();
  }, []);

  if (selectedCity1 & selectedCity2) {
    //fech data acordingly to selected city
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch(
    //       "https://picsum.photos/v2/list?page=1&limit=10"
    //     );
    //     const data = await response.json();
    //     setPosts(data);
    //   } catch (error) {
    //     console.error("Error fetching dummy data:", error);
    //     return [];
    //   }
    // };
  }
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //     const data = await res.json();
  //     setPosts(data);
  //   };
  //   fetchPosts();
  // }, []);

  const sortedPosts = [...posts];
  if (sortType === "Fiyat") {
    sortedPosts.sort((a, b) => b.post.price - a.post.price);
  } else if (sortType === "En ucuz") {
    sortedPosts.sort((a, b) => a.post.price - b.post.price);
  } else if (sortType === "Yorum Sayısına Göre") {
    sortedPosts.sort((a, b) => b.post.commentNumber - a.post.commentNumber);
  }
  return (
    <>
      <div>
        <p className="mb-[16px] text-xl font-[700] ">Öne çıkan ilanlar</p>
        <div className="flex flex-row flex-wrap justify-start space-x-[15px]">
          {posts.map((post) => (
            <PostCardItem key={post.id} post={post} />
          ))}
        </div>
      </div>
      <div>
        <div className="mb-[16px]">
          <p className="mb-[16px] dmsans70024">Filtrele</p>
          <div className="card flex space-x-2 justify-content-center">
            <div className="relative">
              <select
                className="h-[40px] w-[97px] bg-[#222222] dmsans50014 text-white border-none outline-none  text-end  rounded-[32px] px-4"
                value={sortType}
                onChange={(e) => setSortType(e.target.value)}
              >
                <option
                  value=""
                  disabled
                  defaultValue
                  className="text-end w-[97px] invisible"
                >
                  Sırala
                </option>
                {sortOptions.map((option) => (
                  <option
                    className={`dmsans50014 h-[40px] text-center w-[97px] `}
                    key={option.name}
                    value={option.name}
                  >
                    {option.name}
                  </option>
                ))}
              </select>
              <div className="arrow-down absolute top-1/2 left-[16px] transform -translate-y-1/2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 5.83325H17.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M5 10H15"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M8.33334 14.1667H11.6667"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
            <div className="relative">
              <select
                className="h-[40px] w-[117px]  bg-[#222222] dmsans50014 text-white border-none outline-none    rounded-[32px] pl-4"
                value={selectedCity1}
                onChange={(e) => setSelectedCity1(e.target.value)}
              >
                <option value="" disabled defaultValue>
                  Nereden
                </option>
                {cities.map((city) => (
                  <option
                    className=" dmsans50014 h-[40px]"
                    key={city.name}
                    value={city.name}
                  >
                    {city.name}
                  </option>
                ))}
              </select>
              <div className="arrow-down absolute top-1/2 right-[10px] transform -translate-y-1/2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5">
                    <path
                      d="M14.9333 6.81665H9.74167H5.06667C4.26667 6.81665 3.86667 7.78332 4.43334 8.34998L8.75 12.6667C9.44167 13.3583 10.5667 13.3583 11.2583 12.6667L12.9 11.025L15.575 8.34998C16.1333 7.78332 15.7333 6.81665 14.9333 6.81665Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div className="relative">
              <select
                className="h-[40px] w-[103px] bg-[#222222] dmsans50014 text-white border-none outline-none  text-start  rounded-[32px] pl-4"
                value={selectedCity2}
                onChange={(e) => setSelectedCity2(e.target.value)}
              >
                <option value="" disabled defaultValue className=" !w-[103px]">
                  Nereye
                </option>
                {cities.map((city) => (
                  <option
                    className=" dmsans50014 h-[40px]  !w-[103px]"
                    key={city.name}
                    value={city.name}
                  >
                    {city.name}
                  </option>
                ))}
              </select>
              <div className="arrow-down absolute top-1/2 right-[8px] transform -translate-y-1/2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5">
                    <path
                      d="M14.9333 6.81665H9.74167H5.06667C4.26667 6.81665 3.86667 7.78332 4.43334 8.34998L8.75 12.6667C9.44167 13.3583 10.5667 13.3583 11.2583 12.6667L12.9 11.025L15.575 8.34998C16.1333 7.78332 15.7333 6.81665 14.9333 6.81665Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-between gap-[14px]">
          {sortType === ""
            ? posts.map((post) => <PostCardItem key={post.id} post={post} />)
            : sortedPosts.map((post) => (
                <PostCardItem key={post.id} post={post} />
              ))}
        </div>
        <div className="flex flex-row flex-wrap justify-between gap-[14px]">
          {sortType === ""
            ? posts.map((post) => <PostCardItem key={post.id} post={post} />)
            : sortedPosts.map((post) => (
                <PostCardItem key={post.id} post={post} />
              ))}
        </div>
      </div>
    </>
  )
};

export default HomePage;
