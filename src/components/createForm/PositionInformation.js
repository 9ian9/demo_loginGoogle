'use client'

import { useState } from "react";
import { InputFieldset } from "./InputFieldset";
import { SelectItem } from "./SelectItem";
function PositionInformation({data}){
    const [jobTitle, setJobTitle] = useState('');
    const [status, setStatus] = useState('');
    const [level, setLevel] = useState('');
    const [numberOfPositions, setNumberOfPositions] = useState('');
    const [location, setLocation] = useState('');
    const [deadline, setDeadline] = useState('');
    const [jobDescription, setJobDescription] = useState('');

    const statusData = {
        title: 'Status',
        options:['Open', 'Pending', 'Closed']
    };
    const levelData = {
        title: 'Level',
        options: ['Intern', 'Fresher', 'Junior', 'Middle', 'Senior', 'Lead', 'Manager', 'Director']
    };
    const loactionData = {
        title: 'Locations',
        options: ['Viet Nam', 'The United States', 'New Zealand', 'Japan', 'Other']
    }
    return(
        <div className="px-8 flex flex-col gap-4 w-full max-w-[720px]">
            <div className="flex flex-col gap-2 items-center">
                <p className="text-2xl">General Information</p>
                <InputFieldset className="px-4 py-3.5" title={'Job title'}  onChange={(value) => setJobTitle(value)} />
                <SelectItem data={statusData} onChange={(value) => setStatus(value)} />
                <div className="flex gap-8">
                    <SelectItem data={levelData} onChange={(value) => setLevel(value)} />
                    <InputFieldset className="px-4 py-3.5" title={'Number of position'} onChange={(value) => setNumberOfPositions(value)} />
                </div>
                <div className="flex gap-8">
                    <SelectItem data={loactionData} onChange={(value) => setLocation(value)} />
                    <InputFieldset className="px-4 py-3.5" title={'Deadline'} onChange={(value) => setDeadline(value)} />
                </div>
            </div>
            <div className="flex flex-col gap-4 w-180">
                <p className="text-2xl">General Information</p>
                <input type="text" className="input h-80" placeholder="Type here" onChange={(value) => setJobDescription(value)} />
            </div>
        </div>
    );
}
export default PositionInformation;