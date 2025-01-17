import React, { useState } from "react";
import { designapporavl, falseceilingcal, kitchenshapes, Logo, wallpainting, wallpanel } from "../../assets/constant";
import { wardrobecal } from "../../assets/constant";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineApartment } from "react-icons/md";
import { RiHome2Fill } from "react-icons/ri";
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import { Col } from "antd";
import { Header } from "antd/es/layout/layout";
import { RiUserLine } from "react-icons/ri";
import { WaterMark } from "../../components";
const LiveEstimation = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pages = [<Step1 />, <Step2 />, <Step3 />, <Step4 />, <Step5 />, <Step6 />, <Step7 />, <Step8 />];
    const handleNext = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    };
    const handlePrevious = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <div className="w-full custom-container">
            {/* Navbar */}



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
            <div>
                {/* Live Estimation Header */}
                <div className="flex items-center ">
                    <h2 className="text-[24px] font-[600] leading-5  text-[#996830cc] my-20">
                        <span className="border-t border-[#996830cc] w-12 inline-block mr-2 mb-1"></span>
                        Live Estimation
                    </h2>
                </div>
            </div>
            {/* Form Content */}
            <div>{pages[currentPage]}</div>
            {/* Navigation */}
            <div className="text-center my-24 gap-6 flex flex-col justify-center items-center md:flex-row">
                {currentPage > 0 && (
                    <button
                        onClick={handlePrevious}
                        className="bg-[#9968301A] text-[#996830] w-52 h-12 font-[500] md:text-[20px] text-sm leading-8 rounded-xl"
                    >
                        PREVIOUS
                    </button>
                )}
                {currentPage < pages.length - 2 ? (
                    <button
                        onClick={handleNext}
                        className="bg-[#996830] text-white w-52 h-12 font-[500] md:text-[20px] text-sm leading-8 rounded-xl"
                    >
                        NEXT
                    </button>
                ) : (
                    <button
                        className="bg-[#996830] text-white w-52 h-12 font-[500] md:text-[20px] text-sm leading-8 rounded-xl"
                    >
                        ESTIMATE
                    </button>
                )}
            </div>
            {/* Pagination */}
            <Pagination
                totalPages={pages.length}
                currentPage={currentPage}
                onClick={(page) => setCurrentPage(page)}
            />
            {/* Footer */}
         <WaterMark/>
        </div>
    );
};

const Step1 = () => {
    const [projectType, setProjectType] = useState(null);
    const [selectedBHK, setSelectedBHK] = useState(null);
    const bhkOptions = ["1 BHK", "2 BHK", "3 BHK", "4 BHK"];
    return (
        <div className=" mt-8">
            {/* Project Type */}
            <div className="flex md:gap-[210px] gap-4 md:items-start md:flex-row flex-col items-start text-[#444]">
                <div className="md:text-2xl font-normal leading-8 text-xl">Project Type:</div>
                <div className="flex border border-[#996833] rounded-xl ">
                    <button
                        className={`flex flex-col gap-2 items-center rounded-xl px-4 py-2 ${projectType === "Apartment" ? "bg-[#996833] text-white" : " text-[#996833]"
                            }`}
                        onClick={() => setProjectType("Apartment")}
                    >
                        <div className="text-3xl">
                            <MdOutlineApartment />
                        </div>
                        <div className="md:text-lg leading-6 font-medium text-base">Apartment</div>
                    </button>
                    <button
                        className={`flex flex-col gap-2 items-center rounded-xl px-8 py-2 ${projectType === "Villa" ? "bg-[#996833] text-white" : " text-[#996833]"
                            }`}
                        onClick={() => setProjectType("Villa")}
                    >
                        <div className="text-3xl">
                            <RiHome2Fill />
                        </div>
                        <div className="md:text-lg leading-6 font-medium text-base">Villa</div>
                    </button>
                </div>
            </div>
            {/* Home Configuration */}
            <div className="flex text-center md:items-start md:gap-32 gap-3 flex-col md:flex-row mt-16 items-start text-[#444]">
                <div className="md:text-2xl font-normal leading-8 text-xl">Home Configuration :</div>
                <div className="grid md:grid-cols-4  grid-cols-3  md:gap-y-11  gap-y-5 ">
                    {bhkOptions.map((bhk, index) => (
                        <button
                            key={index}
                            className={`border border-[#99683099] rounded-xl text-center w-20 h-10 md:w-28 md:h-12 font-normal md:text-lg leading-6 text-sm ${selectedBHK === bhk
                                ? "bg-[#996833] text-white"
                                : " active:bg-[#996833] active:text-white"
                                }`}
                            onClick={() => setSelectedBHK(bhk)}
                        >
                            {bhk}
                        </button>
                    ))}
                    <div className="flex  items-center justify-center border rounded-xl w-20 h-10 md:w-28 md:h-12 border-[#99683099] font-normal md:text-lg leading-6 text-sm">
                        Others
                    </div>
                    <input
                        type="text"
                        className="col-span-1 border rounded-xl py-2  px-2 text-start border-[#99683099] md:w-36 w-24 md:h-12 h-10 font-normal md:text-lg leading-6 text-sm focus-visible:outline-none "
                    />
                </div>
            </div>
        </div>
    );
};
const Step2 = () => {
    const [selectedOption, setSelectedOption] = useState(4); // Default state is 10
    // Generate wardrobe options dynamically
    const wardrobeOptions = Array.from(
        { length: selectedOption },
        (_, i) => ({ label: `${i + 1}`, id: i + 1 })
    );
    // Handle dropdown change
    const handleSelectChange = (e) => {
        const value = Number(e.target.value);
        setSelectedOption(value);
        console.log("Selected Option:", value);
    };
    return (
        <div>
            <h1 className="my-2 font-light md:text-3xl text-2xl leading-[72px] underline underline-offset-4 text-[#444]">
                Wardrobe
            </h1>
            {/* Dropdown for selecting number of wardrobes */}
            <div className="flex items-center gap-4 mb-20">
                <h2 className="font-normal md:text-2xl leading-6 text-lg text-[#444]">
                    Number of Wardrobe:
                </h2>
                <select
                    className="border border-[#99683099] rounded-xl px-6 py-3 text-[#444]"
                    value={selectedOption} // Bind to state
                    onChange={handleSelectChange} // Update state on change
                >
                    {Array.from({ length: 10 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>
                            {i + 1}
                        </option>
                    ))}
                </select>
            </div>
            {/* Dynamic Wardrobe Inputs */}
            <div className="flex md:gap-32 gap-7 items-baseline md:items-center">
                <div className="flex flex-col md:gap-0 gap-7">
                    <h2 className="font-normal md:text-2xl text-base leading-6 text-[#444] md:mb-8">
                        Area:
                    </h2>
                    <img src={wardrobecal} alt="wardrobe calculator" />
                    <p className="font-Playfair font-normal text-[14px] text-xs leading-5 text-center">
                        Sq Area = l * b
                    </p>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-28 md:gap-y-16 gap-4">
                    {wardrobeOptions.map((option) => (
                        <div key={option.id} className="flex gap-3 justify-center items-center">
                            <h2 className="font-normal md:text-xl leading-8 text-[#444] text-base">
                                {option.label}
                            </h2>
                            <input
                                type="number"
                                min="1"
                                max="10"
                                className="border border-[#99683099] rounded-xl md:w-40 md:h-11 w-80 h-11"
                            />
                            <h2 className="mt-5 font-normal md:text-xl text-base leading-6 text-[#444]">
                                Sq.Ft
                            </h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
const Step3 = () => (
    <div className="">
        <h1 className="my-2 font-light md:text-3xl text-2xl leading-[72px] underline underline-offset-4 text-[#444]">Modular Kitchen</h1>
        <div className="flex  items-center gap-4 mb-20">
            <h2 className="font-normal md:text-2xl leading-6 text-[#444] text-lg">Type :</h2>
        </div>
        <div className="flex md:gap-28 gap-5  md:items-center flex-col md:flex-row">
            <h2 className="font-normal md:text-2xl text-lg leading-6 text-[#444] ">Approximate Area :</h2>
            <div className="flex md:gap-20 gap-5 ">
                <div className="flex justify-center items-center md:gap-5 gap-2">
                    <input
                        type="text"
                        min="1"
                        max="10"
                        className="border border-[#99683099] rounded-xl md:w-40 md:h-11 w-32 h-11"
                    />
                    <h2 className="mt-12 font-normal md:text-xl text-base leading-6 text-[#444]">Sq.Ft</h2>
                </div>
                <div>
                    <img src={kitchenshapes} alt="" />
                </div>
            </div>
        </div>
    </div>
);
const Step4 = () => {
    const [selectedOption, setSelectedOption] = useState(4);
    const wardrobeOption = Array.from(
        { length: selectedOption },
        (_, i) => ({ label: `${i + 1}`, id: i + 1 })
    );
    const handleSelectChange = (e) => {
        setSelectedOption(Number(e.target.value));
    };
    return (
        <div>
            <h1 className="my-2 font-light md:text-3xl text-2xl leading-[72px] underline underline-offset-4 text-[#444]">
                WallPaneling
            </h1>
            <div className="flex items-center gap-4 mb-20">
                <h2 className="font-normal md:text-2xl leading-6 text-lg text-[#444]">
                    Number of Wall Panel:
                </h2>
                <select
                    className="border border-[#99683099] rounded-xl px-6 py-3 text-[#444]"
                    value={selectedOption}
                    onChange={handleSelectChange}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>
            <div className="flex md:gap-32 gap-7 items-baseline md:items-center">
                <div className="flex flex-col md:gap-0 gap-7">
                    <h2 className="font-normal md:text-2xl text-base leading-6 text-[#444] md:mb-8">
                        Area:
                    </h2>
                    <img src={wallpanel} alt="wardrobe calculator" />
                    <p className="font-Playfair font-normal text-[14px] text-xs leading-5 text-center">
                        Sq Area = l * b
                    </p>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-28 md:gap-y-16 gap-4">
                    {wardrobeOption.map((option) => (
                        <div key={option.id} className="flex gap-3 justify-center items-center">
                            <h2 className="font-normal md:text-xl leading-8 text-[#444] text-base">
                                {option.label}
                            </h2>
                            <input
                                type="number"
                                min="1"
                                max="10"
                                className="border border-[#99683099] rounded-xl md:w-40 md:h-11 w-80 h-11"
                            />
                            <h2 className="mt-5 font-normal md:text-xl text-base leading-6 text-[#444]">
                                Sq.Ft
                            </h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
const Step5 = () => (
    <div className="relative">
        <h1 className="my-2 font-light text-2xl sm:text-3xl leading-[60px] sm:leading-[72px] underline underline-offset-4 text-[#444]">
            False Ceiling
        </h1>
        <div className="flex mb-28 flex-col lg:flex-row lg:justify-between lg:items-start">
            <div className="relative flex flex-col justify-around">
                <div className="flex items-center gap-4 sm:gap-10 mb-[3rem] sm:mb-[8rem]  lg:gap-96">
                    <h2 className="font-normal text-xl sm:text-2xl leading-6 text-[#444]">Type :</h2>
                    <select
                        className="border border-[#99683099] rounded-xl w-60 sm:w-72 h-10 sm:h-12 pl-3 focus-visible:outline-none text-[#444] text-left">
                        <option value="Normal">Gypsum</option>
                        <option value="Gypsum">Gypsum</option>
                        <option value="Gypsum">Gypsum</option>
                        <option value="Gypsum">Gypsum</option>
                    </select>
                </div>
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:gap-20">
                    <div>
                        <h2 className="font-normal text-xl sm:text-2xl leading-6 text-[#444] mb-6 sm:mb-8 mt-[-15px] sm:mt-0">
                            Approximate Area :
                        </h2>
                    </div>
                    <div className="flex flex-row-reverse justify-end gap-2 sm:gap-4 mt-6 items-center lg:mt-0">
                        <div className="flex gap-2 sm:gap-4 justify-center items-center mt-[-65px] sm:mt-[-75px]">
                            <input
                                type="text"
                                min="1"
                                max="10"
                                className="border border-[#99683099] rounded-xl w-40 sm:w-48 h-10 sm:h-12 focus-visible:outline-none"
                            />
                            <h2 className="mt-1 sm:mt-2 lg:mt-0 font-normal text-lg sm:text-xl leading-6 text-[#444]">
                                Sq.Ft
                            </h2>
                        </div>
                        <div className="lg:absolute lg:right-[-361px] lg:top-0">
                            <img
                                className="mb-12 sm:mb-14 lg:mb-0 lg:ml-8 max-w-full"
                                src={falseceilingcal}
                                alt="Wall Painting"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const Step6 = () => (
    <div className="relative">
        <h1 className="my-2 font-light text-2xl sm:text-3xl leading-[60px] sm:leading-[72px] underline underline-offset-4 text-[#444]">
            Wall Painting
        </h1>
        <div className="flex mb-28 flex-col lg:flex-row lg:justify-between lg:items-start">
            <div className="relative flex flex-col justify-around">
                <div className="flex items-center gap-4 sm:gap-10 mb-[3rem] sm:mb-[8rem]  lg:gap-96">
                    <h2 className="font-normal text-xl sm:text-2xl leading-6 text-[#444]">Type :</h2>
                    <select
                        className="border border-[#99683099] rounded-xl w-60 sm:w-72 h-10 sm:h-12 pl-3 focus-visible:outline-none text-[#444] text-left">
                        <option value="Normal">Normal</option>
                        <option value="Gypsum">Gypsum</option>
                        <option value="Gypsum">Gypsum</option>
                        <option value="Gypsum">Gypsum</option>
                    </select>
                </div>
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:gap-20">
                    <div>
                        <h2 className="font-normal text-xl sm:text-2xl leading-6 text-[#444] mb-6 sm:mb-8 mt-[-15px] sm:mt-0">
                            Approximate Area :
                        </h2>
                    </div>
                    <div className="flex flex-row-reverse justify-end gap-2 sm:gap-4 mt-6 items-center lg:mt-0">
                        <div className="flex gap-2 sm:gap-4 justify-center items-center mt-[-65px] sm:mt-[-75px]">
                            <input
                                type="text"
                                min="1"
                                max="10"
                                className="border border-[#99683099] rounded-xl w-40 sm:w-48 h-10 sm:h-12 focus-visible:outline-none"
                            />
                            <h2 className="mt-1 sm:mt-2 lg:mt-0 font-normal text-lg sm:text-xl leading-6 text-[#444]">
                                Sq.Ft
                            </h2>
                        </div>
                        <div className="lg:absolute lg:right-[-361px] lg:top-0">
                            <img
                                className="mb-12 sm:mb-14 lg:mb-0 lg:ml-8 max-w-full"
                                src={wallpainting}
                                alt="Wall Painting"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
const Step7 = () => (
    <div className="flex flex-col items-center my-16">
        <p className=" font-normal text-xl leading-4 text-[#444]">Your estimation is almost complete, we just need few more details here.</p>
        <div className="flex flex-col justify-center items-center gap-10 mt-10">
            <input
                type="text"
                min="1"
                max="10"
                placeholder="Enter Your Name*"
                className="border-2 border-[#99683099] rounded-xl w-80 h-12 focus-visible:outline-none pl-4 placeholder-[#444444CC] placeholder:font-normal placeholder:text-base leading-5"
            />
            <input
                type="text"
                min="1"
                max="10"
                placeholder="Enter Email Id*"
                className="border-2 border-[#99683099] rounded-xl w-80 h-12 focus-visible:outline-none pl-4 placeholder-[#444444CC] placeholder:font-normal placeholder:text-base leading-5"
            />
            <input
                type="text"
                min="1"
                max="10"
                placeholder="Enter your Number*"
                className="border-2 border-[#99683099] rounded-xl w-80 h-12 focus-visible:outline-none pl-4 placeholder-[#444444CC] placeholder:font-normal placeholder:text-base leading-5"
            />
        </div>
        <div className="flex  mt-5 justify-center items-center">
            <input type="checkbox" name="" id="" className="w-5 h-5" />
            <p className="font-normal text-base leading-5 text-[#444444CC] ml-3"> Accept to <span className="underline underline-offset-4">Privacy policy</span></p>
        </div>
    </div>
);
const Step8 = () => (
    <div className="p-4 text-center">
        {/* Wrapper */}
        <div className="relative py-16">
            {/* Background Image Section */}
            <div className="relative flex items-center justify-center">
                <img
                    src={designapporavl}
                    alt="Got a project"
                    className="shadow-2xl rounded-xl opacity-30 max-w-full h-auto object-cover"
                />
            </div>
            {/* Content Section */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                {/* Title */}
                <div className="text-center text-[#444444CC] font-Playfair mb-8">
                    <h2 className="font-semibold text-lg md:text-3xl leading-tight">
                        Your Final Estimate
                    </h2>
                    <span className="font-normal text-sm md:text-xl mt-2">
                        &#40;approx&#41;
                    </span>
                </div>
                {/* Price Range */}
                <p className="font-semibold font-Playfair text-2xl sm:text-3xl md:text-5xl leading-[55px] text-[#444444] my-8 ">
                    &#8377; 60,00,000 <span className="text-xl sm:text-2xl md:text-4xl text-[#44444480]">to</span> &#8377; 90,00,000
                </p>
                {/* Contact Section */}
                <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
                    <p className="font-medium text-sm md:text-lg leading-6 text-[#444444]">
                        Contact Project Architect at:
                    </p>
                    <button className="primary-btn-active btn-contact flex items-center justify-center gap-2 py-2 px-5 md:py-3 md:px-7 font-medium text-sm md:text-lg rounded-md">
                        <span className="text-base md:text-lg">
                            <FiPhoneCall />
                        </span>
                        CONTACT
                    </button>
                </div>
            </div>
        </div>
    </div>
    
);
const Pagination = ({ totalPages, currentPage, onClick }) => {
    return (
        <div className="flex justify-center mt-6 mb-24 space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
                <span
                    key={index}
                    className={`w-3 h-3 rounded-full cursor-pointer ${index === currentPage ? "bg-[#A47237]" : "bg-gray-300"
                        }`}
                    onClick={() => onClick(index)}
                ></span>
            ))}
             
        </div>
      
    );
};

export default LiveEstimation;