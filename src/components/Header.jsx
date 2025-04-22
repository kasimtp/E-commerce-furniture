import React from "react";
import bg from "../assets/bg.jpg";

const Header = () => {
  return (
    <div className="mt-0">
      <div
        className="h-[500px] md:h-[590px] bg-fixed bg-cover bg-center px-4 md:px-10 relative"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <p className="absolute top-20 left-4 md:left-10 text-sm font-medium text-[#474747] uppercase tracking-wide">
          We’re proud to introduce
        </p>

        <div className="h-full flex flex-col justify-center items-start md:items-start text-left max-w-2xl mx-auto md:mx-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#ffdd00] uppercase mt-24 md:mt-0">
            The Furniture
            <br />
            <span className="text-white">That Defines You</span>
          </h1>

          <p className="text-sm sm:text-base text-[#2b2b2b] mt-4 max-w-md">
            Your comfort and aesthetic design suitable for you is before
            anything else
          </p>

          <button className="mt-6 bg-[#0047ff] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#0035c5] transition duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
