import { useLocation, useNavigate } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const CheckOut = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { cartItems, removeItemFromCart, deleteProductById } =
    useContext(AppContext);

  // 🔹 Buy Now item
  const buyNowItems = state?.product
    ? [
        {
          _id: "buy-now",
          product: state.product,
          quantity: state.quantity || 1,
          from: "buyNow",
        },
      ]
    : [];

  // 🔹 Cart items
  const cartItemsadd = state?.cartItems || cartItems || [];
  const cartWithFlag = cartItemsadd.map((item) => ({
    ...item,
    from: "cart",
  }));

  // 🔹 All checkout items
  const checkoutItems = [...buyNowItems, ...cartWithFlag];

  // 🔹 Total price
  const total = checkoutItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  if (!checkoutItems.length) {
    return (
      <p className="text-center mt-10 text-gray-700 text-lg font-medium">
        No product found. Please go back.
      </p>
    );
  }

  return (
    <div className="w-full font-Poppins px-4 sm:px-6 md:px-10 py-6 max-w-screen-lg mx-auto">
      {/* Header */}
      <div className="border-b border-gray-200 pb-3 mb-5">
        <h2 className="capitalize text-xl sm:text-2xl text-center text-gray-900 font-medium">
          Checkout
        </h2>
      </div>

      {/* Delivery Address */}
      <div className="flex items-center gap-2 mb-3">
        <SlLocationPin className="w-4 h-4 text-gray-700" />
        <p className="font-medium text-sm sm:text-base text-gray-800">
          Delivery Address
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="bg-white w-full sm:w-auto shadow-md p-3 rounded-lg">
          <p className="text-sm sm:text-base font-medium text-gray-800">
            Address:
          </p>
          <p className="text-xs sm:text-sm text-gray-600 leading-snug mt-1">
            216 St Paul's Rd, London N1 2LL, <br /> UK <br />
            Contact: +44-784232
          </p>
        </div>
        <button
          onClick={() => navigate("/shippingaddress")}
          className="flex items-center justify-center px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-100 text-blue-500 text-sm font-medium"
        >
          Add New
        </button>
      </div>

      {/* Product List */}
      <div className="space-y-6">
        {checkoutItems.map((item) => (
          <div
            key={item._id}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-b border-gray-200 pb-4"
          >
            {/* Image */}
            <img
              src={item.product.image}
              alt={item.product.name}
              className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-md"
            />

            {/* Info */}
            <div className="flex-1 w-full sm:w-auto">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                {item.product.name}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mt-1">
                Quantity:{" "}
                <span className="font-medium text-gray-800">
                  {item.quantity}
                </span>
              </p>
              <p className="text-lg sm:text-xl font-bold text-gray-800 mt-2">
                ₹{(item.product.price * item.quantity).toFixed(2)}
              </p>
            </div>

            {/* Remove Button */}
            <div>
              <button
                onClick={() => {
                  if (item.from === "cart") {
                    removeItemFromCart(item._id);
                    deleteProductById(item.product._id);
                  } else if (item.from === "buyNow") {
                    navigate(-1); // Go back to previous page
                  }
                }}
                className="text-red-500 text-sm hover:underline mt-2 sm:mt-0"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Total Summary */}
      <div className="mt-10 bg-white shadow-md border border-gray-200 rounded-xl px-5 py-4 flex justify-between text-sm sm:text-base">
        <p className="font-medium text-gray-800">
          Total Order ({checkoutItems.length} item
          {checkoutItems.length > 1 ? "s" : ""}):
        </p>
        <p className="font-bold text-gray-900">₹{total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CheckOut;
