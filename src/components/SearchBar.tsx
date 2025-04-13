interface SearchBarProps {
  onSearch: (query: string) => void;
  onSortChange: (sortBy: string) => void;
}

const SearchBar = ({ onSearch, onSortChange }: SearchBarProps) => {
  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => onSearch(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <select
        onChange={(e) => onSortChange(e.target.value)}
        className="ml-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Sort by</option>
        <option value="name">Name</option>
        <option value="priceLow">Price: Low to High</option>
        <option value="priceHigh">Price: High to Low</option>
      </select>
    </div>
  );
};
