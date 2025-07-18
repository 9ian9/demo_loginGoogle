"use client";

import { useEffect, useState } from "react";

export function StatusItem({ status }) {
  const [classStatus, setClassStatus] = useState("");
  useEffect(() => {
    function changeStatus() {
      switch (status) {
        case "Open":
          setClassStatus("badge badge-success badge-sm px-3 py-0.5");
          break;
        case "Closed":
          setClassStatus("badge bg-[#374151] text-white badge-sm px-3 py-0.5");
          break;
        case "New":
          setClassStatus(
            "badge badge-outline badge-sm px-3 py-0.5 text-[#374151] border-[#374151]"
          );
          break;
        case "Scan":
          setClassStatus(
            "badge badge-outline badge-sm px-3 py-0.5 text-[#4338CA] border-[#4338CA]"
          );
          break;
        case "Rejected":
          setClassStatus(
            "badge badge-outline badge-sm px-3 py-0.5 text-[#D1D5DB] border-[#D1D5DB]"
          );
          break;
        case "English interview":
          setClassStatus(
            "badge badge-outline badge-sm px-3 py-0.5 text-[#4338CA] border-[#4338CA]"
          );
          break;
        case "Technical interview":
          setClassStatus(
            "badge badge-outline badge-sm px-3 py-0.5 badge-warning"
          );
          break;
        case "CEO interview":
          setClassStatus(
            "badge badge-outline badge-sm px-3 py-0.5 text-[#0EA5E9] border-[#0EA5E9]"
          );
          break;
        case "Pass":
          setClassStatus(
            "badge badge-outline badge-sm px-3 py-0.5 text-[#4338CA] border-[#4338CA]"
          );
          break;
        case "Fail":
          setClassStatus(
            "badge badge-outline badge-sm px-3 py-0.5 text-[#D1D5DB] border-[#D1D5DB]"
          );
          break;
        default:
          setClassStatus("");
          break;
      }
    }
    changeStatus();
  }, [status]);

  return <span className={classStatus}>{status}</span>;
}
