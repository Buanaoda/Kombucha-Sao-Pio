/* JMJ */
import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
  <div className="menu">
    <div>
      <Link className="menu-item" to="/">Home</Link>
      <Link className="menu-item" to="/about">About</Link>
      <Link className="menu-item" to="/patreon">Patreon</Link>
      <Link className="menu-item" to="/kombucha">kombucha</Link>
    </div>
    <div>
      <Link className="menu-login" to="/login">AdminArea</Link>
    </div>
  </div>
);

export default Menu;