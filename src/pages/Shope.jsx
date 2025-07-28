// import { BsCart2, BsCurrencyDollar } from "react-icons/bs";
// import { CiHeart } from "react-icons/ci";
// import Footer from "../components/Footer";
// import { useEffect, useState } from "react";
// import { getData } from "../ProductList.js";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router";
// import BASE_URL from "../utils/api.js"

// // example POST
// fetch(`${BASE_URL}/post-cart`, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(data),
// });


// const Shope = () => {
//   const [product, setProduct] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const navigate = useNavigate();

//   const fetchInfo = async () => {
//     try {
//       const response = await getData();
//       if (response.data) {
//         setProduct(response.data);
//       }
//     } catch (error) {
//       console.error("❌ Failed to fetch products:", error);
//       toast.error("Product loading failed");
//     }
//   };

//   useEffect(() => {
//     fetchInfo();
//   }, []);

//   const handleClickwishList = async (id) => {
//     const user = localStorage.getItem("id");
//     if (!user) return navigate("/Login");

//     try {
//       const res = await fetch(
//         "https://e-commerce-furniture-backend-gpxh.onrender.com/api/wish-list",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ user, product: id, quantity: 1 }),
//         }
//       );
//       await res.json();
//       toast.success("Added to wishlist");
//     } catch {
//       toast.error("Error adding to wishlist");
//     }
//   };

//   const handleClick = async (id) => {
//     const user = localStorage.getItem("id");
//     if (!user) return navigate("/Login");

//     try {
//       const res = await fetch(
//         "https://e-commerce-furniture-backend-gpxh.onrender.com/api/post-cart",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ user, product: id, quantity: 1 }),
//         }
//       );
//       await res.json();
//       toast.success("Added to cart");
//     } catch {
//       toast.error("Error adding to cart");
//     }
//   };

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//   };

//   const filteredProducts =
//     selectedCategory === "All"
//       ? product
//       : product.filter((item) => item.category === selectedCategory);

//   return (
//     <div className="w-full font-Poppins pt-12">
//       <div className="flex flex-wrap justify-center gap-3 bg-amber-400 py-4 px-2">
//         {["All", "Men's", "Watchs", "Shoes", "Accessories", "Headset"].map((cat) => (
//           <button
//             key={cat}
//             onClick={() => handleCategoryClick(cat)}
//             className={`px-4 py-2 rounded-md text-sm font-medium ${
//               selectedCategory === cat ? "bg-black text-white" : "bg-white text-black"
//             }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 sm:px-6 lg:px-16 my-6 gap-4">
//         <p className="text-lg font-medium">Showing {filteredProducts.length} result(s)</p>
//         <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-2 sm:items-center">
//           <label htmlFor="sort" className="text-sm font-medium text-gray-700">
//             Sort by
//           </label>
//           <select
//             id="sort"
//             name="sort"
//             className="w-full sm:w-60 px-4 py-2 border border-gray-300 rounded-md shadow-sm"
//           >
//             <option>Default sorting</option>
//             <option>Sort by popularity</option>
//             <option>Sort by latest</option>
//             <option>Price: low to high</option>
//             <option>Price: high to low</option>
//           </select>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-16 mb-16">
//         {filteredProducts.map((item, index) => (
//           <div key={index} className="flex flex-col gap-4 p-4 rounded-lg shadow-md bg-white hover:shadow-lg transition-all duration-300">
//             <div className="relative h-[280px] sm:h-[300px] rounded-md overflow-hidden">
//               <img
//                 onClick={() => navigate(`/productdetiles/${item._id}`)}
//                 src={item.image}
//                 alt={item.name}
//                 className="w-full h-full object-cover cursor-pointer"
//                 onError={(e) => (e.target.src = "/no-image.png")}
//               />
//               {item.discount && (
//                 <div className="absolute top-3 left-3 bg-white text-black px-2 py-1 text-xs font-semibold rounded-full shadow">
//                   {item.discount}% OFF
//                 </div>
//               )}
//               {item.tag && (
//                 <div className={`absolute top-3 right-3 px-2 py-1 text-xs font-bold text-white rounded-full shadow-md ${
//                   item.tag === "Popular" ? "bg-blue-500" :
//                   item.tag === "Latest Model" ? "bg-green-500" :
//                   "bg-purple-500"
//                 }`}>
//                   {item.tag}
//                 </div>
//               )}
//               <CiHeart
//                 onClick={() => handleClickwishList(item._id)}
//                 className="absolute bottom-3 right-3 text-3xl text-black hover:text-white bg-white p-2 rounded-full cursor-pointer hover:bg-blue-500"
//               />
//             </div>

//             <div className="flex flex-col items-center gap-2 text-center">
//               <p className="text-base font-semibold">{item.name}</p>
//               {item.extraText && (
//                 <p className="text-yellow-500 text-sm font-medium">{item.extraText}</p>
//               )}
//               <div className="flex flex-col items-center w-full gap-2 mt-1">
//                 <div className="flex items-center gap-1 text-black">
//                   <BsCurrencyDollar className="text-lg" />
//                   <span className="text-base font-semibold">{item.price.toFixed(2)}</span>
//                 </div>
//                 <button
//                   onClick={() => handleClick(item._id)}
//                   className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-md shadow-md w-full"
//                 >
//                   <div className="flex items-center justify-center gap-2">
//                     <BsCart2 /> Add To Cart
//                   </div>
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Shope;





// import { BsCart2, BsCurrencyDollar } from "react-icons/bs";
// import { CiHeart } from "react-icons/ci";
// import Footer from "../components/Footer";
// import { useEffect, useState } from "react";
// import { getData } from "../ProductList.js";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router";
// import { apiClient } from "../utils/api.js"; // ✅ using apiClient

// const Shope = () => {
//   const [product, setProduct] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const navigate = useNavigate();

//   const fetchInfo = async () => {
//     try {
//       const response = await getData();
//       if (response.data) {
//         setProduct(response.data);
//       }
//     } catch (error) {
//       console.error("❌ Failed to fetch products:", error);
//       toast.error("Product loading failed");
//     }
//   };

//   useEffect(() => {
//     fetchInfo();
//   }, []);

//   const handleClickwishList = async (id) => {
//     const user = localStorage.getItem("id");
//     if (!user) return navigate("/Login");

//     try {
//       await apiClient.post("/wish-list", {
//         user,
//         product: id,
//         quantity: 1,
//       });
//       toast.success("Added to wishlist");
//     } catch (error) {
//       console.error("Wishlist error:", error);
//       toast.error("Error adding to wishlist");
//     }
//   };

//   const handleClick = async (id) => {
//     const user = localStorage.getItem("id");
//     if (!user) return navigate("/Login");

//     try {
//       await apiClient.post("/post-cart", {
//         user,
//         product: id,
//         quantity: 1,
//       });
//       toast.success("Added to cart");
//     } catch (error) {
//       console.error("Cart error:", error);
//       toast.error("Error adding to cart");
//     }
//   };

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//   };

//   const filteredProducts =
//     selectedCategory === "All"
//       ? product
//       : product.filter((item) => item.category === selectedCategory);

//   return (
//     <div className="w-full font-Poppins pt-12">
//       <div className="flex flex-wrap justify-center gap-3 bg-amber-400 py-4 px-2">
//         {["All", "Men's", "Watchs", "Shoes", "Accessories", "Headset"].map((cat) => (
//           <button
//             key={cat}
//             onClick={() => handleCategoryClick(cat)}
//             className={`px-4 py-2 rounded-md text-sm font-medium ${
//               selectedCategory === cat ? "bg-black text-white" : "bg-white text-black"
//             }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 sm:px-6 lg:px-16 my-6 gap-4">
//         <p className="text-lg font-medium">Showing {filteredProducts.length} result(s)</p>
//         <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-2 sm:items-center">
//           <label htmlFor="sort" className="text-sm font-medium text-gray-700">
//             Sort by
//           </label>
//           <select
//             id="sort"
//             name="sort"
//             className="w-full sm:w-60 px-4 py-2 border border-gray-300 rounded-md shadow-sm"
//           >
//             <option>Default sorting</option>
//             <option>Sort by popularity</option>
//             <option>Sort by latest</option>
//             <option>Price: low to high</option>
//             <option>Price: high to low</option>
//           </select>
//         </div>
//       </div>

//     <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 px-2 sm:px-4 md:px-8 lg:px-16 mb-16">
//   {filteredProducts.map((item, index) => (
//     <div
//       key={index}
//       className="flex flex-col gap-4 p-4 rounded-lg shadow-md bg-white hover:shadow-lg transition-all duration-300"
//     >
//       {/* Product Image & Labels */}
//       <div className="relative h-[220px] sm:h-[260px] rounded-md overflow-hidden">
//         <img
//           onClick={() => navigate(`/productdetiles/${item._id}`)}
//           src={item.image}
//           alt={item.name}
//           className="w-full h-full object-cover cursor-pointer"
//           onError={(e) => (e.target.src = "/no-image.png")}
//         />
//         {item.discount && (
//           <div className="absolute top-2 left-2 bg-white text-black px-2 py-0.5 text-[10px] font-semibold rounded-full shadow">
//             {item.discount}% OFF
//           </div>
//         )}
//         {item.tag && (
//           <div
//             className={`absolute top-2 right-2 px-2 py-0.5 text-[10px] font-bold text-white rounded-full shadow-md ${
//               item.tag === "Popular"
//                 ? "bg-blue-500"
//                 : item.tag === "Latest Model"
//                 ? "bg-green-500"
//                 : "bg-purple-500"
//             }`}
//           >
//             {item.tag}
//           </div>
//         )}
//         <CiHeart
//           onClick={() => handleClickwishList(item._id)}
//           className="absolute bottom-2 right-2 text-xl text-black hover:text-white bg-white p-1 rounded-full cursor-pointer hover:bg-blue-500"
//         />
//       </div>

//       {/* Product Info */}
//       <div className="flex flex-col items-center gap-1 text-center">
//         <p className="text-[13px] sm:text-sm font-semibold">{item.name}</p>
//         {item.extraText && (
//           <p className="text-yellow-500 text-xs font-medium">{item.extraText}</p>
//         )}

//         <div className="flex flex-col items-center w-full gap-2 mt-1">
//           <div className="flex items-center gap-1 text-black">
//             <BsCurrencyDollar className="text-base" />
//             <span className="text-sm font-semibold">{item.price.toFixed(2)}</span>
//           </div>

//           <button
//             onClick={() => handleClick(item._id)}
//             className="bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-md shadow-md w-full"
//           >
//             <div className="flex items-center justify-center gap-2">
//               <BsCart2 /> Add To Cart
//             </div>
//           </button>
//         </div>
//       </div>
//     </div>
//   ))}
// </div>


//       <Footer />
//     </div>
//   );
// };

// export default Shope;






// import { BsCart2, BsCurrencyDollar } from "react-icons/bs";
// import { CiHeart } from "react-icons/ci";
// import Footer from "../components/Footer";
// import { useEffect, useState } from "react";
// import { getData } from "../ProductList.js";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router";
// import { apiClient } from "../utils/api.js";

// const Shope = () => {
//   const [product, setProduct] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchInfo = async () => {
//       try {
//         const response = await getData();
//         if (response.data) setProduct(response.data);
//       } catch (error) {
//         toast.error("Product loading failed");
//         console.error("❌ Fetch error:", error);
//       }
//     };
//     fetchInfo();
//   }, []);

//   const handleClickwishList = async (id) => {
//     const user = localStorage.getItem("id");
//     if (!user) return navigate("/Login");

//     try {
//       await apiClient.post("/wish-list", { user, product: id, quantity: 1 });
//       toast.success("Added to wishlist");
//     } catch (error) { }
//       toast.error("Error adding to wishlist");
//     }
//   };

//   const handleClick = async (id) => {
//     const user = localStorage.getItem("id");
//     if (!user) return navigate("/Login");

//     try {
//       await apiClient.post("/post-cart", { user, product: id, quantity: 1 });
//       toast.success("Added to cart");
//     } catch (error) {
//       toast.error("Error adding to cart");
//     }
//   };

//   const handleCategoryClick = (cat) => setSelectedCategory(cat);

//   const filteredProducts =
//     selectedCategory === "All"
//       ? product
//       : product.filter((item) => item.category === selectedCategory);

//   return (
//     <div className="w-full font-Poppins pt-12 bg-gray-50">
//       {/* Categories */}
//       <div className="flex flex-wrap justify-center gap-3 bg-yellow-400 py-4 px-3 sticky top-12 z-20 shadow-sm">
//         {["All", "Men's", "Watchs", "Shoes", "Accessories", "Headset"].map((cat) => (
//           <button
//             key={cat}
//             onClick={() => handleCategoryClick(cat)}
//             className={`px-4 py-2 rounded-md text-sm transition font-medium ${
//               selectedCategory === cat
//                 ? "bg-black text-white scale-105 shadow"
//                 : "bg-white text-black hover:bg-black hover:text-white"
//             }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Sorting */}
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-4 md:px-16 my-6 gap-4">
//         <p className="text-base sm:text-lg font-medium">
//           Showing {filteredProducts.length} result(s)
//         </p>
//         <div className="w-full md:w-auto flex flex-col sm:flex-row gap-2">
//           <label htmlFor="sort" className="text-sm font-medium text-gray-700">
//             Sort by
//           </label>
//           <select
//             id="sort"
//             name="sort"
//             className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//           >
//             <option>Default sorting</option>
//             <option>Sort by popularity</option>
//             <option>Sort by latest</option>
//             <option>Price: low to high</option>
//             <option>Price: high to low</option>
//           </select>
//         </div>
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 px-4 md:px-16 mb-20">
//         {filteredProducts.map((item, index) => (
//           <div
//             key={index}
//             className="flex flex-col gap-4 bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
//           >
//             {/* Image */}
//             <div className="relative h-[200px] sm:h-[250px] rounded-lg overflow-hidden">
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 onClick={() => navigate(`/productdetiles/${item._id}`)}
//                 className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
//                 onError={(e) => (e.target.src = "/no-image.png")}
//               />
//               {item.discount && (
//                 <div className="absolute top-2 left-2 bg-white text-black text-[10px] font-semibold px-2 py-1 rounded-full shadow">
//                   {item.discount}% OFF
//                 </div>
//               )}
//               {item.tag && (
//                 <div
//                   className={`absolute top-2 right-2 text-[10px] font-semibold px-2 py-1 rounded-full text-white shadow ${
//                     item.tag === "Popular"
//                       ? "bg-blue-500"
//                       : item.tag === "Latest Model"
//                       ? "bg-green-500"
//                       : "bg-purple-500"
//                   }`}
//                 >
//                   {item.tag}
//                 </div>
//               )}
//               <CiHeart
//                 onClick={() => handleClickwishList(item._id)}
//                 className="absolute bottom-2 right-2 text-xl text-black bg-white p-1 rounded-full hover:text-white hover:bg-blue-500 cursor-pointer"
//               />
//             </div>

//             {/* Details */}
//             <div className="flex flex-col items-center text-center gap-1">
//               <p className="text-sm font-semibold">{item.name}</p>
//               {item.extraText && (
//                 <p className="text-yellow-600 text-xs font-medium">{item.extraText}</p>
//               )}
//               <div className="flex flex-col w-full items-center gap-2 mt-1">
//                 <div className="flex items-center text-black gap-1">
//                   <BsCurrencyDollar className="text-base" />
//                   <span className="text-sm font-semibold">
//                     {item.price.toFixed(2)}
//                   </span>
//                 </div>
//                 <button
//                   onClick={() => handleClick(item._id)}
//                   className="w-full flex justify-center items-center gap-2 bg-blue-500 text-white hover:bg-blue-600 text-xs font-semibold px-4 py-2 rounded-md transition-all shadow"
//                 >
//                   <BsCart2 /> Add To Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Shope;









// import { BsCart2, BsCurrencyDollar } from "react-icons/bs";
// import { CiHeart } from "react-icons/ci";
// import Footer from "../components/Footer";
// import { useEffect, useState } from "react";
// import { getData } from "../ProductList.js";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router";
// import { apiClient } from "../utils/api.js";

// const Shope = () => {
//   const [product, setProduct] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchInfo = async () => {
//       try {
//         const response = await getData();
//         if (response.data) setProduct(response.data);
//       } catch (error) {
//         toast.error("Product loading failed");
//         console.error("❌ Fetch error:", error);
//       }
//     };
//     fetchInfo();
//   }, []);

//   const handleClickwishList = async (id) => {
//     const user = localStorage.getItem("id");
//     if (!user) return navigate("/Login");

//     try {
//       await apiClient.post("/wish-list", { user, product: id, quantity: 1 });
//       toast.success("Added to wishlist");
//     } catch (error) {
//       toast.error("Error adding to wishlist");
//     }
//   };

//   const handleClick = async (id) => {
//     const user = localStorage.getItem("id");
//     if (!user) return navigate("/Login");

//     try {
//       await apiClient.post("/post-cart", { user, product: id, quantity: 1 });
//       toast.success("Added to cart");
//     } catch (error) {
//       toast.error("Error adding to cart");
//     }
//   };

//   const handleCategoryClick = (cat) => setSelectedCategory(cat);

//   const filteredProducts =
//     selectedCategory === "All"
//       ? product
//       : product.filter((item) => item.category === selectedCategory);

//   return (
//     <div className="w-full font-Poppins pt-12 bg-gray-50">
//       {/* Categories */}
//       <div className="flex flex-wrap justify-center gap-3 bg-yellow-400 py-4 px-3 sticky top-12 z-20 shadow-sm">
//         {["All", "Men's", "Watchs", "Shoes", "Accessories", "Headset"].map((cat) => (
//           <button
//             key={cat}
//             onClick={() => handleCategoryClick(cat)}
//             className={`px-4 py-2 rounded-md text-sm transition font-medium ${
//               selectedCategory === cat
//                 ? "bg-black text-white scale-105 shadow"
//                 : "bg-white text-black hover:bg-black hover:text-white"
//             }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Sorting */}
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-4 md:px-16 my-6 gap-4">
//         <p className="text-base sm:text-lg font-medium">
//           Showing {filteredProducts.length} result(s)
//         </p>
//         <div className="w-full md:w-auto flex flex-col sm:flex-row gap-2">
//           <label htmlFor="sort" className="text-sm font-medium text-gray-700">
//             Sort by
//           </label>
//           <select
//             id="sort"
//             name="sort"
//             className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//           >
//             <option>Default sorting</option>
//             <option>Sort by popularity</option>
//             <option>Sort by latest</option>
//             <option>Price: low to high</option>
//             <option>Price: high to low</option>
//           </select>
//         </div>
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 px-4 md:px-16 mb-20">
//         {filteredProducts.map((item, index) => (
//           <div
//             key={index}
//             className="flex flex-col gap-4 bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
//           >
//             {/* Image */}
//             <div className="relative h-[200px] sm:h-[250px] rounded-lg overflow-hidden">
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 onClick={() => navigate(`/productdetiles/${item._id}`)}
//                 className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
//                 onError={(e) => (e.target.src = "/no-image.png")}
//               />
//               {item.discount && (
//                 <div className="absolute top-2 left-2 bg-white text-black text-[10px] font-semibold px-2 py-1 rounded-full shadow">
//                   {item.discount}% OFF
//                 </div>
//               )}
//               {item.tag && (
//                 <div
//                   className={`absolute top-2 right-2 text-[10px] font-semibold px-2 py-1 rounded-full text-white shadow ${
//                     item.tag === "Popular"
//                       ? "bg-blue-500"
//                       : item.tag === "Latest Model"
//                       ? "bg-green-500"
//                       : "bg-purple-500"
//                   }`}
//                 >
//                   {item.tag}
//                 </div>
//               )}
//               <CiHeart
//                 onClick={() => handleClickwishList(item._id)}
//                 className="absolute bottom-2 right-2 text-xl text-black bg-white p-1 rounded-full hover:text-white hover:bg-blue-500 cursor-pointer"
//               />
//             </div>

//             {/* Details */}
//             <div className="flex flex-col items-center text-center gap-1">
//               <p className="text-sm font-semibold">{item.name}</p>
//               {item.extraText && (
//                 <p className="text-yellow-600 text-xs font-medium">{item.extraText}</p>
//               )}
//               <div className="flex flex-col w-full items-center gap-2 mt-1">
//                 <div className="flex items-center text-black gap-1">
//                   <BsCurrencyDollar className="text-base" />
//                   <span className="text-sm font-semibold">
//                     {item.price.toFixed(2)}
//                   </span>
//                 </div>
//                 <button
//                   onClick={() => handleClick(item._id)}
//                   className="w-full flex justify-center items-center gap-2 bg-blue-500 text-white hover:bg-blue-600 text-xs font-semibold px-4 py-2 rounded-md transition-all shadow"
//                 >
//                   <BsCart2 /> Add To Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Shope;





// import { BsCart2, BsCurrencyDollar } from "react-icons/bs";
// import { CiHeart } from "react-icons/ci";
// import Footer from "../components/Footer";
// import { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router";
// import { apiClient } from "../utils/api.js";

// const Shope = () => {
//   const [product, setProduct] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchInfo = async () => {
//       try {
//         const response = await apiClient.get("/get-product");
//         if (response.data) setProduct(response.data);
//       } catch (error) {
//         toast.error("Product loading failed");
//         console.error("❌ Fetch error:", error);
//       }
//     };
//     fetchInfo();
//   }, []);

//   // console.log(setProduct);
  






//   const handleClickwishList = async (id) => {
//     const user = localStorage.getItem("id");
//     if (!user) return navigate("/Login");

//     try {
//       await apiClient.post("/wish-list", { user, product: id, quantity: 1 });
//       toast.success("Added to wishlist");
//     } catch (error) { console.error(error);
//       toast.error("Error adding to wishlist");
//     }
//   };

//   const handleClick = async (id) => {
//     const user = localStorage.getItem("id");
//     if (!user) return navigate("/Login");

//     try {
//       await apiClient.post("/post-cart", { user, product: id, quantity: 1 });
//       toast.success("Added to cart");
//     } catch (error) { console.error(error);
//       toast.error("Error adding to cart");
//     }
//   };

//   const handleCategoryClick = (cat) => setSelectedCategory(cat);

//   const filteredProducts =
//     selectedCategory === "All"
//       ? product
//       : product.filter((item) => item.category === selectedCategory);

//   return (
//     <div className="w-full font-Poppins pt-12 bg-gray-50">
//       {/* Categories */}
//       <div className="flex flex-wrap justify-center gap-3 bg-yellow-400 py-4 px-3 sticky top-12 z-20 shadow-sm">
//         {["All", "Men's", "Watchs", "Shoes", "Accessories", "Headset"].map((cat) => (
//           <button
//             key={cat}
//             onClick={() => handleCategoryClick(cat)}
//             className={`px-4 py-2 rounded-md text-sm transition font-medium ${
//               selectedCategory === cat
//                 ? "bg-black text-white scale-105 shadow"
//                 : "bg-white text-black hover:bg-black hover:text-white"
//             }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Sorting */}
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-4 md:px-16 my-6 gap-4">
//         <p className="text-base sm:text-lg font-medium">
//           Showing {filteredProducts.length} result(s)
//         </p>
//         <div className="w-full md:w-auto flex flex-col sm:flex-row gap-2">
//           <label htmlFor="sort" className="text-sm font-medium text-gray-700">
//             Sort by
//           </label>
//           <select
//             id="sort"
//             name="sort"
//             className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//           >
//             <option>Default sorting</option>
//             <option>Sort by popularity</option>
//             <option>Sort by latest</option>
//             <option>Price: low to high</option>
//             <option>Price: high to low</option>
//           </select>
//         </div>
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 px-4 md:px-16 mb-20">
//         {filteredProducts.map((item, index) => (
//           <div
//             key={index}
//             className="flex flex-col gap-4 bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
//           >
//             {/* Image */}
//             <div className="relative h-[200px] sm:h-[250px] rounded-lg overflow-hidden">
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 onClick={() => navigate(`/productdetiles/${item._id}`)}
//                 className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
//                 onError={(e) => (e.target.src = "/no-image.png")}
//               />
//               {item.discount && (
//                 <div className="absolute top-2 left-2 bg-white text-black text-[10px] font-semibold px-2 py-1 rounded-full shadow">
//                   {item.discount}% OFF
//                 </div>
//               )}
//               {item.tag && (
//                 <div
//                   className={`absolute top-2 right-2 text-[10px] font-semibold px-2 py-1 rounded-full text-white shadow ${
//                     item.tag === "Popular"
//                       ? "bg-blue-500"
//                       : item.tag === "Latest Model"
//                       ? "bg-green-500"
//                       : "bg-purple-500"
//                   }`}
//                 >
//                   {item.tag}
//                 </div>
//               )}
//               <CiHeart
//                 onClick={() => handleClickwishList(item._id)}
//                 className="absolute bottom-2 right-2 text-xl text-black bg-white p-1 rounded-full hover:text-white hover:bg-blue-500 cursor-pointer"
//               />
//             </div>

//             {/* Details */}
//             <div className="flex flex-col items-center text-center gap-1">
//               <p className="text-sm font-semibold">{item.name}</p>
//               {item.extraText && (
//                 <p className="text-yellow-600 text-xs font-medium">{item.extraText}</p>
//               )}
//               <div className="flex flex-col w-full items-center gap-2 mt-1">
//                 <div className="flex items-center text-black gap-1">
//                   <BsCurrencyDollar className="text-base" />
//                   <span className="text-sm font-semibold">
//                     {item.price.toFixed(2)}
//                   </span>
//                 </div>
//                 <button
//                   onClick={() => handleClick(item._id)}
//                   className="w-full flex justify-center items-center gap-2 bg-blue-500 text-white hover:bg-blue-600 text-xs font-semibold px-4 py-2 rounded-md transition-all shadow"
//                 >
//                   <BsCart2 /> Add To Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Shope;

















// import { BsCart2, BsCurrencyDollar } from "react-icons/bs";
// import { CiHeart } from "react-icons/ci";
// import Footer from "../components/Footer";
// import { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router";
// import { apiClient } from "../utils/api.js";

// const Shope = () => {
//   const [product, setProduct] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchInfo = async () => {
//       try {
//         const response = await apiClient.get("/get-product");
//         if (response.data) setProduct(response.data);
//       } catch (error) {
//         toast.error("Product loading failed");
//         console.error("❌ Fetch error:", error);
//       }
//     };
//     fetchInfo();
//   }, []);

//   const handleClickwishList = async (id) => {
//     const user = localStorage.getItem("id");
//     if (!user) return navigate("/Login");

//     try {
//       await apiClient.post("/wish-list", { user, product: id, quantity: 1 });
//       toast.success("Added to wishlist");
//     } catch (error) {
//       console.error(error);
//       toast.error("Error adding to wishlist");
//     }
//   };

//   const handleClick = async (id) => {
//     const user = localStorage.getItem("id");
//     if (!user) return navigate("/Login");

//     try {
//       await apiClient.post("/post-cart", { user, product: id, quantity: 1 });
//       toast.success("Added to cart");
//     } catch (error) {
//       console.error(error);
//       toast.error("Error adding to cart");
//     }
//   };

//   const handleCategoryClick = (cat) => setSelectedCategory(cat);

//   const filteredProducts =
//     selectedCategory === "All"
//       ? product
//       : product.filter((item) => item.category === selectedCategory);

//   return (
//     <div className="w-full font-Poppins pt-12 bg-gray-50">
//       {/* Categories */}
//       <div className="flex flex-wrap justify-center gap-2 sm:gap-3 bg-yellow-400 py-4 px-3 sticky top-12 z-20 shadow-sm">
//         {["All", "Men's", "Watchs", "Shoes", "Accessories", "Headset"].map((cat) => (
//           <button
//             key={cat}
//             onClick={() => handleCategoryClick(cat)}
//             className={`px-3 py-1.5 text-xs sm:text-sm rounded-md font-medium transition ${
//               selectedCategory === cat
//                 ? "bg-black text-white scale-105 shadow"
//                 : "bg-white text-black hover:bg-black hover:text-white"
//             }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Sorting */}
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-4 md:px-16 my-6 gap-4">
//         <p className="text-sm sm:text-base font-medium">
//           Showing {filteredProducts.length} result(s)
//         </p>
//         <div className="w-full md:w-auto flex flex-col sm:flex-row gap-2">
//           <label htmlFor="sort" className="text-sm font-medium text-gray-700">
//             Sort by
//           </label>
//           <select
//             id="sort"
//             name="sort"
//             className="w-full sm:w-64 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
//           >
//             <option>Default sorting</option>
//             <option>Sort by popularity</option>
//             <option>Sort by latest</option>
//             <option>Price: low to high</option>
//             <option>Price: high to low</option>
//           </select>
//         </div>
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 px-4 md:px-16 mb-20">
//         {filteredProducts.map((item, index) => (
//           <div
//             key={index}
//             className="flex flex-col gap-3 bg-white p-3 sm:p-4 rounded-xl shadow hover:shadow-xl transition-all duration-300"
//           >
//             {/* Image */}
//             <div className="relative h-[180px] sm:h-[220px] md:h-[240px] rounded-lg overflow-hidden">
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 onClick={() => navigate(`/productdetiles/${item._id}`)}
//                 className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
//                 onError={(e) => (e.target.src = "/no-image.png")}
//               />
//               {item.discount && (
//                 <div className="absolute top-2 left-2 bg-white text-black text-[10px] font-semibold px-2 py-1 rounded-full shadow">
//                   {item.discount}% OFF
//                 </div>
//               )}
//               {item.tag && (
//                 <div
//                   className={`absolute top-2 right-2 text-[10px] font-semibold px-2 py-1 rounded-full text-white shadow ${
//                     item.tag === "Popular"
//                       ? "bg-blue-500"
//                       : item.tag === "Latest Model"
//                       ? "bg-green-500"
//                       : "bg-purple-500"
//                   }`}
//                 >
//                   {item.tag}
//                 </div>
//               )}
//               <CiHeart
//                 onClick={() => handleClickwishList(item._id)}
//                 className="absolute bottom-2 right-2 text-lg sm:text-xl text-black bg-white p-1 rounded-full hover:text-white hover:bg-blue-500 cursor-pointer transition"
//               />
//             </div>

//             {/* Details */}
//             <div className="flex flex-col items-center text-center gap-1">
//               <p className="text-xs sm:text-sm md:text-base font-semibold">{item.name}</p>
//               {item.extraText && (
//                 <p className="text-yellow-600 text-[10px] sm:text-xs font-medium">
//                   {item.extraText}
//                 </p>
//               )}
//               <div className="flex flex-col w-full items-center gap-2 mt-1">
//                 <div className="flex items-center text-black gap-1">
//                   <BsCurrencyDollar className="text-base" />
//                   <span className="text-sm font-semibold">
//                     {item.price.toFixed(2)}
//                   </span>
//                 </div>
//                 <button
//                   onClick={() => handleClick(item._id)}
//                   className="w-full flex justify-center items-center gap-2 bg-blue-500 text-white hover:bg-blue-600 text-xs sm:text-sm font-semibold px-4 py-2 rounded-md transition-all shadow"
//                 >
//                   <BsCart2 /> Add To Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Shope;










import { BsCart2, BsCurrencyDollar } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { apiClient } from "../utils/api.js";

const Shope = () => {
  const [product, setProduct] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await apiClient.get("/get-product");
        if (response.data) setProduct(response.data);
      } catch (error) {
        toast.error("Product loading failed");
        console.error("❌ Fetch error:", error);
      }
    };
    fetchInfo();
  }, []);

  const handleClickwishList = async (id) => {
    const user = localStorage.getItem("id");
    if (!user) return navigate("/Login");

    try {
      await apiClient.post("/wish-list", { user, product: id, quantity: 1 });
      toast.success("Added to wishlist");
    } catch (error) {
      console.error(error);
      toast.error("Error adding to wishlist");
    }
  };

  const handleClick = async (id) => {
    const user = localStorage.getItem("id");
    if (!user) return navigate("/Login");

    try {
      await apiClient.post("/post-cart", { user, product: id, quantity: 1 });
      toast.success("Added to cart");
    } catch (error) {
      console.error(error);
      toast.error("Error adding to cart");
    }
  };

  const handleCategoryClick = (cat) => setSelectedCategory(cat);

  const filteredProducts =
    selectedCategory === "All"
      ? product
      : product.filter((item) => item.category === selectedCategory);

  return (
    <div className="w-full font-Poppins pt-12 bg-gray-50">
      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 bg-yellow-400 py-4 px-3 sticky top-12 z-20 shadow-sm">
        {["All", "Men's", "Watchs", "Shoes", "Accessories", "Headset"].map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className={`px-3 py-1.5 text-xs sm:text-sm rounded-md font-medium transition ${
              selectedCategory === cat
                ? "bg-black text-white scale-105 shadow"
                : "bg-white text-black hover:bg-black hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Sorting */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-4 md:px-16 my-6 gap-4">
        <p className="text-sm sm:text-base font-medium">
          Showing {filteredProducts.length} result(s)
        </p>
        <div className="w-full md:w-auto flex flex-col sm:flex-row gap-2">
          <label htmlFor="sort" className="text-sm font-medium text-gray-700">
            Sort by
          </label>
          <select
            id="sort"
            name="sort"
            className="w-full sm:w-64 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
          >
            <option>Default sorting</option>
            <option>Sort by popularity</option>
            <option>Sort by latest</option>
            <option>Price: low to high</option>
            <option>Price: high to low</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 px-4 md:px-16 mb-20">
        {filteredProducts.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 bg-white p-3 sm:p-4 rounded-xl shadow hover:shadow-xl transition-all duration-300"
          >
            {/* Image */}
            <div className="relative h-[180px] sm:h-[220px] md:h-[240px] lg:h-[280px] rounded-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                onClick={() => navigate(`/productdetiles/${item._id}`)}
                className="w-full h-full object-contain transition-transform hover:scale-105 duration-300"
                onError={(e) => (e.target.src = "/no-image.png")}
              />
              {item.discount && (
                <div className="absolute top-2 left-2 bg-white text-black text-[10px] font-semibold px-2 py-1 rounded-full shadow">
                  {item.discount}% OFF
                </div>
              )}
              {item.tag && (
                <div
                  className={`absolute top-2 right-2 text-[10px] font-semibold px-2 py-1 rounded-full text-white shadow ${
                    item.tag === "Popular"
                      ? "bg-blue-500"
                      : item.tag === "Latest Model"
                      ? "bg-green-500"
                      : "bg-purple-500"
                  }`}
                >
                  {item.tag}
                </div>
              )}
              <CiHeart
                onClick={() => handleClickwishList(item._id)}
                className="absolute bottom-2 right-2 text-lg sm:text-xl text-black bg-white p-1 rounded-full hover:text-white hover:bg-blue-500 cursor-pointer transition"
              />
            </div>

            {/* Details */}
            <div className="flex flex-col items-center text-center gap-1">
              <p className="text-xs sm:text-sm md:text-base font-semibold">{item.name}</p>
              {item.extraText && (
                <p className="text-yellow-600 text-[10px] sm:text-xs font-medium">
                  {item.extraText}
                </p>
              )}
              <div className="flex flex-col w-full items-center gap-2 mt-1">
                <div className="flex items-center text-black gap-1">
                  <BsCurrencyDollar className="text-base" />
                  <span className="text-sm font-semibold">
                    {item.price.toFixed(2)}
                  </span>
                </div>
                <button
                  onClick={() => handleClick(item._id)}
                  className="w-full flex justify-center items-center gap-2 bg-blue-500 text-white hover:bg-blue-600 text-xs sm:text-sm font-semibold px-4 py-2 rounded-md transition-all shadow"
                >
                  <BsCart2 /> Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Shope;
