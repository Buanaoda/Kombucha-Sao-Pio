/* JMJ */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AdminMenu from './AdminMenu';
import Menu from './Menu';

const Header = ({ isAuthenticated }) => (
  <div>
    <header className="header">
      <div className="content-container">
        <div className="header__content">
          <div className="header__title-and-image">
            <Link to="/about">
              <img src="/images/kombucha-icon.png" />
            </Link>
            <Link className="header__title" to="/dashboard">
              <h1>Kombucha São Pio</h1>
            </Link>
          </div>
        </div>
        {isAuthenticated ? <AdminMenu /> : <Menu />}
      </div>
    </header>
    <div className="header-divider"></div>
  </div>
);

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.uid
});

export default connect(mapStateToProps)(Header);