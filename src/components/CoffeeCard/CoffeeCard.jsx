import React from 'react';
import './CoffeeCard.scss';
import { Link } from 'react-router-dom';

const CoffeeCard = ({ imgUrl, name, description, url }) => {
    return (
        <Link to={url} className='mosaic-card'>
            <img className='mosaic-card__image' src={imgUrl} alt={name} />
            <div className="mosaic-card__info">
                <h3 className="mosaic-card__title">{name}</h3>
                <p className="mosaic-card__description">{description}</p>
            </div>
        </Link>
    )
}

export default CoffeeCard;