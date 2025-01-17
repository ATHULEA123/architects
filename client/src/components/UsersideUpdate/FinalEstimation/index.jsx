import React, { useState } from 'react'
import { Button, Col } from "antd";
import { Header } from "antd/es/layout/layout";
import { Logo } from "../../../assets/constant";
import { RiUserLine } from "react-icons/ri";
import { MdOutlineFileDownload } from "react-icons/md";
import { GiQueenCrown } from "react-icons/gi";
import { FiPhoneCall } from "react-icons/fi";
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import WaterMark from '../../WaterMark';
const FInalEstimation = () => {
    const [otpRequeted, setOtpRequested] = useState(false)

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            <Header className=" ant-header flex items-center justify-between px-2 md:px-12">
                {/* Logo */}
                <Col span={10} className="py-3">
                    <Logo />
                </Col>

                {/* Hamburger Button (Visible on Mobile) */}
                <Col className="md:hidden flex items-center">
                    <button
                        className="text-2xl  focus:outline-none"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? <AiOutlineClose className="text-[#996830] font-medium" /> : <FaBars className="text-[#996830] font-medium" />}
                    </button>
                </Col>

                {/* Logout Button for Mobile (Dropdown) */}
                <div
                    className={`absolute top-20 right-0 w-3/4 bg-white shadow-md z-10 md:hidden transition-all duration-300 ease-in-out 
                         ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'
                        }`}
                >
                    <ul className="flex flex-col p-4 h-60">
                        <li className="hover:bg-gray-200 p-2 cursor-pointer flex items-center justify-center">
                            <button className="flex items-center justify-center  bg-[#996830] text-[#fff] font-bold text-sm md:px-6 md:py-3 px-6 py-3 rounded-lg">
                                <RiUserLine className="text-xl mr-1" />
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>

                {/* Logout Button for Larger Screens */}
                <Col className="hidden md:flex items-center">
                    <button className="flex items-center justify-center  bg-[#996830] text-[#fff] font-bold text-sm md:px-6 md:py-3  rounded-lg">
                        <RiUserLine className="text-xl mr-1" />
                        Logout
                    </button>
                </Col>
            </Header>


            <div className='custom-container'>
                <div className="pt-10 md:pt-20 pb-7">
                    <h2 className="text-[24px] font-[600] text-[#996830cc] sm:ml-28 leading-[20px] tracking-widest">
                        <span className="border-t-2 border-[#996830cc] w-14 inline-block mr-2 mb-1.5"></span>
                        Final Estimation
                    </h2>
                </div >

                <div className='flex  justify-center items-center my-10 gap-10'>
                    <div className='border-4 border-[#99683033] py-16 px-10  rounded-lg shadow-lg shadow-white'>
                        <div className='text-[#444] md:text-[32px] font-[700] text-[18px] md:leading-[72px]  font-Playfair mb-10 flex justify-center items-center'>
                            <span className=' mr-2'><GiQueenCrown /></span>
                            <h2 className='   font-Playfair'>Luxury</h2>
                        </div>
                        <div className='text-[#444] '>
                            <h3 className='md:text-[26px] text-[16px] font-[500] md:leading-[72px] underline underline-offset-[6px] mb-10 '>Living Room</h3>
                            <div className='flex items-center md:mb-7'>
                                <h3 className='max-w-[87px] md:text-[20px] text-[14px] font-[500] md:leading-[24px]'>TV Unit partition</h3>
                                <p className='max-w-[332px] md:text-[18px] text-[12px] font-[400] md:leading-[32px] ml-10'>Providing and fixing TV Unit partition will be done with gold plated MS tube.
                                    Cost to include factory fabrication, painting & installation.</p>
                            </div>
                            <div className='flex items-center md:mb-7'>
                                <h3 className='md:text-[20px] text-[14px] font-[500] leading-[72px]'>Type</h3>
                                <p className='md:text-[18px] text-[12px] font-[500] leading-[32px] ml-20'>87.5</p>
                            </div>
                            <div className='flex items-center md:mb-7'>
                                <h3 className='md:text-[20px] text-[14px] font-[500] leading-[72px]'>Area</h3>
                                <p className='md:text-[18px] text-[12px] font-[500] leading-[32px] ml-20'>87.5</p>
                            </div>
                        </div>
                        <div className=' flex justify-center items-center md:mb-10'>
                            <h3 className='md:text-[24px] text-[18px] font-[500] leading-[72px] underline underline-offset-4 text-[#996830] '>Download Estimate
                            </h3>
                            <span className='font-[600] md:text-[30px]  text-[20px] text-[#996830] ml-1'>
                                <MdOutlineFileDownload />
                            </span>
                        </div>
                        <div className='text-center tracking-widest'>
                            <div
                                className=" font-[500] md:text-[24px] text-[18px] md:leading-[20px]
                           text-[#444444] "> Grand Total :

                                <span className='font-[500] md:text-[30px] md:leading-[20px] text-[15px] font-Outfit text-[#444] ml-4'>
                                    &#8377;4,591,875
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center md:mb-10">
                    <div className='flex  justify-center items-center my-8 text-[#444]'>
                        <input
                            type="checkbox"
                            className='w-6 h-6 md:w-5 md:h-5 '

                        />
                        <h1 className="font-[400] text-[15px] md:text-[20px] md:leading-[32px] ml-2">
                            Approved the <span className='underline underline-offset-4'>design policy </span> and proceed to estimation
                        </h1>
                    </div>
                    {!otpRequeted ? (

                        <>
                            <Button className="primary-btn-active btn-contact md:py-8 md:px-20 py-6 px-8 font-[500] text-[20px] md:leading-[32px] rounded-md"
                                onClick={() => setOtpRequested(true)}
                            >
                                <span className="font-[500] md:text-[20px] text-[14px] md:leading-[32px] font-Outfit">
                                    CONFIRM ESTIMATE & SEND OTP
                                </span>

                            </Button>
                            <p className="text-[#C8C8C8] font-[500] md:text-[20px] text-[12px] md:leading-[32px] mt-6">
                                OTP will be sent to your registered mobile number
                            </p>
                        </>

                    )

                        : (
                            <div className=''>
                                <div className='flex flex-col md:flex-row items-center justify-center gap-4 '>
                                    <h2 className='font-[400] md:text-[22px] text-[14px] md:leading-[32px] text-[#444] '>Enter OTP</h2>
                                    <input type="text" placeholder=""
                                        className="border border-[#99683099]  md:text-[17px] text-[13px] w-36 h-10 md:w-44 md:h-14   rounded-xl shadow-xl focus-visible:outline-none focus-visible:border-[#996380]" />
                                    <Button className="primary-btn-active btn-contact md:py-7 md:px-18 py-5 px-12 font-[500] text-[20px] leading-[32px] rounded-xl shadow-xl shadow-[#99683066] ">

                                        <span className="font-[500] md:text-[20px] text-[12px] md:leading-[32px] font-Outfit">
                                            SUBMIT
                                        </span>
                                    </Button>
                                </div>

                                <div className='flex flex-col items-center justify-center'>
                                    <p className="text-[#996830] underline decoration-1 underline-offset-2 mt-5">
                                        00:06
                                    </p>

                                    <p className=" text-[#444444] mt-7">
                                        Didn’t receive OTP?{' '}
                                        <button
                                            className="text-[#996830] underline decoration-1 underline-offset-2 font-[500] text-[16px] leading-[32px] ml-3"
                                        >
                                            Resend
                                        </button>
                                    </p>
                                </div>
                            </div>
                        )}

                </div>
                <div className='flex md:flex-row flex-col md:my-40 my-20 items-center justify-center '>
                    <p className="font-[400] md:text-[20px] text-[10px] md:leading-[32px] md:mr-4 text-[#444444]">
                        For clarifications and remarks, contact Project Architect at:
                    </p>
                    <Button className="font-[500] md:text-[16px] text-[12px] md:leading-[32px] rounded-md bg-[#ffff] text-[#996830] border-0">
                        <span className="">
                            <FiPhoneCall />
                        </span>
                        <span className='underline underline-offset-4 font-Outfit'>CONTACT</span>
                    </Button>
                </div>
                <WaterMark/>
            </div >
        </>
    )
}

export default FInalEstimation