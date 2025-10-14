import React, { useState } from "react";

// 🖼️ All imports at the top
import shoes from "../assets/shoes.png";
import airpod from "../assets/airpod.png";
import hedset from "../assets/hedset.png";
import watch from "../assets/watch.png";
import powerbank from "../assets/powerbank.png";
import women from "../assets/women.png";
import beauty from "../assets/beauty.png";
import wallat from "../assets/wallat.png";
import Footwear from "../assets/footwear.png";
import men from "../assets/men.png";

const Categories = ({ onCategoryClick }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (categoryName) => {
    setActiveCategory(categoryName);
    onCategoryClick(categoryName);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4  py-20 lg:-mt-[500px]  -mt-24 flex flex-col items-center space-y-8 font-poppins">
      {/* Header */}
      <div className="text-center ">
        <p className="text-xs sm:text-sm lg:text-[18px] text-[#6C757D] uppercase tracking-widest">
          passion for fashion
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-[44px] font-bold text-[#212529]">
          Shop By Categories
        </h2>
      </div>

      {/* Horizontal Scroll Categories */}
      <div className="w-screenfull overflow-x-auto  whitespace-nowrap bg-red-000  no-scrollbar">
        <div className="flex gap-6 lg:gap-20 px-2">
          {/* Men's */}
          <div
            onClick={() => handleCategoryClick("Men's")}
            className="flex-shrink-0 flex flex-col items-center text-center cursor-pointer group"
          >
            <div
              className={`rounded-full flex items-center justify-center shadow-md overflow-hidden
                w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-24 lg:h-24
                bg-gray-50 hover:scale-110 transition-transform duration-400 ease-in-out
                ${activeCategory === "Men's" ? "ring-2 ring-green-600" : ""}`}
            >
              <img
                src={men}
                alt="Men's"
                className="object-contain w-8 h-8 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-17 lg:h-17"
              />
            </div>
            <span
              className={`mt-3 text-xs sm:text-sm md:text-base lg:text-xl font-medium transition-colors duration-300 
                ${
                  activeCategory === "Men's"
                    ? "text-green-800 font-semibold"
                    : "text-gray-800"
                }`}
            >
              Men's
            </span>
          </div>

          {/* Headset */}
          <div
            onClick={() => handleCategoryClick("Headset")}
            className="flex-shrink-0 flex flex-col items-center text-center cursor-pointer group"
          >
            <div
              className={`rounded-full flex items-center justify-center shadow-md overflow-hidden
                w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-24 lg:h-24
                bg-[#e8ebea] hover:scale-110 transition-transform duration-400 ease-in-out
                ${activeCategory === "Headset" ? "ring-2 ring-green-600" : ""}`}
            >
              <img
                src={hedset}
                alt="Headset"
                className="object-contain w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-24 lg:h-24"
              />
            </div>
            <span
              className={`mt-3 text-xs sm:text-sm md:text-base lg:text-xl font-medium transition-colors duration-300 
                ${
                  activeCategory === "Headset"
                    ? "text-green-800 font-semibold"
                    : "text-gray-800"
                }`}
            >
              Headset
            </span>
          </div>

          {/* Airpod */}
          <div
            onClick={() => handleCategoryClick("Airpod")}
            className="flex-shrink-0 flex flex-col items-center text-center cursor-pointer group"
          >
            <div
              className={`rounded-full flex items-center justify-center shadow-md overflow-hidden
                w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-24 lg:h-24
                bg-[#e8ebea] hover:scale-110 transition-transform duration-400 ease-in-out
                ${activeCategory === "Airpod" ? "ring-2 ring-green-600" : ""}`}
            >
              <img
                src={airpod}
                alt="Airpod"
                className="object-contain w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-18 lg:h-18"
              />
            </div>
            <span
              className={`mt-3 text-xs sm:text-sm md:text-base lg:text-xl font-medium transition-colors duration-300 
                ${
                  activeCategory === "Airpod"
                    ? "text-green-800 font-semibold"
                    : "text-gray-800"
                }`}
            >
              Airpod
            </span>
          </div>

          {/* Watches */}
          <div
            onClick={() => handleCategoryClick("Watches")}
            className="flex-shrink-0 flex flex-col items-center text-center cursor-pointer group"
          >
            <div
              className={`rounded-full flex items-center justify-center shadow-md overflow-hidden
                w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-24 lg:h-24
                bg-[#e8ebea] hover:scale-110 transition-transform duration-400 ease-in-out
                ${activeCategory === "Watches" ? "ring-2 ring-green-600" : ""}`}
            >
              <img
                src={watch}
                alt="Watches"
                className="object-contain w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-26 lg:h-22"
              />
            </div>
            <span
              className={`mt-3 text-xs sm:text-sm md:text-base lg:text-xl font-medium transition-colors duration-300 
                ${
                  activeCategory === "Watches"
                    ? "text-green-800 font-semibold"
                    : "text-gray-800"
                }`}
            >
              Watches
            </span>
          </div>

          {/* Shoes */}
          <div
            onClick={() => handleCategoryClick("Shoes")}
            className="flex-shrink-0 flex flex-col items-center text-center cursor-pointer group"
          >
            <div
              className={`rounded-full flex items-center justify-center shadow-md overflow-hidden
                w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-24 lg:h-24
                bg-[#e8ebea] hover:scale-110 transition-transform duration-400 ease-in-out
                ${activeCategory === "Shoes" ? "ring-2 ring-green-600" : ""}`}
            >
              <img
                src={shoes}
                alt="Shoes"
                className="object-contain w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-14 lg:h-14"
              />
            </div>
            <span
              className={`mt-3 text-xs sm:text-sm md:text-base lg:text-xl font-medium transition-colors duration-300 
                ${
                  activeCategory === "Shoes"
                    ? "text-green-800 font-semibold"
                    : "text-gray-800"
                }`}
            >
              Shoes
            </span>
          </div>

          {/* Powerbank */}
          <div
            onClick={() => handleCategoryClick("Powerbank")}
            className="flex-shrink-0 flex flex-col items-center text-center cursor-pointer group"
          >
            <div
              className={`rounded-full flex items-center justify-center shadow-md overflow-hidden
                w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-24 lg:h-24
                bg-[#e8ebea] hover:scale-110 transition-transform duration-400 ease-in-out
                ${
                  activeCategory === "Powerbank" ? "ring-2 ring-green-600" : ""
                }`}
            >
              <img
                src={powerbank}
                alt="Powerbank"
                className="object-contain w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-19 lg:h-19"
              />
            </div>
            <span
              className={`mt-3 text-xs sm:text-sm md:text-base lg:text-xl font-medium transition-colors duration-300 
                ${
                  activeCategory === "Powerbank"
                    ? "text-green-800 font-semibold"
                    : "text-gray-800"
                }`}
            >
              Powerbank
            </span>
          </div>

          {/* women's */}
          <div
            onClick={() => handleCategoryClick("Powerbank")}
            className="flex-shrink-0 flex flex-col items-center text-center cursor-pointer group"
          >
            <div
              className={`rounded-full flex items-center justify-center shadow-md overflow-hidden
                w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-24 lg:h-24
                bg-[#e8ebea] hover:scale-110 transition-transform duration-400 ease-in-out
                ${
                  activeCategory === "Powerbank" ? "ring-2 ring-green-600" : ""
                }`}
            >
              <img
                src={women}
                alt="women's"
                className="object-contain w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-19 lg:h-19"
              />
            </div>
            <span
              className={`mt-3 text-xs sm:text-sm md:text-base lg:text-xl font-medium transition-colors duration-300 
                ${
                  activeCategory === "Powerbank"
                    ? "text-green-800 font-semibold"
                    : "text-gray-800"
                }`}
            >
              women's
            </span>
          </div>

          {/* beauty */}
          <div
            onClick={() => handleCategoryClick("Powerbank")}
            className="flex-shrink-0 flex flex-col items-center text-center cursor-pointer group"
          >
            <div
              className={`rounded-full flex items-center justify-center shadow-md overflow-hidden
                w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-24 lg:h-24
                bg-[#e8ebea] hover:scale-110 transition-transform duration-400 ease-in-out
                ${
                  activeCategory === "Powerbank" ? "ring-2 ring-green-600" : ""
                }`}
            >
              <img
                src={beauty}
                alt="beauty"
                className="object-contain w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-19 lg:h-19"
              />
            </div>
            <span
              className={`mt-3 text-xs sm:text-sm md:text-base lg:text-xl font-medium transition-colors duration-300 
                ${
                  activeCategory === "Powerbank"
                    ? "text-green-800 font-semibold"
                    : "text-gray-800"
                }`}
            >
              beauty
            </span>
          </div>

           {/* Footwear */}
          <div
            onClick={() => handleCategoryClick("Powerbank")}
            className="flex-shrink-0 flex flex-col items-center text-center cursor-pointer group"
          >
            <div
              className={`rounded-full flex items-center justify-center shadow-md overflow-hidden
                w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-24 lg:h-24
                bg-[#e8ebea] hover:scale-110 transition-transform duration-400 ease-in-out
                ${
                  activeCategory === "Powerbank" ? "ring-2 ring-green-600" : ""
                }`}
            >
              <img
                src={Footwear}
                alt="Footwear"
                className="object-contain w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-19 lg:h-19"
              />
            </div>
            <span
              className={`mt-3 text-xs sm:text-sm md:text-base lg:text-xl font-medium transition-colors duration-300 
                ${
                  activeCategory === "Powerbank"
                    ? "text-green-800 font-semibold"
                    : "text-gray-800"
                }`}
            >
             Footwear
            </span>
          </div>


   {/* wallat */}
          <div
            onClick={() => handleCategoryClick("Powerbank")}
            className="flex-shrink-0 flex flex-col items-center text-center cursor-pointer group"
          >
            <div
              className={`rounded-full flex items-center justify-center shadow-md overflow-hidden
                w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-24 lg:h-24
                bg-[#e8ebea] hover:scale-110 transition-transform duration-400 ease-in-out
                ${
                  activeCategory === "Powerbank" ? "ring-2 ring-green-600" : ""
                }`}
            >
              <img
                src={wallat}
                alt="beauty"
                className="object-contain w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-19 lg:h-19"
              />
            </div>
            <span
              className={`mt-3 text-xs sm:text-sm md:text-base lg:text-xl font-medium transition-colors duration-300 
                ${
                  activeCategory === "Powerbank"
                    ? "text-green-800 font-semibold"
                    : "text-gray-800"
                }`}
            >
             wallat
            </span>
          </div>



        </div>
      </div>
    </div>
  );
};

export default Categories;
