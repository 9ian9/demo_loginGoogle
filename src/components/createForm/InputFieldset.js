export function InputFieldset({title, onChange}){
    return(
        <fieldset className="fieldset border-[#D1D5DB] rounded-md focus-within:border-[#D1D5DB] focus-within:outline-none focus-within:ring-gray-300">
            <legend className="fieldset-legend">{title}</legend>
            <input type="text" className="input w-full" placeholder="Type here" onChange={(e) => onChange?.(e.target.value)} />
        </fieldset>
    )
}
