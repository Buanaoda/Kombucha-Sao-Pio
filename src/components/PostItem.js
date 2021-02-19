/* JMJ */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral'
import "numeral/locales/pt-br";
numeral.locale('pt-br');


const PostItem = ({ id, isAuthenticated, title, text, createdAt }) => (
  <div>
    <Link to={
      isAuthenticated ? `/editpost/${id}` : `/post/${id}`
    }>
      <h1>Title: {title}</h1>
      <p>id: {id}</p>
      <p>text: {text}</p>
      <p>createdAt: {moment(createdAt).format('DD/MM/yyyy')}</p>
    </Link>
  </div>
);

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.uid
});

export default connect(mapStateToProps)(PostItem);