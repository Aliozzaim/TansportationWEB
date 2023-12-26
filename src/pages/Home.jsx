"use client";
import React, { use } from "react";
import { useState, useEffect } from "react";
import PostCardItem from "../components/atoms/postCardItem";

const HomePage = () => {
  //feche posts data from api

  const [posts, setPosts] = useState([]);

  const dummyData = async () => {
    try {
      const response = await fetch(
        "https://picsum.photos/v2/list?page=1&limit=10"
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
          trip: "istanbul > ankara",
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

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //     const data = await res.json();
  //     setPosts(data);
  //   };
  //   fetchPosts();
  // }, []);
  return (
    <div className="bg-black-50 mx-auto my-0 flex justify-center !max-w-[1020px]   ">
      <div className="flex flex-row flex-wrap justify-between gap-[14px] ">
        {posts.map((post) => (
          <PostCardItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
