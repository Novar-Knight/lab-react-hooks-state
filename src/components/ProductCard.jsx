import React from "react";
import { useState } from "react";
import styles from "../styles/ProductCard.module.css";

const ProductCard = ({ product, addToCart }) => {
  const [addedToCart, setAddedToCart] = useState(false);

  function handleAddToCart() {

    setAddedToCart(true);

    if (addToCart) addToCart(product);
  }
  return (
    <div
      className={`${styles.card} ${!product.inStock ? styles.outOfStock : ""}`}
    >
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>Status: {product.inStock ? "In Stock" : "Out of Stock"}</p>

      {/* TODO: Implement Add to Cart button functionality*/ }   
      <button onClick={handleAddToCart} data-testid={"product-" + product.id}>
        {addedToCart ? "Added to Cart" : "Add to Cart"}
      </button>
    </div>
  

  );
};

export default ProductCard;
