/* JMJ */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const AdminMenu = ({ startLogout }) => (
  <div className="menu">
    <div>
      <Link className="menu-item" to="/dashboard">Dashboard</Link>
      <Link className="menu-item" to="/newpost">Criar novo Post</Link>
    </div>
    <div>
      <button className="menu-login" onClick={startLogout}>Logout</button>    
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(AdminMenu);