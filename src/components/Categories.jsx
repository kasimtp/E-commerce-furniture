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

import React from "react";
import shoes from "../assets/shoes.png";
import airpod from "../assets/airpod.png";
import hedset from "../assets/hedset.png";
import watch from "../assets/watch.png";

const Categories = () => {
  const categoryIcons = [
    { img: watch, alt: "Watch", label: "Watches" },
    { img: hedset, alt: "Headset", label: "Headsets" },
    { img: airpod, alt: "AirPod", label: "AirPods" },
    { img: shoes, alt: "Shoes", label: "Shoes" },
    { img: watch, alt: "Smart Watch", label: "Smartwatch" },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto py-6 bg-white font-Poppins flex flex-col items-center space-y-6 px-4">
      <div className="text-center space-y-1">
        <p className="text-xs text-gray-500 uppercase tracking-widest">
          passion for fashion
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Shop By Categories
        </h2>
      </div>

      <div className="flex overflow-x-auto space-x-6 scrollbar-hide w-full">
        {categoryIcons.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center shrink-0"
          >
            <div
              className="bg-[#fef4f4] border-4 border-red-500 rounded-full flex items-center justify-center shadow-md overflow-hidden
              w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24
              hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
            >
              <img
                src={category.img}
                alt={category.alt}
                className="object-contain
                w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
              />
            </div>
            <span className="text-xs sm:text-sm mt-2 text-gray-800 font-medium">
              {category.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;









// {/* Image Section */}
//       <div className="flex flex-row lg:flex-row gap-6 px-4 sm:px-8 md:px-16 lg:px-32 pb-10 w-[98%]">
//         {/* Left Image */}
//         {product[0] && (
//           <div className="lg:w-2/4 bg-amber-200 h-full flex items-center">
//             <div className="relative w-full">
//               <img
//                 src={product[0].image}
//                 alt={`Category - ${product[0].name}`}
//                 className="w-[200px] h-[00px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg"
//               />
//               <div className="absolute bottom-4 left-4 bg-white text-black font-semibold px-4 py-2 rounded-full shadow">
//                 {getCategoryLabel(product[0], 0)}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Right Images */}
//         <div className="lg:w-3/5 flex flex-col gap-6">
//           {/* Top Right */}
//           {product[1] && (
//             <div className="relative w-full">
//               <img
//                 src={product[1].image}
//                 alt={`Category - ${product[1].name}`}
//                 className="w-full h-[250px] sm:h-[300px] md:h-[230px] object-cover rounded-lg"
//               />
//               <div className="absolute bottom-4 left-4 bg-white text-black font-semibold px-4 py-2 rounded-full shadow">
//                 {getCategoryLabel(product[1], 1)}
//               </div>
//             </div>
//           )}

//           {/* Bottom Two */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             {product.slice(2, 4).map((item, index) => (
//               <div key={index} className="relative">
//                 <img
//                   src={item.image}
//                   alt={`Category - ${item.name}`}
//                   className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover rounded-lg"
//                 />
//                 <div className="absolute bottom-4 left-4 bg-white text-black font-semibold px-4 py-2 rounded-full shadow">
//                   {getCategoryLabel(item, index + 2)}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
