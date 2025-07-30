'use client';

import Link from 'next/link';
import api from '@/lib/axiosInstance';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { iconSideBar } from './icon/iconSidebar';

function SideBar({ className }) {
  const pathname = usePathname();
  const [imageUser, setImageUser] = useState('');
  const [username, setUsername] = useState('');
  const [position, setPosition] = useState('');
  const ImageLogo = '/logohome.png';
  useEffect(() => {
    const fetchDataUser = async () => {
      try {
        const res = await api.get('user/getInfo');
        const data = res.data.result;
        setUsername(data.name);
        setPosition(data.jobTitle);
      } catch (err) {}
    };
    fetchDataUser();
  }, []);

  const navItems = [
    {
      label: 'Home',
      href: '/dashboard/home',
      icon: iconSideBar.iconHome
    },
    {
      label: 'Recruitment',
      href: '/dashboard/recruitment',
      icon: iconSideBar.iconRecruitment,
    },
    {
      label: 'Projects',
      href: '/dashboard/projects',
      icon: iconSideBar.iconProjects,
    },
    {
      label: 'Product',
      href: '/dashboard/product',
      icon: iconSideBar.iconProduct,
    },
    {
      label: 'Employment',
      href: '/dashboard/employment',
      icon: iconSideBar.iconEmployment,
    },
  ];

  const renderNavLink = ({ label, href, icon }) => {
    const isActive = pathname.startsWith(href);
    const itemClass = isActive
      ? 'px-2 py-2 bg-[#F3F4F6] rounded-[6]'
      : 'px-2 py-2 hover:bg-[#F3F4F6] rounded-[6]';
    const divClass = isActive
      ? 'gap-2 flex items-center text-[#0C376C] font-semibold'
      : 'gap-2 flex items-center text-[#747778] hover:text-[#0C376C] hover:font-semibold transition-all';

    return (
      <Link key={href} href={href} className={itemClass}>
        <div className={divClass}>
          {icon}
          <span>{label}</span>
        </div>
      </Link>
    );
  };

  return (
    <div
      className={`${className} h-screen flex flex-col border-r-1 border-[#E3E8EF] justify-between text-sm`}
    >
      <div className="flex flex-col gap-6 pt-6">
        <div className="py-1 px-6">
          <Image src={ImageLogo} width={40} height={40} alt="logo" />
        </div>
        <div className="flex flex-col gap-2 px-4">
          {navItems.map(renderNavLink)}
        </div>
      </div>
      <div className="flex flex-col gap-6 px-4 pb-8">
        <Link
          href="/dashboard/settings"
          className={
            pathname === '/dashboard/settings'
              ? 'px-2 py-2 bg-[#F3F4F6] rounded-[6]'
              : 'px-2 py-2 hover:bg-[#F3F4F6] rounded-[6]'
          }
        >
          <div
            className={
              pathname === '/dashboard/settings'
                ? 'gap-2 flex items-center text-[#0C376C] font-semibold'
                : 'gap-2 flex items-center text-[#747778] hover:text-[#0C376C] hover:font-semibold transition-all'
            }
          >
            {iconSideBar.iconSetting}
            <span>Settings</span>
          </div>
        </Link>
        <div className="flex pl-2 pr-8 pt-6 gap-4 border-t-1 border-[#E3E8EF]">
          <Image
            src={
              imageUser ||
              'https://photo.znews.vn/w660/Uploaded/mdf_eioxrd/2021_07_06/2.jpg'
            }
            className="rounded-full"
            width={32}
            height={32}
            alt="imageUser"
          />
          <div className="flex flex-col justify-center">
            <p className="text-sm text-[#1F2937] font-medium">{username}</p>
            <p className="text-xs text-[#374151]">{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
