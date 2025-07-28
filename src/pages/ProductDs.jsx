// import { useParams } from "react-router";
// import { useEffect, useState, useContext } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { AppContext } from "../context/AppContext";

// const ProductDs = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   // const { setCartItems } = useContext(AppContext);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/api/product/${id}`);
//         setProduct(res.data);
//         setQuantity(res.data.quantity || 1);
//       } catch (error) {
//         console.error("failed to load product", error);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   const handleQuantityChange = (type) => {
//     setQuantity((prevQuantity) => {
//       if (type === "decrement" && prevQuantity > 1) return prevQuantity - 1;
//       if (type === "increment") return prevQuantity + 1;
//       return prevQuantity;
//     });
//   };

//   const handleAddToCart = async (productId) => {
//     try { 
//       const userId = localStorage.getItem("id");
//       if (!userId) {
//         toast.error("User not logged in");
//         return;
//       }

//       const response = await fetch("http://localhost:5000/api/post-cart", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ user: userId, product: productId, quantity }),
//       });

//       if (response.ok) {
//         toast.success("🛒 Item added to cart!");
//       } else {
//         toast.error("❌ Failed to add to cart");
//       }
//     } catch (error) {
//       console.error("Add to cart failed:", error);
//       toast.error("⚠️ Something went wrong!");
//     }
//   };

//   // ✅ WhatsApp Buy Now Integration with your number
//   const handleBuyNow = () => {
//     const phoneNumber = "917592084226"; // your WhatsApp number
//     const message = `Hello! I'm interested in buying:\n\nProduct: ${product.name}\nPrice: ₹${product.price}\nQuantity: ${quantity}\nTotal: ₹${(product.price * quantity).toFixed(2)}`;
//     const encodedMessage = encodeURIComponent(message);
//     const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
//     window.open(url, "_blank");
//   };

//   if (!product) return <p>Loading......!</p>;

//   return (
//     <div className="flex flex-col md:flex-row items-center p-10">
//       {/* Product Image */}
//       <div className="md:w-1/4 m-auto">
//         <img
//           src={product?.image}
//           alt={product?.name}
//           className="rounded-lg shadow-lg w-full h-[500px]"
//         />
//       </div>

//       {/* Product Info */}
//       <div className="w-full md:w-1/2 space-y-4">
//         <p className="text-sm text-gray-400 uppercase">New Collection</p>
//         <h2 className="text-3xl font-semibold">{product.name}</h2>
//         <p className="text-gray-600">Color: Cream</p>

//         {/* Rating */}
//         <div className="flex items-center gap-1 text-orange-400">
//           {"★".repeat(4)}
//           <span className="text-gray-400">★</span>
//           <a href="#" className="text-sm text-blue-600 ml-2 underline">
//             8 Reviews
//           </a>
//         </div>

//         {/* Price */}
//         <p className="text-2xl text-red-500 font-bold">
//           ₹{product.price.toFixed(2)}
//         </p>

//         {/* Quantity Selector */}
//         <div className="flex items-center text-white bg-blue-700 hover:bg-blue-800 w-fit rounded-3xl px-4 py-1">
//           <button
//             className="text-xl px-2"
//             onClick={() => handleQuantityChange("decrement")}
//           >
//             −
//           </button>
//           <span className="px-3 text-lg">{quantity}</span>
//           <button
//             className="text-xl px-2"
//             onClick={() => handleQuantityChange("increment")}
//           >
//             +
//           </button>
//         </div>

//         {/* Description */}
//         <div className="mt-4">
//           <h4 className="font-semibold">Description</h4>
//           <ul className="text-gray-600 text-sm space-y-1 mt-1">
//             <li>Size: 29.4" H × 35.8" W × 32.3" D</li>
//             <li>Seat Height: 14.5"</li>
//             <li>Materials: Plywood, Oak Veneer, Italian Leather</li>
//             <li>Weight: 40 lbs</li>
//           </ul>
//         </div>

//         {/* Total Price */}
//         <p className="text-xl font-semibold mt-4">
//           Total Price:{" "}
//           <span className="text-black">
//             ₹{(product.price * quantity).toFixed(2)}
//           </span>
//         </p>

//         {/* Buttons */}
//         <div className="flex flex-row gap-4">
//           <button
//             onClick={() => handleAddToCart(product._id)}
//             className="bg-blue-700 cursor-pointer text-[17px] hover:bg-blue-800 w-32 h-14 font-semibold text-white px-4 py-2 rounded-md text-sm"
//           >
//             Add to Cart
//           </button>

//           <button
//             onClick={handleBuyNow}
//             className="bg-[#ff9f00] cursor-pointer hover:bg-[#ff9f00] w-32 h-14 font-semibold text-[18px] text-white px-4 py-2 rounded-md"
//           >
//             Buy Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDs;


// import { useParams } from "react-router";
// import { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import { apiClient } from "../utils/api.js";

// const ProductDs = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [quantity, setQuantity] = useState(1);

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
//         return;
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

//   const handleBuyNow = () => {
//     const phoneNumber = "917592084226";
//     const message = `Hello! I'm interested in buying:\n\nProduct: ${product.name}\nPrice: ₹${product.price}\nQuantity: ${quantity}\nTotal: ₹${(product.price * quantity).toFixed(2)}`;
//     const encodedMessage = encodeURIComponent(message);
//     const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
//     window.open(url, " Order ");
//   };

//   if (!product) return <p className="text-center mt-10">Loading......!</p>;

//   return (
//     <div className="flex flex-col md:flex-row items-center p-10">
//       <div className="md:w-1/4 m-auto">
//         <img
//           src={product?.image}
//           alt={product?.name}
//           className="rounded-lg shadow-lg w-full h-[500px] object-cover"
//         />
//       </div>

//       <div className="w-full md:w-1/2 space-y-4">
//         <p className="text-sm text-gray-400 uppercase">New Collection</p>
//         <h2 className="text-3xl font-semibold">{product.name}</h2>
//         <p className="text-gray-600">Color: Cream</p>

//         <div className="flex items-center gap-1 text-orange-400">
//           {"★".repeat(4)}
//           <span className="text-gray-400">★</span>
//           <a href="#" className="text-sm text-blue-600 ml-2 underline">
//             8 Reviews
//           </a>
//         </div>

//         <p className="text-2xl text-red-500 font-bold">
//           ₹{product.price.toFixed(2)}
//         </p>

//         <div className="flex items-center text-white bg-blue-700 hover:bg-blue-800 w-fit rounded-3xl px-4 py-1">
//           <button
//             className="text-xl px-2"
//             onClick={() => handleQuantityChange("decrement")}
//           >
//             −
//           </button>
//           <span className="px-3 text-lg">{quantity}</span>
//           <button
//             className="text-xl px-2"
//             onClick={() => handleQuantityChange("increment")}
//           >
//             +
//           </button>
//         </div>

//         <div className="mt-4">
//           <h4 className="font-semibold">Description</h4>
//           <ul className="text-gray-600 text-sm space-y-1 mt-1">
//             {product.description}
//           </ul>
//         </div>

//         <p className="text-xl font-semibold mt-4">
//           Total Price:{" "}
//           <span className="text-black">
//             ₹{(product.price * quantity).toFixed(2)}
//           </span>
//         </p>

//         <div className="flex flex-row gap-4">
//           <button
//             onClick={() => handleAddToCart(product._id)}
//             className="bg-blue-700 cursor-pointer text-[17px] hover:bg-blue-800 w-32 h-14 font-semibold text-white px-4 py-2 rounded-md text-sm"
//           >
//             Add to Cart
//           </button>

//           <button
//             onClick={handleBuyNow}
//             className="bg-[#ff9f00] cursor-pointer hover:bg-[#ff9f00] w-32 h-14 font-semibold text-[18px] text-white px-4 py-2 rounded-md"
//           >
//             Buy Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDs;


















// import { useParams } from "react-router";
// import { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import { apiClient } from "../utils/api.js";

// const ProductDs = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [quantity, setQuantity] = useState(1);

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
//         return;
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

//   const handleBuyNow = () => {
//     const phoneNumber = "917592084226";
//     const message = `Hello! I'm interested in buying:\n\nProduct: ${product.name}\nPrice: ₹${product.price}\nQuantity: ${quantity}\nTotal: ₹${(
//       product.price * quantity
//     ).toFixed(2)}`;
//     const encodedMessage = encodeURIComponent(message);
//     const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
//     window.open(url, "_blank");
//   };

//   if (!product) return <p className="text-center mt-10">Loading......!</p>;

//   return (
//     <div className="flex flex-col pb-18 md:pb-00 lg:pb-00 md:flex-row gap-2 items-center  justify-center  sm:p-6 md:p-10 max-w-7xl mx-auto">
//       {/* Product Image */}
//       <div className="w-full bg-amber-000 bg-red-000 md:w-1/2  lg:w-1/3 flex justify-center">
//         <img
//           src={product?.image}
//           alt={product?.name}
//           className="rounded-lg   p-2  w-full  h-auto  sm:h-[400px] md:h-[500px] object-cover"
//         />
//       </div>

//       {/* Product Info */}
//       <div className="w-full px-6 md:w-1/2  space-y-1">

//        <div className="mt-">
//          <p className="text-xs sm:text-sm text-gray-400 uppercase">
//           New Collection
//         </p>
//           {/* Description */}
//           <h4 className="font-semibold text-base  sm:text-lg">Description</h4>
//           <p className="text-gray-600 text-sm capitalize sm:text-base mt-1 leading-relaxed">
//             {product.description}
//           </p>
//         </div>
       
//         <h2 className="text-[20px] capitalize sm:text-3xl font-semibold">{product.name}</h2>
//         <p className="text-sm sm:text-base text-gray-600">Color: Cream</p>

//         {/* Ratings */}
//         <div className="flex items-center gap-1 text-orange-400">
//           {"★".repeat(4)}
//           <span className="text-gray-400">★</span>
//           <a href="#" className="text-xs sm:text-sm text-blue-600 ml-2 underline">
//             8 Reviews
//           </a>
//         </div>

//         {/* Price */}
//         <p className="text-xl sm:text-2xl text-red-500 font-bold">
//           ₹{product.price.toFixed(2)}
//         </p>

//         {/* Quantity Selector */}
//         <div className="flex items-center text-white bg-blue-700 hover:bg-blue-800 w-fit rounded-3xl px-4 py-1">
//           <button
//             className="text-xl px-2"
//             onClick={() => handleQuantityChange("decrement")}
//           >
//             −
//           </button>
//           <span className="px-3 text-lg">{quantity}</span>
//           <button
//             className="text-xl px-2"
//             onClick={() => handleQuantityChange("increment")}
//           >
//             +
//           </button>
//         </div>

      
      
//         {/* Total Price */}
//         <p className="text-lg sm:text-xl font-semibold mt-4">
//           Total Price:{" "}
//           <span className="text-black">
//             ₹{(product.price * quantity).toFixed(2)}
//           </span>
//         </p>

//         {/* Buttons */}
//         <div className="flex flex-row  sm:flex-row gap-4 pt-2">
//           <button
//             onClick={() => handleAddToCart(product._id)}
//             className="bg-blue-700 cursor-pointer hover:bg-blue-800 w-full sm:w-40 h-12 font-semibold text-white rounded-md"
//           >
//             Add to Cart
//           </button>

//           <button
//             onClick={handleBuyNow}
//             className="bg-[#ff9f00] hover:bg-[#f58f00] w-full sm:w-40 h-12 font-semibold text-white rounded-md"
//           >
//             Buy Now
//           </button>
//         </div>

        
//       </div>
//     </div>
//   );
// };

// export default ProductDs;









import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { apiClient } from "../utils/api.js";

const ProductDs = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

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

  const handleAddToCart = async (productId) => {
    try {
      const userId = localStorage.getItem("id");
      if (!userId) {
        toast.error("⚠️ User not logged in");
        return;
      }

      await apiClient.post("/post-cart", {
        user: userId,
        product: productId,
        quantity,
      });

      toast.success("🛒 Item added to cart!");
    } catch (error) {
      console.error("Add to cart failed:", error);
      toast.error("❌ Failed to add to cart");
    }
  };

  const handleBuyNow = () => {
    const phoneNumber = "917592084226";
    const message = `Hello! I'm interested in buying:\n\nProduct: ${product.name}\nPrice: ₹${product.price}\nQuantity: ${quantity}\nTotal: ₹${(
      product.price * quantity
    ).toFixed(2)}`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  if (!product) return <p className="text-center mt-10">Loading......!</p>;

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 pb-16 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src={product?.image}
            alt={product?.name}
            className="w-full max-w-sm sm:max-w-md md:max-w-lg rounded-lg object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-4">
          <p className="text-xs sm:text-sm text-gray-400 uppercase">
            New Collection
          </p>

          <h4 className="font-semibold text-base sm:text-lg">Description</h4>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed capitalize">
            {product.description}
          </p>

          <h2 className="text-2xl sm:text-3xl font-semibold capitalize">
            {product.name}
          </h2>

          <p className="text-sm sm:text-base text-gray-600">Color: Cream</p>

          <div className="flex items-center gap-1 text-orange-400">
            {"★".repeat(4)}
            <span className="text-gray-400">★</span>
            <a
              href="#"
              className="text-xs sm:text-sm text-blue-600 ml-2 underline"
            >
              8 Reviews
            </a>
          </div>

          <p className="text-xl sm:text-2xl text-red-500 font-bold">
            ₹{product.price.toFixed(2)}
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center text-white bg-blue-700 hover:bg-blue-800 w-fit rounded-3xl px-4 py-1">
            <button
              className="text-xl px-2"
              onClick={() => handleQuantityChange("decrement")}
            >
              −
            </button>
            <span className="px-3 text-lg">{quantity}</span>
            <button
              className="text-xl px-2"
              onClick={() => handleQuantityChange("increment")}
            >
              +
            </button>
          </div>

          <p className="text-lg sm:text-xl font-semibold mt-2">
            Total Price: ₹{(product.price * quantity).toFixed(2)}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full">
            <button
              onClick={() => handleAddToCart(product._id)}
              className="bg-blue-700 hover:bg-blue-800 w-full sm:w-40 h-12 font-semibold text-white rounded-md"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="bg-[#ff9f00] hover:bg-[#f58f00] w-full sm:w-40 h-12 font-semibold text-white rounded-md"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDs;







