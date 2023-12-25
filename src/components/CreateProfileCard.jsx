"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import CameraSVG from "../../public/assets/images/Camera.svg";
import UseTextInput from "../components/atoms/TestInput";
import UserProfile from "../../public/assets/images/userProfile.svg";
const CreateProfileCard = () => {
  const [file, setFile] = useState(null);
  const fileInput = useRef(null);
  const [userName, setUserName] = useState("");

  const handleUserName = (value) => {
    setUserName(value);
  };
  const uploadHandler = (e) => {
    const selectedFile = e.target.files[0];
    console.log(selectedFile);
    setFile(selectedFile);
  };

  return (
    <div className="card  !w-96 p-9 rounded-[36px] bg-[#1A1A1A] justify-items-center text-center mt-[52px] mb-[136px] mx-auto">
      <h3 className="dmsans40016 text-[#FF6438]">Hoş geldiniz</h3>
      <h3 className="dmsans70024">Profil Oluştur</h3>

      <div className=" relative file-upload !w-24 !h-24 rounded-full   bg-[#222222] mx-auto mt-9 mb-6">
        <input
          ref={fileInput}
          type="file"
          accept="image/*"
          name="file"
          onChange={uploadHandler}
          className=" bg-[#222222] "
          style={{ display: "none" }}
        />
        <label
          htmlFor="file"
          className="custom-file-input  absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2"
        >
          <Image src={file ? file : CameraSVG} alt="CameraSVG" />
        </label>
        <button
          className="btn_primary !w-[4.375rem] !h-8 !rounded-full dmsans50014  absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-1/2 z-10"
          onClick={() => fileInput.current.click()}
        >
          Ekle
        </button>
      </div>
      <div className="!max-w-[18.75rem] mt-6">
        <UseTextInput
          placeholder={"Adınız"}
          image={UserProfile}
          onValueChange={handleUserName}
        />
      </div>
      <button className="btn_primary !max-w-[18.75rem] !h-[50px] !rounded-full dmsans50016 mt-6">
        Tamamla
      </button>
    </div>
  );
};

export default CreateProfileCard;
