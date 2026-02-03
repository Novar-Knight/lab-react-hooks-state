import React, { useState } from "react";
import ProductList from "./components/ProductList";
import DarkModeToggle from "./components/DarkModeToggle";
import Cart from "./components/Cart";
import "./App.css";

const App = () => {
  // TODO: Implement state for dark mode toggle
  const [isDarkMode, setIsDarkMode] = useState(false);

  // TODO: Implement state for cart management
  const [cartItems, setCartItems] = useState([]);

  // TODO: Implement state for category filtering
  const [selectedCategory, setSelectedCategory] = useState("all");
  //Function to handle adding a product to cart
  const handleAddToCart = (product) =>
    setCartItems((prev) => [...prev, product]);

  return (
    <div>
      
      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}

      <DarkModeToggle onToggle={setIsDarkMode} />
      <br />
      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList
        selectedCategory={selectedCategory}
        addToCart={handleAddToCart}
      />

      {/* TODO: Implement and render Cart component */}
      <Cart cartItems={cartItems} />
    </div>
  

  );
};

export default App;
