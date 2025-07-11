'use client'
import {Select, Table} from 'antd';
import { InfoItem } from '../table/InfoItem';
import StatusItem from '../table/StatusItem';
import { useEffect, useState } from 'react';
import api from '@/lib/axiosInstance';

function TableAllPosition({Data}){
  const [allPositions, setAllPositions] = useState([]);
  const classMainText = "text-base font-semibold";
  const classSubText = "text-sm text-gray-500";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get('/api/AllPosition.json');
        const transformed = res.data.map(({ namePosition, numberOfPositions, numberOfApplicants, ...rest }) => ({
          position: {
            mainText: namePosition,
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

  const convertKeyToTitle = (key) => {
    let result = key[0].toUpperCase();
    for (let i = 1; i < key.length; i++) {
      const char = key[i];
      if (char === char.toUpperCase() && isNaN(char)) {
        result += ' ' + char;
      } else {
        result += char;
      }
    }
    return result;
  };

  const dynamicColumns = allPositions[0]
  ? Object.keys(allPositions[0]).map((key) => {
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
      rowKey={(record) => record.position.mainText} 
      className='border-[#E2E8F0] border-[1] table-auto rounded-lg scoll custom-table' 
      scroll={{ y:280}} 
      pagination={false} />
    </div>
  )
}
export default TableAllPosition;
