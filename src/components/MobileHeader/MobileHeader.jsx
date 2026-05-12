import React, { useContext, useState } from "react";
import "./MobileHeader.scss";
import { Link, NavLink } from "react-router-dom";
import logoImg from "../../assets/images/logo-nuevo.png"
import { Squeeze as Hamburger } from "hamburger-react";
import menuBtn2 from '../../assets/images/menu-2.png';
import menuBtn3 from '../../assets/images/menu-3.png';
import menuBtn4 from '../../assets/images/menu-4.png';
import whatsappBtn from '././../../assets/images/whatsapp.png'
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import BackgroundMusic from "../BackgroundMusic/BackgroundMusic";

const MobileHeader = () => {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  const { itemCount, setIsOpen: openCart } = useCart();
  const ubication = window.location.pathname;

  const menuItems = [
    {
      label: "¿quiénes somos?", imgUrl: menuBtn2, url: "/quienessomos"
    },
    {
      label: "accesorios pro", imgUrl: menuBtn3, url: "/accesorios"
    },
    {
      label: "contacto", imgUrl: menuBtn4, url: "/contacto"
    },

  ];

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <div className="header-mobile">
      <div className="header-mobile__block">
        <div className="header-mobile__menu">
          <Hamburger
            toggled={open}
            toggle={setOpen}
            easing="ease-in"
            rounded
            hideOutline={false}
            onClick={() => setOpen(!open)}
            color="#ffffff"
          ></Hamburger>
          <BackgroundMusic />
        </div>
        
        <Link to='/'>
          <img className="header-mobile__logo" src={logoImg} alt="logo-aroma-king" />
        </Link>
        <button className="header-mobile__cart" onClick={() => openCart(true)}>
          🛒{itemCount > 0 && <span className="header-mobile__cart-badge">{itemCount}</span>}
        </button>
      </div>
      
      <nav className={`header-nav ${!open ? 'slide-in' : 'slide-out'}`}>

        <div className="header-nav__sections">


          {menuItems.map((links, index) => {
            return (
              <NavLink
                key={index}
                to={links.url}
                className="header-mobile__fieldset"
                onClick={handleLinkClick}
              >
                <img className="header-mobile__icons" src={links.imgUrl} alt={links.label} />
                <p className="header-mobile__links">{links.label}</p>
              </NavLink>
            );
          })}
          {/* <Link onClick={handleLinkClick} className="header-mobile__fieldset" to={user ? "/perfil" : "/login"}>
            <img src={profileBtn} className="header-mobile__icons" alt="" />
            <p className="header-mobile__links">{user ? 'Mi Perfil' : 'Login'}</p>
          </Link> */}
          <a className="header-mobile__fieldset" href="https://wa.me/34620132131?text=Hola%2C%20estoy%20interesado%20en%20los%20productos%20de%20Mister%20Coffee.%20%C2%BFPuedes%20darme%20m%C3%A1s%20informaci%C3%B3n%3F" target="_blank" rel="noopener noreferrer">
            <img className="header-mobile__icons" src={whatsappBtn} alt="whatsapp" />
            <p className="header-mobile__links">whatsapp</p>
          </a>
        </div>

      </nav>

    </div>
  )
}

export default MobileHeader