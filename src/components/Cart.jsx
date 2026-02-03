import React from "react";

const Cart = ({ items }) => {
  return (
    <div
      style={{ border: "1px solid black", padding: "10px", marginTop: "10px" }}
    >
      <h2>Shopping Cart({items.length} items)</h2>
      if (items.length === 0) {<p>Your cart is empty.</p>}
      <ul>
        {/* TODO: Include items here in li tags with text 'ITEM.NAME is in your cart.' */}
        {items.map((item) => (
          <li key={item.id}>{item.name} is in your cart.</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
