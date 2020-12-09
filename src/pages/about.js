import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default function About() {
  return (
    <Layout>
      <h3>About Me</h3>
      <p>I am an asshole</p>
      <Link to="/">&larr; Back to Home.</Link>
    </Layout>
  );
}
