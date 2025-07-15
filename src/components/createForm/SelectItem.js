export function SelectItem({data, onChange}){
    return(
        <fieldset className="fieldset">
            <legend className="fieldset-legend">{data.title}</legend>
            <select defaultValue="" className="select px-4 border-[#D1D5DB] rounded-md focus-within:border-[#D1D5DB] focus-within:outline-none focus-within:ring-gray-300"
                onChange={(e) => onChange(e.target.value)}>
                <option value="" disabled>{data.title}</option>
                {data.options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </fieldset>
    );
}