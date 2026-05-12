import React from 'react';
import './styles.scss';

const Relax = () => {
    return (
        <div className="relax-block">
            <div className='relax-page1'>
                <div className="relax-page1__img">
                    <div className="relax-page1__perfil">
                        <h2 className="coffee-titles">🇲🇽 Coffee Power Relax:</h2>
                        <h3>☕ PERFIL SENSORIAL</h3>
                        <ul>
                            <li>🌱 100% Arábica — Café de Especialidad</li>
                            <li>Aroma suave con notas de nuez y cacao.</li>
                            <li>Sabor ligero con dulzura natural y un final sencillo y refrescante.</li>
                        </ul>

                    </div>
                </div>

                <div className="relax-page1__block">


                    <div className="relax-page1__paragraph">
                        <h3>👅Notas de cata:</h3>
                        <ul>
                            <li className='relax-page1__elements'>Entrada ligera con notas de nuez y caramelo suave.</li>
                            <li className='relax-page1__elements'>Cuerpo ligero y textura amable.</li>
                            <li className='relax-page1__elements'>Final corto y limpio que invita a la calma.</li>
                        </ul>
                        <h3>💖 Descripción emocional:</h3>
                        <p>“Coffee Power Relax” es el café para quienes buscan tranquilidad sin renunciar al sabor. Una opción accesible y natural para disfrutar tu ritual diario con equilibrio y sin preocupaciones.</p>
                        <p>Cada grano ha sido descafeinado con el método Swiss Water, libre de químicos y disolventes, manteniendo su esencia natural.</p>
                        <p>Cultivado en tierras mexicanas que le aportan su sabor suave y amigable.</p>
                        <p>Coffee Power Relax es el descanso que te mereces en cada taza.</p>

                    </div>
                </div>



            </div>
            <div className="relax-page2">
                <div className="relax-page2__paragraph">
                    <h3>🌱 BENEFICIOS SALUDABLES</h3>
                    <ul>
                        <li className='relax-page2__elements'>Descafeinado Swiss Water.</li>
                        <li className='relax-page2__elements'>Sin químicos ni disolventes.</li>
                        <li className='relax-page2__elements'>Alternativa accesible para quienes desean un café saludable y suave.
                        </li>
                        <li className='relax-page2__elements'>Ideal para personas con sensibilidad a la cafeína o que desean disfrutar de su café en cualquier momento del día.
                        </li>
                    </ul>
                    <h3>🔧 MÉTODOS RECOMENDADOS</h3>
                    <ul>
                        <li className='relax-page2__elements'>Cafetera italiana (Moka)</li>
                        <li className='relax-page2__elements'>V60</li>
                        <li className='relax-page2__elements'>Cafetera americana o filtro</li>
                    </ul>

                    <p>“Coffee Power Relax: el descanso que tu día necesita, con todo el sabor y sin preocupaciones.”</p>
                </div>

            </div>

        </div>
    )
}

export default Relax