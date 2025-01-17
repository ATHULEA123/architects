import React, { useState } from 'react'
import {Col } from "antd";
import { Header } from "antd/es/layout/layout";
import { Logo } from "../../../assets/constant";
import { RiUserLine } from "react-icons/ri";
import { designapporavl } from '../../../assets/constant';
import { FiPhoneCall } from "react-icons/fi";
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import WaterMark from '../../WaterMark';

const DesignApproval = () => {

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
                    <button className="flex items-center justify-center  bg-[#996830] text-[#fff] font-bold text-sm md:px-6 md:py-3 rounded-lg">
                        <RiUserLine className="text-xl mr-1" />
                        Logout
                    </button>
                </Col>
            </Header>

            <div className='custom-container'>
                <div className="pt-10 md:pt-20 pb-7">
                    <h2 className="md:text-[24px] font-[600] text-[#996830cc] sm:ml-16 tracking-widest text-base leading-5">
                        <span className="border-t-2 border-[#996830cc] w-14 inline-block mr-2 mb-1.5"></span>
                        Design Approval
                    </h2>
                </div>
                <div>
                    <div className=" relative  py-5 md:mb-16">
                        {/* Image Section */}
                        <div className="relative flex items-center justify-center">
                            <img
                                src={designapporavl}
                                alt="Got a project"
                                className="shadow-2xl rounded-xl  object-contain "
                            />
                        </div>
                        <div className='absolute lg:top-[200px] lg:left-[400px] md:top-[135px] md:left-[40px] top-[42px] text-center'>
                            <div className='flex justify-center '>
                                <p className=' md:max-w-[545px] max-w-[275px]  font-bold font-Playfair text-sm  md:text-[32px] text-center md:leading-[55px] text-[#444444]'>Your approval has been recorded and the estimate will be available here soon.</p>
                            </div>
                            <div className='flex md:mt-12 mt-3 items-center justify-center md:flex-row flex-col'>
                                <p className="font-[400] md:text-[20px] md:leading-[32px] md:mr-4 text-[#444444] text-[10px]">
                                    For clarifications and remarks, contact Project Architect at:
                                </p>
                                <div className=''>
                                    <button className=" mt-3 md:py-2 md:px-4 py-2 px-3  font-[500] md:text-[16px] text-[10px] md:leading-[32px] rounded-md flex justify-center items-center bg-[#996830] text-[#fff]">
                                        <span className="font-[500] md:text-[16px] text-[10px] md:leading-[32px] mr-2">
                                            <FiPhoneCall />
                                        </span>
                                        CONTACT
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
<WaterMark/>
            </div>
        </>
    )
}

export default DesignApproval