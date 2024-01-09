"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import DollarSVG from "../../public/assets/images/dollar-circle.svg";
import TripSVG from "../../public/assets/images/offerTrip.svg";
const OfferCard = (props) => {
  const { offer } = props;
  const [offerData, setOfferData] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const checkApproval = () => {
    if (offerData?.approval === "approved") {
      setDisabled(true);
    }
  };

  useEffect(() => {
    setOfferData(props);
    checkApproval();
  }, [offer]);

  return (
    <div className="bg-[#1C1C1C] rounded-2xl  w-[397px]  h-[190px] pt-6 pl-6 pb-[26px]">
      <div
        // onClick={redirect("/chat")}
        className="w-full flex flex-row  gap-4 justify-start items-start cursor-pointer "
      >
        <div className="min-w-[42px] bg-slate-800 rounded-lg">
          <Image src={DollarSVG} width={42} height={42} alt="offerIMG" />
        </div>
        <div className="w-[275px]">
          <p className="dmsans40016 text-white ">
            {offerData?.desription
              ? offerData?.desription
              : "Profesyonel nakliye hizmetleriniz için sizin yanınızdayız"}
          </p>
          <div className="flex justify-between gap-1 mt-2 max-w-[275px]">
            <div className="flex flex-col  gap-1">
              <p className="dmsans40012 opacity-50">Nereden</p>
              <div>
                <p className="dmsans40014">
                  {offerData?.destination1 ? offerData?.destination1 : "Ankara"}
                </p>
              </div>
            </div>
            <div className="mx-[8px] self-end  pb-[10px]">
              <Image src={TripSVG} width={34} height={4} alt="tripSVG" />
            </div>
            <div className="flex flex-col  gap-1 mr-5">
              <p className="dmsans40012 opacity-50">Nereye</p>
              <div>
                <p className="dmsans40014">
                  {offerData?.destination2
                    ? offerData.destination2
                    : "Istanbul"}
                </p>
              </div>
            </div>
            <div className="flex flex-col  gap-1">
              <div className="flex gap-1  ">
                <Image src={DollarSVG} width={12} alt="DollarSVG" />
                <p className="dmsans40012 opacity-50">Fiyat</p>
              </div>
              <div className="min-w-[25px]">
                <p className="dmsans40014 ">
                  {offerData?.offerPrice ? offerData.offerPrice : "14.500"} TRY
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center gap-[20px] mt-[20px] mr-[23px]">
        <p
          disabled={disabled}
          className={` ${
            disabled ? "text-[#9CFF38]" : "text-white opacity-50"
          } dmsans40014 cursor-pointer`}
        >
          {disabled ? "Onaylandı" : "Onay bekliyor"}
        </p>
        <button className="btn_primary  !max-h-[32px] dmsans50013 !max-w-[70px]">
          İncele
        </button>
      </div>
    </div>
  )
};

export default OfferCard;
