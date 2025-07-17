// 'use client'
// import { useState } from "react";
// import { InputFieldset } from "./InputFieldset";
// import { SelectItem } from "./SelectItem";

// export default function PositionInformation({initialDataForm={}}) {
//   const [dataForm, setDataForm] = useState({
//      });
  
//   const handleOnChange =(keyObject,inputValue) =>{
//     setDataForm((prev) => ({
//                               ...prev,
//                               [keyObject]: inputValue,
//                           }))
//    }
//   const statusData = {
//     title: 'Status',
//     options: ['Open', 'Pending', 'Closed']
//   };
//   const levelData = {
//     title: 'Level',
//     options: ['Intern', 'Fresher', 'Junior', 'Middle', 'Senior', 'Lead', 'Manager', 'Director']
//   };
//   const locationData = {
//     title: 'Locations',
//     options: ['Viet Nam', 'The United States', 'New Zealand', 'Japan', 'Other']
//   };

//   // const handleChange = (key, value) => {
//   //   if (key === "jobTitle") setJobTitle(value);
//   //   if (key === "status") setStatus(value);
//   //   if (key === "level") setLevel(value);
//   //   if (key === "numberOfPositions") setNumberOfPositions(value);
//   //   if (key === "location") setLocation(value);
//   //   if (key === "deadline") setDeadline(value);
//   //   if (key === "jobDescription") setJobDescription(value);

//   //   onDataChange({
//   //     jobTitle,
//   //     status,
//   //     level,
//   //     numberOfPositions,
//   //     location,
//   //     deadline,
//   //     jobDescription,
//   //   });

//   };

//   return (
//     <div className="flex flex-col items-center justify-center px-8 w-[720px]">
//       <div className="flex flex-col gap-4 w-full max-w-[720px]">
//         <div className="flex flex-col gap-2">
//           <p className="text-xl font-semibold">General Information</p>
//           <InputFieldset
//             type="text"
//             label="Job title"
//             keyObject= "jobTitle"
//             value={dataForm.jobTitle || ''}
//             onChange={handleOnChange}
//           />
//           <SelectItem
//             data={statusData}
//             onChange={(value) => handleChange("status", value)}
//           />
//           <div className="flex gap-8">
//             <SelectItem
//               data={levelData}
//               onChange={(value) => handleChange("level", value)}
//               className="w-1/2"
//             />
//             <InputFieldset
//               type="number"
//               label="Number of position"
//               onChange={(value) => handleChange("numberOfPositions", value)}
//             />
//           </div>
//           <div className="flex gap-8">
//             <SelectItem
//               data={locationData}
//               onChange={(value) => handleChange("location", value)}
//             />
//             <InputFieldset
//               type="date"
//               label="Deadline"
//               onChange={(value) => handleChange("deadline", value)}
//             />
//           </div>
//         </div>
//         <div className="flex flex-col gap-4">
//           <p className="text-2xl font-semibold">Job Description</p>
//           <input
//             type="text"
//             className="input w-full border-[#D1D5DB] rounded-md focus-within:border-[#D1D5DB] focus-within:outline-none focus-within:ring-gray-300"
//             placeholder="Type here"
//             onChange={(e) => handleChange("jobDescription", e.target.value)}
//           />
//         </div>
//       </div>
//     </div>
//   );

'use client';
import { useEffect, useState } from 'react';
import { InputFieldset } from './InputFieldset';
import { SelectItem } from './SelectItem';

export default function PositionInformation({ initialDataForm = {},category }) {
  
  const selectOptions = {
    status: ['Open', 'Pending', 'Closed'],
    level: ['Intern', 'Fresher', 'Junior', 'Middle', 'Senior', 'Lead', 'Manager', 'Director'],
    location: ['Viet Nam', 'The United States', 'New Zealand', 'Japan', 'Other'],
  }; 
  
  const [dataForm, setDataForm] = useState({
    title: '',
    status: selectOptions.status[0],
    level: selectOptions.level[0],
    numberOfPositions: '',
    location: selectOptions.location[0],
    deadline: '',
    jobDescription: '',
    ...initialDataForm, 
  });

  const handleOnChange = (keyObject, inputValue) => {
    setDataForm((prev) => ({
      ...prev,
      [keyObject]: inputValue,
    }));
  };
  
  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(dataForm)    
  }

  return (
    <form className="flex flex-col items-center justify-center px-8 w-[720px]" onSubmit={(e)=>handleSubmit(e)}>
      <div className="flex flex-col gap-2 w-full max-w-[720px]">
        <div className="flex flex-col gap-2">
          <p className="text-xl font-semibold">General Information</p>
          <InputFieldset
            type="text"
            label="Job title"
            keyObject="title"
            value={dataForm.jobTitle || ''}
            onChange={handleOnChange}
            placeholder="Enter job title"
          />
          <SelectItem
            label="Status"
            keyObject="status"
            value={ dataForm.status}
            onChange={handleOnChange}
            options={selectOptions.status}
          />
          <div className="flex gap-8">
            <SelectItem
              label="Level"
              keyObject="level"
              value={dataForm.level}
              onChange={handleOnChange}
              options={selectOptions.level}
            />
            <InputFieldset
              type="number"
              label="Number of position"
              keyObject="numberOfPositions"
              value={dataForm.numberOfPositions || ''}
              onChange={handleOnChange}
              placeholder="Enter number of positions"
            />
          </div>
          <div className="flex gap-8">
            <SelectItem
              label="Locations"
              keyObject="location"
              value={dataForm.location}
              onChange={handleOnChange}
              options={selectOptions.location}
            />
            <InputFieldset
              type="date"
              label="Deadline"
              keyObject="deadline"
              value={dataForm.deadline || ''}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xl font-semibold">Job Description</p>
          <textarea
            rows={5}
            className="flex-1 input w-full border-[#D1D5DB] rounded-md focus-within:border-[#D1D5DB] focus-within:outline-none focus-within:ring-gray-300"
            placeholder="Type here"
            onChange={(e) => handleOnChange("jobDescription", e.target.value)}
          />
        </div>
        <div className='flex gap-1.5'> 
          <button className="btn bg-[#F3F4F6] px-3 py-1.5 rounded-lg text-black font-medium w-[65px]">Cancel
          </button>
          <button type="submit" className="btn bg-[rgb(12,55,108)] px-3 py-1.5 rounded-lg text-[#fcfcfc] font-medium w-[65px]">{category}
          </button>
        </div>
        
      </div>
    </form>
  );
}


