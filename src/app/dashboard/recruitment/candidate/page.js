'use client';

import { useState } from 'react';
import HeaderContent, { BreakCrumbs } from "@/components/HeaderContent";
import ItemCount from "@/components/recruitment/ItemCount";
import TableAllPosition from "@/components/recruitment/TableAllPosition";
import Filters from '@/components/filterBar/Filters';
import SearchInput from '@/components/filterBar/SearchInput';

export default function CandidatePage() {
  const title = "All candidates";
  const description = "Manage your candidates and detail here.";
  const [filters, setFilters] = useState({});

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
    { position: "Backend Developer", numberOfPositions: 2, numberOfApplicants: 5, level: "Middle", location: "NZ", deadline: "06/15/2023", status: "Open" },
    { position: "UI/UX Designer", numberOfPositions: 1, numberOfApplicants: 1, level: "Junior", location: "US", deadline: "06/15/2023", status: "Open" },
    { position: "Full Stack Developer", numberOfPositions: 2, numberOfApplicants: 3, level: "Senior", location: "VN", deadline: "06/30/2023", status: "Open" },
    { position: "Data Scientist", numberOfPositions: 4, numberOfApplicants: 4, level: "Lead", location: "VN", deadline: "06/01/2023", status: "Closed" },
    { position: "DevOps Engineer", numberOfPositions: 2, numberOfApplicants: 8, level: "Intern", location: "VN", deadline: "06/15/2023", status: "Open" },
  ];

    const keySelect = ["status","position","level","location",]


  return (
    <div className="flex flex-col gap-4 h-full mt-4">
        <BreakCrumbs />
        <div className="relative">
            <HeaderContent title={title} description={description}></HeaderContent>
            
            <div className="absolute top-6 left-60 badge badge-md border-[#374151]">
                <ItemCount endpoint="api/candidate" /> item
            </div>
        </div>
        <div className="FilterBar flex justify-between mx-[32px] ">
            <SearchInput onChange={(value) => setSearch(value)} />
            
            <Filters allPosition={mockData} keyValue={keySelect} filter={setFilters} />
        </div> 
        <div className="mx-[32px] mt-[24px]">
            <TableAllPosition Data={mockData} />
        </div>
    </div>
  );
}
