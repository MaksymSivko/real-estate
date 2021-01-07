import React, { useState, useRef, useEffect } from 'react';
import { Button } from '../Button/Button';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';

import './style.scss';

export const Hero = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  // useEffect(() => {
  //   const nextSlide = () => {
  //     setCurrent((current) => (current === length - 1 ? 0 : current + 1));
  //   };

  //   timeout.current = setTimeout(nextSlide, 4000);

  //   return function () {
  //     if (timeout.current) {
  //       clearTimeout(timeout.current);
  //     }
  //   };
  // }, [current, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
    // console.log('next', current);
  };
  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === 0 ? length - 1 : current - 1);
    // console.log('prev', current);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="hero">
      <div className="hero__wrap">
        {slides.map((el, index) => (
          <div className="hero__slide" key={`hero__slide-key-${index}`}>
            {index === current && (
              <div className="hero__slider">
                <img className="hero__image" src={el.image} alt={el.alt} />

                <div className="hero__content">
                  <h1 className="hero__content-title">{el.title}</h1>
                  <div className="hero__content-price">{el.price}</div>
                  <Button link={el.path} title={el.label} />
                </div>
              </div>
            )}
          </div>
        ))}
        <div className="hero__slider-btn">
          <div className="slider-btn__arrow btn-prev" onClick={prevSlide}>
            <IoArrowBack />
          </div>
          <div className="slider-btn__arrow btn-next" onClick={nextSlide}>
            <IoArrowForward />
          </div>
        </div>
      </div>
    </div>
  );
};
