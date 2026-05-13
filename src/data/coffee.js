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

const coffeesCatalogue = [
    {
        id: 'panama-geisha',
        name: "🇵🇦 Panama: Geisha Esmeralda",
        image: panama ,
        url:'/nuestroscafes/panama',
        description: '"La joya de las alturas. Un perfume en taza... y el café más elegante del mundo."',
        tags: ["viajar", "tesoros"],
        price: 22,
        order:1,
        orderTes:1
    },
    {
        id: 'nicaragua-oro',
        name: "🇳🇮 nicaragua: oro Volcánico",
        image: nicaragua ,
        url:'/nuestroscafes/nicaragua',
        description: '"Un tesoro en calma, Café con alma suave, raíces profundas y final dorado."',
        tags: ["viajar"],
        price: 15,
        order:6,

    },
    {
        id: 'peru-andino',
        name: "🇵🇪 Perú: andino orgánico ",
        image: peru ,
        url:'/nuestroscafes/peru',
        description: '"El alma de los Andes en una taza"',
        tags: ["viajar"],
        price: 15,
        order: 5
    },
    {
        id: 'hawaii-kona',
        name: "hawái:kona élite",
        image: hawai ,
        url:'/nuestroscafes/hawai',
        description: '"Lujo volcánico entre olas y flores. Un viaje sensorial al paraíso"',
        tags: ["viajar"],
        price: 22,
        order:2
    },
    {
        id: 'puerto-rico',
        name: "🇵🇷 puerto rico: reserva del caribe",
        image: puertoRico ,
        url:'/nuestroscafes/puertorico',
        description: '"Café con corazón isleño. Un clásico caribeño "',
        tags: ["viajar"],
        price: 15,
        order:3
    },
    {
        id: 'costa-rica',
        name: "🇨🇷 costa rica: valle central",
        image: costaRica ,
        url:'/nuestroscafes/costarica',
        description: '"Donde la pureza se transforma en sabor"',
        tags: ["viajar"],
        price: 15,
        order: 10
    },

    {
        id: 'brasil-cerrado',
        name: "🇧🇷 Brasil: cerrado mineiro",
        image: brasil ,
        url:'/nuestroscafes/brasil',
        description: '"Sabor que conquista el mundo"',
        tags: ["viajar"],
        price: 14,
        order: 4
    },
     {
        id: 'golden-sunset',
        name: "Golden Sunset: sídamo edition",
        description: '"Cae el sol, sube tu energia. Sin prisas, sin cafeína, solo placer."',
        image: goldenSunset,
        url: "/nuestroscafes/goldensunset",
        tags: ["tesoros", "exclusive", "descafeinado"],
        price: 16,
        orderEx:3,
        orderDes:3,
        orderTes: 3
    },
    {
        id: 'total-relax',
        name: "Coffee Power Total Relax",
        description: '"Descansa sin renunciar al placer. Cafe suave para cerrar el dia con calma y alma."',
        image: totalRelax,
        url: "/nuestroscafes/totalrelax",
        tags: ["power-selection", "exclusive", "descafeinado", "tesoros"],
        price: 15,
        orderSel: 3,
        orderEx:2,
        orderDes:2,
        orderTes:2

    },
    {
        id: 'serenidad',
        name: "🇨🇴 Coffee Power Serenidad",
        description: '"Swiss Water descafeinado Especialidad Colombia"',
        image: serenidadIcon,
        url: "/nuestroscafes/serenidad",
        tags: ["descafeinado", "mas-vendido", "colombia", "ecologico"],
        price: 15,
        orderSell: 6,
        orderCol: 2,
        orderEco: 2,
        orderDes:1
    },
    {
        id: 'supremo',
        name: "🇨🇴 Coffee Power Supremo",
        description: '"La excelencia de nuestro café insignia"',
        image: supremoIcon,
        url: "/nuestroscafes/supremo",
        tags: ["mas-vendido", "colombia"],
        price: 15,
        orderSell: 7,
        orderCol: 1
    },
    {
        id: 'amucc',
        name: "🇨🇴 Coffee Power AMUCC",
        description: '"El sabor del empoderamiento femenino en el Cauca colombiano"',
        image: amuccIcon,
        url: "/nuestroscafes/amucc",
        tags: ["ecologico", "colombia"],
        price: 15,
        orderCol: 3,
        orderEco: 1
    },
    {
        id: 'relax',
        name: "🇲🇽 Coffee Power Relax",
        image: relaxIcon,
        url: '/nuestroscafes/relax',
        description: '"Swiss Water Descafeinado México"',
        tags: ["descafeinado", "mas-vendido", "favoritos-chef"],
        price: 15,
        orderSell: 8,
        orderDes:2

    },
    {
        id: 'esencia-victoria',
        name: "🇨🇴 Esencia de Victoria",
        image: victoriaIcon,
        url: '/nuestroscafes/esenciavictoria',
        description: '"🌺 Un tributo al amor, a lo dulce… y a lo verdaderamente inolvidable."',
        tags: ["mas-vendido", "favoritos-chef", "colombia", "exclusive"],
        price: 15,
        orderSell: 1,
        orderEx: 1

    },
    {
        id: 'el-bendecido',
        name: "🇩🇴 El bendecido",
        image: bendecidoIcon,
        url: '/nuestroscafes/elbendecido',
        description: '"🇩🇴 La vibra de una tierra sagrada, el sabor de un pueblo lleno de AMOR."',
        tags: ["mas-vendido", "viajar"],
        price: 15,
        orderSell: 5,
        order: 8
    },
    {
        id: 'el-origen',
        name: "🇪🇹 El Origen",
        image: origenIcon,
        url: '/nuestroscafes/elorigen',
        description: '"🌍 Donde todo comenzó. Donde aún se siente la magia."',
        tags: ["mas-vendido", "favoritos-chef", "viajar"],
        price: 16,
        orderSell: 3,
        order:9
    },
    {
        id: 'night-edition',
        name: "Night Edition",
        description: '"Descafeinado 100% natural Swiss Water"',
        image: nightIcon,
        url: '/nuestroscafes/noche',
        tags: [],
        price: 15,
    },
    {
        id: 'kenia-premium',
        name: "🇰🇪 SL28 Kenia Premium ",
        description: '"El fuego brillante de África"',
        image: keniaIcon,
        url: "/nuestroscafes/kenia",
        tags: ["favoritos-chef"],
        price: 20,
    },
    {
        id: 'geisha',
        name: "🇨🇴 Coffee Power Geisha",
        description: '"La joya de la corona Coffee Power Selection. El café preferido del chef de la casa; Chris Rosas"',
        image: geishaIcon,
        url: "/nuestroscafes/geisha",
        tags: ["mas-vendido", "favoritos-chef", "power-selection", "colombia"],
        price: 18,
        orderSell: 9,
        orderSel: 1
    },
    {
        id: 'bourbon-supremo',
        name: "🇨🇴 Bourbon Supremo",
        description: '"El alma eterna del café"',
        image: bourbonIcon,
        url: "/nuestroscafes/bourbon",
        tags: ["mas-vendido", "favoritos-chef", "power-selection", "tesoros", "colombia", "ecologico"],
        price: 18,
        orderSell: 2,
        orderSel: 2,
        orderEco: 3,
        orderTes:4
    },
    {
        id: 'caracolillo',
        name: "Caracolillo",
        description: '"El secreto mejor guardado de la naturaleza"',
        image: caracolilloIcon,
        url: "/nuestroscafes/caracolillo",
        tags: ["mas-vendido", "viajar"],
        price: 18,
        orderSell: 4,
        order:7
    },

]

export default coffeesCatalogue;
