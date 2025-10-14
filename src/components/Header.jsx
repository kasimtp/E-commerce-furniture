import React, { useState } from "react";

// 🖼️ All imports
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

  // ✅ Category data (to reduce repetition)
  const categories = [
    { name: "Men's", img: men },
    { name: "Headset", img: hedset },
    { name: "Airpod", img: airpod },
    { name: "Watches", img: watch },
    { name: "Shoes", img: shoes },
    { name: "Powerbank", img: powerbank },
    { name: "Women's", img: women },
    { name: "Beauty", img: beauty },
    { name: "Footwear", img: Footwear },
    { name: "Wallet", img: wallat },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-20 flex flex-col items-center space-y-8 font-poppins">
      {/* Header */}
      <div className="text-center">
        <p className="text-xs sm:text-sm lg:text-[18px] text-[#6C757D] uppercase tracking-widest">
          passion for fashion
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-[44px] font-bold text-[#212529]">
          Shop By Categories
        </h2>
      </div>

      {/* ✅ Scrollable Categories */}
      <div className="w-full overflow-x-auto whitespace-nowrap no-scrollbar scroll-smooth touch-pan-x">
        <div className="inline-flex gap-6 sm:gap-10 md:gap-16 lg:gap-20 px-4">
          {categories.map((cat) => (
            <div
              key={cat.name}
              onClick={() => handleCategoryClick(cat.name)}
              className="flex-shrink-0 flex flex-col items-center text-center cursor-pointer group"
            >
              <div
                className={`rounded-full flex items-center justify-center shadow-md overflow-hidden
                  w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-24 lg:h-24
                  bg-gray-50 hover:scale-110 transition-transform duration-400 ease-in-out
                  ${activeCategory === cat.name ? "ring-2 ring-green-600" : ""}`}
              >
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="object-contain w-8 h-8 sm:w-14 sm:h-14 md:w-20 md:h-20"
                />
              </div>
              <span
                className={`mt-3 text-xs sm:text-sm md:text-base lg:text-xl font-medium transition-colors duration-300 
                  ${
                    activeCategory === cat.name
                      ? "text-green-800 font-semibold"
                      : "text-gray-800"
                  }`}
              >
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
