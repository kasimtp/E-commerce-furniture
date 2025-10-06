import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Trash2 } from "lucide-react";
import { SlLocationPin } from "react-icons/sl";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/productSlice";
import { apiClient } from "../utils/api";

const CheckOut = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.product.cart_items);
  const dispatch = useDispatch();

  const [savedAddress, setSavedAddress] = useState(null);

  // Fetch address from backend
  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await apiClient.get("/addresses", {
          headers: { Authorization: `Bearer ${token}` },
        });

        let addresses = [];
        if (Array.isArray(res.data)) {
          addresses = res.data;
        } else if (Array.isArray(res.data?.addresses)) {
          addresses = res.data.addresses;
        }

        if (addresses.length > 0) {
          setSavedAddress(addresses.at(-1));
        } else {
          setSavedAddress(null);
        }
      } catch (error) {
        console.error("❌ Error fetching address:", error);
        setSavedAddress(null);
      }
    };

    fetchAddress();
  }, []);

  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="w-full font-Poppins px-4 sm:px-6 md:px-10 py-6 max-w-screen-lg mx-auto">
      {/* Header */}
      <div className="border-b border-gray-200 pb-1 mb-5">
        <p className="capitalize text-[16px] sm:text-2xl text-center text-gray-900 font-semibold">
          Checkout
        </p>
      </div>

      {/* Delivery Address */}
      <div className="flex items-center gap-2 mb-3">
        <SlLocationPin className="w-4 h-4 text-gray-700" />
        <p className="font-medium text-sm sm:text-base text-gray-800">
          Delivery Address
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="bg-white w-full sm:w-auto shadow-md p-4 rounded-lg">
          <p className="text-sm sm:text-base font-medium text-gray-800">
            Deliver to:
          </p>
          {savedAddress ? (
            <p className="text-[10px] sm:text-sm text-gray-600 leading-snug mt-1 font-medium">
              {savedAddress.fullName},<br />
              {savedAddress.address1},<br />
              {savedAddress.district}, {savedAddress.state},{" "}
              {savedAddress.country} - {savedAddress.pinCode} <br />
              Contact: {savedAddress.mobile}
              {savedAddress.landmark && (
                <>
                  <br />
                  Landmark: {savedAddress.landmark}
                </>
              )}
            </p>
          ) : (
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              No address saved
            </p>
          )}
        </div>

        <button
          onClick={() => navigate("/shippingaddress")}
          className="flex items-center justify-center px-4 py-2 rounded-lg bg-[#4CB19A] text-white capitalize hover:bg-[#3a8c7f] text-sm font-medium"
        >
          Add New
        </button>
      </div>

      {/* Product List */}
      <div className="space-y-6 mb-6">
        {cartItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-row items-start sm:items-center gap-4 border-b border-gray-200 pb-4"
          >
            <img
              src={item.product.image}
              alt={item.product.name}
              className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-md"
            />

            <div className="flex-1 w-full sm:w-auto">
              <h3 className="text-xs sm:text-lg font-normal text-gray-600">
                {item.product.name}
              </h3>
              <p className="text-xs font-medium sm:text-base text-gray-600 mt-1">
                Quantity:{" "}
                <span className="font-medium text-gray-800">{item.quantity}</span>
              </p>
              <p className="text-sm sm:text-xl font-bold text-gray-800 mt-1">
                ₹{(item.product.price * item.quantity).toFixed(2)}
              </p>
            </div>

            <button
              onClick={() => dispatch(removeFromCart(index))}
              className="text-red-500 hover:text-red-700 mt-2 sm:mt-0"
            >
              <Trash2 size={20} />
            </button>
          </div>
        ))}
      </div>

      {/* Price Details */}
      <div className="mt-4 bg-white shadow-lg border border-gray-100 rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-3">
          Price Details
        </h2>

        <div className="mt-4 space-y-3 text-sm sm:text-base text-gray-700">
          <div className="flex justify-between">
            <span>
              Total Order ({cartItems.length} item
              {cartItems.length > 1 ? "s" : ""})
            </span>
            <span className="font-medium">₹{total.toFixed(2)}</span>
          </div>

          <div className="flex justify-between">
            <span>Shipping</span>
            <span className="text-green-600 font-medium">Free</span>
          </div>

          <div className="border-t border-gray-200 pt-3 flex justify-between text-base font-semibold text-gray-900">
            <span>Total Amount</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Continue to Payment Button */}
      <div className="mt-6 flex justify-end">
        <button
          onClick={() => navigate("/payment")}
          className="w-full sm:w-auto bg-[#4CB19A] hover:bg-[#3a8c7f] text-white font-semibold py-3 px-6 rounded-lg text-sm sm:text-base transition-colors duration-300"
        >
          Continue to Payment
        </button>
      </div>
    </div>
  );
};

export default CheckOut;
