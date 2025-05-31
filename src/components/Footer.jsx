

import './Footer.css';

const Footer = () => {
  const text = "Socialism's dead... here's the startin' of the sequel!";
  const letters = Array.from(text);

  return (
    <footer className="footer">
      <p className="footer__title">
        {letters.map((char, idx) => (
          <span key={idx} className="footer__letter">
            {char}
          </span>
        ))}
      </p>
      <div className="footer__contact">
        Contact: info@niklaswallenborg.com
      </div>
    </footer>
  );
};

export default Footer;


