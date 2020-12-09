import React from 'react';
import { Link } from 'gatsby';

export default function About() {
  return (
    <>
      <h3>About Me</h3>
      <p>I am an asshole</p>
      <Link to="/">&larr; Back to Home.</Link>
    </>
  );
}
