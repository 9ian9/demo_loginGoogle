import Link from 'next/link';
import { iconSideBar } from '../../../public/icon/iconSidebar';
import { usePathname } from 'next/navigation';

export function SideBarContent() {
  const pathname = usePathname();
  const navItems = [
    {
      label: 'Home',
      href: '/dashboard/home',
      icon: iconSideBar.iconHome,
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
    <div className="flex flex-col gap-2 px-4">
      {navItems.map(renderNavLink)}
    </div>
  );
}
