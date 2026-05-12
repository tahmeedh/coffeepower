import React, { useState } from 'react';
import './SlideShow.scss';
import { Link } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';

const SlideShow = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => nextSlide(),
        onSwipedRight: () => prevSlide(),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true, // opcional si quieres que también funcione con mouse
    });

    return (
        <div className="slideshow">
            <div className="slideshow__wrapper" {...handlers} style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                width: `${items.length * 100}%`,
            }}>
                {items.map((item, index) => (
                    <Link to={item.url} key={index} className="slideshow__content">
                        <h3 className="slideshow__title">{item.name}</h3>
                        <img src={item.image} alt={item.name} className="slideshow__image" />
                    </Link>
                ))}
            </div>
            <div className="slideshow__indicators">
                {items.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${currentIndex === index ? 'active' : ''}`}
                    />
                ))}
            </div>

            {/* Opcional: muestra controles solo en pantallas grandes */}
            {items.length > 1 && window.innerWidth > 675 && (
                <div className="slideshow__controls">
                    <div className="slideshow__nav">
                        <button onClick={prevSlide} className="slideshow__button">
                            &#10094;
                            <p className="slideshow__nav-label">{items[(currentIndex - 1 + items.length) % items.length].name}</p>
                        </button>
                    </div>
                    <div className="slideshow__nav">
                        <button onClick={nextSlide} className="slideshow__button">
                            &#10095;
                            <p className="slideshow__nav-label">{items[(currentIndex + 1) % items.length].name}</p>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SlideShow;
