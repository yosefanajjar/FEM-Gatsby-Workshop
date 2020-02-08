import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../layout';
import ReadLink from '../read-link';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <h1>{post.frontmatter.title}</h1>
    <p
      css={css`
        font-size: 0.75rem;
      `}
    >
      posted by {post.frontmatter.author}
    </p>
    <MDXRenderer>{post.body}</MDXRenderer>
    <ReadLink to="/">&larr; back to all posts</ReadLink>
  </Layout>
);

export default PostTemplate;
