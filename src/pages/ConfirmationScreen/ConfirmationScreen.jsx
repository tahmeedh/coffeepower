import React from 'react';
import './ConfirmationScreen.scss';
import misterCoffee from '../../assets/images/mr_coffee.png';

const ConfirmationScreen = () => {
    return (
        <div className='confirmation-screen'>
            <div className="confirmation-screen__block">
                <img src={misterCoffee} alt="mister-coffee" className='confirmation-screen__image' />
                <h2>! Tus deseos serán escuchados! Se asignará exclusivamente un agente para tu caso y se pondrá en contacto contigo en cuanto antes. </h2>
            </div>

        </div>
    )
}

export default ConfirmationScreen