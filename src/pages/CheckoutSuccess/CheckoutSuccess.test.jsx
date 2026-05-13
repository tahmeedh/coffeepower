import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import CheckoutSuccess from './CheckoutSuccess';

test('renders success message and calls clearCart on mount', () => {
  const clearCart = jest.fn();
  render(
    <MemoryRouter>
      <CartContext.Provider value={{ clearCart }}>
        <CheckoutSuccess />
      </CartContext.Provider>
    </MemoryRouter>
  );

  expect(screen.getByText(/pedido confirmado/i)).toBeInTheDocument();
  expect(clearCart).toHaveBeenCalledTimes(1);
});

test('renders link back to home', () => {
  render(
    <MemoryRouter>
      <CartContext.Provider value={{ clearCart: jest.fn() }}>
        <CheckoutSuccess />
      </CartContext.Provider>
    </MemoryRouter>
  );

  expect(screen.getByRole('link', { name: /volver/i })).toBeInTheDocument();
});
