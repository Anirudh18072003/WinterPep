import React from "react";
import { useState } from "react";

export default function Shoppingcart() {
  const [cart, setCart] = useState([
    { id: 1, name: "Apple", price: 0.5, quantity: 3 },
    { id: 2, name: "Banana", price: 0.3, quantity: 5 },
    { id: 3, name: "Cherry", price: 1.0, quantity: 2 },
  ]);

  const addItem = () => {
    const newItem = { id: 4, name: "Orange", price: 0.8, quantity: 4 };
    setCart((prevCart) => [...prevCart, newItem]);
  };
  const updateQuantity = (id, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <>
      <h1>Shopping Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity} = $
            {(item.price * item.quantity).toFixed(2)}
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
              +
            </button>
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
              -
            </button>
          </li>
        ))}
      </ul>
      <button onClick={addItem}>Add Orange</button>
      <h2>
        Total: $
        {cart
          .reduce((total, item) => total + item.price * item.quantity, 0)
          .toFixed(2)}
      </h2>
    </>
  );
}
