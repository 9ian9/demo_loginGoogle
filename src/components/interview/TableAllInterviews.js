'use client'

import { InfoItem } from "../table/InfoItem";
import StatusItem from "../table/StatusItem";
import { SourceItem } from "../table/SourceItem";
import { convertKeyToTitle } from "../table/ConvertKeyToTitle";
import { ChangeDateDisplay } from "../table/ChangeDateDisplay";
import { useEffect, useState } from "react";
import { Table } from "antd";

function TableAllInterviews({ Data }) {
  const [allInterviews, setAllInterviews] = useState([]);
  const classMainText = "text-base font-semibold";
  const classSubText = "text-sm text-[#0091FF]";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const transformed = Data.map(({ candidateName, candidateResumeUrl, positionTitle, positionLevel, interviewerName, interviewerJob, interviewerRound, scheduledTime, id }) => ({
          infomation: {
            mainText: candidateName,
            subText: candidateResumeUrl,
            classMainText: classMainText,
            classSubText: classSubText,
          },
          positionTitle,
          positionLevel,
          interview:
          {
            mainText: interviewerName,
            subText: interviewerJob,
            classMainText: classMainText,
            classSubText: "text-sm"
          },
          scheduledTime,
          interviewerRound, id
        }));
        setAllInterviews(transformed);
      } catch (err) {
        console.log("Error fetching mock data: ", err);
      }
    };

    fetchData();
  }, [Data]);

  const dynamicColumns = allInterviews[0]
    ? Object.keys(allInterviews[0])
        .filter((key) => key !== 'id')
        .map((key) => {
          let column = {
            title: convertKeyToTitle(key),
            dataIndex: key,
            key: key,
          };

          if (key === 'infomation') {
            column.title = 'Name';
            column.render = (data) => <InfoItem data={data} />;
            column.width = 300;
          }
          if (key === 'interview') {
            column.title = 'Interviewer';
            column.render = (data) => <InfoItem data={data} />;
            column.width = 200;
          }

          if (key === 'interviewerRound') {
            column.render = (status) => <StatusItem status={status} />;
            column.width = 150;
          }

          if (key === 'scheduledTime') {
            column.title = 'Date applies';
            column.render = (date) => ChangeDateDisplay(date, true);
          }

          if (key === 'positionTitle'){
            column.title = 'Position';
          }

          return column;
        })
    : [];

  return (
    <div>
      <Table
        dataSource={allInterviews}
        columns={dynamicColumns}
        rowKey={(record) => record.id} 
        className=" custom-table"
        pagination={false}
        sticky={true}
      />
    </div>
  );
}

export default TableAllInterviews;
