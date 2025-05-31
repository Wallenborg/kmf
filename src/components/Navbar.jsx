

import { RiShoppingCart2Fill } from 'react-icons/ri';
import './Navbar.css';

const Navbar = ({ cartCount, onToggleCart }) => {
  return (
    <nav className="navbar">
   
      <div className="navbar__inner">
        <h4 className="navbar_text">K.M.F</h4>
        <button
          className="navbar_cart-button"
          onClick={onToggleCart}
          aria-label="Toggle Cart"
        >
          {cartCount > 0 && (
            <span className="navbar_cart-badge">{cartCount}</span>
          )}
          <RiShoppingCart2Fill size={28} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;




