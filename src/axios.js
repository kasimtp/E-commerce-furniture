import axios from "axios";

const instance = axios.create({
  baseURL: "https://e-commerce-furniture-backend-gpxh.onrender.com/api", // ✅ include /api
  withCredentials: true,
});

export default instance;
