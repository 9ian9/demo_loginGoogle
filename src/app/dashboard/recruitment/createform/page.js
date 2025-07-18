"use client";
import HeaderContent, { BreakCrumbs } from "@/components/HeaderContent";
import PositionInformation from "@/components/form/PositionInformation";
import { useState, useEffect } from "react";
import api from "@/lib/axiosInstance";

export default function FormPosition() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataForm = async () => {
      try {
        const response = await api.get("/position/all");
        const positions = response.data.result;
        const findID = positions.find((people) => people.id === 1);
        setData(findID);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchDataForm();
  }, []);
  return (
    <div className="flex flex-col w-full pt-4">
      <BreakCrumbs />
      <HeaderContent title={"Create Position"} description={""} />
      <div className="flex justify-center mt-3">
        <PositionInformation initialDataForm={data} category="Create" />
      </div>
    </div>
  );
}
