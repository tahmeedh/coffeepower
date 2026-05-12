import React, { useContext } from 'react';
import './DesktopHeader.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-nuevo.png'
import menuBtn1 from '../../assets/images/menu-1.png';
import menuBtn2 from '../../assets/images/menu-2.png';
import menuBtn3 from '../../assets/images/menu-3.png';
import menuBtn4 from '../../assets/images/menu-4.png';
import menuBtn5 from '../../assets/images/login.png'
import whatsappBtn from '././../../assets/images/whatsapp.png'
import { useAuth } from "../../context/AuthContext";
import BackgroundMusic from '../BackgroundMusic/BackgroundMusic';

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

]

const MainNav = ({ fontColor }) => {

    const { user } = useAuth();

    return (
        <nav className='header-block__nav' >
            <BackgroundMusic/>
            {menuItems.map((item, index) => {
                return (
                    <Link
                        className='header-block__items'
                        to={item.url}
                        key={index}>
                        <img className='header-block__image' src={item.imgUrl} alt={item.label} />
                        <p style={{ color: fontColor }} className="header-block__label">{item.label}</p>
                    </Link>
                )

            })}
            <a className='header-block__items' href="https://wa.me/34620132131" target="_blank" rel="noopener noreferrer">
                <img className='header-block__image' src={whatsappBtn} alt="whatsapp" />
                <p className='header-block__label'>whatsapp</p>
            </a>
            {/* <Link className='header-block__items' to={user ? "/perfil" : "/login"}>
                <img src={menuBtn5} className='header-block__image' alt='perfil' />
                <p className="header-block__label">{user ? 'Mi Perfil' : 'Login'}</p>
            </Link> */}
            
        </nav>
    )
}

const DesktopHeader = ({ linkColor }) => {
    return (
        <div className='header-block'>
            <Link to='/'>
                <img className='header-block__logo' src={logo} />
            </Link>

            <MainNav fontColor={linkColor} />
        </div>
    )
}

export default DesktopHeader;