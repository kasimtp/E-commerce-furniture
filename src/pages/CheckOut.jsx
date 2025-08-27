import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { IoIosAddCircleOutline } from "react-icons/io";

const CheckOut = () => {
  const { state } = useLocation();
  const { product, quantity, total } = state || {};

  const navigate = useNavigate();

  if (!product) {
    return (
      <p className="text-center mt-10 text-gray-700 text-lg font-medium">
        No product found. Please go back.
      </p>
    );
  }

  return (
    <div className="w-full font-Poppins  sm:px-6 md:px-10 py-4">
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

      <div className="flex flex-row gap-6 bg-amber-000 h-16">
        <div className="bg-amber-000 mt-4 shadow-md rounded-lg   px-3 pb-2 flex flex-col  ">
          <p className="text-[10px] text-gray-800">Address:</p>
          <p className="text-[9px] text-gray-600">
            216 St Paul's Rd, London N1 2LL,
            <br /> UK Contact : +44-784232
          </p>
        </div>
        <div onClick={()=> navigate('/shippingaddress')}
        className="bg-amber-000 mt-4 shadow-md rounded-lg cursor-pointer  px-3 pb-2 ">
          <IoIosAddCircleOutline className="w-6 h-6 mt-3 stroke-0  text-gray-600 " />
        </div>
      </div>

      {/* Product Card */}
      <div className="mt-6 bg-white shadow-md rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full max-w-lg mx-auto">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-28 h-28 sm:w-32 sm:h-32 rounded-lg object-cover"
        />

        {/* Product Info */}
        <div className="flex-1">
          <p className="text-base sm:text-lg font-semibold text-gray-900">
            {product.name}
          </p>
          <p className="text-sm sm:text-base text-gray-600 mt-1">
            Quantity: <span className="font-medium">{quantity}</span>
          </p>
          <p className="text-lg sm:text-xl font-bold text-gray-900 mt-2">
            ₹{product.price.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Order Summary */}
      <div className="mt-6 w-full max-w-lg mx-auto bg-gray-50 rounded-xl shadow-sm p-4 flex justify-between text-sm sm:text-base">
        <p className="font-medium text-gray-700">Total Order ({quantity}):</p>
        <p className="font-bold text-gray-900">₹{total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CheckOut;
