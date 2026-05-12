import React, { useState } from 'react';
import './TastingPage.scss';
import iconBasic from '../../assets/images/catas-inicial.png';
import iconIntermediate from '../../assets/images/catas-intermediate.png';
import iconVip from '../../assets/images/catas-exclusive.png';

const TastingOption = ({ image, title, duration, price, content, benefits }) => {
    const [showContent, setShowContent] = useState(false);
    const [showBenefits, setShowBenefits] = useState(false);

    return (
        <div className="tasting-page__option">
            <img className='tasting-page__image' src={image} alt={title} />
            <h3 className="tasting-page__subtitle">{title}</h3>
            <div className="tasting-page__info">
                <p className='tasting-page__legend'>Duración: {duration}</p>
            </div>

            <div className="tasting-page__buttons">
                <button className='tasting-page__toggle' onClick={() => setShowContent(!showContent)}>
                    {showContent ? 'Ocultar Contenido' : 'Ver Contenido'}
                </button>
                {showContent && (
                    <ul className='tasting-page__list'>
                        {content.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                )}

                <button className='tasting-page__toggle' onClick={() => setShowBenefits(!showBenefits)}>
                    {showBenefits ? 'Ocultar Beneficios' : 'Ver Beneficios'}
                </button>
                {showBenefits && (
                    <ul className='tasting-page__list'>
                        {benefits.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                )}
            </div>
        </div>
    );
};

const TastingPage = () => {
    return (
        <div className='tasting-page'>
            <h2 className='tasting-page__title'>CATAS EXCLUSIVAS:</h2>
            <div className="tasting-page__content">
                <TastingOption
                    image={iconBasic}
                    title="Cata Inicial: 'Descubre el mundo del café'"
                    duration="30-45 minutos"
                    content={["Precio: 10-15€ por persona", "Presentación de 3-4 cafés de origen diferente.", "Explicación breve de cada café, incluyendo su origen, proceso de producción y características organolépticas.", "Degustación de cada café, con oportunidad para que los participantes compartan sus impresiones y preguntas.", "Moliendas básicas: explicación de las diferencias entre moliendas finas, medias y gruesas, y cómo afectan el sabor y la textura del café."]}
                    benefits={["Ebook 'El arte del café' (valorado en 16 euros).", "Conocerás los conceptos básicos del café y podrás apreciar las diferencias entre distintos orígenes y procesos de producción."]}
                />

                <TastingOption
                    image={iconIntermediate}
                    title="Cata Premium: 'Explora la diversidad del café'"
                    duration="60-120 minutos"
                    content={["Precio: 25-35€ por persona","Presentación de 5-6 cafés de alta calidad.", "Degustación de cada café, con oportunidad para que los participantes compartan sus impresiones y preguntas.", "Moliendas avanzadas: explicación de las diferencias entre moliendas de cono, moliendas de cilindro y moliendas de piedra, y cómo afectan el sabor y la textura del café.", "Análisis de las diferencias entre los cafés y discusión sobre las preferencias personales."]}
                    benefits={["Ebook 'El arte del café' (valorado en 16 euros).", "Descuento del 10% en compras de café en la tienda durante el mes siguiente.", "Conocerás las características y diferencias entre distintos tipos de café y podrás desarrollar tus habilidades de cata."]}
                />

                <TastingOption
                    image={iconVip}
                    title="Cata Exclusive: 'Experiencia gourmet de café'"
                    duration="120-180 minutos"
                    content={["Precio: 50-75€ por persona", "Presentación de 7-8 cafés exclusivos y de alta calidad.", "Explicación exhaustiva de cada café, incluyendo su origen, proceso de producción, características organolépticas, notas de cata y puntuación en la escala de puntos de la Specialty Coffee Association.", "Degustación de cada café, con oportunidad para que los participantes compartan sus impresiones y preguntas.", "Moliendas personalizadas: explicación de cómo crear moliendas personalizadas para cada tipo de café según el paladar de cada uno, y cómo afectan el sabor y la textura del café.", "Sesión de preguntas y respuestas con un experto en café."]}
                    benefits={["Ebook 'El arte del café' (valorado en 16 euros).", "Descuento del 15% en compras de café en la tienda durante el mes siguiente.", "Acceso exclusivo a eventos de degustación de café y lanzamientos de nuevos productos.", "Conocerás las características y diferencias entre distintos tipos de café y podrás desarrollar tus habilidades de cata de manera avanzada.", "Te inscribirás automáticamente en la comunidad de Mr. Coffee con beneficios exclusivos adicionales."]}
                />
            </div>
        </div>
    );
};

export default TastingPage;
