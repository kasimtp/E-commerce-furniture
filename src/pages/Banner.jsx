import React from 'react';
import bannerbg from  "../assets/bg.jpg";
import { FaFacebookF, FaTwitter, FaBehance, FaInstagram } from "react-icons/fa";
import { GoGlobe } from "react-icons/go";
import title_bannerv55 from "../assets/title_bannerv55.png";

const Banner = () => {
  return (
    <div className="mt-0">
      <div
        className="h-[400px] sm:h-[500px] md:h-[590px] bg-fixed bg-cover bg-center px-4 md:px-10 relative"
        style={{ backgroundImage: `url(${bannerbg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-center items-center text-center gap-8 sm:gap-10 md:gap-12">
          {/* Title Image */}
          <img 
            src={title_bannerv55} 
            alt="Title Banner" 
            className="w-40 sm:w-52 md:w-60"
          />

          {/* Follow Us Text */}
          <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
            FOLLOW US
          </p>

          {/* Social Icons */}
          <div className="flex space-x-8 sm:space-x-12 md:space-x-16 text-3xl sm:text-4xl md:text-5xl text-neutral-400 hover:cursor-pointer">
            {[FaFacebookF, FaTwitter, FaBehance, FaInstagram, GoGlobe].map((Icon, index) => (
              <div key={index} className="hover:text-white transition duration-300">
                <Icon />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
