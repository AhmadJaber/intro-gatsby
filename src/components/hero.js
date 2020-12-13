import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';

const ImageBackground = styled(BackgroundImage)`
  background-position: top 20% center;
  background-size: cover;
  height: 50vh;

  + * {
    margin-top: 0;
  }
`;

const TextBox = styled('div')`
  background-image: linear-gradient(to top, #ddbbffdd 2rem, #ddbbff00);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  padding: 0 calc((100vw - 550px) / 2) 2rem;
  width: 100%;
  margin-top: 0;

  h1 {
    text-shadow: 1px 1px 3px #581b98;
    font-size: 2.25rem;
  }
  p,
  a {
    color: #222;
    margin-top: 0;
  }
  a {
    margin-top: 0.5rem;
  }
`;

export default function Hero() {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "jonathan-riley-mn.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  // fadeIn="soft" causes a nice little blur in functionality.
  return (
    <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <TextBox>
        <h1>Frontend Masters + Gatsby &hearts;</h1>
        <p>
          Hello Minnesota! <Link to="/about/">Learn about me &rarr;</Link>
        </p>
      </TextBox>
    </ImageBackground>
  );
}
