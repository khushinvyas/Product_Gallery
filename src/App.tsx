import { useState } from 'react';
import { initialProducts } from './data/mockData';
import { Product } from './types/product';
import AddProductModal from './components/AddProductModal';
import ProductGrid from './components/ProductGrid';
import SearchBar from './components/SearchBar';

function App() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
