import { useState } from 'react';
import { Product } from '../types/product';
import EditProductModal from './EditProductModal';

interface ProductCardProps {
  product: Product;
  onDelete: (id: string) => void;
  onUpdate: (product: Product) => void;
}

const ProductCard = ({ product, onDelete, onUpdate }: ProductCardProps) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover cursor-pointer"
        onClick={() => setIsEditModalOpen(true)}
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <p className="text-2xl font-bold text-blue-600 mt-2">${product.price}</p>
        <button
          onClick={() => onDelete(product.id)}
          className="mt-4 w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Delete
        </button>
      </div>
      <EditProductModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        product={product}
        onUpdate={onUpdate}
      />
    </div>
  );
};

export default ProductCard;
