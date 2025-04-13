import { Product } from '../types/product';

export const initialProducts: Product[] = [
  {
    id: '1',
    name: 'Modern Laptop',
    description: 'High-performance laptop for professionals',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853',
    rating: 4.7,
    popularity: 250
  },
  {
    id: '2',
    name: 'Wireless Headphones',
    description: 'Premium noise-canceling headphones',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    rating: 4.4,
    popularity: 180
  },
  {
    id: '3',
    name: 'Smart Watch',
    description: 'Feature-rich smartwatch with health tracking',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
    rating: 4.2,
    popularity: 140
  },
  {
    id: '4',
    name: 'Red Shirt',
    description: 'Stylish red shirt made from premium cotton',
    price: 20,
    image: 'https://images.unsplash.com/photo-1580316019430-0efdb20f79f6',
    rating: 4.5,
    popularity: 100
  },
  {
    id: '5',
    name: 'Blue Jeans',
    description: 'Comfortable and durable blue jeans',
    price: 35,
    image: 'https://images.unsplash.com/photo-1582727461540-9235cce9c46d',
    rating: 4.0,
    popularity: 70
  }
];
