// import api from "@/lib/axiosInstance";
// import { useEffect, useState } from "react";

// function TableAllPosition({select}){
//     const [status, location, level, search] = select;
//     const [allPositions, setAllPositions] = useState([]);
//     const [thus, setThu] = useState([
//         { id: 1, position: 'Backend Developer', numberOfPositions: 2, numberOfApplicants: 5, level: 'Middle', location: 'NZ', deadline: '06/15/2023', status: 'Open' },
//         { id: 2, position: 'UI/UX Designer', numberOfPositions: 1, numberOfApplicants: 1, level: 'Junior', location: 'US', deadline: '06/15/2023', status: 'Open' },
//         { id: 3, position: 'Full Stack Developer', numberOfPositions: 2, numberOfApplicants: 3, level: 'Senior', location: 'VN', deadline: '06/30/2023', status: 'Open' },
//         { id: 4, position: 'Data Scientist', numberOfPositions: 4, numberOfApplicants: 4, level: 'Lead', location: 'VN', deadline: '06/01/2023', status: 'Closed' },
//         { id: 5, position: 'DevOps Engineer', numberOfPositions: 2, numberOfApplicants: 8, level: 'Intern', location: 'VN', deadline: '06/15/2023', status: 'Open' },
//     ]);
//     useEffect(() => {
//         // const fetchData = async () => {
//         //     try{
//         //         const res = await api.get('/api/position', {
//         //             params: {
//         //                 status: status || '',
//         //                 location: location || '',
//         //                 level: level || '',
//         //                 search: search || ''
//         //             }
//         //         });
//         //         setAllPositions(res.data);
//         //     } catch (err){
//         //         console.error("Failed to fetch positions:", err);
//         //     }
//         // }
//         // fetchData();
//     },[status, location, level, search]);
//     return(
//         <div>
//             <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
//                 <table className="table">
//                     <thead>
//                     <tr>
//                         <th>Postion</th>
//                         <th className="text-center">Number of Applicants</th>
//                         <th>Level</th>
//                         <th>Location</th>
//                         <th>Deadline</th>
//                         <th >Status</th>
//                     </tr>
//                     </thead>
//                     <tbody>
//                     {allPositions.map((position) => {
//                         const classStatus = `text-center rounded-[9999] px-3 py-[2] text-xs h-5 ${
//                         position.status === 'Open' ? 'bg-green-400 w-13' : 'bg-gray-700 text-white w-15'
//                         }`;

//                         return (
//                         <tr key={position.id}>
//                             <th className="flex flex-col">
//                             <p>{position.position}</p>
//                             <p className="text-xs font-normal">
//                                 {`${position.numberOfPositions} ${position.numberOfPositions > 1 ? 'positions' : 'position'}`}
//                             </p>
//                             </th>
//                             <td className="text-center">{position.numberOfApplicants}</td>
//                             <td>{position.level}</td>
//                             <td>{position.location}</td>
//                             <td>{position.deadline}</td>
//                             <td>
//                                 <p className={classStatus}>{position.status}</p>
//                             </td>
//                         </tr>
//                         );
//                     })}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     )
// }
// export default TableAllPosition;
import api from "@/lib/axiosInstance";
import { useEffect, useState } from "react";

function TableAllPosition({ select }) {
  const [status, location, level, search] = select;

  const [allPositions, setAllPositions] = useState([]);

  const mockData = [
    { id: 1, position: "Backend Developer", numberOfPositions: 2, numberOfApplicants: 5, level: "Middle", location: "New Zealand", deadline: "06/15/2023", status: "Open" },
    { id: 2, position: "UI/UX Designer", numberOfPositions: 1, numberOfApplicants: 1, level: "Junior", location: "The United States", deadline: "06/15/2023", status: "Open" },
    { id: 3, position: "Full Stack Developer", numberOfPositions: 2, numberOfApplicants: 3, level: "Senior", location: "Viet Nam", deadline: "06/30/2023", status: "Open" },
    { id: 4, position: "Data Scientist", numberOfPositions: 4, numberOfApplicants: 4, level: "Lead", location: "Viet Nam", deadline: "06/01/2023", status: "Closed" },
    { id: 5, position: "DevOps Engineer", numberOfPositions: 2, numberOfApplicants: 8, level: "Intern", location: "Viet Nam", deadline: "06/15/2023", status: "Open" },
  ];

  useEffect(() => {
    const fetchData = () => {
      let filtered = mockData;

      if (status) filtered = filtered.filter(item => item.status === status);
      if (level) filtered = filtered.filter(item => item.level === level);
      if (location) filtered = filtered.filter(item => item.location === location);
      if (search) {
        const lowerSearch = search.toLowerCase();
        filtered = filtered.filter(item =>
          item.position.toLowerCase().includes(lowerSearch)
        );
      }

      setAllPositions(filtered);
    };

    fetchData();
  }, [status, location, level, search]);

  return (
    <div>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          <thead>
            <tr>
              <th>Position</th>
              <th className="text-center">Number of Applicants</th>
              <th>Level</th>
              <th>Location</th>
              <th>Deadline</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {allPositions.map((position) => {
              const classStatus = `text-center rounded-[9999px] px-3 py-1 text-xs h-5 ${
                position.status === "Open"
                  ? "bg-green-400 w-13"
                  : "bg-gray-700 text-white w-15"
              }`;

              return (
                <tr key={position.id}>
                  <th className="flex flex-col">
                    <p>{position.position}</p>
                    <p className="text-xs font-normal">
                      {`${position.numberOfPositions} ${
                        position.numberOfPositions > 1 ? "positions" : "position"
                      }`}
                    </p>
                  </th>
                  <td className="text-center">{position.numberOfApplicants}</td>
                  <td>{position.level}</td>
                  <td>{position.location}</td>
                  <td>{position.deadline}</td>
                  <td>
                    <p className={classStatus}>{position.status}</p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableAllPosition;
