// import { useState, useContext } from "react";
// import { X } from "lucide-react";
// import { useNavigate } from "react-router";
// import { motion, AnimatePresence } from "framer-motion";
// import { AppContext } from "../context/AppContext";
// import Footer from "./Footer";
// import { FaWhatsapp } from "react-icons/fa"; // ✅ WhatsApp Icon

// const Cart = () => {
//   const [isOpen, setIsOpen] = useState(true);
//   const navigate = useNavigate();
//   const { cartItems, setCartItems, removeItemFromCart } = useContext(AppContext);

//   const totalPrice = cartItems.reduce((acc, item) => {
//     const price = parseFloat(item?.product?.price) || 0;
//     return acc + (isNaN(price) ? 0 : price * item.quantity);
//   }, 0);

//   const handleQuantityChange = async (id, type) => {
//     try {
//       const res = await fetch(`http://localhost:5000/api/update-cart/${id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ type }),
//       }); 

//       if (!res.ok) throw new Error("Failed to update quantity");

//       const updatedItem = await res.json();
//       setCartItems((prev) =>
//         prev.map((item) =>
//           item._id === id ? { ...item, quantity: updatedItem.quantity } : item
//         )
//       );
//     } catch (err) {
//       console.error("Quantity update error:", err);
//     }
//   };

//   // ✅ WhatsApp Buy Now Integration
//   const handleBuyNow = () => {
//     const phoneNumber = "917592084226";
//     const orderId = Math.floor(100000 + Math.random() * 900000);
//     const userName = localStorage.getItem("username") || "Customer";

//     const itemsMessage = cartItems.map((item, index) => {
//       const name = item?.product?.name;
//       const price = item?.product?.price;
//       const quantity = item.quantity;
//       const total = (price * quantity).toFixed(2);
//       return `🛒 *${index + 1}. ${name}* — ₹${price} × ${quantity} = ₹${total}`;
//     }).join("\n");

//     const grandTotal = totalPrice.toFixed(2);

//     const finalMessage = `🧾 *Order Summary*\n\n👤 Name: ${userName}\n📦 Order ID: #${orderId}\n\n${itemsMessage}\n\n💰 *Total: ₹${grandTotal}*\n\n📲 Please confirm this order.`;

//     const encodedMessage = encodeURIComponent(finalMessage);
//     const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
//     window.open(url, "_blank");
//   };

//   return (
//     <>
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ type: "spring", stiffness: 300, damping: 30 }}
//             className="fixed inset-0 bg-gray-100 z-50 overflow-auto"
//           >
//             {/* Header */}
//             <div className="flex justify-between items-center bg-blue-800 p-4 border-b">
//               <h2 className="text-xl sm:text-2xl text-white font-semibold">
//                 SHOPPING CART
//                 <span className="ml-2 px-2 py-1 text-white bg-blue-700 rounded-full text-sm">
//                   {cartItems.length}
//                 </span>
//               </h2>
//               <motion.button
//                 whileTap={{ scale: 0.8, rotate: 90 }}
//                 onClick={() => {
//                   setIsOpen(false);
//                   navigate("/shop");
//                 }}
//               >
//                 <X className="hover:text-red-600 cursor-pointer w-6 h-6 text-white" />
//               </motion.button>
//             </div>

//             {cartItems.length === 0 ? (
//               <div className="flex flex-col items-center justify-center h-[80vh] text-center">
//                 <p className="text-base sm:text-lg text-gray-700 mb-4">
//                   No products in the cart.
//                 </p>
//                 <button
//                   onClick={() => navigate("/shop")}
//                   className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-full transition text-sm sm:text-base"
//                 >
//                   Continue Shopping
//                 </button>
//               </div>
//             ) : (
//               <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6">
//                 {/* Cart Items */}
//                 <div className="flex-1 space-y-4">
//                   {cartItems.map((item) => (
//                     <div
//                       key={item._id}
//                       className="p-4 shadow rounded flex flex-col sm:flex-row items-start sm:items-center sm:h-48 gap-4"
//                     >
//                       <img
//                         src={item?.product?.image}
//                         className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded"
//                         alt={item?.product?.name}
//                       />

//                       <div className="flex flex-col sm:flex-row justify-between w-full gap-4">
//                         <div className="flex-1">
//                           <h3 className="text-base sm:text-lg font-semibold text-gray-800">
//                             {item?.product?.name}
//                           </h3>
//                           <p className="text-sm text-gray-500 mt-1">Available</p>
//                           <div className="flex gap-4 mt-2 flex-wrap">
//                             <button className="text-md text-blue-600 font-medium">
//                               Save for later
//                             </button>
//                             <button
//                               onClick={() => removeItemFromCart(item._id)}
//                               className="text-md cursor-pointer hover:text-blue-500 text-blue-700 font-medium"
//                             >
//                               Remove
//                             </button>
//                           </div>
//                         </div>

//                         <div className="flex flex-col sm:items-end gap-2">
//                           <div className="flex items-center border rounded-full bg-blue-600 w-fit">
//                             <button
//                               onClick={() =>
//                                 item.quantity > 1 &&
//                                 handleQuantityChange(item._id, "decrement")
//                               }
//                               className="px-3 text-white font-bold text-xl"
//                             >
//                               −
//                             </button>
//                             <span className="px-3 text-white font-bold text-base">
//                               {item.quantity}
//                             </span>
//                             <button
//                               onClick={() =>
//                                 handleQuantityChange(item._id, "increment")
//                               }
//                               className="px-3 text-white font-bold text-xl"
//                             >
//                               +
//                             </button>
//                           </div>
//                           <p className="text-base font-semibold text-red-600">
//                             ₹{(item?.product?.price * item.quantity).toFixed(2)}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   ))}

//                   {/* Place Order Button */}
//                   <div className="text-right pt-4">
//                     <button
//                       onClick={handleBuyNow}
//                       className="bg-green-600 hover:bg-green-700 flex items-center gap-2 text-white px-6 py-2 rounded font-semibold text-sm sm:text-base"
//                     >
//                       <FaWhatsapp className="text-xl" />
//                       PLACE ORDER
//                     </button>
//                   </div>
//                 </div>

//                 {/* Price Summary */}
//                 <div className="w-full lg:w-[350px] space-y-4">
//                   <div className="bg-white p-4 rounded shadow">
//                     <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-2">
//                       PRICE DETAILS
//                     </h3>
//                     <div className="text-sm sm:text-base space-y-2">
//                       <div className="flex justify-between">
//                         <span>Price ({cartItems.length} items)</span>
//                         <span>₹{totalPrice.toFixed(2)}</span>
//                       </div>
//                       <div className="flex justify-between text-green-600">
//                         <span>Discount</span>
//                         <span>− ₹0</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span>Delivery Charges</span>
//                         <span className="text-green-600">Free</span>
//                       </div>
//                       <hr />
//                       <div className="flex justify-between font-bold text-base">
//                         <span>Total Amount</span>
//                         <span>₹{totalPrice.toFixed(2)}</span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="text-xs text-gray-500 flex items-center gap-2">
//                     <svg
//                       className="w-4 h-4"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M5 13l4 4L19 7"
//                       />
//                     </svg>
//                     Safe and Secure Payments. 100% Authentic Products.
//                   </div>
//                 </div>
//               </div>
//             )}
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Footer */}
//       {!isOpen && <Footer />}
//     </>
//   );
// };

// export default Cart;







// import { useState, useContext } from "react";
// import { X } from "lucide-react";
// import { useNavigate } from "react-router";
// import { motion, AnimatePresence } from "framer-motion";
// import { AppContext } from "../context/AppContext.jsx";
// import Footer from "./Footer";
// import { FaWhatsapp } from "react-icons/fa"; // ✅ WhatsApp Icon

// const Cart = () => {
//   const [isOpen, setIsOpen] = useState(true);
//   const navigate = useNavigate();
//   const { cartItems, setCartItems, removeItemFromCart } = useContext(AppContext);

//   const totalPrice = cartItems.reduce((acc, item) => {
//     const price = parseFloat(item?.product?.price) || 0;
//     return acc + (isNaN(price) ? 0 : price * item.quantity);
//   }, 0);

//   const handleQuantityChange = async (id, type) => {
//     try {
//       const res = await fetch(`https://e-commerce-furniture-backend-gpxh.onrender.com/update-cart/${id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ type }),
//       });

//       if (!res.ok) throw new Error("Failed to update quantity");

//       const updatedItem = await res.json();
//       setCartItems((prev) =>
//         prev.map((item) =>
//           item._id === id ? { ...item, quantity: updatedItem.quantity } : item
//         )
//       );
//     } catch (err) {
//       console.error("Quantity update error:", err);
//     }
//   };

//   // ✅ WhatsApp Buy Now Integration
//   const handleBuyNow = () => {
//     const phoneNumber = "917592084226";
//     const orderId = Math.floor(100000 + Math.random() * 900000);
//     const userName = localStorage.getItem("username") || "Customer";

//     const itemsMessage = cartItems.map((item, index) => {
//       const name = item?.product?.name;
//       const price = item?.product?.price;
//       const quantity = item.quantity;
//       const total = (price * quantity).toFixed(2);
//       return `🛒 *${index + 1}. ${name}* — ₹${price} × ${quantity} = ₹${total}`;
//     }).join("\n");

//     const grandTotal = totalPrice.toFixed(2);

//     const finalMessage = `🧾 *Order Summary*\n\n👤 Name: ${userName}\n📦 Order ID: #${orderId}\n\n${itemsMessage}\n\n💰 *Total: ₹${grandTotal}*\n\n📲 Please confirm this order.`;

//     const encodedMessage = encodeURIComponent(finalMessage);
//     const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
//     window.open(url, "_blank");
//   };

//   return (
//     <>
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ type: "spring", stiffness: 300, damping: 30 }}
//             className="fixed inset-0 bg-gray-100 z-50 overflow-auto"
//           >
//             {/* Header */}
//             <div className="flex justify-between items-center bg-blue-800 p-4 border-b">
//               <h2 className="text-xl sm:text-2xl text-white font-semibold">
//                 SHOPPING CART
//                 <span className="ml-2 px-2 py-1 text-white bg-blue-700 rounded-full text-sm">
//                   {cartItems.length}
//                 </span>
//               </h2>
//               <motion.button
//                 whileTap={{ scale: 0.8, rotate: 90 }}
//                 onClick={() => {
//                   setIsOpen(false);
//                   navigate("/shop");
//                 }}
//               >
//                 <X className="hover:text-red-600 cursor-pointer w-6 h-6 text-white" />
//               </motion.button>
//             </div>

//             {cartItems.length === 0 ? (
//               <div className="flex flex-col items-center justify-center h-[80vh] text-center">
//                 <p className="text-base sm:text-lg text-gray-700 mb-4">
//                   No products in the cart.
//                 </p>
//                 <button
//                   onClick={() => navigate("/shop")}
//                   className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-full transition text-sm sm:text-base"
//                 >
//                   Continue Shopping
//                 </button>
//               </div>
//             ) : (
//               <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6">
//                 {/* Cart Items */}
//                 <div className="flex-1 space-y-4">
//                   {cartItems.map((item) => (
//                     <div
//                       key={item._id}
//                       className="p-4 shadow rounded flex flex-col sm:flex-row items-start sm:items-center sm:h-48 gap-4"
//                     >
//                       <img
//                         src={item?.product?.image}
//                         className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded"
//                         alt={item?.product?.name}
//                       />

//                       <div className="flex flex-col sm:flex-row justify-between w-full gap-4">
//                         <div className="flex-1">
//                           <h3 className="text-base sm:text-lg font-semibold text-gray-800">
//                             {item?.product?.name}
//                           </h3>
//                           <p className="text-sm text-gray-500 mt-1">Available</p>
//                           <div className="flex gap-4 mt-2 flex-wrap">
//                             <button className="text-md text-blue-600 font-medium">
//                               Save for later
//                             </button>
//                             <button
//                               onClick={() => removeItemFromCart(item._id)}
//                               className="text-md cursor-pointer hover:text-blue-500 text-blue-700 font-medium"
//                             >
//                               Remove
//                             </button>
//                           </div>
//                         </div>

//                         <div className="flex flex-col sm:items-end gap-2">
//                           <div className="flex items-center border rounded-full bg-blue-600 w-fit">
//                             <button
//                               onClick={() =>
//                                 item.quantity > 1 &&
//                                 handleQuantityChange(item._id, "decrement")
//                               }
//                               className="px-3 text-white font-bold text-xl"
//                             >
//                               −
//                             </button>
//                             <span className="px-3 text-white font-bold text-base">
//                               {item.quantity}
//                             </span>
//                             <button
//                               onClick={() =>
//                                 handleQuantityChange(item._id, "increment")
//                               }
//                               className="px-3 text-white font-bold text-xl"
//                             >
//                               +
//                             </button>
//                           </div>
//                           <p className="text-base font-semibold text-red-600">
//                             ₹{(item?.product?.price * item.quantity).toFixed(2)}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   ))}

//                   {/* Place Order Button */}
//                   <div className="text-right pt-4">
//                     <button
//                       onClick={handleBuyNow}
//                       className="bg-green-600 hover:bg-green-700 flex items-center gap-2 text-white px-6 py-2 rounded font-semibold text-sm sm:text-base"
//                     >
//                       <FaWhatsapp className="text-xl" />
//                       PLACE ORDER
//                     </button>
//                   </div>
//                 </div>

//                 {/* Price Summary */}
//                 <div className="w-full lg:w-[350px] space-y-4">
//                   <div className="bg-white p-4 rounded shadow">
//                     <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-2">
//                       PRICE DETAILS
//                     </h3>
//                     <div className="text-sm sm:text-base space-y-2">
//                       <div className="flex justify-between">
//                         <span>Price ({cartItems.length} items)</span>
//                         <span>₹{totalPrice.toFixed(2)}</span>
//                       </div>
//                       <div className="flex justify-between text-green-600">
//                         <span>Discount</span>
//                         <span>− ₹0</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span>Delivery Charges</span>
//                         <span className="text-green-600">Free</span>
//                       </div>
//                       <hr />
//                       <div className="flex justify-between font-bold text-base">
//                         <span>Total Amount</span>
//                         <span>₹{totalPrice.toFixed(2)}</span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="text-xs text-gray-500 flex items-center gap-2">
//                     <svg
//                       className="w-4 h-4"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M5 13l4 4L19 7"
//                       />
//                     </svg>
//                     Safe and Secure Payments. 100% Authentic Products.
//                   </div>
//                 </div>
//               </div>
//             )}
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Footer */}
//       {!isOpen && <Footer />}
//     </>
//   );
// };

// export default Cart;





// import { useState, useContext } from "react";
// import { X } from "lucide-react";
// import { useNavigate } from "react-router";
// import { motion, AnimatePresence } from "framer-motion";
// import { AppContext } from "../context/AppContext.jsx";
// import Footer from "./Footer";
// import { FaWhatsapp } from "react-icons/fa";
// import { apiClient } from "../utils/api.js"; // ✅ import apiClient

// const Cart = () => {
//   const [isOpen, setIsOpen] = useState(true);
//   const navigate = useNavigate();
//   const { cartItems, setCartItems, removeItemFromCart } = useContext(AppContext);

//   const totalPrice = cartItems.reduce((acc, item) => {
//     const price = parseFloat(item?.product?.price) || 0;
//     return acc + (isNaN(price) ? 0 : price * item.quantity);
//   }, 0);

//   const handleQuantityChange = async (id, type) => {
//     try {
//       const res = await apiClient.put(`/update-cart/${id}`, { type }); // ✅ using apiClient

//       const updatedItem = res.data;
//       setCartItems((prev) =>
//         prev.map((item) =>
//           item._id === id ? { ...item, quantity: updatedItem.quantity } : item
//         )
//       );
//     } catch (err) {
//       console.error("Quantity update error:", err);
//     }
//   };

//   const handleBuyNow = () => {
//     const phoneNumber = "917592084226";
//     const orderId = Math.floor(100000 + Math.random() * 900000);
//     const userName = localStorage.getItem("username") || "Customer";

//     const itemsMessage = cartItems.map((item, index) => {
//       const name = item?.product?.name;
//       const price = item?.product?.price;
//       const quantity = item.quantity;
//       const total = (price * quantity).toFixed(2);
//       return `🛒 *${index + 1}. ${name}* — ₹${price} × ${quantity} = ₹${total}`;
//     }).join("\n");

//     const grandTotal = totalPrice.toFixed(2);

//     const finalMessage = `🧾 *Order Summary*\n\n👤 Name: ${userName}\n📦 Order ID: #${orderId}\n\n${itemsMessage}\n\n💰 *Total: ₹${grandTotal}*\n\n📲 Please confirm this order.`;

//     const encodedMessage = encodeURIComponent(finalMessage);
//     const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
//     window.open(url, "_blank");
//   };

//   return (
//     <>
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ type: "spring", stiffness: 300, damping: 30 }}
//             className="fixed inset-0 bg-gray-100 z-50 overflow-auto"
//           >
//             <div className="flex justify-between items-center bg-blue-800 p-4 border-b">
//               <h2 className="text-xl sm:text-2xl text-white font-semibold">
//                 SHOPPING CART
//                 <span className="ml-2 px-2 py-1 text-white bg-blue-700 rounded-full text-sm">
//                   {cartItems.length}
//                 </span>
//               </h2>
//               <motion.button
//                 whileTap={{ scale: 0.8, rotate: 90 }}
//                 onClick={() => {
//                   setIsOpen(false);
//                   navigate("/shop");
//                 }}
//               >
//                 <X className="hover:text-red-600 cursor-pointer w-6 h-6 text-white" />
//               </motion.button>
//             </div>

//             {cartItems.length === 0 ? (
//               <div className="flex flex-col items-center justify-center h-[80vh] text-center">
//                 <p className="text-base sm:text-lg text-gray-700 mb-4">
//                   No products in the cart.
//                 </p>
//                 <button
//                   onClick={() => navigate("/shop")}
//                   className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-full transition text-sm sm:text-base"
//                 >
//                   Continue Shopping
//                 </button>
//               </div>
//             ) : (
//               <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6">
//                 <div className="flex-1 space-y-4">
//                   {cartItems.map((item) => (
//                     <div
//                       key={item._id}
//                       className="p-4 shadow rounded flex flex-col sm:flex-row items-start sm:items-center sm:h-48 gap-4"
//                     >
//                       <img
//                         src={item?.product?.image}
//                         className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded"
//                         alt={item?.product?.name}
//                       />
//                       <div className="flex flex-col sm:flex-row justify-between w-full gap-4">
//                         <div className="flex-1">
//                           <h3 className="text-base sm:text-lg font-semibold text-gray-800">
//                             {item?.product?.name}
//                           </h3>
//                           <p className="text-sm text-gray-500 mt-1">Available</p>
//                           <div className="flex gap-4 mt-2 flex-wrap">
//                             <button className="text-md text-blue-600 font-medium">
//                               Save for later
//                             </button>
//                             <button
//                               onClick={() => removeItemFromCart(item._id)}
//                               className="text-md cursor-pointer hover:text-blue-500 text-blue-700 font-medium"
//                             >
//                               Remove
//                             </button>
//                           </div>
//                         </div>
//                         <div className="flex flex-col sm:items-end gap-2">
//                           <div className="flex items-center border rounded-full bg-blue-600 w-fit">
//                             <button
//                               onClick={() =>
//                                 item.quantity > 1 &&
//                                 handleQuantityChange(item._id, "decrement")
//                               }
//                               className="px-3 text-white font-bold text-xl"
//                             >
//                               −
//                             </button>
//                             <span className="px-3 text-white font-bold text-base">
//                               {item.quantity}
//                             </span>
//                             <button
//                               onClick={() =>
//                                 handleQuantityChange(item._id, "increment")
//                               }
//                               className="px-3 text-white font-bold text-xl"
//                             >
//                               +
//                             </button>
//                           </div>
//                           <p className="text-base font-semibold text-red-600">
//                             ₹{(item?.product?.price * item.quantity).toFixed(2)}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                   <div className="text-right pt-4">
//                     <button
//                       onClick={handleBuyNow}
//                       className="bg-green-600 hover:bg-green-700 flex items-center gap-2 text-white px-6 py-2 rounded font-semibold text-sm sm:text-base"
//                     >
//                       <FaWhatsapp className="text-xl" />
//                       PLACE ORDER
//                     </button>
//                   </div>
//                 </div>

//                 <div className="w-full lg:w-[350px] space-y-4">
//                   <div className="bg-white p-4 rounded shadow">
//                     <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-2">
//                       PRICE DETAILS
//                     </h3>
//                     <div className="text-sm sm:text-base space-y-2">
//                       <div className="flex justify-between">
//                         <span>Price ({cartItems.length} items)</span>
//                         <span>₹{totalPrice.toFixed(2)}</span>
//                       </div>
//                       <div className="flex justify-between text-green-600">
//                         <span>Discount</span>
//                         <span>− ₹0</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span>Delivery Charges</span>
//                         <span className="text-green-600">Free</span>
//                       </div>
//                       <hr />
//                       <div className="flex justify-between font-bold text-base">
//                         <span>Total Amount</span>
//                         <span>₹{totalPrice.toFixed(2)}</span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="text-xs text-gray-500 flex items-center gap-2">
//                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//                     </svg>
//                     Safe and Secure Payments. 100% Authentic Products.
//                   </div>
//                 </div>
//               </div>
//             )}
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {!isOpen && <Footer />}
//     </>
//   );
// };

// export default Cart;


























import { useState, useContext } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { AppContext } from "../context/AppContext.jsx";
import Footer from "./Footer";
import { FaWhatsapp } from "react-icons/fa";
import { apiClient } from "../utils/api.js";

const Cart = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const { cartItems, setCartItems, removeItemFromCart } = useContext(AppContext);

  const totalPrice = cartItems.reduce((acc, item) => {
    const price = parseFloat(item?.product?.price) || 0;
    return acc + (isNaN(price) ? 0 : price * item.quantity);
  }, 0);

  const handleQuantityChange = async (id, type) => {
    try {
      const res = await apiClient.put(`/update-cart/${id}`, { type });
      const updatedItem = res.data;

      setCartItems((prev) =>
        prev.map((item) =>
          item._id === id ? { ...item, quantity: updatedItem.quantity } : item
        )
      );
    } catch (err) {
      console.error("Quantity update error:", err);
    }
  };

  const handleBuyNow = () => {
    const phoneNumber = "917592084226";
    const orderId = Math.floor(100000 + Math.random() * 900000);
    const userName = localStorage.getItem("username") || "Customer";

    const itemsMessage = cartItems.map((item, index) => {
      const name = item?.product?.name;
      const price = item?.product?.price;
      const quantity = item.quantity;
      const total = (price * quantity).toFixed(2);
      return `🛒 *${index + 1}. ${name}* — ₹${price} × ${quantity} = ₹${total}`;
    }).join("\n");

    const grandTotal = totalPrice.toFixed(2);

    const finalMessage = `🧾 *Order Summary*\n\n👤 Name: ${userName}\n📦 Order ID: #${orderId}\n\n${itemsMessage}\n\n💰 *Total: ₹${grandTotal}*\n\n📲 Please confirm this order.`;

    const encodedMessage = encodeURIComponent(finalMessage);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 bg-gray-100 overflow-y-auto"
          >
            <div className="flex justify-between items-center bg-blue-800 p-4">
              <h2 className="text-lg sm:text-2xl font-semibold text-white">
                SHOPPING CART
                <span className="ml-2 bg-blue-700 text-white px-2 py-1 text-xs sm:text-sm rounded-full">
                  {cartItems.length}
                </span>
              </h2>
              <motion.button
                whileTap={{ scale: 0.8, rotate: 90 }}
                onClick={() => {
                  setIsOpen(false);
                  navigate("/shop");
                }}
              >
                <X className="text-white w-6 h-6 hover:text-red-400 cursor-pointer" />
              </motion.button>
            </div>

            {cartItems.length === 0 ? (
              <div className="flex flex-col justify-center items-center h-[75vh] text-center">
                <p className="text-gray-600 text-base sm:text-lg mb-4">Your cart is empty.</p>
                <button
                  onClick={() => navigate("/shop")}
                  className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-full text-sm sm:text-base"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="max-w-7xl mx-auto px-4 py-6 grid gap-6 lg:grid-cols-[1fr_350px]">
                {/* 🛒 Cart List */}
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item._id}
                      className="bg-white p-4 rounded-lg shadow flex flex-col sm:flex-row gap-4"
                    >
                      <img
                        src={item?.product?.image}
                        alt={item?.product?.name}
                        className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded"
                      />
                      <div className="flex flex-col sm:flex-row justify-between w-full">
                        <div className="flex-1 space-y-1">
                          <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                            {item?.product?.name}
                          </h3>
                          <p className="text-sm text-gray-500">Available</p>
                          <div className="flex gap-4 mt-2">
                            <button className="text-blue-600 text-sm font-medium">
                              Save for later
                            </button>
                            <button
                              onClick={() => removeItemFromCart(item._id)}
                              className="text-blue-700 text-sm font-medium hover:text-red-600"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                        <div className="flex flex-col items-start sm:items-end justify-between gap-2 mt-4 sm:mt-0">
                          <div className="flex items-center bg-blue-600 rounded-full overflow-hidden">
                            <button
                              onClick={() =>
                                item.quantity > 1 &&
                                handleQuantityChange(item._id, "decrement")
                              }
                              className="px-3 text-white font-bold text-xl"
                            >
                              −
                            </button>
                            <span className="px-3 text-white font-semibold">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                handleQuantityChange(item._id, "increment")
                              }
                              className="px-3 text-white font-bold text-xl"
                            >
                              +
                            </button>
                          </div>
                          <p className="text-red-600 font-bold">
                            ₹{(item?.product?.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="text-right pt-4">
                    <button
                      onClick={handleBuyNow}
                      className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2 px-6 py-2 rounded-full font-semibold text-sm sm:text-base"
                    >
                      <FaWhatsapp className="text-xl" />
                      PLACE ORDER
                    </button>
                  </div>
                </div>

                {/* 💸 Price Summary */}
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded shadow">
                    <h3 className="text-lg font-semibold border-b pb-2 mb-2 text-gray-800">
                      PRICE DETAILS
                    </h3>
                    <div className="space-y-2 text-sm sm:text-base">
                      <div className="flex justify-between">
                        <span>Price ({cartItems.length} items)</span>
                        <span>₹{totalPrice.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-green-600">
                        <span>Discount</span>
                        <span>− ₹0</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Delivery Charges</span>
                        <span className="text-green-600">Free</span>
                      </div>
                      <hr />
                      <div className="flex justify-between font-bold text-base">
                        <span>Total Amount</span>
                        <span>₹{totalPrice.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Safe and Secure Payments. 100% Authentic Products.
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && <Footer />}
    </>
  );
};

export default Cart;


















// import React, { useContext } from "react";
// import { AppContext } from "../context/AppContext";
// import { X } from "lucide-react";
// import { useNavigate } from "react-router";
// import Footer from "./Footer";

// const Cart = () => {
//   const { cartItems, removeFromCart, getTotalCartAmount } =
//     useContext(AppContext);
//   const navigate = useNavigate();

//   return (
//     <>
//       <div className="min-h-screen bg-white p-4 sm:p-6">
//         <h2 className="text-lg sm:text-xl md:text-2xl text-gray-800 font-semibold mb-4 sm:mb-6 border-b pb-2">
//           Shopping Cart
//         </h2>

//         {cartItems.length === 0 ? (
//           <div className="text-center text-gray-600 mt-12">
//             Your cart is empty.
//           </div>
//         ) : (
//           <div className="flex flex-col lg:flex-row gap-6">
//             {/* Cart Items */}
//             <div className="flex-1 space-y-4">
//               {cartItems.map((item, index) => (
//                 <div
//                   key={index}
//                   className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between bg-gray-100 p-4 rounded-lg shadow-sm"
//                 >
//                   {/* Product Image */}
//                   <img
//                     src={item?.product?.image}
//                     alt={item?.product?.title}
//                     className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded"
//                   />

//                   {/* Product Details */}
//                   <div className="flex-1 space-y-2 text-sm sm:text-base">
//                     <h3 className="font-semibold text-gray-800">
//                       {item?.product?.title}
//                     </h3>
//                     <p className="text-gray-600">Category: {item?.product?.category}</p>
//                     <p className="text-gray-800 font-medium">
//                       ₹ {item?.product?.price}
//                     </p>
//                   </div>

//                   {/* Delete Button */}
//                   <button
//                     onClick={() => removeFromCart(item.product._id)}
//                     className="text-red-500 hover:text-red-700"
//                   >
//                     <X />
//                   </button>
//                 </div>
//               ))}
//             </div>

//             {/* Price Summary */}
//             <div className="w-full lg:w-[350px] space-y-4 border-t lg:border-t-0 lg:border-l pt-4 lg:pt-0 lg:pl-4 border-gray-200">
//               <h3 className="text-lg font-semibold text-gray-700">
//                 Order Summary
//               </h3>

//               <div className="flex justify-between text-sm text-gray-600">
//                 <span>Subtotal</span>
//                 <span>₹ {getTotalCartAmount()}</span>
//               </div>
//               <div className="flex justify-between text-sm text-gray-600">
//                 <span>Shipping</span>
//                 <span>Free</span>
//               </div>
//               <div className="border-t pt-2 flex justify-between font-semibold text-gray-800">
//                 <span>Total</span>
//                 <span>₹ {getTotalCartAmount()}</span>
//               </div>

//               {/* Checkout Button */}
//               <button
//                 onClick={() => navigate("/checkout")}
//                 className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm sm:text-base py-2 rounded transition"
//               >
//                 Proceed to Checkout
//               </button>

//               {/* Extra Info */}
//               <div className="text-xs sm:text-sm text-gray-500 mt-2 flex flex-col sm:flex-row items-start sm:items-center gap-2">
//                 <p>Safe and Secure Payments.</p>
//                 <p className="hidden sm:inline">100% Authentic products.</p>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Cart;

