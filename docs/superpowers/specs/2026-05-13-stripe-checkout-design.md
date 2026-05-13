# Stripe Checkout Integration — Design Spec

**Date:** 2026-05-13  
**Status:** Approved

---

## Overview

Wire up real payment processing on the existing Coffee Power checkout page using Stripe Checkout (hosted). A Firebase Cloud Function serves as the thin backend needed to create Stripe Checkout Sessions securely, keeping the secret key off the browser.

---

## Architecture

```
Browser (React)              Firebase Function           Stripe
──────────────               ─────────────────           ──────
User fills form
  → clicks PAGAR AHORA
  → POST /createCheckoutSession  →  creates Session
                               ←  returns { url }
  → window.location = url  ─────────────────────────→  Hosted checkout
                                                        User pays
  ← redirect /checkout/success  ←────────────────────
  → clear cart, show confirmation
```

---

## Components

### 1. Firebase Cloud Function — `createCheckoutSession`

- **Trigger:** HTTP POST (callable or plain HTTP)
- **Input:** `{ items: [{ name, price, quantity, image }], customerEmail, shippingAddress }`
- **Behavior:**
  - Builds Stripe `line_items` from cart items (unit_amount in cents, quantity)
  - Adds a fixed shipping line item (€4.00)
  - Creates a Stripe Checkout Session with `mode: 'payment'`
  - Sets `success_url` to `${FRONTEND_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`
  - Sets `cancel_url` to `${FRONTEND_URL}/checkout`
  - Passes `customer_email` and shipping metadata
- **Output:** `{ url }` — the Stripe-hosted checkout URL
- **Secret key:** stored in Firebase Function environment config, never exposed to browser

### 2. `Checkout.jsx` — updated

- On form submit: validate form, set loading state, POST to Cloud Function
- On success: `window.location.href = url`
- On error: show inline error message, re-enable button
- Loading state disables the button and shows "Procesando..."
- No Stripe.js needed on the frontend

### 3. `CheckoutSuccess.jsx` — new page

- Route: `/checkout/success`
- On mount: calls `clearCart()` from CartContext
- Shows: success icon, "¡Pedido confirmado!" message, order summary note, link back to home
- Reads `session_id` from query params (for display only — no server verification in this phase)

### 4. `App.jsx` — route addition

- Add `<Route path="/checkout/success" element={<CheckoutSuccess />} />`

### 5. `.env` — new variable

- `REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_live_...` (not strictly needed for hosted checkout redirect approach, but kept for future use)
- `REACT_APP_FUNCTIONS_URL` — base URL of the deployed Cloud Function

---

## Data Flow

Cart items in `CartContext` → sent as POST body to Cloud Function → Stripe Session created → browser redirected → Stripe collects payment → browser redirected back to `/checkout/success` → cart cleared.

---

## Error Handling

- Network/Function error: show "Error al procesar el pago. Inténtalo de nuevo." inline in the form
- Empty cart: "PAGAR AHORA" button is disabled (cart is required to reach checkout)
- Stripe payment failure: Stripe handles this on their hosted page; user can retry or cancel back to the app

---

## Testing

- Local: `firebase emulators:start` to run Function locally; set `REACT_APP_FUNCTIONS_URL=http://localhost:5001/...`
- Stripe test mode: swap keys to `pk_test_` / `sk_test_` and use Stripe test cards (4242 4242 4242 4242)
- Production: deploy Function, set live keys in Firebase config

---

## Out of Scope (this phase)

- Saving orders to Firestore (no persistence)
- Webhook handling for post-payment events
- Subscription / recurring payments
- Refunds
