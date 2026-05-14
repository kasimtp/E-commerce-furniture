// AppContext - Global state shared across the whole app using React Context.
// This handles: user login token, cart items, and cart actions.

import { createContext, useEffect, useState } from "react";
import { apiClient } from "../utils/api.js";

// Create the context (like a "box" that holds shared data)
export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  // token: stored in localStorage so user stays logged in after page refresh
  const [token, setToken] = useState(localStorage.getItem("token") || false);

  // cartItems: the list of items in the user's cart
  const [cartItems, setCartItems] = useState([]);

  // ---- FETCH CART ----
  // Get cart items from backend when user is logged in
  const fetchCart = async () => {
    const userId = localStorage.getItem("id");
    if (!userId) return; // don't fetch if no user is logged in

    try {
      const res = await apiClient.get(`/get-cart/${userId}`);
      setCartItems(res.data);
    } catch (err) {
      console.error("Error fetching cart:", err);
    }
  };

  // Run fetchCart whenever the token changes (e.g. after login)
  useEffect(() => {
    if (token) fetchCart();
  }, [token]);

  // ---- REMOVE ITEM FROM CART ----
  const removeItemFromCart = async (id) => {
    try {
      await apiClient.delete(`/delete-cart/${id}`);
      // Update UI immediately without waiting for another fetch
      setCartItems((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Error removing cart item:", err);
    }
  };

  // ---- DELETE A PRODUCT (Admin use) ----
  const deleteProductById = async (id) => {
    try {
      const res = await apiClient.delete(`/delete-product/${id}`);
      return res.data;
    } catch (err) {
      console.error("Error deleting product:", err);
      throw err;
    }
  };

  // ---- INCREASE QUANTITY ----
  const increaseQuantity = async (id) => {
    // Update UI first for instant feedback, then sync with backend
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

  // ---- DECREASE QUANTITY ----
  const decreaseQuantity = async (id) => {
    // Don't go below quantity 1
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

  // ---- LOGOUT ----
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    setToken(null);
    setCartItems([]); // clear cart from UI on logout
  };

  // Everything in "value" is available to any component wrapped in AppContextProvider
  const value = {
    token,
    setToken,
    cartItems,
    setCartItems,
    fetchCart,
    removeItemFromCart,
    increaseQuantity,
    decreaseQuantity,
    logout,
    deleteProductById,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
