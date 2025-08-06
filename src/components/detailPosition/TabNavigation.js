'use client';

import { useState } from 'react';
import DetailInformation from './tabContentSections/DetailInformation';
import ApplyForm from './tabContentSections/ApplyForm';
import Candidates from './tabContentSections/Candidates';
import Interview from './tabContentSections/Interview';
import Completed from './tabContentSections/Completed';

function Tabs({ data, id }) {
  const [selectedTab, setSelectedTab] = useState(1);

  const renderTabContent = () => {
    switch (selectedTab) {
      case 1:
        return <DetailInformation data={data} />;
      case 2:
        return <ApplyForm jobId={id} />;
      case 3:
        return <Candidates id={id} />;
      case 4:
        return <Interview id={id} />;
      case 5:
        return <Completed id={id} />;
      default:
        return <DetailInformation data={data} />;
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="relative px-8">
        <div className="absolute left-8 right-8 bottom-0 h-[2px] bg-gray-200 z-0" />
        <div className="flex gap-8 relative z-10 pl-3">
          {[
            'Detail Information',
            'Apply form',
            'Candidates',
            'Interview',
            'Completed',
          ].map((label, idx) => (
            <button
              key={label}
              className={`pb-2 transition-all duration-150 text-sm font-medium border-b-2 ${
                selectedTab === idx + 1
                  ? 'border-gray-800 text-gray-900'
                  : 'border-transparent text-gray-500 hover:text-gray-800'
              }`}
              onClick={() => setSelectedTab(idx + 1)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto px-8 py-4">
        {renderTabContent()}
      </div>
    </div>
  );
}

export default Tabs;
