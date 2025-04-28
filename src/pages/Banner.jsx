import React from 'react';
import bannerbg from "../assets/sofa 3.jpg";
import { FaFacebookF, FaTwitter, FaBehance, FaInstagram } from "react-icons/fa";
import { GoGlobe } from "react-icons/go";
import title_bannerv55 from "../assets/title_bannerv55.png";

const Banner = () => {
  return (
    <div className="mt-0">
      <div
        className="h-[500px] md:h-[590px] bg-fixed bg-cover bg-center px-4 md:px-10 relative"
        style={{ backgroundImage: `url(${bannerbg})` }}
      >
        {/* Full overlay background */}
        <div className="absolute inset-0 bg-[#020101] opacity-60"></div>

        {/* Content */}
        <div className="h-full relative flex flex-col gap-12 justify-center items-center text-center">
          <img src={title_bannerv55} alt="Title Banner" /> 

          <div className="mb-4">
            <p className="text-5xl text-white font-semibold">FOLLOW US</p>
          </div>

          <div className="flex flex-row text-5xl hover:cursor-pointer space-x-16 text-neutral-600">
            {/* Each icon with hover effect */}
            <div className="hover:text-white  transition duration-300">
              <FaFacebookF />
            </div>
            <div className="hover:text-white transition duration-300">
              <FaTwitter />
            </div>
            <div className="hover:text-white transition duration-300">
              <FaBehance />
            </div>
            <div className="hover:text-white transition duration-300">
              <FaInstagram />
            </div>
            <div className="hover:text-white transition duration-300">
              <GoGlobe />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
