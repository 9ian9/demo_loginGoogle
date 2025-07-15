
'use client' 

import HeaderContent from "@/components/HeaderContent";
import Card from "@/components/recruitment/Card";
import ItemCount from "@/components/recruitment/ItemCount";
import Filters from "@/components/filterBar/Filters";
import TableAllPosition from "@/components/recruitment/TableAllPosition";
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/axiosInstance";

export default function Dashboard(){

    const title ="Recruitment";
    const description ="Track, manage and forecast your recruitment and candidate";
    const router = useRouter();   
    const [allPosition,setAllPositions] = useState([]);
    const [filters,setFilters]=useState({});

    const hanldCreateFormButton = () => {
        router.push('/dashboard/recruitment/createform');
    }

    //  useEffect(() =>{
    //     const fetchPositions = async() =>{
    //         try {
    //             const response = await api.get("/api/allPosition",{params:filters});
    //             setAllPositions(response.data);
    //         }
    //         catch (error){
    //             console.log("Error:",error)
    //         }
    //     }
    //     fetchPositions();
    // },[])

    const mockData = [
    { title: "Backend Developer", numberOfPositions: 2, numberOfApplicants: 5, level: "Middle", location: "NZ", deadline: "06/15/2023", status: "Open" },
    { title: "UI/UX Designer", numberOfPositions: 1, numberOfApplicants: 1, level: "Junior", location: "US", deadline: "06/15/2023", status: "Open" },
    { title: "Full Stack Developer", numberOfPositions: 2, numberOfApplicants: 3, level: "Senior", location: "VN", deadline: "06/30/2023", status: "Open" },
    { title: "Data Scientist", numberOfPositions: 4, numberOfApplicants: 4, level: "Lead", location: "VN", deadline: "06/01/2023", status: "Closed" },
    { title: "DevOps Engineer", numberOfPositions: 2, numberOfApplicants: 8, level: "Intern", location: "VN", deadline: "06/15/2023", status: "Open" },
    ];

    const keySelect = ["status", "location","level"]
    
    return (
        <div className="flex flex-col gap-6 max-w-350">
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
                {/* <SearchInput onChange={(value) => setSearch(value)} /> */}
                
                <Filters allPosition={mockData} keyValue={keySelect} filter={setFilters} />
            </div>      
            <div className="mx-[32px]">
                <TableAllPosition Data={mockData}/>
            </div>
        </div>
    );
}