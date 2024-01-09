"use client"
import React, { useState, useEffect, useRef, useLayoutEffect } from "react"
import ChatInfoCard from "./atoms/chatInfoCard.jsx"
import Image from "next/image"
import userImage from "../../public/assets/images/userImage.png"
import ArrowRightSvg from "../../public/assets/images/arrow-right.svg"
import MoreSVG from "../../public/assets/images/more.svg"
import paperPlaneSVG from "../../public/assets/images/paper-plane.svg"
import addSVG from "../../public/assets/images/add.svg"

const Messages = () => {
  const [messages, setMessages] = useState([])
  const [user, setUser] = useState({ id: 1, name: "User1" })
  const [offer, setOffer] = useState("")
  const [newMessage, setNewMessage] = useState("")
  const [image, setImage] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)

  const handleSendMessage = (e) => {
    e.preventDefault()

    if ((newMessage.trim() !== "" || image) && user) {
      const newMessageObject = {
        id: messages.length + 1,
        senderUser: user,
        content: newMessage,
        image: image,
        contentType: image ? "image" : "text/plain",
        sentTime: new Date(),
      }

      setMessages([...messages, newMessageObject])
      setNewMessage("")
      setImage(null)
    }
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImage(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const openImageModal = (selectedImageUrl) => {
    setSelectedImage(selectedImageUrl)
    setModalVisible(true)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
    setModalVisible(false)
  }

  const handleModalClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeImageModal()
    }
  }
  // Add other state variables as needed

  // Fetch the messages

  // useEffect(() => {
  //   fetch("/api/messages")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMessages(data);
  //     });
  // }, []);

  useEffect(() => {
    setMessages(exampleMessages)
  }, [])
  const exampleMessages = [
    {
      id: 1,
      senderUser: { id: 1, name: "User1" },
      content: "Hello lorem!",
      contentType: "text/plain",
      sentTime: new Date(2024, 0, 10, 12, 30), // Add sentTime for the first message
    },
    {
      id: 3,
      senderUser: { id: 1, name: "User1" },
      content: "How are you?",
      contentType: "text/plain",
      sentTime: new Date(2024, 0, 10, 12, 35), // Add sentTime for the second message
    },
    {
      id: 4,
      senderUser: { id: 2, name: "User2" },
      content: "Another text message",
      contentType: "text/plain",
      sentTime: new Date(2024, 0, 10, 12, 40), // Add sentTime for the third message
    },
  ]

  return (
    <>
      {/* Modal for displaying selected image */}
      {modalVisible && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center modal-overlay"
          onClick={handleModalClick}
        >
          <div className="max-w-[80%] max-h-[80%] overflow-hidden">
            <Image
              src={selectedImage}
              width={800} // Adjust width and height as needed
              height={600}
              alt="Selected Image"
            />
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className="flex">
        <div className="w-[536px] rounded-[32px] h-[676px] bg-[#1A1A1A] pt-[32px]">
          <div className="flex justify-between border-b border-solid border-gray-700 px-9 pb-[22px]">
            <div className="flex items-center gap-4">
              <Image
                className="rounded-full"
                src={userImage}
                width={28}
                height={28}
                alt="User Image"
              />
              <p className="text-white dmsans40014">{user?.name || "Burak"}</p>
            </div>
            <Image
              src={MoreSVG}
              alt="User Image"
              width={20}
              height={20}
            ></Image>
          </div>
          <div className="">
            <div className="flex justify-between text-start border-b border-solid border-gray-700 px-9 py-[16px]   ">
              <div>
                <div className=" dmsans40014">
                  {offer?.description?.slice(0, 45) ||
                    "Profesyonel nakliye hizmeti için bize ulaşın"}
                  ...
                </div>

                <p className="dmsans40014 opacity-50 mt-1">
                  {offer?.destination || "Ankara > Istanbul"} •{" "}
                  {offer?.price || "14.500"} TRY
                </p>
              </div>

              <Image
                src={ArrowRightSvg}
                alt="User Image"
                width={16}
                height={16}
              ></Image>
            </div>

            <div className="h-[363px] overflow-auto pt-[16px] flex flex-col px-9 ">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`px-4 py-3 rounded-2xl dmsans40016 max-w-[48%] ${
                    user.id == message?.senderUser.id
                      ? "border border-solid border-gray-700  !bg-[#2C2C2C]  bg-gradient-to-b from-[#222222] to-[#2C2C2C] self-end "
                      : "bg-gradient-to-b from-red-600 via-red-500 to-red-800 text-left"
                  }`}
                  onClick={() => {
                    if (message.contentType === "image") {
                      openImageModal(message.image)
                    }
                  }}
                >
                  {message.contentType == "image" ? (
                    <>
                      <Image
                        src={message.image}
                        width={100}
                        height={100}
                        alt="Image"
                      />
                    </>
                  ) : (
                    <>
                      <p className="dmsans40012 ">{message.content}</p>
                    </>
                  )}
                  <p className="dmsans40012 opacity-50 mt-[8px]">
                    {message.sentTime?.toLocaleString("tr-TR", {
                      month: "long",
                      day: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                    })}
                  </p>
                </div>
              ))}
            </div>
            <div className=" flex justify-between items-center bg-black border-t border-b border-[#2C2C2C] border-solid  px-[36px] py-3 ">
              <div className="dmsans40016 ">
                <p className="">
                  Son teklif:
                  <span className="text-[#FF6438] ml-1">
                    {offer?.newPrice || "1.450 "}
                    TRY
                  </span>
                </p>
                <p className="dmsans40012 opacity-50">
                  {offer?.newPrice?.offerTime || "14 Ağustos, 21:50"}
                </p>
              </div>
              <div className="">
                <button className="border border-solid border-gray-700 dmsans50014  bg-gradient-to-b from-[#222222] to-[#2C2C2C]  rounded-lg bg-[#2C2C2C] !h-[30px]  !px-[10px] !py-[6px]">
                  İncele
                </button>
                <button className="btn_primary !w-[84px] !h-[30px] !rounded-lg px-[10px] py-[6px] dmsans50014 ml-2">
                  Yeni teklif
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="px-9 mt-[16px] ">
              <form
                onSubmit={handleSendMessage}
                className="flex justify-between items-center"
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="sr-only"
                  id="imageInput"
                />
                <label htmlFor="imageInput" className="cursor-pointer">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 17H8C7.45333 17 7 16.5467 7 16C7 15.4533 7.45333 15 8 15H24C24.5467 15 25 15.4533 25 16C25 16.5467 24.5467 17 24 17Z"
                      fill="#FF6438"
                    />
                    <path
                      d="M16 25C15.4533 25 15 24.5467 15 24V8C15 7.45333 15.4533 7 16 7C16.5467 7 17 7.45333 17 8V24C17 24.5467 16.5467 25 16 25Z"
                      fill="#FF6438"
                    />
                  </svg>
                </label>

                <input
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="dmsans40014 bg-[#2C2C2C] rounded-[32px] w-[370px] h-[55px] px-[16px] py-[10px] ml-[16px] outline-none"
                  placeholder="Mesajınızı yazın..."
                />

                <button type="submit" className="">
                  <Image
                    src={paperPlaneSVG}
                    alt="send message icon"
                    width={24}
                    height={24}
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Messages
