import React from 'react';
import suscribeBtn from '../../assets/images/SUSCRIBE.png';
import { Link } from 'react-router-dom';

const SuscribeBtn = () => {
  return (
    <div className='suscribe-btn'>
             <Link to="/suscribe">
                <img className='suscribe-btn__img' src={suscribeBtn} alt='comprar' />
            </Link>
    </div>
  )
}

export default SuscribeBtn