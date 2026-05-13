import { useEffect, useState } from "react";
import clock from '../../assets/images/clock.png'

function CountDown() {
  const [timeLeft, setTimeLeft] = useState(36 * 60 * 60); // 36 horas en segundos

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="countdown" >
       <p>{timeLeft > 0 ? formatTime(timeLeft) : "¡Tiempo terminado!"}</p>
      <img src={clock} className="countdown__img" alt="" />
    </div>
  );
}

export default CountDown;
