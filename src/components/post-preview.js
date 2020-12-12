import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/react';
import Image from 'gatsby-image';
import { ReadLink } from './read-link';

export default function PostPreview({ post }) {
  return (
    <article
      css={css`
        border-bottom: 1px solid #ddd;
        margin-top: 0.75rem;
        padding-bottom: 1rem;
        display: flex;
        align-items: center;

        :first-of-type {
          margin-top: 1rem;
        }
      `}
    >
      <Link
        to={post.slug}
        css={css`
          margin: 1rem 1rem 0 0;
          width: 100px;
        `}
      >
        <Image
          fluid={post.image.sharp.fluid}
          alt={post.alt}
          css={css`
            * {
              margin-top: 0;
            }
          `}
        />
      </Link>
      <div>
        <h3>
          <Link to={post.slug}>{post.title}</Link>
        </h3>
        <p>{post.excerpt}</p>
        <ReadLink to={post.slug}>read the whole post &rarr;</ReadLink>
      </div>
    </article>
  );
}
