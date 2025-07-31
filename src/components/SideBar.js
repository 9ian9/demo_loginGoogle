'use client';

import api from '@/lib/axiosInstance';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { SideBarContent } from './SideBar/SideBarContent';
import { SideBarFooter } from './SideBar/SideBarFooter';

function SideBar({ className }) {
  const ImageLogo = '/image/logohome.png';
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchDataUser = async () => {
      try {
        const res = await api.get('user/getInfo');
        const data = res.data.result;
        setData(data);
      } catch (err) {
        console.log('Not fetch data: ', err);
      }
    };
    fetchDataUser();
  }, []);

  return (
    <div
      className={`${className} h-screen flex flex-col border-r-1 border-[#E3E8EF] justify-between text-sm`}
    >
      <div className="flex flex-col gap-6 pt-6">
        <div className="py-1 px-6">
          <Image src={ImageLogo} width={40} height={40} alt="logo" />
        </div>
        <SideBarContent />
      </div>

      <SideBarFooter data={data} />
    </div>
  );
}

export default SideBar;
