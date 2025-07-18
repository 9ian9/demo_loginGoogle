export function InputFieldset({
  type,
  label,
  keyObject,
  valueInput,
  placeHolder = 'Type here',
  onChange,
}) {
  return (
    <fieldset className="fieldset w-full">
      <p className="text-xs">{label}</p>
      <input
        type={type}
        name={keyObject}
        value={valueInput}
        className="input w-full px-4 py-3.5 border-[#D1D5DB] rounded-md focus-within:border-[#D1D5DB] focus-within:outline-none focus-within:ring-gray-300"
        placeholder={placeHolder}
        onChange={(e) => onChange(keyObject, e.target.value)}
      />
    </fieldset>
  );
}
