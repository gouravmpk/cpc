import React from 'react';
import '../../App.css';
import { Button } from './Button';

export default function Services() {
  return (
    <div className='hero-container'>
    <video src='/videos/sanit_video.mp4' autoPlay loop />
    <div className='hero-btns'>
      <Button
        className='btns'
        buttonStyle='btn--outline'
        buttonSize='btn--large'
      >
        Book Now
      </Button>
    </div>
  </div>
);
}
