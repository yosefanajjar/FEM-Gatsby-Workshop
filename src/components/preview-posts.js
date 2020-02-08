import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import ReadLink from './read-link';

const PostPreview = ({ post }) => (
  <article
    css={css`
      border-bottom: 1px solid #ddd;
      margin-top: 0;
      padding-top: 1rem;
      display: flex;

      :first-child {
        margin-top: 1rem;
      }
    `}
  >
    <Link
      to={post.slug}
      css={css`
        margin: 1rem 1rem 00;
        width: 100px;
      `}
    >
      <Image
        fluid={post.image.sharp.fluid}
        css={css`
          * {
            margin-top: 0;
          }
        `}
        alt={post.title}
      />
    </Link>
    <div>
      <h3>
        <Link to={post.slug}>{post.title}</Link>
      </h3>
      <p>{post.excerpt}</p>
      <ReadLink to={post.slug}>Read more &rarr;</ReadLink>
    </div>
  </article>
);

export default PostPreview;
