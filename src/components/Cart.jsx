import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';

const Cart = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

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
              <span className="ml-1 px-2 py-1 text-white bg-blue-700 rounded-full text-sm">0</span>
            </h2>
            <motion.button
              whileTap={{ scale: 0.8, rotate: 90 }}
              transition={{ type: 'spring', stiffness: 300 }}
              onClick={() => setIsOpen(false)}
            >
              <X className="hover:text-red-600 cursor-pointer w-6 h-6" />
            </motion.button>
          </div>

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
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Cart;
