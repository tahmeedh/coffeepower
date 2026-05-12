import './styles.scss';
import SlideShow from '../../components/SlideShow/SlideShow';
import coffeesCatalogue from '../../data/coffee';

const CafesCasa = () => {
const cafesMasVendidos = coffeesCatalogue
  .filter(cafe => cafe.tags.includes("mas-vendido"))
  .sort((a, b) => a.orderSell - b.orderSell);

    return (
        <div className='cafes-casa'>
            <div className="cafes-casa__block2 gallery-block">
                <h1 className='cafes-casa__title'>Los Más Vendidos</h1>
                <p className='cafes-casa__legend'>"La elección de miles de personas que aman comenzar su día con fuerza y sabor."</p>
                <SlideShow items={cafesMasVendidos} />
            </div>
        </div>
    )
}

export default CafesCasa