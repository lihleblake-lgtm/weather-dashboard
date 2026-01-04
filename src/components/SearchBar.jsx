const SearchBar = ({ city, setCity, onSearch }) => {
  return (
    <div className="flex gap-2 mt-4">
      <input
        type="text"
        placeholder="Search city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="flex-1 p-2 rounded-lg border"
      />
      <button
        onClick={onSearch}
        className="bg-orange-400 text-white px-4 rounded-lg"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
