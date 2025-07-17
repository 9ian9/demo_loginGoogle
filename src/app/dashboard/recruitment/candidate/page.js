'use client';

import { useState, useEffect } from 'react';
import HeaderContent, { BreakCrumbs } from "@/components/HeaderContent";
import ItemCount from "@/components/recruitment/ItemCount";
import Filters from '@/components/filterBar/Filters';
import SearchInput from '@/components/filterBar/SearchInput';
import api from '@/lib/axiosInstance';

import TableDisplay from '@/components/table/TableDisplay';
import { TransFormCandidates } from '@/components/candidates/TransformCandidates';
import { InfoItem } from '@/components/table/InfoItem';
import { StatusItem } from '@/components/table/StatusItem';
import { ChangeDateDisplay } from '@/components/table/ChangeDateDisplay';
import { SourceItem } from '@/components/table/SourceItem';

export default function CandidatePage() {
  const title = "All Candidates";
  const description = "Manage your candidates and detail here.";
  const [filters, setFilters] = useState({});
  const [allCandidate,setAllCandidate] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() =>{
        const fetchCandidates = async() =>{
            try {
                const response = await api.get("/candidate/filter",{ params: filters });
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
  
  const renderMap = [
    { key: 'information', title: 'Name', width: 350, render: (data) => <InfoItem data={data} /> },
    { key: 'status', width: 100, render: (status) => <StatusItem status={status} /> },
    { key: 'applicationDate', title: 'Date applies', render: (date) => ChangeDateDisplay(date) },
    { key: 'numberOfApplicants', width: 200 },
    { key: 'source', title: 'From', render: (source) => <SourceItem source={source} />},
    { key: 'positionTitle', title: 'Position'}
];

  return (
    <div className="flex flex-col gap-4 h-screen pt-4 pb-4 overflow-hidden">
        <BreakCrumbs />
        <div className="relative">
            <HeaderContent title={title} description={description}></HeaderContent>
            
            <div className="absolute top-6 left-60 badge badge-md border-[#374151]">
                <ItemCount category={"totalCandidates"} /> item
            </div>
        </div>
        <div className="FilterBar flex justify-between mx-[32px] ">
            <SearchInput onChange={(value) => setSearch(value)} />
            
            <Filters dataTable={allCandidate} keyValue={keySelect} filter={setFilters} />
        </div> 
        <div className="flex-1 overflow-y-auto mx-[32px] rounded-lg border-[#E2E8F0] border-[1] m-2">
            <TableDisplay data={allCandidate} transForm={TransFormCandidates} renderMap={renderMap} />
        </div>
    </div>
  );
}
