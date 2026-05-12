import React from 'react';
import './styles.scss';
import coffeesCatalogue from '../../data/coffee';
import SlideShow from '../../components/SlideShow/SlideShow';



const ExclusiveRecipes = () => {

    const exclusiveRecipes = coffeesCatalogue
        .filter(cafe => cafe.tags.includes("exclusive"))
        .sort((a, b) => a.orderEx - b.orderEx);

    return (
        <div className='exclusive-recipes'>

            <div className="exclusive-recipes__block2">
                <h1 className="exclusive-recipes__title">Recetas Exclusivas del Dia</h1>
                <p className='exclusive-recipes__legend'>"Solo en Coffee Power: creaciones irrepetibles de un chef que rompe las reglas, pensadas para
                    sorprender a los paladares mas valientes."</p>
                <SlideShow items={exclusiveRecipes} />
            </div>
        </div>
    )
}

export default ExclusiveRecipes