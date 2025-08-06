'use client';

import Tabs from '@/components/detailPosition/TabNavigation';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { EditButton } from '@/components/ui/EditButton';
import { ChangeStatusButton } from '@/components/ui/ChangeStatusButton';
import { useRouter } from 'next/navigation';
import api from '@/lib/axiosInstance';
import { iconDetailPosition } from '../../../../../../public/icon/iconDetailPosition';

export default function DetailPosition() {
  const router = useRouter();
  const params = useParams();
  const rawID = params.id;
  const id = Array.isArray(rawID) ? rawID[0] : rawID;
  const [position, setPosition] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('ID: ', id);
        const res = await api.get(`/positions/${id}`);
        setPosition(res.data.result);
        setStatus(res.data.result.status);
      } catch (err) {
        console.error(`No position found with id = ${id}`);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const updateStatus = async () => {
      try {
        const res = await api.patch(`/positions/${id}`, { status: status });
      } catch (err) {
        console.error(`Can't update status: ${err}`);
      }
    };
    updateStatus();
  }, [status]);

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
          {iconDetailPosition.iconBack}
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
        <Tabs data={position} id={id} />
      </div>
    </div>
  );
}
