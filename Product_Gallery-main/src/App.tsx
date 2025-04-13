import { useState, useEffect } from 'react';
import { initialProducts } from './data/mockData';
import { Product } from './types/product';
import AddProductModal from './components/AddProductModal';
import ProductGrid from './components/ProductGrid';
import SearchBar from './components/SearchBar';
import FilterBar from './components/FilterBar';

function App() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [minMaxPrice, setMinMaxPrice] = useState<[number, number]>([0, 2000]);
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [selectedAvailability, setSelectedAvailability] = useState<boolean | null>(null);

  useEffect(() => {
    // Calculate min and max prices from products
    if (products.length > 0) {
      const prices = products.map(product => product.price);
      const minPrice = Math.floor(Math.min(...prices));
      const maxPrice = Math.ceil(Math.max(...prices));
      setMinMaxPrice([minPrice, maxPrice]);
      setPriceRange([minPrice, maxPrice]);
    }
  }, [products]);

  const filteredProducts = products.filter(product => {
    // Filter by search query
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by category
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    
    // Filter by price range
    const matchesPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    // Filter by rating
    const matchesRating = selectedRating === 0 || (product.rating !== undefined && product.rating >= selectedRating);
    
    // Filter by availability
    const matchesAvailability = selectedAvailability === null || product.inStock === selectedAvailability;
    
    return matchesSearch && matchesCategory && matchesPriceRange && matchesRating && matchesAvailability;
  });

  const handleAddProduct = (newProduct: Product) => {
    setProducts([...products, newProduct]);
    setIsAddModalOpen(false);
  };

  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleUpdateProduct = (updatedProduct: Product) => {
    setProducts(products.map(product =>
      product.id === updatedProduct.id ? updatedProduct : product
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Product Gallery</h1>
          <div className="flex gap-4">
            <SearchBar onSearch={setSearchQuery} />
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Add Product
            </button>
          </div>
        </div>
        <FilterBar 
          onCategoryChange={setSelectedCategory}
          onPriceRangeChange={(min, max) => setPriceRange([min, max])}
          onRatingChange={setSelectedRating}
          onAvailabilityChange={setSelectedAvailability}
          minProductPrice={minMaxPrice[0]}
          maxProductPrice={minMaxPrice[1]}
        />
        <ProductGrid
          products={filteredProducts}
          onDelete={handleDeleteProduct}
          onUpdate={handleUpdateProduct}
        />
        <AddProductModal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          onAdd={handleAddProduct}
        />
      </div>
    </div>
  );
}

export default App;
