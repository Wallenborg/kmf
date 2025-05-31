import React from 'react';
import './TextBlock.css';

const TextBlock = ({ children }) => {
  return (
    <section className="text-block">
      {children}
    </section>
  );
};

export default TextBlock;
