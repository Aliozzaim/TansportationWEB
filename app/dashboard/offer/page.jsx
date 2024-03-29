"use client"

import { useEffect, useState } from "react"
import React from "react"
import OfferCard from "@/components/OfferCard.jsx"

const Offer = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json))
  }, [])
  return (
    <div className="mx-auto">
      <h1 className="mb-[24px] dmsans70024">Teklifler</h1>
      <div className="flex flex-row  flex-wrap justify-start items-center gap-[21px]">
        {data.slice(0, 2).map((offer) => (
          <OfferCard key={offer.id} {...offer} />
        ))}
      </div>
    </div>
  )
}

export default Offer
