import React from 'react';
import './styles.scss';
import SlideShow from '../../components/SlideShow/SlideShow';
import coffeesCatalogue from '../../data/coffee';

const PowerSelection = () => {
const powerSelection = coffeesCatalogue
  .filter(cafe => cafe.tags.includes("power-selection"))
  .sort((a, b) => a.orderSel - b.orderSel);
  return (
    <div className='power-selection'>
        <div className="power-selection__block2">
               <h1 className="power-selection__title">COFFEE POWER SELECTION</h1>
            <p className="power-selection__legend">"Elegidos a mano por Chris Rosas, estos cafés son puro poder líquido para tu día."</p>
           <SlideShow items={powerSelection}/>
        </div>
    </div>
  )
}

export default PowerSelection