'use client'
import Link from 'next/link';
import { useEffect,useState } from 'react';
import api from '@/lib/axiosInstance'; 
export default function Card(){
    return (
        <div className="flex gap-4 mx-[32px]">
            <CardItem
                title="All Candidates"
                href="/dashboard/recruitment/candidate"
                quantity={Quantity("candidate")}
            />
            <CardItem
                title="Interview"
                href="/dashboard/recruitment/interview"
                quantity={Quantity("interview")}
            />
        </div>
    )
}

function CardItem({title,quantity,href}){

    return (
        <div className="border border-[#E5E7EB] shadow-xs rounded-xl w-full px-[24px] py-[16px]">
            <h2 className="card-title mb-[8px]">{title}</h2>
            <div className='flex justify-between items-end  '>
                {quantity}
                <Link href={href} className='text-[#0C376C]'>View All</Link>
            </div>
        </div>
        // <div className='flex gap-4'>
        //     <div className="border border-[#E5E7EB] shadow-xs rounded-xl w-full px-[24px] py-[16px]">
        //         <h2 className="card-title mb-[8px]">All Candidates</h2>
        //         <div className='flex justify-between items-end  '>
        //             <CountCandidates/>
        //             <Link href="/dashboard/recruitment/candidate" className='text-[#0C376C]'>View All</Link>
        //         </div>
        //     </div>
        //     <div className=" border border-[#E5E7EB] shadow-xs rounded-xl w-full px-[24px] py-[16px]">
        //         <h2 className="card-title  mb-[8px]">Interviev</h2>
        //         <div className='flex justify-between items-end  '>
        //             <CountInterview/>
        //             <Link href="/dashboard/recruitment/candidate" className='text-[#0C376C]'>View All</Link>
        //         </div>
        //     </div>
        // </div>
    )
}
function Quantity(style){
    const [count,setCount] = useState(null);
    const [error,setError] =useState(null);
    
    useEffect (()=>{
        const fetchCount = async () =>{
            try {
                if (style ==="candidate")
                {
                    const response = await api.get("api/candidate")
                    setCount(response.data.count);
                }
                else 
                {
                    const response = await api.get("api/interview")
                    setCount(response.data.count);
                }
            }
            catch(error)
            {
                console.log(error)
                setError("Failed to fetch quantity")
            }
        }
        fetchCount()
    },[])
    
    if (count === null) 
        return <p>Loading ....</p> 
    return(
        <h1 className="text-4xl leading-10 font-bold">{count}</h1>

    )
}

function CountInterview(){
    return(
        <h1 className="text-4xl leading-10 font-bold">6</h1>

    )
}