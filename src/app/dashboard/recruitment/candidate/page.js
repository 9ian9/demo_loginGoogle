'use client';

import { useState, useEffect } from 'react';
import HeaderContent, { BreakCrumbs } from '@/components/HeaderContent';
import ItemCount from '@/components/common/ItemCount';
import Filters from '@/components/filterBar/Filters';
import SearchInput from '@/components/filterBar/SearchInput';
import api from '@/lib/axiosInstance';

import { FormatCandidatesData } from '@/components/candidates/FormatCandidatesData';
import { GetColumnsFromData } from '@/components/table/GetColumnsFromData';
import Table from '@/components/table/Table';

export default function CandidatePage() {
  const title = 'All Candidates';
  const description = 'Manage your candidates and detail here.';
  const [filters, setFilters] = useState({});
  const [allCandidate, setAllCandidate] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        let response;

        if (search && search.trim() !== '') {
          response = await api.get('/candidate/search', {
            params: { searchRequest: search },
          });
        } else {
          response = await api.get('/candidate/filter', {
            params: filters,
          });
        }

        const formatData = FormatCandidatesData(response.data.result);
        setAllCandidate(formatData);
        console.log('Fetched Candidates:', response.data.result);
      } catch (error) {
        console.error('Error fetching candidates:', error);
      }
    };

    fetchCandidates();
  }, [filters, search]);

  const keySelect = [
    { key: 'status', label: 'Status' },
    { key: 'positionTitle', label: 'Position' },
    { key: 'level', label: 'Level' },
  ];

  const columns = GetColumnsFromData(allCandidate);

  return (
    <div className="flex flex-col gap-4 h-screen pt-4 pb-4 overflow-hidden">
      <BreakCrumbs />
      <div className="relative">
        <HeaderContent title={title} description={description}></HeaderContent>

        <div className="absolute top-6 left-60 badge badge-md border-[#374151]">
          <ItemCount category={'totalCandidates'} /> item
        </div>
      </div>
      <div className="FilterBar flex justify-between mx-[32px] ">
        <SearchInput onChange={(value) => setSearch(value)} />

        <Filters
          dataTable={allCandidate}
          keyValue={keySelect}
          filter={setFilters}
        />
      </div>
      <div className="flex-1 overflow-y-auto mx-[32px] rounded-lg border-[#E2E8F0] border-[1] m-2">
        <Table dataSource={allCandidate} columns={columns} />
      </div>
    </div>
  );
}
