import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("id");
    if (userId) {
      fetch(`http://localhost:5000/api/get-cart/${userId}`)
        .then((res) => {
          if (!res.ok) throw new Error("Cart not found");
          return res.json();
        })
        .then((data) => setCartItems(data))
        .catch((err) => console.error("Error fetching cart items:", err));
    }
  }, []);

  const removeItemFromCart = (id) => {
    fetch(`http://localhost:5000/api/delete-cart/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to delete item");
        setCartItems((prev) => prev.filter((item) => item._id !== id));
      })
      .catch((err) => console.error("Error deleting item:", err));
  };


  

  const value = {
    token,
    setToken,
    cartItems,
    setCartItems,
    removeItemFromCart,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
