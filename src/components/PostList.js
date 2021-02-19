/* JMJ */
import React from 'react';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import selectPosts from '../selectors/posts';

const PostList = (props) => {
  return (
    <div className="content-container">
      <h1>Post List..</h1>
      {
        props.posts.length === 0 ? ( "Não há Posts.") : 
          (
            props.posts.map((post) => {
              return <PostItem key={post.id} {...post} />;
            })
          )
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: selectPosts(state.posts, state.filters)
  };
};

export default connect(mapStateToProps)(PostList);