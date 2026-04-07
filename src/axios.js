import axios from "axios";

const instance = axios.create({
  baseURL: "https://e-commerce-furniture-backend-production.up.railway.app/api", // ✅ include /api
  withCredentials: true,
});

export default instance;



// import axios from "axios";

// const instance = axios.create({
//   baseURL: import.meta.env.VITE_API_BASE_URL, // must include `/api`
//   withCredentials: true,
// });

// export default instance;
 