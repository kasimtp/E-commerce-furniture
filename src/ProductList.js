 
 import { apiClient } from "../utils/api";


 export const getData = ()=>{
    return apiClient.get("/api/get-product")

 }

 export const deleteData = (id) => {
   return apiClient.delete(`/api/delete-product/${id}`, {

   })
 };

  