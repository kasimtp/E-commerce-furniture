import { useLocation, useNavigate } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const CheckOut = () => {
  const { state } = useLocation();
  const { cartItems = [], total = 0 } = state || {};
  const { removeItemFromCart } = useContext(AppContext);

  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <p className="text-center mt-10 text-gray-700 text-lg font-medium">
        No product found. Please go back.
      </p>
    );
  }

  return (
    <div className="w-full font-Poppins sm:px-6 md:px-10 py-4">
      {/* Header */}
      <div className="border-b border-gray-100 pb-2">
        <p className="capitalize text-[16px] sm:text-2xl text-center text-gray-900 font-semibold">
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

      <div className="flex flex-row gap-4 h-20">
        <div className="mt-4 shadow-md w-60 rounded-lg px-3 pb-2 flex flex-col">
          <p className="text-[15px] text-gray-800">Address:</p>
          <p className="text-[11px] text-gray-600">
            216 St Paul's Rd, London N1 2LL,
            <br /> UK Contact : +44-784232
          </p>
        </div>
        <div
          onClick={() => navigate("/shippingaddress")}
          className="mt-5 w-14 shadow-md rounded-lg cursor-pointer px-3 pb-2"
        >
          <IoIosAddCircleOutline className="w-8 h-8 mt-4 text-gray-600" />
        </div>
      </div>

      {/* Product List */}
      {cartItems.map((item) => (
        <div
          key={item._id}
          className="mt-6 bg-white border-b border-gray-200 p-4 flex gap-6 w-full max-w-lg mx-auto"
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
            <p className="text-sm sm:text-base text-gray-600 mt-0">
              Quantity: <span className="font-medium">{item.quantity}</span>
            </p>
            <div className="rounded-lg bg-gray-50 border border-gray-300 w-22 h-8">
              <p className="text-lg sm:text-xl font-bold pl-2 text-gray-700">
                ₹{(item.product.price * item.quantity).toFixed(2)}
              </p>
            </div>
          </div>

          

          {/* Remove Button */}
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
          Total Order ({cartItems.length} items):
        </p>
        <p className="font-bold text-gray-900">₹{total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CheckOut;
