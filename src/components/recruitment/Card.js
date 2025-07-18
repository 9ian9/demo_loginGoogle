'use client';
import Link from 'next/link';
import ItemCount from './ItemCount';

export default function Card() {
  return (
    <div className="flex gap-4 mx-[32px]">
      <CardItem
        title="All Candidates"
        href="/dashboard/recruitment/candidate"
        quantity={<ItemCount category={'totalCandidates'} />}
      />
      <CardItem
        title="Interview"
        href="/dashboard/recruitment/interview"
        quantity={<ItemCount category={'totalInterviews'} />}
      />
    </div>
  );
}

function CardItem({ title, quantity, href }) {
  return (
    <div className="border border-[#E5E7EB] shadow-xs rounded-xl w-full px-[16px] py-[12px]">
      <h2 className="text-base font-bold mb-[8px]">{title}</h2>
      <div className="flex justify-between items-end  ">
        <div className="text-2xl leading-10 font-bold">{quantity}</div>
        <Link href={href} className="text-[#0C376C]">
          View All
        </Link>
      </div>
    </div>
  );
}
