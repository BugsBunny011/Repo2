import React from 'react';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; // Adjust offset if you have a fixed header
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  return (
    <div className='hero-container'>
      <video src='/Final Videos/HeroVideo.mp4' autoPlay loop muted />
      <h1>SKY IS THE LIMIT</h1>

      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={(e) => {
            e.preventDefault();
            const section = document.querySelector('#cards-section');
            scrollWithOffset(section);
          }}
        >
          LEARN MORE
        </Button>
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
          GET A QUOTE
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
