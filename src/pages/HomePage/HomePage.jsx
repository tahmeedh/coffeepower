import React, { useState, useEffect } from 'react';
import './HomePage.scss';
import animationPc from '../../assets/video/video-coffee-power-pc.mp4';
import animationMobile from '../../assets/video/home-movil.mp4';
import { useAuth } from "../../context/AuthContext";



const VideoComponent = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth <= 1075 ? animationMobile : animationPc);
  const { user } = useAuth();

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 1075;
      setVideoSrc(isMobile ? animationMobile : animationPc);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="video-container">
      <video muted disablePictureInPicture loop autoPlay playsInline className="video-background">
        <source src={videoSrc} type="video/mp4" />
        Tu navegador no soporta videos.
        <h1 className='video-title'>Bienvenido {user ? user.displayName || user.email : "Visitante"}!</h1>
      </video>
    </div>
  )
}


const HomePage = () => {
  return (
    <div className='home-page__container'>
      <VideoComponent />

    </div>
  )
}

export default HomePage
