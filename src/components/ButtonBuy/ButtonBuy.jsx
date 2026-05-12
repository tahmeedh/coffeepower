import React from 'react';
import nuestrosCafesBtn from '../../assets/images/nuestros_cafes.png';
import { Link } from 'react-router-dom';


const ButtonNuestrosCafes = () => {
    return (
        <div className='button-buy'>
            <Link to="/nuestroscafes">
                <img className='button-buy__btn' src={nuestrosCafesBtn} alt='nuestros cafés' />
            </Link>
        </div>


    )
}

export default ButtonNuestrosCafes