// import { BsCart2, BsCurrencyDollar } from "react-icons/bs";
// import { CiHeart } from "react-icons/ci";
// import { useEffect, useState } from "react";
// import { getData } from "../ProductList.js";
// import { useNavigate } from "react-router";
// import { toast } from "react-toastify";
// import { useDispatch } from 'react-redux'

// const Popular = () => {
  
//     const dispatch = useDispatch()
//   const [product, setProduct] = useState([]);

//   // Fetch product data
//   const fetchInfo = async () => {
//     try {
//       const response = await getData();
//       if (response.data) {
//         setProduct(response.data);
//       }
//     } catch (error) {
//       console.error("Failed to fetch products:", error);
//     }
//   };

//   useEffect(() => {
//     fetchInfo();
//   }, []);
//   const navigate = useNavigate();


//     const handleClickwishList = (id) => {
//     const user = localStorage.getItem("id");

//     if (user) {
//       fetch("http://localhost:5000/api/wish-list", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           user,
//           product: id,
//           quantity: 1,
          
          
//         }),
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           console.log("wishlist Data:", data);
//           toast.success("Product added to wishlist!");
//         })
//         .catch((error) => {
//           console.error("Error adding to wishlist:", error);
//           toast.error("Failed to add to wishlist");
//         });
//     } else {
//       alert("Please login to add to wishlist.");
//       navigate("/Login");
//     }
//   }

//   const handleClick = (id) => {
//     const user = localStorage.getItem("id");

//     if (user) {
//       fetch("http://localhost:5000/api/post-cart", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           user,
//           product: id,
//           quantity: 1,
//         }),
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           console.log("Cart Data:", data);
//           toast.success("Product added to cart!");
//         })
//         .catch((error) => {
//           console.error("Error adding to cart:", error);
//           toast.error("Failed to add to cart");
//         });
//     } else {
//       alert("Please login to add to cart.");
//       navigate("/Login");
//     }
//   };

//   return (
//     <div className="w-full">
//       {/* Header Section */}
//       <div className="flex flex-col items-center gap-4 mt-28">
//         <p className="text-[15px] uppercase">Trending now</p>
//         <p className="font-Poppins font-semibold capitalize text-5xl">
//           Popular This Week
//         </p>
//       </div>

//       {/* Cards Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24 px-6 w-[90%] mx-auto">
//         {product.map((item, index) => (
//           <div
//             key={index}
//             className="flex flex-col gap-4 p-4 rounded-lg shadow-lg w-full h-[550px]"
//           >
//             {/* Image */}
//             <div  className="relative overflow-hidden cursor-pointer h-[300px]">
//               <img onClick={()=>navigate(`/productdetiles/${item._id}`)}
//                 src={item.image}
//                 alt={`popular-${index}`}
//                 className="h-full w-full object-cover rounded-md"
//               />
//               {item.discount && (
//                 <div className="absolute top-4 left-4 bg-white text-black px-3 py-1 text-sm font-semibold rounded-full shadow-md">
//                   5% OFF
//                 </div>
//               )}
//               <CiHeart onClick={()=> handleClickwishList(item._id) } className="absolute top-4 right-4 text-5xl text-black bg-white p-2 rounded-full shadow-md cursor-pointer" />
//             </div>

//             {/* Text Section */}
//             <div className="flex flex-col items-center justify-between flex-grow text-center">
//               <p className="text-lg font-semibold">{item.name}</p>

//               {/* Price and Add to Cart */}
//               <div className="flex flex-col items-center gap-2 mt-4">
//                 <div className="flex items-center gap-1 hover:text-blue-600">
//                   <BsCurrencyDollar className="text-xl" />
//                   <span className="text-lg font-semibold">
//                     {item.price.toFixed(2)}
//                   </span>
//                 </div>

//                 {/* Add to Cart Button */}
//                 <div
//                   className="flex flex-row items-center gap-2 hover:bg-neutral-200 border border-amber-100 hover:border-black bg-white p-2 rounded-md shadow-md cursor-pointer"
//                   onClick={() => handleClick(item._id)}
//                 >
//                   <BsCart2 className="text-xl text-black" />
//                   <button className="text-sm font-semibold text-black">
//                     Add To Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Popular;





// import { BsCart2 } from "react-icons/bs";
// import { RiMoneyRupeeCircleLine } from "react-icons/ri";
// import { FiShoppingCart } from "react-icons/fi";
// import { CiHeart } from "react-icons/ci";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router";
// import { toast } from "react-toastify";
// import { useDispatch } from "react-redux";
// import { getData } from "../ProductList"; // Ensure this uses apiClient internally
// import { apiClient } from "../utils/api";

// const Popular = () => {
//   const dispatch = useDispatch();
//   const [product, setProduct] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchInfo();
//   }, []);

//   const fetchInfo = async () => {
//     try {
//       const response = await getData();
//       if (response.data) {
//         setProduct(response.data);
//       }
//     } catch (error) {
//       console.error("Failed to fetch products:", error);
//     }
//   };

//   const handleClickwishList = async (id) => {
//     const user = localStorage.getItem("id");
//     if (!user) {
//       alert("Please login to add to wishlist.");
//       navigate("/Login");
//       return;
//     }

//     try {
//       const res = await apiClient.post("/wish-list", {
//         user,
//         product: id,
//         quantity: 1,
//       });
//       console.log("Wishlist Data:", res.data);
//       toast.success("Product added to wishlist!");
//     } catch (err) {
//       console.error("Wishlist error:", err);
//       toast.error("Failed to add to wishlist.");
//     }
//   };

//   const handleClick = async (id) => {
//     const user = localStorage.getItem("id");
//     if (!user) {
//       alert("Please login to add to cart.");
//       navigate("/Login");
//       return;
//     }

//     try {
//       const res = await apiClient.post("/post-cart", {
//         user,
//         product: id,
//         quantity: 1,
//       });
//       console.log("Cart Data:", res.data);
//       toast.success("Product added to cart!");
//     } catch (err) {
//       console.error("Cart error:", err);
//       toast.error("Failed to add to cart.");
//     }
//   };

//   return (
//     <div className="w-full mt-[12px]">
//       {/* Header */}
//       <div className="flex flex-col items-center gap-4 ">
//         <p className="text-[15px] md:text-[15px] text-gray-800 lg:text-[55px] mt-[0px] md:mt-[40px] lg:mt-[50px] font-Poppins font-medium underline underline-offset-2 md:underline-offset-2 lg:underline-offset-5 decoration-orange-600 decoration-1
//          uppercase">
//           Trending now</p>
//         {/* <p className="font-Poppins font-semibold capitalize text-5xl">
//           Popular This Week
//         </p> */}
//       </div>
 
//       {/* Product Grid */}
//       <div className="grid grid-cols-2  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-[12px] md:gap-[16px] lg:gap-[62px] mt-[0px]  md:mt-[28px] lg:mt-[10px]  md:px-1 lg:px-6 w-[90%] mx-auto">
//         {product.map((item, index) => (
//           <div
//             key={index}
//             className="flex flex-col bg-red-000 gap-[3px]  md:gap-0 lg:gap-8 capitalize pt-2.5 px-2.5 pb-1.5 rounded-lg shadow-md h-[200px] lg:w-full md:h-[300px] lg:h-[470px] md:w-[200px]"
//           >
//             {/* Image */}
//             <div className="relative   p-2 overflow-hidden cursor-pointer h-[300px]">
//               <img
//                 onClick={() => navigate(`/productdetiles/${item._id}`)}
//                 src={item.image}
//                 alt={`popular-${index}`}
//                 className="h-full w-full object-cover rounded-md"
//               />
//               {item.discount && (
//                 <div className="absolute top-4 left-4 bg-white text-black px-3 py-1 text-sm font-semibold rounded-full shadow-md">
//                   5% OFF
//                 </div>
//               )}
//               <CiHeart
//                 onClick={() => handleClickwishList(item._id)}
//                 className="absolute top-2.5 right-2.5 md:top-3 md:right-3 lg:top-4 lg:right-4 text-4xl lg:text-5xl text-black bg-white p-2  lg:p-2 md:p-2 rounded-full shadow-2xl cursor-pointer"
//               />
//             </div>

//             {/* Info */}
//             <div className="flex flex-col -mt-2  items-center justify-between flex-grow text-center">
//               <p className=" font-Poppins text-[9px] lg:text-lg md:text-[10px]  text-gray-800 font-semibold">{item.name}</p>
//               <div className="flex flex-col items-center gap-0 mt-[0px] lg:gap-2 md:gap-0 lg:mt-4 md:mt-0">
//                 <div className="flex items-center gap-[.5px]  hover:text-blue-600">
//                   <RiMoneyRupeeCircleLine  className=" mt-[.8px] md:mt-[0px] lg:mt-[0px] text-[9px] lg:text-lg md:text-[12px]" />
//                   <span className=" text-[9px] lg:text-lg md:text-10px] text-gray-800 font-semibold">
//                     {item.price.toFixed(2)}
//                   </span>
//                 </div>

//                 <div
//                   className="flex flex-row   items-center gap-[2px]  lg:gap-2 md:gap-[3px]  hover:bg-neutral-200 hover:border-black p-[4px] lg:p-2 md:p-2 rounded-md shadow-lg cursor-pointer"
//                   onClick={() => handleClick(item._id)}
//                 >
//                   <FiShoppingCart className=" text-[9px] lg:text-xl md:text-[10px] stroke-2  lg:stroke-2 md:stroke-3 " />
//                   <button className=" text-gray-800 text-center   font-Poppins capitalize font-semibold text-[9px] lg:text-[18px] md:text-[10px]  lg:font-semibold md:font-bold ">
//                    <p className="text-center "> Add To Cart</p>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Popular;





// import { BsCart2 } from "react-icons/bs";
// import { RiMoneyRupeeCircleLine } from "react-icons/ri";
// import { FiShoppingCart } from "react-icons/fi";
// import { CiHeart } from "react-icons/ci";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router";
// import { toast } from "react-toastify";
// import { useDispatch } from "react-redux";
// import { getData } from "../ProductList";
// import { apiClient } from "../utils/api";

// const Popular = ({ selectedCategory }) => {
//   const dispatch = useDispatch();
//   const [product, setProduct] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchInfo();
//   }, []);

//   const fetchInfo = async () => {
//     try {
//       const response = await getData();
//       if (response.data) {
//         setProduct(response.data);
//         setFilteredProducts(response.data); // default: show all
//       }
//     } catch (error) {
//       console.error("Failed to fetch products:", error);
//     }
//   };

//   // Filter products when category changes
//   useEffect(() => {
//     if (!selectedCategory) {
//       setFilteredProducts(product);
//     } else {
//       const filtered = product.filter(
//         (item) =>
//           item.category?.toLowerCase() === selectedCategory.toLowerCase()
//       );
//       setFilteredProducts(filtered);
//     }
//   }, [selectedCategory, product]);

//   const handleClickwishList = async (id) => {
//     const user = localStorage.getItem("id");
//     if (!user) {
//       alert("Please login to add to wishlist.");
//       navigate("/Login");
//       return;
//     }

//     try {
//       const res = await apiClient.post("/wish-list", {
//         user,
//         product: id,
//         quantity: 1,
//       });
//       toast.success("Product added to wishlist!");
//     } catch (err) {
//       console.error("Wishlist error:", err);
//       toast.error("Failed to add to wishlist.");
//     }
//   };

//   const handleClick = async (id) => {
//     const user = localStorage.getItem("id");
//     if (!user) {
//       alert("Please login to add to cart.");
//       navigate("/Login");
//       return;
//     }

//     try {
//       const res = await apiClient.post("/post-cart", {
//         user,
//         product: id,
//         quantity: 1,
//       });
//       toast.success("Product added to cart!");
//     } catch (err) {
//       console.error("Cart error:", err);
//       toast.error("Failed to add to cart.");
//     }
//   };

//   return (
//     <div className="w-full mt-[12px]">
//       {/* Header */}
//       <div className="flex flex-col items-center gap-4">
//         <p className="text-[15px] md:text-[15px] text-gray-800 lg:text-[55px] mt-[0px] md:mt-[40px] lg:mt-[50px] font-Poppins font-medium underline underline-offset-2 md:underline-offset-2 lg:underline-offset-5 decoration-orange-600 decoration-1 uppercase">
//           Trending now
//         </p>
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[12px] md:gap-[16px] lg:gap-[62px] mt-[0px] md:mt-[28px] lg:mt-[10px] md:px-1 lg:px-6 w-[90%] mx-auto">
//         {filteredProducts.map((item, index) => (
//           <div
//             key={index}
//             className="flex flex-col gap-[3px] md:gap-0 lg:gap-8 capitalize pt-2.5 px-2.5 pb-1.5 rounded-lg shadow-md h-[200px] lg:w-full md:h-[300px] lg:h-[470px] md:w-[200px]"
//           >
//             {/* Image */}
//             <div className="relative bg-amber-200 p-0 overflow-hidden cursor-pointer h-[300px]">
//               <img
//                 onClick={() => navigate(`/productdetiles/${item._id}`)}
//                 src={item.image}
//                 alt={`popular-${index}`}
//                 className=" object-cover w-ful h-full rounded-md"
//               />
//               {item.discount && (
//                 <div className="absolute top-4 left-4 bg-white text-black px-3 py-1 text-sm font-semibold rounded-full shadow-md">
//                   5% OFF
//                 </div>
//               )}
//               <CiHeart
//                 onClick={() => handleClickwishList(item._id)}
//                 className="absolute top-2.5 right-2.5 md:top-3 md:right-3 lg:top-4 lg:right-4 text-4xl lg:text-5xl text-black bg-white p-2 rounded-full shadow-2xl cursor-pointer"
//               />
//             </div>

//             {/* Info */}
//             <div className="flex flex-col -mt-2 items-center justify-between flex-grow text-center">
//               <p className="font-Poppins text-[9px] lg:text-lg md:text-[10px] text-gray-800 font-semibold">
//                 {item.name}
//               </p>
//               <div className="flex flex-col items-center gap-0 mt-[0px] lg:gap-2 md:gap-0 lg:mt-4 md:mt-0">
//                 <div className="flex items-center gap-[.5px] hover:text-blue-600">
//                   <RiMoneyRupeeCircleLine className="mt-[.8px] md:mt-[0px] lg:mt-[0px] text-[9px] lg:text-lg md:text-[12px]" />
//                   <span className="text-[9px] lg:text-lg md:text-[10px] text-gray-800 font-semibold">
//                     {item.price.toFixed(2)}
//                   </span>
//                 </div>

//                 <div
//                   className="flex flex-row items-center gap-[2px] lg:gap-2 md:gap-[3px] hover:bg-neutral-200 hover:border-black p-[4px] lg:p-2 md:p-2 rounded-md shadow-lg cursor-pointer"
//                   onClick={() => handleClick(item._id)}
//                 >
//                   <FiShoppingCart className="text-[9px] lg:text-xl md:text-[10px] stroke-2 lg:stroke-2 md:stroke-3" />
//                   <button className="text-gray-800 text-center font-Poppins capitalize font-semibold text-[9px] lg:text-[18px] md:text-[10px] lg:font-semibold md:font-bold">
//                     <p className="text-center">Add To Cart</p>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Popular;     









import { BsCart2 } from "react-icons/bs";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { getData } from "../ProductList";
import { apiClient } from "../utils/api";
import { MdCurrencyRupee } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";

const Popular = ({ selectedCategory }) => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = async () => {
    try {
      const response = await getData();
      if (response.data) {
        setProduct(response.data);
        setFilteredProducts(response.data);
      }
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    if (!selectedCategory) {
      setFilteredProducts(product);
    } else {
      const filtered = product.filter(
        (item) =>
          item.category?.toLowerCase() === selectedCategory.toLowerCase()
      );
      setFilteredProducts(filtered);
    }
  }, [selectedCategory, product]);

  const handleClickwishList = async (id) => {
    const user = localStorage.getItem("id");
    if (!user) {
      alert("Please login to add to wishlist.");
      navigate("/Login");
      return;
    }

    try {
      await apiClient.post("/wish-list", {
        user,
        product: id,
        quantity: 1,
      });
      toast.success("Product added to wishlist!");
    } catch (err) {
      console.error("Wishlist error:", err);
      toast.error("Failed to add to wishlist.");
    }
  };

  const handleClick = async (id) => {
    const user = localStorage.getItem("id");
    if (!user) {
      alert("Please login to add to cart.");
      navigate("/Login");
      return;
    }

    try {
      await apiClient.post("/post-cart", {
        user,
        product: id,
        quantity: 1,
      });
      toast.success("Product added to cart!");
    } catch (err) {
      console.error("Cart error:", err);
      toast.error("Failed to add to cart.");
    }
  };

  return (
    <div className="w-full mt-6 md:mt-10 lg:mt-16">
      {/* Header */}
      <div className="text-center">
        <p className="text-sm md:text-2xl lg:text-4xl font-medium  text-[#212529] font-Poppins underline underline-offset-3 decoration-blue-400 uppercase">
          Trending now
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 bg-red-000  sm:grid-cols-2 md:grid-cols-3   lg:grid-cols-4 gap-0  md:gap-6 lg:gap-8 mt-6 w-[92%] mx-auto">
        {filteredProducts.map((item, index) => (
          <div
            key={index}
            className="flex flex-col  bg-gray-000 gap-2 md:gap-3 lg:gap-5 p-3 border-0 border-blue-000  md:rounded-4xl lg:rounded-4xl   shadow-gray-000 hover:shadow-xl transition-shadow hover:shadow-gray-200   duration-300"
          >
            {/* Image */}
            <div className="relative bg-gray-50 rounded-sm overflow-hidden h-36 sm:h-44 md:h-52 lg:h-64 cursor-pointer">
              <img
                onClick={() => navigate(`/productdetiles/${item._id}`)}
                src={item.image}
                alt={`popular-${index}`}
                 className="w-full h-full p-2 object-contain transition-transform hover:scale-105 duration-300"
              />
              {item.discount && (
                <div className="absolute top-2 left-2 bg-white text-black px-2 py-0.5 text-xs font-semibold rounded-full shadow">
                  5% OFF
                </div>
              )}
              <CiHeart
                onClick={() => handleClickwishList(item._id)}
                className="absolute top-2 right-2 text-xl md:text-2xl lg:text-[54px]  bg-ehite text-blue-600 p-1 rounded-full shadow cursor-pointer"
              />
            </div>

            {/* Info */}
            <div className="flex flex-col items-left bg-red-000 gap-0">
              <p className="text-xs md:text-sm text-gray-500 lg:text-[20px] font-Poppins  capitalize">
                {item.name}
              </p>

              <div className="flex items-center -space-x-0.5 text-sm text-black">
                <FaRupeeSign   className="text-[10px]  lg:text-[12px]  " />
                <span className="font-bold text-[14px] lg:text-[20px]  ">{item.price.toFixed(2)}</span>
              </div>
{/* 
              <div
                className="flex items-center lg:gap-3 gap-2 text-center lg:w-[203px] lg:h-[53px] justify-center place-content-center m-auto bg-neutral-100 hover:bg-neutral-200 px-2 py-1 rounded shadow cursor-pointer"
                onClick={() => handleClick(item._id)}
              >
                <FiShoppingCart className="text-sm md:text-base lg:text-[28px]" />
                <span className="text-xs md:text-sm lg:text-[19px]  font-Poppins  font-medium">Add To Cart</span>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;



