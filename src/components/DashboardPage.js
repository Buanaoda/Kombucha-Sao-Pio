/* JMJ */
import React from 'react';
import PostList from './PostList';
import PostListFilters from './PostListFilters';

const DashboardPage = () => (
  <div className="content-container">
    <h1>Dashboard</h1>
    <PostListFilters />
    <PostList />
  </div>
);

export default DashboardPage;