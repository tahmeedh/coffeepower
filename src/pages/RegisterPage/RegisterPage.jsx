import React, { useState } from 'react';
import { auth } from "../../config/firebase";
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import './RegisterPage.scss';

const registerData = [
    { name: "Nombre:", type: 'text', key: "nombre", placeholder: "Escribe aquí tu nombre completo" },
    { name: "Email:", type: "email", key: "email", placeholder: "Escribe un correo válido" },
    { name: "Contraseña:", type: "password", key: "password", placeholder: "Mínimo 6 caracteres, incl. una mayúscula" },
    { name: "Confirmar Contraseña:", type: "password", key: "confirmPassword", placeholder: "Repite tu contraseña" },
    { name: "Móvil:", type: "number", key: "movil", placeholder: "Escribe un número de contacto válido" }
];

const RegisterPage = () => {
    const [formData, setFormData] = useState({ nombre: "", email: "", password: "", confirmPassword: "", movil: "" });
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password.length < 6) {
            setError("La contraseña debe tener al menos 6 caracteres.");
            return;
        }
        if (formData.password !== formData.confirmPassword) {
            setError("Las contraseñas no coinciden.");
            return;
        }
        try {
            await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            alert("Tu usuario fue creado correctamente");
            navigate("/login"); // Redirige al usuario a la página de login
            setError("");
        } catch (err) {
            setError(err.message);
        }
    };

    const handleGoogleRegister = async () => {
        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
            setError("");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className='register-page'>
            <div className="register-page__block">
                <form className="register-page__form" onSubmit={handleSubmit}>
                    {registerData.map((element, index) => (
                        <fieldset key={index} className="register-page__fieldset">
                            <label htmlFor={element.key} className="register-page__label">{element.name}</label>
                            <div className="register-page__input-wrapper">
                                <input
                                    type={element.type === "password" ? (showPassword ? "text" : "password") : element.type}
                                    name={element.key}
                                    className="register-page__input"
                                    required
                                    onChange={handleChange}
                                    placeholder={element.placeholder}
                                />
                                {element.type === "password" && (
                                    <span className="register-page__toggle-password" onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? "🔓" : "🔒"}
                                    </span>
                                )}
                            </div>
                        </fieldset>
                    ))}
                    {error && <p className="register-page__error">{error}</p>}
                    <button type="submit" className="register-page__button register-page__button--primary">🔑 Registrarse</button>
                    <button type="button" className="register-page__button register-page__button--google" onClick={handleGoogleRegister}>🔵 Registrarse con Google</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
