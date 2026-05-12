import React, { useState } from 'react';
import { auth } from '../../config/firebase';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, sendPasswordResetEmail } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.scss';

const LoginPage = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signInWithEmailAndPassword(auth, formData.email, formData.password);
            alert("Inicio de sesión exitoso");
            navigate("/"); // Redirige a la página principal tras iniciar sesión
        } catch (err) {
            setError("Correo o contraseña incorrectos");
        }
    };

    const resetPassword = async (email) => {
        try {
            await sendPasswordResetEmail(auth, email);
            alert("Se ha enviado un enlace de recuperación a tu correo.");
        } catch (error) {
            console.error(error);
            alert("Error al enviar el correo. Verifica que el email esté registrado.");
        }
    };

    const handlePasswordReset = () => {
        if (formData.email) {
            resetPassword(formData.email); // ✅ Ahora usa el valor correcto
        } else {
            alert("Por favor, ingresa tu correo.");
        }
    };

    const handleGoogleLogin = async () => {
        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
            navigate("/");
        } catch (err) {
            setError("Error al iniciar sesión con Google");
        }
    };

    return (
        <div className='login-page'>
            <div className="login-page__block">
                <h2>Login:</h2>
                <form className="login-page__form" onSubmit={handleSubmit}>
                    <fieldset className="login-page__fieldset">
                        <label htmlFor="email" className="login-page__label">Email:</label>
                        <input
                            type="email"
                            name="email"
                            className="login-page__input"
                            required
                            onChange={handleChange}
                        />
                    </fieldset>
                    <fieldset className="login-page__fieldset">
                        <label htmlFor="password" className="login-page__label">Contraseña:</label>
                        <div className="login-page__input-wrapper">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                className="login-page__input"
                                required
                                onChange={handleChange}
                            />
                            <span className="login-page__toggle-password" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? "🔓" : "🔒"}
                            </span>
                        </div>
                    </fieldset>
                    <fieldset className="login-page__fieldset">
                        <button type="submit" className="login-page__button login-page__button--primary">🔑 Iniciar Sesión</button>
                        <button type="button" className="login-page__button login-page__button--google" onClick={handleGoogleLogin}>🔵 Iniciar con Google</button>
                    </fieldset>
                    {error && <p className="login-page__error">{error}</p>}



                </form>
                <button className='login-page__button' onClick={handlePasswordReset}>¿Olvidaste tu contraseña?</button>
                <p>Aún no tienes tu cuenta Mister Coffee? <Link to='/registro'>Regístrate Aquí</Link></p>
            </div>
        </div>
    );
};

export default LoginPage;
