// import React, {useState, useEffect} from "react";
// import {Logo} from "../../../src/assets/constant";
// import {IoArrowBack} from "react-icons/io5";

// const ArchitectPortal = ({portalType}) => {
//   const [isOtpStep, setIsOtpStep] = useState(false);
//   const [timer, setTimer] = useState(60); // Countdown timer (1 minute)

//   const heading = portalType === "master" ? "Master's Portal" : "Architect's Portal";
//   console.log(portalType);

//   // Handle countdown timer
//   useEffect(() => {
//     if (isOtpStep && timer > 0) {
//       const interval = setInterval(() => {
//         setTimer((prev) => prev - 1);
//       }, 1000);
//       return () => clearInterval(interval); // Cleanup interval
//     }
//   }, [isOtpStep, timer]);

//   // Handle back button click
//   const handleBackClick = () => {
//     setIsOtpStep(false);
//     setTimer(60); // Reset the timer
//   };

//   // Handle Send OTP / Verify OTP button click
//   const handleButtonClick = () => {
//     if (!isOtpStep) {
//       setIsOtpStep(true); // Switch to OTP step
//     } else {
//       // Add logic for OTP verification here
//     }
//   };

//   return (
//     <div className="container">
//       <div className="p-2 py-5">
//         <Logo />
//       </div>

//       <div className="flex flex-col gap-10">
//         <div className="flex items-center mt-16 justify-center">
//           <h1 className="text-4xl font-semibold text-[rgba(153,104,48,0.6)] text-center">{heading}</h1>
//         </div>
//         <div className={`flex justify-center text-center mt-6 m-auto  ${isOtpStep?"w-80":""}`}>
//           <div className="flex w-full justify-start">
//             {isOtpStep && (
//               <button onClick={handleBackClick} className="text-black text-[24px] ">
//                 <IoArrowBack />
//               </button>
//             )}
//             <h2 className="text-[rgba(68,68,68,1)] text-2xl font-bold ml-0 flex-1 ">SIGN IN</h2>
//           </div>
//         </div>
//         <div className="flex flex-col items-center mt-16">
//           <input
//             type="text"
//             placeholder={isOtpStep ? "Enter OTP here" : "Enter mobile number here"}
//             name={isOtpStep ? "otp" : "phone"}
//             className="px-5 py-3 text-base w-80 font-light rounded-xl border placeholder-[rgba(196,163,134,1)] outline-none  focus:ring-1 focus:ring-[#996833] custom-portal-input"
//           />
//           <button
//             onClick={handleButtonClick}
//             className="mt-10 bg-[#996833] hover:bg-[#854e1f] text-white font-semibold py-2 px-4 rounded-xl w-[170px]"
//           >
//             {isOtpStep ? "Login" : "Send OTP"}
//           </button>
//           {isOtpStep && (
//             <div className="mt-4 text-center text-gray-500">
//               <p className="text-sm">{`00:${timer < 10 ? `0${timer}` : timer}`}</p>
//               <p className="text-sm mt-2">
//                 Didn't receive OTP?{" "}
//                 <button
//                   // Resend OTP logic
//                   className="text-[#996833] underline"
//                 >
//                   Resend
//                 </button>
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ArchitectPortal;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import { Logo } from "../../../src/assets/constant";
import { IoArrowBack } from "react-icons/io5";
import apiClient from "../../Utiils/axiosInstance "; // Import the apiClient
import {message} from "antd";

const ArchitectPortal = ({ portalType }) => {
  const [isOtpStep, setIsOtpStep] = useState(false);
  const [timer, setTimer] = useState(60); // Countdown timer (1 minute)
  const [inputValue, setInputValue] = useState(""); // Input for phone or OTP
  const [phoneNumber ,setPhoneNumber]=useState("");
  const [otpExpired, setOtpExpired] = useState(false); // Track OTP expiration
  const navigate = useNavigate(); // React Router navigation

  const heading = portalType === "master" ? "Master's Portal" : "Architect's Portal";

  // Handle countdown timer
  useEffect(() => {
    if (isOtpStep && timer > 0 && !otpExpired) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval); // Cleanup interval
    }
  }, [isOtpStep, timer, otpExpired]);

  // Handle back button click
  const handleBackClick = () => {
    setIsOtpStep(false);
    setTimer(60); // Reset the timer
    setInputValue(""); // Clear input
    setOtpExpired(false); // Reset OTP expiration status
  };

  // Handle Send OTP / Verify OTP button click
  const handleButtonClick = async () => {
    if (!isOtpStep) {
      // Send OTP logic
      console.log("Sending OTP to:", inputValue);
      const phn= inputValue;
      try {
        const response = await apiClient.post("/user/auth/send-otp", { phoneNumber: inputValue });
        setPhoneNumber(phn)
        console.log("OTP sent:", response.data);
        setInputValue("")
        setIsOtpStep(true); // Switch to OTP step
      } catch (error) {
        console.error("Error sending OTP:", error.response?.data?.message || error.message);
        message.error(`${error.response?.data?.error}`);
      }
    } else {
      // OTP verification logic
      console.log("Verifying OTP:", inputValue);
      try {
        const response = await apiClient.post("user/auth/verify-otp", { phoneNumber:phoneNumber, otp: inputValue });
        sessionStorage.setItem("jwt", response.data.token); // Save JWT after successful login
        console.log("JWT saved:", response.data.token);

        // Navigate to the panel page
        navigate("/pannel");
      } catch (error) {
        console.error("Error verifying OTP:", error.response?.data?.message || error.message);
        if (error.response?.data?.message === "OTP has expired") {
          setOtpExpired(true);
          alert("OTP has expired. Please request a new one.");
        } else {
          alert("Invalid OTP or OTP expired. Please try again.");
        }
      }
    }
  };

  return (
    <div className="custom-container">
      <div className="p-2 py-5">
        <Logo className="w-28 h-auto sm:w-24 md:w-28 lg:w-32"/>
      </div>
      <div className="flex flex-col md:gap-10 mb-10">
        <div className="flex items-center mt-16 justify-center">
          <h1 className="md:text-4xl text-2xl font-semibold text-[rgba(153,104,48,0.6)] text-center">{heading}</h1>
        </div>
        <div className={`flex justify-center text-center mt-6 m-auto  ${isOtpStep ? "w-80" : ""}`}>
          <div className="flex w-full justify-start">
            {isOtpStep && (
              <button onClick={handleBackClick} className="text-black text-[24px] ">
                <IoArrowBack />
              </button>
            )}
            <h2 className="text-[rgba(68,68,68,1)] md:text-2xl text-xl font-bold ml-0 flex-1 ">SIGN IN</h2>
          </div>
        </div>
        <div className="flex flex-col items-center md:mt-16 mt-10">
          <input
            type="text"
            placeholder={isOtpStep ? "Enter OTP here" : "Enter mobile number here"}
            name={isOtpStep ? "otp" : "phone"}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="px-5 py-3 md:text-base text-sm md:w-80  font-light rounded-xl border placeholder-[rgba(196,163,134,1)]  outline-none focus:ring-1 focus:ring-[#996833] custom-portal-input"
          />
          <button
            onClick={handleButtonClick}
            className="md:mt-10 mt-5 bg-[#996833] hover:bg-[#854E1F] text-white md:text-base text-sm font-semibold md:py-2 md:px-8  py-2 px-6 rounded-xl "
          >
            {isOtpStep ? "Login" : "Send OTP"}
          </button>
          {isOtpStep && !otpExpired && (
            <div className="mt-4 text-center text-gray-500">
              <p className="text-sm">{`00:${timer < 10 ? `0${timer}` : timer}`}</p>
              <p className="text-sm mt-2">
                Didn't receive OTP?{" "}
                <button
                  onClick={() => {
                    // Resend OTP logic
                    console.log("Resending OTP to:", inputValue);
                  }}
                  className="text-[#996833] underline"
                >
                  Resend
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArchitectPortal;

