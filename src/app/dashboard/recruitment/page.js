"use client";

import HeaderContent from "@/components/HeaderContent";
import Card from "@/components/recruitment/Card";
import ItemCount from "@/components/recruitment/ItemCount";
import Filters from "@/components/filterBar/Filters";
import SearchInput from "@/components/filterBar/SearchInput";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/axiosInstance";

import TableDisplay from '@/components/table/TableDisplay';
import { TransFormPositions } from '@/components/recruitment/TransFormPositions';
import { InfoItem } from '@/components/table/InfoItem';
import { StatusItem } from '@/components/table/StatusItem';
import { ChangeDateDisplay } from '@/components/table/ChangeDateDisplay';

export default function Dashboard() {
  const router = useRouter();
  const [allPosition, setAllPositions] = useState([]);
  const [filters, setFilters] = useState({});
  const [search, setSearch] = useState("");
  const [id, setId] = useState();

  const hanldCreateFormButton = () => {
    router.push("/dashboard/recruitment/createform");
  };

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        let response;

        if (search && search.trim() !== "") {
          response = await api.get("/position/search", {
            params: { searchRequest: search },
          });
        } else {
          response = await api.get("/position/filter", {
            params: filters,
          });
        }

        setAllPositions(response.data.result || []);
        console.log("Fetched Candidates:", response.data.result);
      } catch (error) {
        console.error("Error fetching candidates:", error);
      }
    };

    fetchCandidates();
  }, [filters, search]);

  const keySelect = [
    { key: "status", label: "Status" },
    { key: "level", label: "Level" },
    { key: "location", label: "Locations" },
  ];

  const renderMap = [
    { key: "position", width: 350, render: (data) => <InfoItem data={data} /> },
    {
      key: "status",
      width: 100,
      render: (status) => <StatusItem status={status} />,
    },
    { key: "deadline", render: (date) => ChangeDateDisplay(date) },
    { key: "numberOfApplicants", width: 200 },
  ];

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
              <ItemCount category={"totalPositions"} /> items
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
        <TableDisplay
          data={allPosition}
          transForm={TransFormPositions}
          renderMap={renderMap}
          onClick={(id) =>
            router.push(`/dashboard/recruitment/detailposition/${id}`)
          }
        />
      </div>
    </div>
  );
}
