'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import api from '@/lib/axiosInstance';
import { ChangeDateDisplay } from '../table/ChangeDateDisplay';
import InfoPositionItem from './InfoPositionItem';

export default function DetailInformation({ data }) {
  const { id } = useParams();
  const [position, setPosition] = useState(null);

  useEffect(() => {
    const fetchPosition = async () => {
      try {
        setPosition(data);
      } catch (error) {
        console.error('Failed to fetch position:', error);
      }
    };

    fetchPosition();
  }, [data]);

  if (!position) return <div className="p-4">Loading...</div>;

  return (
    <div className="flex gap-8 h-full">
      <div className="flex flex-col gap-6 flex-shrink-0 w-[300px]">
        <p className="text-lg text-[#000000] font-semibold">
          General Information
        </p>
        <InfoPositionItem label="Level" value={position.level} />

        <InfoPositionItem
          label="Number of Applicants"
          value={`${position.numberOfApplicants} ${position.numberOfApplicants > 1 ? 'Members' : 'Member'}`}
        />

        <InfoPositionItem
          label="Deadline"
          value={ChangeDateDisplay(position.deadline)}
        />

        <InfoPositionItem label="Location" value={position.location} />
      </div>

      <div className="flex flex-col gap-4 flex-1 min-h-0">
        <p className="text-lg font-semibold">Job Description</p>

        <div className="flex-1 overflow-y-auto pr-2 whitespace-pre-line text-[#475467]">
          {position.description}
        </div>
      </div>
    </div>
  );
}
