
import { useState, useEffect } from 'react';
import products from '../data/products';
import './Cart.css';
import emailjs from '@emailjs/browser';

const Cart = ({
  items = [],
  onRemoveItem,
  onUpdateSize,
  isOpen,
  onClose,
  onClearCart,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [statusError, setStatusError] = useState(false);


  const allSizesChosen = items.every((item) => item.size && item.size.length > 0);


  const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };


  const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const USER_ID     = import.meta.env.VITE_EMAILJS_USER_ID;

  
  useEffect(() => {
    if (!isOpen) {
      setStatusMessage('');
      setStatusError(false);
      setCustomerName('');
      setCustomerEmail('');
    }
  }, [isOpen]);

 
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

 
  const generateMailBody = () => {
    let body = '';
    items.forEach((item, idx) => {
      body += `${idx + 1}. ${item.title} – Size: ${item.size}\n`;
    });
    return body;
  };

  const handleSendOrder = (e) => {
    e.preventDefault();
    setStatusMessage('');
    setStatusError(false);

    if (!allSizesChosen) {
      setStatusError(true);
      setStatusMessage('Please choose a size for every item before sending your order.');
      return;
    }
    if (!customerName.trim() || !customerEmail.trim() || !isValidEmail(customerEmail)) {
      setStatusError(true);
      setStatusMessage('Please enter a valid name and email address before sending your order.');
      return;
    }

    const templateParams = {
      to_email: 'info@niklaswallenborg.com',
      from_name: customerName,
      from_email: customerEmail,
      message: generateMailBody(),
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then(
        () => {
          setStatusError(false);
          setStatusMessage('Thank you! Your order has been sent.');
    
          if (typeof onClearCart === 'function') {
            onClearCart();
          }
       
          setTimeout(() => {
            onClose();
          }, 1000);
        },
        () => {
          setStatusError(true);
          setStatusMessage('An error occurred while sending your order. Please try again later.');
        }
      );
  };


  const readyToSend =
    items.length > 0 &&
    allSizesChosen &&
    customerName.trim().length > 0 &&
    isValidEmail(customerEmail);

  return (
    <div
      className={`cart-overlay ${isOpen ? 'open' : ''}`}
      onClick={onClose}
    >
      <div
        className={`cart-panel ${isOpen ? 'open' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
    
        <div className="cart-panel__header">
          <h3>Your Cart</h3>
          <button className="cart-panel__close-btn" onClick={onClose}>
            &times;
          </button>
        </div>

      
        {items.length === 0 ? (
          <p className="cart-empty">Your cart is empty.</p>
        ) : (
          <ul className="cart-list">
            {items.map((item, index) => {
              const prod = products.find((p) => p.id === item.id);
              const availableSizes = prod?.sizes || [];
              return (
                <li key={`${item.id}-${index}`} className="cart-list__item">
                  <div className="cart-item__info">
                    <strong>{item.title}</strong>
                  </div>
                  <div className="cart-item__size">
                    <label>
                      Size:
                      <select
                        value={item.size}
                        onChange={(e) => onUpdateSize(index, e.target.value)}
                      >
                        <option value="" disabled>
                          Select...
                        </option>
                        {availableSizes.map((size) => (
                          <option key={size} value={size}>
                            {size}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                  <button
                    className="cart-list__remove"
                    onClick={() => onRemoveItem(index)}
                  >
                    Remove
                  </button>
                </li>
              );
            })}
          </ul>
        )}

      
        <div className="cart-form">
          <label>
            Name:
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="Your full name"
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </label>
        </div>

  
        <div className="cart-send-wrapper">
          {readyToSend && (
            <button
              className="cart-send-button"
              onClick={handleSendOrder}
            >
              Send Order
            </button>
          )}
        </div>

      
        {statusMessage && (
          <div
            className={`cart-status ${
              statusError ? 'cart-status--error' : 'cart-status--success'
            }`}
          >
            {statusMessage}
          </div>
        )}

      
        <div className="cart-footer-text">
          <p>
            All T-shirts are made from organic cotton, available in unisex sizes.
            Since we're a one-person, underground print-on-demand operation, expect about a month for delivery.
          </p>
          <p>
            Each T-shirt costs 450 SEK plus around 60 SEK for shipping.
          </p>
          <p>
            Thanks for supporting us!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;

