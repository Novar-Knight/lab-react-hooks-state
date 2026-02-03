import React from "react";
import ProductCard from "./ProductCard";

// Sample product data (for display purposes only)
export const sampleProducts = [
  { id: 1, name: "Apple", price: "$1.00", category: "Fruits", inStock: true },
  { id: 2, name: "Milk", price: "$2.50", category: "Dairy", inStock: false },
];

const ProductList = ({ selectedCategory, addTocart }) => {
  const filteredProducts =
    selectedCategory === "All"
      ? sampleProducts
      : sampleProducts.filter(
          (product) => product.category === selectedCategory,
        );
  return (
    <div>
      <h2>Available Products</h2>
      
      {/* TODO: Filter sample data using selected category */}
      filteredProducts.length === 0 ? (
      <p>No products available in this category.</p>) : (
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} addTocart={addTocart} />
      ))}
    </div>
  );
};

export default ProductList;
