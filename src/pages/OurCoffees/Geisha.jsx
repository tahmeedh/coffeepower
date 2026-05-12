import React from 'react';
import './styles.scss';

const Geisha = () => {
    return (
        <div className="geisha-block">
            <div className='geisha-page1'>
                <div className="geisha-page1__img">
                    <div className="geisha-page1__perfil">
                        <h2 className='coffee-titles'>🇨🇴 Coffee Power Geisha:</h2>
                        <h3>☕ PERFIL SENSORIAL</h3>
                        <p>-🌱 100% Arábica — Variedad Geisha de especialidad.</p>
                        <ul>
                            <li>Cada grano ha sido seleccionado manualmente, asegurando que solo las cosechas con el equilibrio perfecto de aroma, dulzura y acidez formen parte de esta edición icónica.</li>
                            <li>El tueste medio ha sido desarrollado por un maestro tostador con más de 40 años de experiencia, utilizando tecnología de precisión valorada en más de 3 millones de euros. Este sistema de tueste de última generación permite resaltar las complejas notas florales y frutales del Geisha sin comprometer su pureza ni su elegancia natural.</li>
                            <li>Este Geisha se presenta como un microlote exclusivo cosecha 2024/2025, cuidadosamente limitado a 999 unidades de 300 gramos / unidad de la colección privada cosecha 2024/2025.
                            </li>
                            <li> Cada unidad ha sido diseñada bajo estrictos controles de conservación, garantizando una frescura impecable, con tueste reciente y una humedad óptima para preservar su perfil sensorial único.</li>
                        </ul>
                    </div>
                </div>

                <div className="geisha-page1__block">
                    <h3>👅Notas de cata:</h3>
                    <ul>
                        <li className='geisha-page1__elements'>Notas florales de jazmín y rosa.</li>
                        <li className='geisha-page1__elements'>Matices dulces de miel y frutas exóticas como maracuyá y papaya.</li>
                        <li className='geisha-page1__elements'>Cuerpo sedoso con una acidez brillante y elegante.</li>
                        <li className='geisha-page1__elements'>Final largo, limpio y persistente, que deja una huella inolvidable en cada sorbo.</li>
                    </ul>
          
                    <div className="geisha-page1__paragraph">
                        <h3>💖 Descripción emocional:</h3>
                        <p>No todos los cafés nacen para ser leyenda. Coffee Power Geisha es el resultado de años de búsqueda, catas en los rincones más exóticos del mundo y la pasión incansable del chef de la casa, Chris Rosas, por encontrar la experiencia cafetera suprema.</p>
                        <p>Este Geisha no solo destaca por su linaje y perfección sensorial, sino por haber conquistado el corazón y el paladar de quien lidera cada receta en Coffee Power.</p>
                        <p>Cada grano es un testimonio de excelencia, tradición y el compromiso de ofrecer solo lo mejor a los amantes del café de especialidad.</p>
                        <p>No es un café más. Es una declaración de maestría. Una experiencia reservada solo para los verdaderos conocedores.</p>
                    </div>
                </div>
            </div>
            <div className="geisha-page2">
                <div className="geisha-page2__block">
                    <div className="geisha-page2__paragraph">
                        <h3>🌱 BENEFICIOS SALUDABLES</h3>
                        <ul>
                            <li className='geisha-page2__elements'>Cosecha manual y control riguroso de calidad.</li>
                            <li className='geisha-page2__elements'>Bajo en diterpenos gracias a su tueste optimizado para métodos filtrados.</li>
                            <li className='geisha-page2__elements'>Café de edición limitada: solo los granos más perfectos pasan a esta selección.
                            </li>
                        </ul>
                    </div>
                    <div className="geisha-page2__paragraph">
                        <h3>🔧 MÉTODOS RECOMENDADOS</h3>
                        <ul>
                            <li className='geisha-page2__elements'>Chemex</li>
                            <li className='geisha-page2__elements'>V60</li>
                            <li className='geisha-page2__elements'>Cafetera italiana (Pump My Moka) con filtro de papel
                            </li>
                            <li className='geisha-page2__elements'>Espresso con filtro de papel</li>
                            <li className='geisha-page2__elements'>Cold Brew exótico (para una experiencia floral y refrescante en verano)</li>
                        </ul>
                    </div>

                </div>
                <div className="geisha-page2__paragraph">
                    <h3>🌟 NOTA FINAL</h3>
                    <p>Coffee Power Geisha no es solo un café. Es una obra de arte líquida.</p>
                    <p>Cada taza cuenta la historia de una búsqueda global por la perfección, una pasión que supera fronteras y un legado que solo los verdaderos amantes del café pueden comprender.</p>
                    <p>“La excelencia no se encuentra. Se crea. Y este Geisha es la prueba"</p>
                </div>
            </div>
        </div>

    )
}

export default Geisha