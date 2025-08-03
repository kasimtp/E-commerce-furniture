// import { useState, useEffect } from "react";
// import { getData } from "../ProductList.js";
// import shoes from "../assets/shoes.png"
// import airpod from "../assets/airpod.png"
// import hedset from "../assets/hedset.png"
// import watch from "../assets/watch.png"

// const Categories = () => {
//   // const [product, setProduct] = useState([]);

//   // const fetchInfo = async () => {
//   //   const response = await getData();
//   //   console.log(response.data);
//   //   if (response.data) {
//   //     setProduct(response.data);
//   //   }
//   // };

//   // useEffect(() => {
//   //   fetchInfo();
//   // }, []);

//   // const getCategoryLabel = (product, index) => {
//   //   return product?.name || `Product ${index + 1}`;
//   // };

//   return (
//     <div className="w-full h-full flex flex-col sm:space-y-14 font-Poppins space-y-4 bg-white">
//       {/* Header */}
//       <div className="flex flex-col space-y-12 px-4 sm:px-8 md:px-16 lg:px-20 text-center sm:mr-16">
//         <p className="text-sm font-semibold capitalize sm:text-base text-[#474747] leading-7">
//           passion for fashion
//         </p>
//         <p className="text-2xl sm:text-4xl text-[#2b2b2b font-semibold leading-tight">
//           Shop By Categories
//         </p>
//       </div>

//       <div className="bg-amber-200 flex flex-row space-x-3 border rounded-2xl">


//         <div className=" w-[92px] h-[92px] rounded-full bg-gradient-to-br from-yellow-300 to-orange-400  p-2 border border-white shadow-md hover:scale-105 transition-transform duration-300  items-center justify-center">
//           <img className="w-8 h-8 bg-black " src={watch}  alt="" />
//         </div>
//         <div></div>
//         <div></div>
//         <div></div>
      
       
//         <img  className="bg-amber-600 border rounded-full w-18 h-18 border-black" src={hedset} alt="" />
//         <img  className="bg-amber-600 border rounded-full w-18 h-18 border-black" src={airpod} alt="" />
//         <img  className="bg-amber-600 border rounded-full w-18 h-18 border-black" src={shoes} alt="" />
//         <img   className="bg-amber-600 border rounded-full w-18 h-18 border-black"src={watch} alt="" />
//       </div>

      
//     </div>
//   );
// };

// export default Categories;













// import shoes from "../assets/shoes.png";
// import airpod from "../assets/airpod.png";
// import hedset from "../assets/hedset.png";
// import watch from "../assets/watch.png";

// const Categories = () => {
//   const items = [
//     { img: watch, alt: "Watch" },
//     { img: hedset, alt: "Headset" },
//     { img: airpod, alt: "AirPod" },
//     { img: shoes, alt: "Shoes" },
//     { img: watch, alt: "Smart Watch" },
//   ];

//   return (
//     <div className="w-full py-10 bg-white font-Poppins flex flex-col items-center space-y-8">
//       {/* Header */}
//       <div className="text-center space-y-2 px-4">
//         <p className="text-sm text-gray-500 uppercase tracking-widest">passion for fashion</p>
//         <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Shop By Categories</h2>
//       </div>

//       {/* Category bar */}
//       <div className="flex overflow-x-auto space-x-4 px-4 py-4 scrollbar-hide w-full max-w-5xl">
//         {items.map((item, index) => (
//           <div
//             key={index}
//             className="min-w-[120px] sm:min-w-[180px] h-[100px] sm:h-[100px] bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full p-2 border-4 border-white shadow-md hover:scale-105 transition-transform duration-300 flex items-center justify-center"
//           >
//             <img
//               src={item.img}
//               alt={item.alt}
//               className="w-20 h-20 sm:w-10 sm:h-10 object-contain"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Categories;import React from "react";

// import shoes from "../assets/shoes.png";
// import airpod from "../assets/airpod.png";
// import hedset from "../assets/hedset.png";
// import watch from "../assets/watch.png";
// import powerbank from "../assets/powerbank.png";
// import smartwatch from "../assets/smartwatch.png";

// const categoryData = [
//   { name: "Watch", img: watch },
//   { name: "Headset", img: hedset },
//   { name: "AirPods", img: airpod },
//   { name: "Shoes", img: shoes },
//   { name: "Smartwatch", img: smartwatch },
//   { name: "Powerbank", img: powerbank },
//   { name: "Smartwatch", img: smartwatch },
    
// ];

// const Categories = () => {
//   return (
//     <div className="w-full max-w-7xl mx-auto  bg-white font-Poppins flex flex-col items-center space-y-6 px-4">
//       {/* Header */}
//       <div className="text-center space-y-1">
//         <p className="text-xs   mt-0 md:mt-0 lg:mt-20 text-gray-500 uppercase tracking-widest">
//           passion for fashion
//         </p>
//         <h2 className="text-2xl sm:text-3xl  mt-0 md:mt-0 lg:mt-[14px] font-bold text-gray-800">
//           Shop By Categories
//         </h2>
//       </div>

//       {/* Categories */}
//       <div className="flex overflow-x-auto overflow-y-hidden space-x-6 w-full no-scrollbar">
//         {categoryData.map((item, index) => (
//           <div key={index} className="flex flex-col items-center text-center shrink-0">
//             <div className="bg-[#fef4f4] border-4 text-gray-800 rounded-full flex items-center justify-center shadow-md overflow-hidden
//                 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24
//                 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
//               <img
//                 src={item.img}
//                 alt={item.name}
//                 className="object-contain w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
//               />
//             </div>
//             <span className="text-xs sm:text-sm mt-2 text-gray-800 font-medium">
//               {item.name}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Categories;











// import React from "react";
// import shoes from "../assets/shoes.png";
// import airpod from "../assets/airpod.png";
// import hedset from "../assets/hedset.png";
// import watch from "../assets/watch.png";
// import powerbank from "../assets/powerbank.png";
// import smartwatch from "../assets/smartwatch.png";

// const categoryData = [
//   { name: "Watchs", img: watch },
//   { name: "Headset", img: hedset },
//   { name: "AirPods", img: airpod },
//   { name: "Shoes", img: shoes },
//   { name: "Smartwatch", img: smartwatch },
//   { name: "Powerbank", img: powerbank },
// ];
 


// const Categories = ({ onCategoryClick }) => {
//   return (
//     <div className="w-full max-w-7xl mx-auto bg-white font-Poppins flex flex-col items-center space-y-6 px-4">
//       {/* Header */}
//       <div className="text-center space-y-1">
//         <p className="text-xs mt-0 md:mt-0 lg:mt-20 text-[#6C757D] uppercase tracking-widest">
//           passion for fashion
//         </p>
//         <h2 className="text-2xl sm:text-3xl mt-0 md:mt-0 lg:mt-[14px] font-bold text-[#212529] ">
//           Shop By Categories
//         </h2>
//       </div>

//       {/* Categories List */}
//       <div className="flex overflow-x-auto overflow-y-hidden space-x-6 w-full no-scrollbar">
//         {categoryData.map((item, index) => (
//           <div
//             key={index}
//             onClick={() => onCategoryClick(item.name)} // 👉 Click to filter
//             className="flex flex-col items-center text-center shrink-0 cursor-pointer"
//           >
//             <div
//               className="bg-[#F8F9FA] border-3 text-[#0D6EFD] rounded-full flex items-center justify-center shadow-md overflow-hidden
//                 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24
//                 hover:scale-105 transition-transform duration-300 ease-in-out"
//             >
//               <img
//                 src={item.img}
//                 alt={item.name}
//                 className="object-contain w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
//               />
//             </div>
//             <span className="text-xs sm:text-sm mt-2 text-[#212529] font-medium">
//               {item.name}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Categories;









// import React, { useState } from "react";
// import shoes from "../assets/shoes.png";
// import airpod from "../assets/airpod.png";
// import hedset from "../assets/hedset.png";
// import watch from "../assets/watch.png";
// import powerbank from "../assets/powerbank.png";
// import smartwatch from "../assets/smartwatch.png";

// const categoryData = [
//   { name: "Watchs", img: watch },
//   { name: "Headset", img: hedset },
//   { name: "AirPods", img: airpod },
//   { name: "Shoes", img: shoes },
//   { name: "Smartwatch", img: smartwatch },
//   { name: "Powerbank", img: powerbank },
// ];

// const Categories = ({ onCategoryClick }) => {
//   const [activeCategory, setActiveCategory] = useState(null);

//   const handleCategoryClick = (categoryName) => {
//     setActiveCategory(categoryName);
//     onCategoryClick(categoryName);
//   };

//   return (
//     <div className="w-full max-w-7xl mx-auto bg-white font-Poppins flex flex-col items-center space-y-6 px-4">
//       {/* Header */}
//       <div className="text-center space-y-1">
//         <p className="text-xs mt-0 md:mt-0 lg:mt-20 text-[#6C757D] uppercase tracking-widest">
//           passion for fashion
//         </p>
//         <h2 className="text-2xl sm:text-3xl mt-0 md:mt-0 lg:mt-[14px] font-bold text-[#212529]">
//           Shop By Categories
//         </h2>
//       </div>

//       {/* Categories List */}
//       <div className="flex overflow-x-auto overflow-y-hidden space-x-6 w-full no-scrollbar">
//         {categoryData.map((item, index) => {
//           const isActive = activeCategory === item.name;

//           return (
//             <div
//               key={index}
//               onClick={() => handleCategoryClick(item.name)}
//               className="flex flex-col items-center text-center shrink-0 cursor-pointer"
//             >
//               <div
//                 className={`bg-[#F8F9FA] border-4 rounded-full flex items-center justify-center shadow-md overflow-hidden
//                   w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24
//                   hover:scale-105 transition-transform duration-300 ease-in-out
//                   ${isActive ? 'text-[#0D6EFD]' : 'border-[#0D6EFD]'}`}
//               >
//                 <img
//                   src={item.img}
//                   alt={item.name}
//                   className="object-contain w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
//                 />
//               </div>
//               <span
//                 className={`text-xs sm:text-sm mt-2 font-medium transition-colors duration-200 ${
//                   isActive ? 'text-[#0D6EFD]' : 'text-[#212529]'
//                 }`}
//               >
//                 {item.name}
//               </span>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Categories;
























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
    <div className="w-full max-w-7xl mx-auto bg-white font-Poppins flex flex-col items-center space-y-6 px-4">
      {/* Header */}
      <div className="text-center space-y-1">
        <p className="text-xs lg:mt-20 text-[#6C757D] uppercase tracking-widest">
          passion for fashion
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#212529]">
          Shop By Categories
        </h2>
      </div>

      {/* Categories List */}
      <div className="flex overflow-x-auto  overflow-y-hidden space-x-6 md:space-x-6 lg:space-x-10 w-full no-scrollbar pb-2">
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
                  w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-34 lg:h-34
                  hover:scale-105 transition-transform duration-300 ease-in-out
                   border-[2px] md:border-[3px] lg:border-[5px]   md:p-[10px]  lg:p-[15px] bg-[#e8ebea]
                  ${isActive ? 'border-green-800' : 'border-[#4CB19A]'}`}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="object-contain w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-30 lg:h-30"
                />
              </div>
              <span
                className={`text-xs sm:text-sm  md:text-[14px] lg:text-[16px] mt-2 text-center transition-colors duration-300 
                  ${isActive ? 'text-green-800 font-medium font-sans' : 'text-[#4CB19A] font-sans font-medium'}
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

