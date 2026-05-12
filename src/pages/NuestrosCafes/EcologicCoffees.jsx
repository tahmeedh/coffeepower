import React from 'react';
import coffeesCatalogue from '../../data/coffee';
import SlideShow from '../../components/SlideShow/SlideShow';

const EcologicCoffees = () => {
 const ecologicos = coffeesCatalogue
  .filter(cafe => cafe.tags.includes("ecologico"))
  .sort((a, b) => a.orderEco - b.orderEco);

  return (
    <div className='eco-coffees'>
      <div className="eco-coffees__block2">
        <h1 className="eco-coffees__title">Ecológicos</h1>
        <p className="eco-coffees__legend">"Cultivados con respeto a la tierra, para que tú disfrutes con proposito."</p>
        <SlideShow items={ecologicos} />
      </div>
    </div>

  )
}

export default EcologicCoffees