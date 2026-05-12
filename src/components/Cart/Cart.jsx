import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart, SHIPPING } from '../../context/CartContext';
import './Cart.scss';

const Cart = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, total } = useCart();
  const navigate = useNavigate();

  const handleFinalize = () => {
    setIsOpen(false);
    navigate('/checkout');
  };

  return (
    <>
      {isOpen && <div className="cart-overlay" onClick={() => setIsOpen(false)} />}
      <div className={`cart ${isOpen ? 'cart--open' : ''}`}>
        <div className="cart__header">
          <h2 className="cart__title">Resumen De Tu Experiencia:</h2>
          <button className="cart__close" onClick={() => setIsOpen(false)}>✕</button>
        </div>

        <div className="cart__items">
          {items.length === 0 && (
            <p className="cart__empty">Tu carrito está vacío</p>
          )}
          {items.map(item => (
            <div className="cart__item" key={item.id}>
              <img className="cart__item-img" src={item.image} alt={item.name} />
              <div className="cart__item-info">
                <p className="cart__item-name">{item.name}</p>
                <div className="cart__item-qty">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <p className="cart__item-price">€ {item.price * item.quantity}</p>
              </div>
              <button className="cart__item-remove" onClick={() => removeItem(item.id)}>✕</button>
            </div>
          ))}
        </div>

        <div className="cart__footer">
          <div className="cart__summary-row">
            <span>Subtotal</span>
            <span>€ {subtotal}</span>
          </div>
          <div className="cart__summary-row">
            <span>Gastos de envío</span>
            <span>€ {items.length > 0 ? SHIPPING : 0}</span>
          </div>
          <div className="cart__summary-row cart__summary-row--total">
            <span>Total</span>
            <span>€ {total}</span>
          </div>
          <button
            className="cart__btn"
            onClick={handleFinalize}
            disabled={items.length === 0}
          >
            FINALIZAR COMPRA
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
