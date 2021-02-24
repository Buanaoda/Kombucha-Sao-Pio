/* JMJ */
import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
  <div className="menu">
    <div>
      <Link className="menu-item" to="/">Home</Link>
      <Link className="menu-item" to="/about">Sobre</Link>
      <Link className="menu-item" to="/patreon">Pio</Link>
      <Link className="menu-item" to="/kombucha">Kombucha</Link>
    </div>
    <div className="admin-area">
      <Link className="menu-login" to="/login">AdminArea</Link>
    </div>
  </div>
);

export default Menu;