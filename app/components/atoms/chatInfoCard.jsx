"use client"
import React from "react"
import Image from "next/image"
import userImage from "../../../public/assets/images/userImage.png"
import offerImage from "../../../public/assets/images/offerImage.png"

const ChatInfoCard = (props) => {
  const { senderUser, timestamp, messages, offer, selected } = props
  const lastMessage =
    messages && messages.length > 0 ? messages[messages.length - 1] : null

  const messagePreview = `${lastMessage?.slice(0, 45)}...`

  return (
    <div>
      {selected && (
        <div className="bg-[#FF6438] absolute left-[24.2rem] mt-2 mr-4 z-50 w-[4px] h-[40px] rounded-[32px]" />
      )}
      <div className=" flex flex-row border-b border-solid relative border-gray-800 w-[350px] pt-2">
        <div className="relative bottom-1 left-0 !h-[48px] w-[48px] mr-4 mb-4">
          <Image
            className="rounded-s-lg"
            src={offer?.image || offerImage}
            alt="Picture of the user"
            width={48}
            height={48}
          ></Image>
          <Image
            src={senderUser?.image || userImage}
            className="  absolute  bottom-0  right-0 mr-[0.6rem] transform translate-x-1/2 translate-y-1/2  border border-solid border-white border-opacity-80 rounded-full"
            alt="Picture of the user"
            width={24}
            height={24}
          ></Image>
        </div>
        <div>
          <div className="flex flex-col items-start justify-center">
            <p className="text-[14px] font-[400] leading-[21px]">
              {/* {`${offer?.description}: ${offer?.description.slice(0, 45)}...`} */}
              Profesyonel nakliye hizmeti...
            </p>
            <div className="flex justify-center items-center space-x-1 text-[14px] font-[400] leading-[17px]">
              <p className="text-[#FF6438]">{senderUser?.name || "Burak"}:</p>
              <p className="text-white opacity-50">
                Merhaba, nasılsınız? Size bir konuda...
              </p>
            </div>
          </div>
        </div>
        <p className="dmsans50012 absolute top-0 right-0 opacity-50 text-center">
          {lastMessage?.timestamp || "9 Eylül, 19:23"}
        </p>
      </div>
    </div>
  )
}

export default ChatInfoCard
