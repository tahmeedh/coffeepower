import React from 'react';
import { Link } from 'react-router-dom';
import './CompraExpres.scss';

const selections = [
  {
    name: 'Los Más Vendidos',
    legend: '"No se agotan por casualidad. ¡Descubre por qué todos los eligen!"',
    url: '/nuestroscafes/cafesdelacasa',
  },
  {
    name: 'Esencia De Colombia',
    legend: '"Sabor auténtico desde el corazón cafetero del mundo."',
    url: '/nuestroscafes/esenciacolombia',
  },
  {
    name: 'Descafeinados De Élite',
    legend: '"Sin cafeína, con todo el carácter. Descubre lo que nadie te contó."',
    url: '/nuestroscafes/descafeinados',
  },
];

const CompraExpres = () => {
  return (
    <div className="compra-expres">
      <div className="compra-expres__block">
        <h1 className="compra-expres__title">Compra Express</h1>
        <div className="compra-expres__grid">
          {selections.map((item, index) => (
            <Link className="compra-expres__card" to={item.url} key={index}>
              <h2 className="compra-expres__card-name">{item.name}</h2>
              <p className="compra-expres__card-legend">{item.legend}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompraExpres;
