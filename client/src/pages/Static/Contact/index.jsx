import {message} from "antd";
import React, {useEffect} from "react";
import API_BASE_URL from "../../../config/config";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Contact = () => {
   useEffect(() => {
      AOS.init();
    }, [])
  const handleSubmit = async (e) => {

    e.preventDefault();
    const form = e.target;
    const formData = new FormData(e.target);
    let data = {};
    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }
    data = {
      ...data,
      source: "estimate",
    };
  const phoneRegex = /^[0-9]{10}$/; 
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

  if (!phoneRegex.test(data.phone)) {
    message.error("Please enter a valid 10-digit phone number.");
    return; 
  }

  if (!emailRegex.test(data.email)) {
    message.error("Please enter a valid email address.");
    return; // Stop submission if email is invalid
  }
    const response = await fetch(`${API_BASE_URL}/leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Specify JSON payload
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Form submitted successfully!");
      message.success("Form submitted successfully!");
      form.reset();
    } else {
      console.error("Failed to submit form.");
    }
  };
  return (
    <>
      <div id="contact" className="custom-container hide-scrollbar Overflow-hidden flex flex-col px-4 sm:px-8">
        <h2 className="text-xl font-semibold text-[#996830cc] sm:ml-20 md:ml-44">
          <span className="border-t border-[#996830cc] w-12 inline-block mr-2 mb-1"></span>
          Contact Us
        </h2>
        <div className="flex items-center justify-center pb-20 sm:pb-48" data-aos="fade-up"data-aos-duration="1000">
          <div className="bg-[#996830cc] py-6 sm:py-8 px-6 sm:px-10 md:px-14 rounded-[20px] shadow-md w-full max-w-lg md:max-w-2xl lg:max-w-3xl mt-8 sm:mt-12">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-10">
              <div className="flex flex-col">
                <label className="text-gray-100 mb-2 font-[400] text-[14px] leading-[17.6px]" htmlFor="name">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="px-4 py-3 rounded-xl bg-transparent text-gray-100 border border-white outline-none focus:ring-white"
                  placeholder=""
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="text-gray-100 mb-2 font-[400] text-[14px] leading-[17.6px]" htmlFor="phone">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="px-4 py-3 rounded-xl bg-transparent text-gray-100 border border-white outline-none focus:ring-white"
                  placeholder=""
                  required
                />
              </div>

              <div className="flex flex-col md:col-span-1 mt-4 md:mt-6">
                <label className="text-gray-100 mb-2 font-[400] text-[14px] leading-[17.6px]" htmlFor="email">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="px-4 py-3 rounded-xl bg-transparent text-gray-100 border border-white outline-none focus:ring-white"
                  placeholder=""
                  required
                />
              </div>

              <div className="flex flex-col md:col-span-1 mt-4 md:mt-6">
                <label className="text-gray-100 mb-2 font-[400] text-[14px] leading-[17.6px]" htmlFor="message">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  rows="4"
                  name="description"
                  className="px-4 py-3 rounded-xl bg-transparent text-gray-100 border border-white outline-none focus:ring-white"
                  placeholder=""
                ></textarea>
              </div>

              <div className="col-span-1 md:col-span-2 flex justify-center mt-6">
                <button
                  type="submit"
                  className="bg-[#FFFFFF99] text-[#996830] py-3 sm:py-4 px-8 sm:px-10 rounded-xl shadow-md hover:bg-[#FFFFFF99] transition font-[600] text-[14px] sm:text-[16px] leading-[24px]"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
