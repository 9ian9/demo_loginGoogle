'use client'

import { InfoItem } from "../table/InfoItem";
import StatusItem from "../table/StatusItem";
import { SourceItem } from "../table/SourceItem";
import { convertKeyToTitle } from "../table/ConvertKeyToTitle";
import { useEffect, useState } from "react";
import { Table } from "antd";
import api from "@/lib/axiosInstance";

function TableAllCadidates({Data}){
    const [allCandidates, setAllCandidetes] = useState([]);
  const classMainText = "text-base font-semibold";
  const classSubText = "text-sm text-info";

    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await api.get('/api/AllCandidates.json');
                const transformed = res.data.map(({ name, resumeUrl, appliedPosition, ...rest }, index) => ({
                    index: index,
                    infomation:
                        {
                            mainText: name,
                            subText: resumeUrl,
                            classMainText: classMainText,
                            classSubText: classSubText
                        },
                    appliedPosition,
                    ...rest
                }));
                setAllCandidetes(transformed);
            } catch (err){
                console.log("Error fetching mock data: ", err);
            }
        };

        fetchData();
    }, [Data]);

    const dynamicColumns = allCandidates[0]
    ? Object.keys(allCandidates[0])
    .filter((key) => key !== 'index')
    .map((key) => {
        let column = {
            title: convertKeyToTitle(key),
            dataIndex: key,
            key: key
        };

        if(key === 'appliedPosition'){
            column.title = 'Position';
        }

        if (key === 'infomation'){
            column.render = (data) => <InfoItem data={data} />;
            column.width = 350;
        }

        if(key === 'status'){
            column.render = (status) => <StatusItem status={status} />;
            column.width = 100;
        }
        
        if(key === 'applicationDate'){
            column.title = 'Date applies';
        }

        if(key === 'source'){
            column.title = 'From';
            column.render = (source) => <SourceItem source={source} />
        }

        return column;
    })
    : [];

    return(
    <div className=''>
      <Table dataSource={allCandidates} 
      columns={dynamicColumns} 
      rowKey={(record) => record.index} 
      className='border-[#E2E8F0] border-[1] table-auto rounded-lg scoll custom-table' 
      scroll={{ y:480}} 
      pagination={false} />
    </div>
  )
}

export default TableAllCadidates;