
import React, { useState } from "react";
import shoes from "../assets/shoes.png";
import airpod from "../assets/airpod.png";
import hedset from "../assets/hedset.png";
import watch from "../assets/watch.png";
import powerbank from "../assets/powerbank.png";
import smartwatch from "../assets/smartwatch.png";


const categoryData = [
  { name: "Watchs", img: watch },
  { name: "Headset", img: hedset },
  { name: "AirPods", img: airpod },
  { name: "Shoes", img: shoes },
  { name: "Smartwatch", img: smartwatch },
  { name: "Powerbank", img: powerbank },
];

const Categories = ({ onCategoryClick }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (categoryName) => {
    setActiveCategory(categoryName);
    onCategoryClick(categoryName);
  };

  return (
    <div className="w-full  max-w-7xl mx-auto h-auto  bg-white  font-Poppins flex flex-col items-center space-y-6 px-4">
      {/* Header */}
      <div className="text-center space-y-1">
        <p className="text-xs lg:text-[60px] lg:mt-22 text-[#6C757D] uppercase tracking-widest">
          passion for fashion
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-[120px] lg:mt-22 font-bold lg:font-semibold  text-[#212529]">
          Shop By Categories
        </h2>
      </div>

      {/* Categories List */}
      <div className="flex overflow-x-auto lg:mt-24 bg-red-000 pt-2 place-content-center overflow-y-hidden space-x-6 md:space-x-6 lg:space-x-60 lg:bg-amber-000  lg:w-screen w-full no-scrollbar pb-2">
        {categoryData.map((item, index) => {
          const isActive = activeCategory === item.name;

          return (
            <div
              key={index}
              onClick={() => handleCategoryClick(item.name)}
              className="flex flex-col items-center text-center shrink-0 cursor-pointer group"
            >
              <div
                className={`rounded-full flex items-center justify-center shadow-md overflow-hidden
                  w-16 h-16  sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-70 lg:h-70
                  hover:scale-105 transition-transform duration-300 ease-in-out
                        md:p-[10px]  lg:p-[15px] bg-[#e8ebea]
                  ${isActive ? 'border-green-000' : 'border-red-000'}`}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="object-contain w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-50 lg:h-50"
                />
              </div>
              <span
                className={`text-xs sm:text-sm  md:text-[14px] lg:text-[36px] mt-2 lg:mt-8 font-Poppins  text-center transition-colors duration-300 
                  ${isActive ? 'text-green-800 font-medium font-sans' : 'text-black  font-Poppins font-medium'}
                `}
              >
                {item.name} 
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;

