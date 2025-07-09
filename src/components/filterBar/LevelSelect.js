function LevelSelect({ onChange }) {
    const options = [
        { id: 1, name: 'Intern' },
        { id: 2, name: ' Fresher' },
        { id: 3, name: 'Junior'},
        { id: 4, name: 'Middle'},
        { id: 5, name: 'Senior'},
        { id: 6, name: 'Lead'},
        { id: 7, name: 'Manager'},
        { id: 8, name: 'Director'}
    ];

    return (
        <select
            defaultValue=""
            className="select h-8 w-22 px-4 border-[#D1D5DB] rounded-md focus-within:border-[#D1D5DB] focus-within:outline-none focus-within:ring-gray-300"
            onChange={(e) => onChange(e.target.value)}
        >
            <option value="" disabled>Level</option>
            {options.map((option) => (
                <option key={option.id} value={option.name}>
                    {option.name}
                </option>
            ))}
        </select>
    );
}

export default LevelSelect;
