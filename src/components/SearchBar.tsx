// src/components/SearchBar.tsx

import React from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onSortChange: (sortOption: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onSortChange }) => {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSortChange(event.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for products"
        onChange={handleSearchChange}
        className="search-input"
      />
      <select onChange={handleSortChange} className="sort-dropdown">
  <option value="">Sort by</option>
  <option value="name">Name</option>
  <option value="price">Price</option>
  <option value="rating">Rating</option>
  <option value="popularity">Popularity</option>
</select>

    </div>
  );
};

export default SearchBar;
