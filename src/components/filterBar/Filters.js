'use client';
import { useState, useEffect } from 'react';
import { iconFilter } from '../icon/iconFilter';

export default function Filters({ dataTable, keyValue, filter }) {
  const [selectedFilters, setSelectedFilters] = useState({});

  const getUniqueOptions = (key) => {
    return [...new Set(dataTable.map((item) => item[key]).filter(Boolean))];
  };

  const handleFilterClick = () => {
    filter(selectedFilters);
    console.log('selectedFilter ', selectedFilters);
  };

  const handleReset = () => {
    const reset = {};
    setSelectedFilters(reset);
    filter(reset);
    console.log(selectedFilters);
  };

  return (
    <div className="flex gap-2">
      {keyValue.map(({ key, label, index }) => {
        const options = getUniqueOptions(key);

        return (
          <select
            key={`${key}-${index}`}
            value={selectedFilters[key] || ''}
            className="select w-auto h-auto pr-10 px-4 border-[#D1D5DB] rounded-md focus-within:border-[#D1D5DB] focus-within:outline-none focus-within:ring-gray-300"
            onChange={(e) =>
              setSelectedFilters((prev) => ({
                ...prev,
                [key]: e.target.value,
              }))
            }
          >
            <option hidden>{label}</option>
            {options.map((option, index) => (
              <option key={`${option}-${index}`} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      })}

      <button
        className="btn btn-sm flex px-3 py-1.5 gap-2"
        onClick={handleFilterClick}
      >
        {iconFilter.iconSelect}
        <span className="text-sm font-medium">Filter</span>
      </button>

      <button
        className="btn btn-ghost btn-sm flex px-3 py-1.5"
        onClick={handleReset}
      >
        <p className="text-sm font-medium text-[#0C376C]">Reset</p>
      </button>
    </div>
  );
}
