function LocationSelect({ onChange }) {
    const options = [
        { id: 1, name: 'Viet Nam' },
        { id: 2, name: ' The United States' },
        { id: 3, name: 'New Zealand'},
        { id: 4, name: 'Japan'},
        { id: 5, name: 'Other'}
    ];

    return (
        <select
            defaultValue=""
            className="select h-8 w-26 px-4 border-[#D1D5DB] rounded-md focus-within:border-[#D1D5DB] focus-within:outline-none focus-within:ring-gray-300"
            onChange={(e) => onChange(e.target.value)}
        >
            <option value="" disabled>Location</option>
            {options.map((option) => (
                <option key={option.id} value={option.name}>
                    {option.name}
                </option>
            ))}
        </select>
    );
}

export default LocationSelect;
