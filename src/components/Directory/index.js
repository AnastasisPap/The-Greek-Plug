import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Directory = props => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${"https://i.ibb.co/54GhjdC/ww.webp"})`
          }}
        >
          <Link to="/search/shoes">
            Walter White
          </Link>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${"https://i.ibb.co/54GhjdC/ww.webp"})`
          }}
        >
          <Link to="/search/clothing">
            Walter White
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Directory;
