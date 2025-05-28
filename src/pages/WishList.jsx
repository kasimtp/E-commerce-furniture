import React from 'react';
import { useNavigate } from 'react-router';
import { Check, Trash2 } from 'lucide-react';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import { useState } from 'react';

const WishList = () => {
  const navigate = useNavigate();


  const handleAddToCart = async (productId, userId) => {
  const currentDate = new Date().toISOString(); // Get ISO format date

  try {
    const response = await fetch('http://localhost:5000/api/wish-list', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: userId,
        product: productId,
        dateAdded: currentDate, // Pass date
      }),
    });

    const result = await response.json();
    console.log('Added to cart:', result);
  } catch (error) {
    console.error('Add to cart failed:', error);
  }
};

   
  return (
    <>
      <div className="mt-28 px-4 sm:px-10 lg:px-24 min-h-[600px] bg-white">
        <h1 className="text-4xl sm:text-5xl font-semibold mb-10">Default wishlist</h1>

        <div className="overflow-x-auto border rounded-lg shadow-md">
          <table className="min-w-full table-auto border-collapse text-left">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-4"><input type="checkbox" /></th>
                <th className="p-4"></th>
                <th className="p-4">Product Name</th>
                <th className="p-4">Unit Price</th>
                <th className="p-4">Date Added</th>
                <th className="p-4">Stock Status</th>
                <th className="p-4"></th>
              </tr>
              
              
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="p-4"><input type="checkbox" /></td>
                  <td className="p-4">
                    <button className="text-red-500 hover:text-red-700">
                      <Trash2 size={16} />
                    </button>
                  </td>
                  <td className="p-4 flex items-center space-x-4">
                    <img src={item.product.image} alt={item.name} className="w-16 h-16 rounded object-cover" />
                    <span>{item.name}</span>
                  </td>
                  <td className="p-4">
                    {/* <span className="line-through text-gray-400 mr-2">${item.price.toFixed(2)}</span> */}
                    <span className="text-black font-medium">${item.product.price.toFixed(2)}</span>
                  </td>
                  {/* <td className="p-4">{item.product.dateAdded}</td> */}
                  <td className="p-4 text-green-600 flex items-center gap-1">
                    <Check className="w-4 h-4" />
                    In stock
                  </td>
                  <td className="p-4">
                    <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-full text-sm">
                      Add to Cart
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t bg-gray-50">
                <td colSpan="3" className="p-4">
                  <select className="border rounded-md px-4 py-2">
                    <option>Actions</option>
                    <option>Remove</option>
                    <option>Move to Cart</option>
                  </select>
                  <button className="ml-2 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-full">
                    Apply Action
                  </button>
                </td>
                <td colSpan="4" className="p-4 text-right space-x-4">
                  <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-full">
                    Add Selected to Cart
                  </button>
                  <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-full">
                    Add All to Cart
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Social Share Icons */}
        {/* <div className="mt-8 flex items-center gap-4 text-gray-600">
          <span>Share on</span>
          <div className="flex gap-4 text-xl">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-pinterest"></i>
            <i className="fab fa-whatsapp"></i>
            <i className="far fa-copy"></i>
            <i className="far fa-envelope"></i>
          </div>
        </div> */}
      </div>

      <Footer />
    </>
  );
};

export default WishList;
