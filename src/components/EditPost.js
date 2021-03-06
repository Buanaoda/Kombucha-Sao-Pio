/* JMJ */
import React from 'react';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import { startEditPost, startRemovePost } from '../actions/posts';

export class EditPost extends React.Component {
  onSubmit = (post) => {
    this.props.startEditPost(this.props.post.id, post);
    this.props.history.push('/dashboard');
  };
  onRemove = () => {
    this.props.startRemovePost({ id: this.props.post.id });
    this.props.history.push('/dashboard');
  };
  render() {
    return (
      <div className="content-container">
        <div className="content-container__edit-post">
          <h1>Editar post</h1>
          <PostForm
            post={this.props.post}
            onSubmit={this.onSubmit}
          />
          <button 
            onClick={this.onRemove}
            className="button"
          >
            Deletar post
          </button>
        </div>
      </div>
    );
  };
};

const mapStateToProps = (state, props) => ({
  post: state.posts.find((post) => post.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditPost: (id, post) => dispatch(startEditPost(id, post)),
  startRemovePost: (data) => dispatch(startRemovePost(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);


