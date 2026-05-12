import React from 'react';
import { useCart } from '../../context/CartContext';
import './AddToCart.scss';

const AddToCart = ({ product }) => {
  const { addItem } = useCart();
  return (
    <button className="add-to-cart" onClick={() => addItem(product)}>
      Añadir al carrito
    </button>
  );
};

export default AddToCart;
