
import ProductContainer from './ProductContainer';
import './ThreeProductRow.css';


const ThreeProductRow = ({ id1, id2, id3, onAddToCart }) => {
  return (
    <div className="three-product-row">
      <div className="three-product-row__item">
        <ProductContainer id={id1} onAddToCart={onAddToCart} />
      </div>
      <div className="three-product-row__item">
        <ProductContainer id={id2} onAddToCart={onAddToCart} />
      </div>
      <div className="three-product-row__item">
        <ProductContainer id={id3} onAddToCart={onAddToCart} />
      </div>
    </div>
  );
};

export default ThreeProductRow;
