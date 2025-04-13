import { Product } from '../types/product';

export const initialProducts: Product[] = [
  {
    id: '1',
    name: 'Modern Laptop',
    description: 'High-performance laptop for professionals',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853',
    category: 'Electronics',
    rating: 4.5,
    inStock: true
  },
  {
    id: '2',
    name: 'Wireless Headphones',
    description: 'Premium noise-canceling headphones',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    category: 'Audio',
    rating: 5,
    inStock: true
  },
  {
    id: '3',
    name: 'Smart Watch',
    description: 'Feature-rich smartwatch with health tracking',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
    category: 'Wearables',
    rating: 3.5,
    inStock: false
  },
  {
    id: '4',
    name: 'Digital Camera',
    description: 'Professional-grade digital camera with 4K video',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32',
    category: 'Photography',
    rating: 4,
    inStock: true
  },
  {
    id: '5',
    name: 'Bluetooth Speaker',
    description: 'Portable waterproof speaker with amazing sound',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1',
    category: 'Audio',
    rating: 4.5,
    inStock: true
  },
  {
    id: '6',
    name: 'Gaming Console',
    description: 'Next-gen gaming console with 4K graphics',
    price: 499.99,
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3',
    category: 'Electronics',
    rating: 5,
    inStock: false
  }
];

export const categories = [
  'All',
  'Electronics',
  'Audio',
  'Wearables',
  'Photography'
];
