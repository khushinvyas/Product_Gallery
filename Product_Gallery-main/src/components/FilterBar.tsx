import { useState, useEffect } from 'react';
import { categories } from '../data/mockData';

interface FilterBarProps {
  onCategoryChange: (category: string) => void;
  onPriceRangeChange: (minPrice: number, maxPrice: number) => void;
  onRatingChange: (rating: number) => void;
  onAvailabilityChange: (inStock: boolean | null) => void;
  minProductPrice: number;
  maxProductPrice: number;
}

const FilterBar = ({
  onCategoryChange,
  onPriceRangeChange,
  onRatingChange,
  onAvailabilityChange,
  minProductPrice,
  maxProductPrice
}: FilterBarProps) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState<[number, number]>([minProductPrice, maxProductPrice]);
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [selectedAvailability, setSelectedAvailability] = useState<boolean | null>(null);
  
  useEffect(() => {
    setPriceRange([minProductPrice, maxProductPrice]);
  }, [minProductPrice, maxProductPrice]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMinPrice = Number(e.target.value);
    if (newMinPrice <= priceRange[1]) {
      setPriceRange([newMinPrice, priceRange[1]]);
      onPriceRangeChange(newMinPrice, priceRange[1]);
    }
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMaxPrice = Number(e.target.value);
    if (newMaxPrice >= priceRange[0]) {
      setPriceRange([priceRange[0], newMaxPrice]);
      onPriceRangeChange(priceRange[0], newMaxPrice);
    }
  };

  const handleRatingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const rating = Number(e.target.value);
    setSelectedRating(rating);
    onRatingChange(rating);
  };

  const handleAvailabilityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    let availability: boolean | null = null;
    
    if (value === 'true') availability = true;
    else if (value === 'false') availability = false;
    
    setSelectedAvailability(availability);
    onAvailabilityChange(availability);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <h2 className="text-lg font-semibold mb-3">Filter Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min={minProductPrice}
              max={priceRange[1]}
              value={priceRange[0]}
              onChange={handleMinPriceChange}
              className="w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
            <span>to</span>
            <input
              type="number"
              min={priceRange[0]}
              max={maxProductPrice}
              value={priceRange[1]}
              onChange={handleMaxPriceChange}
              className="w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
          <select
            value={selectedRating}
            onChange={handleRatingChange}
            className="w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value={0}>Any Rating</option>
            <option value={1}>1+ Stars</option>
            <option value={2}>2+ Stars</option>
            <option value={3}>3+ Stars</option>
            <option value={4}>4+ Stars</option>
            <option value={5}>5 Stars</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Availability</label>
          <select
            value={selectedAvailability === null ? '' : String(selectedAvailability)}
            onChange={handleAvailabilityChange}
            className="w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">All Items</option>
            <option value="true">In Stock</option>
            <option value="false">Out of Stock</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;