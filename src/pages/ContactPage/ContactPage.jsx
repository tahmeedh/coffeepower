import React from 'react';
import './ContactPage.scss';
import instaBtn from '../../assets/icons/insta.png';
import ubicationBtn from '../../assets/icons/ubi.png';
import emailBtn from '../../assets/icons/email.png';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <div className='contact__block'>
      <h2 className="contact__title">INFORMACIÓN DE CONTACTO:</h2>
      <div className="contact__info">

        <a href="mailto:info@coffeepower.es" className="contact__fieldset" target="_blank" rel="noopener noreferrer " >
          <img className='contact__icon' src={emailBtn} alt="email-btn" />
          <p className="contact__link">info@coffeepower.es</p>
        </a>
        <a href='https://www.instagram.com/mistercoffee.es?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' className="contact__fieldset" target="_blank" rel="noopener noreferrer " >
          <img className='contact__icon' src={instaBtn} alt="instagram-btn" />
          <p className="contact__link">Instagram:</p>
          <p className="contact__link">@coffeepower.es</p>
        </a>

        <a className="contact__fieldset" href='https://g.co/kgs/oWHB8oB' target="_blank" rel="noopener noreferrer " >
          <img className='contact__icon' src={ubicationBtn} alt="ubication" />
          <p className="contact__link">Calle Comedias, 7 Antequera Málaga - 29200</p>
        </a>


      </div>
    </div>
  )
}

export default ContactPage