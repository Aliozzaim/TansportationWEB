"use client"

import { useEffect, useState } from "react"
import React from "react"
import Chat from "@/components/Chat"
import ChatInfoCard from "@/components/atoms/chatInfoCard"

const Offer = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json))
  }, [])
  return (
    <>
      <h1 className="dmsans70024">Mesajlar</h1>
      <div className="flex flex-row flex-wrap justify-start items-center gap-[21px]">
        <Chat />
      </div>
    </>
  )
}

export default Offer
