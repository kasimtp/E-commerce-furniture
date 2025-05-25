import React, { useState } from 'react';
import { X, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';

import { useEffect } from 'react';



const Cart = () => {
  const [isOpen, setIsOpen] = useState(true);
  
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

   useEffect(() => {
    const userId = localStorage.getItem("id");
    console.log(userId);

    if (userId) {
      fetch(`http://localhost:3000/api/get-cart/${userId}`)
        .then(response => response.json())
        .then(data => { 
          console.log("Fetched Data:", data);
          // setCartItems(Array.isArray(data.cartItems) ? data.cartItems : []);
          setCartItems(data)
        })
        .catch(error => console.error("Error fetching cart items:", error));
    }
  }, []);

    const totalPrice = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.product.price) || 0;
    return acc + price;
  }, 0);

    const handleRemove = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart); // assuming you're managing cartItems via state
  };


  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-lg z-50 flex flex-col"
        >
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">
              SHOPPING CART{' '}
              <span className="ml-1 px-2 py-1 text-white bg-blue-700 rounded-full text-sm">
                {cartItems.length}
              </span>
            </h2>
            <motion.button
              whileTap={{ scale: 0.8, rotate: 90 }}
              onClick={() => setIsOpen(false)}
            >
              <X className="hover:text-red-600 cursor-pointer w-6 h-6" />
            </motion.button>
          </div>

          {cartItems.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
              <div className="mb-4">
                <div className="bg-gray-100 rounded-full p-4">
                  <svg
                    className="w-8 h-8 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h13l-1.5-6M7 13l-1-4h12l-1 4M5 21h2a2 2 0 100-4H5a2 2 0 000 4zm12 0h2a2 2 0 100-4h-2a2 2 0 000 4z"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-gray-700 mb-4">No products in the cart.</p>
              <button
                onClick={() => navigate('/shop')}
                className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-full transition"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center justify-between p-4 border-b">
                  <div className="flex items-center space-x-4">
                    <img src={item.product.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                    <div>
                      <h3 className="text-md font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-500">Qty: {item.product.quantity}</p>
                      <p className="text-sm font-bold text-red-600">${(item.product.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                  <button onClick={() => handleRemove(item.id)}>
                    <Trash2 className="text-gray-500 hover:text-red-600" />
                  </button>
                </div>
              ))}

              <div className="p-4 flex justify-between items-center font-bold text-lg border-t">
                <span>Total</span>
                <span>${totalPrice}</span>
              </div>

              <div className="p-4">
                <button
                  onClick={() => alert("Proceeding to checkout...")}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-full transition"
                >
                  Checkout
                </button>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Cart;
