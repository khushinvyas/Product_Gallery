interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  popularity: number;
}

const mergedProducts: Product[] = originalProducts.map(product => {
  const newProductData = newProducts.find(newProduct => newProduct.id === product.id);
  return {
    ...product,
    rating: newProductData?.rating || 0,
    popularity: newProductData?.popularity || 0,
  };
});
