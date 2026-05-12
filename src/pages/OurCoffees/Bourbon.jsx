import React from 'react';
import './styles.scss';

const Bourbon = () => {
    return (
        <div className='bourbon'>

            <div className="bourbon__img">
                <div className="bourbon__perfil">
                    <h2 className='coffee-titles'>🇨🇴 Bourbon Supremo</h2>
                    <h3>Perfil:</h3>
                    <ul>
                        <li>100% Arábica, variedad Bourbon rojo cultivado entre 1.500 y 1.800 metros sobre el nivel del mar</li>
                        <li>Suelos volcánicos ricos en minerales que realzan su perfil dulce y redondo.</li>
                        <li>Proceso lavado artesanal, con fermentación controlada y secado solar en camas africanas.</li>
                        <li>Este café ofrece una estructura noble, con equilibrio perfecto entre acidez suave, dulzor natural y aromas envolventes.</li>
                    </ul>
                </div>
            </div>


            <div className="bourbon__block">

                <h3>"El alma eterna del café"</h3>

                <div className="bourbon__paragraph">
                    <p>Desde las tierras más legendarias de Latinoamérica, nace nuestro Bourbon Supremo: una obra maestra genética, un homenaje vivo a la tradición cafetera que ha conquistado al mundo por generaciones.</p>
                    <p>En cada sorbo, se despliega una sinfonía de caramelo dorado, frutas maduras bañadas por el sol, chocolate con leche y una acidez vibrante pero elegante que acaricia el paladar como una melodía atemporal.</p>
                    <p>Más que un café, es el espíritu inmortal del Arábica en su forma más pura y seductora.</p>
                    <br />
                    <p><strong>Bourbon Supremo Coffee Power:</strong> porque algunas leyendas no pasan de moda… se perpetúan en cada taza.</p>

                </div>
            </div>

        </div>
    )
}

export default Bourbon