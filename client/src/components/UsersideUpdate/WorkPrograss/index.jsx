import React, { useState } from 'react'
import {  Col } from "antd";
import { Header } from "antd/es/layout/layout";
import { Logo } from "../../../assets/constant";
import { RiUserLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { FaBars } from "react-icons/fa6";
import {
    moodboardone,
    moodboardtwo,
    moodboardthree,
    moodboardfour,
    moodboardfive,
    carosuel,
} from "../../../assets/constant";
import WaterMark from '../../WaterMark';
const WorkPrograss = () => {
    const visibleImages = [moodboardone, moodboardtwo, moodboardthree, moodboardfour];
    const hiddenImages = [carosuel, moodboardfive, moodboardthree];
    const allImages = [...visibleImages, ...hiddenImages];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isCarouselOpen, setIsCarouselOpen] = useState(false);

    // Function to handle image changes
    const changeImage = (direction) => {
        const newIndex = (currentIndex + direction + allImages.length) % allImages.length;
        setCurrentIndex(newIndex);
    };

    // Open Carousel
    const openCarousel = (startIndex = 0) => {
        setCurrentIndex(startIndex);
        setIsCarouselOpen(true);
    };

    // Close Carousel
    const closeCarousel = () => {
        setIsCarouselOpen(false);
    };

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
                    <h2 className="md:text-[24px] text-[16px] font-[600] text-[#996830cc] sm:ml-16 md:leading-[20px] tracking-widest">
                        <span className="border-t-2 border-[#996830cc] w-14 inline-block mr-2 mb-1.5"></span>
                        Work Progress
                    </h2>
                </div>
                <div>
                    
                </div>

                <div className='flex flex-col justify-center items-center mb-10'>
                    <div className="flex flex-col  lg:justify-center lg:items-center mb-10 relative ">
                        <div className="flex ">
                            {/* First Image */}
                            <div className=" w-3/5 md:w-[660px] md:h-[360px]  h-[205px]  flex justify-center items-center md:rounded-tl-[7rem] rounded-tl-[2rem] overflow-hidden">
                                <img
                                    src={visibleImages[0]}
                                    alt="Moodboard 1"
                                    className="object-cover w-full h-full"
                                    onClick={() => openCarousel(0)}
                                />
                            </div>

                            {/* Second Image */}
                            <div className="w-3/5 md:w-[440px] md:h-[360px]  h-[205px] flex justify-center items-center md:rounded-tr-[7rem] rounded-tr-[2rem] overflow-hidden">
                                <img
                                    src={visibleImages[1]}
                                    alt="Moodboard 2"
                                    className="object-cover w-full h-full"
                                    onClick={() => openCarousel(1)}
                                />
                            </div>
                        </div>

                        <div className="flex relative">
                            {/* Third Image */}
                            <div className="md:w-[500px] md:h-[320px] w-3/5 h-[155px] md:rounded-bl-[7rem] rounded-bl-[2rem] overflow-hidden">
                                <img
                                    src={visibleImages[2]}
                                    alt="Moodboard 3"
                                    className="object-cover w-full h-full"
                                    onClick={() => openCarousel(2)}
                                />
                            </div>

                            {/* Fourth Image */}
                            <div className=" md:w-[380px] md:h-[320px] h-[155px] w-3/5 ">
                                <img
                                    src={visibleImages[3]}
                                    alt="Moodboard 4"
                                    className="object-cover w-full h-full"
                                    onClick={() => openCarousel(3)}
                                />
                            </div>

                            {/* Hidden Image */}
                            <div className="md:w-[220px] md:h-[320px] w-3/5 h-[155px] ">
                                <img
                                    src={hiddenImages[0]}
                                    alt="Hidden Moodboard"
                                    className=" object-cover w-full h-full brightness-[.2] contrast-50 "
                                    onClick={() => openCarousel(4)}
                                />
                                <span
                                    className="absolute lg:right-[97px] md:bottom-[145px] md:right-[50px] right-[35px] bottom-[60px] text-white md:text-[34px] text-[20px] md:leading-[20px] font-normal"
                                >
                                    +{hiddenImages.length}
                                </span>
                            </div>
                        </div>
                    </div>


                    {/* Full-Screen Carousel */}
                    {isCarouselOpen && (
                        <div className="fixed inset-0 bg-white  z-50 flex justify-center items-center">
                            <button
                                className="absolute top-4 right-4 text-white text-lg"
                                onClick={closeCarousel}
                            >
                                <span className=" font-[500] text-[28px] text-black mr-32 mt-32"><AiOutlineClose /></span>
                            </button>
                            <div className="flex justify-center items-center">
                                {/* Previous Button */}
                                <button
                                    className="text-[44px] text-[#996830] p-2 rounded-full "
                                    onClick={() => changeImage(-1)}
                                >
                                    <BsChevronLeft />
                                </button>

                                {/* Carousel Image */}
                                <div className="shadow-lg rounded-lg overflow-hidden">
                                    <img
                                        src={allImages[currentIndex]}
                                        alt="Carousel"
                                        className="w-[900px] h-[600px] object-cover"
                                    />
                                </div>

                                {/* Next Button */}
                                <button
                                    className="text-[44px] text-[#996830] p-2 rounded-full "
                                    onClick={() => changeImage(1)}
                                >
                                    <BsChevronRight />
                                </button>
                            </div>
                        </div>
                    )}

                    <div className='tex-[#444] mt-28 md:mb-60 mb-24'>
                        <h2 className='font-[400] text-[24px] leading-8 '>Lorem Ipsum</h2>
                        <p className='max-w-6xl font-[400] text-[20px] leading-8 ' >

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                            qui officia deserunt mollit anim id est laborum.
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                            vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni
                            dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                            sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
                            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
                            laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
                            velit esse quam nihil molestiae consequatur,
                            vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                            deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
                            similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                            rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                            impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                            Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae
                            sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
                            maiores alias consequatur aut perferendis doloribus asperiores repellat.
                        </p>
                    </div>

                </div>
                <WaterMark/>
            </div>
        </>
    )
}

export default WorkPrograss










