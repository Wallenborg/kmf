import products from '../data/products';
import './SingleProductImage.css';

const SingleProductImage = ({ id }) => {
  const product = products.find((p) => p.id === id);
  if (!product) return null;

  return (
    <div className="single-product-container">
      <img
        src={product.image}
        alt={product.title}
        className="single-product-image"
        loading="lazy"
      />
    </div>
  );
};

export default SingleProductImage;
