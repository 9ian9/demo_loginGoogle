'use client';

import { useState, useEffect } from 'react';
import Filters from '@/components/filterBar/Filters';
import SearchInput from '@/components/filterBar/SearchInput';
import api from '@/lib/axiosInstance';

import TableDisplay from '@/components/table/TableDisplay';
// import { TransFormInterviews } from '@/components/interview/FormatInterviewsData';
import { InfoItem } from '@/components/table/ui/InfoItem';
import { StatusItem } from '@/components/table/ui/StatusItem';
import { ChangeDateDisplay } from '@/components/table/helperComponents/ChangeDateDisplay';

export default function Interview({ id }) {
  const [filters, setFilters] = useState({});
  const [allInterview, setAllInterview] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        let response;

        if (search && search.trim() !== '') {
          response = await api.get('/interview/search', {
            params: { searchRequest: search },
          });
        } else if (Object.keys(filters).length > 0) {
          response = await api.get('/interview/filter', {
            params: filters,
          });
        } else {
          response = await api.get(`/positions/${id}/interviews`);
        }

        setAllInterview(response.data.result || []);
        console.log('Fetched Interviews:', response.data.result);
      } catch (error) {
        console.error('Error fetching Interviews:', error);
      }
    };

    fetchCandidates();
  }, [filters, search]);

  const keySelect = [
    { key: 'interviewRound', label: 'Status' },
    { key: 'positionTitle', label: 'Position' },
    { key: 'positionLevel', label: 'Level' },
    { key: 'interviewerName', label: 'Interviewer' },
  ];

  const renderMap = [
    {
      key: 'information',
      title: 'Name',
      width: 550,
      render: (data) => <InfoItem data={data} />,
    },
    {
      key: 'interviewer',
      render: (data) => <InfoItem data={data} />,
      width: 200,
    },
    {
      key: 'interviewRound',
      title: 'Status',
      width: 150,
      render: (interviewRound) => <StatusItem status={interviewRound} />,
    },
    {
      key: 'scheduledTime',
      title: 'Schedule',
      render: (date) => ChangeDateDisplay(date, true),
    },
  ];

  return (
    <div className="flex flex-col gap-4 min-h-0 h-full pt-4 pb-4 overflow-hidden">
      <div className="FilterBar flex justify-between mx-[32px] ">
        <SearchInput onChange={(value) => setSearch(value)} />

        <Filters
          dataTable={allInterview}
          keyValue={keySelect}
          filter={setFilters}
        />
      </div>
      <div className="flex-1 overflow-y-auto mx-[32px] rounded-lg border-[#E2E8F0] border-[1]">
        <TableDisplay
          data={allInterview}
          transForm={TransFormInterviews}
          renderMap={renderMap}
          sameId={true}
        />
      </div>
    </div>
  );
}
