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
  const { cartItems, setCartItems, removeItemFromCart } =
    useContext(AppContext);

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

    const itemsMessage = cartItems
      .map((item, index) => {
        const name = item?.product?.name;
        const price = item?.product?.price;
        const quantity = item.quantity;
        const total = (price * quantity).toFixed(2);
        return `🛒 *${
          index + 1
        }. ${name}* — ₹${price} × ${quantity} = ₹${total}`;
      })
      .join("\n");

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
            <div className="flex justify-between items-center bg-[#e8ebea] p-4 ">
              <div className="flex row">
                <h2 className="text-lg lg:text-5xl sm:text-2xl lg:pt-22 lg:pb-4 font-Poppins font-semibold text-black">
                  SHOPPING CART
                </h2>
                <span className="ml-2 bg-[#4CB19A] lg:h-12 lg:text-4xl lg:-ml-1 lg:mt-15 text-center m-auto lg:w-14 text-white px-2 py-1 text-xs sm:text-sm rounded-full">
                  {cartItems.length}
                </span>
              </div>
              <motion.button
                whileTap={{ scale: 0.8, rotate: 90 }}
                onClick={() => {
                  setIsOpen(false);
                  navigate("/shop");
                }}
              >
                <X className="text-black w-6 h-6 hover:text-red-400 cursor-pointer" />
              </motion.button>
            </div>

            {cartItems.length === 0 ? (
              <div className="flex flex-col   justify-center items-center h-[75vh] text-center">
                <p className="text-gray-600 text-base sm:text-lg font-Poppins mb-4">
                  Your cart is empty.
                </p>
                <button
                  onClick={() => navigate("/shop")}
                  className="bg-[#4CB19A] font-Poppins hover:bg-blue-800 text-white px-6 py-2 rounded-full text-sm sm:text-base"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="max-w-7xl lg:max-w-full mx-auto  bg-gray-50 px-4 lg:px-22 py-6 grid gap-6 lg:gap-2 lg:grid-cols-[1fr_350px]">
                {/* 🛒 Cart List */}
                <div className="space-y-4  lg:pt-8 w-[80%]">
                  {cartItems.map((item) => (
                    <div
                      key={item._id}
                      className="bg-[#e8ebea] lg:px-12 lg:h-62 p-2 w-90 lg:w-[3500px] rounded-lg shadow flex flex-rol lg:flex-rol sm:flex-row gap-4"
                    >
                      <img
                        src={item?.product?.image}
                        alt={item?.product?.name}
                        className="w-12 md:w-28  h-12 lg:h-48 lg:w-48 lg:py-0 md:h-28  sm:w-32 sm:h-32 object-cover rounded m-auto"
                      />
                      <div className="flex flex-row md:flex-col lg:m-auto   font-Poppins  bg-red-000 sm:flex-row justify-between w-full">
                        <div className="flex-1 lg:flex lg:gap-82  bg-amber-000 space-y-1">
                          <h3 className="text-[14px] lg:m-auto sm:text-lg lg:text-[48px] font-normal  text-gray-800">
                            {item?.product?.name}
                          </h3>

                          {/* <p className="text-sm text-gray-500">Available</p> */}
                          <p className="text-[#4CB19A] text-[12px] m-auto  lg:text-[38px]  font-Poppins font-semibold">
                            ₹{(item?.product?.price * item.quantity).toFixed(2)}
                          </p>
                          <div className="flex bg-gray-400 gap-4 mt-2">
                            {/* <button className="text-blue-600 text-sm font-medium">
                              Save for later
                            </button> */}
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-col lg:flex-row  items-center sm:items-end justify-between gap-2 lg:gap-4 mt-2 sm:mt-0">
                          {/* Quantity Counter */}
                          <div className="flex items-center lg:pb-22 bg-[#4CB19A]  rounded-2xl lg:w-64 lg:h-24  lg:items-center  lg:m-auto   overflow-hidden">
                            <button
                              onClick={() =>
                                item.quantity > 1 &&
                                handleQuantityChange(item._id, "decrement")
                              }
                              className="px-3 text-white font-bold text-lg lg:text-xl"
                            >
                              −
                            </button>
                            <span className="px-3 text-white font-semibold text-sm lg:text-base">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                handleQuantityChange(item._id, "increment")
                              }
                              className="px-3 text-white font-bold text-lg lg:text-xl"
                            >
                              +
                            </button>
                          </div>

                          {/* Remove Button */}
                          <button
                            onClick={() => removeItemFromCart(item._id)}
                            className="text-black hover:text-red-600"
                          >
                            <X />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="text-right pt-4">
                    <button
                      onClick={handleBuyNow}
                      className="bg-[#4CB19A] hover:bg-green-700 text-white flex items-center gap-2 px-6 py-2 rounded-full font-semibold text-sm sm:text-base"
                    >
                      <FaWhatsapp className="text-xl" />
                      PLACE ORDER
                    </button>
                  </div>
                </div>

                {/* 💸 Price Summary */}
                <div className="space-y-4   font-Poppins">
                  <div className="bg-white p-4 rounded shadow">
                    <h3 className="text-lg font-semibold border-b pb-2 mb-2 text-gray-800">
                      PRICE DETAILS
                    </h3>
                    <div className="space-y-2 text-sm sm:text-base">
                      <div className="flex justify-between">
                        <span>Price ({cartItems.length} items)</span>
                        <span>₹{totalPrice.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-[#4CB19A]">
                        <span>Discount</span>
                        <span>− ₹0</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Delivery Charges</span>
                        <span className="text-[#4CB19A]">Free</span>
                      </div>
                      <hr />
                      <div className="flex justify-between font-bold text-base">
                        <span>Total Amount</span>
                        <span>₹{totalPrice.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
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
