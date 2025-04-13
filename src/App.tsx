import React, { useState } from 'react';
import { initialProducts } from './data/mockData';

import { Product } from './types/product';
import AddProductModal from './components/AddProductModal';
import ProductGrid from './components/ProductGrid';
import SearchBar from './components/SearchBar';

function App() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [sortOption, setSortOption] = useState('');

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortOption === 'price') {
        return a.price - b.price;
      } else if (sortOption === 'rating') {
        return b.rating - a.rating; // Higher rating first
      } else if (sortOption === 'popularity') {
        return b.popularity - a.popularity; // More popular first
      }
      return 0;
    });
    

  const handleAddProduct = (newProduct: Product) => {
    setProducts([...products, newProduct]);
    setAddModalOpen(false);
  };

  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleUpdateProduct = (updatedProduct: Product) => {
    setProducts(
      products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  const handleSortChange = (sortOption: string) => {
    setSortOption(sortOption); // Update the sort option when the user selects one
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query); // Update the search query
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Product Gallery</h1>
          <button
            onClick={() => setAddModalOpen(true)}
            className="bg-blue-600 px-4 py-2 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Add Product
          </button>
        </div>

        {/* Pass onSearch and onSortChange to SearchBar */}
        <SearchBar
          onSearch={handleSearchChange}
          onSortChange={handleSortChange}
        />

        <ProductGrid
          products={filteredProducts}
          onDelete={handleDeleteProduct}
          onUpdate={handleUpdateProduct}
        />
      </div>

      <AddProductModal
        isOpen={isAddModalOpen}
        onClose={() => setAddModalOpen(false)}
        onAdd={handleAddProduct}
      />
    </div>
  );
}

export default App;
