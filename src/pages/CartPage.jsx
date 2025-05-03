import React from 'react';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router';

const CartPage = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="flex flex-col mt-28 pl-24 h-[600px] bg-white px-4">
        {/* Cart message - aligned left */}
        <div className="bg-blue-800 text-white p-6 rounded-md w-full max-w-[1500px] h-20 flex items-center space-x-4">
          <div className="w-5 h-5 border-2 border-white rounded-sm flex items-center justify-center">
            <div className="w-2 h-2 bg-white"></div>
          </div>
          <span className="text-lg">Your cart is currently empty.</span>
        </div>

        
        <div className="mt-10">
          <button onClick={() => navigate('/shop')} 
          
           className="bg-blue-800 cursor-pointer text-white px-8 py-4 rounded-full text-lg hover:bg-blue-900 transition">
            Return to shop
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CartPage;
