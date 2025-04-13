export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating?: number; // Optional rating from 1-5
  inStock?: boolean; // Whether the product is in stock
}
