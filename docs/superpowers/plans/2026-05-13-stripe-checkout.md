# Stripe Checkout + Firebase Removal Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove Firebase entirely and wire up real Stripe Checkout payments via a Vercel serverless function, making the app fully public (no auth).

**Architecture:** A Vercel API route (`api/create-checkout-session.js`) receives the cart and creates a Stripe Checkout Session server-side. The React frontend POSTs to it and redirects to Stripe's hosted checkout page. On success, Stripe redirects to `/checkout/success` which clears the cart.

**Tech Stack:** React 19 (CRA), Stripe Node SDK (server), Stripe Checkout (hosted), Vercel serverless functions, React Testing Library

---

## File Map

**Delete:**
- `src/config/firebase.js`
- `src/context/AuthContext.js`
- `src/components/ProtectedRoute/ProtectedRoute.jsx`
- `src/pages/LoginPage/` (entire directory)
- `src/pages/RegisterPage/` (entire directory)
- `src/pages/ProfilePage/` (entire directory)

**Create:**
- `api/create-checkout-session.js` — Vercel serverless function, creates Stripe Checkout Session
- `src/pages/CheckoutSuccess/CheckoutSuccess.jsx` — success page, clears cart on mount
- `src/pages/CheckoutSuccess/CheckoutSuccess.scss` — styles
- `vercel.json` — rewrites non-API routes to index.html for SPA routing

**Modify:**
- `package.json` — remove `firebase`, add `stripe`
- `src/index.js` — remove `AuthProvider` wrapper
- `src/components/DesktopHeader/DesktopHeader.jsx` — remove `useAuth` import and call
- `src/components/MobileHeader/MobileHeader.jsx` — remove `useAuth` import and call
- `src/pages/HomePage/HomePage.jsx` — remove `useAuth`, hardcode greeting
- `src/pages/SuscribePage/SuscribePage.jsx` — remove Firestore call, keep Brevo API call
- `src/pages/Checkout/Checkout.jsx` — add Stripe redirect logic with loading/error state
- `src/App.jsx` — remove auth routes/imports, add `/checkout/success` route

---

## Task 1: Swap dependencies — remove Firebase, add Stripe

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Remove firebase, add stripe**

Open `package.json` and make these changes to `"dependencies"`:
- Remove: `"firebase": "^11.4.0"`
- Add: `"stripe": "^17.7.0"`

The dependencies section should no longer contain any `firebase` entry and should include:
```json
"stripe": "^17.7.0"
```

- [ ] **Step 2: Install dependencies**

```bash
cd cofffepower-main && npm install
```

Expected: no errors, `node_modules/stripe` exists, `node_modules/firebase` is gone.

> **Note:** `src/config/firebase.js` is NOT deleted yet — it is still imported by components that will be cleaned up in Tasks 2–4. It will be deleted in Task 4 once all imports are removed. Tasks 1–3 commits will have broken builds; the first clean build checkpoint is after Task 4.

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: replace firebase with stripe dependency"
git push
```

---

## Task 2: Remove auth context, protected route, and AuthProvider wrapper

**Files:**
- Delete: `src/context/AuthContext.js`
- Delete: `src/components/ProtectedRoute/ProtectedRoute.jsx`
- Modify: `src/index.js`

- [ ] **Step 1: Delete auth context and protected route**

```bash
rm src/context/AuthContext.js
rm src/components/ProtectedRoute/ProtectedRoute.jsx
```

- [ ] **Step 2: Update src/index.js**

Replace the entire file with:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

- [ ] **Step 3: Commit**

```bash
git add src/index.js src/context/AuthContext.js src/components/ProtectedRoute/ProtectedRoute.jsx
git commit -m "chore: remove firebase auth context and protected route"
git push
```

---

## Task 3: Delete auth pages

**Files:**
- Delete: `src/pages/LoginPage/` (entire directory)
- Delete: `src/pages/RegisterPage/` (entire directory)
- Delete: `src/pages/ProfilePage/` (entire directory)

- [ ] **Step 1: Delete auth page directories**

```bash
rm -rf src/pages/LoginPage src/pages/RegisterPage src/pages/ProfilePage
```

- [ ] **Step 2: Commit**

```bash
git add -A
git commit -m "chore: remove login, register, and profile pages"
git push
```

---

## Task 4: Remove Firebase/Auth references from remaining components

**Files:**
- Modify: `src/components/DesktopHeader/DesktopHeader.jsx`
- Modify: `src/components/MobileHeader/MobileHeader.jsx`
- Modify: `src/pages/HomePage/HomePage.jsx`
- Modify: `src/pages/SuscribePage/SuscribePage.jsx`
- Modify: `src/App.jsx`

- [ ] **Step 1: Update DesktopHeader.jsx**

Remove the `useAuth` import and the `const { user } = useAuth()` call. Replace the top of the file so it reads:

```jsx
import React, { useContext } from 'react';
import './DesktopHeader.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-nuevo.png'
import cartIcon from '../../assets/images/cart.png'
import menuBtn2 from '../../assets/images/menu-2.png';
import menuBtn3 from '../../assets/images/menu-3.png';
import menuBtn4 from '../../assets/images/menu-4.png';
import whatsappBtn from '././../../assets/images/whatsapp.png'
import { useCart } from '../../context/CartContext';
import BackgroundMusic from '../BackgroundMusic/BackgroundMusic';
```

And update `MainNav` to remove the `useAuth` call:

```jsx
const MainNav = ({ fontColor }) => {
    return (
        <nav className='header-block__nav' >
            <BackgroundMusic/>
            {menuItems.map((item, index) => {
                return (
                    <Link
                        className='header-block__items'
                        to={item.url}
                        key={index}>
                        <img className='header-block__image' src={item.imgUrl} alt={item.label} />
                        <p style={{ color: fontColor }} className="header-block__label">{item.label}</p>
                    </Link>
                )
            })}
            <a className='header-block__items' href="https://wa.me/34620132131" target="_blank" rel="noopener noreferrer">
                <img className='header-block__image' src={whatsappBtn} alt="whatsapp" />
                <p className='header-block__label'>whatsapp</p>
            </a>
        </nav>
    )
}
```

- [ ] **Step 2: Update MobileHeader.jsx**

Remove the `useAuth` import and `const { user } = useAuth()` line. The top of the file should read:

```jsx
import React, { useContext, useState } from "react";
import "./MobileHeader.scss";
import { Link, NavLink } from "react-router-dom";
import logoImg from "../../assets/images/logo-nuevo.png"
import { Squeeze as Hamburger } from "hamburger-react";
import menuBtn2 from '../../assets/images/menu-2.png';
import menuBtn3 from '../../assets/images/menu-3.png';
import menuBtn4 from '../../assets/images/menu-4.png';
import whatsappBtn from '././../../assets/images/whatsapp.png'
import cartIcon from '../../assets/images/cart.png'
import { useCart } from "../../context/CartContext";
import BackgroundMusic from "../BackgroundMusic/BackgroundMusic";
```

And the component body starts with (remove `const { user } = useAuth();`):

```jsx
const MobileHeader = () => {
  const [open, setOpen] = useState(false);
  const { itemCount, setIsOpen: openCart } = useCart();
  const ubication = window.location.pathname;
```

- [ ] **Step 3: Update HomePage.jsx**

Replace the entire file with:

```jsx
import React, { useState, useEffect } from 'react';
import './HomePage.scss';
import animationPc from '../../assets/video/video-coffee-power-pc.mp4';
import animationMobile from '../../assets/video/home-movil.mp4';

const VideoComponent = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth <= 1075 ? animationMobile : animationPc);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 1075;
      setVideoSrc(isMobile ? animationMobile : animationPc);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="video-container">
      <video muted disablePictureInPicture loop autoPlay playsInline className="video-background">
        <source src={videoSrc} type="video/mp4" />
        Tu navegador no soporta videos.
      </video>
    </div>
  )
}

const HomePage = () => {
  return (
    <div className='home-page__container'>
      <VideoComponent />
    </div>
  )
}

export default HomePage
```

- [ ] **Step 4: Update SuscribePage.jsx**

Remove the Firestore imports and the `addDoc` call. Keep the Brevo API call. Replace `handleSubmit` with:

```jsx
const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('https://api.brevo.com/v3/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api-key': apiKey
            },
            body: JSON.stringify({
                email: formData.email,
                attributes: {
                    NOMBRE: formData.nombre,
                    APELLIDOS: formData.apellidos,
                    WHATSAPP: formData.telefono,
                    FECHA_NACIMIENTO: formData.fechaNacimiento,
                    sms: formData.telefono
                },
                listIds: [listId],
                updateEnabled: true
            })
        });

        if (response.ok) {
            setFormData({ nombre: '', apellidos: '', telefono: '', email: '', fechaNacimiento: '' });
            setMessage('✅ ¡Gracias por suscribirte! Revisa tu correo 😉');
            navigate('/suscribe/confirmation');
        } else {
            const error = await response.json();
            setMessage(`❌ Error: ${error.message || 'No se pudo registrar tu suscripción'}`);
        }
    } catch (error) {
        setMessage('❌ Error inesperado. Intenta de nuevo más tarde.');
    }
};
```

And update the imports at the top of `SuscribePage.jsx` to remove the Firebase lines:

```jsx
import React, { useState } from 'react';
import './SuscribePage.scss';
import { useNavigate } from 'react-router-dom';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
```

- [ ] **Step 5: Update App.jsx**

Remove these import lines:
```jsx
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
```

Remove these routes from the `<Routes>` block:
```jsx
<Route path='/registro' element={<RegisterPage />} />
<Route path="/login" element={<LoginPage />} />
<Route path="/perfil" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
```

- [ ] **Step 6: Delete firebase config and Firebase project files**

All Firebase imports have now been removed from every component. It is safe to delete the remaining Firebase files:

```bash
rm src/config/firebase.js
rm .firebaserc
rm firebase.json
```

- [ ] **Step 7: Verify the app builds**

```bash
npm run build
```

Expected: successful build with no errors referencing firebase, AuthContext, ProtectedRoute, LoginPage, RegisterPage, or ProfilePage.

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "chore: remove all firebase and auth references from components"
git push
```

---

## Task 5: Create Vercel serverless function and config

**Files:**
- Create: `api/create-checkout-session.js`
- Create: `vercel.json`

- [ ] **Step 1: Create the api directory and function**

Create `api/create-checkout-session.js`:

```javascript
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { items, customerEmail, origin } = req.body;

  if (!items || items.length === 0) {
    return res.status(400).json({ error: 'No items in cart' });
  }

  const lineItems = items.map(item => ({
    price_data: {
      currency: 'eur',
      product_data: {
        name: item.name,
        ...(item.image && { images: [item.image] }),
      },
      unit_amount: Math.round(item.price * 100),
    },
    quantity: item.quantity,
  }));

  lineItems.push({
    price_data: {
      currency: 'eur',
      product_data: { name: 'Envío Estándar (24-48h)' },
      unit_amount: 400,
    },
    quantity: 1,
  });

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      customer_email: customerEmail || undefined,
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout`,
    });

    res.status(200).json({ url: session.url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
```

- [ ] **Step 2: Create vercel.json**

Create `vercel.json` at the project root (`cofffepower-main/vercel.json`):

```json
{
  "rewrites": [
    { "source": "/((?!api/).*)", "destination": "/index.html" }
  ]
}
```

- [ ] **Step 3: Commit**

```bash
git add api/create-checkout-session.js vercel.json
git commit -m "feat: add vercel serverless function for stripe checkout session"
git push
```

---

## Task 6: Write test then update Checkout.jsx

**Files:**
- Create: `src/pages/Checkout/Checkout.test.jsx`
- Modify: `src/pages/Checkout/Checkout.jsx`

- [ ] **Step 1: Write the failing test**

Create `src/pages/Checkout/Checkout.test.jsx`:

```jsx
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
```

**Note:** `CartContext` must be exported as a named export. Check `src/context/CartContext.js` — if it only has `export const useCart`, add `export { CartContext }` or `export default CartContext`. The current file has `const CartContext = createContext()` — add `export { CartContext }` after that line.

- [ ] **Step 2: Export CartContext from CartContext.js**

In `src/context/CartContext.js`, change:
```js
const CartContext = createContext();
```
to:
```js
export const CartContext = createContext();
```

- [ ] **Step 3: Run the test to verify it fails**

```bash
npm test -- --testPathPattern=Checkout.test --watchAll=false
```

Expected: FAIL — "Procesando..." not found (button text doesn't change yet).

- [ ] **Step 4: Update Checkout.jsx with Stripe redirect logic**

Replace the entire `Checkout.jsx`:

```jsx
import React, { useState } from 'react';
import { useCart, SHIPPING } from '../../context/CartContext';
import './Checkout.scss';

const COMUNIDADES = [
  'Andalucía','Aragón','Asturias','Islas Baleares','Canarias','Cantabria',
  'Castilla-La Mancha','Castilla y León','Cataluña','Ceuta','Comunidad de Madrid',
  'Comunidad Valenciana','Extremadura','Galicia','La Rioja','Melilla','Murcia',
  'Navarra','País Vasco',
];

const PROVINCIAS = [
  'Álava','Albacete','Alicante','Almería','Asturias','Ávila','Badajoz',
  'Barcelona','Burgos','Cáceres','Cádiz','Cantabria','Castellón','Ciudad Real',
  'Córdoba','Cuenca','Gerona','Granada','Guadalajara','Guipúzcoa','Huelva',
  'Huesca','Islas Baleares','Jaén','La Coruña','La Rioja','Las Palmas',
  'León','Lérida','Lugo','Madrid','Málaga','Murcia','Navarra','Orense',
  'Palencia','Pontevedra','Salamanca','Santa Cruz de Tenerife','Segovia',
  'Sevilla','Soria','Tarragona','Teruel','Toledo','Valencia','Valladolid',
  'Vizcaya','Zamora','Zaragoza','Ceuta','Melilla',
];

const Checkout = () => {
  const { items, subtotal, total } = useCart();
  const [form, setForm] = useState({
    nombre: '', email: '', movil: '',
    calle: '', postal: '', comunidad: '', provincia: '', notas: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: items.map(i => ({ name: i.name, price: i.price, quantity: i.quantity, image: i.image })),
          customerEmail: form.email,
          origin: window.location.origin,
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Error desconocido');

      window.location.href = data.url;
    } catch (err) {
      setError('Error al procesar el pago. Inténtalo de nuevo.');
      setLoading(false);
    }
  };

  return (
    <div className="checkout">
      <div className="checkout__container">

        <div className="checkout__left">
          <h2 className="checkout__section-title">Datos personales:</h2>
          <form className="checkout__form" onSubmit={handleSubmit}>
            <input className="checkout__input" name="nombre" placeholder="Nombre completo" value={form.nombre} onChange={handleChange} required />
            <input className="checkout__input" name="email" type="email" placeholder="Correo electrónico" value={form.email} onChange={handleChange} required />
            <input className="checkout__input" name="movil" type="tel" placeholder="Móvil" value={form.movil} onChange={handleChange} required />

            <h2 className="checkout__section-title checkout__section-title--spacing">Dirección de envío:</h2>
            <p className="checkout__hint">Ingresa la dirección exacta en la cual deseas recibir el producto:</p>

            <input className="checkout__input" name="calle" placeholder="Calle, #" value={form.calle} onChange={handleChange} required />
            <input className="checkout__input" name="postal" placeholder="Código Postal" value={form.postal} onChange={handleChange} required />

            <select className="checkout__select" name="comunidad" value={form.comunidad} onChange={handleChange} required>
              <option value="">Comunidad autónoma</option>
              {COMUNIDADES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>

            <select className="checkout__select" name="provincia" value={form.provincia} onChange={handleChange} required>
              <option value="">Provincia</option>
              {PROVINCIAS.map(p => <option key={p} value={p}>{p}</option>)}
            </select>

            <textarea className="checkout__textarea" name="notas" placeholder="Indicaciones adicionales (opcional)" value={form.notas} onChange={handleChange} rows={4} />

            {error && <p className="checkout__error">{error}</p>}

            <button className="checkout__pay-btn" type="submit" disabled={loading}>
              {loading ? 'Procesando...' : 'PAGAR AHORA'}
            </button>
            <div className="checkout__stripe-badge">
              <span>🔒 Pago seguro procesado por <strong>stripe</strong></span>
              <span className="checkout__methods">Visa · Mastercard · Apple Pay · Google Pay</span>
            </div>
          </form>
        </div>

        <div className="checkout__right">
          <h2 className="checkout__section-title">Resumen del pedido:</h2>
          <div className="checkout__order-header">
            <span />
            <span>Cantidad</span>
            <span>Total</span>
          </div>
          <div className="checkout__order-items">
            {items.map(item => (
              <div className="checkout__order-item" key={item.id}>
                <img className="checkout__order-img" src={item.image} alt={item.name} />
                <div className="checkout__order-info">
                  <p className="checkout__order-name">{item.name}</p>
                  {item.weight && <p className="checkout__order-weight">{item.weight}</p>}
                </div>
                <span className="checkout__order-qty">×{item.quantity}</span>
                <span className="checkout__order-price">€{item.price * item.quantity}</span>
              </div>
            ))}
          </div>
          <div className="checkout__totals">
            <div className="checkout__total-row">
              <span>Subtotal</span>
              <span>€{subtotal}</span>
            </div>
            <div className="checkout__total-row">
              <span>Envío Estándar<small>(de 24 a 48h según ubicación)</small></span>
              <span>€{items.length > 0 ? SHIPPING : 0}</span>
            </div>
            <div className="checkout__total-row checkout__total-row--bold">
              <span>Total</span>
              <span>€{total}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Checkout;
```

- [ ] **Step 5: Run test to verify it passes**

```bash
npm test -- --testPathPattern=Checkout.test --watchAll=false
```

Expected: PASS — both tests pass.

- [ ] **Step 6: Commit**

```bash
git add src/pages/Checkout/Checkout.jsx src/pages/Checkout/Checkout.test.jsx src/context/CartContext.js
git commit -m "feat: wire up stripe checkout redirect in checkout form"
git push
```

---

## Task 7: Write test then create CheckoutSuccess page

**Files:**
- Create: `src/pages/CheckoutSuccess/CheckoutSuccess.test.jsx`
- Create: `src/pages/CheckoutSuccess/CheckoutSuccess.jsx`
- Create: `src/pages/CheckoutSuccess/CheckoutSuccess.scss`

- [ ] **Step 1: Write the failing test**

Create `src/pages/CheckoutSuccess/CheckoutSuccess.test.jsx`:

```jsx
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
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- --testPathPattern=CheckoutSuccess.test --watchAll=false
```

Expected: FAIL — module not found.

- [ ] **Step 3: Create CheckoutSuccess.jsx**

Create `src/pages/CheckoutSuccess/CheckoutSuccess.jsx`:

```jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './CheckoutSuccess.scss';

const CheckoutSuccess = () => {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []);

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
```

- [ ] **Step 4: Create CheckoutSuccess.scss**

Create `src/pages/CheckoutSuccess/CheckoutSuccess.scss`:

```scss
.checkout-success {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  padding: 2rem;

  &__block {
    text-align: center;
    max-width: 480px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    padding: 3rem 2rem;
  }

  &__icon {
    font-size: 4rem;
    margin-bottom: 1rem;
  }

  &__title {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #fff;
  }

  &__message {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 0.75rem;
    line-height: 1.5;
  }

  &__sub {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.5);
    margin-bottom: 2rem;
  }

  &__btn {
    display: inline-block;
    padding: 0.75rem 2rem;
    background: #6b4f2a;
    color: #fff;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;
    transition: background 0.2s;

    &:hover {
      background: #8b6f3a;
    }
  }
}
```

- [ ] **Step 5: Run test to verify it passes**

```bash
npm test -- --testPathPattern=CheckoutSuccess.test --watchAll=false
```

Expected: PASS — both tests pass.

- [ ] **Step 6: Commit**

```bash
git add src/pages/CheckoutSuccess/
git commit -m "feat: add checkout success page"
git push
```

---

## Task 8: Add success route to App.jsx and final build check

**Files:**
- Modify: `src/App.jsx`

- [ ] **Step 1: Add CheckoutSuccess import and route to App.jsx**

Add this import near the other page imports:

```jsx
import CheckoutSuccess from './pages/CheckoutSuccess/CheckoutSuccess';
```

Add this route inside the `<Routes>` block (after the `/checkout` route):

```jsx
<Route path="/checkout/success" element={<CheckoutSuccess />} />
```

- [ ] **Step 2: Final build check**

```bash
npm run build
```

Expected: successful build with no errors or warnings about missing modules.

- [ ] **Step 3: Run all tests**

```bash
npm test -- --watchAll=false
```

Expected: all tests pass.

- [ ] **Step 4: Commit**

```bash
git add src/App.jsx
git commit -m "feat: add /checkout/success route to app"
git push
```

---

## Task 9: Set environment variables in Vercel

This task is manual — no code changes.

- [ ] **Step 1: Add STRIPE_SECRET_KEY in Vercel dashboard**

In your Vercel project settings → Environment Variables, add:
- `STRIPE_SECRET_KEY` = your live Stripe secret key (`sk_live_...`)

Set it for Production, Preview, and Development environments.

- [ ] **Step 2: Verify deployment**

After deploying to Vercel, visit `/checkout`, add items to cart, fill the form, and click PAGAR AHORA. You should be redirected to Stripe's hosted checkout page.

Use Stripe test card `4242 4242 4242 4242` (any future expiry, any CVC) to complete a test payment and verify the redirect to `/checkout/success`.

---

## Local Development Note

`npm start` (CRA dev server) cannot proxy to Vercel API routes. For local testing with the API function, use:

```bash
npm install -g vercel
vercel dev
```

This starts both the React app and the API function together on `http://localhost:3000`.
