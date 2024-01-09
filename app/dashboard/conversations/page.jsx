"use client"

import { useEffect, useState } from "react"
import React from "react"
import Chat from "@/components/Chat"

const Offer = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json))
  }, [])
  return (
    <div className="bg-black-50 mx-auto my-0">
      <h1 className="mb-[24px] dmsans70024">Mesajlar</h1>
      <div className="flex flex-row  flex-wrap justify-start items-center gap-[21px]">
        <Chat />
      </div>
    </div>
  )
}

export default Offer
