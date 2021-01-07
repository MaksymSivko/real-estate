import React from 'react';
import { Button } from '../Button/Button';

import './style.scss';

export const Hero = ({ slides }) => {
  return (
    <div className="hero">
      <div className="hero__wrap">
        {slides.map((el, index) => (
          <div className="hero__slide" key={`hero__slide-key-${index}`}>
            <div className="hero__slider">
              <div className="hero__image">
                <img src={el.image} alt={el.alt} />
              </div>
              <div className="hero__content">
                <div className="hero__content-title">{el.title}</div>
                <div className="hero__content-price">{el.price}</div>
                <Button link={el.path} title={el.label} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
