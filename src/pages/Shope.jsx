// import { BsCart2, BsCurrencyDollar } from "react-icons/bs";
// import { CiHeart } from "react-icons/ci";
// import Footer from "../components/Footer";
// import { useEffect, useState } from "react";
// import { getData } from "../ProductList.js";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router";

// const Shope = () => {
//   const [product, setProduct] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const navigate = useNavigate();

//   const fetchInfo = async () => {
//     const response = await getData();
//     if (response.data) {
//       setProduct(response.data);
//     }
//   };

//   useEffect(() => {
//     fetchInfo();
//   }, []);

//   const handleClickwishList = (id) => {
//     const user = localStorage.getItem("id");

//     if (user) {
//       fetch("http://localhost:5000/api/wish-list", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ user, product: id, quantity: 1 }),
//       })
//         .then((response) => response.json())
//         .then(() => {
//           toast.success("Product added to wishlist!");
//         })
//         .catch(() => {
//           toast.error("Failed to add to wishlist");
//         });
//     } else {
//       alert("Please login to add to wishlist.");
//       navigate("/Login");
//     }
//   };

//   const handleClick = (id) => {
//     const user = localStorage.getItem("id");

//     if (user) {
//       fetch("http://localhost:5000/api/post-cart", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ user, product: id, quantity: 1 }),
//       })
//         .then((response) => response.json())
//         .then(() => {
//           toast.success("Product added to cart!");
//         })
//         .catch(() => {
//           toast.error("Failed to add to cart");
//         });
//     } else {
//       alert("Please login to add to cart.");
//       navigate("/Login");
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
//       {/* Category Buttons */}
//       <div className="flex flex-wrap justify-center gap-3 bg-amber-400 py-4 px-2">
//         {["All", "Men's", "Watchs", "Shoes", "Accessories", "Headset"].map((cat) => (
//           <button
//             key={cat}
//             onClick={() => handleCategoryClick(cat)}
//             className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
//               selectedCategory === cat ? "bg-black text-white" : "bg-white text-black"
//             }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Filter Header */}
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 sm:px-6 lg:px-16 my-6 gap-4">
//         <p className="text-lg font-medium">Showing {filteredProducts.length} result(s)</p>

//         <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-2 sm:items-center">
//           <label htmlFor="sort" className="text-sm font-medium text-gray-700">
//             Sort by
//           </label>
//           <select
//             id="sort"
//             name="sort"
//             className="w-full sm:w-60 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
//           >
//             <option>Default sorting</option>
//             <option>Sort by popularity</option>
//             <option>Sort by average rating</option>
//             <option>Sort by latest</option>
//             <option>Sort by price: low to high</option>
//             <option>Sort by price: high to low</option>
//           </select>
//         </div>
//       </div>

//       {/* Products Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-16 mb-16">
//         {filteredProducts.map((item, index) => (
//           <div
//             key={index}
//             className="flex flex-col gap-4 p-4 rounded-lg shadow-md w-full bg-white transform transition-transform duration-300 hover:scale-105"
//           >
//             <div className="relative overflow-hidden cursor-pointer h-[280px] sm:h-[300px] rounded-md">
//               <img
//                 onClick={() => navigate(`/productdetiles/${item._id}`)}
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-full object-cover rounded-md"
//               />

//               {/* Discount tag */}
//               {item.discount && (
//                 <div className="absolute top-3 left-3 bg-white text-black px-2 py-1 text-xs font-semibold rounded-full shadow">
//                   {item.discount}% OFF
//                 </div>
//               )}

//               {/* Tag like Popular, Latest */}
//               {item.tag && (
//                 <div className={`absolute top-3 right-3 px-2 py-1 text-xs font-bold rounded-full text-white shadow-md animate-pulse
//                   ${item.tag === 'Popular' ? 'bg-blue-500' : item.tag === 'Latest Model' ? 'bg-green-500' : 'bg-purple-500'}`}>
//                   {item.tag}
//                 </div>
//               )}

//               <CiHeart
//                 onClick={() => handleClickwishList(item._id)}
//                 className="absolute bottom-3 right-3 text-3xl text-black hover:text-white bg-white p-2 rounded-full cursor-pointer hover:bg-blue-500"
//               />
//             </div>

//             {/* Product Info */}
//             <div className="flex flex-col p-2 items-center justify-between text-center flex-grow">
//               <p className="text-base font-semibold">{item.name}</p>

//               {item.extraText && (
//                 <p className="text-yellow-500 text-sm font-medium">{item.extraText}</p>
//               )}

//               <div className="relative h-[32px] mt-1 group w-full flex justify-center items-center">
//                 {/* Price */}
//                 <div className="absolute flex items-center gap-1 text-black opacity-100 group-hover:opacity-0 group-hover:translate-y-2 transition-all duration-300">
//                   <BsCurrencyDollar className="text-lg" />
//                   <span className="text-base font-semibold">{item.price.toFixed(2)}</span>
//                 </div>

//                 {/* Add to Cart */}
//                 <div
//                   className="absolute flex items-center bg-blue-500 gap-2 px-4 py-2 rounded-md shadow-md cursor-pointer opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300 hover:bg-blue-600"
//                   onClick={() => handleClick(item._id)}
//                 >
//                   <BsCart2 className="text-white" />
//                   <span className="text-sm font-semibold text-white">Add To Cart</span>
//                 </div>
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
import { getData } from "../ProductList.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Shope = () => {
  const [product, setProduct] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const fetchInfo = async () => {
    const response = await getData();
    if (response.data) {
      setProduct(response.data);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const handleClickwishList = (id) => {
    const user = localStorage.getItem("id");

    if (user) {
      fetch("https://e-commerce-furniture-backend-gpxh.onrender.com/api/wish-list", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user, product: id, quantity: 1 }),
      })
        .then((res) => res.json())
        .then(() => toast.success("Product added to wishlist!"))
        .catch(() => toast.error("Failed to add to wishlist"));
    } else {
      alert("Please login to add to wishlist.");
      navigate("/Login");
    }
  };

  const handleClick = (id) => {
    const user = localStorage.getItem("id");

    if (user) {
      fetch("https://e-commerce-furniture-backend-gpxh.onrender.com/api/post-cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user, product: id, quantity: 1 }),
      })
        .then((res) => res.json())
        .then(() => toast.success("Product added to cart!"))
        .catch(() => toast.error("Failed to add to cart"));
    } else {
      alert("Please login to add to cart.");
      navigate("/Login");
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? product
      : product.filter((item) => item.category === selectedCategory);

  return (
    <div className="w-full font-Poppins pt-12">
      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 bg-amber-400 py-4 px-2">
        {["All", "Men's", "Watchs", "Shoes", "Accessories", "Headset"].map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              selectedCategory === cat ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Filter Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 sm:px-6 lg:px-16 my-6 gap-4">
        <p className="text-lg font-medium">Showing {filteredProducts.length} result(s)</p>

        <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-2 sm:items-center">
          <label htmlFor="sort" className="text-sm font-medium text-gray-700">
            Sort by
          </label>
          <select
            id="sort"
            name="sort"
            className="w-full sm:w-60 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
          >
            <option>Default sorting</option>
            <option>Sort by popularity</option>
            <option>Sort by average rating</option>
            <option>Sort by latest</option>
            <option>Sort by price: low to high</option>
            <option>Sort by price: high to low</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-16 mb-16">
        {filteredProducts.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 p-4 rounded-lg shadow-md w-full bg-white transform transition-transform duration-300 hover:scale-105"
          >
            <div className="relative overflow-hidden cursor-pointer h-[280px] sm:h-[300px] rounded-md">
              <img
                onClick={() => navigate(`/productdetiles/${item._id}`)}
                src={
                  item.image?.startsWith("http")
                    ? item.image
                    : `https://e-commerce-furniture-backend-gpxh.onrender.com${item.image}`
                }
                alt={item.title || "product"}
                className="w-full h-full object-cover rounded-md"
              />

              {item.discount && (
                <div className="absolute top-3 left-3 bg-white text-black px-2 py-1 text-xs font-semibold rounded-full shadow">
                  {item.discount}% OFF
                </div>
              )}

              {item.tag && (
                <div
                  className={`absolute top-3 right-3 px-2 py-1 text-xs font-bold rounded-full text-white shadow-md animate-pulse ${
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
                className="absolute bottom-3 right-3 text-3xl text-black hover:text-white bg-white p-2 rounded-full cursor-pointer hover:bg-blue-500"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col p-2 items-center justify-between text-center flex-grow">
              <p className="text-base font-semibold">{item.name}</p>
              {item.extraText && (
                <p className="text-yellow-500 text-sm font-medium">{item.extraText}</p>
              )}

              <div className="relative h-[32px] mt-1 group w-full flex justify-center items-center">
                {/* Price */}
                <div className="absolute flex items-center gap-1 text-black opacity-100 group-hover:opacity-0 group-hover:translate-y-2 transition-all duration-300">
                  <BsCurrencyDollar className="text-lg" />
                  <span className="text-base font-semibold">{item.price.toFixed(2)}</span>
                </div>

                {/* Add to Cart */}
                <div
                  className="absolute flex items-center bg-blue-500 gap-2 px-4 py-2 rounded-md shadow-md cursor-pointer opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300 hover:bg-blue-600"
                  onClick={() => handleClick(item._id)}
                >
                  <BsCart2 className="text-white" />
                  <span className="text-sm font-semibold text-white">Add To Cart</span>
                </div>
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


