import React from 'react';
import { css } from '@emotion/react';
import Image from 'gatsby-image';
import { useInstagram } from '../hooks/use-instagram';

export default function Insta() {
  const instaPhotos = useInstagram();

  return (
    <>
      <h2>Instagram posts from @liverpoolfc</h2>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin: 1rem -0.5rem;
          padding: 0.5rem 0;
        `}
      >
        {instaPhotos.map((photo) => (
          <a
            href={`http://instagram.com/p/${photo.id}/`}
            css={css`
              box-shadow: 0;
              display: block;
              margin: 0.5rem;
              max-width: calc(33% - 1rem);
              width: 120px;
              transition: 200ms box-shadow linear;

              :focus,
              :hover {
                box-shadow: 0 2px 14px #22222244;
                z-index: 10;
              }
            `}
          >
            <Image
              key={photo.id}
              fluid={photo.fluid}
              alt={photo.caption}
              css={css`
                width: 100%;

                * {
                  margin-top: 0;
                }
              `}
            />
          </a>
        ))}
      </div>
      <a href={`https://instagram.com/liverpoolfc/`}>
        See more on Instagram &rarr;
      </a>
    </>
  );
}
