import React from "react";

const Cart = ({ cartItems }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Shopping Cart ({cartItems.length})</h2>

      {/* Show message when cart is empty */}
      {cartItems.length === 0 && <p>No items in cart.</p>}

      <ul>
        {/* TODO: Include items here in li tags with text 'ITEM.NAME is in your cart.' */}
        {cartItems.map((item, index) => (
          // TODO: Include items here in li tags with text 'ITEM.NAME is in your cart.'
          <li key={index}>{`${item.name} is in your cart.`}</li>
        ))}
      </ul>
    </div>
  )
}
  

export default Cart;
