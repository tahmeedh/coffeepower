import React from "react";
import './ProfilePage.scss';
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const { user, logout } = useAuth(); // ✅ Importa user y logout
  const navigate = useNavigate();

  if (!user) {
    return <p>No has iniciado sesión.</p>;
  }

  return (
    <div className="profile-page">
      <div className="profile-page__block">
        <h2>Mi Perfil:</h2>
        <div className="profile-page__information">
          <img src={user.photoURL || "/default-avatar.png"} alt="Avatar" />
          <p><strong>Nombre:</strong> {user.displayName || "Usuario sin nombre"}</p>
          <p><strong>Correo:</strong> {user.email}</p>

          <button onClick={() => { logout(); navigate("/login"); }}>
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
