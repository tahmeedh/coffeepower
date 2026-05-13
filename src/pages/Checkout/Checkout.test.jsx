import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import Checkout from './Checkout';

const mockItems = [
  { id: 1, name: 'Café Panama', price: 25, quantity: 2, image: 'img.jpg' },
];

const mockCartValue = {
  items: mockItems,
  subtotal: 50,
  total: 54,
  clearCart: jest.fn(),
};

const renderCheckout = () =>
  render(
    <MemoryRouter>
      <CartContext.Provider value={mockCartValue}>
        <Checkout />
      </CartContext.Provider>
    </MemoryRouter>
  );

beforeEach(() => {
  jest.clearAllMocks();
});

test('shows loading state when form is submitted', async () => {
  global.fetch = jest.fn(() => new Promise(() => {})); // never resolves

  renderCheckout();

  fireEvent.change(screen.getByPlaceholderText('Nombre completo'), { target: { value: 'Juan García', name: 'nombre' } });
  fireEvent.change(screen.getByPlaceholderText('Correo electrónico'), { target: { value: 'juan@test.com', name: 'email' } });
  fireEvent.change(screen.getByPlaceholderText('Móvil'), { target: { value: '612345678', name: 'movil' } });
  fireEvent.change(screen.getByPlaceholderText('Calle, #'), { target: { value: 'Calle Mayor 1', name: 'calle' } });
  fireEvent.change(screen.getByPlaceholderText('Código Postal'), { target: { value: '28001', name: 'postal' } });
  fireEvent.change(screen.getByDisplayValue('Comunidad autónoma'), { target: { value: 'Comunidad de Madrid', name: 'comunidad' } });
  fireEvent.change(screen.getByDisplayValue('Provincia'), { target: { value: 'Madrid', name: 'provincia' } });

  fireEvent.click(screen.getByText('PAGAR AHORA'));

  await waitFor(() => expect(screen.getByText('Procesando...')).toBeInTheDocument());
});

test('shows error message when API call fails', async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({ ok: false, json: () => Promise.resolve({ error: 'Stripe error' }) })
  );

  renderCheckout();

  fireEvent.change(screen.getByPlaceholderText('Nombre completo'), { target: { value: 'Juan García', name: 'nombre' } });
  fireEvent.change(screen.getByPlaceholderText('Correo electrónico'), { target: { value: 'juan@test.com', name: 'email' } });
  fireEvent.change(screen.getByPlaceholderText('Móvil'), { target: { value: '612345678', name: 'movil' } });
  fireEvent.change(screen.getByPlaceholderText('Calle, #'), { target: { value: 'Calle Mayor 1', name: 'calle' } });
  fireEvent.change(screen.getByPlaceholderText('Código Postal'), { target: { value: '28001', name: 'postal' } });
  fireEvent.change(screen.getByDisplayValue('Comunidad autónoma'), { target: { value: 'Comunidad de Madrid', name: 'comunidad' } });
  fireEvent.change(screen.getByDisplayValue('Provincia'), { target: { value: 'Madrid', name: 'provincia' } });

  fireEvent.click(screen.getByText('PAGAR AHORA'));

  await waitFor(() =>
    expect(screen.getByText('Error al procesar el pago. Inténtalo de nuevo.')).toBeInTheDocument()
  );
  expect(screen.getByText('PAGAR AHORA')).not.toBeDisabled();
});
