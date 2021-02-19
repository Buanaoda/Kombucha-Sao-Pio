/* JMJ */
import React from 'react';
import PostList from './PostList';
import PostListFilters from './PostListFilters';

const HomePage = () => (
  <div className="content-container">
    <h1>Home page content</h1>
    <PostListFilters />
    <PostList />
  </div>
);

export default HomePage;