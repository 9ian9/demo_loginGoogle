export function SelectItem({ data, onChange }) {
  return (
    <fieldset className="fieldset w-full">
      <p className="text-sm">{data.title}</p>
      <select
        defaultValue=""
        className="select w-full px-4 border-[#D1D5DB] rounded-md focus-within:border-[#D1D5DB] focus-within:outline-none focus-within:ring-gray-300"
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" disabled>
          {data.title}
        </option>
        {data.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </fieldset>
  );
}
