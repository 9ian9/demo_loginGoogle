'use client';

import { useState, useEffect } from 'react';
import Filters from '@/components/filterBar/Filters';
import SearchInput from '@/components/filterBar/SearchInput';
import api from '@/lib/axiosInstance';

import TableDisplay from '@/components/table/TableDisplay';
// import { TransFormCandidates } from '@/components/candidates/FormatCandidatesData';
import { InfoItem } from '@/components/table/ui/InfoItem';
import { StatusItem } from '@/components/table/ui/StatusItem';
import { ChangeDateDisplay } from '@/components/table/helperComponents/ChangeDateDisplay';
import { SourceItem } from '@/components/table/ui/SourceItem';

export default function Candidates({ id }) {
  const [filters, setFilters] = useState({});
  const [allCandidate, setAllCandidate] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        let response;

        if (search.trim() !== '') {
          response = await api.get('/candidate/search', {
            params: { searchRequest: search },
          });
        } else if (Object.keys(filters).length > 0) {
          response = await api.get('/candidate/filter', {
            params: filters,
          });
        } else {
          response = await api.get(`/positions/${id}/candidates`);
        }

        setAllCandidate(response.data.result || response.data || []);
        console.log('Fetched Candidates:', response.data.result);
      } catch (error) {
        console.error('Error fetching candidates:', error);
      }
    };

    fetchCandidates();
  }, [id, filters, search]);

  const keySelect = [
    { key: 'status', label: 'Status' },
    { key: 'positionTitle', label: 'Position' },
    { key: 'level', label: 'Level' },
  ];

  const renderMap = [
    {
      key: 'information',
      title: 'Name',
      width: 550,
      render: (data) => <InfoItem data={data} />,
    },
    {
      key: 'status',
      width: 100,
      render: (status) => <StatusItem status={status} />,
    },
    {
      key: 'applicationDate',
      title: 'Date applies',
      render: (date) => ChangeDateDisplay(date),
      width: 200,
    },
    {
      key: 'source',
      title: 'From',
      render: (source) => <SourceItem source={source} />,
    },
  ];
  return (
    <div className="flex flex-col gap-4 min-h-0 h-full pt-4 pb-4 overflow-hidden">
      <div className="FilterBar flex justify-between mx-[32px]">
        <SearchInput onChange={(value) => setSearch(value)} />
        <Filters
          dataTable={allCandidate}
          keyValue={keySelect}
          filter={setFilters}
        />
      </div>

      <div className="flex-1 overflow-y-auto mx-[32px] rounded-lg border-[#E2E8F0] border-[1] m-2">
        <TableDisplay
          data={allCandidate}
          transForm={TransFormCandidates}
          renderMap={renderMap}
          sameId={true}
        />
      </div>
    </div>
  );
}
