// This file sets up a shared Axios instance used across the whole app.
// Instead of writing the full URL every time, we just use apiClient.get("/route")

import axios from "axios";

// The live backend URL deployed on Render
export const baseUrl = "https://e-commerce-furniture-backend-gpxh.onrender.com/api";

// apiClient is a pre-configured axios instance
// baseURL means all requests will automatically start with the baseUrl above
export const apiClient = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json", // tells the server we're sending JSON data
  },
});

// ---- PRODUCT API HELPERS ----
// These functions call the backend and return the response.
// Use them in any component instead of writing apiClient.get(...) directly.

// Fetch all products from the backend
export const getData = () => apiClient.get("/get-product");

// Delete a product by its ID
export const deleteData = (id) => apiClient.delete(`/delete-product/${id}`);
