import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './CheckoutSuccess.scss';

const CheckoutSuccess = () => {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="checkout-success">
      <div className="checkout-success__block">
        <div className="checkout-success__icon">✅</div>
        <h1 className="checkout-success__title">¡Pedido confirmado!</h1>
        <p className="checkout-success__message">
          Gracias por tu compra. Recibirás un correo de confirmación con los detalles de tu pedido.
        </p>
        <p className="checkout-success__sub">
          Entrega estimada: 24-48h según tu ubicación.
        </p>
        <Link to="/" className="checkout-success__btn">
          Volver a la tienda
        </Link>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
