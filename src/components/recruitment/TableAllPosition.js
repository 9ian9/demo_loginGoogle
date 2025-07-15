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
        const transformed = Data.map(({ title, numberOfPositions, numberOfApplicants, ...rest }, index) => ({
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
  .filter((key) => key !== 'index' && key !== 'id')
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
    <div className="">
      <Table dataSource={allPositions} 
      columns={dynamicColumns} 
      rowKey={(record) => record.index} 
      className='border-[#E2E8F0] border-[1] table-auto rounded-lg  custom-table' 
      sticky={true}
      pagination={false} />
    </div>
  )
}
export default TableAllPosition;
