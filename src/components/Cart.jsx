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
    console.log(cartItems);
    

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
                <span className="ml-2 bg-[#4CB19A] lg:h-12 lg:text-[28px] lg:-ml-1 lg:p-0 lg:mt-15 text-center m-auto lg:w-14 text-white px-2 py-1 text-xs sm:text-sm rounded-full">
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
              <div className="max-w-7xl lg:max-w-full  mx-auto   bg-gray-000  px-4 lg:px-12  py-6 grid gap-6 lg:gap-12 lg:grid-cols-[1fr_1000px]">
                {/* 🛒 Cart List */}
                <div className="space-y-4  lg:pt-8  w-[80%]">
                  {cartItems.map((item) => (
                    <div
                      key={item._id}
                      className="bg-[#e8ebea]   lg:bg-amber-000 lg:px-20 lg:h-62 p-2 w-98 lg:w-[3100px] rounded-lg shadow flex flex-rol lg:flex-rol sm:flex-row gap-4"
                    >
                      <img
                        src={item?.product?.image}
                        alt={item?.product?.name}
                        className="w-12 md:w-28  h-12 lg:h-48 lg:w-48 lg:py-0 md:h-28 bg- sm:w-32 sm:h-32 object-cover rounded m-auto"
                      />
                      <div className="flex flex-row md:flex-col lg:m-auto bg-amber-000  font-Poppins  bg-red-000 sm:flex-row justify-between w-full">
                        <div className="flex-1 lg:flex lg:gap-82  bg-amber-000 space-y-1">
                          <h3 className="text-[14px] lg:m-auto sm:text-lg lg:text-[48px] font-Poppins font-semibold  text-[#4CB19A]">
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
                      </div>
                      <div className="flex flex-rol sm:flex-col lg:flex-row bg-amber-000 bg-amber-000 items-center sm:items-end justify-between gap-2 lg:gap-44 lg:m-auto mt-2 sm:mt-0">
                        {/* Quantity Counter */}
                        <div className="flex items-center  hover:bg-gray-600  bg-[#4CB19A]      lg:place-content-center rounded-full lg:w-64 lg:h-20 lg:pb-2  lg:items-center     overflow-hidden">
                          <button
                            onClick={() =>
                              item.quantity > 1 &&
                              handleQuantityChange(item._id, "decrement")
                            }
                            className="px-3  text-white cursor-pointer font-bold text-lg lg:text-[55px] "
                          >
                            −
                          </button>
                          <span className="px-3 text-white font-semibold text-sm lg:text-[35px] lg:text-base">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              handleQuantityChange(item._id, "increment")
                            }
                            className="px-3 text-white  font-semibold cursor-pointer text-lg  lg:text-xl lg:text-[55px]"
                          >
                            +
                          </button>
                        </div>

                        {/* Remove Button */}
                        <div className="lg:place-content-center  bg-amber-000   ">
                          <button
                            onClick={() => removeItemFromCart(item._id)}
                            className="text-black hover:text-[#4CB19A] "
                          >
                            <X className=" size-6 lg:size-14 " />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="text-right lg:pt-12 lg:text-center  flex   ">
                    <button
                      onClick={handleBuyNow}
                      className="bg-[#4CB19A]  hover:bg-gray-600 lg:h-26   lg:text-center  lg:w-92 text-white flex items-center  gap-2 lg:px-0 lg:py-0 px-6 py-2 rounded-full lg:place-content-center lg:gap-2 font-semibold text-sm sm:text-base"
                    >
                      <FaWhatsapp className="lg:size-12 size-6    " />
                      <p className="lg:text-[33px] font-Poppins cursor-pointer   ">
                        {" "}
                        PLACE ORDER
                      </p>
                    </button>
                  </div>
                </div>

                {/* 💸 Price Summary */}
                <div className="space-y-4 lg:pt-8   font-Poppins">
                  <div className="bg-amber-000  lg:w-[1000px] border border-gray-300 p-4 rounded shadow">
                    <h3 className="text-lg lg:text-[43px]  font-semibold border-b pb-2 mb-2 text-gray-800">
                      PRICE DETAILS
                    </h3>
                    <div className="space-y-2  lg:space-y-6 text-sm sm:text-base">
                      <div className="flex lg:text-[23px] font-semibold justify-between">
                        <span className="lg:text-[32px] font-semibold">
                          Price ({cartItems.length} items)
                        </span>
                        <span className="lg:text-[32px] font-semibold">
                          ₹{totalPrice.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between text-[#4CB19A]">
                        <span className="lg:text-[32px] font-semibold">
                          Discount
                        </span>
                        <span className="lg:text-[32px] font-semibold">
                          − ₹0
                        </span>
                      </div>
                      <div className="flex justify-between lg:text-[32px] font-semibold">
                        <span>Delivery Charges</span>
                        <span className="text-[#4CB19A]">Free</span>
                      </div>
                      <hr />
                      <div className="flex justify-between font-bold text-base">
                        <span className="lg:text-[33px] font-semibold">
                          Total Amount
                        </span>
                        <span className="lg:text-[33px] cursor-pointer">
                          ₹{totalPrice.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs lg:text-[28px]  text-gray-500 flex items-center gap-2">
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
                <div className=" place-content-center  text-center m-auto pb-12 lg:pt-12 lg:text-center  flex   ">
                  <button
                    // Cart.jsx navigate button
                    onClick={() =>
                      navigate("/checkout", {
                        state: { cartItems, total: totalPrice  },
                      })
                    }
                    className="bg-[#4CB19A]   hover:bg-gray-600 lg:h-26 h-14  lg:text-center  lg:w-92 text-white flex items-center  gap-2 lg:px-0 lg:py-0 px-6 py-2 rounded-md lg:place-content-center lg:gap-2 font-semibold text-sm sm:text-base"
                  >
                    <p className="lg:text-[33px] text-[18px]  font-Poppins cursor-pointer  capitalize ">
                      {" "}
                      proceed to checout
                    </p>
                  </button>
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











// import { useState, useContext } from "react";
// import { X } from "lucide-react";
// import { useNavigate } from "react-router";
// import { motion, AnimatePresence } from "framer-motion";
// import { AppContext } from "../context/AppContext.jsx";
// import Footer from "./Footer";
// import { FaWhatsapp } from "react-icons/fa";
// import { apiClient } from "../utils/api.js";

// const Cart = () => {
//   const [isOpen, setIsOpen] = useState(true);
//   const navigate = useNavigate();
//   const { cartItems, setCartItems, removeItemFromCart } =
//     useContext(AppContext);

//   const totalPrice = cartItems.reduce((acc, item) => {
//     const price = parseFloat(item?.product?.price) || 0;
//     return acc + (isNaN(price) ? 0 : price * item.quantity);
//   }, 0);

//   const handleQuantityChange = async (id, type) => {
//     try {
//       const res = await apiClient.put(`/update-cart/${id}`, { type });
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

//     const itemsMessage = cartItems
//       .map((item, index) => {
//         const name = item?.product?.name;
//         const price = item?.product?.price;
//         const quantity = item.quantity;
//         const total = (price * quantity).toFixed(2);
//         return `🛒 *${
//           index + 1
//         }. ${name}* — ₹${price} × ${quantity} = ₹${total}`;
//       })
//       .join("\n");

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
//             className="fixed inset-0 z-50 bg-gray-100 overflow-y-auto"
//           >
//             {/* 🏷 Header */}
//             <div className="flex justify-between items-center bg-[#e8ebea] p-4">
//               <div className="flex items-center gap-2">
//                 <h2 className="text-lg sm:text-2xl lg:text-4xl font-Poppins font-semibold text-black">
//                   SHOPPING CART
//                 </h2>
//                 <span className="ml-2 bg-[#4CB19A] text-white text-xs sm:text-sm lg:text-lg px-2 py-1 rounded-full">
//                   {cartItems.length}
//                 </span>
//               </div>
//               <motion.button
//                 whileTap={{ scale: 0.8, rotate: 90 }}
//                 onClick={() => {
//                   setIsOpen(false);
//                   navigate("/shop");
//                 }}
//               >
//                 <X className="text-black w-6 h-6 hover:text-red-400 cursor-pointer" />
//               </motion.button>
//             </div>

//             {/* 🛒 Empty Cart */}
//             {cartItems.length === 0 ? (
//               <div className="flex flex-col justify-center items-center h-[75vh] text-center">
//                 <p className="text-gray-600 text-base sm:text-lg font-Poppins mb-4">
//                   Your cart is empty.
//                 </p>
//                 <button
//                   onClick={() => navigate("/shop")}
//                   className="bg-[#4CB19A] font-Poppins hover:bg-blue-800 text-white px-6 py-2 rounded-full text-sm sm:text-base"
//                 >
//                   Continue Shopping
//                 </button>
//               </div>
//             ) : (
//               <div className="max-w-7xl mx-auto px-4 lg:px-12 py-6 grid gap-6 lg:grid-cols-[2fr_1fr]">
//                 {/* 🛒 Cart List */}
//                 <div className="space-y-4">
//                   {cartItems.map((item) => (
//                     <div
//                       key={item._id}
//                       className="bg-[#e8ebea] p-3 rounded-lg shadow flex flex-col sm:flex-row gap-4"
//                     >
//                       {/* Image */}
//                       <img
//                         src={item?.product?.image}
//                         alt={item?.product?.name}
//                         className="w-20 h-20 sm:w-28 sm:h-28 lg:w-40 lg:h-40 object-cover rounded m-auto sm:m-0"
//                       />

//                       {/* Details */}
//                       <div className="flex flex-col flex-1 justify-between">
//                         <h3 className="text-sm sm:text-lg lg:text-2xl font-Poppins font-semibold text-[#4CB19A]">
//                           {item?.product?.name}
//                         </h3>
//                         <p className="text-[#4CB19A] text-sm sm:text-base lg:text-xl font-Poppins font-semibold">
//                           ₹{(item?.product?.price * item.quantity).toFixed(2)}
//                         </p>
//                       </div>

//                       {/* Quantity + Remove */}
//                       <div className="flex sm:flex-col items-center justify-between gap-3">
//                         {/* Quantity Counter */}
//                         <div className="flex items-center bg-[#4CB19A] rounded-full">
//                           <button
//                             onClick={() =>
//                               item.quantity > 1 &&
//                               handleQuantityChange(item._id, "decrement")
//                             }
//                             className="px-3 text-white font-bold text-lg"
//                           >
//                             −
//                           </button>
//                           <span className="px-3 text-white font-semibold text-sm sm:text-base">
//                             {item.quantity}
//                           </span>
//                           <button
//                             onClick={() =>
//                               handleQuantityChange(item._id, "increment")
//                             }
//                             className="px-3 text-white font-bold text-lg"
//                           >
//                             +
//                           </button>
//                         </div>

//                         {/* Remove Button */}
//                         <button
//                           onClick={() => removeItemFromCart(item._id)}
//                           className="text-black hover:text-[#4CB19A]"
//                         >
//                           <X className="w-6 h-6 sm:w-8 sm:h-8" />
//                         </button>
//                       </div>
//                     </div>
//                   ))}

//                   {/* WhatsApp Order Button */}
//                   <div className="flex justify-center sm:justify-end">
//                     <button
//                       onClick={handleBuyNow}
//                       className="bg-[#4CB19A] hover:bg-gray-600 text-white flex items-center gap-2 px-6 py-2 rounded-full font-semibold text-sm sm:text-base"
//                     >
//                       <FaWhatsapp className="w-6 h-6 sm:w-8 sm:h-8" />
//                       <span className="text-sm sm:text-lg font-Poppins">
//                         PLACE ORDER
//                       </span>
//                     </button>
//                   </div>
//                 </div>

//                 {/* 💸 Price Summary */}
//                 <div className="space-y-4 font-Poppins">
//                   <div className="border border-gray-300 p-4 rounded shadow">
//                     <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold border-b pb-2 mb-2 text-gray-800">
//                       PRICE DETAILS
//                     </h3>
//                     <div className="space-y-2 text-sm sm:text-base">
//                       <div className="flex justify-between font-semibold">
//                         <span>Price ({cartItems.length} items)</span>
//                         <span>₹{totalPrice.toFixed(2)}</span>
//                       </div>
//                       <div className="flex justify-between text-[#4CB19A] font-semibold">
//                         <span>Discount</span>
//                         <span>− ₹0</span>
//                       </div>
//                       <div className="flex justify-between font-semibold">
//                         <span>Delivery Charges</span>
//                         <span className="text-[#4CB19A]">Free</span>
//                       </div>
//                       <hr />
//                       <div className="flex justify-between font-bold">
//                         <span>Total Amount</span>
//                         <span>₹{totalPrice.toFixed(2)}</span>
//                       </div>
//                     </div>
//                   </div>

//                   <p className="text-xs sm:text-sm text-gray-500 flex items-center gap-2">
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
//                   </p>
//                 </div>

//                 {/* Checkout Button */}
//                 <div className="flex justify-center sm:justify-end pb-8">
//                   <button
//                     onClick={() =>
//                       navigate("/checkout", {
//                         state: { cartItems, total: totalPrice },
//                       })
//                     }
//                     className="bg-[#4CB19A] hover:bg-gray-600 h-12 text-white flex items-center gap-2 px-6 py-2 rounded-md font-semibold text-sm sm:text-base"
//                   >
//                     <span className="text-sm sm:text-lg font-Poppins">
//                       Proceed to Checkout
//                     </span>
//                   </button>
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

