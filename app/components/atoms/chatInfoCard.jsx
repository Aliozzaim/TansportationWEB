"use client";
import { useEffect } from "react";
import React from "react";
import Image from "next/image";
import userImage from "../../../public/assets/images/userImage.png";
import offerImage from "../../../public/assets/images/offerImage.png";

const ChatInfoCard = (props) => {
  const { senderUser, timestamp, messages, offer } = props;
  const lastMessage =
    messages && messages.length > 0 ? messages[messages.length - 1] : null;

  const messagePreview = `${lastMessage?.slice(0, 45)}...`;

  return (
    <div className=" flex flex-row gap-4 py-[20px] border-b border-solid border-gray-800 mb-4 w-[350px]">
      <div className="relative !h-[48px] w-[48px]">
        <Image
          className="rounded-s-lg"
          src={offer?.image || offerImage}
          alt="Picture of the user"
          width={48}
          height={48}
        ></Image>
        <Image
          src={senderUser?.image || userImage}
          className="  absolute  bottom-0  right-[12px] transform translate-x-1/2 translate-y-1/2  border border-solid border-white border-opacity-80 rounded-full"
          alt="Picture of the user"
          width={24}
          height={24}
        ></Image>
      </div>
      <div>
        <div className="flex  mb-1 justify-end items-end">
          <p className="dmsans40016 mr-[5px]">
            {/* {`${offer?.description}: ${offer?.description.slice(0, 45)}...`} */}
            Profesyonel nakliye hizmeti...
          </p>
          <p className="dmsans50012 opacity-50 text-end">
            {lastMessage?.timestamp || "9 Eylül, 19:23"}
          </p>
        </div>
        <div className="text-[#FF6438] dmsans40014 flex gap-[2px]">
          <p>{senderUser?.name || "Burak"}:</p>
          <p className="text-white opacity-50">
            Merhaba, nasılsınız? Size bir konuda...
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatInfoCard;
