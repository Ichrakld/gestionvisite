// src/pages/CartPage.jsx
import React from 'react';
import { useCart } from '../context/CartContext';
import './CartPage.css';

const CartPage = () => {
  const { cartItems, removeFromCart, total, clearCart } = useCart();

  if (cartItems.length === 0) {
    return <p>Votre panier est vide.</p>;
  }

  return (
    <div className="cart-page">
      <h1>Mes réservations</h1>
      <ul className="cart-list">
        {cartItems.map(item => (
          <li key={item.id} className="cart-item">
            <span>{item.title}</span>
            <span>{item.price.toFixed(2)} €</span>
            <button onClick={() => removeFromCart(item.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <div className="cart-summary">
        <p>Total : <strong>{total.toFixed(2)} €</strong></p>
        <button onClick={clearCart}>Vider le panier</button>
        <button onClick={() => alert('Fonction paiement à implémenter')}>Payer maintenant</button>
      </div>
    </div>
  );
};

export default CartPage;
