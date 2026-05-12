import serenidadIcon from '../assets/coffees/serenidad.png';
import supremoIcon from '../assets/coffees/supremo.png';
import amuccIcon from '../assets/coffees/AMUCC.png';
import relaxIcon from '../assets/coffees/relax.png';
import victoriaIcon from '../assets/coffees/esencia-de-victoria.png';
import bendecidoIcon from '../assets/coffees/el-bendecido.png';
import origenIcon from '../assets/coffees/el-origen.png';
import nightIcon from '../assets/coffees/night-edition.png';
import geishaIcon from '../assets/coffees/geisha.png';
import bourbonIcon from '../assets/coffees/bourbon-supremo.png';
import keniaIcon from '../assets/coffees/kenia-premium.png';
import caracolilloIcon from '../assets/coffees/caracolillo.png';
import totalRelax from '../assets/coffees/total-relax.png';
import brasil from '../assets/coffees/brasil.png';
import goldenSunset from '../assets/coffees/golden-sunset.png'
import panama from '../assets/coffees/panama.png';
import nicaragua from '../assets/coffees/nicaragua.png';
import peru from '../assets/coffees/peru.png';
import hawai from '../assets/coffees/hawaii.png';
import puertoRico from '../assets/coffees/puerto-rico.png';
import costaRica from '../assets/coffees/costa-rica.png';
import { m } from 'framer-motion';


const coffeesCatalogue = [
    {
        name: "🇵🇦 Panama: Geisha Esmeralda",
        image: panama ,
        url:'/nuestroscafes/panama',
        description: '“La joya de las alturas. Un perfume en taza... y el café más elegante del mundo.”',
        tags: ["viajar", "tesoros"],
        order:1,
        orderTes:1
    },
    {
        name: "🇳🇮 nicaragua: oro Volcánico",
        image: nicaragua ,
        url:'/nuestroscafes/nicaragua',
        description: '“Un tesoro en calma, Café con alma suave, raíces profundas y final dorado.”',
        tags: ["viajar"],
        order:6,

    },
    {
        name: "🇵🇪 Perú: andino orgánico ",
        image: peru ,
        url:'/nuestroscafes/peru',
        description: '“El alma de los Andes en una taza”',
        tags: ["viajar"],
        order: 5
    },
    {
        name: "hawái:kona élite",
        image: hawai ,
        url:'/nuestroscafes/hawai',
        description: '“Lujo volcánico entre olas y flores. Un viaje sensorial al paraíso”',
        tags: ["viajar"],
        order:2
    },
    {
        name: "🇵🇷 puerto rico: reserva del caribe",
        image: puertoRico ,
        url:'/nuestroscafes/puertorico',
        description: '“Café con corazón isleño. Un clásico caribeño ”',
        tags: ["viajar"],
        order:3
    },
    {
        name: "🇨🇷 costa rica: valle central",
        image: costaRica ,
        url:'/nuestroscafes/costarica',
        description: '“Donde la pureza se transforma en sabor”',
        tags: ["viajar"],
        order: 10
    },

    {
        name: "🇧🇷 Brasil: cerrado mineiro",
        image: brasil ,
        url:'/nuestroscafes/brasil',
        description: '"Sabor que conquista el mundo"',
        tags: ["viajar"],
        order: 4
    },
     {
        name: "Golden Sunset: sídamo edition",
        description: '"Cae el sol, sube tu energia. Sin prisas, sin cafeína, solo placer."',
        image: goldenSunset,
        url: "/nuestroscafes/goldensunset",
        tags: ["tesoros", "exclusive", "descafeinado"],
        orderEx:3,
        orderDes:3,
        orderTes: 3
    },
    {
        name: "Coffee Power Total Relax",
        description: '"Descansa sin renunciar al placer. Cafe suave para cerrar el dia con calma y alma."',
        image: totalRelax,
        url: "/nuestroscafes/totalrelax",
        tags: ["power-selection", "exclusive", "descafeinado", "tesoros"],
        orderSel: 3,
        orderEx:2,
        orderDes:2,
        orderTes:2

    },
    {
        name: "🇨🇴 Coffee Power Serenidad",
        description: '“Swiss Water descafeinado Especialidad Colombia”',
        image: serenidadIcon,
        url: "/nuestroscafes/serenidad",
        tags: ["descafeinado", "mas-vendido", "colombia", "ecologico"],
        orderSell: 6,
        orderCol: 2,
        orderEco: 2,
        orderDes:1
    },
    {
        name: "🇨🇴 Coffee Power Supremo",
        description: '“La excelencia de nuestro café insignia”',
        image: supremoIcon,
        url: "/nuestroscafes/supremo",
        tags: ["mas-vendido", "colombia"],
        orderSell: 7,
        orderCol: 1
    },
    {
        name: "🇨🇴 Coffee Power AMUCC",
        description: '“El sabor del empoderamiento femenino en el Cauca colombiano”',
        image: amuccIcon,
        url: "/nuestroscafes/amucc",
        tags: ["ecologico", "colombia"],
        orderCol: 3,
        orderEco: 1
    },
    {
        name: "🇲🇽 Coffee Power Relax",
        image: relaxIcon,
        url: '/nuestroscafes/relax',
        description: '"Swiss Water Descafeinado México"',
        tags: ["descafeinado", "mas-vendido", "favoritos-chef"],
        orderSell: 8,
        orderDes:2

    },
    {
        name: "🇨🇴 Esencia de Victoria",
        image: victoriaIcon,
        url: '/nuestroscafes/esenciavictoria',
        description: '"🌺 Un tributo al amor, a lo dulce… y a lo verdaderamente inolvidable."',
        tags: ["mas-vendido", "favoritos-chef", "colombia", "exclusive"],
        orderSell: 1,
        orderEx: 1

    },
    {
        name: "🇩🇴 El bendecido",
        image: bendecidoIcon,
        url: '/nuestroscafes/elbendecido',
        description: '"🇩🇴 La vibra de una tierra sagrada, el sabor de un pueblo lleno de AMOR."',
        tags: ["mas-vendido", "viajar"],
        orderSell: 5,
        order: 8
    },
    {
        name: "🇪🇹 El Origen",
        image: origenIcon,
        url: '/nuestroscafes/elorigen',
        description: '"🌍 Donde todo comenzó. Donde aún se siente la magia."',
        tags: ["mas-vendido", "favoritos-chef", "viajar"],
        orderSell: 3,
        order:9
    },
    {
        name: "Night Edition",
        description: '"Descafeinado 100% natural Swiss Water"',
        image: nightIcon,
        url: '/nuestroscafes/noche',
        tags: []
    },
    {
        name: "🇰🇪 SL28 Kenia Premium ",
        description: '"El fuego brillante de África"',
        image: keniaIcon,
        url: "/nuestroscafes/kenia",
        tags: ["favoritos-chef"]
    },
    {
        name: "🇨🇴 Coffee Power Geisha",
        description: '"La joya de la corona Coffee Power Selection. El café preferido del chef de la casa; Chris Rosas"',
        image: geishaIcon,
        url: "/nuestroscafes/geisha",
        tags: ["mas-vendido", "favoritos-chef", "power-selection", "colombia"],
        orderSell: 9,
        orderSel: 1
    },
    {
        name: "🇨🇴 Bourbon Supremo",
        description: '“El alma eterna del café”',
        image: bourbonIcon,
        url: "/nuestroscafes/bourbon",
        tags: ["mas-vendido", "favoritos-chef", "power-selection", "tesoros", "colombia", "ecologico"],
        orderSell: 2,
        orderSel: 2,
        orderEco: 3,
        orderTes:4
    },
    {
        name: "Caracolillo",
        description: '"El secreto mejor guardado de la naturaleza"',
        image: caracolilloIcon,
        url: "/nuestroscafes/caracolillo",
        tags: ["mas-vendido", "viajar"],
        orderSell: 4,
        order:7
    },

]

export default coffeesCatalogue;