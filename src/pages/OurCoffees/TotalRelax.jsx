import React from 'react';
import './styles.scss';

const TotalRelax = () => {
  return (
    <div className='total-relax__page'>
      <div className="total-relax__img">
        <div className="total-relax__perfil">
          <h2 className='coffee-titles'>🇨🇴 Total Relax:</h2>
          <h3>Perfil:</h3>
          <ul>
            <li>Base 100% Swiss Water Colombiano descafeinado al 99.9%</li>
            <li>Notas achocolatadas con cuerpo sedoso y tostado suave</li>
            <li>Final redondo y reconfortante que acaricia el palada</li>
          </ul>
          <h3>Ingredientes clave:</h3>
          <ul>
            <li>Cafe Swiss Water de Colombia (proceso sin químicos, bajo en cafeína)</li>
            <li>Gotas de Flores de Bach (mezcla personalizada o Rescue Remedy)</li>
            <li>Agua filtrada para infusion limpia y delicada</li>
          </ul>
        </div>
      </div>
      <div className="total-relax__block">
        <div className="total-relax__paragraph">
          <h3>Momento ideal:</h3>
          <ul>
            <li>De noche, entre las 20:00 y 23:00 h
            </li>
            <li>Ideal para cerrar jornadas intensas, calmar la mente y reconectar contigo</li>
          </ul>
          <h3>Beneficios:</h3>
          <ul>
            <li>No interfiere en el sueño ni sobreestimula</li>
            <li>Proporciona paz interior y regulacion emocional gracias a las Flores de Bach</li>
            <li>Ritual perfecto para terminar el dia con gratitud y equilibrio</li>
          </ul>
          <h3>Café recomendado:</h3>
          <p>- Coffee Power 'Swiss Water Colombiano', infusionado con flores emocionales para el alma</p>
        </div>
      </div>
    </div>
  )
}

export default TotalRelax