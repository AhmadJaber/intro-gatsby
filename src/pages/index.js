import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import PostPreview from '../components/post-preview';
import usePosts from '../hooks/use-posts';

export default function Home() {
  const posts = usePosts();

  return (
    <Layout>
      <h2>Home</h2>
      <p>Hello Jane!!! Doe</p>
      <Link to="/about/">Learn about me. &rarr;</Link>

      <h3>Read my posts!!</h3>
      {posts.map((post) => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  );
}
