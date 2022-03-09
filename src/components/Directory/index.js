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
            backgroundImage: `url(${"https://i.ibb.co/jMB005J/shoes.jpg"})`
          }}
        >
          <Link to="/search/shoes">
            Shop shoes
          </Link>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${"https://i.ibb.co/S7h29y6/sup.jpg"})`
          }}
        >
          <Link to="/search/clothing">
            Shop clothing
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Directory;
