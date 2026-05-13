# Stripe Checkout Integration — Design Spec

**Date:** 2026-05-13  
**Status:** Approved

---

## Overview

Wire up real payment processing on the Coffee Power checkout page using Stripe Checkout (hosted). Remove Firebase entirely (Auth, Firestore, Firebase Hosting). Replace with Vercel (hosting + one serverless API function for Stripe). Remove login/register/profile — app becomes fully public.

---

## Architecture

```
Browser (React on Vercel)    Vercel API Route            Stripe
──────────────────────────   ────────────────            ──────
User fills form
  → clicks PAGAR AHORA
  → POST /api/create-checkout-session
                             → creates Stripe Session
                             ← returns { url }
  → window.location = url ──────────────────────────→  Hosted checkout
                                                         User pays
  ← redirect /checkout/success ←──────────────────────
  → clear cart, show confirmation
```

---

## What Gets Removed

| File | Reason |
|---|---|
| `src/config/firebase.js` | Firebase removed |
| `src/context/AuthContext.js` | Firebase Auth removed |
| `src/components/ProtectedRoute/ProtectedRoute.jsx` | Auth removed |
| `src/pages/LoginPage/LoginPage.jsx` | Auth removed |
| `src/pages/RegisterPage/RegisterPage.jsx` | Auth removed |
| `src/pages/ProfilePage/ProfilePage.jsx` | Auth removed |
| `.firebaserc` | Firebase removed |
| `firebase.json` | Firebase removed |
| `firebase` dep in `package.json` | Firebase removed |

---

## What Gets Built

### 1. `api/create-checkout-session.js` — Vercel Serverless Function

- **Route:** POST `/api/create-checkout-session`
- **Input:** `{ items: [{ name, price, quantity, image }], customerEmail, shippingAddress }`
- **Behavior:**
  - Builds `line_items` from cart (unit_amount in cents, quantity)
  - Adds €4.00 shipping as a separate line item
  - Creates Stripe Checkout Session with `mode: 'payment'`
  - `success_url`: `${FRONTEND_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`
  - `cancel_url`: `${FRONTEND_URL}/checkout`
  - Passes `customer_email` from form
- **Output:** `{ url }` — Stripe-hosted checkout URL
- **Secret key:** stored in Vercel environment variable `STRIPE_SECRET_KEY`, never in browser

### 2. `Checkout.jsx` — Updated

- On submit: validate form, set loading state, POST to `/api/create-checkout-session`
- On success: `window.location.href = url`
- On error: show inline Spanish error message, re-enable button
- Button shows "Procesando..." while loading

### 3. `CheckoutSuccess.jsx` — New Page

- Route: `/checkout/success`
- On mount: calls `clearCart()` from CartContext
- Shows: success message in Spanish, link back to home
- Reads `session_id` from query params (display only)

### 4. `App.jsx` — Updated

- Remove all auth-related imports and routes (`/login`, `/registro`, `/perfil`)
- Remove `AuthProvider` wrapper
- Add `<Route path="/checkout/success" element={<CheckoutSuccess />} />`

### 5. `vercel.json` — New

- Rewrites all routes to `index.html` so React Router works on Vercel

### 6. `.env` — Updated

- Add `REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_live_...`

---

## Error Handling

- Network/API error: "Error al procesar el pago. Inténtalo de nuevo." inline in form
- Stripe payment failure: handled by Stripe's hosted page; user can retry or cancel back to `/checkout`

---

## Out of Scope

- Saving orders to a database
- Webhook handling
- Subscriptions / recurring payments
- Auth / user accounts
