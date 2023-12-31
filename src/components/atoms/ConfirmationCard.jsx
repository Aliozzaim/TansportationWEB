"use client";
import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import ReactCodeInput from "react-code-input";
import auth from "../../app/firebase/firebase-config.js";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const ConfirmationCard = (props) => {
  const { phoneNumber } = props;
  const [visible, setVisible] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [confirmation, setConfirmation] = useState(null);
  const [remainingTime, setRemainingTime] = useState(59);
  const [resendDisabled, setResendDisabled] = useState(false);

  const SetUpRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier("recaptcha-container", {
      size: "invisible",
      callback: (response) => {
        onSignInSubmit();
      },
      appVerificationDisabledForTesting: true,
    });
  };

  const onSignInSubmit = () => {
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        setConfirmationResult(confirmationResult);
        const code = window.prompt("Enter OTP");
        confirmationResult
          .confirm(code)
          .then((result) => {
            const user = result.user;
            console.log("user", user);
          })
          .catch((error) => {});
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleSendCode = async () => {
    try {
      SetUpRecaptcha();
      onSignInSubmit();

      setResendDisabled(true);
      const intervalId = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime === 1) {
            clearInterval(intervalId);
            setResendDisabled(false);
          }
          return prevTime - 1;
        });
      }, 1000);
    } catch (error) {
      console.error("Error sending code:", error);
    }
  };

  const handleVerifyCode = async () => {
    try {
      await confirmationResult.confirm(verificationCode);
      console.log("Phone number verified!");
    } catch (error) {
      console.error("Error verifying code:", error);
    }
  };
  const inputElementStyle = {
    className: "dmsans70024",
    inputStyle: {
      margin: "0px",
      MozAppearance: "",
      width: "48px",
      borderRadius: "16px",
      fontSize: "24px",
      lineheight: "31px",
      height: "48px",
      backgroundColor: "#212121",
      textAlign: "center",
      marginRight: "4px",
      marginLeft: "4px",
      color: "white ",
      border: "none",
      outline: "none",
    },
  };

  return (
    <div className="w-[398px]  rounded-[32px] bg-[#1A1A1A] pl-[30px] pt-[36px] ">
      <div className="card flex justify-content-center ">
        <div className=" items-start">
          <p className="dmsans40018">6 haneli kod</p>
          <p className="dmsans40016 opacity-50 mt-2">
            Doğrulama kodunuz {phoneNumber} <br /> adresine başarıyla gönderildi
          </p>
          <div className="flex flex-nowrap mt-[23px]">
            <ReactCodeInput
              type="number"
              fields={3}
              {...inputElementStyle}
              className=" "
              onChange={(value) => setVerificationCode(value)}
            />
            <div className=" mx-[1px]  flex flex-row justify-center text-center align-middle py-[13px] ">
              <p className="w-[9px] h-[21px] opacity-50 dmsans40016">-</p>
            </div>
            <ReactCodeInput
              type="number"
              fields={3}
              {...inputElementStyle}
              className=""
              onChange={(value) =>
                setVerificationCode((prev) => (prev += value))
              }
            />
          </div>
          <div id="recaptcha-container"></div>
          <p className="dmsans40016 opacity-50 mt-[28px]">
            00:{remainingTime} sonra tekrar gönder
          </p>
          <button
            id="sign-in-button"
            className="text-[#FF6438] underline mt-[16px]  !w-[105px] "
            onClick={handleSendCode}
            style={{ width: "100%" }}
          >
            Tekrar gönder
          </button>
          <button
            className="btn_primary mt-[23px] mb-[29px]"
            disabled={resendDisabled}
            onClick={handleVerifyCode}
          >
            Doğrula
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationCard;
