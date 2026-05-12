// BackgroundMusic.jsx
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import musicaFondo from '../../assets/video/bachata-fondo.mpeg'

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handleToggle = () => {
    const audio = audioRef.current;
    if (playing) {
      audio.pause();
    } else {
      audio.volume = 0.4;
      audio.play().catch(e => console.warn("Autoplay bloqueado", e));
    }
    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src={musicaFondo} type="audio/mpeg" />
        Tu navegador no soporta audio HTML5.
      </audio>

      {/* Botón futurista */}
      <button
        onClick={handleToggle}
        style={{
          padding: '10px',
          border: '2px solid #c69c6d',
          background: 'radial-gradient(circle at 30% 30%, #3c2e27, #1f1a17)',
          borderRadius: '999px',
          color: '#fff3e0',
          fontWeight: 'bold',

          fontSize: '14px',
          boxShadow: '0 4px 12px rgba(198, 156, 109, 0.4)',
          textShadow: '0 1px 1px #000',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          cursor: 'pointer',
          transform: playing ? 'scale(1.05)' : 'scale(1)',
        }}
        onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 18px rgb(128, 88, 43)'}
        onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 12px rgba(198, 156, 109, 0.4)'}
      >
        {playing ? 'Pause ☕' : 'Play🎵'}
      </button>
    </>
  );
};

export default BackgroundMusic;