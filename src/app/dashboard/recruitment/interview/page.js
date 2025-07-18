"use client";

import { useState, useEffect } from "react";
import HeaderContent, { BreakCrumbs } from "@/components/HeaderContent";
import ItemCount from "@/components/recruitment/ItemCount";
import Filters from "@/components/filterBar/Filters";
import SearchInput from "@/components/filterBar/SearchInput";
import api from "@/lib/axiosInstance";

import TableDisplay from "@/components/table/TableDisplay";
import { TransFormInterviews } from "@/components/interview/TransFormInterviews";
import { InfoItem } from "@/components/table/InfoItem";
import { StatusItem } from "@/components/table/StatusItem";
import { ChangeDateDisplay } from "@/components/table/ChangeDateDisplay";

export default function CandidatePage() {
  const title = 'All Interview';
  const description = 'Manage your candidates and detail here.';
  const [filters, setFilters] = useState({});
  const [allInterview, setAllInterview] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        let response;

        if (search && search.trim() !== "") {
          response = await api.get("/interview/search", {
            params: { searchRequest: search },
          });
        } else {
          response = await api.get("/interview/filter", {
            params: filters,
          });
        }

        setAllInterview(response.data.result || []);
        console.log("Fetched Candidates:", response.data.result);
      } catch (error) {
        console.error("Error fetching candidates:", error);
      }
    };

    fetchCandidates();
  }, [filters, search]);

  const keySelect = [
    { key: "interviewRound", label: "Status" },
    { key: "positionTitle", label: "Position" },
    { key: "positionLevel", label: "Level" },
    { key: "interviewerName", label: "Interviewer" },
  ];

  const renderMap = [
    {
      key: "information",
      title: "Name",
      width: 300,
      render: (data) => <InfoItem data={data} />,
    },
    {
      key: "interviewer",
      render: (data) => <InfoItem data={data} />,
      width: 200,
    },
    {
      key: "interviewRound",
      title: "Status",
      width: 150,
      render: (interviewRound) => <StatusItem status={interviewRound} />,
    },
    {
      key: "scheduledTime",
      title: "Schedule",
      render: (date) => ChangeDateDisplay(date, true),
    },
    { key: "positionTitle", title: "Position" },
    { key: "positionLevel", title: "Level" },
  ];

  return (
    <div className="flex flex-col gap-4 h-screen pt-4 pb-4 overflow-hidden">
      <BreakCrumbs />
      <div className="relative">
        <HeaderContent title={title} description={description}></HeaderContent>

        <div className="absolute top-6 left-60 badge badge-md border-[#374151]">
          <ItemCount category={"totalInterviews"} /> item
        </div>
      </div>
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
        />
      </div>
    </div>
  );
}
