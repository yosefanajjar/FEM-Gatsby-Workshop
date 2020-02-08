import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const about = () => {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>This is a personal site</p>
      <Link to="/">&larr; back to home</Link>
    </Layout>
  );
};

export default about;
