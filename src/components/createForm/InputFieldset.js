export function InputFieldset({ title, onChange }) {
  return (
    <fieldset className="fieldset w-full">
      <p className="text-sm">{title}</p>
      <input
        type="text"
        className="input w-full border-[#D1D5DB] rounded-md focus-within:border-[#D1D5DB] focus-within:outline-none focus-within:ring-gray-300"
        placeholder="Type here"
        onChange={(e) => onChange?.(e.target.value)}
      />
    </fieldset>
  );
}
