import React from 'react';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';

import { SliderDataOne } from './data/SliderData';

export const App = () => {
  return (
    <>
      <Navbar />
      <Hero slides={SliderDataOne} />
    </>
  );
};
