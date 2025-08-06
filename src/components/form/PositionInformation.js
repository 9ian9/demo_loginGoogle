'use client';
import { useEffect, useState } from 'react';
import { InputFieldset } from './InputFieldset';
import { SelectItem } from './SelectItem';
const selectOptions = {
  status: ['Open', 'Pending', 'Closed'],
  level: [
    'Intern',
    'Fresher',
    'Junior',
    'Middle',
    'Senior',
    'Lead',
    'Manager',
    'Director',
  ],
  location: ['Viet Nam', 'The United States', 'New Zealand', 'Japan', 'Other'],
};

export default function PositionInformation({
  initialDataForm = {},
  category,
  onSubmit,
  onCancel,
}) {
  const isCreateMode = category?.toLowerCase() === 'create';

  const [dataForm, setDataForm] = useState({
    title: '',
    location: selectOptions.location[0],
    level: selectOptions.level[0],
    numberOfPositions: '',
    status: selectOptions.status[0],
    deadline: '',
    description: '',
  });

  const [changedData, setChangedData] = useState({});

  useEffect(() => {
    if (initialDataForm && Object.keys(initialDataForm).length > 0) {
      const { deadline, ...rest } = initialDataForm;

      const formattedDeadline = deadline
        ? new Date(deadline).toISOString().split('T')[0]
        : '';

      setDataForm((prev) => ({
        ...prev,
        ...rest,
        deadline: formattedDeadline,
      }));
    }
  }, [initialDataForm]);

  const handleOnChange = (keyObject, inputValue) => {
    setDataForm((prev) => ({
      ...prev,
      [keyObject]: inputValue,
    }));
    if (!isCreateMode) {
      setChangedData((prev) => ({
        ...prev,
        [keyObject]: inputValue,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSubmit = category === 'Create' ? dataForm : changedData;
    onSubmit(dataToSubmit);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    onCancel();
  };

  return (
    <form
      className="flex flex-col items-center justify-center px-8 w-[720px]"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="flex flex-col gap-2 w-full max-w-[720px]">
        <div className="flex flex-col gap-2">
          <p className="text-xl font-semibold">General Information</p>
          <InputFieldset
            type="text"
            label="Job title"
            keyObject="title"
            valueInput={dataForm.title}
            onChange={handleOnChange}
            placeholder="Enter job title"
          />
          <SelectItem
            label="Status"
            keyObject="status"
            valueInput={dataForm.status}
            onChange={handleOnChange}
            options={selectOptions.status}
          />
          <div className="flex gap-8">
            <SelectItem
              label="Level"
              keyObject="level"
              valueInput={dataForm.level}
              onChange={handleOnChange}
              options={selectOptions.level}
            />
            <InputFieldset
              type="number"
              label="Number of position"
              keyObject="numberOfPositions"
              valueInput={dataForm.numberOfPositions || ''}
              onChange={handleOnChange}
              placeholder="Enter number of positions"
            />
          </div>
          <div className="flex gap-8">
            <SelectItem
              label="Locations"
              keyObject="location"
              valueInput={dataForm.location}
              onChange={handleOnChange}
              options={selectOptions.location}
            />
            <InputFieldset
              type="date"
              label="Deadline"
              keyObject="deadline"
              valueInput={dataForm.deadline || ''}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xl font-semibold">Job Description</p>
          <textarea
            required
            rows={5}
            className="flex-1 input w-full border-[#D1D5DB] rounded-md focus-within:border-[#D1D5DB] focus-within:outline-none focus-within:ring-gray-300"
            placeholder="Type here"
            value={dataForm.description}
            onChange={(e) => handleOnChange('description', e.target.value)}
          />
        </div>
        <div className="flex gap-1.5">
          <button
            className="btn bg-[#F3F4F6] px-3 py-1.5 rounded-lg text-black font-medium w-[65px]"
            onClick={(e) => handleCancel(e)}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn bg-[rgb(12,55,108)] px-3 py-1.5 rounded-lg text-[#fcfcfc] font-medium w-[65px]"
          >
            {category}
          </button>
        </div>
      </div>
    </form>
  );
}
