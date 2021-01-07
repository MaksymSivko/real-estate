import React, { useState } from 'react';
import { Dropdown } from './components/Dropdown/Dropdown';
import { Hero } from './components/Hero/Hero';
import { InfoSection } from './components/InfoSection/InfoSection';
import { Navbar } from './components/Navbar/Navbar';

import { SliderDataOne } from './data/SliderData';

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderDataOne} />
      <InfoSection />
    </>
  );
};
