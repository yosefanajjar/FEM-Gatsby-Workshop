import React from 'react';
/** @jsx jsx */
import { jsx, Global, css } from '@emotion/core';
import Helmet from 'react-helmet';
import Header from './header.jsx';
import useSiteMetadata from '../hooks/use-sitemetadata';

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          * + * {
            margin-top: 1rem;
          }

          html,
          body {
            margin: 0;
            color: #555;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
              sans-serif;
            font-size: 18px;
            line-height: 1.4;

            /* remove styles for the main div that gatsby mounts into */
            > div {
              margin-top: 0;
            }

            h1,
            h2,
            h3,
            h4,
            h4,
            h5,
            h6 {
              color: #222;
              line-height: 1.1;

              + * {
                margin-top: 0.5rem;
              }
            }

            strong {
              color: #222;
            }

            li {
              margin-top: 0.25rem;
            }
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <main
        css={css`
          margin: 2rem auto 4rem;
          min-width: 90vw;
          width: 600px;
        `}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
