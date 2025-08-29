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
            {/* HEADER */}
            <div className="flex justify-between items-center bg-[#e8ebea] p-4">
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-Poppins font-semibold text-black">
                  SHOPPING CART
                </h2>
                <span className="bg-[#4CB19A] h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 flex items-center justify-center text-white text-xs sm:text-sm md:text-base rounded-full">
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
                <X className="text-black w-6 h-6 sm:w-8 sm:h-8 hover:text-red-400 cursor-pointer" />
              </motion.button>
            </div>

            {/* EMPTY CART */}
            {cartItems.length === 0 ? (
              <div className="flex flex-col justify-center items-center h-[75vh] text-center px-4">
                <p className="text-gray-600 text-base sm:text-lg font-Poppins mb-4">
                  Your cart is empty.
                </p>
                <button
                  onClick={() => navigate("/shop")}
                  className="bg-[#4CB19A] hover:bg-blue-800 text-white px-6 py-2 rounded-full text-sm sm:text-base"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-6 grid gap-6 lg:grid-cols-[2fr_1fr]">
                {/* CART LIST */}
                <div className="space-y-4 ">
                  {cartItems.map((item) => (
                    <div
                      key={item._id}
                      className="bg-[#e8ebea] p-4 rounded-lg shadow flex flex-col sm:flex-row gap-4"
                    >
                      <img
                        src={item?.product?.image}
                        alt={item?.product?.name}
                        className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 object-cover rounded"
                      />
                      <div className="flex flex-col sm:flex-row sm:justify-between flex-1 gap-4">
                        <div className="flex flex-col justify-between">
                          <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-Poppins font-semibold text-[#4CB19A]">
                            {item?.product?.name}
                          </h3>
                          <p className="text-[#4CB19A] text-sm sm:text-lg md:text-xl font-semibold">
                            ₹{(item?.product?.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                        <div className="flex items-center justify-between sm:flex-col gap-2">
                          {/* Quantity */}
                          <div className="flex items-center bg-[#4CB19A] rounded-full overflow-hidden">
                            <button
                              onClick={() =>
                                item.quantity > 1 &&
                                handleQuantityChange(item._id, "decrement")
                              }
                              className="px-3 text-white font-bold text-lg"
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
                              className="px-3 text-white font-bold text-lg"
                            >
                              +
                            </button>
                          </div>
                          {/* Remove */}
                          <button
                            onClick={() => removeItemFromCart(item._id)}
                            className="text-black hover:text-[#4CB19A]"
                          >
                            <X className="size-6" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Place Order WhatsApp */}
                  <div className="text-center">
                    <button
                      onClick={handleBuyNow}
                      className="bg-[#4CB19A] hover:bg-gray-600 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 w-full sm:w-auto"
                    >
                      <FaWhatsapp className="size-6 sm:size-7" />
                      <span className="text-sm sm:text-lg md:text-xl">
                        PLACE ORDER
                      </span>
                    </button>
                  </div>
                </div>

                {/* PRICE DETAILS */}
                <div className="space-y-4">
                  <div className="border border-gray-300 p-4 rounded shadow">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold border-b pb-2 mb-2 text-gray-800">
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
                      <div className="flex justify-between font-bold">
                        <span>Total Amount</span>
                        <span>₹{totalPrice.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 flex items-center gap-2">
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

                {/* Checkout Button */}
                <div className="text-center col-span-full">
                  <button
                    onClick={() =>
                      navigate("/checkout", {
                        state: { cartItems, total: totalPrice },
                      })
                    }
                    className="bg-[#4CB19A] hover:bg-gray-600 text-white px-6 py-3 rounded-md font-semibold w-full sm:w-auto"
                  >
                    Proceed to Checkout
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
