import React from 'react';
import { Global, css } from '@emotion/react';
import Helmet from 'react-helmet';
import Header from './header';
import { useSiteMetaData } from '../hooks/use-metadata';

const Layout = ({ children }) => {
  const { title, description } = useSiteMetaData();

  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          /*
            * Lobotomized Owls
            Every immidiate sibling going to get this style
            This normalizes vertical spacing, in way that we do not need to use really elaborate reset
            like - normalize.css
           */
          * + * {
            margin-top: 1rem;
          }

          html,
          body {
            margin: 0;
            color: #555;
            font-family: 'Lato', sans-serif;
            font-size: 18px;
            line-height: 1.4;

            /* remove margin for the main div that Gatsby mounts into, (<div id="_gatsby"></div>) */
            > div {
              margin-top: 0;
            }
          }

          h1,
          h2,
          h3,
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
          max-width: 550px;
          width: 90vw;
        `}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
