import React from 'react';
import './OurCoffees.scss';
import victoriaIcon from '../../assets/icons/esencia-icon.png';
import bendecidoIcon from '../../assets/icons/bendecido-icon.png';
import origenIcon from '../../assets/icons/origen-icono.png';
import geishaIcon from '../../assets/icons/geisha-icon.png';
import keniaIcon from '../../assets/images/kenia-icon.png';
import bourbonIcon from '../../assets/images/bourbon-icon.png';
import serenidadIcon from '../../assets/icons/serenidad-icon.png';
import supremoIcon from '../../assets/icons/mister-coffee-supremo-icon.png';
import amuccIcon from '../../assets/icons/mister-coffee-amucc-icon.png';
import relaxIcon from '../../assets/icons/relax-icon.png';
import nightIcon from '../../assets/icons/mister-coffee-night-icon.png';
import 'swiper/css';
import SlideShow from '../../components/SlideShow/SlideShow';



const coffeeCatalogue = [
  {
    name: "🇲🇽 Mister Coffee Relax",
    image: relaxIcon,
    url: '/nuestroscafes/relax',
    description: '"Swiss Water Descafeinado México"'

  },
  {
    name: "🇨🇴 Esencia de Victoria",
    image: victoriaIcon,
    url: '/nuestroscafes/esenciavictoria',
    description: "🌺 Un tributo al amor, a lo dulce… y a lo verdaderamente inolvidable."

  },
  {
    name: "🇩🇴 El bendecido",
    image: bendecidoIcon,
    url: '/nuestroscafes/elbendecido',
    description: "🇩🇴 La vibra de una tierra sagrada, el sabor de un pueblo lleno de AMOR."
  },
  {
    name: "🇪🇹 El origen",
    image: origenIcon,
    url: '/nuestroscafes/elorigen',
    description: "🌍 Donde todo comenzó. Donde aún se siente la magia."
  },

];

const exclusiveSelection = [
  {
    name: "🇰🇪 SL28 Kenia Premium ",
    description: '"El diamante frutal de África"',
    image: keniaIcon,
    url: "/nuestroscafes/kenia"
  },
  {
    name: "🇨🇴 Mister Coffee Geisha",
    description: '"La joya de la corona de Mr. Coffee Selection. El café preferido del chef de la casa; Chris Rosas"',
    image: geishaIcon,
    url: "/nuestroscafes/geisha"
  },
  {
    name: "🇨🇴 Bourbon Supremo",
    description: '“El alma eterna del café”',
    image: bourbonIcon,
    url: "/nuestroscafes/bourbon"
  },

];
const colombiaEsence = [
  {
    name: "🇨🇴 Mister Coffee Serenidad",
    description: '“Swiss Water descafeinado Especialidad Colombia”',
    image: serenidadIcon,
    url: "/nuestroscafes/serenidad"
  },
  {
    name: "🇨🇴 Mister Coffee Supremo",
    description: '“La excelencia de nuestro café insignia”',
    image: supremoIcon,
    url: "/nuestroscafes/supremo"
  },
  {
    name: "🇨🇴 Mister Coffee AMUCC",
    description: '“El sabor del empoderamiento femenino en el Cauca colombiano”',
    image: amuccIcon,
    url: "/nuestroscafes/amucc"
  },
]

const exclusiveReserv = [
  {
    name: "Mister Coffee Noche | Night Edition",
    description: '"Descafeinado 100% natural Swiss Water"',
    image: nightIcon,
    url: '/nuestroscafes/noche'
  }
]


const OurCoffees = () => {


  return (
    <div className='our-coffees'>

      <div className="our-coffees__block">
        <div className="our-coffees__title">
          <h1>Nuestros Cafés:</h1>
          <p>Una exquisita selección de lo mejor:</p>
        </div>

        <SlideShow items={coffeeCatalogue} />
      </div>

      <div className="our-coffees__block3">
        <h2 className='our-coffees__subtitle'>Mister coffee selection: </h2>
        <p>( Los preferidos del chef )</p>
        <p>Próximamente...</p>
        <SlideShow items={exclusiveSelection} />

      </div>
      <div className="our-coffees__block4">
        <div className="our-coffees__paragraph">
          <h2>ESENCIA DE COLOMBIA:</h2>
          <p>La colección consentida de la casa
            By Mr Coffee</p>
          <h3>💖 INTRODUCCIÓN:</h3>
          <p>"Colombia no es solo un origen. Es una pasión que vive en cada grano."</p>
          <p>"En Mr Coffee hemos seleccionado con extremo cuidado las variedades que mejor representan la riqueza, diversidad y carácter del café colombiano.
            Cada una de nuestras creaciones dentro de Esencia de Colombia refleja no solo un perfil sensorial único, sino también una historia de colaboración con productores expertos y una búsqueda incansable por ofrecer lo mejor."</p>
          <p>"Desde el equilibrio y excelencia de nuestro insignia Supremo Colombia, hasta opciones descafeinadas para quienes desean disfrutar del sabor sin cafeína."</p>
          <p>"Aquí no solo compras café. Descubres el alma de Colombia en cada taza."</p>
        </div>

      </div>
      <div className="our-coffees__block5">
        <h2>CAFÉS DE LA SELECCIÓN:</h2>

        <SlideShow items={colombiaEsence} />


        <p>“Porque en cada sorbo de Mr Coffee se siente el alma de una tierra que vibra con sabor y excelencia.”</p>
      </div>
      <div className="our-coffees__block6">
        <h2>LA RESERVA EXCLUSIVA DEL CHEF:</h2>
        <SlideShow items={exclusiveReserv} />
      </div>
      <div className="our-coffees__block2">
        <p>
          En Mr. Coffee no solo servimos café… Creamos experiencias.
        </p>
        <p>
          Nuestros granos se presentan a granel directamente desde auténticos barriles de roble que han envejecido vino tinto de las mejores bodegas.
        </p>
        <p>El resultado: un café que respira historia, madera y carácter.</p>
        <p> Cada taza que nace de estos barriles tiene un alma distinta.</p>
        <p> Notas intensas, una textura redonda y un aroma envolvente.</p>
        <p> Una fusión sutil entre el café de especialidad y la nobleza del vino.

        </p>
        <p>
          📍 Disponible solo en tienda (Servicio a granel.), pedidos online al +34 622 40 35 12.

        </p>
        <p>

          ⚜️ Exclusividad para quienes entienden que el café también se sirve con clase.
        </p>
      </div>
    </div>
  )
}

export default OurCoffees;