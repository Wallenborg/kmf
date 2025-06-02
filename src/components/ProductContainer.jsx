import { useState } from "react";
import { RiShoppingBasket2Fill } from "react-icons/ri";
import products from "../data/products";
import "./ProductContainer.css";

const ProductContainer = ({ id, onAddToCart }) => {
  const product = products.find((p) => p.id === id);
  const [showConfirmation, setShowConfirmation] = useState(false);

  if (!product) {
    return null;
  }

  const handleAddClick = (e) => {
    onAddToCart(product.id);
    setShowConfirmation(true);
    e.currentTarget.blur();
    setTimeout(() => {
      setShowConfirmation(false);
    }, 1000);
  };

  return (
    <div className="product-container">
      <img
        src={product.image}
        alt={product.title}
        className="product-container__image"
        loading="lazy"
      />

      <div className="product-container__title">{product.title}</div>

      <div className="product-container__bottom-row">
        <div className="product-container__price">{product.price} SEK</div>

        <div className="product-container__button-wrapper">
          {showConfirmation && (
            <span className="product-container__confirmation">
              Added to cart
            </span>
          )}
          <button
            className="product-container__add-button"
            onClick={handleAddClick}
            aria-label={`Add ${product.title} to cart`}
          >
            <RiShoppingBasket2Fill size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;
