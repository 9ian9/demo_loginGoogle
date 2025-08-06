import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { iconSideBar } from '../../../public/icon/iconSidebar';

export function SideBarFooter({ data }) {
  const { name, jobTitle } = data;
  const pathname = usePathname();
  return (
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
            'https://photo.znews.vn/w660/Uploaded/mdf_eioxrd/2021_07_06/2.jpg'
          }
          className="rounded-full"
          width={32}
          height={32}
          alt="imageUser"
        />
        <div className="flex flex-col justify-center">
          <p className="text-sm text-[#1F2937] font-medium">{name}</p>
          <p className="text-xs text-[#374151]">{jobTitle}</p>
        </div>
      </div>
    </div>
  );
}
