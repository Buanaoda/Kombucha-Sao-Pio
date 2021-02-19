/* JMJ */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral'
import "numeral/locales/pt-br";
numeral.locale('pt-br');


const PostItem = ({ id, isAuthenticated, title, text, createdAt, pictureUrl }) => (
  <div>
    <Link to={isAuthenticated ? `/editpost/${id}` : `/post/${id}`} 
      style={{ textDecoration: 'none' }}
    >
      <div className="list-item-card">
        <div className="list-item-content">
          <div className="list-item-picture">
            <img className="list-item__picture" src={pictureUrl} />
          </div>
          <div className="list-item-title-text">
            <h1 className="list-item-title">{title}</h1>
            <p className="list-item__text">{text}</p>
          </div>
        </div>
        <div className="list-item-date">
          <p className="list-item__date">{moment(createdAt).format('DD/MM/yyyy')}</p>
        </div>
      </div>
    </Link>
  </div>
);

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.uid
});

export default connect(mapStateToProps)(PostItem);