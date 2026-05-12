import React from 'react';
import './styles.scss';

const Kenia = () => {
    return (
        <div className='kenia'>

            <div className="kenia__img">
                <div className="kenia__perfil">
                    <h2 className='coffee-titles'>🇰🇪 SL28 Kenia Premium</h2>
                    <h3>Perfil:</h3>
                    <ul>
                        <li>🌱 100% Arábica, varietal SL28, cultivado en altitudes entre 1.700 y 2.100 msnm en las laderas volcánicas del
                            Monte Kenia.</li>
                        <li>Proceso lavado tradicional con doble fermentación, técnica clave en su perfil brillante.</li>
                        <li>Un café explosivo, con acidez vibrante y estructura compleja.</li>
                        <li> Ideal para métodos filtrados que revelen sus capas de sabor con precisión y elegancia.</li>
                    </ul>
                </div>

            </div>
            <div className="kenia__block">
                <h3>“Una explosión cítrica con alma salvaje”</h3>

                <div className="kenia__paragraph">
                    <h3>👅Notas de cata:</h3>
                    <ul>
                        <li>Entrada: Fresca, eléctrica, con estallido de toronja, grosella negra y un toque de lima.</li>
                        <li>Cuerpo: Medio, sedoso y jugoso, con estructura viva y chispeante.</li>
                        <li>Final: Persistente, limpio y floral, con recuerdos a té negro dulce y piel de naranja.</li>
                    </ul>
                </div>
                <div className="kenia__paragraph">
                    <h3>💖 Descripción emocional:</h3>
                    <p>"Kenia SL28" es un canto a la intensidad. Una danza salvaje de frutas rojas, acidez jugosa y elegancia africana. Este café representa lo indomable, lo puro, lo que no se puede domar.</p>
                    <p>Cultivado en tierras volcánicas, bajo un cielo que respira historia y leyenda, este café es como el rugido de un león en la sabana: inolvidable. Cada sorbo es una travesía que despierta el alma, transportando a quien lo prueba a un lugar donde la energía se convierte en sabor y el café se convierte en fuego líquido.</p>
                    <p>No es para todos. Es para quienes buscan algo más que una taza: una experiencia feroz, brillante y
                        auténtica.</p>
                </div>
            </div>

        </div>
    )
}

export default Kenia;