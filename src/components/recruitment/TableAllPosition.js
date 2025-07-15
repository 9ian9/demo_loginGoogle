'use client'
import {Table} from 'antd';
import { InfoItem } from '../table/InfoItem';
import StatusItem from '../table/StatusItem';
import { useEffect, useState } from 'react';
import { convertKeyToTitle } from '../table/ConvertKeyToTitle';
import { ChangeDateDisplay } from '../table/ChangeDateDisplay';

function TableAllPosition({Data}){
  const [allPositions, setAllPositions] = useState([]);
  const classMainText = "text-base font-semibold";
  const classSubText = "text-sm text-gray-500";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const transformed = Data.map(({ title, numberOfPositions, numberOfApplicants, level, location, deadline, status }, index) => ({
          index: index,
          position: {
            mainText: title,
            subText: `${numberOfPositions} ${numberOfPositions > 1 ? 'positions' : 'position'}`,
            classMainText: classMainText,
            classSubText: classSubText
          },
          numberOfApplicants: `${numberOfApplicants} ${numberOfApplicants > 1 ? 'Candidates' : 'Candidates'}`,
          level,
          location,
          deadline,
          status
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
  .filter((key) => key !== 'index' && key !== 'id' && key !== 'description')
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

      if (key === 'deadline'){
        column.render = (date) => ChangeDateDisplay(date);
      }

      if (key === 'numberOfApplicants'){
        column.width = 200;
      }

      return column;
    })
  : [];

  return(
    <div className="">
      <Table dataSource={allPositions} 
      columns={dynamicColumns} 
      rowKey={(record) => record.index} 
      className='custom-table' 
      sticky={true}
      pagination={false} />
    </div>
  )
}
export default TableAllPosition;
