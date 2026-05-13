import { Link } from 'react-router-dom';
import './NuestrosCafes.scss';

const subcategories = [
  {
    name: "Los Más Vendidos",
    url: '/nuestroscafes/cafesdelacasa',
    legend: '"No se agotan por casualidad. ¡Descubre por que todos los eligen!"'
  },
  {
    name: 'Coffee Power Selection',
    url: '/nuestroscafes/coffeepowerselection',
    legend: '"Nuestra élite secreta. Café para los que buscan lo más potente."'

  },
  {
    name: 'Esencia de Colombia',
    url: '/nuestroscafes/esenciacolombia',
    legend: '"Sabor auténtico desde el corazón cafetero del mundo."'
  },
  {
    name: 'Los favoritos del Chef',
    url: '/nuestroscafes/reservaexclusiva',
    legend: '"Si el chef los prefiere... será por algo. Pura excelencia en taza."'

  },
  {
    name: 'Ecológicos',
    url: '/nuestroscafes/ecologicos',
    legend: '"Cuidamos el planeta, sin renunciar al placer. Elige consciente, saborea mejor."'
  },
  {
    name: 'Recetas Exclusivas del Día',
    url: '/nuestroscafes/recetasexclusivas',
    legend: '"Ediciones limitadas. Sabor único que no se repite. ¿Te atreves hoy?"'
  },
  {
    name: 'Descafeinados de Élite',
    url: '/nuestroscafes/descafeinados',
    legend: '"Sin cafeína, con todo el carácter. Descubre lo que nadie te contó."'
  },
  {
    name: 'Viajar por el Mundo',
    url: '/nuestroscafes/viajarelmundo',
    legend: '"Explora el mundo sin moverte de tu taza. Cada país, una historia. Cada sorbo, un destino."'
  },
  {
    name: 'Tesoros Escondidos',
    url: '/nuestroscafes/tesoros',
    legend: '"Cafés que nadie conoce... aún. Solo para exploradores de verdad."'
  }
]

const NuestrosCafes = () => {
  return (
    <div className='nuestros-cafes'>
      <div className="nuestros-cafes__block">
        <h1 className='nuestros-cafes__title'>Nuestros cafés:</h1>

        <div className="nuestros-cafes__list">

          {subcategories.map((item, index) => {
            return (
              <Link
                className='subcategories-card'
                to={item.url}
                key={index}>
                <h2 className="subcategories-card__label">{item.name}</h2>
                <p className='subcategories-card__legend'>{item.legend}</p>
              </Link>
            )

          })}

        </div>
      </div>



    </div>
  )
}

export default NuestrosCafes