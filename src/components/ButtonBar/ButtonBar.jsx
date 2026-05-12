import React from 'react';
import './ButtonBar.scss';
import eventsBtn from '../../assets/images/eventos.png'
import { Link } from 'react-router-dom';

const ButtonBar = () => {
  return (
    <div className='button-bar__block'>
      <Link to="/eventos">
        <img className='button-bar__btn' src={eventsBtn} alt='comprar' />
      </Link>
     
    </div>
  )
}

export default ButtonBar