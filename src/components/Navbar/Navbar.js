import React from 'react';
import { Link } from 'react-router-dom';
import { menuData } from '../../data/MeduData';
import { Button } from '../Button/Button';
import Bars from '../../images/bars.svg';

import './style.scss';

export const Navbar = ({ toggle }) => {
  return (
    <div className="nav">
      <div className="nav__wrap">
        <div className="nav__logo">
          <Link to="#">REAL</Link>
        </div>
        <div
          className="nav__menu-bars"
          style={{ backgroundImage: `url(${Bars})` }}
          onClick={toggle}
        ></div>
        <div className="nav__menu">
          {menuData.map((elem, index) => (
            <Link
              className="nav__menu-link"
              key={`nav__menu-link-key-${index}`}
              to={elem.link}
            >
              {elem.title}
            </Link>
          ))}
        </div>

        <div className="nav__btn">
          <Button link="/contact" title="Contact" />
        </div>
      </div>
    </div>
  );
};
