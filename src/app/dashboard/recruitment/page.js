
'use client' 

import HeaderContent from "@/components/HeaderContent";
import Card from "@/components/recruitment/Card";
import StatusSelect from "@/components/filterBar/StatusSelect.js";
import LocationSelect from "@/components/filterBar/LocationSelect.js";
import LevelSelect from "@/components/filterBar/LevelSelect";
import FilterButton from "@/components/filterBar/FilterButton";
import ResetButton from "@/components/filterBar/ResetButton";
import SearchInput from "@/components/filterBar/SearchInput";
import ItemCount from "@/components/recruitment/ItemCount";
import TableAllPosition from "@/components/recruitment/TableAllPosition";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard(){
    const [status, setStatus] = useState('');
    const [location, setLocation] = useState('');
    const [level, setLevel] = useState('');
    const [search, setSearch] = useState('');
    const title ="Recruitment";
    const description ="Track, manage and forecast your recruitment and candidate";
    const router = useRouter();

    const hanldResetButton = () => {
        setLevel('');
        setLocation('');
        setStatus('');
    }
    const hanldCreateFormButton = () => {
        router.push('/dashboard/recruitment/createform');
    }
    return (
        <div className="flex flex-col gap-2">
            <HeaderContent title={title} description={description} />
            <Card/>
            <div>
                <div className="flex gap-4 items-center ml-[32px]">
                    <p className="text-2xl font-bold">All position</p>
                    <div className="badge badge-md border-[#374151] float-left">
                        <ItemCount endpoint={"api/positions"}/> items
                    </div>
                </div>
                <p className="ml-[32px] text-[#374151] text-xs">Manage your position and job description here.</p>
            </div>
            <div>
                <button className="btn bg-[#0C376C] px-3 py-1.5 rounded-lg text-[#C7D2FE] font-medium"
                    onClick={hanldCreateFormButton}
                >
                    Create New Position
                </button>
            </div>
            <div className="flex justify-between">
                <SearchInput onChange={(value) => setSearch(value)} />
                <div className="flex gap-2 ">
                    <StatusSelect onChange={(value) => (setStatus(value))} />
                    <LocationSelect onChange={(value) => (setLocation(value))} />
                    <LevelSelect onChange={(value) => (setLevel(value))} />
                    <FilterButton onClick={() => {alert('da nhan filter')}}/>
                    <ResetButton onClick={hanldResetButton} />
                </div>
            </div>
            <TableAllPosition />
        </div>
    )
}