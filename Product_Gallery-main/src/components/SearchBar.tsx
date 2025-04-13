const SearchBar = ({ onSearch }) => {
  return (
    <div className="flex gap-4">
      <input
        type="text"
        placeholder="Search products"
        onChange={(e) => onSearch(e.target.value)}
        className="p-2 border rounded"
      />
    </div>
  );
};

export default SearchBar;
