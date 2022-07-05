import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <div className="h-container">
      <div className="h-row">
        <div className="h-col">
          <Link to="/">Otelzer</Link>
          <p>
            <small>...Best Booking Site</small>
          </p>
        </div>
        <div className="h-col">
          <button>Register</button>
          <button>Log In</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
