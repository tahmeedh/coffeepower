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

      setLoading(false);
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
