import React from 'react';
import './styles.scss';
import SlideShow from '../../components/SlideShow/SlideShow';
import coffeesCatalogue from '../../data/coffee';


const ColombianEsence = () => {
const colombianCoffees = coffeesCatalogue
  .filter(cafe => cafe.tags.includes("colombia"))
  .sort((a, b) => a.orderCol - b.orderCol);
  return (
    <div className='colombia-esence'>
      <div className="colombia-esence__block2">
         <h1 className="colombia-esence__title">ESENCIA DE COLOMBIA</h1>
        <p className="colombia-esence__legend">"Una seleccion directa de fincas que cultivan con pasión, historia y alma colombiana."</p>
        <SlideShow items={colombianCoffees} />
      </div>
    </div>
  )
}

export default ColombianEsence