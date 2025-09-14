




import { createContext, useEffect, useState } from "react";
import { apiClient } from "../utils/api.js";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || false);
  const [cartItems, setCartItems] = useState([]);

  const fetchCart = async () => {
    const userId = localStorage.getItem("id");
    if (!userId) return;

    try {
      const res = await apiClient.get(`/get-cart/${userId}`);
      setCartItems(res.data);
    } catch (err) {
      console.error("Error fetching cart items:", err);
    }
  };

  useEffect(() => {
    if (token) {
      fetchCart();
    }
  }, [token]);

  const removeItemFromCart = async (id) => {
    try {
      await apiClient.delete(`/delete-cart/${id}`);
      setCartItems((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Error deleting item:", err);
    }
  };




  const deleteProductById = async (id) => {
  try {
    const res = await apiClient.delete(`/delete-product/${id}`);
    console.log("Product deleted:", res.data);
    return res.data; // Return the deleted product or message if needed
  } catch (err) {
    console.error("Error deleting product:", err);
    throw err; // Rethrow in case the caller wants to handle the error
  }
};





  const increaseQuantity = async (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );

    try {
      await apiClient.put(`/update-cart/${id}`, { type: "increment" });
    } catch (err) {
      console.error("Error increasing quantity:", err);
    }
  };

  const decreaseQuantity = async (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );

    try {
      await apiClient.put(`/update-cart/${id}`, { type: "decrement" });
    } catch (err) {
      console.error("Error decreasing quantity:", err);
    }
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
    deleteProductById
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
