/* JMJ */
import React from 'react';
import PostList from './PostList';
import PostListFilters from './PostListFilters';

const HomePage = () => (
  <div>
    <div className="list-filters">
      <PostListFilters />
    </div>
    <div className="list-body">
      <PostList />
    </div>
  </div>
);

export default HomePage;