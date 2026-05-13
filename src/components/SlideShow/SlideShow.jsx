import React, { useState } from 'react';
import './SlideShow.scss';
import { useSwipeable } from 'react-swipeable';
import { useCart } from '../../context/CartContext';

const MOLIENDAS = ['Grano', 'Molido espresso', 'Molido italiana', 'Molido prensa', 'Molido filtro', 'V60', 'Chemex'];
const GRAMAJES = ['250g', '300g'];

const SlideItem = ({ item }) => {
    const { addItem } = useCart();
    const [molienda, setMolienda] = useState('Grano');
    const [gramaje, setGramaje] = useState('250g');

    const price = gramaje === '300g' ? item.price + 3 : item.price;

    const handleAdd = () => {
        addItem({
            id: `${item.id}-${molienda.toLowerCase().replace(/\s+/g, '-')}-${gramaje}`,
            name: item.name,
            price,
            image: item.image,
            weight: `${molienda} · ${gramaje}`,
        });
    };

    return (
        <div className="slideshow__content">
            <h3 className="slideshow__title">{item.name}</h3>
            <img src={item.image} alt={item.name} className="slideshow__image" />
            <div className="slideshow__selector">
                <p className="slideshow__selector-label">TIPO DE MOLIENDA</p>
                <div className="slideshow__pills">
                    {MOLIENDAS.map(m => (
                        <button
                            key={m}
                            className={`slideshow__pill${molienda === m ? ' slideshow__pill--active' : ''}`}
                            onClick={() => setMolienda(m)}
                        >
                            {m}
                        </button>
                    ))}
                </div>
                <p className="slideshow__selector-label">GRAMAJE</p>
                <div className="slideshow__pills">
                    {GRAMAJES.map(g => (
                        <button
                            key={g}
                            className={`slideshow__pill${gramaje === g ? ' slideshow__pill--active' : ''}`}
                            onClick={() => setGramaje(g)}
                        >
                            {g}
                        </button>
                    ))}
                </div>
            </div>
            <button className="slideshow__add-btn" onClick={handleAdd}>
                AÑADIR AL CARRITO
            </button>
            {item.description && (
                <p className="slideshow__description">{item.description}</p>
            )}
        </div>
    );
};

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
        trackMouse: true,
    });

    return (
        <div className="slideshow">
            <div className="slideshow__wrapper" {...handlers} style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                width: `${items.length * 100}%`,
            }}>
                {items.map((item, index) => (
                    <SlideItem key={index} item={item} />
                ))}
            </div>
            {items.length > 1 && (
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
