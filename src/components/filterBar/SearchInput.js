import { iconFilter } from '../../../public/icon/iconFilter';

function SearchInput({ onChange }) {
  return (
    <label
      className="input input-sm focus-within:border-gray-300 focus-within:outline-none focus-within:ring-gray-300 rounded-lg"
      onChange={(e) => onChange(e.target.value)}
    >
      {iconFilter.iconSearch}
      <input type="search" className="grow" placeholder="Search" />
    </label>
  );
}
export default SearchInput;
