"use client";
import React, { useState } from "react";
import Image from "next/image";

const UseTextInput = ({ placeholder, image, onValueChange }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);

    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  return (
    <div className="relative h-[55px] rounded-full bg-[#222222] flex justify-start pl-[6px] mt-8">
      {image && (
        <Image
          className="absolute top-1/2 left-5 transform -translate-y-1/2"
          src={image}
          alt="Icon"
        />
      )}
      <input
        type="text"
        inputMode="numeric"
        id="phone"
        name="phone"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="outline-none border-none bg-[#222222] dmsans40016 text-start ml-[50px] w-11/12 rounded-r-[32px]"
      />
    </div>
  );
};

export default UseTextInput;
