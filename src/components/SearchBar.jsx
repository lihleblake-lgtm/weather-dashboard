const SearchBar = ({ value, onChange, onSearch }) => {
  return (
    <div className="mb-6 text-center">
      <input
        type="text"
        placeholder="Search city"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="px-4 py-3 w-full md:w-1/2 rounded-full shadow border"
      />
      <button
        onClick={onSearch}
        className="mt-4 px-6 py-2 bg-white rounded-full shadow"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;

