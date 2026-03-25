import React, { useContext } from "react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router";
import { AppContext } from "../context/AppContext";

const CartPage = () => {
  const navigate = useNavigate();
  const { cartItems, removeItemFromCart } = useContext(AppContext);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="flex-grow pt-8 sm:pt-16 pb-12 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto w-full">
        <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 md:p-8">
          <h1 className="text-2xl sm:text-3xl font-bold border-b pb-4 mb-6 text-gray-800 tracking-tight">Cart List</h1>

          {cartItems.length > 0 ? (
            <div className="overflow-x-auto w-full">
            <table className="w-full border-collapse text-center text-sm sm:text-base">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="p-3 sm:p-4 border-b">Product</th>
                  <th className="p-3 sm:p-4 border-b">Title</th>
                  <th className="p-3 sm:p-4 border-b">Quantity</th>
                  <th className="p-3 sm:p-4 border-b">Price</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item._id} className="border-b hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-2">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg shadow-sm mx-auto"
                      />
                    </td>
                    <td className="py-3 px-2 font-semibold text-gray-800">{item.product.name}</td>
                    <td className="py-3 px-2 text-gray-600 font-medium">{item.quantity}</td>
                    <td className="py-3 px-2 text-[#4CB19A] font-bold">
                      ₹{(item.product.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          ) : (
            <div className="bg-blue-800 text-white p-6 rounded-md w-full max-w-[1500px] h-20 flex items-center space-x-4 mt-5">
              <div className="w-5 h-5 border-2 border-white rounded-sm flex items-center justify-center">
                <div className="w-2 h-2 bg-white"></div>
              </div>
              <span className="text-lg">Your cart is currently empty.</span>
            </div>
          )}
        </div>

        <div className="mt-8 flex justify-center sm:justify-start">
          <button
            onClick={() => navigate("/shop")}
            className="bg-[#4CB19A] cursor-pointer text-white font-semibold px-8 py-3.5 rounded-xl text-lg hover:bg-[#3a8d7c] shadow-md transition-colors"
          >
            Return to shop
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CartPage;
