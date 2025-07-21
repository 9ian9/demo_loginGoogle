'use client';

import Tabs from '@/components/detailPosition/Tab';
import { fakePositions } from '@/components/fakePositionData';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { EditButton } from '@/components/detailPosition/EditButton';
import { ChangeStatusButton } from '@/components/detailPosition/ChangeStatusButton';
import { useRouter } from 'next/navigation';
import api from '@/lib/axiosInstance';
import { BreakCrumbs } from '@/components/HeaderContent';

export default function DetailPosition() {
  const router = useRouter();
  const params = useParams();
  const rawID = params.ID;
  const id = Array.isArray(rawID) ? rawID[0] : rawID;
  const [position, setPosition] = useState(null);
  const [status, setStatus] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('ID: ', id);
        const res = await api.get(`/position/${id}`);
        setPosition(res.data.result);
        setStatus(res.data.result.status);
      } catch (err) {
        console.error(`No position found with id = ${id}`);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() =>{
    const updateStatus = async() => {
      try{
        const res = await api.patch(`/position/${id}`,{ status: status});

      } catch (err){
        console.error(`Can't update status: ${err}`);
      }
    }
    updateStatus();
  }, [status])

  const hanldEditButton = () => {
    router.push(`/dashboard/recruitment/position/${id}/updateposition`);
  };

  const handleClickBack = () => {
    router.push(`/dashboard/recruitment`);
  };

  return (
    <div className="flex flex-col gap-4 h-screen overflow-hidden">
      <div className="flex flex-col pt-4 gap-3">
        <div className="flex items-center gap-[4px] pl-[32px]">
          <svg
            width="14"
            height="14"
            viewBox="0 0 32 32"
            color="#374151"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.7073 25.2925C20.8002 25.3854 20.8739 25.4957 20.9242 25.6171C20.9745 25.7385 21.0004 25.8686 21.0004 26C21.0004 26.1314 20.9745 26.2615 20.9242 26.3829C20.8739 26.5043 20.8002 26.6146 20.7073 26.7075C20.6144 26.8004 20.5041 26.8741 20.3827 26.9244C20.2613 26.9747 20.1312 27.0006 19.9998 27.0006C19.8684 27.0006 19.7383 26.9747 19.6169 26.9244C19.4955 26.8741 19.3852 26.8004 19.2923 26.7075L9.29231 16.7075C9.19933 16.6146 9.12557 16.5043 9.07525 16.3829C9.02493 16.2615 8.99902 16.1314 8.99902 16C8.99902 15.8686 9.02493 15.7385 9.07525 15.6171C9.12557 15.4957 9.19933 15.3854 9.29231 15.2925L19.2923 5.29251C19.4799 5.10487 19.7344 4.99945 19.9998 4.99945C20.2652 4.99945 20.5197 5.10487 20.7073 5.29251C20.895 5.48015 21.0004 5.73464 21.0004 6.00001C21.0004 6.26537 20.895 6.51987 20.7073 6.70751L11.4136 16L20.7073 25.2925Z"
              fill="#374151"
            />
          </svg>
          <button
            onClick={handleClickBack}
            className="breadcrumbs text-sm text-[#374151] cursor-pointer"
          >
            Back
          </button>
        </div>

        <div className="py-4 px-8 flex justify-between">
          <h1 className="text-4xl font-bold">
            {position ? position.title : 'Loading...'}
          </h1>

          <div className="flex gap-2">
            <EditButton onclick={hanldEditButton} />
            {position && (
              <ChangeStatusButton
                onchange={(value) => setStatus(value)}
                statusData={status}
              />
            )}
          </div>
        </div>
      </div>

      <div className="flex-1 min-h-0 overflow-hidden">
        <Tabs data={position} />
      </div>
    </div>
  );
}
