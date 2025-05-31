
import './Hero.css';

const Hero = () => {
 
  const text = 'KARL MARX FASHION';
  const letters = Array.from(text);

  return (
    <section className="hero">
      <h1 className="hero__title">
        {letters.map((char, idx) => (
          <span key={idx} className="hero__letter">
            {char}
          </span>
        ))}
      </h1>
    </section>
  );
};

export default Hero;

