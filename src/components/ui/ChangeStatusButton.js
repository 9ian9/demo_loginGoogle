'use client';
import { useState, useEffect } from 'react';
import { iconDetailPosition } from '../../../public/icon/iconDetailPosition';

export function ChangeStatusButton({ onchange, statusData }) {
  const [status, setStatus] = useState(statusData);

  useEffect(() => {
    setStatus(statusData);
  }, [statusData]);
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-sm px-3 py-1.5 gap-2 rounded-[9999] bg-[#374151]"
      >
        <span className="text-white font-medium text-xs">{status}</span>
        {iconDetailPosition.iconChangeStatus}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-1 w-25 p-2 shadow-sm"
      >
        <li>
          <a
            onClick={() => {
              setStatus('Open');
              onchange('Open');
            }}
          >
            Open
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              setStatus('Pending');
              onchange('Pending');
            }}
          >
            Pending
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              setStatus('Closed');
              onchange('Closed');
            }}
          >
            Closed
          </a>
        </li>
      </ul>
    </div>
  );
}
