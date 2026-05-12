import React from 'react';
import './styles.scss';

const Amucc = () => {
    return (
        <div className='amucc'>

            <div className="amucc__img">
                <div className="amucc__perfil">
                    <h2 className='coffee-titles'>Coffee Power AMUCC</h2>
                    <h3>Perfil:</h3>
                    <p>🌱 100% Arábica — Café de Especialidad</p>
                    <ul>
                        <li>Aroma intenso con notas de frutas dulces, cacao y panela.</li>
                        <li>Sabor equilibrado con toques de almendra y avellana.</li>
                        <li>Acidez brillante y cuerpo medio que culmina en un final limpio y persistente.</li>
                    </ul>
                    <h3>👅Notas de cata:</h3>
                    <ul>
                        <li>Entrada dulce con notas de frutas maduras y panela.</li>
                        <li>Cuerpo medio con textura suave.</li>
                        <li>Final largo con matices de frutos secos y cacao.</li>

                    </ul>
                </div>
            </div>

            <div className="amucc__block">

                <div className="amucc__paragraph">
                    <h3>💖 Descripción emocional:</h3>
                    <p>“Coffee Power AMUCC” no es solo un café; es el fruto del esfuerzo y la resiliencia de mujeres caficultoras en el Cauca.
                        Producido por la Asociación de Mujeres Caficultoras del Cauca (AMUCC), este café representa una historia de superación y compromiso con la calidad y la sostenibilidad.</p>
                    <p>Cada grano es cultivado en pequeñas fincas a altitudes entre 1.700 y 1.900 metros, en suelos volcánicos que aportan riqueza y carácter al café.</p>
                    <p>El proceso de producción se realiza bajo prácticas ecológicas y de comercio justo, garantizando un impacto positivo en las comunidades y el medio ambiente.</p>
                    <p>Al elegir este café, apoyas el empoderamiento de mujeres que, a través del café, han transformado sus vidas y las de sus comunidades.</p>
                </div>
                <div className="amucc__paragraph">
                    <h3>🌱 Beneficios Saludables:</h3>
                    <ul>
                        <li>Cultivado bajo prácticas ecológicas certificadas.</li>
                        <li>Certificación de Comercio Justo, garantizando condiciones justas para las productoras.</li>
                        <li>Proceso de producción sostenible, respetuoso con el medio ambiente.</li>
                        <li>Ideal para quienes buscan un café con impacto social positivo.</li>
                    </ul>
                    <p>“Coffee Power AMUCC: una taza que celebra la fuerza y dedicación de las mujeres caficultoras del Cauca.”</p>
                </div>
            </div>

        </div>
    )
}

export default Amucc