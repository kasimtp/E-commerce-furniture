import { useLocation, useNavigate } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const CheckOut = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { cartItems, removeItemFromCart } = useContext(AppContext);

  // 🔹 Buy Now items (navigate ചെയ്യുമ്പോൾ state കൊണ്ട് pass ചെയ്‌താൽ മാത്രം ഉണ്ടാകും)
  const buyNowItems = state?.product
    ? [
        {
          _id: "buy-now", // dummy ID
          product: state.product,
          quantity: state.quantity || 1,
          from: "buyNow",
        },
      ]
    : [];

  // 🔹 Cart items (state-ൽ നിന്ന് വന്നാലോ context-ൽ നിന്ന് വന്നാലോ)
  const cartItemsadd = state?.cartItems || cartItems || [];

  // 🔹 cart flag ചേർക്കുന്നു
  const cartWithFlag = cartItemsadd.map((item) => ({ ...item, from: "cart" }));

  // 🔹 Combine BuyNow + Cart
  const checkoutItems = [...buyNowItems, ...cartWithFlag];

  // 🔹 Compute total price
  const total = checkoutItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  // Debugging logs
  console.log("Location state:", state);
  console.log("Buy Now Items:", buyNowItems);
  console.log("Cart Items from Context:", cartItems);
  console.log("Cart Items final:", cartItemsadd);
  console.log("Checkout Items:", checkoutItems);

  if (!checkoutItems.length) {
    return (
      <p className="text-center mt-10 text-gray-700 text-lg font-medium">
        No product found. Please go back.
      </p>
    );
  }

  return (
    <div className="w-full font-Poppins sm:px-6 md:px-10 py-4">
      {/* Header */}
      <div className="border-b border-gray-100  pb-2">
        <p className="capitalize text-[19px] sm:text-2xl text-center text-gray-900 font-semibold">
          Checkout
        </p>
      </div>

      {/* Delivery Address */}
      <div className="flex px-3 items-center mt-4 shadow-xs rounded-xl pb-2 space-x-1">
        <SlLocationPin className="w-4 h-4 text-gray-800" />
        <p className="font-medium text-[13px] sm:text-base text-gray-800">
          Delivery Address
        </p>
      </div>

    <div className="flex flex-col sm:flex-row gap-4 bg-amber-000 sm:h-20">
  <div className="mt-4 shadow-md w-full sm:w-60 rounded-lg px-3 pb-2 flex flex-col">
    <p className="text-[13px] sm:text-[15px] text-gray-800 font-medium">
      Address:
    </p>
    <p className="text-[11px] sm:text-[13px] text-gray-600 leading-snug">
      216 St Paul's Rd, London N1 2LL,
      <br /> UK Contact : +44-784232
    </p>
  </div>
  <div
    onClick={() => navigate("/shippingaddress")}
    className="mt-2 sm:mt-5 w-12 sm:w-14 h-12 sm:h-auto shadow-md rounded-lg cursor-pointer px-3 pb-2 flex items-center justify-center hover:bg-gray-50"
  >
    <IoIosAddCircleOutline className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600" />
  </div>
</div>


      {/* Product List */}
      {checkoutItems.map((item) => (
        <div
          key={item._id}
          className="mt-6 bg-white border-b border-gray-200 p-4 flex gap-6 w-full max-w-lg mx-auto rounded-lg"
        >
          {/* Product Image */}
          <img
            src={item.product.image}
            alt={item.product.name}
            className="w-20 h-20 sm:w-32 sm:h-32 rounded-lg object-cover"
          />

          {/* Product Info */}
          <div className="flex-1">
            <p className="text-base sm:text-lg font-medium text-gray-700">
              {item.product.name}
            </p>
            <p className="text-sm sm:text-base text-gray-600">
              Quantity: <span className="font-medium">{item.quantity}</span>
            </p>
            <div className="mt-2 rounded-lg bg-gray-50 border border-gray-300 w-fit px-2 py-1">
              <p className="text-lg sm:text-xl font-bold text-gray-700">
                ₹{(item.product.price * item.quantity).toFixed(2)}
              </p>
            </div>
          </div>

          {/* Remove button (only for cart items) */}
        
            <button
              onClick={() => removeItemFromCart(item._id)}
              className="text-red-500 text-sm hover:underline"
            >
              Remove
            </button>
         
        </div>
      ))}

      {/* Order Summary */}
      <div className="mt-6 w-full max-w-lg mx-auto shadow-md rounded-xl p-4 flex justify-between text-sm sm:text-base">
        <p className="font-medium text-gray-700">
          Total Order ({checkoutItems.length} items):
        </p>
        <p className="font-bold text-gray-900">₹{total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CheckOut;
