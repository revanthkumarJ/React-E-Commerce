import axios from "axios"

const base_url="https://api.escuelajs.co/api/v1"


export const getAllProducts=async()=>{
    const url=`${base_url}/products`
    try {
        const data=await axios.get(url);
       
        return data.data;
    } catch (error) {
        return error
    }
}