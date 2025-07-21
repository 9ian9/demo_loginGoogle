'use client';

import { useState } from 'react';
import DetailInformation from './DetailInformation';
import ApplyForm from './ApplyForm';
import Candidates from './Candidates';
import Interview from './Interview';
import Completed from './Completed';

function Tabs({ data }) {
  const [selectedTab, setSelectedTab] = useState(1);

  const renderTabContent = () => {
    switch (selectedTab) {
      case 1:
        return <DetailInformation data={data} />;
      case 2:
        return <ApplyForm data={data} />;
      case 3:
        return <Candidates data={data} />;
      case 4:
        return <Interview data={data} />;
      case 5:
        return <Completed data={data} />;
      default:
        return <DetailInformation data={data} />;
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="relative px-8">
        <div className="absolute left-8 right-8 bottom-0 h-[2px] bg-gray-200 z-0" />
        <div className="flex gap-8 relative z-10 pl-3">
          {['Detail Information', 'Apply form', 'Candidates', 'Interview'].map(
            (label, idx) => (
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
            ),
          )}
        </div>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto px-8 py-4">
        {renderTabContent()}
      </div>
    </div>
  );
}

export default Tabs;
