'use client'
import HeaderContent,{BreakCrumbs} from "@/components/HeaderContent" 
import PositionInformation from "@/components/form/PositionInformation"
import { useState,useEffect } from "react"
import api from "@/lib/axiosInstance"
export default function FormPosition(){
    const [data,setData] =useState()

    useEffect(()=>{
    const fetchDataForm =async() =>{
      try {
        const response =await api.get("/position/all")
        setData(response.data.result[0])
        console.log(response.data.result)
      }
      catch (error){
        console.log("error",error)
      }
    }
    fetchDataForm()
  },[])
    return (
        <div className="flex flex-col w-full pt-4">
            <BreakCrumbs/>
            <HeaderContent title={"Create Position"} description={""}/>
            <div className="flex justify-center mt-3">

                <PositionInformation initialDataForm={data} category="Create" />
           </div>
        </div>
    )
}