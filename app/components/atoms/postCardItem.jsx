"use client";
import { comment } from "postcss";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import StarSVG from "../../../public/assets/images/star.svg";
const postCardItem = (props) => {
  const {
    image,
    price,
    commentNumber,
    commentValue,
    destination1,
    destination2,
    postDescription,
  } = props?.post?.post;
  console.log(props.post.post);
  return (
    <Link href={props.post.url || "onclik"}>
      <div className="w-[170px] h-[273px] basis-[%20]">
        <Image
          src={image}
          width={170}
          height={160}
          alt="Post"
          className=" rounded-2xl"
        />
        <div className="mt-4 ">
          <div className="flex justify-start align-baseline ">
            <div className="border border-solid border-[#414141] rounded-[32px] w-[79px] h-[28px]     ">
              <p className="dmsans40012 py-[6px] text-center">{price} TRY</p>
            </div>
            <div className="border border-solid border-[#414141] rounded-[32px] w-[85px] h-[28px] dmsans4001114 gap-2 flex justify-center align-baseline items-center  ml-[6px]">
              <Image src={StarSVG} width={12} alt="Star" />
              <p className="dmsans4001114">
                {commentValue} ({commentNumber})
              </p>
            </div>
          </div>
          <div className="mt-[10px]">
            <p className="dmsans50014">{postDescription}</p>
            <p className="dmsans40013 opacity-50 mt-[6px]">
              {destination1}
              {" > "}
              {destination2}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default postCardItem;
