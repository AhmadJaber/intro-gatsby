import React from 'react';
import { Link } from 'gatsby';

export default function Home() {
  return (
    <div>
      <h3>Home</h3>
      <p>Hello Jane!!! Doe</p>
      <Link to="/about/">Learn about me. &rarr;</Link>
    </div>
  );
}
