import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

export const Button = ({ link, title, big = true, primary = true }) => {
  const backgroundColor = primary ? '#000d1a' : '#CD853F';
  const color = primary ? '#fff' : '#000d1a';
  const fontSize = big ? '14px' : '20px';
  const padding = big ? '14px 24px' : '16px 40px';

  return (
    <Link
      className="bnt-link"
      to={link}
      style={{
        padding: `${padding}`,
        fontSize: `${fontSize}`,
        background: `${backgroundColor}`,
        color: `${color}`,
      }}
    >
      {title}
    </Link>
  );
};
