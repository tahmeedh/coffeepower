import React, { useState } from 'react';
import './SuscribePage.scss';
import { useNavigate } from 'react-router-dom';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';


const SuscribePage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nombre: '',
        apellidos: '',
        telefono: '',
        email: '',
        fechaNacimiento: ''
    });
    const [message, setMessage] = useState('');

    const apiKey = process.env.REACT_APP_BREVO_API_KEY;
    const listId = Number(process.env.REACT_APP_BREVO_LIST_ID) || 5;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

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
                setFormData({
                    nombre: '',
                    apellidos: '',
                    telefono: '',
                    email: '',
                    fechaNacimiento: ''
                });
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

    return (
        <div className='suscribe-page'>
            <div className="suscribe-page__block">
                <div className="suscribe-page__header">
                    <h1>¡SUSCRÍBETE GRATIS!</h1>
                    <p>Pásate por la sucursal más cercana de Coffee Power y reclama tu set de bienvenida.</p>
                    <p>Degustación Inmersa sin compromiso - solo por tiempo limitado. </p>
                   <h2>AHORA QUE NO TIENES EXCUSAS…¿te atreves a enamorarte del sabor?</h2>
                </div>

                <form className='suscribe-page__form' onSubmit={handleSubmit}>
                    <p>Deja tus datos y suscríbete:</p>

                    <fieldset className="form__fieldset">
                        <label htmlFor="nombre" className="form__label">Nombre:</label>
                        <input
                            type="text"
                            className="form__input"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            placeholder="Tu nombre"
                            required
                        />
                    </fieldset>

                    <fieldset className="form__fieldset">
                        <label htmlFor="apellidos" className="form__label">Apellido:</label>
                        <input
                            type="text"
                            className='form__input'
                            name="apellidos"
                            value={formData.apellidos}
                            onChange={handleChange}
                            placeholder="Tus apellidos"
                            required
                        />
                    </fieldset>

                    <fieldset className="form__fieldset">
                        <label htmlFor="telefono" className="form__label">Teléfono:</label>
                        <PhoneInput
                            country={'es'} // Puedes establecer el país por defecto (ej: 'co' para Colombia)
                            value={formData.telefono}
                            onChange={(phone) => setFormData({ ...formData, telefono: phone })}
                            inputProps={{
                                name: 'telefono',
                                required: true,
                                className: 'form__phone'
                            }}
                            inputStyle={{
                                width: '100%',
                                height: '40px',
                                fontSize: '1rem',
                                paddingLeft: '48px' // espacio suficiente para que no se solape con la bandera
                              }}
                        />

                    </fieldset>

                    <fieldset className="form__fieldset">
                        <label htmlFor="email" className="form__label">Email:</label>
                        <input
                            type="email"
                            className="form__input"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Correo electrónico"
                            required
                        />
                    </fieldset>

                    <fieldset className="form__fieldset">
                        <label htmlFor="fechaNacimiento" className="form__label">Fecha de nacimiento:</label>
                        <input
                            type="date"
                            className="form__input"
                            name="fechaNacimiento"
                            value={formData.fechaNacimiento}
                            onChange={handleChange}
                            required
                        />
                    </fieldset>

                    <button className="form__btn" type="submit">Suscribirme</button>
                    {message && <p style={{ marginTop: '12px' }}>{message}</p>}
                </form>
            </div>
        </div>
    );
};

export default SuscribePage;
