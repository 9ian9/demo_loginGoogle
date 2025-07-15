'use client'
import {Select, Table} from 'antd';
import { InfoItem } from '../table/InfoItem';
import StatusItem from '../table/StatusItem';
import { useEffect, useState } from 'react';
import api from '@/lib/axiosInstance';
import { convertKeyToTitle } from '../table/ConvertKeyToTitle';

function TableAllPosition({Data}){
  const [allPositions, setAllPositions] = useState([]);
  const classMainText = "text-base font-semibold";
  const classSubText = "text-sm text-gray-500";

  useEffect(() => {
    const fetchData = async () => {
      try {
<<<<<<< HEAD
        const res = await api.get('/api/AllPosition.json');
        const transformed = res.data.map(({ title, numberOfPositions, numberOfApplicants, ...rest }, index) => ({
=======
        const transformed = Data.map(({ title, numberOfPositions, numberOfApplicants, ...rest }, index) => ({
>>>>>>> 11cc44ddc5dd70b2069a7de1f9cf08f6509e4ffc
          index: index,
          position: {
            mainText: title,
            subText: `${numberOfPositions} ${numberOfPositions > 1 ? 'positions' : 'position'}`,
            classMainText: classMainText,
            classSubText: classSubText
          },
          numberOfApplicants: `${numberOfApplicants} ${numberOfApplicants > 1 ? 'Candidates' : 'Candidates'}`,
          ...rest
        }));
        setAllPositions(transformed);
      } catch (err) {
        console.error("Error fetching mock data:", err);
      }
    };

    fetchData();
  }, [Data]);

  const dynamicColumns = allPositions[0]
  ? Object.keys(allPositions[0])
<<<<<<< HEAD
  .filter((key) => key !== 'index')
=======
  .filter((key) => (key !== 'index'))
>>>>>>> 11cc44ddc5dd70b2069a7de1f9cf08f6509e4ffc
  .map((key) => {
      let column = {
        title: convertKeyToTitle(key),
        dataIndex: key,
        key: key
      };

      if (key === 'position') {
        column.render = (data) => <InfoItem data={data} />;
         column.width = 350;
      }

      if (key === 'status') {
        column.render = (status) => <StatusItem status={status} />;
         column.width = 100;
      }

      return column;
    })
  : [];

  return(
    <div className=''>
      <Table dataSource={allPositions} 
      columns={dynamicColumns} 
      rowKey={(record) => record.index} 
      className='border-[#E2E8F0] border-[1] table-auto rounded-lg scoll custom-table' 
      scroll={{ y:280}} 
      pagination={false} />
    </div>
  )
}
export default TableAllPosition;
