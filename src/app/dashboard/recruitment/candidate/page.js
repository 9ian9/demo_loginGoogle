'use client';

import { useState, useEffect } from 'react';
import HeaderContent, { BreakCrumbs } from "@/components/HeaderContent";
import ItemCount from "@/components/recruitment/ItemCount";
import TableAllCadidates from '@/components/candidates/TableAllCandidates';
import Filters from '@/components/filterBar/Filters';
// import SearchInput from '@/components/filterBar/SearchInput';
import api from '@/lib/axiosInstance';

export default function CandidatePage() {
  const title = "All candidates";
  const description = "Manage your candidates and detail here.";
  const [filters, setFilters] = useState({});
  const [allCandidate,setAllCandidate] = useState([]);


  useEffect(() =>{
        const fetchCandidates = async() =>{
            try {
                const response = await api.get("candidate/all",{ params: filters });
                setAllCandidate(response.data.result);
                console.log(response.data.result)
            }
            catch (error){
                console.log("Error:",error)
            }
        }
        fetchCandidates();
  },[filters])

  const keySelect = [
    {key:"status", label:"Status"},
    {key:"positionTitle", label:"Position"},
    {key:"level",label:"Level"},            
  ]

  return (
    <div className="flex flex-col gap-4 h-screen mt-4">
        <BreakCrumbs />
        <div className="relative">
            <HeaderContent title={title} description={description}></HeaderContent>
            
            <div className="absolute top-6 left-60 badge badge-md border-[#374151]">
                <ItemCount endpoint="api/candidate" /> item
            </div>
        </div>
        <div className="FilterBar flex justify-between mx-[32px] ">
            {/* <SearchInput onChange={(value) => setSearch(value)} /> */}
            
            <Filters allPosition={allCandidate} keyValue={keySelect} filter={setFilters} />
        </div> 
        <div className="mx-[32px] mt-[16px] flex-grow">
            <TableAllCadidates Data={allCandidate} />
        </div>
    </div>
  );
}
