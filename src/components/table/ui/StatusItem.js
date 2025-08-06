'use client';

const statusClasses = {
  Open: 'badge badge-success badge-sm px-3 py-0.5',
  Closed: 'badge bg-[#374151] text-white badge-sm px-3 py-0.5',
  New: 'badge badge-outline badge-sm px-3 py-0.5 text-[#374151] border-[#374151]',
  Scan: 'badge badge-outline badge-sm px-3 py-0.5 text-[#4338CA] border-[#4338CA]',
  Rejected:
    'badge badge-outline badge-sm px-3 py-0.5 text-[#D1D5DB] border-[#D1D5DB]',
  'English interview':
    'badge badge-outline badge-sm px-3 py-0.5 text-[#4338CA] border-[#4338CA]',
  'Technical interview':
    'badge badge-outline badge-sm px-3 py-0.5 badge-warning',
  'CEO interview':
    'badge badge-outline badge-sm px-3 py-0.5 text-[#0EA5E9] border-[#0EA5E9]',
  Pass: 'badge badge-outline badge-sm px-3 py-0.5 text-[#4338CA] border-[#4338CA]',
  Fail: 'badge badge-outline badge-sm px-3 py-0.5 text-[#D1D5DB] border-[#D1D5DB]',
  Pending: 'badge badge-sm px-3 py-0.5 badge-warning text-white',
};

export function StatusItem({ status }) {
  const classStatus = statusClasses[status] || '';
  return <span className={classStatus}>{status}</span>;
}
