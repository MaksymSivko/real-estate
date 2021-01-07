import React from 'react';
import { Link } from 'react-router-dom';
import { menuData } from '../../data/MeduData';
import { Button } from '../Button/Button';
import { FaTimes } from 'react-icons/fa';

import './style.scss';

export const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div className="dropdown">
      <div
        className="dropdown__container"
        onClick={toggle}
        style={{
          opacity: `${isOpen ? '1' : '0'}px`,
          top: `${isOpen ? '0' : '-100'}%`,
        }}
      >
        <div className="dropdown__icon" onClick={toggle}>
          <FaTimes />
        </div>
        <div className="dropdown__wrap">
          <div className="dropdown__menu">
            {menuData.map((elem, index) => (
              <Link
                className="dropdown__menu-link"
                key={`dropdown__menu-link-key-${index}`}
                to={elem.link}
              >
                {elem.title}
              </Link>
            ))}
          </div>
          <div className="dropdown__wrap-btn">
            <Button
              link="/contact"
              title="Contact"
              big={false}
              // primary={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
