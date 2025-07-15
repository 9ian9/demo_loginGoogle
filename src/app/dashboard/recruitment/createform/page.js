'use client'
import { useState } from "react";
import PositionInformation from "@/components/createForm/PositionInformation";

function ParentComponent() {
  const [formData, setFormData] = useState({});

  const handleFormDataChange = (data) => {
    setFormData(data);  
  };

  return (
    <div className="w-full flex justify-center items-center h-screen">
      <PositionInformation onDataChange={handleFormDataChange} />
      {/* <div>
        <p>Job title: {formData.jobTitle}</p>
        <p>Status: {formData.status}</p>
        <p>Level: {formData.level}</p>
        <p>Number of Positions: {formData.numberOfPositions}</p>
        <p>Location: {formData.location}</p>
        <p>Deadline: {formData.deadline}</p>
        <p>Job Description: {formData.jobDescription}</p>
      </div> */}
    </div>
  );
}

export default ParentComponent;
