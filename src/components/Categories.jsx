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

  const categories = [
    { name: "Men's", image: men },
    { name: "Headset", image: hedset },
    { name: "Airpod", image: airpod },
    { name: "Watches", image: watch },
    { name: "Shoes", image: shoes },
    { name: "Powerbank", image: powerbank },
    { name: "Women's", image: women },
    { name: "Beauty", image: beauty },
    { name: "Footwear", image: Footwear },
    { name: "Wallet", image: wallat },
  ];

  const handleCategoryClick = (categoryName) => {
    setActiveCategory(categoryName);
    onCategoryClick(categoryName);
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-20 lg:-mt-[500px] -mt-24 font-poppins">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-xs sm:text-sm lg:text-[18px] text-[#6C757D] uppercase tracking-widest">
          passion for fashion
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-[44px] lg:mt-14 font-bold text-[#212529]">
          Shop By Categories
        </h2>
      </div>

      {/* Scrollable Category Row */}
      <div className="w-full overflow-x-auto bg-red-000 py-1 whitespace-nowrap scroll-smooth no-scrollbar">
        <div className="inline-flex gap-5 sm:gap-10 md:gap-14 lg:gap-20 px-4">
          {categories.map((category) => (
            <div
              key={category.name}
              onClick={() => handleCategoryClick(category.name)}
              className="flex-shrink-0 flex flex-col items-center text-center cursor-pointer group"
            >
              <div
                className={`w-16 h-16 sm:w-20  sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center rounded-full bg-gray-0 shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg overflow-hidden
                ${
                  activeCategory === category.name
                    ? "ring-2 text-[#4CB19A]"
                    : "ring-0"
                }`}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="object-contain w-10 h-10 sm:w-14 sm:h-14 md:w-18 md:h-18"
                />
              </div>
              <span
                className={`mt-3 text-sm sm:text-base lg:text-lg font-medium transition-colors duration-300 ${
                  activeCategory === category.name
                    ? "text-[#4CB19A] font-semibold"
                    : "text-gray-800"
                }`}
              >
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
