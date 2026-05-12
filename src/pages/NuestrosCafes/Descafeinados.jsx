import React from 'react';
import './styles.scss';
import coffeesCatalogue from '../../data/coffee'
import SlideShow from '../../components/SlideShow/SlideShow';

const Descafeinados = () => {
    const descafeinados = coffeesCatalogue
        .filter(cafe => cafe.tags.includes("descafeinado"))
        .sort((a, b) => a.orderDes - b.orderDes);


  return (
    <div className='descafeinados-page'>
        <div className="descafeinados-page__block2">
          <h1 className="descafeinados-page__title">Descafeínados de Élite</h1>
            <p className="descafeinados-page__legend">"Descafeinados tratados con respeto, para que vivas el ritual sin limites ni interrupciones."</p>
           <SlideShow items={descafeinados}/>
        </div>
    </div>
  )
}

export default Descafeinados