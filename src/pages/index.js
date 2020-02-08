import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/preview-posts';
import Hero from '../components/hero';
import Insta from '../components/insta';

export default () => {
  const posts = usePosts();

  return (
    <>
      <Hero />
      <Layout>
        <h1>Hello</h1>
        <p>Hello World</p>
        <Link to="/about/">learn more &rarr;</Link>

        <h2>Read my blog</h2>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
        <Insta />
      </Layout>
    </>
  );
};
