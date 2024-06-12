import React, { useState, useEffect } from 'react';
import '../assets/styles/SideButtons.css';

const SideButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector('.header').offsetHeight;
      if (window.scrollY > heroHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`side-buttons ${isVisible ? 'visible' : ''}`}>
      <a href="https://github.com/geoffreybudiman91" className="side-button github">
        <i className="fab fa-github fa-2x"></i>
      </a>
      <a href="https://linkedin.com/in/geoffreybudiman" className="side-button linkedin">
        <i className="fab fa-linkedin fa-2x"></i>
      </a>
      <a href="mailto:geoffrey.budiman@example.com" className="side-button email">
        <i class="fa-regular fa-envelope fa-2x"></i>
      </a>
    </div>
  );
};

export default SideButtons;
