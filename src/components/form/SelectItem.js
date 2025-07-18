export function SelectItem({
  label,
  keyObject,
  options,
  valueInput,
  onChange,
}) {
  return (
    <fieldset className="fieldset w-full">
      <p className="text-sm">{label}</p>
      <select
        value={valueInput}
        name={keyObject}
        className="select w-full px-4 border-[#D1D5DB] rounded-md focus-within:border-[#D1D5DB] focus-within:outline-none focus-within:ring-gray-300"
        onChange={(e) => onChange(keyObject, e.target.value)}
      >
        {options.map((option, index) => (
          <option key={`${option}-${index}`} value={option}>
            {option}
          </option>
        ))}
      </select>
    </fieldset>
  );
}
