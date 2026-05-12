import React from 'react';
import './EventsPage.scss';
import barrilCafe from '../../assets/images/barril-cafe.png';
import meetingIcon from '../../assets/images/reunion.png';
import { Link } from 'react-router-dom';

const EventsPage = () => {
    return (
        <div className='events-page'>
            <h2 className='events-page__title'>EVENTOS:</h2>
            <div className="events-page__content">
                <Link className="events-page__meeting">
                    <h3 className="events-page__subtitle">Reunión Privada:</h3>
                    <img className='events-page__image' src={meetingIcon} alt="reunion" />
                    <p className='events-page__legend'>Organiza una reunión particular con Coffee Power y tu grupo de amigos...</p>
                </Link>
                <Link className="events-page__meeting" to='/eventos/catas'>
                    <h3 className="events-page__subtitle">Catas Selectas:</h3>
                    <img className='events-page__image' src={barrilCafe} alt="barril-cafe" />
                    <p className='events-page__legend'>Únete a selectas catas donde te brindaremos todas las herramientas para que conozcas el mejor café...</p>
                </Link>

            </div>
        </div>
    )
}

export default EventsPage;