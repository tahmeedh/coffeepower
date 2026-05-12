import React from 'react';
import './styles.scss';

const Supremo = () => {
    return (
        <div className="supremo-block">
            <div className='supremo-page1'>
                <div className="supremo-page1__img">
                    <div className="supremo-page1__perfil">
                        <h2 className="supremo-page1__title">🇨🇴 Coffe Power Supremo:</h2>
                        <h3>☕ PERFIL SENSORIAL</h3>
                        <ul>
                            <li>🌱 100% Arábica — Café de Especialidad</li>
                            <li>Aroma floral y frutal con toques de caña de azúcar.</li>
                            <li>Sabor equilibrado con notas de panela, frutos rojos y una acidez cítrica vibrante.</li>
                            <li>Cuerpo medio-alto y un final dulce que permanece en el paladar.</li>
                        </ul>
                        <h3>👅Notas de cata:</h3>
                        <ul>
                            <li className='supremo-page1__elements'>Entrada dulce con notas de caña de azúcar y frutas rojas.</li>
                            <li className='supremo-page1__elements'>Cuerpo sedoso con balance entre dulzura y acidez.</li>
                            <li className='supremo-page1__elements'>Final prolongado con matices florales y cítricos.</li>
                        </ul>
                    </div>
                </div>

                <div className="supremo-page1__block">


                    <div className="supremo-page1__paragraph">
                        <h3>💖 Descripción emocional:</h3>
                        <p>Nuestro café colombiano es mucho más que un origen. Es la expresión de una relación cercana y directa con productores de élite, donde cada grano ha sido seleccionado con el mismo criterio con el que elegirías lo mejor para tu familia.</p>
                        <p>Trabajamos codo a codo con expertos de confianza, para garantizar que cada lote que recibimos cumpla con los más altos estándares de calidad, sostenibilidad y sabor.</p>
                        <p>Es el café que mejor representa la filosofía Coffee Power: autenticidad, excelencia y respeto por el arte de cultivar.</p>
                        <p>Cuando eliges este café, no solo disfrutas un origen legendario. Te llevas a casa el resultado de años de colaboración, pasión y una búsqueda incansable por ofrecer lo mejor.</p>
                        <h3>🌱 BENEFICIOS SALUDABLES</h3>
                        <ul>
                            <li className='supremo-page2__elements'>Café de especialidad cultivado bajo prácticas sostenibles.</li>
                            <li className='supremo-page2__elements'>Tostado con precisión para conservar su perfil sensorial natural.</li>
                            <li className='supremo-page2__elements'>Compatible con métodos tradicionales y de especialidad.
                            </li>
                            <li className='supremo-page2__elements'>Ideal para quienes buscan autenticidad y excelencia en cada taza.
                            </li>
                        </ul>
                        <p>“Coffee Power Supremo Colombia: donde la pasión y la calidad se encuentran en cada sorbo.”</p>
                    </div>
                </div>



            </div>

        </div>
    )
}

export default Supremo;