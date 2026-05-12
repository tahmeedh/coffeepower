import React from 'react'
import { Link } from 'react-router-dom';
import compraExpresBtn from '../../assets/images/compra-expres.png';
import './ButtonEvents.scss'

const ButtonCompraExpres = () => {
    return (
        <div className='button-events'>
            <Link to="/compra-expres">
                <img className='button-events__btn' src={compraExpresBtn} alt='compra expres' />
            </Link>
        </div>

    )
}

export default ButtonCompraExpres