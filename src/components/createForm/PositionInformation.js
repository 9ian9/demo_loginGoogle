// 'use client'

// import { useState } from "react";
// import { InputFieldset } from "./InputFieldset";
// import { SelectItem } from "./SelectItem";
// function PositionInformation({data}){
//     const [jobTitle, setJobTitle] = useState('');
//     const [status, setStatus] = useState('');
//     const [level, setLevel] = useState('');
//     const [numberOfPositions, setNumberOfPositions] = useState('');
//     const [location, setLocation] = useState('');
//     const [deadline, setDeadline] = useState('');
//     const [jobDescription, setJobDescription] = useState('');
//     const [data, setData] = useState([]);

//     const statusData = {
//         title: 'Status',
//         options:['Open', 'Pending', 'Closed']
//     };
//     const levelData = {
//         title: 'Level',
//         options: ['Intern', 'Fresher', 'Junior', 'Middle', 'Senior', 'Lead', 'Manager', 'Director']
//     };
//     const loactionData = {
//         title: 'Locations',
//         options: ['Viet Nam', 'The United States', 'New Zealand', 'Japan', 'Other']
//     }
//     return(
//         <div className="flex flex-col items-center justify-center px-8 w-[720px]"
//         onChange={} >
//             <div className="flex flex-col gap-4 w-full max-w-[720px]">
//                 <div className="flex flex-col gap-2">
//                     <p className="text-2xl">General Information</p>
//                     <InputFieldset className="px-4 py-3.5" title={'Job title'} onChange={(value) => setJobTitle(value)} />
//                     <SelectItem data={statusData} onChange={(value) => setStatus(value)} />

//                     <div className="flex gap-8">
//                         <SelectItem data={levelData} onChange={(value) => setLevel(value)} className="w-1/2" />
//                         <InputFieldset className="px-4 py-3.5 w-1/2" title={'Number of position'} onChange={(value) => setNumberOfPositions(value)} />
//                     </div>

//                     <div className="flex gap-8">
//                         <SelectItem data={loactionData} onChange={(value) => setLocation(value)} />
//                         <InputFieldset className="px-4 py-3.5" title={'Deadline'} onChange={(value) => setDeadline(value)} />
//                     </div>

//                 </div>
//                 <div className="flex flex-col gap-4">
//                     <p className="text-2xl">Job Description</p>
//                     <input type="text" className="input border-[#D1D5DB] rounded-md focus-within:border-[#D1D5DB] focus-within:outline-none focus-within:ring-gray-300" 
//                     placeholder="Type here" onChange={(e) => setJobDescription(e.target.value)} />
//                 </div>
//             </div>
//            <div>
//             Trong position form:
//             <p>job title: {jobTitle}</p>
//             <p>status: {status}</p>
//             <p>level: {level}</p>
//             <p>numberOfPositions: {numberOfPositions}</p>
//             <p>location: {location}</p>
//             <p>deadline: {deadline}</p>
//             <p>jobDescription: {jobDescription}</p>
//            </div>
//         </div>
//     );
// }
// export default PositionInformation;
'use client'
import { useState } from "react";
import { InputFieldset } from "./InputFieldset";
import { SelectItem } from "./SelectItem";

function PositionInformation({ onDataChange }) {
  const [jobTitle, setJobTitle] = useState('');
  const [status, setStatus] = useState('');
  const [level, setLevel] = useState('');
  const [numberOfPositions, setNumberOfPositions] = useState('');
  const [location, setLocation] = useState('');
  const [deadline, setDeadline] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  const statusData = {
    title: 'Status',
    options: ['Open', 'Pending', 'Closed']
  };
  const levelData = {
    title: 'Level',
    options: ['Intern', 'Fresher', 'Junior', 'Middle', 'Senior', 'Lead', 'Manager', 'Director']
  };
  const locationData = {
    title: 'Locations',
    options: ['Viet Nam', 'The United States', 'New Zealand', 'Japan', 'Other']
  };

  const handleChange = (key, value) => {
    if (key === "jobTitle") setJobTitle(value);
    if (key === "status") setStatus(value);
    if (key === "level") setLevel(value);
    if (key === "numberOfPositions") setNumberOfPositions(value);
    if (key === "location") setLocation(value);
    if (key === "deadline") setDeadline(value);
    if (key === "jobDescription") setJobDescription(value);

    onDataChange({
      jobTitle,
      status,
      level,
      numberOfPositions,
      location,
      deadline,
      jobDescription,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center px-8 w-[720px]">
      <div className="flex flex-col gap-4 w-full max-w-[720px]">
        <div className="flex flex-col gap-2">
          <p className="text-2xl font-semibold">General Information</p>
          <InputFieldset
            className="px-4 py-3.5"
            title={"Job title"}
            onChange={(value) => handleChange("jobTitle", value)}
          />
          <SelectItem
            data={statusData}
            onChange={(value) => handleChange("status", value)}
          />
          <div className="flex gap-8">
            <SelectItem
              data={levelData}
              onChange={(value) => handleChange("level", value)}
              className="w-1/2"
            />
            <InputFieldset
              className="px-4 py-3.5 w-1/2"
              title={"Number of position"}
              onChange={(value) => handleChange("numberOfPositions", value)}
            />
          </div>
          <div className="flex gap-8">
            <SelectItem
              data={locationData}
              onChange={(value) => handleChange("location", value)}
            />
            <InputFieldset
              className="px-4 py-3.5"
              title={"Deadline"}
              onChange={(value) => handleChange("deadline", value)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-2xl font-semibold">Job Description</p>
          <input
            type="text"
            className="input w-full border-[#D1D5DB] rounded-md focus-within:border-[#D1D5DB] focus-within:outline-none focus-within:ring-gray-300"
            placeholder="Type here"
            onChange={(e) => handleChange("jobDescription", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default PositionInformation;
