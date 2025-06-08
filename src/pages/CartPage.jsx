import React, { useContext } from "react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router";
import { AppContext } from "../context/AppContext";

const CartPage = () => {
  const navigate = useNavigate();
  const { cartItems, removeItemFromCart } = useContext(AppContext);

  return (
    <>
      <div className="flex flex-col mt-28 pl-24 h-auto bg-white px-4">
        <div className="p-2 mr-10 h-auto">
          <h1 className="text-2xl font-bold border-b-3 mb-4">Cart List</h1>

          {cartItems.length > 0 ? (
            <table className="mt-5 border-2 w-full mx-auto border-collapse text-center">
              <thead>
                <tr className="bg-slate-300">
                  <th className="border-2">Products</th>
                  <th className="border-2">Title</th>
                  <th className="border-2">Quantity</th>
                  <th className="border-2">Price</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item._id} className="border-b">
                    <td className="py-2">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded mx-auto"
                      />
                    </td>
                    <td className="font-semibold">{item.product.name}</td>
                    <td>{item.quantity}</td>
                    <td className="text-red-600 font-bold">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="bg-blue-800 text-white p-6 rounded-md w-full max-w-[1500px] h-20 flex items-center space-x-4 mt-5">
              <div className="w-5 h-5 border-2 border-white rounded-sm flex items-center justify-center">
                <div className="w-2 h-2 bg-white"></div>
              </div>
              <span className="text-lg">Your cart is currently empty.</span>
            </div>
          )}
        </div>

        <div className="mt-10">
          <button
            onClick={() => navigate("/shop")}
            className="bg-blue-800 cursor-pointer text-white px-8 py-4 rounded-full text-lg hover:bg-blue-900 transition"
          >
            Return to shop
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CartPage;
