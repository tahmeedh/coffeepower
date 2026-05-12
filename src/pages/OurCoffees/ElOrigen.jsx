import React from 'react';
import './styles.scss';

const ElOrigen = () => {
  return (
    <div className='origen'>
   
        <div className="origen__img">
          <div className="origen__perfil">
            <h2 className='coffee-titles'>🇪🇹 El origen:</h2>
            <h3>Perfil:</h3>
            <p>🌱 Café de Especialidad 100% Arábica – Altura Extrema</p>
            <p>📍 Origen: 🇪🇹 Tierras Altas de Etiopía – Región de Sidamo</p>
            <p></p>
            <ul>
              <li> Cultivado por encima de los 2.700 metros sobre el nivel del mar, donde la altura extrema potencia la acidez natural del grano.</li>
              <li>Suelo volcánico, sombra natural y recolección manual en pequeñas parcelas familiares.</li>
              <li>Perfil con bajo contenido en cafeína, ideal para consumir desde la tarde sin alterar el sueño.</li>
              <li>Tueste suave y desarrollado con precisión para resaltar notas achocolatadas y una textura aterciopelada.</li>
            </ul>
          </div>
        </div>

        <div className="origen__block">
          <div className="origen__paragraph">
            <h3>👅Notas de cata:</h3>
            <ul>
              <li>Entrada delicada y envolvente, con una acidez fina y luminosa que despierta los sentidos sin alterar la calma.</li>
              <li>Notas achocolatadas suaves, que recuerdan al chocolate con leche y dan una sensación reconfortante desde el primer sorbo.</li>
              <li>Cuerpo ligero y textura aterciopelada, ideal para cappuccinos y cafés con leche sedosos, sin amargor.</li>
              <li>Final limpio y redondo, con un retrogusto dulce que se mantiene sin saturar el paladar.</li>
            </ul>
            <p>🔬 Un café diseñado para disfrutarlo desde la tarde sin afectar el descanso. La opción perfecta para quienes buscan suavidad, elegancia y sabor... sin compromisos.</p>

          </div>
          <div className="origen__paragraph">
            <h3>💖 Descripción emocional:</h3>
          </div>
          <div className="origen__paragraph">
            
            <p>“El Origen” es una joya nacida en las tierras altas de Etiopía, cuna ancestral del café.
            Un grano cultivado en altitud extrema, donde el aire es más puro, el tiempo más lento, y el alma del café más viva que nunca.</p>
            <p>Este café ha sido creado para los momentos donde el cuerpo pide calma, pero el paladar aún desea magia.
            Su baja cafeína lo convierte en el compañero perfecto para las tardes, cuando el cuerpo humano, guiado por su ciclo circadiano, comienza a prepararse para el descanso.
            Ligero en energía, profundo en sensaciones.</p>
            <p>  Su color recuerda al chocolate con leche, su sabor acaricia el alma.
            Y su textura… convierte cada cappuccino en un ritual suave, sedoso e inolvidable.
            “El Origen” es más que un café.
            Es el equilibrio perfecto entre tradición, salud y placer.</p>
            
          
          </div>
        </div>

    </div>
  )
}

export default ElOrigen