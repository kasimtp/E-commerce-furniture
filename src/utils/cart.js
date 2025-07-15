 import { apiClient } from "./api"




export const getCart = ()=>{
    return apiClient.get("/api/get-cart")
}