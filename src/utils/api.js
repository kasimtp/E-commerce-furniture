// import axios from "axios"


// export const baseUrl = "http://localhost:5000"


// export const apiClient = axios.create({
//     baseURL:baseUrl,
//     headers:{
//         "Content-Type":"application/json"
//     }
// })

 


// src/utils/api.js
import axios from "axios";

export const baseUrl = "https://e-commerce-furniture-backend-gpxh.onrender.com/api";

export const apiClient = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json"
  }
});


