// import { useEffect, useState, useContext } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { SlLocationPin } from "react-icons/sl";
// import { AppContext } from "../context/AppContext";
// import { apiClient } from "../utils/api.js";

// const CheckOut = () => {
//   const { state } = useLocation();
//   const navigate = useNavigate();
//   const { cartItems, removeItemFromCart, deleteProductById } =
//     useContext(AppContext);

//   const [savedAddress, setSavedAddress] = useState(null);

//   // 🔹 Fetch address from backend
//   useEffect(() => {
//     const fetchAddress = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const { data } = await apiClient.get("/addresses", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         console.log("Fetched addresses:", data);

//         if (data.success && data.addresses.length > 0) {
//           setSavedAddress(data.addresses[0]); // Showing the first address
//         } else {
//           setSavedAddress(null);
//         }
//       } catch (error) {
//         console.error("Error fetching address:", error);
//       }
//     };

//     fetchAddress();
//   }, []);

//   // 🔹 Buy Now item
//   const buyNowItems = state?.product
//     ? [
//         {
//           _id: "buy-now",
//           product: state.product,
//           quantity: state.quantity || 1,
//           from: "buyNow",
//         },
//       ]
//     : [];

//   // 🔹 Cart items
//   const cartItemsadd = state?.cartItems || cartItems || [];
//   const cartWithFlag = cartItemsadd.map((item) => ({
//     ...item,
//     from: "cart",
//   }));

//   // 🔹 All checkout items
//   const checkoutItems = [...buyNowItems, ...cartWithFlag];

//   // 🔹 Total price
//   const total = checkoutItems.reduce(
//     (sum, item) => sum + item.product.price * item.quantity,
//     0
//   );

//   if (!checkoutItems.length) {
//     return (
//       <p className="text-center mt-10 text-gray-700 text-lg font-medium">
//         No product found. Please go back.
//       </p>
//     );
//   }

//   return (
//     <div className="w-full font-Poppins px-4 sm:px-6 md:px-10 py-6 max-w-screen-lg mx-auto">
//       {/* Header */}
//       <div className="border-b border-gray-200 pb-3 mb-5">
//         <h2 className="capitalize text-xl sm:text-2xl text-center text-gray-900 font-medium">
//           Checkout
//         </h2>
//       </div>

//       {/* Delivery Address */}
//       <div className="flex items-center gap-2 mb-3">
//         <SlLocationPin className="w-4 h-4 text-gray-700" />
//         <p className="font-medium text-sm sm:text-base text-gray-800">
//           Delivery Address
//         </p>
//       </div>

//       <div className="flex flex-col sm:flex-row gap-4 mb-8">
//         <div className="bg-white w-full sm:w-auto shadow-md p-3 rounded-lg">
//           <p className="text-sm sm:text-base font-medium text-gray-800">
//             Address:
//           </p>
//           {savedAddress ? (
//             <p className="text-xs sm:text-sm text-gray-600 leading-snug mt-1">
//               {savedAddress.fullName},<br />
//               {savedAddress.address1},<br />
//               {savedAddress.district}, {savedAddress.state},{" "}
//               {savedAddress.country} - {savedAddress.pinCode} <br />
//               Contact: {savedAddress.mobile}
//               {savedAddress.landmark && (
//                 <>
//                   <br />
//                   Landmark: {savedAddress.landmark}
//                 </>
//               )}
//             </p>
//           ) : (
//             <p className="text-xs sm:text-sm text-gray-500 mt-1">
//               No address saved
//             </p>
//           )}
//         </div>

//         <button
//           onClick={() => navigate("/shippingaddress", { state })}
//           className="flex items-center justify-center px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-100 text-blue-500 text-sm font-medium"
//         >
//           Add New
//         </button>
//       </div>

//       {/* Product List */}
//       <div className="space-y-6">
//         {checkoutItems.map((item) => (
//           <div
//             key={item._id}
//             className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-b border-gray-200 pb-4"
//           >
//             {/* Image */}
//             <img
//               src={item.product.image}
//               alt={item.product.name}
//               className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-md"
//             />

//             {/* Info */}
//             <div className="flex-1 w-full sm:w-auto">
//               <h3 className="text-base sm:text-lg font-semibold text-gray-800">
//                 {item.product.name}
//               </h3>
//               <p className="text-sm sm:text-base text-gray-600 mt-1">
//                 Quantity:{" "}
//                 <span className="font-medium text-gray-800">
//                   {item.quantity}
//                 </span>
//               </p>
//               <p className="text-lg sm:text-xl font-bold text-gray-800 mt-2">
//                 ₹{(item.product.price * item.quantity).toFixed(2)}
//               </p>
//             </div>

//             {/* Remove Button */}
//             <div>
//               <button
//                 onClick={() => {
//                   if (item.from === "cart") {
//                     removeItemFromCart(item._id);
//                     deleteProductById(item.product._id);
//                   } else if (item.from === "buyNow") {
//                     navigate(-1); // Go back
//                   }
//                 }}
//                 className="text-red-500 text-sm hover:underline mt-2 sm:mt-0"
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Total Summary */}
//       <div className="mt-10 bg-white shadow-md border border-gray-200 rounded-xl px-5 py-4 flex justify-between text-sm sm:text-base">
//         <p className="font-medium text-gray-800">
//           Total Order ({checkoutItems.length} item
//           {checkoutItems.length > 1 ? "s" : ""}):
//         </p>
//         <p className="font-bold text-gray-900">₹{total.toFixed(2)}</p>
//       </div>
//     </div>
//   );
// };

// export default CheckOut;



import { useEffect, useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { AppContext } from "../context/AppContext";
import { apiClient } from "../utils/api.js";

const CheckOut = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { cartItems, removeItemFromCart, deleteProductById } = useContext(AppContext);

  const [savedAddress, setSavedAddress] = useState(null);
  const [addressLoading, setAddressLoading] = useState(true);

  // 🔹 Debug: Console log to check what's happening
  console.log("CheckOut component rendered");
  console.log("Current state:", state);
  console.log("Saved address:", savedAddress);

  // 🔹 Fetch address from backend
  const fetchAddress = async () => {
    try {
      console.log("Fetching address...");
      setAddressLoading(true);
      
      const token = localStorage.getItem("token");
      console.log("Token:", token ? "exists" : "not found");
      
      const { data } = await apiClient.get("/addresses", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("API Response:", data);

      if (data.success && data.addresses && data.addresses.length > 0) {
        console.log("Setting address:", data.addresses[0]);
        setSavedAddress(data.addresses[0]);
      } else {
        console.log("No addresses found or data.success is false");
        setSavedAddress(null);
      }
    } catch (error) {
      console.error("Error fetching address:", error);
      console.error("Error response:", error.response?.data);
      setSavedAddress(null);
    } finally {
      setAddressLoading(false);
    }
  };

  // 🔹 Initial fetch
  useEffect(() => {
    console.log("Initial useEffect running");
    fetchAddress();
  }, []);

  // 🔹 Refetch when coming back from address form
  useEffect(() => {
    console.log("Second useEffect running, state changed:", state);
    if (state?.addressSaved || state?.addressData) {
      console.log("Address was saved, refetching...");
      fetchAddress();
    }
  }, [state?.addressSaved, state?.addressData]);

  // 🔹 Alternative: Listen for window focus (when user comes back to tab)
  useEffect(() => {
    const handleFocus = () => {
      console.log("Window focused, refetching address");
      fetchAddress();
    };

    window.addEventListener('focus', handleFocus);
    
    // Also listen for storage events (if address is saved in another tab)
    const handleStorageChange = () => {
      console.log("Storage changed, refetching address");
      fetchAddress();
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

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
          
          {/* Debug info - Remove this later */}
          <div className="text-xs text-red-500 mb-2">
            Debug: Loading: {addressLoading ? "Yes" : "No"}, 
            Address: {savedAddress ? "Found" : "Not found"}
          </div>
          
          {addressLoading ? (
            <p className="text-xs sm:text-sm text-blue-500 mt-1">Loading address...</p>
          ) : savedAddress ? (
            <div>
              <p className="text-xs sm:text-sm text-gray-600 leading-snug mt-1">
                {savedAddress.fullName},<br />
                {savedAddress.address1},<br />
                {savedAddress.district}, {savedAddress.state}, {savedAddress.country} -{" "}
                {savedAddress.pinCode} <br />
                Contact: {savedAddress.mobile}
                {savedAddress.landmark && (
                  <>
                    <br />
                    Landmark: {savedAddress.landmark}
                  </>
                )}
              </p>
            </div>
          ) : (
            <p className="text-xs sm:text-sm text-gray-500 mt-1">No address saved</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <button
            onClick={() => navigate("/shippingaddress", { 
              state: {
                ...state,
                productData: checkoutItems
              }
            })}
            className="flex items-center justify-center px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-100 text-blue-500 text-sm font-medium"
          >
            Add New
          </button>
          
          {/* Manual refresh button for debugging */}
          <button
            onClick={fetchAddress}
            className="flex items-center justify-center px-4 py-2 rounded-lg bg-green-200 hover:bg-green-100 text-green-700 text-sm font-medium"
          >
            Refresh Address
          </button>
        </div>
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
                    navigate(-1);
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