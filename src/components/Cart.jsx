import React from 'react';
import { X } from 'lucide-react'; // You can replace with your icon library

const Cart = ({ onClose }) => {
  return (
    <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-lg z-50 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg font-semibold">SHOPPING CART <span className="ml-1 px-2 py-1 text-white bg-blue-700 rounded-full text-sm">0</span></h2>
        <button onClick={onClose}>
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Empty Cart Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <div className="mb-4">
          <div className="bg-gray-100 rounded-full p-4">
            <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h13l-1.5-6M7 13l-1-4h12l-1 4M5 21h2a2 2 0 100-4H5a2 2 0 000 4zm12 0h2a2 2 0 100-4h-2a2 2 0 000 4z" />
            </svg>
          </div>
        </div>
        <p className="text-gray-700 mb-4">No products in the cart.</p>
        <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-full transition">
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Cart;
