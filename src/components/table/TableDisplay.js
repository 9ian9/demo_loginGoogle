'use client';

import { convertKeyToTitle } from './ConvertKeyToTitle';
import { useState, useEffect } from 'react';
import { Table } from 'antd';

function TableDisplay({ data = [], transForm, renderMap = [] }) {
  const [tableData, setTableData] = useState([]);
  const classMainText = 'text-base font-semibold';
  const classSubText = 'text-sm text-[#0091FF]';

  useEffect(() => {
    const fetchData = () => {
      try {
        const transformed = transForm(data, classMainText, classSubText);
        setTableData(transformed);
      } catch (err) {
        console.error('Error fetching mock data:', err);
      }
    };
    fetchData();
  }, [data]);

  const dynamicColumns = tableData[0]
    ? Object.keys(tableData[0])
        .filter(
          (key) => key !== 'id' && key !== 'index' && key !== 'description',
        )
        .map((key) => {
          let column = {
            title: convertKeyToTitle(key),
            dataIndex: key,
            key: key,
          };

          const renderConfig = renderMap.find((render) => render.key === key);
          if (renderConfig) {
            column.title = renderConfig.title || column.title;
            column.width = renderConfig.width;
            column.render = renderConfig.render;
          }

          return column;
        })
    : [];

  return (
    <Table
      dataSource={tableData}
      columns={dynamicColumns}
      rowKey={(record) => record.id}
      pagination={false}
      sticky={true}
      className="custom-table"
    />
  );
}
export default TableDisplay;
