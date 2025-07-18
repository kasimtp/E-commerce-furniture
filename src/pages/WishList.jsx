// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router';
// import { Check, Trash2 } from 'lucide-react';
// import Footer from '../components/Footer';
// import { toast } from 'react-toastify';

// const WishList = () => {
//   const navigate = useNavigate();
  
//   const [wishListItems, setWishListItems] = useState([]);
//   const userId = localStorage.getItem('id');

//   // ✅ Fetch wishlist
//   useEffect(() => {
//     if (userId) { 
//       fetch(`http://localhost:5000/api/get-wishlist/${userId}`)
//         .then((res) => res.json())
//         .then((data) => setWishListItems(data))
//         .catch((err) => console.error('Failed to fetch wishlist:', err));
//     }
//   }, [userId]);

//   // ➕ Add to cart handler (you can change endpoint if needed)
//   const handleAddToCart = async (productId) => {
//     try {
//       const response = await fetch('http://localhost:5000/api/post-cart', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ user: userId, product: productId, quantity: 1 }),
//       });

//       if (response.ok) {
//         console.log('Item moved to cart');
//         toast.success("Product added to add cart!"); 
//       } else {
//         console.error('Failed to add to cart');
//       }
//     } catch (error) {
//       console.error('Add to cart failed:', error);
//     }
//   };

//   // ❌ Delete from wishlist
//   const handleDelete = async (id) => {
//     try {
//       const res = await fetch(`http://localhost:5000/api/delete-wishlist/${id}`, {
//         method: 'DELETE',
//       });
//       if (res.ok) {
//         setWishListItems((prev) => prev.filter((item) => item._id !== id));
//          toast.success("Product deleted to wishlist!");
//       }
//     } catch (err) {
//       console.error('Failed to delete item:', err);
     
//     }
//   };

//   return (
//     <>
//       <div className="mt-28 px-4 sm:px-10 lg:px-24 min-h-[600px] bg-white">
//         <h1 className="text-4xl sm:text-5xl font-semibold mb-10">Default Wishlist</h1>

//         <div className="overflow-x-auto border rounded-lg shadow-md">
//           <table className="min-w-full table-auto border-collapse text-left">
//             <thead className="bg-gray-100 text-gray-700">
//               <tr>
//                 <th className="p-4"><input type="checkbox" /></th>
//                 <th className="p-4"></th>
//                 <th className="p-4">Product Name</th>
//                 <th className="p-4">Unit Price</th>
//                 <th className="p-4">Stock Status</th>
//                 <th className="p-4"></th>
//               </tr>
//             </thead>
//             <tbody>
//               {wishListItems?.map((item) => (
//                 <tr key={item._id} className="border-t">
//                   <td className="p-4"><input type="checkbox" /></td>
//                   <td className="p-4">
//                     <button onClick={() => handleDelete(item._id)} className="text-red-500 cursor-pointer hover:text-red-700">
//                       <Trash2 size={16} />
//                     </button>
//                   </td>
//                   <td className="p-4 flex items-center space-x-4">
//                     <img src={item?.product?.image} alt={item?.product?.name} className="w-16 h-16 rounded object-cover" />
//                     <span>{item?.product?.name}</span>
//                   </td>
//                   <td className="p-4">
//                     <span className="text-black font-medium">
//                       ₹{item?.product?.price.toFixed(2)}
//                     </span>
//                   </td>
//                   <td className="p-4 text-green-600 flex items-center cursor-pointer gap-1">
//                     <Check className="w-4 h-4" />
//                     In stock
//                   </td>
//                   <td className="p-4">
//                     <button
//                       onClick={() => handleAddToCart(item.product._id)}
//                       className="bg-blue-700 cursor-pointer hover:bg-blue-800 text-white px-4 py-2 rounded-full text-sm"
//                     >
//                       Add to Cart
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default WishList;




import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Check, Trash2 } from "lucide-react";
import Footer from "../components/Footer";
import { toast } from "react-toastify";
import { apiClient } from "../api";

const WishList = () => {
  const navigate = useNavigate();
  const [wishListItems, setWishListItems] = useState([]);
  const userId = localStorage.getItem("id");

  // ✅ Fetch wishlist items
  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        if (userId) {
          const res = await apiClient.get(`/get-wishlist/${userId}`);
          setWishListItems(res.data);
        }
      } catch (err) {
        console.error("Failed to fetch wishlist:", err);
      }
    };

    fetchWishlist();
  }, [userId]);

  // ➕ Add to cart
  const handleAddToCart = async (productId) => {
    try {
      const res = await apiClient.post("/post-cart", {
        user: userId,
        product: productId,
        quantity: 1,
      });

      if (res.status === 200) {
        toast.success("Product added to cart!");
      } else {
        toast.error("Failed to add to cart");
      }
    } catch (err) {
      console.error("Add to cart failed:", err);
      toast.error("Something went wrong");
    }
  };

  // ❌ Delete from wishlist
  const handleDelete = async (wishlistId) => {
    try {
      const res = await apiClient.delete(`/delete-wishlist/${wishlistId}`);
      if (res.status === 200) {
        setWishListItems((prev) =>
          prev.filter((item) => item._id !== wishlistId)
        );
        toast.success("Removed from wishlist");
      }
    } catch (err) {
      console.error("Failed to delete wishlist item:", err);
      toast.error("Error removing item");
    }
  };

  return (
    <>
      <div className="mt-28 px-4 sm:px-10 lg:px-24 min-h-[600px] bg-white">
        <h1 className="text-4xl sm:text-5xl font-semibold mb-10">Default Wishlist</h1>

        <div className="overflow-x-auto border rounded-lg shadow-md">
          <table className="min-w-full table-auto border-collapse text-left">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-4"><input type="checkbox" /></th>
                <th className="p-4"></th>
                <th className="p-4">Product Name</th>
                <th className="p-4">Unit Price</th>
                <th className="p-4">Stock Status</th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody>
              {wishListItems?.map((item) => (
                <tr key={item._id} className="border-t">
                  <td className="p-4"><input type="checkbox" /></td>
                  <td className="p-4">
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                  <td className="p-4 flex items-center space-x-4">
                    <img
                      src={item?.product?.image}
                      alt={item?.product?.name}
                      className="w-16 h-16 rounded object-cover"
                    />
                    <span>{item?.product?.name}</span>
                  </td>
                  <td className="p-4 font-medium text-black">
                    ₹{item?.product?.price?.toFixed(2)}
                  </td>
                  <td className="p-4 text-green-600 flex items-center gap-1">
                    <Check className="w-4 h-4" />
                    In stock
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => handleAddToCart(item.product._id)}
                      className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-full text-sm"
                    >
                      Add to Cart
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default WishList;


