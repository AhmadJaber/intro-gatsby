import React from 'react';
import { css } from '@emotion/react';
import Layout from '../components/layout';
import { ReadLink } from '../components/read-link';

export default function PostTemplate() {
  return (
    <Layout>
      <h1>post title</h1>
      <p
        css={css`
          font-size: 0.75rem;
        `}
      >
        post (author)
      </p>
      <p>post body</p>
      <ReadLink to="/">&larr; back to all posts</ReadLink>
    </Layout>
  );
}
