'use client';

import HeaderContent from '@/components/HeaderContent';
import Card from '@/components/recruitment/Card';
import ItemCount from '@/components/common/ItemCount';
import Filters from '@/components/filterBar/Filters';
import SearchInput from '@/components/filterBar/SearchInput';
import { useState, useEffect, Suspense } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/lib/axiosInstance';

import { FormatPositionData } from '@/components/recruitment/FormatPositionData';
import { GetColumnsFromData } from '@/components/table/GetColumnsFromData';
import Table from '@/components/table/Table';

export default function Dashboard() {
  const router = useRouter();
  const [allPosition, setAllPositions] = useState([]);
  const [filters, setFilters] = useState({});
  const [search, setSearch] = useState('');
  const [isLoading, setLoading] = useState(true);

  const hanldCreateFormButton = () => {
    router.push('/dashboard/recruitment/position/newposition');
  };

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        let response;

        if (search && search.trim() !== '') {
          response = await api.get('/positions/search', {
            params: { searchRequest: search },
          });
        } else {
          response = await api.get('/positions/filter', {
            params: filters,
          });
        }
        const formatData = FormatPositionData(response.data.result);
        setAllPositions(formatData);
        console.log('Fetched Candidates:', response.data.result);
      } catch (error) {
        console.error('Error fetching candidates:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCandidates();
  }, [filters, search]);

  const HanldeRowClick = (id) => {
    router.push(`/dashboard/recruitment/position/${id}`);
  };

  const keySelect = [
    { key: 'status', label: 'Status' },
    { key: 'level', label: 'Level' },
    { key: 'location', label: 'Locations' },
  ];

  const columns = GetColumnsFromData(allPosition);

  return (
    <div className="flex flex-col gap-4 h-screen pt-4 pb-4">
      <HeaderContent
        title="Recruitment"
        description="Track, manage and forecast your recruitment and candidate"
      />
      <Card />
      <div className="flex justify-between mx-[32px]">
        <div>
          <div className="flex gap-4 items-center">
            <p className="text-2xl font-bold">All position</p>

            <div className="badge badge-md border-[#374151] float-left">
              <ItemCount category={'totalPositions'} /> items
            </div>
          </div>
          <p className="text-[#374151] text-xs">
            Manage your position and job description here.
          </p>
        </div>

        <div className="">
          <button
            className="btn bg-[#0C376C] px-3 py-1.5 rounded-lg text-[#C7D2FE] font-medium"
            onClick={hanldCreateFormButton}
          >
            Create New Position
          </button>
        </div>
      </div>

      <div className="FilterBar flex justify-between mx-[32px] ">
        <SearchInput onChange={(value) => setSearch(value)} />

        <Filters
          dataTable={allPosition}
          keyValue={keySelect}
          filter={setFilters}
        />
      </div>
      <div className="flex-1 overflow-y-auto mx-[32px] rounded-lg border-[#E2E8F0] border-[1]">
        {isLoading ? (
          <div className="flex justify-center mt-15 text-base text-gray-500">
            Loading data ...
          </div>
        ) : (
          <Table
            dataSource={allPosition}
            columns={columns}
            onRowClick={HanldeRowClick}
          />
        )}
      </div>
    </div>
  );
}
