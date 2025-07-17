// import { createContext, useEffect, useState } from "react";

// export const AppContext = createContext();

// const AppContextProvider = ({ children }) => {
//   const [token, setToken] = useState(localStorage.getItem("token") || false);
//   const [cartItems, setCartItems] = useState([]);

//   // ✅ Function to fetch cart data
//   const fetchCart = () => {
//     const userId = localStorage.getItem("id");
//     if (userId) {
//       fetch(`http://localhost:5000/api/get-cart/${userId}`)
//         .then((res) => {
//           if (!res.ok) throw new Error("Cart not found");
//           return res.json();
//         })
//         .then((data) => setCartItems(data))
//         .catch((err) => console.error("Error fetching cart items:", err));
//     }
//   };

//   // ✅ Fetch cart on token change (e.g., page refresh)
//   useEffect(() => {
//     if (token) {
//       fetchCart();
//     }
//   }, [token]);

//   // ✅ Cart item manipulation functions
//   const removeItemFromCart = (id) => {
//     fetch(`http://localhost:5000/api/delete-cart/${id}`, {
//       method: "DELETE",
//     })
//       .then((res) => {
//         if (!res.ok) throw new Error("Failed to delete item");
//         setCartItems((prev) => prev.filter((item) => item._id !== id));
//       })
//       .catch((err) => console.error("Error deleting item:", err));
//   };

//   const increaseQuantity = (id) => {
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item._id === id ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );

//     fetch(`http://localhost:5000/api/update-cart/${id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ type: "increment" }),
//     }).catch((err) => console.error("Error increasing quantity:", err));
//   };

//   const decreaseQuantity = (id) => {
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item._id === id && item.quantity > 1
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       )
//     );

//     fetch(`http://localhost:5000/api/update-cart/${id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ type: "decrement" }),
//     }).catch((err) => console.error("Error decreasing quantity:", err));
//   };

//   // ✅ Logout function (optional but clean)
//   const logout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("id");
//     setToken(null);
//     setCartItems([]);
//   };

//   // ✅ Context value
//   const value = {
//     token,
//     setToken,
//     cartItems,
//     setCartItems,
//     removeItemFromCart,
//     increaseQuantity,
//     decreaseQuantity,
//     fetchCart, // 👈 expose fetchCart for login
//     logout,
//   };

//   return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
// };

// export default AppContextProvider;














import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

// ✅ Backend API base URL from .env (Vite)
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const AppContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || false);
  const [cartItems, setCartItems] = useState([]);

  const fetchCart = () => {
    const userId = localStorage.getItem("id");
    if (userId) {
      fetch(`${BASE_URL}/get-cart/${userId}`)
        .then((res) => {
          if (!res.ok) throw new Error("Cart not found");
          return res.json();
        })
        .then((data) => setCartItems(data))
        .catch((err) => console.error("Error fetching cart items:", err));
    }
  };

  useEffect(() => {
    if (token) {
      fetchCart();
    }
  }, [token]);

  const removeItemFromCart = (id) => {
    fetch(`${BASE_URL}/delete-cart/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to delete item");
        setCartItems((prev) => prev.filter((item) => item._id !== id));
      })
      .catch((err) => console.error("Error deleting item:", err));
  };

  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );

    fetch(`${BASE_URL}/update-cart/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ type: "increment" }),
    }).catch((err) => console.error("Error increasing quantity:", err));
  };

  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );

    fetch(`${BASE_URL}/update-cart/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ type: "decrement" }),
    }).catch((err) => console.error("Error decreasing quantity:", err));
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    setToken(null);
    setCartItems([]);
  };

  const value = {
    token,
    setToken,
    cartItems,
    setCartItems,
    removeItemFromCart,
    increaseQuantity,
    decreaseQuantity,
    fetchCart,
    logout,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
