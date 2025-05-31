
import ProductContainer from './ProductContainer';
import './TwoProductRow.css';


const TwoProductRow = ({ id1, id2, onAddToCart }) => {
  return (
    <div className="two-product-row">
      <div className="two-product-row__item">
        <ProductContainer id={id1} onAddToCart={onAddToCart} />
      </div>
      <div className="two-product-row__item">
        <ProductContainer id={id2} onAddToCart={onAddToCart} />
      </div>
    </div>
  );
};

export default TwoProductRow;

