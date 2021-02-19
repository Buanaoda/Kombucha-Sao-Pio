/* JMJ */
import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import numeral from 'numeral'
import "numeral/locales/pt-br";
numeral.locale('pt-br');

export class PostItemPage extends React.Component {
  render () {
    return (
      <div className="content-container">
        <h1>Title: {this.props.post.title}</h1>
        <p>id: {this.props.post.id}</p>
        <p>text: {this.props.post.text}</p>
        <p>createdAt: {moment(this.props.post.createdAt).format('DD/MM/yyyy')}</p>
        <img src={this.props.post.pictureUrl}/>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  post: state.posts.find((post) => post.id === props.match.params.id)
});

export default connect(mapStateToProps)(PostItemPage);