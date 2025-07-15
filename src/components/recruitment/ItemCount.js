'use client'
import { useState,useEffect } from "react"
import api from "@/lib/axiosInstance"

export default function ItemCount({endpoint}){
    const [count, setCount] = useState(null)
    const [error,setError] = useState(null)
    useEffect( ()=>{
        const fetchData = async () =>{
            try{
                const response =await api.get(endpoint);
                setCount(response.data.count);
            }
            catch (error){
                setError(error.message);
            }
        }
        fetchData();
    },[endpoint]);
    if (count === null) 
        return (
            <>
                <div className="flex justify-center items-center space-x-2 h-full">
                    0
                </div>
            </>
        )
    return (
        <p>{count}</p>
    )
}