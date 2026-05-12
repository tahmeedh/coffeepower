import React from 'react';
import './styles.scss';
import SlideShow from '../../components/SlideShow/SlideShow';
import coffeesCatalogue from '../../data/coffee';

const HiddenTreasures = () => {
  const tesoros = coffeesCatalogue
        .filter(cafe => cafe.tags.includes("tesoros"))
        .sort((a, b) => a.orderTes - b.orderTes);


  return (
    <div className='treasures-page'>
      <div className="treasures-page__block2">
         <h1 className="treasures-page__title">Tesoros escondidos</h1>
        <p className="treasures-page__legend">"Descubrimientos únicos, micro lotes irrepetibles. Lo que pocos probarán... y tú, te atreves?"</p>
        <SlideShow items={tesoros} />
      </div>
    </div>
  )
}

export default HiddenTreasures