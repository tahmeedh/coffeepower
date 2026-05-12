import React from 'react';
import './styles.scss';
import coffeesCatalogue from '../../data/coffee';
import SlideShow from '../../components/SlideShow/SlideShow';

const ChefFavorites = () => {
  const favoritosChef = coffeesCatalogue.filter(cafe =>
    cafe.tags.includes("favoritos-chef")
  );
  return (
    <div className='chef-favorites'>
      <div className="chef-favorites__block">
        <h1 className="chef-favorites__title">Los Favoritos del Chef</h1>
        <p className="chef-favorites__legend">"Cada grano ha pasado por las manos del experto que mas cuida cada detalle del sabor."</p>

      </div>
      <div className="chef-favorites__block2">
        <SlideShow items={favoritosChef} />
      </div>
    </div>
  )
}

export default ChefFavorites