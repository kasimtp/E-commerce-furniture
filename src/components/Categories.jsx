import React, { useState } from "react";
import shoes from "../assets/shoes.png";
import airpod from "../assets/airpod.png";
import hedset from "../assets/hedset.png";
import watch from "../assets/watch.png";
import powerbank from "../assets/powerbank.png";
import moreicon from "../assets/moreicon.png";
import men from "../assets/men.png";

const categoryData = [
  { name: "Men's", img: men },
  { name: "Headset", img: hedset },
  { name: "Airpod", img: airpod },
  { name: "Watches", img: watch },
  { name: "Shoes", img: shoes },
  { name: "Powerbank", img: powerbank },
  { name: "More items", img: moreicon },
];

const Categories = ({ onCategoryClick }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (categoryName) => {
    setActiveCategory(categoryName);
    onCategoryClick(categoryName);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-20 lg:-mt-[500px] -mt-24 flex flex-col items-center space-y-8 font-poppins">
      {/* Header */}
      <div className="text-center space-y-2">
        <p className="text-xs sm:text-sm lg:text-[18px] text-[#6C757D] uppercase tracking-widest">
          passion for fashion
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-[44px] font-bold text-[#212529]">
          Shop By Categories
        </h2>
      </div>

      {/* Horizontal Scroll Categories */}
      <div className="w-full overflow-x-auto no-scrollbar">
        <div className="flex gap-6 lg:gap-12 px-2">
          {categoryData.map((item, index) => {
            const isActive = activeCategory === item.name;
            return (
              <div
                key={index}
                onClick={() => handleCategoryClick(item.name)}
                className="flex-shrink-0 flex flex-col items-center text-center cursor-pointer group"
              >
                <div
                  className={`rounded-full flex items-center justify-center shadow-md overflow-hidden
                    w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-24 lg:h-24
                    bg-[#e8ebea] hover:scale-110 transition-transform duration-400 ease-in-out
                    ${isActive ? "ring-2 ring-green-600" : ""}
                  `}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="object-contain w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-24 lg:h-24"
                  />
                </div>
                <span
                  className={`mt-3 text-xs sm:text-sm md:text-base lg:text-xl font-medium transition-colors duration-300 
                    ${isActive ? "text-green-800 font-semibold" : "text-gray-800"}
                  `}
                >
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
