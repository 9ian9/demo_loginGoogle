'use client';

import { useState, useEffect } from 'react';
import HeaderContent, { BreakCrumbs } from "@/components/HeaderContent";
import ItemCount from "@/components/recruitment/ItemCount";
import Filters from '@/components/filterBar/Filters';
import SearchInput from '@/components/filterBar/SearchInput';
import TableAllInterviews from '@/components/interview/TableAllInterviews';
import api from '@/lib/axiosInstance';

export default function InterviewPage() {
  const title = "All Interview";
  const description = "Manage your candidates and detail here.";
  const [filters, setFilters] = useState({});
  const [allInterviews, setAllInterviews] = useState([]);

   useEffect(() =>{
        const fetchPositions = async() =>{
            try {
                const response = await api.get("interview/filter",{params:filters});
                setAllInterviews(response.data.result);
                console.log(allInterviews);
            }
            catch (error){
                console.log("Error:",error)
            }
        }
        fetchPositions();
    },[])

    const keySelect = ["status","position","level","interviewer",]


  return (
    <div className="flex flex-col gap-4 h-screen pt-4 pb-4 overflow-hidden">
        <BreakCrumbs />
        <div className="relative">
            <HeaderContent title={title} description={description}></HeaderContent>
            
            <div className="absolute top-6 left-60 badge badge-md border-[#374151]">
                <ItemCount category={"totalInterviews"} /> item
            </div>
        </div>
        <div className="FilterBar flex justify-between mx-[32px] ">
            <SearchInput onChange={(value) => setSearch(value)} />
            
            <Filters allPosition={allInterviews} keyValue={keySelect} filter={setFilters} />
        </div> 
        <div className="flex-1 overflow-y-auto mx-[32px] rounded-lg border-[#E2E8F0] border-[1]">
            <TableAllInterviews Data={allInterviews} />
        </div>
    </div>
  );
}
