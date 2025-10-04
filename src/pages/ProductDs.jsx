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
    <div className="max-w-7xl mx-auto px-4  py-8">
      <div className="grid grid-cols-1 bg-red-000 md:grid-cols-2 gap-4 items-start">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={product?.image}
            alt={product?.name}
            className="  w-46 h-46 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl object-contain rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700">
            {product.name}
          </h2>
          <p className="text-sm  text-gray-600">{product.description}</p>
          <p className="text-xl font-bold text-gray-800">
            ₹{product.price.toFixed(2)}
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center bg-white text-black rounded-full border-1 border-[#4CB19A] px-3 py-0 w-fit space-x-4">
            <button onClick={() => handleQuantityChange("decrement")}className="font-bold" >−</button>
            <span className="font-medium">{quantity}</span>
            <button onClick={() => handleQuantityChange("increment")} className="font-bold">+</button>
          </div>

          {/* <p className="text-lg font-bold  text-gray-700">
            Total : ₹{(product.price * quantity).toFixed(2)}
          </p> */}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button
              onClick={handleBuyNow}
              className="bg-[#4CB19A] hover:bg-gray-600 text-white font-semibold rounded-lg py-3 px-6 w-full sm:w-1/2"
            >
              Buy Now
            </button>

            <button
              className="bg-gray-600 hover:bg-[#4CB19A] text-white rounded-lg py-3 px-6 w-full sm:w-1/2 flex items-center justify-center"
            >
              {/* <FiShoppingCart className="text-xl mr-2" /> */}
              Add to Cart  
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDs;
