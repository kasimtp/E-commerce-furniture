import axios from "axios";

const instance = axios.create({
  baseURL: "https://e-commerce-furniture-backend-gpxh.onrender.com",
  withCredentials: true,
});

export default instance;
