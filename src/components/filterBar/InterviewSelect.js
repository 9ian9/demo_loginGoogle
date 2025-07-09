function InterviewSelect({onChange}){
    const options = [
        { id: 1, name: 'English interview'},
        { id: 2, name: 'Technical interview'},
        { id: 3, name: 'CEO interview'}
    ];
    return(
        <select defaultValue="" className="select h-8 w-22 px-4 border-[#D1D5DB] rounded-md focus-within:border-[#D1D5DB] focus-within:outline-none focus-within:ring-gray-300"
            onChange={(e) => onChange(e.target.value)}>
            <option value="" disabled>Interviev</option>
            {options.map((option) => {
                <option key={option.id} value={option.name}>
                    {option.name}
                </option>
            })}
        </select>
    );
}
export default InterviewSelect;