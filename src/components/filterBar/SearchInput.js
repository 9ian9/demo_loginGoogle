function SearchInput({onChange}){
    return(
        <label className="input input-sm focus-within:border-gray-300 focus-within:outline-none focus-within:ring-gray-300 rounded-lg"
        onChange={(e) => onChange(e.target.value)}
        >
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
                >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
                </g>
            </svg>
            <input type="search" className="grow" placeholder="Search" />
        </label>
    )
}
export default SearchInput;