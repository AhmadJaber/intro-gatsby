import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <h3>Home</h3>
      <p>Hello Jane!!! Doe</p>
      <Link to="/about/">Learn about me. &rarr;</Link>
    </Layout>
  );
}
