function StatusSelect({ onChange }) {
    const options = [
        { id: 1, name: 'Open' },
        { id: 2, name: 'Pending' },
        { id: 3, name: 'Closed' }
    ];

    return (
        <select
            defaultValue=""
            className="select h-8 w-23 border-[#D1D5DB] rounded-md focus-within:border-[#D1D5DB] focus-within:outline-none focus-within:ring-gray-300"
            onChange={(e) => onChange(e.target.value)}
        >
            <option value="" disabled>Status</option>
            {options.map((option) => (
                <option key={option.id} value={option.name}>
                    {option.name}
                </option>
            ))}
        </select>
    );
}

export default StatusSelect;
