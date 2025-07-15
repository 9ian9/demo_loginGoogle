'use client'

import { InfoItem } from "../table/InfoItem";
import StatusItem from "../table/StatusItem";
import { SourceItem } from "../table/SourceItem";
import { convertKeyToTitle } from "../table/ConvertKeyToTitle";
import { ChangeDateDisplay } from "../table/ChangeDateDisplay";
import { useEffect, useState } from "react";
import { Table } from "antd";

function TableAllCadidates({ Data }) {
  const [allCandidates, setAllCandidetes] = useState([]);
  const classMainText = "text-base font-semibold";
  const classSubText = "text-sm text-info";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const transformed = Data.map(({ name, resumeUrl, positionTitle, level, applicationDate, source, score, status }) => ({
          infomation: {
            mainText: name,
            subText: resumeUrl,
            classMainText: classMainText,
            classSubText: classSubText,
          },
          positionTitle,
          level,
          applicationDate,
          source,
          score,
          status,
        }));
        setAllCandidetes(transformed);
      } catch (err) {
        console.log("Error fetching mock data: ", err);
      }
    };

    fetchData();
  }, [Data]);

  const dynamicColumns = allCandidates[0]
    ? Object.keys(allCandidates[0])
        .filter((key) => key !== 'index' && key !== 'id')
        .map((key) => {
          let column = {
            title: convertKeyToTitle(key),
            dataIndex: key,
            key: key,
          };

          if (key === 'positionTitle') {
            column.title = 'Position';
            column.width = 200;
          }

          if (key === 'infomation') {
            column.render = (data) => <InfoItem data={data} />;
            column.width = 350;
          }

          if (key === 'status') {
            column.render = (status) => <StatusItem status={status} />;
            column.width = 100;
          }

          if (key === 'applicationDate') {
            column.title = 'Date applies';
            column.render = (date) => ChangeDateDisplay(date);
          }

          if (key === 'source') {
            column.title = 'From';
            column.render = (source) => <SourceItem source={source} />;
          }

          return column;
        })
    : [];

  return (
    <div>
      <Table
        dataSource={allCandidates}
        columns={dynamicColumns}
        rowKey={(record) => record.id} 
        className="border-[#E2E8F0] border-[1] table-auto rounded-lg scoll custom-table"
        scroll={{ y: 'calc(100vh - 350px)' }}
        pagination={false}
      />
    </div>
  );
}

export default TableAllCadidates;
