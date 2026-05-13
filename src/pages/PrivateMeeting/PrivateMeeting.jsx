import React, { useRef, useState } from "react";
import './PrivateMeeting.scss';
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";


const PrivateMeeting = () => {
    const form = useRef();
    const [phone, setPhone] = useState("");
    const [, setEnviado] = useState(false);
    const navigate = useNavigate();

    const enviarFormulario = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
            .then(
                (result) => {
                    console.log(result.text);
                    setEnviado(true)
                    navigate("/eventos/reunion/confirmacion");
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div className='private-meeting'>
            <h2 className="private-meeting__title">Reunión privada:</h2>
            <div className="private-meeting__block">
                <p className="private-meeting__text">Introduce tus datos en el siguiente formulario para poder atender tu solicitud por favor:</p>
                <form ref={form} onSubmit={enviarFormulario} className="private-meeting__form">
                    <fieldset>
                        <label htmlFor="name">Nombre Completo:</label>
                        <input type="text" name="name" required />
                    </fieldset>
                    <fieldset>
                        <label>Móvil:</label>
                        <PhoneInput
                            country={"co"} // Código de país por defecto (Colombia)
                            value={phone}
                            onChange={(phone) => setPhone(phone)}
                             inputStyle={{
                                width: '100%',
                                height: '40px',
                                fontSize: '1rem',
                                paddingLeft: '48px' // espacio suficiente para que no se solape con la bandera
                              }}
                               inputProps={{
                                name: 'telefono',
                                required: true,
                                className: 'form__phone'
                            }}
                            
                        />
                    </fieldset>
                    <fieldset>
                        <label>Correo Electrónico:</label>
                        <input type="email" name="email" required />
                    </fieldset>
                    <fieldset>
                        <label>Motivo de la Reunión:</label>
                        <select name="motivo">
                            <option value="cumpleaños">Cumpleaños</option>
                            <option value="conmemoración">Fecha Conmemorativa</option>
                            <option value="otro">Otro</option>
                        </select>
                    </fieldset>

                    <fieldset>
                        <label>Descripción:</label>
                        <textarea placeholder="Danos una leve descripcion de tu requerimiento." name="descripcion"></textarea>
                    </fieldset>


                    <button className="private-meeting__btn" type="submit">Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default PrivateMeeting