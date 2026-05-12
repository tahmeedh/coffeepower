import React from 'react';
import './styles.scss';
import SlideShow from '../../components/SlideShow/SlideShow';
import coffeesCatalogue from '../../data/coffee';

const TravelWorld = () => {
    const travelers = coffeesCatalogue
        .filter(cafe => cafe.tags.includes("viajar"))
        .sort((a, b) => a.order - b.order);

  return (
    <div className='travelworld-page'>

      <div className="travelworld-page__block2">
         <h1 className="travelworld-page__title">Viajando por el mundo</h1>
        <p className="travelworld-page__legend">"Una selección de los mejores cafés de origen, para que explores los sabores únicos de cada país."</p>
        <SlideShow items={travelers} />
      </div>
    </div>
  )
}

export default TravelWorld