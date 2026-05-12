import React from 'react';
import misterCoffee from '../../assets/images/mr_coffee.png';

const SuscribedPage = () => {
    return (
        <div className='confirmation-screen'>
            <div className="confirmation-screen__block">
                <img src={misterCoffee} alt="mister-coffee" className='confirmation-screen__image' />
                <h2>
                    ¡Bienvenido a Mr Coffee, donde nace una nueva forma de vivir el café!
                </h2>
                <h3>Ahora formas parte de un círculo selecto: los verdaderos amantes del café auténtico. En pocos minutos recibirás tu primer mensaje, cargado de experiencias únicas, acceso anticipado a lanzamientos y secretos que solo unos pocos conocen.</h3>
                <h3>Esto no es una newsletter… es el comienzo de una revolución cafetera. Mr Coffee Lovers: donde cada sorbo cuenta una historia.</h3>
            </div>

        </div>
    )
}

export default SuscribedPage