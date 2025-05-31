import { RiShoppingBasket2Fill } from 'react-icons/ri';
import products from '../data/products';
import './ProductContainer.css';

const ProductContainer = ({ id, onAddToCart }) => {
  const product = products.find((p) => p.id === id);

  if (!product) {
    return null;
  }

  return (
    <div className="product-container">
   
      <img
        src={product.image}
        alt={product.title}
        className="product-container__image"
        loading="lazy"
      />

     
      <div className="product-container__title">
        {product.title}
      </div>

    
      <button
  className="product-container__add-button"
  onClick={(e) => {
    onAddToCart(product.id);
    e.currentTarget.blur(); 
  }}
  aria-label={`Add ${product.title} to cart`}
>
        <RiShoppingBasket2Fill size={24} />
      </button>
    </div>
  );
};

export default ProductContainer;


