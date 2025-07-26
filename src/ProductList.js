 
 import { apiClient } from "./utils/api";


 export const getData = ()=>{
    return apiClient.get("/get-products")

 }

 export const deleteData = (id) => {
   return apiClient.delete(`/delete-product/${id}`, {

   })
 };

  