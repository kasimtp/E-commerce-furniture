// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router";
// import { toast } from "react-toastify";
// import { apiClient } from "../utils/api.js";
// import { FiShoppingCart } from "react-icons/fi";
// import Footer from "../components/Footer.jsx";

// const ProductDs = () => {

//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [quantity, setQuantity] = useState(1);

//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await apiClient.get(`/product/${id}`);
//         setProduct(res.data);
//         setQuantity(res.data.quantity || 1);
//       } catch (error) {
//         console.error("Failed to load product", error);
//       }
//     };
//     fetchProduct();
//   }, [id]);

//   const handleQuantityChange = (type) => {
//     setQuantity((prev) => {
//       if (type === "decrement" && prev > 1) return prev - 1;
//       if (type === "increment") return prev + 1;
//       return prev;
//     });
//   };

//   const handleAddToCart = async (productId) => {
//     try {
//       const userId = localStorage.getItem("id");
//       if (!userId) {
//         toast.error("⚠️ User not logged in");
//         return navigate("/Login");
//       }

//       await apiClient.post("/post-cart", {
//         user: userId,
//         product: productId,
//         quantity,
//       });

//       toast.success("🛒 Item added to cart!");
//     } catch (error) {
//       console.error("Add to cart failed:", error);
//       toast.error("❌ Failed to add to cart");
//     }
//   };

//   if (!product) return <p className="text-center mt-10">Loading......!</p>;

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

//         {/* Product Image */}
//         <div className="flex justify-center">
//           <img
//             src={product?.image}
//             alt={product?.name}
//             className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl object-contain rounded-lg"
//           />
//         </div>

//         {/* Product Details */}
//         <div className="space-y-6">
//           <p className="uppercase text-sm sm:text-base md:text-lg text-gray-400 font-Poppins">
//             New Collection
//           </p>

//           <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 font-Poppins capitalize">
//             {product.name}
//           </h2>

//           <p className="text-sm sm:text-base md:text-lg text-gray-600 font-Poppins leading-relaxed">
//             {product.description}
//           </p>

//           <p className="text-sm sm:text-base md:text-lg text-gray-500 font-Poppins">
//             Color: Cream
//           </p>

//           <div className="flex items-center gap-1 text-orange-400 text-lg sm:text-xl">
//             {"★".repeat(3)}<span className="text-gray-300">★</span>
//             <a href="#" className="text-blue-600 underline ml-2 text-sm">8 Reviews</a>
//           </div>

//           <p className="text-xl sm:text-2xl md:text-3xl font-semibold font-Poppins text-gray-800">
//             ₹{product.price.toFixed(2)}
//           </p>

//           {/* Quantity Selector */}
//           <div className="flex items-center bg-[#4CB19A] text-white rounded-full px-5 py-2 w-fit space-x-4">
//             <button
//               className="text-2xl font-bold"
//               onClick={() => handleQuantityChange("decrement")}
//             >
//               −
//             </button>
//             <span className="text-lg sm:text-xl">{quantity}</span>
//             <button
//               className="text-2xl font-bold"
//               onClick={() => handleQuantityChange("increment")}
//             >
//               +
//             </button>
//           </div>

//           <p className="text-base sm:text-lg md:text-xl font-bold text-gray-700">
//             Total: ₹{(product.price * quantity).toFixed(2)}
//           </p>

//           {/* Action Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 mt-4">
//             <button
//               onClick={() =>
//                 navigate("/checkout", {
//                   state: {
//                     product,
//                     quantity,
//                     total: product.price * quantity,
//                   },
//                 })
//               }
//               className="bg-[#4CB19A] hover:bg-gray-600 text-white font-semibold rounded-lg py-3 px-6 w-full sm:w-1/2"
//             >
//               Buy Now
//             </button>

//             <button
//               onClick={() => handleAddToCart(product._id)}
//               className="bg-gray-600 hover:bg-[#4CB19A] text-white rounded-lg py-3 px-6 w-full sm:w-1/2 flex items-center justify-center"
//             >
//               <FiShoppingCart className="text-xl mr-2" />
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default ProductDs;







import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
// import { toast } from "react-toastify";
import { apiClient } from "../utils/api.js";
import { FiShoppingCart } from "react-icons/fi";
import Footer from "../components/Footer.jsx";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/productSlice";

const ProductDs = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await apiClient.get(`/product/${id}`);
        setProduct(res.data);
        setQuantity(res.data.quantity || 1);
      } catch (error) {
        console.error("Failed to load product", error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleQuantityChange = (type) => {
    setQuantity((prev) => {
      if (type === "decrement" && prev > 1) return prev - 1;
      if (type === "increment") return prev + 1;
      return prev;
    });
  };

  const handleBuyNow = () => {
    dispatch(addToCart({ product, quantity }));
    navigate("/checkout");
  };

  if (!product) return <p className="text-center mt-10">Loading......!</p>;

  return (
    <div className="w-full bg-gray-50 min-h-screen pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start bg-white p-6 md:p-8 lg:p-12 rounded-3xl shadow-sm">
          {/* Product Image */}
          <div className="flex justify-center items-center bg-gray-50 aspect-square rounded-2xl overflow-hidden p-6 md:p-10">
            <img
              src={product?.image}
              alt={product?.name}
              className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6 flex flex-col justify-center h-full">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                {product.name}
              </h2>
              <p className="text-base sm:text-lg text-gray-500 mt-4 leading-relaxed">
                {product.description}
              </p>
            </div>
            
            <div className="pt-4 border-t border-gray-100">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#4CB19A]">
                ₹{product.price.toFixed(2)}
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="pt-2">
              <p className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">Quantity</p>
              <div className="flex items-center bg-gray-100 text-black rounded-full px-4 py-2 w-fit space-x-6">
                <button onClick={() => handleQuantityChange("decrement")} className="text-xl font-medium text-gray-600 hover:text-[#4CB19A] transition-colors" >−</button>
                <span className="font-semibold text-lg w-4 text-center">{quantity}</span>
                <button onClick={() => handleQuantityChange("increment")} className="text-xl font-medium text-gray-600 hover:text-[#4CB19A] transition-colors">+</button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                onClick={handleBuyNow}
                className="bg-[#4CB19A] hover:bg-[#3a8d7c] text-white font-semibold rounded-xl py-4 px-6 w-full sm:w-1/2 shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
              >
                Buy Now
              </button>

              <button
                className="bg-gray-800 hover:bg-black text-white rounded-xl py-4 px-6 w-full sm:w-1/2 flex items-center justify-center font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
              >
                {/* <FiShoppingCart className="text-xl mr-2" /> */}
                Add to Cart  
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDs;
