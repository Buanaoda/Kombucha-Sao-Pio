/* JMJ */
import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import numeral from 'numeral'
import "numeral/locales/pt-br";
numeral.locale('pt-br');
import MiniAbout from './MiniAbout';

export class PostItemPage extends React.Component {
  render() {
    return (
      <div className="content-container">
        <div className="content-container__item-page">
          <h1>{this.props.post.title}</h1>
          <div className="created-at-text">
            <p>{moment(this.props.post.createdAt).format('DD.MM.yyyy')}</p>
          </div>
          <img src={this.props.post.pictureUrl} />
          <p>{this.props.post.text}</p>
        </div>
        <MiniAbout />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  post: state.posts.find((post) => post.id === props.match.params.id)
});

export default connect(mapStateToProps)(PostItemPage);