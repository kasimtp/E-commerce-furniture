import { useState, useEffect } from "react";
import { getData } from "../ProductList.js";
import shoes from "../assets/shoes.jpg"
import airpod from "../assets/airpod.jpg"
import hedset from "../assets/hedset.png"
import watch from "../assets/watch.jpg"

const Categories = () => {
  // const [product, setProduct] = useState([]);

  // const fetchInfo = async () => {
  //   const response = await getData();
  //   console.log(response.data);
  //   if (response.data) {
  //     setProduct(response.data);
  //   }
  // };

  // useEffect(() => {
  //   fetchInfo();
  // }, []);

  // const getCategoryLabel = (product, index) => {
  //   return product?.name || `Product ${index + 1}`;
  // };

  return (
    <div className="w-full h-full flex flex-col sm:space-y-14 font-Poppins space-y-4 bg-white">
      {/* Header */}
      <div className="flex flex-col space-y-12 px-4 sm:px-8 md:px-16 lg:px-20 text-center sm:mr-16">
        <p className="text-sm font-semibold capitalize sm:text-base text-[#474747] leading-7">
          passion for fashion
        </p>
        <p className="text-2xl sm:text-4xl text-[#2b2b2b font-semibold leading-tight">
          Shop By Categories
        </p>
      </div>

      <div className="bg-amber-200 flex flex-row space-x-3 border rounded-2xl">
      
        <img  className="bg-yellow-500 border rounded-full size={24} border-blue-600 " src={watch}  alt="" />
        <img  className="bg-amber-600 border rounded-full size={24} border-black" src={hedset} alt="" />
        <img  className="bg-amber-600 border rounded-full size={24} border-black" src={airpod} alt="" />
        <img  className="bg-amber-600 border rounded-full w-18 h-18 border-black" src={shoes} alt="" />
        <img   className="bg-amber-600 border rounded-full size={24} border-black"src={watch} alt="" />
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
