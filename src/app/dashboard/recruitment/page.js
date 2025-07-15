'use client' 

import HeaderContent from "@/components/HeaderContent";
import Card from "@/components/recruitment/Card";
import ItemCount from "@/components/recruitment/ItemCount";
import Filters from "@/components/filterBar/Filters";
import SearchInput from "@/components/filterBar/SearchInput";
import TableAllPosition from "@/components/recruitment/TableAllPosition";
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/axiosInstance";
import { all } from "axios";

export default function Dashboard(){

    const title ="Recruitment";
    const description ="Track, manage and forecast your recruitment and candidate";
    const router = useRouter();   
    const [allPosition,setAllPositions] = useState([]);
    const [filters,setFilters]=useState({});

    const hanldCreateFormButton = () => {
        router.push('/dashboard/recruitment/createform');
    }

     useEffect(() =>{
        const fetchPositions = async() =>{
            try {
                const response = await api.get("/position/all",{params:filters});
                setAllPositions(response.data.result);
            }
            catch (error){
                console.log("Error:",error)
            }
        }
        fetchPositions();
    },[filters])

    const keySelect = [
        {key:"status", label:"Status"},
        {key:"title", label:"Position"},
        {key:"level",label:"Level"},  
        {key:"location",label:"Locations"}
    ]
    
    return (
        <div className="flex flex-col gap-4 h-screen pt-4 pb-4">
            <HeaderContent title={title} description={description} />

            <Card/>

            <div className="flex justify-between mx-[32px]">
                <div>
                    <div className="flex gap-4 items-center">
                        <p className="text-2xl font-bold">All position</p>

                        <div className="badge badge-md border-[#374151] float-left">
                            <ItemCount endpoint={"api/positions"}/> items
                        </div>
                    </div>
                    <p className="text-[#374151] text-xs">Manage your position and job description here.</p>
                </div>

                <div className="">
                    <button className="btn bg-[#0C376C] px-3 py-1.5 rounded-lg text-[#C7D2FE] font-medium"
                        onClick={hanldCreateFormButton}
                    >
                        Create New Position
                    </button>
                </div>
            </div>
            
            <div className="FilterBar flex justify-between mx-[32px] ">
                <SearchInput onChange={(value) => setSearch(value)} />
                
                <Filters allPosition={allPosition} keyValue={keySelect} filter={setFilters} />
            </div>      
            <div className="flex-1 overflow-y-auto mx-[32px]">
                <TableAllPosition Data={allPosition}/>
            </div>
        </div>
    );
}