import React from 'react';
import './styles.scss';
import AddToCart from '../../components/AddToCart/AddToCart';
import victoriaImg from '../../assets/coffees/esencia-de-victoria.png';

const PRODUCT = {
  id: 'esencia-victoria',
  name: '🇨🇴 Esencia de Victoria',
  price: 15,
  image: victoriaImg,
  weight: 'Grano · 250g',
};

const EsenciaVictoria = () => {
    return (
        <div className='victoria-page'>
            <div className='victoria-page'>
                <div className="victoria-page__img">
                    <div className="victoria-page__perfil">
                        <h2 className='coffee-titles'>🇨🇴 Esencia  de Victoria:</h2>
                        <h3>Perfil:</h3>
                        <p>-🌱 Elixir 100% Arábica.</p>
                        <p>-📍 Composición exclusiva de:</p>
                        <ul>
                            <li>Cafetales colombianos abrazados por árboles de mango, que transfieren al grano una esencia frutal única, alegre y exótica.</li>
                            <li>Desde las tierras altas de Etiopía, este café aporta un fondo achocolatado que realza el dulzor tropical.</li>
                            <li>Café dominicano de altura, con cuerpo sedoso, perfil meloso y un final encantador, digno de una princesa caribeña.</li>
                        </ul>
                    </div>
                </div>

                <div className="victoria-page__block">


                    <div className="victoria-page__paragraph">
                        <h3>👅Notas de cata:</h3>
                        <p>☕ Entrada frutal intensa con carácter tropical, dominada por la dulzura del mango maduro que acaricia el paladar desde el primer sorbo.</p>
                        <p>🍫 Cuerpo medio-alto, sedoso, con un fondo achocolatado profundo que se entrelaza suavemente con la fruta.</p>
                        <p>💫 Final largo, redondo y jugoso, con ecos melosos que permanecen, dejando una sensación cálida y elegante.</p>
                        <p>🔬 Diseñada para revelar su complejidad tanto en espresso como en métodos filtrados, esta composición expresa lo mejor de tres tierras y una intención clara: transformar una taza en una experiencia emocional.</p>
                    </div>
                    <div className="victoria-page__paragraph">
                        <h3>💖 Descripción emocional:</h3>
                        <AddToCart product={PRODUCT} />
                    </div>
                    <div className="victoria-page__paragraph">

                        <p>
                            "Esencia de Victoria" no es solo café —es un homenaje.
                            Inspirada en la hija del fundador de Coffee Power, una joven dulce, alegre y enamorada de República Dominicana, esta creación refleja su carácter: encantadora, vibrante y adictiva.
                        </p>
                        <p>
                           Desde los cafetales bañados por mangos en Colombia, pasando por la profundidad ancestral de Etiopía, hasta el encanto meloso del Caribe, esta composición nace del amor familiar y el arte de crear experiencias únicas en una taza.  
                        </p>
                       <p>
                         Un elixir que transforma cada sorbo en un recuerdo, en una emoción.
                        Es la fusion perfecta entre ternura y carácter.
                        Entre lo dulce… y lo inolvidable.
                       </p>
                       
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EsenciaVictoria